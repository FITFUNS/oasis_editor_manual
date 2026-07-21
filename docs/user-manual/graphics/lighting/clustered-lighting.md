---
title: 클러스터드 조명 (Clustered Lighting)
---

<!-- :::note

클러스터드 조명은 OasisW 엔진 v1.56부터 기본적으로 활성화됩니다. 이전 조명 시스템은 단기적으로 엔진에서 계속 사용할 수 있습니다. 하지만 향후 마이너 릴리스에서 폐기될 예정입니다.

::: -->

조명은 애플리케이션을 더 사실적으로 보이게 하는 좋은 방법입니다. 하지만 실시간 조명은 성능을 많이 잡아먹을 수 있는데, 특히 그림자를 만드는 조명이 많을수록 부담이 커집니다.

이 성능 부담을 줄이는 한 가지 방법은 메시 하나에 영향을 주는 조명 개수를 제한하는 것입니다. 보통 각 객체 가까이에 있는 조명만 골라서 쓰는 방식으로 구현합니다. 하지만 이 방식에는 몇 가지 단점이 있습니다:

- 객체마다 사용하는 조명 조합이 다를 수 있어서, 그때그때 맞는 셰이더를 따로 컴파일해야 합니다.
- 이 방식이 잘 통하려면 큰 객체를 여러 작은 객체로 쪼개야 합니다.
- 그림자를 만드는 조명이 많으면, 셰이더가 그림자 맵에 쓸 텍스처 슬롯을 전부 써버릴 수 있습니다.

이런 문제를 풀기 위해 OasisW는 **클러스터드 조명**을 사용해 전방향 조명과 스팟 조명을 성능 좋게 처리합니다. 조명 정보를 텍스처에 담아두고, GPU가 지금 그리고 있는 픽셀 근처의 조명만 손쉽게 골라 쓰게 하는 방식입니다. 클러스터드 조명에는 다음과 같은 장점이 있습니다:

- 셰이더 하나가 여러 조명을 처리할 수 있어서, 씬에 조명을 넣거나 뺄 때마다 셰이더를 다시 컴파일할 필요가 없습니다.
- 각 픽셀 근처의 조명만 계산하므로, 씬에 많은 조명(그림자와 쿠키 포함)을 넣을 수 있습니다.

방향성 조명은 모든 객체에 영향을 주기 때문에 클러스터드 조명 방식을 쓰지 않습니다.

## 구현 개요 {#implementation-overview}

클러스터드 조명이 어떻게 동작하는지 큰 흐름을 단계별로 정리하면 다음과 같습니다:

1. 이 프레임에서 보이는 조명 목록을 추리기 위해, 카메라의 프러스텀(시야 범위) 기준으로 조명을 걸러냅니다(컬링).
2. 보이는 모든 조명을 감싸는 축 정렬 범위 위에 월드 공간 3D 그리드를 씌웁니다.

    ![3D Grid](/img/user-manual/graphics/lighting/lights/3d_grid.png)

3. 3D 그리드의 각 셀은 자신과 겹치는 조명의 인덱스를 저장합니다. CPU가 매 프레임 이 정보를 갱신하며, 어떤 위치든 그 위치에 영향을 주는 조명 목록을 가져올 수 있습니다. 이 정보는 텍스처에 담겨 GPU에서 쓸 수 있게 됩니다.
4. 보이는 모든 조명의 속성 값도 별도 텍스처에 저장되어 GPU에서 접근할 수 있습니다.
5. 그림자 맵과 쿠키 텍스처는 하나씩 따로 두는 대신 한 장의 아틀라스에 모아서 그리므로, 셰이더에서 이 모두에 한꺼번에 접근할 수 있습니다.
6. 프래그먼트 셰이더에서 조명을 계산할 때, 그 프래그먼트의 월드 공간 위치로 3D 그리드의 셀을 찾아 그 안에 저장된 조명만 계산합니다.

## 에디터 옵션 {#editor-options}

클러스터드 조명 옵션은 에디터 설정의 'Rendering' 항목에서 찾을 수 있습니다.

![Clustered Lighting Editor UI](/img/user-manual/graphics/lighting/lights/clustered_lighting_ui.png)

