---
title: ammo.js API 호출 (Calling the ammo.js API)
---

OasisW는 ammo.js와 연결되어 있지만, ammo.js API의 모든 기능을 그대로 열어 주지는 않습니다. 대신 OasisW 스크립트 안에서 ammo.js API를 직접 불러 쓸 수 있으니, 기본으로 제공되지 않는 기능은 이렇게 직접 호출해서 사용하면 됩니다.

OasisW는 지금 ammo.js의 [이 빌드][1]를 사용하고 있습니다. 이 빌드에서 쓸 수 있는 API 목록은 [여기][2]에서 볼 수 있습니다. ammo.js 자체의 공식 문서는 없지만, 더 깊이 알고 싶다면 [Bullet Physics 사용자 가이드][3]가 좋은 참고가 됩니다.

## 조인트 제약 조건

물리 제약 조건(물체끼리 서로 이어 붙이는 장치로, 물리 조인트라고 부르기도 합니다)을 곧바로 만들어 주는 OasisW 컴포넌트는 아직 없습니다. 하지만 ammo.js API를 이용하면 제약 조건을 만드는 스크립트를 어렵지 않게 직접 작성할 수 있습니다.

아래는 포인트 투 포인트 제약 조건을 만드는 스크립트입니다. 두 점을 한곳에 고정해 붙여 두는 방식으로, 쉽게 말해 어깨 관절처럼 자유롭게 회전하는 볼 앤 소켓 조인트라고 보면 됩니다:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem  value="esm" label="ESM">

```javascript
import { Script, Vec3, Entity, Color } from 'playcanvas';

export class PointToPointConstraint extends Script {
    static scriptName = "pointToPointConstraint";

    /**
     * Position of the constraint in the local space of this entity.
     * 
     * @attribute
     * @title Pivot
     * @type {Vec3}
     */
    pivotA = new pc.Vec3(0, 0, 0);

    /**
     * Optional second entity.
     * 
     * @attribute
     * @title Connected Entity
     * @type {Entity}
     */
    entityB = null;

    /**
     * Position of the constraint in the local space of entity B (if specified).
     * 
     * @attribute
     * @title Connected Pivot
     * @type {Vec3}
     */
    pivotB = new pc.Vec3(0, 0, 0);

    /**
     * Maximum breaking impulse threshold required to break the constraint.
     * 
     * @attribute
     * @title Break Threshold
     * @type {number}
     */
    breakingThreshold = 3.4e+38;

    /**
     * Enable collision between linked rigid bodies.
     * 
     * @attribute
     * @title Enable Collision
     * @type {boolean}
     */
    enableCollision = true;

    /**
     * Enable to render a representation of the constraint.
     * 
     * @attribute
     * @title Debug Render
     * @type {boolean}
     */
    debugRender = false;

    /**
     * The color of the debug rendering of the constraint.
     * 
     * @attribute
     * @title Debug Color
     * @type {Color}
     */
    debugColor = new Color(1, 0, 0);

    initialize() {
        this.createConstraint();

        this.on('attr', (name, value, prev) => {
            // If any constraint properties change, recreate the constraint
            if (name === 'pivotA' || name === 'entityB' || name === 'pivotB') {
                this.createConstraint();
            } else if (name === 'breakingThreshold') {
                this.constraint.setBreakingImpulseThreshold(this.breakingThreshold);
                this.activate();
            }
        });
        this.on('enable', () => {
            this.createConstraint();
        });
        this.on('disable', () => {
            this.destroyConstraint();
        });
        this.on('destroy', () => {
            this.destroyConstraint();
        });
    }

    createConstraint() {
        if (this.constraint) {
            this.destroyConstraint();
        }

        var bodyA = this.entity.rigidbody.body;
        var pivotA = new Ammo.btVector3(this.pivotA.x, this.pivotA.y, this.pivotA.z);
        if (this.entityB && this.entityB.rigidbody) {
            var bodyB = this.entityB.rigidbody.body;
            var pivotB = new Ammo.btVector3(this.pivotB.x, this.pivotB.y, this.pivotB.z);
            this.constraint = new Ammo.btPoint2PointConstraint(bodyA, bodyB, pivotA, pivotB);
        } else {
            this.constraint = new Ammo.btPoint2PointConstraint(bodyA, pivotA);
        }

        var dynamicsWorld = this.app.systems.rigidbody.dynamicsWorld;
        dynamicsWorld.addConstraint(this.constraint, !this.enableCollision);

        this.activate();
    }

    destroyConstraint() {
        if (this.constraint) {
            const dynamicsWorld = this.app.systems.rigidbody.dynamicsWorld;
            dynamicsWorld.removeConstraint(this.constraint);
            Ammo.destroy(this.constraint);
            this.constraint = null;
        }
    }

    activate() {
        this.entity.rigidbody.activate();
        if (this.entityB) {
            this.entityB.rigidbody.activate();
        }
    }

    update(dt) {
        if (this.debugRender) {
        // Note that it's generally bad to allocate new objects in an update function
        // but this is just for debug rendering and will normally be disabled
        var tempVecA = new Vec3();
        this.entity.getWorldTransform().transformPoint(this.pivotA, tempVecA);
        this.app.renderLine(this.entity.getPosition(), tempVecA, this.debugColor);
        if (this.entityB) {
            this.app.renderLine(this.entityB.getPosition(), tempVecA, this.debugColor);
        }
    }
    }
}

```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var PointToPointConstraint = pc.createScript('pointToPointConstraint');

