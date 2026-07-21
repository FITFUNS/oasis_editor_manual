---
title: 모델 (레거시) (Model)
---

:::warning

모델 컴포넌트는 더 이상 쓰지 않습니다. 이제는 [렌더](/user-manual/scenes/components/render) 컴포넌트를 대신 사용하세요.

:::

모델 컴포넌트를 붙이면 엔티티에 상자나 구 같은 기본 도형, 또는 준비해 둔 모델 에셋을 화면에 그릴 수 있습니다.

컴포넌트 패널 오른쪽 위에 있는 토글로 이 컴포넌트를 켜거나 끌 수 있습니다. 켜면 모델이 씬에 추가되어 화면에 그려집니다.

![Model component](/img/user-manual/scenes/components/component-model.png)

## 속성

| 속성              | 설명 |
|-----------------------|-------------|
| Type                  | 어떤 모델을 그릴지 정하는 유형입니다. 다음 중 하나를 고를 수 있습니다: <ul><li>Asset</li><li>Box</li><li>Capsule</li><li>Cone</li><li>Cylinder</li><li>Plane</li><li>Sphere</li></ul> |
| Asset                 | 이 모델 컴포넌트가 그릴 모델 에셋입니다. Type이 'asset'인 모델에만 쓰입니다. 모델 컴포넌트 하나당 모델은 딱 하나만 그릴 수 있습니다. |
| Cast Shadows          | 켜면 이 컴포넌트가 그리는 모델이 씬의 다른 모델 위에 그림자를 드리웁니다. |
| Cast Lightmap Shadows | 켜면 이 컴포넌트가 그리는 모델이 라이트맵에 그림자를 남깁니다. |
| Receive Shadows       | 켜면 이 컴포넌트가 그리는 모델이 씬의 다른 모델이 만든 그림자를 받아 표시합니다. |
| Static                | 이 모델이 앞으로 전혀 움직이지 않는다면 이 상자를 체크하세요. 그러면 엔진이 성능을 높이는 최적화를 할 수 있습니다. |
| Lightmapped           | 켜면 이 모델은 실시간 조명의 영향을 받지 않고, 미리 구워 둔 라이트맵 조명만 받습니다. |
| Batch Group           | 이 모델이 속한 배치 그룹입니다.  |
<!-- 배칭에 대한 자세한 내용은 [여기][5]에 있습니다. -->

## 스크립팅 인터페이스

[스크립트 컴포넌트][2]를 이용하면 코드로 모델 컴포넌트의 속성을 바꿀 수 있습니다. 모델 컴포넌트의 스크립팅 인터페이스는 [여기][3]에서 볼 수 있습니다.

## 재질 사용자 정의

모델의 재질을 원하는 대로 바꾸는 방법은 [여기][4]에서 익힐 수 있습니다.

[2]: /user-manual/scenes/components/script
[3]: https://manual.oasisserver.link/engine/classes/ModelComponent.html
[4]: /user-manual/assets/types/material/#assigning-materials
[5]: /user-manual/graphics/advanced-rendering/batching
