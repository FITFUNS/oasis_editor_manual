---
title: 복합 모양 (Compound Shapes)
---

복합 모양(Compound Shape)은 여러 개의 기본 도형([전체 모양 목록][primitive-shapes-list])을 합쳐서 만든 나만의 충돌 모양입니다. 이렇게 하면 별도의 메시 모델을 만들지 않고도 좀 더 복잡한 충돌 모양을 만들 수 있습니다.

가장 큰 장점은 서로 부딪히며 움직이는 동적 강체 충돌을 복합 모양끼리 만들 수 있다는 점입니다. 이는 메시 충돌 방식으로는 할 수 없는 일입니다(아래 예시 참고).

<!-- <div className="iframe-container">
    <iframe src="https://playcanv.as/e/p/KXZ5Lsda/" title="Compound Physic Shapes" allow="camera; microphone; xr-spatial-tracking; fullscreen" allowfullscreen></iframe>
</div>

[OasisW project link][compound-shapes-project] -->

복합 물리 객체의 모양은 아래 그림처럼 자식 엔티티들의 충돌 모양이 모여서 정해집니다.

![Compound shapes setup](/img/user-manual/physics/compound-shape-chair-setup.png)

![Compound shapes chair](/img/user-manual/physics/compound-shape-chair.gif)

Chair 엔티티(부모)에는 유형이 'Compound'로 설정된 [충돌 컴포넌트][collision-component]가 붙어 있습니다.

각 자식 엔티티에는 충돌 컴포넌트가 있고 그 유형이 기본 도형으로 설정되어 있어서, 이들이 모여 물리 객체의 전체 모양을 이룹니다. 자식의 위치는 부모를 기준으로 정해집니다.

부모 엔티티는 물리 객체의 질량 중심(무게 중심) 역할도 합니다. 그래서 부모는 객체 모양의 경계 안쪽(보통 한가운데)에 두는 것이 좋습니다. 그렇지 않으면 힘이나 회전력을 받을 때 객체가 엉뚱한 지점을 축으로 빙글빙글 도는 것처럼 이상하게 움직일 수 있습니다.

[primitive-shapes-list]: /user-manual/physics/physics-basics/#rigid-bodies
<!-- [compound-shapes-project]: https://playcanvas.com/project/688146/overview/compound-physics-shapes -->
[collision-component]: /user-manual/scenes/components/collision/