PointToPointConstraint.attributes.add('pivotA', {
    title: 'Pivot',
    description: 'Position of the constraint in the local space of this entity.',
    type: 'vec3',
    default: [0, 0, 0]
});
PointToPointConstraint.attributes.add('entityB', {
    title: 'Connected Entity',
    description: 'Optional second entity',
    type: 'entity'
});
PointToPointConstraint.attributes.add('pivotB', {
    title: 'Connected Pivot',
    description: 'Position of the constraint in the local space of entity B (if specified).',
    type: 'vec3',
    default: [0, 0, 0]
});
PointToPointConstraint.attributes.add('breakingThreshold', {
    title: 'Break Threshold',
    description: 'Maximum breaking impulse threshold required to break the constraint.',
    type: 'number',
    default: 3.4e+38
});
PointToPointConstraint.attributes.add('enableCollision', {
    title: 'Enable Collision',
    description: 'Enable collision between linked rigid bodies.',
    type: 'boolean',
    default: true
});
PointToPointConstraint.attributes.add('debugRender', {
    title: 'Debug Render',
    description: 'Enable to render a representation of the constraint.',
    type: 'boolean',
    default: false
});
PointToPointConstraint.attributes.add('debugColor', {
    title: 'Debug Color',
    description: 'The color of the debug rendering of the constraint.',
    type: 'rgb',
    default: [1, 0, 0]
});

// initialize code called once per entity
PointToPointConstraint.prototype.initialize = function() {
    this.createConstraint();

    this.on('attr', function(name, value, prev) {
        // If any constraint properties change, recreate the constraint
        if (name === 'pivotA' || name === 'entityB' || name === 'pivotB') {
            this.createConstraint();
        } else if (name === 'breakingThreshold') {
            this.constraint.setBreakingImpulseThreshold(this.breakingThreshold);
            this.activate();
        }
    });
    this.on('enable', function () {
        this.createConstraint();
    });
    this.on('disable', function () {
        this.destroyConstraint();
    });
    this.on('destroy', function () {
        this.destroyConstraint();
    });
};

PointToPointConstraint.prototype.createConstraint = function() {
    if (this.constraint) {
        this.destroyConstraint();
    }

    var bodyA = this.entity.rigidbody.body;
    var pivotA = new Ammo.btVector3(this.pivotA.x, this.pivotA.y, this.pivotA.z);
    if (this.entityB && this.entityB.rigidbody) {
        var bodyB = this.entityB.rigidbody.body;
        var pivotB = new Ammo.btVector3(this.pivotB.x, this.pivotB.y, this.pivotB.z);
        this.constraint = new Ammo.btPoint2PointConstraint(bodyA, bodyB, pivotA, pivotB);
    } else {
        this.constraint = new Ammo.btPoint2PointConstraint(bodyA, pivotA);
    }

    var dynamicsWorld = this.app.systems.rigidbody.dynamicsWorld;
    dynamicsWorld.addConstraint(this.constraint, !this.enableCollision);

    this.activate();
};

PointToPointConstraint.prototype.destroyConstraint = function() {
    if (this.constraint) {
        var dynamicsWorld = this.app.systems.rigidbody.dynamicsWorld;
        dynamicsWorld.removeConstraint(this.constraint);
        Ammo.destroy(this.constraint);
        this.constraint = null;
    }
};

PointToPointConstraint.prototype.activate = function() {
    this.entity.rigidbody.activate();
    if (this.entityB) {
        this.entityB.rigidbody.activate();
    }
};

