---
title: 힘과 임펄스 (Forces and Impulses)
---

동적 강체는 힘(force)과 임펄스(impulse)를 받으면 움직입니다. 힘은 일정 시간 동안 꾸준히 미는 것이고, 임펄스는 한순간에 확 밀어 주는 힘이라고 생각하면 됩니다.

강체에 힘이나 임펄스를 주려면 [pc.RigidBodyComponent 스크립팅 API][1]를 사용합니다.

예시를 몇 개 살펴봅시다. 무거운 물체를 바닥에서 밀고 싶다면, 일정 시간 동안 힘을 계속 주면 됩니다:

```javascript
MyScript.prototype.update = function(dt) {
    // 오른쪽 화살표 키가 눌린 동안 오른쪽으로 힘을 적용
    if (app.keyboard.isPressed(pc.KEY_RIGHT)) {
        this.entity.rigidbody.applyForce(10, 0, 0);
    }
};
```

대포에서 포탄을 쏘고 싶다면, 임펄스를 한 번만 주면 됩니다:

```javascript
MyScript.prototype.update = function(dt) {
    // 스페이스바가 눌렸다면 위쪽과 오른쪽으로 임펄스를 적용
    if (app.keyboard.wasPressed(pc.KEY_SPACE)) {
        this.entity.rigidbody.applyImpulse(10, 10, 0);
    }
};
```

[1]: https://manual.oasisserver.link/engine/classes/RigidBodyComponent.html
