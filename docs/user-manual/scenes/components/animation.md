---
title: 애니메이션 (레거시) (Animation)
---

:::warning

애니메이션 컴포넌트는 더 이상 쓰지 않는 옛 기능입니다. 지금은 [애님](/user-manual/scenes/components/anim) 컴포넌트가 이 역할을 대신합니다.

:::

애니메이션 컴포넌트를 쓰면, 엔티티의 모델 컴포넌트에 담긴 모델을 움직이게 만드는 애니메이션을 지정할 수 있습니다.

컴포넌트 패널 오른쪽 위에 있는 토글로 이 컴포넌트를 켜거나 끌 수 있습니다. 켜면 지정해 둔 애니메이션이 재생됩니다.

![Animation component](/img/user-manual/scenes/components/component-animation.png)

## 속성

| 속성 | 설명 |
|----------|-------------|
| Assets   | 이 엔티티에서 사용할 수 있는 애니메이션 에셋입니다. 피커 컨트롤로 여러 개의 애니메이션을 한꺼번에 넣을 수 있습니다. |
| Speed    | 애니메이션 재생 속도를 조절하는 배수 값입니다. 0이면 애니메이션이 멈추고, 1이면 에셋 원래 속도로 재생됩니다. |
| Activate | 켜 두면 씬이 로드될 때 애니메이션이 바로 재생을 시작합니다. |
| Loop     | 켜 두면 애니메이션이 끝난 뒤 처음으로 돌아가 계속 반복됩니다. 꺼 두면 마지막 프레임에서 멈춥니다. |

## 스크립팅 인터페이스

[스크립트 컴포넌트][2]를 이용하면 애니메이션 컴포넌트의 속성을 코드로 조절할 수 있습니다. 애니메이션 컴포넌트의 스크립팅 인터페이스는 [여기][3]에서 확인할 수 있습니다.

[2]: /user-manual/scenes/components/script
[3]: https://manual.oasisserver.link/engine/classes/AnimationComponent.html
