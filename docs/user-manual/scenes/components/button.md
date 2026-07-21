---
title: 버튼 (Button)
---

버튼 컴포넌트는 [화면][1] 및 [요소][2] 컴포넌트와 함께 사용자 인터페이스 버튼을 손쉽게 만들 수 있게 해 주는 도구입니다.

버튼이 상태에 따라 모습을 바꾸는 방식은 두 가지 중에서 고를 수 있습니다. 하나의 스프라이트를 상태별로 다른 색으로 물들이는 *Tint* 방식과, 상태마다 아예 다른 스프라이트나 프레임을 보여 주는 *Sprite Change* 방식입니다.

## 공통 속성

| 속성        | 설명 |
|-----------------|-------------|
| Active          | 켜 두면 버튼이 입력에 반응하고 이벤트를 발생시킵니다. 꺼 두면 버튼이 비활성 상태가 됩니다. |
| Image           | 입력을 감지하는 데 쓰이는 이미지 요소 엔티티입니다. |
| Hit Padding     | 입력을 판정할 때 이미지 요소 바깥으로 함께 인식할 여유 공간입니다. |
| Transition Mode | 상태가 바뀔 때 사용할 효과 종류입니다. Sprite Change 또는 Tint 중에서 고릅니다. |

## 틴트 속성

![Tint Button](/img/user-manual/scenes/components/component-button-tint.png)

| 속성      | 설명 |
|---------------|-------------|
| Hover Tint    | 버튼 위에 마우스를 올렸을 때 이미지 요소에 입힐 색입니다. |
| Pressed Tint  | 버튼을 눌렀을 때 이미지 요소에 입힐 색입니다. |
| Inactive Tint | 버튼이 비활성 상태일 때 이미지 요소에 입힐 색입니다. |
| Fade Duration | 한 상태 색에서 다른 상태 색으로 부드럽게 바뀌는 데 걸리는 시간(밀리초)입니다. |

## 스프라이트 교체 속성

![Sprite Change Button](/img/user-manual/scenes/components/component-button-sprite-change.png)

| 속성        | 설명 |
|-----------------|-------------|
| Hover Sprite    | 버튼 위에 마우스를 올렸을 때 쓰는 스프라이트 에셋입니다. |
| Hover Frame     | 버튼 위에 마우스를 올렸을 때 보여 줄 스프라이트 프레임입니다. |
| Pressed Sprite  | 버튼을 눌렀을 때 쓰는 스프라이트 에셋입니다. |
| Pressed Frame   | 버튼을 눌렀을 때 보여 줄 스프라이트 프레임입니다. |
| Inactive Sprite | 버튼이 비활성 상태일 때 쓰는 스프라이트 에셋입니다. |
| Inactive Frame  | 버튼이 비활성 상태일 때 쓰는 스프라이트 프레임입니다. |

## 스크립팅 인터페이스

[스크립트 컴포넌트][5]를 이용하면 버튼 컴포넌트의 속성을 코드로 조절할 수 있습니다. 버튼 컴포넌트의 스크립팅 인터페이스는 [여기][6]에서 확인할 수 있습니다.

[1]: /user-manual/scenes/components/screen
[2]: /user-manual/scenes/components/element
[5]: /user-manual/scenes/components/script
[6]: https://manual.oasisserver.link/engine/classes/ButtonComponent.html
