---
title: Compound Shapes
---

Compound shapes are custom collision shapes created from multiple primitive shapes ([full list of shapes][primitive-shapes-list]). This allows you to have more complex collision shapes without using custom mesh models.

The main advantage is that you can have dynamic rigid body collisions between compound shapes, which is impossible with mesh collision types (shown below).

<!-- <div className="iframe-container">
    <iframe src="https://playcanv.as/e/p/KXZ5Lsda/" title="Compound Physic Shapes" allow="camera; microphone; xr-spatial-tracking; fullscreen" allowfullscreen></iframe>
</div>

[OasisW project link][compound-shapes-project] -->

The shape of a compound physics object is defined by the collision shapes of its children, as shown below.

![Compound shapes setup](/img/user-manual/physics/compound-shape-chair-setup.png)

![Compound shapes chair](/img/user-manual/physics/compound-shape-chair.gif)

The Chair entity (parent) has a [Collision Component][collision-component] with its type set to 'Compound'.

Child entities form the shape of the physics object with collision components and types set to primitive shapes, positioned relative to the parent.

The parent is also the center of mass of the physics object, and it's recommended to place it within the bounds of the object shape (usually the center). Otherwise, the object may exhibit strange behavior when forces and torques are applied, such as rotating around an invisible pivot in the world.

[primitive-shapes-list]: /user-manual/physics/physics-basics/#rigid-bodies
<!-- [compound-shapes-project]: https://playcanvas.com/project/688146/overview/compound-physics-shapes -->
[collision-component]: /user-manual/scenes/components/collision/
