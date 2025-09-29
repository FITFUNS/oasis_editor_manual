---
title: 애니메이션 (레거시) (Animation)
---

:::warning

애니메이션 컴포넌트는 사용 중단되었습니다. [애님](/user-manual/scenes/components/anim) 컴포넌트로 대체되었습니다.

:::

애니메이션 컴포넌트는 엔티티가 모델 컴포넌트에 할당된 모델에 적용할 수 있는 애니메이션을 지정할 수 있게 합니다.

애니메이션 컴포넌트는 컴포넌트 패널의 오른쪽 상단에 있는 토글을 사용하여 활성화하거나 비활성화할 수 있습니다. 활성화되면 컴포넌트가 할당된 애니메이션을 재생합니다.

![Animation component](/img/user-manual/scenes/components/component-animation.png)

## 속성

| 속성 | 설명 |
|----------|-------------|
| Assets   | 이 엔티티에서 사용할 수 있는 애니메이션 에셋입니다. 피커 컨트롤을 통해 여러 애니메이션을 할당할 수 있습니다. |
| Speed    | 애니메이션 재생 속도에 대한 배수입니다. 0은 애니메이션 재생을 정지시키고, 1은 에셋의 정상 재생 속도를 나타냅니다. |
| Activate | 선택하면 컴포넌트가 로드 시 애니메이션 재생을 시작합니다. |
| Loop     | 선택하면 애니메이션이 완료 시 시작으로 계속 루프됩니다. 그렇지 않으면 애니메이션이 마지막 프레임에서 중지됩니다. |

## 스크립팅 인터페이스

[스크립트 컴포넌트][2]를 사용하여 애니메이션 컴포넌트의 속성을 제어할 수 있습니다. 애니메이션 컴포넌트의 스크립팅 인터페이스는 [여기][3]에 있습니다.

[2]: /user-manual/scenes/components/script
[3]: https://manual.oasisserver.link/engine/classes/AnimationComponent.html
