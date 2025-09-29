---
title: Rigid Body
---

The rigid body component enables an entity to participate in the scene's physics simulation. This allows realistic simulation of the entity's movement. The component interface dynamically displays different properties based on the 'Type' property.

The rigid body component can be enabled or disabled using the toggle in the top-right of the component panel. When enabled and the component has a sibling collision component, the rigid body participates in physics simulation.

#### Static

![Rigid Body component (Static)](/img/user-manual/scenes/components/component-rigid-body-static.png)

#### Dynamic

![Rigid Body component (Dynamic)](/img/user-manual/scenes/components/component-rigid-body-dynamic.png)

#### Kinematic

![Rigid Body component (Kinematic)](/img/user-manual/scenes/components/component-rigid-body-kinematic.png)

To define the shape of the rigid body, you must add a [collision component][4] to the same entity. Otherwise, the rigid body component has no effect and does not participate in physics simulation.

## Properties

| Property        | Description |
|-----------------|-------------|
| Type            | The type of rigid body: <ul><li>Static</li><li>Dynamic</li><li>Kinematic</li></ul> |
| Mass            | The mass of the rigid body. If the scene's world units are meters, the mass unit is kilograms. |
| Linear Damping  | Specifies the ratio of linear velocity the rigid body loses per second. |
| Angular Damping | Specifies the ratio of angular velocity the rigid body loses per second. |
| Linear Factor   | A multiplier for the rigid body's linear movement on each world axis. Setting this to 0 for any axis prevents movement on that axis - useful for 2D games or creating 1D/2D movement. |
| Angular Factor  | A multiplier for the rigid body's angular (rotational) movement on each world axis. Setting this to 0 for any axis prevents rotation around that axis. |
| Friction        | Controls the rate at which the rigid body loses velocity when in contact with other rigid bodies. |
| Restitution     | A measure of the rigid body's elasticity between 0 and 1. Warning: Setting this to 1 means moving rigid bodies will never stop (unless they collide with other rigid bodies with restitution less than 1 or are stopped by script). |

## Scripting Interface

You can control the rigid body component's properties using a [script component][5]. The rigid body component's scripting interface is [here][6].

[4]: /user-manual/scenes/components/collision/
[5]: /user-manual/scenes/components/script
[6]: https://manual.oasisserver.link/engine/classes/RigidBodyComponent.html
