---
title: 조명 (Light)
---

조명 컴포넌트는 엔티티에 동적 광원을 연결합니다. 'Type' 속성은 어떤 종류의 조명이 연결되는지와 사용 가능한 다른 속성을 결정합니다.

조명 컴포넌트는 컴포넌트 패널의 오른쪽 상단에 있는 토글을 사용하여 활성화하거나 비활성화할 수 있습니다. 활성화되면 조명이 씬을 비춥니다.

#### 방향성

![Light component (Directional)](/img/user-manual/scenes/components/component-light-directional.png)

#### 전방향

![Light component (Omni)](/img/user-manual/scenes/components/component-light-point.png)

#### 스팟

![Light component (Spot)](/img/user-manual/scenes/components/component-light-spot.png)

## 속성

| 속성                | 설명 |
|--------------------|-------------|
| Type               | 다음 중 하나일 수 있습니다: <ul><li>Directional: 균일한 방향으로 조명을 비추는 조명</li><li>Omni: 모든 방향으로 조명을 비추는 조명</li><li>Spot: 원뿔의 꼭짓점에서 조명을 비추는 조명</li></ul> |
| Color              | 방출되는 조명의 색상입니다. |
| Intensity          | 조명의 강도로, 조명 색상의 스칼라 값 역할을 합니다. 이 값은 1을 초과할 수 있습니다. |
| Range              | Omni와 Spot 전용. 조명의 기여도가 0에 도달하는 스포트라이트 소스로부터의 거리입니다. |
| Falloff Mode       | Omni와 Spot 전용. 조명이 위치에서 감쇠되는 속도를 제어합니다. |
| Inner Cone Angle   | 스포트라이트 원뿔이 페이드 오프를 시작하는 각도입니다. 각도는 도 단위로 지정됩니다. 스팟 라이트에만 영향을 줍니다. |
| Outer Cone Angle   | 스포트라이트 원뿔이 완전히 사라지는 각도입니다. 각도는 도 단위로 지정됩니다. 스팟 라이트에만 영향을 줍니다. |
| Static             | 조명을 이동 불가능한 것으로 표시합니다(최적화). |
| Bake Lightmap      | 이 조명에서 라이트맵 베이킹을 활성화합니다. |
| Bake Direction     | 활성화되고 bake가 true인 경우, 조명의 방향이 방향성 라이트맵에 기여합니다. |
| Bake Samples       | 이 조명을 라이트맵에 베이킹하는 데 사용되는 샘플 수입니다. |
| Bake Area          | 도 단위의 반음영 각도로, 부드러운 그림자 경계를 허용합니다. |
| Affect Lightmapped | 활성화하면 조명이 라이트맵된 객체에 영향을 줍니다. |
| Affect Dynamic     | 활성화하면 조명이 라이트맵되지 않은 객체에 영향을 줍니다. |
| Cast Shadows       | 체크하면 조명이 그림자를 캐스팅하는 모델이 그림자를 캐스팅하게 합니다. |
| Shadow Update Mode | 이 조명의 섀도우맵이 업데이트되는 시점을 결정합니다. 다음 중 하나일 수 있습니다: <ul><li>Once: 한 번 생성되고 다시는 생성되지 않습니다. 캐스터, 수신자, 조명이 정적일 때 유용합니다.</li><li>Realtime: 매 프레임마다 업데이트됩니다.</li></ul> |
| Distance           | 방향성 조명 전용. 그림자 거리는 방향성 조명에서 나오는 그림자가 더 이상 보이지 않는 카메라로부터의 최대 거리입니다. 더 작은 값은 더 상세한 그림자를 생성합니다. 한계가 가까울수록 매핑되어야 하는 그림자 데이터가 적어지고, 섀도우맵으로 표현됩니다. 섀도우맵 픽셀은 공간적으로 매핑되므로 섀도우맵이 커버해야 하는 거리가 적을수록 픽셀이 작아져서 그림자의 해상도가 높아집니다. |
| Shadow Intensity | 그림자 어둠의 강도로, 1은 그림자가 완전히 검은색임을 의미합니다. |
| Shadow Bias        | 바이어스 값은 렌더링 아티팩트, 즉 'shadow acne'과 'peter-panning'을 제거하기 위해 그림자 조정을 가능하게 합니다. 두 값은 그림자 바이어스와 노멀 오프셋 바이어스입니다. |
| Normal Offset Bias | 노멀 오프셋 깊이 바이어스입니다. |
| Cookie             | Omni와 Spot 전용. 조명에서 투영될 텍스처 에셋입니다. |
| Cookie Intensity   | Omni와 Spot 전용. 쿠키 텍스처의 강도를 정의합니다. |
| Cookie Falloff     | Spot 전용. 스포트라이트 페이드오프를 비활성화합니다. |
| Layers             | 이 조명이 영향을 줄 레이어입니다.|

## 스크립팅 인터페이스

[스크립트 컴포넌트][4]를 사용하여 조명 컴포넌트의 속성을 제어할 수 있습니다. 조명 컴포넌트의 스크립팅 인터페이스는 [여기][5]에 있습니다.

[4]: /user-manual/scenes/components/script
[5]: https://manual.oasisserver.link/engine/classes/LightComponent.html
