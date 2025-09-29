---
title: 클러스터드 조명 (Clustered Lighting)
---

<!-- :::note

클러스터드 조명은 OasisW 엔진 v1.56부터 기본적으로 활성화됩니다. 이전 조명 시스템은 단기적으로 엔진에서 계속 사용할 수 있습니다. 하지만 향후 마이너 릴리스에서 폐기될 예정입니다.

::: -->

조명은 애플리케이션에 사실감을 더하는 훌륭한 방법입니다. 하지만 실시간 조명은 특히 그림자를 캐스팅하는 많은 수의 조명이 있을 때 상당한 런타임 성능 비용을 발생시킬 수 있습니다.

성능 비용을 줄이는 해결책의 일부는 개별 메시에 영향을 미치는 조명의 양을 제한하는 것일 수 있습니다. 이는 종종 각 객체 근처의 조명을 찾아 사용하는 방식으로 구현됩니다. 하지만 이 전략에는 여러 단점이 있습니다:

- 각 객체가 다른 조명 세트를 사용할 수 있기 때문에, 이를 처리하기 위해 커스텀 셰이더를 컴파일해야 합니다.
- 이 전략이 효과적이려면 큰 객체를 더 작은 객체로 분할해야 합니다.
- 많은 수의 그림자 캐스팅 조명은 셰이더가 그림자 맵에 사용되는 사용 가능한 텍스처 슬롯을 모두 사용하게 할 수 있습니다.

이러한 문제를 해결하기 위해 OasisW는 **클러스터드 조명** 솔루션을 사용하여 전방향 조명과 스팟 조명의 성능 최적화 구현을 제공합니다. 이는 조명에 대한 정보를 텍스처에 저장하고 GPU가 음영 처리된 프래그먼트 근처의 조명만 쉽게 사용할 수 있게 합니다. 클러스터드 조명에는 여러 장점이 있습니다:

- 셰이더가 여러 조명을 처리할 수 있기 때문에 씬에서 조명이 추가되거나 제거될 때 셰이더를 재컴파일할 필요가 없습니다.
- 각 픽셀 근처의 조명만 평가되기 때문에 씬에서 많은 수의 조명(그림자와 쿠키 포함)을 사용할 수 있습니다.

방향성 조명은 모든 객체에 영향을 미치므로 클러스터드 조명 솔루션을 사용하지 않습니다.

## 구현 개요 {#implementation-overview}

다음 단계는 클러스터드 조명 구현의 기본 개요를 제공합니다:

1. 프레임에 대해 보이는 조명 목록을 평가하기 위해 카메라의 모든 프러스텀으로 조명을 컬링합니다.
2. 모든 보이는 조명의 축 정렬 경계 위에 월드 공간 3D 그리드를 배치합니다.

    ![3D Grid](/img/user-manual/graphics/lighting/lights/3d_grid.png)

3. 3D 그리드의 각 셀은 교차하는 조명 인덱스를 저장합니다. CPU에서 이 정보는 매 프레임마다 업데이트되며 모든 위치에 영향을 미치는 조명 목록을 가져올 수 있습니다. 이 정보는 텍스처에 저장되고 GPU에서 사용할 수 있게 됩니다.
4. 모든 보이는 조명의 속성은 다른 텍스처에 저장되므로 GPU에서도 접근할 수 있습니다.
5. 그림자 맵과 쿠키 텍스처는 개별 텍스처 대신 아틀라스로 렌더링되므로 셰이더에서 동시에 모든 것에 접근할 수 있습니다.
6. 프래그먼트 셰이더에서 조명 평가 중에 프래그먼트 월드 공간 위치를 사용하여 3D 그리드의 셀에 접근하고 저장된 조명을 평가합니다.

## 에디터 옵션 {#editor-options}

클러스터드 조명 옵션은 'Rendering' 아래의 에디터 설정에서 찾을 수 있습니다.

![Clustered Lighting Editor UI](/img/user-manual/graphics/lighting/lights/clustered_lighting_ui.png)

