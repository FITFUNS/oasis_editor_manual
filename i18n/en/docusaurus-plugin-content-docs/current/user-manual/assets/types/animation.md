---
title: Animation
---

An Animation asset is used to play back a **single animation** on a 3D model. You import one by uploading a 3D scene file (FBX, GLB, etc.) that contains animation data. The asset pipeline extracts the animation data from the file and creates the [Target asset](/user-manual/assets) that your game actually uses.

:::note A helpful way to think about it

If a single model file contains 'walk', 'run', and 'jump' animations, then uploading it creates **three** Animation assets. Each asset is responsible for one motion.

:::

## Importing

1. Drag a model file that contains animations into the Assets Panel, or upload it with **+ › Upload Files**.
2. Once conversion finishes, an asset of type `Animation` appears in the list.
3. Choose `Animation` in the type filter to show only the animations.

The import source is `.glb` · `.fbx`, and the resulting resource extension is `.glb`.

## Previewing an Animation

The Inspector includes a **viewer that lets you preview an animation together with a template or model asset**. This is especially useful when you have a single animation that can be applied across several character rigs, because you can check whether it looks natural on a given character before placing it in the scene.

![Animation preview in the asset Inspector](/img/user-manual/assets/animation/inspector-preview.gif)

The same viewer appears when you select a state in the [Anim State Graph editor](/user-manual/animation/anim-state-graph-assets). When you pick a state, **every entity in the scene that uses that graph is listed**, so you can choose which entity to preview with.

![Preview in the Anim State Graph](/img/user-manual/assets/animation/anim-state-graph-preview.gif)

## How Do I Use It

An Animation asset on its own does not play back. You need to add an [Anim component](/user-manual/scenes/components/anim) to an entity and connect this animation into a state graph. A state graph is required whenever you want to switch between several motions depending on the situation.

:::warning When it doesn't work

If an animation does not play back, check that **the bone (rig) structure of the model matches the bone names in the animation**. If the names differ, the animation loads but no motion appears.

:::

## Related Pages

- [Template](/user-manual/assets/types/template) — places the character you attach the animation to into the scene.
- [Animation](/user-manual/animation) — covers state graphs and blending.
- [Importing 3D Models](/user-manual/assets/models) — how to upload models and animations together.
