---
title: Forces and Impulses
---

Dynamic rigid bodies move in response to forces and impulses. Forces are applied to the body over a period of time, while impulses are forces applied instantaneously.

To apply forces or impulses to a rigid body, you need to use the [pc.RigidBodyComponent scripting API][1].

Let's look at a few examples. If you want to push a heavy object across the floor, you would apply a force over time:

```javascript
MyScript.prototype.update = function(dt) {
    // Apply force to the right while the right arrow key is pressed
    if (app.keyboard.isPressed(pc.KEY_RIGHT)) {
        this.entity.rigidbody.applyForce(10, 0, 0);
    }
};
```

If you want to fire a cannonball from a cannon, you would apply a single impulse:

```javascript
MyScript.prototype.update = function(dt) {
    // Apply impulse upward and to the right if spacebar was pressed
    if (app.keyboard.wasPressed(pc.KEY_SPACE)) {
        this.entity.rigidbody.applyImpulse(10, 10, 0);
    }
};
```

[1]: https://manual.oasisserver.link/engine/classes/RigidBodyComponent.html
