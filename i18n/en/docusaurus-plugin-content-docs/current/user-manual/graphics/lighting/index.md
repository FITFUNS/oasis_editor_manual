---
title: Lighting
---

Lighting a scene is the process of calculating the color or shading of pixels rendered to the screen based on the material properties of surfaces and the light sources applied to those materials.

In OasisW, lighting can be broadly divided into two basic categories: dynamic lights and lightmaps.

## Dynamic Lights

Lighting calculations performed at runtime are classified as dynamic. The engine calculates the amount of light falling on surfaces from the type, position, and properties of Light Entities every frame and uses this to color the materials.

## Lightmaps

For non-moving lights and geometry, it is often preferred to pre-determine lighting information. This information is stored as lightmap textures applied to surface materials. This method has very low runtime cost at the expense of unchangeable static lighting and pre-computation time.

There are two ways to generate lightmaps:

### External Lightmap Generation

Many 3D authoring tools, including 3DS Max, Maya, and Blender, have lightmap generation features built-in or available as add-ons. These tools typically generate lightmap textures that can be uploaded as regular assets and added to the Lightmap slot of standard Physical Materials.

### OasisW Runtime Lightmap Generation

The OasisW engine has built-in lightmap generation functionality. This feature can be used to automatically generate lightmaps just before the game runs. Using this method, you can use standard light components, make changes, and preview the scene directly in the editor.
