---
title: Ray Casting
---

Using the OasisW physics engine, you can perform raycasts. A raycast is a query that determines whether a straight line between two arbitrary 3D points intersects with rigid bodies.

One application of raycasting is picking, where users can select entities by touching/clicking on the screen. Here is a script that performs a raycast from the camera position through the screen touch/click position into the scene and returns the closest selected rigid body enabled entity:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem  value="esm" label="ESM">

```javascript
import { Script, Vec3 } from 'playcanvas';

export class Raycast extends Script {
    static scriptName = "raycast";

    initialize() {
        if (!this.entity.camera) {
            console.error('This script must be applied to an entity with a camera component.');
            return;
        }

        // Add a mousedown event handler
        this.app.mouse.on('mousedown', this.mouseDown, this);

        // Add touch event only if touch is available
        if (this.app.touch) {
            this.app.touch.on('touchstart', this.touchStart, this);
        }
    }

    mouseDown(e) {
        this.doRaycast(e.x, e.y);
    }

    touchStart(e) {
        // Only perform the raycast if there is one finger on the screen
        if (e.touches.length === 1) {
            this.doRaycast(e.touches[0].x, e.touches[0].y);
        }
        e.event.preventDefault();
    }

    doRaycast(screenX, screenY) {
        // The pc.Vec3 to raycast from (the position of the camera)
        const from = this.entity.getPosition();

        // The pc.Vec3 to raycast to (the click position projected onto the camera's far clip plane)
        const to = this.entity.camera.screenToWorld(screenX, screenY, this.entity.camera.farClip);

        // Raycast between the two points and return the closest hit result
        const result = this.app.systems.rigidbody.raycastFirst(from, to);

        // If there was a hit, store the entity
        if (result) {
            const hitEntity = result.entity;
            console.log('You selected ' + hitEntity.name);
        }
    }
}

```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var Raycast = pc.createScript('raycast');

// initialize code called once per entity
Raycast.prototype.initialize = function() {
    if (!this.entity.camera) {
        console.error('This script must be applied to an entity with a camera component.');
        return;
    }

    // Add a mousedown event handler
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.mouseDown, this);

    // Add touch event only if touch is available
    if (this.app.touch) {
        this.app.touch.on(pc.EVENT_TOUCHSTART, this.touchStart, this);
    }
};

Raycast.prototype.mouseDown = function (e) {
    this.doRaycast(e.x, e.y);
};

Raycast.prototype.touchStart = function (e) {
    // Only perform the raycast if there is one finger on the screen
    if (e.touches.length === 1) {
        this.doRaycast(e.touches[0].x, e.touches[0].y);
    }
    e.event.preventDefault();
};

Raycast.prototype.doRaycast = function (screenX, screenY) {
    // The pc.Vec3 to raycast from (the position of the camera)
    const from = this.entity.getPosition();

    // The pc.Vec3 to raycast to (the click position projected onto the camera's far clip plane)
    const to = this.entity.camera.screenToWorld(screenX, screenY, this.entity.camera.farClip);

    // Raycast between the two points and return the closest hit result
    const result = this.app.systems.rigidbody.raycastFirst(from, to);

    // If there was a hit, store the entity
    if (result) {
        const hitEntity = result.entity;
        console.log('You selected ' + hitEntity.name);
    }
};
```

</TabItem>
</Tabs>

<!-- A project using raycasting for entity selection can be found [here][1]. -->

Raycasting has other applications. Entities can fire raycasts to detect the environment. For example, to check if an entity is on the ground, you can fire a raycast directly downward for a certain distance and check if it intersects with the environment.

<!-- [1]: https://playcanvas.com/project/410547/overview/entity-picking-using-physics -->
