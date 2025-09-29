---
title: 힘과 임펄스 (Forces and Impulses)
---

동적 강체는 힘과 임펄스에 반응하여 움직입니다. 힘은 일정 시간 동안 몸체에 적용되는 반면, 임펄스는 순간적으로 적용되는 힘입니다.

강체에 힘이나 임펄스를 적용하려면 [pc.RigidBodyComponent 스크립팅 API][1]를 사용해야 합니다.

몇 가지 예를 살펴보겠습니다. 무거운 물체를 바닥에서 밀고 싶다면, 일정 시간 동안 힘을 적용할 것입니다:

```javascript
MyScript.prototype.update = function(dt) {
    // 오른쪽 화살표 키가 눌린 동안 오른쪽으로 힘을 적용
    if (app.keyboard.isPressed(pc.KEY_RIGHT)) {
        this.entity.rigidbody.applyForce(10, 0, 0);
    }
};
```

대포에서 포탄을 발사하고 싶다면, 단일 임펄스를 적용할 것입니다:

```javascript
MyScript.prototype.update = function(dt) {
    // 스페이스바가 눌렸다면 위쪽과 오른쪽으로 임펄스를 적용
    if (app.keyboard.wasPressed(pc.KEY_SPACE)) {
        this.entity.rigidbody.applyImpulse(10, 10, 0);
    }
};
```

[1]: https://manual.oasisserver.link/engine/classes/RigidBodyComponent.html
