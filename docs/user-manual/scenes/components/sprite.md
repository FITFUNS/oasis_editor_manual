---
title: 스프라이트 (Sprite)
---

스프라이트 컴포넌트는 [스프라이트 에셋][1]을 씬에 렌더링하고 애니메이션화합니다.

스프라이트에는 단순(Simple)과 애니메이션(Animated) 두 가지 유형이 있습니다.

## 단순 스프라이트

단순 스프라이트 컴포넌트는 아틀라스에서 단일 프레임을 표시합니다

![Simple Sprite](/img/user-manual/scenes/components/component-sprite-simple.png)

## 단순 스프라이트 컴포넌트 속성

| 속성    | 설명 |
|-------------|-------------|
| Type        | Simple 또는 Animated입니다. |
| Sprite      | 표시할 스프라이트 에셋입니다. |
| Frame       | 표시할 스프라이트의 프레임 인덱스입니다. |
| Color       | 스프라이트에 틴트로 적용할 색상입니다. |
| Opacity     | 스프라이트의 투명도입니다. |
| Flip X      | 렌더링된 스프라이트를 수평으로 뒤집습니다. |
| Flip Y      | 렌더링된 스프라이트를 수직으로 뒤집습니다. |
| Layers      | 스프라이트를 렌더링할 레이어입니다. |
| Draw Order  | 이 스프라이트가 렌더링되는 순서입니다. 낮은 숫자가 먼저 렌더링됩니다. |
<!-- | Batch Group | 이 모델이 속한 배치 그룹입니다. 배칭에 대한 자세한 내용은 [여기][6]에 있습니다. | -->

## 애니메이션 스프라이트

애니메이션 스프라이트 컴포넌트는 다른 스프라이트 에셋을 재생할 수 있는 여러 스프라이트 애니메이션 클립이 연결되어 있습니다.

![Animated Sprite](/img/user-manual/scenes/components/component-sprite-animated.png)

## 애니메이션 스프라이트 컴포넌트 속성

| 속성   | 설명 |
|------------|-------------|
| Type       | Simple 또는 Animated입니다. |
| Frame      | 표시할 스프라이트의 프레임 인덱스입니다. |
| Color      | 스프라이트에 틴트로 적용할 색상입니다. |
| Opacity    | 스프라이트의 투명도입니다. |
| Flip X     | 렌더링된 스프라이트를 수평으로 뒤집습니다. |
| Flip Y     | 렌더링된 스프라이트를 수직으로 뒤집습니다. |
| Speed      | 이 스프라이트 컴포넌트의 스프라이트 애니메이션 클립이 애니메이션화되는 속도에 적용되는 배수입니다. |
| Layers     | 스프라이트를 렌더링할 레이어입니다. |
| Draw Order | 이 스프라이트가 렌더링되는 순서입니다. 낮은 숫자가 먼저 렌더링됩니다. |
| Auto Play  | 스프라이트가 활성화될 때 재생할 스프라이트 애니메이션 클립의 이름입니다. |

## 스프라이트 애니메이션 클립 속성

| 속성 | 설명 |
|----------|-------------|
| Name     | 스프라이트 애니메이션 클립의 이름입니다. 개별 클립을 참조하는 데 사용됩니다. |
| Loop     | true이면 애니메이션 클립이 끝에 도달하면 시작으로 다시 반복됩니다. |
| FPS      | 클립이 초당 프레임으로 재생되는 속도입니다. |
| Sprite   | 이 클립을 재생하는 데 사용되는 스프라이트 에셋입니다. |

## 스크립팅 인터페이스

[스크립트 컴포넌트][4]를 사용하여 스프라이트 컴포넌트의 속성을 제어할 수 있습니다. 스프라이트 컴포넌트의 스크립팅 인터페이스는 [여기][5]에 있습니다.

[1]: /user-manual/assets/types/sprite
[4]: /user-manual/scenes/components/script
[5]: https://manual.oasisserver.link/engine/classes/SpriteComponent.html
[6]: /user-manual/graphics/advanced-rendering/batching
