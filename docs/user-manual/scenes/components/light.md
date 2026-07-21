---
title: 조명 (Light)
---

조명(Light) 컴포넌트는 엔티티에 실시간으로 작동하는 광원을 붙여 줍니다. 'Type' 속성을 무엇으로 정하느냐에 따라 조명의 종류가 달라지고, 함께 쓸 수 있는 속성도 달라집니다.

조명 컴포넌트는 컴포넌트 패널 오른쪽 위의 토글로 켜거나 끌 수 있습니다. 켜면 조명이 씬을 비춥니다.

#### 방향성

![Light component (Directional)](/img/user-manual/scenes/components/component-light-directional.png)

#### 전방향

![Light component (Omni)](/img/user-manual/scenes/components/component-light-point.png)

#### 스팟

![Light component (Spot)](/img/user-manual/scenes/components/component-light-spot.png)

## 속성

| 속성                | 설명 |
|--------------------|-------------|
| Type               | 다음 중 하나입니다: <ul><li>Directional: 한 방향으로 고르게 빛을 비추는 조명</li><li>Omni: 한 점에서 모든 방향으로 빛을 뿌리는 조명</li><li>Spot: 원뿔 모양으로 한쪽을 비추는 조명</li></ul> |
| Color              | 조명이 내보내는 빛의 색입니다. |
| Intensity          | 조명의 밝기로, 빛 색에 곱해지는 값입니다. 1보다 큰 값도 넣을 수 있습니다. |
| Range              | Omni와 Spot 전용. 광원에서부터 빛의 영향이 0이 되는 거리입니다. |
| Falloff Mode       | Omni와 Spot 전용. 거리가 멀어질수록 빛이 얼마나 빨리 약해지는지 정합니다. |
| Inner Cone Angle   | 스팟 라이트의 원뿔에서 빛이 흐려지기 시작하는 각도입니다. 도 단위로 지정하며, 스팟 라이트에만 적용됩니다. |
| Outer Cone Angle   | 스팟 라이트의 원뿔에서 빛이 완전히 사라지는 각도입니다. 도 단위로 지정하며, 스팟 라이트에만 적용됩니다. |
| Static             | 이 조명이 움직이지 않는다고 표시합니다(성능을 위한 최적화). |
| Bake Lightmap      | 이 조명에 대해 라이트맵 굽기(bake)를 켭니다. |
| Bake Direction     | 켜져 있고 bake가 true이면, 조명의 방향이 방향성 라이트맵에 반영됩니다. |
| Bake Samples       | 이 조명을 라이트맵으로 구울 때 사용할 샘플 수입니다. |
| Bake Area          | 도 단위의 반음영 각도로, 그림자 경계를 부드럽게 만들어 줍니다. |
| Affect Lightmapped | 켜면 이 조명이 라이트맵이 구워진 객체에도 영향을 줍니다. |
| Affect Dynamic     | 켜면 이 조명이 라이트맵이 구워지지 않은 객체에 영향을 줍니다. |
| Cast Shadows       | 켜면 이 조명 때문에, 그림자를 만들 수 있는 모델이 그림자를 만듭니다. |
| Shadow Update Mode | 이 조명의 섀도우맵을 언제 다시 계산할지 정합니다. 다음 중 하나입니다: <ul><li>Once: 한 번만 만들고 이후에는 다시 만들지 않습니다. 그림자를 만드는 물체, 받는 물체, 조명이 모두 움직이지 않을 때 유용합니다.</li><li>Realtime: 매 프레임마다 다시 계산합니다.</li></ul> |
| Distance           | 방향성 조명 전용. 방향성 조명의 그림자가 카메라에서 이 거리보다 멀어지면 더 이상 보이지 않습니다. 값을 작게 할수록 그림자가 더 또렷해집니다. 값이 가까울수록 섀도우맵에 담아야 할 그림자 범위가 줄어들기 때문입니다. 섀도우맵의 픽셀은 공간에 나눠 배치되므로, 커버할 거리가 짧을수록 픽셀 하나가 담당하는 영역이 작아져 그림자 해상도가 높아집니다. |
| Shadow Intensity | 그림자가 얼마나 진한지를 정하며, 1이면 그림자가 완전히 검게 됩니다. |
| Shadow Bias        | 바이어스 값으로 그림자를 미세하게 조정해서, 'shadow acne'와 'peter-panning' 같은 렌더링 오류를 없앱니다. 두 값은 그림자 바이어스와 노멀 오프셋 바이어스입니다. |
| Normal Offset Bias | 노멀 오프셋 깊이 바이어스입니다. |
| Cookie             | Omni와 Spot 전용. 조명이 밖으로 투영할 텍스처 에셋입니다. |
| Cookie Intensity   | Omni와 Spot 전용. 쿠키 텍스처의 세기를 정합니다. |
| Cookie Falloff     | Spot 전용. 스팟 라이트가 흐려지는 효과를 끕니다. |
| Layers             | 이 조명이 영향을 줄 레이어입니다.|

## 스크립팅 인터페이스

[스크립트 컴포넌트][4]를 이용하면 코드로 조명 컴포넌트의 속성을 조절할 수 있습니다. 조명 컴포넌트의 스크립팅 인터페이스는 [여기][5]에서 확인할 수 있습니다.

[4]: /user-manual/scenes/components/script
[5]: https://manual.oasisserver.link/engine/classes/LightComponent.html
