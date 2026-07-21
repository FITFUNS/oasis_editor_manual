---
title: 충돌 (Collision)
---

충돌 컴포넌트는 엔티티에 충돌 볼륨(부딪힘을 판정하는 영역)을 지정합니다. 컴포넌트 화면은 'Type' 속성으로 고른 모양에 따라 그때그때 다른 속성을 보여 줍니다.

컴포넌트 패널 오른쪽 위에 있는 토글로 이 컴포넌트를 켜거나 끌 수 있습니다. 형제 강체 컴포넌트가 없어서 이 컴포넌트가 트리거 볼륨으로 동작하는 경우, 켜면 그 트리거 볼륨이 활성화됩니다. 반대로 형제 강체 컴포넌트가 있다면, 켜면 강체가 활성화됩니다.

#### 박스

![Collision component (Box)](/img/user-manual/scenes/components/component-collision-box.png)

#### 캡슐

![Collision component (Capsule)](/img/user-manual/scenes/components/component-collision-capsule.png)

#### 복합

![Collision component (Compound)](/img/user-manual/scenes/components/component-collision-compound.png)

#### 원뿔

![Collision component (Cone)](/img/user-manual/scenes/components/component-collision-cone.png)

#### 실린더

![Collision component (Cylinder)](/img/user-manual/scenes/components/component-collision-cylinder.png)

#### 메시

![Collision component (Mesh)](/img/user-manual/scenes/components/component-collision-mesh.png)

#### 구

![Collision component (Sphere)](/img/user-manual/scenes/components/component-collision-sphere.png)

엔티티에 강체 컴포넌트도 함께 있으면, 충돌 컴포넌트가 그 강체의 모양을 정합니다. 강체 컴포넌트가 없으면, 충돌 컴포넌트는 트리거 볼륨으로 동작합니다. 트리거 볼륨은 씬의 다른 물리 시뮬레이션에 힘을 주지는 못합니다. 대신 스크립트 컴포넌트를 붙여, 트리거 이벤트에 반응하는 스크립트를 연결할 수 있습니다. 예를 들어 강체 컴포넌트를 가진 다른 엔티티가 트리거 안으로 들어오거나 밖으로 나갈 때, 스크립트가 그 사실을 알림으로 받을 수 있습니다.

## 속성 {#properties}

| 속성     | 설명 |
|--------------|-------------|
| Type         | 충돌 모양의 종류입니다. 다음 중 하나를 고릅니다:<ul><li>Box</li><li>Sphere</li><li>Capsule</li><li>Mesh</li></ul> |
| Half Extents | Box일 때만 사용합니다. 충돌 박스의 크기를 절반 값으로 나타냅니다. 로컬 공간 기준으로 반너비, 반높이, 반깊이의 세 값을 가진 3차원 벡터입니다. |
| Axis         | Capsule일 때만 사용합니다. 캡슐을 엔티티의 로컬 공간 X, Y, Z 축 중 어느 쪽으로 세울지 정합니다. |
| Height       | Capsule일 때만 사용합니다. 캡슐의 끝에서 끝까지 높이입니다. |
| Radius       | Sphere와 Capsule일 때만 사용합니다. 구나 캡슐 몸통의 반지름입니다. |
| Asset        | Mesh일 때만 사용합니다. 삼각형으로 이루어진 충돌 메시의 원본으로 쓸 [렌더 에셋](../../assets/types/render.md) 또는 모델 에셋입니다. |

## 스크립팅 인터페이스

[스크립트 컴포넌트][8]를 이용하면 충돌 컴포넌트의 속성을 코드로 조절할 수 있습니다. 충돌 컴포넌트의 스크립팅 인터페이스는 [여기][9]에서 확인할 수 있습니다.

[8]: /user-manual/scenes/components/script
[9]: https://manual.oasisserver.link/engine/classes/CollisionComponent.html