여기서 (이전 조명 시스템이 필요할 경우) 클러스터드 조명을 끌 수 있습니다. 또한 아래에서 설명하는 [성능 및 기능 조정](#tuning-clustered-lighting)도 여기서 할 수 있습니다.

## 클러스터드 조명 조정 {#tuning-clustered-lighting}

### 기능 활성화 {#enabling-features}

클러스터드 조명 셰이더는 지원되는 모든 조명 기능을 처리할 수 있어야 하므로, 그 기능들을 다루는 코드를 전부 담고 있습니다. 그래서 셰이더가 필요 이상으로 커지고 컴파일이 오래 걸릴 수 있습니다. 이를 덜기 위해, 애플리케이션에서 쓰지 않는 기능을 꺼서 셰이더 컴파일을 빠르게 만드는 옵션들이 준비되어 있습니다:

- **Shadows Enabled** – 그림자 지원을 켜거나 끕니다
- **Cookies Enabled** – 조명 쿠키 지원을 켜거나 끕니다
- **Area Lights Enables** – 영역 조명 지원을 켜거나 끕니다

### 3D 그리드 구성 {#configuring-the-3d-grid}

![3D Grid Configuration](/img/user-manual/graphics/lighting/lights/3d_grid_config.png)

**Cells** 속성은 각 월드 축을 따라 셀을 몇 개로 나눌지 정합니다. 보이는 모든 조명을 감싸는 축 정렬 경계 상자를, 지정한 개수만큼의 셀로 자동으로 잘게 나눕니다.

**Max Lights Per Cell** 속성은 셀 하나에 저장할 수 있는 조명의 최대 개수를 정합니다. 즉 한 셀에서 겹칠 수 있는 조명 수의 상한입니다. 그리드를 성기게(셀을 크게) 나누면 한 셀에 겹치는 조명이 많아지므로, 보통 이 값을 늘려줘야 합니다.

## 제한사항 {#limitations}

내부적으로 조명 인덱스는 8비트로 저장하기 때문에, 한 프레임에서 보일 수 있는 조명은 최대 254개입니다(인덱스 하나는 예약되어 있음). 앞으로 인덱스를 16비트로 저장해 이 한계를 늘리는 옵션이 추가될 수 있습니다.

## 성능 고려사항 {#performance-considerations}

- **셀 세분화**는 가능한 한 잘게 하는 것이 좋습니다. 셀이 크면 매 프레임 그리드를 조명으로 채울 때 CPU 부담이 커지기 때문입니다. 이 값은 조명 복잡도에 맞춰 씬마다 조정해야 합니다. 이상적으로는 조명 겹침과 셀당 조명 수를 적당히 제한할 만큼 충분한 셀을 두는 것이 좋습니다.
- **Max Lights Per Cell**은 가능한 한 작게 두는 것이 좋습니다. 이 값이 매 프레임 갱신되는 3D 그리드 텍스처의 크기를 결정하기 때문입니다.
- 클러스터드 조명을 쓰는 애플리케이션이 오래된 모바일 기기에서 **느리게 돈다면**, 그림자나 쿠키 같은 기능을 전체적으로 꺼보는 것을 고려하세요.

## 디버그 그리드 렌더링 {#render-debug-grid}

클러스터드 조명을 디버깅하거나 성능을 조정할 때 도움이 되도록, [Layer][pc-layer-api] ID를 [LightingParams의 debugLayer][pc-lighting-debug-layer-api]에 지정할 수 있습니다. 예:

```javascript
// 스크립트 타입에 있다고 가정
this.app.scene.lighting.debugLayer = this.app.scene.layers.getLayerByName("World").id;
```

렌더링을 멈추려면 `debugLayer` 속성에 `undefined`를 지정하세요:

```javascript
// 스크립트 타입에 있다고 가정
this.app.scene.lighting.debugLayer = undefined;
```

[shadows]: /user-manual/graphics/lighting/shadows/#soft-shadows-vs-hard-shadows
[pc-layer-api]: https://manual.oasisserver.link/engine/classes/Layer.html
[pc-lighting-debug-layer-api]: https://manual.oasisserver.link/engine/classes/LightingParams.html#debuglayer
