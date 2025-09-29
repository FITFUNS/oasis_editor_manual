---
title: 충돌 (Collision)
---

충돌 컴포넌트는 엔티티에 충돌 볼륨을 할당합니다. 컴포넌트 인터페이스는 'Type' 속성에 따라 다른 속성을 동적으로 표시합니다.

충돌 컴포넌트는 컴포넌트 패널의 오른쪽 상단에 있는 토글을 사용하여 활성화하거나 비활성화할 수 있습니다. 활성화되고 컴포넌트가 트리거 볼륨인 경우(형제 강체 컴포넌트가 없기 때문에) 트리거 볼륨이 활성화됩니다. 마찬가지로 컴포넌트에 형제 강체 컴포넌트가 있는 경우 강체가 활성화됩니다.

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

엔티티에 강체 컴포넌트도 있는 경우, 충돌 컴포넌트가 강체의 모양을 결정합니다. 강체 컴포넌트가 없는 경우, 충돌 컴포넌트는 트리거 볼륨으로 처리됩니다. 트리거 볼륨은 씬의 다른 강체 시뮬레이션에 영향을 줄 수 없습니다. 대신 스크립트 컴포넌트를 추가하고 트리거 이벤트에 응답하는 스크립트를 연결할 수 있습니다. 예를 들어, 강체 컴포넌트가 있는 다른 엔티티가 트리거에 들어오거나 나갈 때 스크립트에 알림을 받을 수 있습니다.

## 속성 {#properties}

| 속성     | 설명 |
|--------------|-------------|
| Type         | 충돌 프리미티브의 유형입니다. 다음 중 하나일 수 있습니다:<ul><li>Box</li><li>Sphere</li><li>Capsule</li><li>Mesh</li></ul> |
| Half Extents | 박스만 해당. 충돌 박스의 반경입니다. 이는 3차원 벡터입니다: 로컬 공간 반너비, 반높이, 반깊이입니다. |
| Axis         | 캡슐만 해당. 캡슐을 엔티티의 로컬 공간 X, Y 또는 Z 축에 정렬합니다. |
| Height       | 캡슐만 해당. 캡슐의 끝에서 끝까지의 높이입니다. |
| Radius       | 구와 캡슐만 해당. 구 또는 캡슐 본체의 반지름입니다. |
| Asset        | 메시만 해당. 삼각형 기반 충돌 메시의 소스로 사용될 [렌더 에셋](../../assets/types/render.md) 또는 모델 에셋입니다. |

## 스크립팅 인터페이스

[스크립트 컴포넌트][8]를 사용하여 충돌 컴포넌트의 속성을 제어할 수 있습니다. 충돌 컴포넌트의 스크립팅 인터페이스는 [여기][9]에 있습니다.

[8]: /user-manual/scenes/components/script
[9]: https://manual.oasisserver.link/engine/classes/CollisionComponent.html