이를 통해 클러스터드 조명을 비활성화할 수 있습니다(이전 조명 시스템을 사용해야 하는 경우). 또한 아래에서 언급된 [성능 및 기능 조정](#tuning-clustered-lighting)도 가능합니다.

## 클러스터드 조명 조정 {#tuning-clustered-lighting}

### 기능 활성화 {#enabling-features}

클러스터드 조명 셰이더는 지원되는 모든 조명을 처리해야 하므로 이러한 기능을 처리하는 코드를 포함해야 합니다. 이로 인해 셰이더가 필요보다 커지고 컴파일 시간이 더 오래 걸릴 수 있습니다. 이러한 문제를 해결하기 위해 애플리케이션에서 필요하지 않은 기능을 비활성화하고 셰이더 컴파일 속도를 높일 수 있는 기능 옵션 세트가 있습니다:

- **Shadows Enabled** – 그림자 지원 활성화 또는 비활성화
- **Cookies Enabled** – 조명 쿠키 지원 활성화 또는 비활성화
- **Area Lights Enables** – 영역 조명 지원 활성화 또는 비활성화

### 3D 그리드 구성 {#configuring-the-3d-grid}

![3D Grid Configuration](/img/user-manual/graphics/lighting/lights/3d_grid_config.png)

**Cells** 속성을 사용하면 각 월드 축을 따라 셀의 수를 지정할 수 있습니다. 이는 모든 보이는 조명을 포함하는 축 정렬 경계 상자를 지정된 수의 셀로 동적으로 세분화합니다.

**Max Lights Per Cell** 속성을 사용하면 각 개별 셀에 저장되는 최대 조명 수를 지정할 수 있습니다. 이는 겹치는 최대 조명 수를 나타냅니다. 일반적으로 조명 겹침이 더 크기 때문에 더 거친 그리드 세분화의 경우 조명 수를 증가시켜야 합니다.

## 제한사항 {#limitations}

내부적으로 조명 인덱스는 8비트를 사용하여 저장되므로, 모든 프레임에서 보이는 조명의 최대 수는 254개입니다(하나의 인덱스는 예약됨). 향후 16비트를 사용하여 인덱스를 저장하고 제한을 증가시키는 추가 옵션이 있을 수 있습니다.

## 성능 고려사항 {#performance-considerations}

- **셀 세분화**는 가능한 한 작아야 합니다. 큰 셀 세분화는 매 프레임마다 그리드가 조명으로 채워질 때 더 큰 CPU 사용량을 초래하기 때문입니다. 이는 조명 복잡도에 따라 각 씬에 대해 최적화되어야 합니다. 최적으로는 조명의 겹침과 각 셀의 조명 수를 제한할 수 있을 만큼 충분한 셀이 있어야 합니다.
- **Max Lights Per Cell**은 가능한 한 작아야 합니다. 이는 매 프레임마다 업데이트되어야 하는 3D 그리드를 저장하는 데 사용되는 텍스처의 크기를 제한하기 때문입니다.
- 클러스터드 조명을 사용하는 애플리케이션이 오래된 모바일 기기에서 **느리게 실행**된다면, 그림자나 쿠키와 같은 기능을 전역적으로 끄는 것을 고려하세요.

## 디버그 그리드 렌더링 {#render-debug-grid}

클러스터드 조명의 디버깅과 성능 조정을 돕기 위해 [Layer][pc-layer-api] ID를 [LightingParams의 debugLayer][pc-lighting-debug-layer-api]에 할당할 수 있습니다. 예:

```javascript
// 스크립트 타입에 있다고 가정
this.app.scene.lighting.debugLayer = this.app.scene.layers.getLayerByName("World").id;
```

렌더링을 중지하려면 `debugLayer` 속성에 `undefined`를 할당하세요:

```javascript
// 스크립트 타입에 있다고 가정
this.app.scene.lighting.debugLayer = undefined;
```

[shadows]: /user-manual/graphics/lighting/shadows/#soft-shadows-vs-hard-shadows
[pc-layer-api]: https://manual.oasisserver.link/engine/classes/Layer.html
[pc-lighting-debug-layer-api]: https://manual.oasisserver.link/engine/classes/LightingParams.html#debuglayer
