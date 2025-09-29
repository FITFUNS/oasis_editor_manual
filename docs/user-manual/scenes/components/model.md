---
title: 모델 (레거시) (Model)
---

:::warning

모델 컴포넌트는 사용 중단되었습니다. [렌더](/user-manual/scenes/components/render) 컴포넌트로 대체되었습니다.

:::

모델 컴포넌트는 엔티티가 프리미티브 모양이나 모델 에셋을 렌더링할 수 있게 합니다.

모델 컴포넌트는 컴포넌트 패널의 오른쪽 상단에 있는 토글을 사용하여 활성화하거나 비활성화할 수 있습니다. 활성화되면 모델이 씬에 추가되고 렌더링됩니다.

![Model component](/img/user-manual/scenes/components/component-model.png)

## 속성

| 속성              | 설명 |
|-----------------------|-------------|
| Type                  | 렌더링할 모델의 유형입니다. 다음 중 하나일 수 있습니다: <ul><li>Asset</li><li>Box</li><li>Capsule</li><li>Cone</li><li>Cylinder</li><li>Plane</li><li>Sphere</li></ul> |
| Asset                 | 이 모델 컴포넌트에서 렌더링하는 모델 에셋입니다. 'asset' 유형의 모델에만 적용됩니다. 모델 컴포넌트당 단일 모델만 렌더링할 수 있습니다. |
| Cast Shadows          | 활성화되면 이 컴포넌트에서 렌더링하는 모델이 씬의 다른 모델에 그림자를 캐스팅합니다. |
| Cast Lightmap Shadows | 활성화되면 이 컴포넌트에서 렌더링하는 모델이 라이트맵에 그림자를 캐스팅합니다. |
| Receive Shadows       | 활성화되면 이 컴포넌트에서 렌더링하는 모델이 씬의 다른 모델이 캐스팅한 그림자를 받습니다. |
| Static                | 모델이 절대 움직이지 않는다면, 엔진이 특정 최적화를 수행하도록 힌트를 주기 위해 이 상자를 선택하세요. |
| Lightmapped           | 활성화되면 이 모델은 동적 조명에서 조명을 받지 않습니다. 대신 라이트맵 조명에서 생성된 조명을 받습니다. |
| Batch Group           | 이 모델이 속한 배치 그룹입니다.  |
<!-- 배칭에 대한 자세한 내용은 [여기][5]에 있습니다. -->

## 스크립팅 인터페이스

[스크립트 컴포넌트][2]를 사용하여 모델 컴포넌트의 속성을 제어할 수 있습니다. 모델 컴포넌트의 스크립팅 인터페이스는 [여기][3]에 있습니다.

## 재질 사용자 정의

모델의 재질을 사용자 정의하는 방법을 [여기][4]에서 배울 수 있습니다.

[2]: /user-manual/scenes/components/script
[3]: https://manual.oasisserver.link/engine/classes/ModelComponent.html
[4]: /user-manual/assets/types/material/#assigning-materials
[5]: /user-manual/graphics/advanced-rendering/batching
