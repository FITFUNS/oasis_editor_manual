---
title: Render
---

A render asset in OasisW is a **core building block that defines how a 3D model looks** in a scene. It holds the **mesh data and materials** that determine how an object is drawn in a 3D environment.

Render assets are mainly used to:

- Define the shape and structure of a 3D model.
- Apply materials to the model.

## Where they are created

Render assets are **not created directly** — they are generated automatically when you upload a `.glb` or `.fbx` file. The resulting resource has a `.glb` extension. See [Importing 3D Models](/user-manual/assets/models) for the full process.

:::note How is this different from a template?

A [template](/user-manual/assets/types/template) holds an *entity hierarchy*, while a render asset holds the *mesh itself*. When placing a model in a scene you usually drag in a template, whereas a render asset is used when you assign a mesh directly to a slot on the [render component](/user-manual/scenes/components/render).

:::

## Related documentation

- [Render component](/user-manual/scenes/components/render) — Displays a mesh on an entity.
- [Material](/user-manual/assets/types/material) — Defines the surface appearance of a mesh.
- [Importing 3D Models](/user-manual/assets/models)