// update code called every frame
PointToPointConstraint.prototype.update = function(dt) {
    if (this.debugRender) {
        // Note that it's generally bad to allocate new objects in an update function
        // but this is just for debug rendering and will normally be disabled
        var tempVecA = new pc.Vec3();
        this.entity.getWorldTransform().transformPoint(this.pivotA, tempVecA);
        this.app.renderLine(this.entity.getPosition(), tempVecA, this.debugColor);
        if (this.entityB) {
            this.app.renderLine(this.entityB.getPosition(), tempVecA, this.debugColor);
        }
    }
};
```

</TabItem>
</Tabs>

<!-- ammo.js의 모든 제약 조건 유형을 구현하는 프로젝트는 [여기][4]에서 찾을 수 있습니다. -->

## 연속 충돌 감지

물체(강체)가 아주 빠르게 움직이면, 시뮬레이션에서 서로 부딪히지 않고 그냥 뚫고 지나가 버리는 경우가 있습니다. 이 문제를 해결하기 위해 ammo.js는 연속 충돌 감지(줄여서 CCD)라는 기능을 제공합니다. CCD는 물체의 직전 위치와 현재 위치 사이를 구체 모양으로 훑으면서(스윕), 그 사이에 다른 물체와 겹치는 지점이 있는지까지 추가로 검사합니다. 덕분에 빠르게 움직이는 물체라도 충돌을 놓치지 않고 잡아낼 수 있습니다.

아래 스크립트를 붙이면 어떤 OasisW 강체에도 CCD를 켤 수 있습니다:

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem  value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class Ccd extends Script {
    static scriptName = "ccd";

    /**
     * Number of meters moved in one frame before CCD is enabled.
     * 
     * @attribute
     * @title Motion Threshold
     * @type {number}
     */
    motionThreshold = 1;

    /**
     * This should be below the half extent of the collision volume. E.g., For an object of dimensions 1 meter, try 0.2.
     * 
     * @attribute
     * @title Swept Sphere Radius
     * @type {number}
     */
    sweptSphereRadius = 0.2;

    initialize() {
        const body = this.entity.rigidbody.body;
        body.setCcdMotionThreshold(this.motionThreshold);
        body.setCcdSweptSphereRadius(this.sweptSphereRadius);

        this.on('attr:motionThreshold', function(value) {
            body = this.entity.rigidbody.body;
            body.setCcdMotionThreshold(value);
        });
        this.on('attr:sweptSphereRadius', function(value) {
            body = this.entity.rigidbody.body;
            body.setCcdSweptSphereRadius(value);
        });
    }
}
```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var Ccd = pc.createScript('ccd');

Ccd.attributes.add('motionThreshold', {
    type: 'number',
    default: 1,
    title: 'Motion Threshold',
    description: 'Number of meters moved in one frame before CCD is enabled'
});

Ccd.attributes.add('sweptSphereRadius', {
    type: 'number',
    default: 0.2,
    title: 'Swept Sphere Radius',
    description: 'This should be below the half extent of the collision volume. E.g For an object of dimensions 1 meter, try 0.2'
});

// initialize code called once per entity
Ccd.prototype.initialize = function() {
    var body; // Type btRigidBody

    body = this.entity.rigidbody.body;
    body.setCcdMotionThreshold(this.motionThreshold);
    body.setCcdSweptSphereRadius(this.sweptSphereRadius);

    this.on('attr:motionThreshold', function(value, prev) {
        body = this.entity.rigidbody.body;
        body.setCcdMotionThreshold(value);
    });
    this.on('attr:sweptSphereRadius', function(value, prev) {
        body = this.entity.rigidbody.body;
        body.setCcdSweptSphereRadius(value);
    });
};
```

</TabItem>
</Tabs>

<!-- CCD를 구현하는 프로젝트는 [여기][5]에서 찾을 수 있습니다. -->

지금까지 살펴본 두 가지는 ammo.js API를 직접 쓰는 예시일 뿐입니다. 같은 방식으로 아래와 같은 기능도 얼마든지 만들 수 있습니다:

- 복합 충돌 모양
- 소프트 바디 시뮬레이션
- 천 시뮬레이션
- 차량

[1]: https://github.com/kripken/ammo.js/commit/dcab07bf0e7f2b4b64c01dc45da846344c8f50be
[2]: https://github.com/kripken/ammo.js/blob/dcab07bf0e7f2b4b64c01dc45da846344c8f50be/ammo.idl
[3]: https://github.com/bulletphysics/bullet3/blob/master/docs/Bullet_User_Manual.pdf
<!-- [4]: https://playcanvas.com/project/618829/overview/physics-constraints -->
<!-- [5]: https://playcanvas.com/project/447023/overview/physics-with-ccd -->
