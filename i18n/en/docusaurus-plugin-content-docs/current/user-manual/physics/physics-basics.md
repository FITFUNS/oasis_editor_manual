---
title: Physics Basics
---

OasisW integrates a very powerful physics engine called [ammo.js][1]. This is a browser port of the open-source C++ Bullet physics engine.

OasisW provides [rigidbody][2] and [collision][3] components to set up physics simulation.

## Enabling Physics {#enabling-physics}

By default, new OasisW projects do not include the ammo.js module. This is because ammo.js is hundreds of kilobytes and apps don't need to load this library if it's not required.

You can import the ammo.js module into your project using the import button in the Scene Settings panel:

![Physics Settings](/img/user-manual/physics/physics-settings.png)

This will import the default build of ammo.js provided by OasisW. However, it's also possible to compile your own version of ammo.js and add it to your project. See [this page][11] for more information.

<!-- For details on migrating legacy projects to the latest ammo.js, see [this page][10]. -->

## Gravity {#gravity}

In the same Settings panel, you can set the global gravity for the physics simulation. Gravity is a constant force applied to all rigid bodies in the scene. By default, this is set to -9.81 in the negative Y-axis of the world (i.e., straight down). This default value approximates Earth's gravity. However, you might want to increase or decrease this value. For example, for a game set in space, you would want to set gravity to 0.

## Units of Measurement {#units-of-measurement}

By default, the OasisW physics engine interprets 1 unit as 1 meter. Therefore, you need to set the scale of objects in your scene appropriately for objects to fall at a physically accurate speed.

For example, if you have a character that is 1.8m tall in your game, it should be 1.8 units tall in the editor's 3D view.

## Rigid Bodies {#rigid-bodies}

You can make any entity in your scene participate in physics simulation. You just need to add a rigidbody component and a collision component. The rigidbody component specifies the type:

- Static - Physics objects that never move
- Dynamic - Physics objects that move in response to applied forces
- Kinematic - Physics objects whose position can only be set explicitly via the API

It also specifies physical properties such as mass, friction, and restitution (essentially a measure of 'bounciness').

The collision component specifies the physical shape of the body. The physical shape of a rigid body doesn't need to match the graphical shape. It's common for the physical representation of an object to be much simpler than the graphics. The available collision component types are:

- Box
- Sphere
- Capsule
- Cylinder
- Mesh
- Cone
- [Compound][12]

## Creating a Static Ground {#creating-a-static-ground}

In most cases, you'll want to create some kind of static physics environment. For example, a race track or football field. The simplest example is a flat plane. OasisW doesn't expose a plane collision primitive, but it does provide a box primitive. Here's how to set up a 10x10 box that is 1 unit tall as a static rigid body:

![Static Ground](/img/user-manual/physics/static-ground.png)

If you want something more complex, you can also set the collision component type to Mesh and assign a model asset.

## Creating Dynamic Bodies {#creating-dynamic-bodies}

Physics is all about movement, so it gets interesting when you create dynamic rigid bodies. Let's create a dynamic 1x1x1 box:

![Dynamic Box](/img/user-manual/physics/dynamic-box.png)

The box will bounce in interesting ways when it collides with the static ground:

![Falling Box](/img/user-manual/physics/falling-box.gif)

## Creating Kinematic Bodies {#creating-kinematic-bodies}

Sometimes it's useful to explicitly control the movement of physics objects in your scene and have these objects apply forces to other physics objects that they can't resist. For example, imagine a moving platform that can carry the player across a level. To achieve this, you can set the rigid body type to Kinematic. Let's create a kinematic box:

![Kinematic Box](/img/user-manual/physics/kinematic-box.png)

It's your responsibility as a developer to animate kinematic bodies. You can see that the kinematic box shown above also has a script component with a script called movement.js assigned:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem  value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class Movement extends Script {
    static scriptName = "movement";

    initialize() {

    }

    update(dt) {
        this.entity.setPosition(Math.sin(Date.now() / 1000), 0.5, 0);
    }
}
```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var Movement = pc.createScript('movement');

// initialize code called once per entity
Movement.prototype.initialize = function() {

};

// update code called every frame
Movement.prototype.update = function(dt) {
    this.entity.setPosition(Math.sin(Date.now() / 1000), 0.5, 0);
};
```

</TabItem>
</Tabs>

This script simply animates the box along the world x-axis using a sine function. You move kinematic bodies using the entity's standard transform functions like `setPosition`, `setRotation`, `setEulerAngles`. Now when you run the scene, the dynamic box will fall onto the kinematic box and be carried along with it:

![Kinematic Box](/img/user-manual/physics/kinematic-box.gif)

## Teleporting Dynamic Bodies {#teleporting-dynamic-bodies}

While you can use standard entity transform functions on kinematic bodies, this is not allowed for dynamic bodies. When you create a dynamic rigid body, you hand over responsibility for setting the position and orientation of that entity to the physics engine. This means that if you try to update the entity's position or orientation in a script using the pc.Entity API, the functions will have no effect. Instead, you must call the teleport function of the rigidbody component, which explicitly tells the physics engine that you want to temporarily update the position and/or orientation of the rigid body.

[1]: https://github.com/kripken/ammo.js
[2]: /user-manual/scenes/components/rigidbody/
[3]: /user-manual/scenes/components/collision/
[10]: /user-manual/physics/physics-migration/
[11]: /user-manual/assets/types/wasm/
[12]: /user-manual/physics/compound-shapes/
