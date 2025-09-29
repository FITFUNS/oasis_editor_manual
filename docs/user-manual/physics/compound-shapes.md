---
title: 복합 모양 (Compound Shapes)
---

복합 모양은 여러 원시 모양([전체 모양 목록][primitive-shapes-list])으로부터 생성된 사용자 정의 충돌 모양입니다. 이를 통해 사용자 정의 메시 모델을 사용하지 않고도 더 복잡한 충돌 모양을 가질 수 있습니다.

주요 장점은 메시 충돌 유형으로는 불가능한 복합 모양 간의 동적 강체 충돌을 가질 수 있다는 것입니다(아래에 표시됨).

<!-- <div className="iframe-container">
    <iframe src="https://playcanv.as/e/p/KXZ5Lsda/" title="Compound Physic Shapes" allow="camera; microphone; xr-spatial-tracking; fullscreen" allowfullscreen></iframe>
</div>

[OasisW project link][compound-shapes-project] -->

복합 물리 객체의 모양은 아래에 표시된 것처럼 자식의 충돌 모양에 의해 정의됩니다.

![Compound shapes setup](/img/user-manual/physics/compound-shape-chair-setup.png)

![Compound shapes chair](/img/user-manual/physics/compound-shape-chair.gif)

Chair 엔티티(부모)는 유형이 'Compound'로 설정된 [충돌 컴포넌트][collision-component]를 가집니다.

자식 엔티티는 충돌 컴포넌트와 원시 모양으로 설정된 유형을 가진 물리 객체의 모양을 형성하며, 부모를 기준으로 위치가 설정됩니다.

부모는 또한 물리 객체의 질량 중심이며, 객체 모양의 경계 내(보통 중심)에 두는 것이 권장됩니다. 그렇지 않으면 힘과 토크가 적용될 때 객체가 세계의 보이지 않는 피벗을 중심으로 회전하는 것과 같은 이상한 동작을 보일 수 있습니다.

[primitive-shapes-list]: /user-manual/physics/physics-basics/#rigid-bodies
<!-- [compound-shapes-project]: https://playcanvas.com/project/688146/overview/compound-physics-shapes -->
[collision-component]: /user-manual/scenes/components/collision/
