---
title: 레이캐스팅 (Ray Casting)
---

OasisW 물리 엔진을 사용하면 레이캐스트를 수행할 수 있습니다. 레이캐스트는 두 개의 임의 3D 점 사이의 직선이 강체와 교차하는지 결정하는 쿼리입니다.

레이캐스팅의 한 가지 응용은 피킹(picking)으로, 사용자가 화면을 터치/클릭하여 엔티티를 선택할 수 있습니다. 다음은 카메라 위치에서 화면 터치/클릭 위치를 통해 씬으로 레이캐스트를 수행하고 가장 가까운 선택된 강체 활성화 엔티티를 반환하는 스크립트입니다:

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

레이캐스팅에는 다른 응용도 있습니다. 엔티티는 레이캐스트를 발사하여 환경을 탐지할 수 있습니다. 예를 들어, 엔티티가 지면에 있는지 확인하려면 일정 거리만큼 직접 아래쪽으로 레이캐스트를 발사하고 환경과 교차하는지 확인할 수 있습니다.

<!-- [1]: https://playcanvas.com/project/410547/overview/entity-picking-using-physics -->
