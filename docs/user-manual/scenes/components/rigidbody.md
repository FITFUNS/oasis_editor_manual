---
title: 강체 (Rigid Body)
---

강체 컴포넌트를 붙이면 엔티티가 씬의 물리 시뮬레이션에 참여할 수 있습니다. 덕분에 엔티티가 실제처럼 움직이게 만들 수 있습니다. 컴포넌트 화면은 'Type' 속성에 따라 그때그때 다른 속성을 보여줍니다.

컴포넌트 패널 오른쪽 위에 있는 토글로 이 컴포넌트를 켜거나 끌 수 있습니다. 컴포넌트를 켜고 같은 엔티티에 충돌 컴포넌트가 함께 있으면 강체가 물리 시뮬레이션에 참여합니다.

#### 정적

![Rigid Body component (Static)](/img/user-manual/scenes/components/component-rigid-body-static.png)

#### 동적

![Rigid Body component (Dynamic)](/img/user-manual/scenes/components/component-rigid-body-dynamic.png)

#### 운동학적

![Rigid Body component (Kinematic)](/img/user-manual/scenes/components/component-rigid-body-kinematic.png)

강체의 모양을 정하려면 같은 엔티티에 [충돌 컴포넌트][4]를 함께 추가해야 합니다. 그렇지 않으면 강체 컴포넌트는 아무 일도 하지 않으며 물리 시뮬레이션에도 참여하지 않습니다.

## 속성

| Property        | Description |
|-----------------|-------------|
| Type            | 강체의 유형입니다: <ul><li>Static</li><li>Dynamic</li><li>Kinematic</li></ul> |
| Mass            | 강체의 질량입니다. 씬의 월드 단위가 미터라면 질량 단위는 킬로그램입니다. |
| Linear Damping  | 강체가 1초마다 잃는 직선 속도의 비율입니다. |
| Angular Damping | 강체가 1초마다 잃는 회전 속도의 비율입니다. |
| Linear Factor   | 각 월드 축에서 강체의 직선 움직임에 곱해지는 값입니다. 어떤 축의 값을 0으로 두면 그 축 방향으로는 움직이지 않습니다. 2D 게임이나 1D/2D 움직임을 만들 때 유용합니다. |
| Angular Factor  | 각 월드 축에서 강체의 회전 움직임에 곱해지는 값입니다. 어떤 축의 값을 0으로 두면 그 축을 중심으로는 회전하지 않습니다. |
| Friction        | 강체가 다른 강체에 닿았을 때 속도를 얼마나 빨리 잃는지를 정합니다. |
| Restitution     | 0에서 1 사이 값으로 강체가 얼마나 잘 튕기는지를 나타냅니다. 주의: 1로 두면 움직이는 강체가 영원히 멈추지 않습니다 (1보다 작은 반발력을 가진 다른 강체와 부딪히거나 스크립트로 멈추기 전까지는). |

## 스크립팅 인터페이스

[스크립트 컴포넌트][5]를 이용하면 코드로 강체 컴포넌트의 속성을 바꿀 수 있습니다. 강체 컴포넌트의 스크립팅 인터페이스는 [여기][6]에서 볼 수 있습니다.

[4]: /user-manual/scenes/components/collision/
[5]: /user-manual/scenes/components/script
[6]: https://manual.oasisserver.link/engine/classes/RigidBodyComponent.html
