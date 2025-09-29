---
title: 강체 (Rigid Body)
---

강체 컴포넌트는 엔티티가 씬의 물리 시뮬레이션에 참여할 수 있게 합니다. 이를 통해 엔티티의 움직임을 현실적으로 시뮬레이션할 수 있습니다. 컴포넌트 인터페이스는 'Type' 속성에 따라 다른 속성을 동적으로 표시합니다.

강체 컴포넌트는 컴포넌트 패널의 오른쪽 상단에 있는 토글을 사용하여 활성화하거나 비활성화할 수 있습니다. 활성화되고 컴포넌트에 형제 충돌 컴포넌트가 있는 경우 강체가 물리 시뮬레이션에 참여합니다.

#### 정적

![Rigid Body component (Static)](/img/user-manual/scenes/components/component-rigid-body-static.png)

#### 동적

![Rigid Body component (Dynamic)](/img/user-manual/scenes/components/component-rigid-body-dynamic.png)

#### 운동학적

![Rigid Body component (Kinematic)](/img/user-manual/scenes/components/component-rigid-body-kinematic.png)

강체의 모양을 정의하려면 같은 엔티티에 [충돌 컴포넌트][4]를 추가해야 합니다. 그렇지 않으면 강체 컴포넌트는 효과가 없으며 물리 시뮬레이션에 참여하지 않습니다.

## 속성

| Property        | Description |
|-----------------|-------------|
| Type            | 강체의 유형: <ul><li>Static</li><li>Dynamic</li><li>Kinematic</li></ul> |
| Mass            | 강체의 질량입니다. 씬의 월드 단위가 미터라면 질량의 단위는 킬로그램입니다. |
| Linear Damping  | 강체가 매초 잃는 선형 속도의 비율을 지정합니다. |
| Angular Damping | 강체가 매초 잃는 각속도의 비율을 지정합니다. |
| Linear Factor   | 각 월드 축에서 강체의 선형 움직임에 대한 배수입니다. 어떤 축에 대해 0으로 설정하면 해당 축에서는 움직임이 발생하지 않습니다 - 2D 게임이나 1D/2D 움직임 생성에 유용합니다. |
| Angular Factor  | 각 월드 축에 대한 강체의 각(회전) 움직임에 대한 배수입니다. 어떤 축에 대해 0으로 설정하면 해당 축 주위에서는 회전이 발생하지 않습니다. |
| Friction        | 강체가 다른 강체와 접촉할 때 속도를 잃는 속도를 제어합니다. |
| Restitution     | 0과 1 사이의 강체의 탄성 측정값입니다. 경고: 1로 설정하면 움직이는 강체가 절대 멈추지 않습니다 (1 미만의 복원력을 가진 다른 강체와 충돌하거나 스크립트로 정지하지 않는 한). |

## 스크립팅 인터페이스

[스크립트 컴포넌트][5]를 사용하여 강체 컴포넌트의 속성을 제어할 수 있습니다. 강체 컴포넌트의 스크립팅 인터페이스는 [여기][6]에 있습니다.

[4]: /user-manual/scenes/components/collision/
[5]: /user-manual/scenes/components/script
[6]: https://manual.oasisserver.link/engine/classes/RigidBodyComponent.html
