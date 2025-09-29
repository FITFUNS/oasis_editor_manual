---
title: ammo.js API 호출 (Calling the ammo.js API)
---

OasisW와 ammo.js의 통합은 ammo.js API의 전체 기능을 노출하지 않습니다. 그러나 OasisW 스크립트에서 ammo.js API를 직접 호출하는 것이 가능합니다.

OasisW는 현재 ammo.js의 [이 빌드][1]를 사용합니다. 이 빌드에서 노출된 API는 [여기][2]에서 찾을 수 있습니다. ammo.js에 대한 공식 문서는 없지만, 더 자세히 알아보려면 [Bullet Physics 사용자 가이드][3]를 참조할 수 있습니다.

## 조인트 제약 조건

현재 물리 제약 조건(때로는 물리 조인트라고도 함)을 구현하는 OasisW 컴포넌트는 없습니다. 그러나 ammo.js API를 활용하여 제약 조건을 구현하는 스크립트를 만드는 것은 쉽습니다.

다음은 포인트 투 포인트 제약 조건(본질적으로 볼 앤 소켓 조인트)에 대한 스크립트입니다:

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

때로는 시뮬레이션에서 빠르게 움직이는 강체가 서로 통과하는 것을 발견할 수 있습니다. 이를 극복하기 위해 ammo.js는 연속 충돌 감지(또는 줄여서 CCD)라는 개념을 제공합니다. 이는 강체의 이전 위치와 현재 위치 사이에서 구체 볼륨을 스윕하고 다른 몸체의 볼륨과의 교차점을 찾아 충돌에 대한 추가 검사를 활성화합니다.

다음 스크립트를 사용하여 모든 OasisW 강체에 대해 CCD를 활성화할 수 있습니다:

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

이것들은 ammo.js API를 직접 사용하는 두 가지 예일 뿐입니다. 다음과 같은 추가적인 것들을 구현하는 데도 사용할 수 있습니다:

- 복합 충돌 모양
- 소프트 바디 시뮬레이션
- 천 시뮬레이션
- 차량

[1]: https://github.com/kripken/ammo.js/commit/dcab07bf0e7f2b4b64c01dc45da846344c8f50be
[2]: https://github.com/kripken/ammo.js/blob/dcab07bf0e7f2b4b64c01dc45da846344c8f50be/ammo.idl
[3]: https://github.com/bulletphysics/bullet3/blob/master/docs/Bullet_User_Manual.pdf
<!-- [4]: https://playcanvas.com/project/618829/overview/physics-constraints -->
<!-- [5]: https://playcanvas.com/project/447023/overview/physics-with-ccd -->
