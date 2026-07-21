---
title: 레이캐스팅 (Ray Casting)
---

OasisW 물리 엔진에서는 레이캐스트(ray cast)를 할 수 있습니다. 레이캐스트란 3D 공간의 두 점을 잇는 직선을 쏘아서 그 선이 강체와 부딪히는지 알아보는 기능입니다.

레이캐스팅을 활용하는 대표적인 예가 피킹(picking)입니다. 사용자가 화면을 터치하거나 클릭해서 엔티티를 고르는 기능이죠. 아래 스크립트는 카메라 위치에서 화면의 클릭/터치 지점을 향해 씬 안으로 레이캐스트를 쏘고, 가장 가까이 맞은 강체 엔티티를 돌려줍니다:

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

<!-- 엔티티 선택에 레이캐스팅을 사용하는 프로젝트는 [여기][1]에서 찾을 수 있습니다. -->

레이캐스팅은 다른 용도로도 쓸 수 있습니다. 엔티티가 레이캐스트를 쏘아서 주변 환경을 살필 수도 있죠. 예를 들어 엔티티가 바닥에 닿아 있는지 확인하려면, 바로 아래쪽으로 일정 거리만큼 레이캐스트를 쏜 다음 그 선이 바닥과 부딪히는지 보면 됩니다.

<!-- [1]: https://playcanvas.com/project/410547/overview/entity-picking-using-physics -->
