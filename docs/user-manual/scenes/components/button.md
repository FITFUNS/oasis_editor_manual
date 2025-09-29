---
title: 버튼 (Button)
---

버튼 컴포넌트는 [화면][1] 및 [요소][2] 컴포넌트와 함께 사용할 사용자 인터페이스 버튼을 만드는 편리한 단축키입니다.

버튼 컴포넌트는 두 가지 전환 모드에서 사용할 수 있습니다. 각 상태에 대해 다른 색상으로 단일 스프라이트를 틴트하는 *Tint* 또는 각 버튼 상태에 대해 다른 스프라이트나 프레임을 사용하는 *Sprite Change* 입니다.

## 공통 속성

| 속성        | 설명 |
|-----------------|-------------|
| Active          | 활성화되면 버튼이 이벤트에 응답하고 발생시킵니다. 비활성화되면 버튼이 비활성 상태로 설정됩니다. |
| Image           | 입력 이벤트를 감지하는 데 사용되는 이미지 요소 엔티티입니다. |
| Hit Padding     | 입력 이벤트를 테스트할 때 포함될 이미지 요소 주변의 추가 공간입니다. |
| Transition Mode | 상태 간 전환에 사용할 효과 유형입니다. Sprite Change 또는 Tint입니다. |

## 틴트 속성

![Tint Button](/img/user-manual/scenes/components/component-button-tint.png)

| 속성      | 설명 |
|---------------|-------------|
| Hover Tint    | 버튼이 호버 상태일 때 이미지 요소에 틴트할 색상입니다. |
| Pressed Tint  | 버튼이 눌린 상태일 때 이미지 요소에 틴트할 색상입니다. |
| Inactive Tint | 버튼이 비활성 상태일 때 이미지 요소에 틴트할 색상입니다. |
| Fade Duration | 다른 상태 색상 간을 혼합하는 시간(밀리초)입니다. |

## 스프라이트 교체 속성

![Sprite Change Button](/img/user-manual/scenes/components/component-button-sprite-change.png)

| 속성        | 설명 |
|-----------------|-------------|
| Hover Sprite    | 버튼이 호버 상태일 때 사용되는 스프라이트 에셋입니다. |
| Hover Frame     | 버튼이 호버 상태일 때 표시할 스프라이트 프레임입니다. |
| Pressed Sprite  | 버튼이 눌린 상태일 때 사용되는 스프라이트 에셋입니다. |
| Pressed Frame   | 버튼이 눌린 상태일 때 표시할 스프라이트 프레임입니다. |
| Inactive Sprite | 버튼이 활성화되지 않았을 때 사용되는 스프라이트 에셋입니다. |
| Inactive Frame  | 버튼이 활성화되지 않았을 때 사용되는 스프라이트 프레임입니다. |

## 스크립팅 인터페이스

[스크립트 컴포넌트][5]를 사용하여 버튼 컴포넌트의 속성을 제어할 수 있습니다. 버튼 컴포넌트의 스크립팅 인터페이스는 [여기][6]에 있습니다.

[1]: /user-manual/scenes/components/screen
[2]: /user-manual/scenes/components/element
[5]: /user-manual/scenes/components/script
[6]: https://manual.oasisserver.link/engine/classes/ButtonComponent.html
