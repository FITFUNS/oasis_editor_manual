---
title: Collision
---

The collision component assigns a collision volume to an entity. The component interface dynamically displays different properties based on the 'Type' property.

The Collision component can be enabled or disabled using the toggle in the top right of the component panel. If enabled and if the component is a trigger volume (because it has no sibling rigidbody component), the trigger volume will be enabled. Likewise, if the component does have a sibling rigidbody component, the rigidbody will be enabled.

#### Box

![Collision component (Box)](/img/user-manual/scenes/components/component-collision-box.png)

#### Capsule

![Collision component (Capsule)](/img/user-manual/scenes/components/component-collision-capsule.png)

#### Compound

![Collision component (Compound)](/img/user-manual/scenes/components/component-collision-compound.png)

#### Cone

![Collision component (Cone)](/img/user-manual/scenes/components/component-collision-cone.png)

#### Cylinder

![Collision component (Cylinder)](/img/user-manual/scenes/components/component-collision-cylinder.png)

#### Mesh

![Collision component (Mesh)](/img/user-manual/scenes/components/component-collision-mesh.png)

#### Sphere

![Collision component (Sphere)](/img/user-manual/scenes/components/component-collision-sphere.png)

If the entity also has a rigid body component, the collision component determines the shape of the rigid body. If there's no rigid body component, the collision component is treated as a trigger volume. Trigger volumes cannot affect other rigid body simulations in the scene. Instead, you can add a script component and connect a script that responds to trigger events. For example, you can receive notifications in the script when other entities with rigid body components enter or exit the trigger.

## Properties {#properties}

| Property     | Description |
|--------------|-------------|
| Type         | The type of collision primitive. Can be one of:<ul><li>Box</li><li>Sphere</li><li>Capsule</li><li>Mesh</li></ul> |
| Half Extents | Box only. The radius of the collision box. This is a 3D vector: local space half-width, half-height, half-depth. |
| Axis         | Capsule only. Aligns the capsule to the entity's local space X, Y, or Z axis. |
| Height       | Capsule only. The height from end to end of the capsule. |
| Radius       | Sphere and capsule only. The radius of the sphere or capsule body. |
| Asset        | Mesh only. The [render asset](../../assets/types/render.md) or model asset to be used as the source for the triangle-based collision mesh. |

## Scripting Interface

You can control the collision component's properties using a [script component][8]. The collision component's scripting interface is [here][9].

[8]: /user-manual/scenes/components/script
[9]: https://manual.oasisserver.link/engine/classes/CollisionComponent.html
