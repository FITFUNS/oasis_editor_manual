---
title: Ambient Occlusion
---

Ambient occlusion is a technique that approximates how much light reaches a surface based on occlusion by the environment.

In OasisW, ambient lighting is multiplied by the AO map, which is applied to both diffuse and specular.

![Ambient Occlusion comparison: without/with](/img/user-manual/graphics/lighting/lightmapping/model-ao-comparison.jpg)  
*Left: No AO; Right: Global AO*

AO maps can have various scales. For example, there can be texture detail AO that shows cracks in the surface, or world-scale AO with large shadow effects from different parts of the model. Large-scale AO has a greater effect and usually matches the lightmap in UV1 and is more important.

## Global AO Rendering

AO rendering can be performed using popular 3D modeling and archviz tools. 
<!-- This is essentially the same as lightmap rendering described in the [Lightmapping section][0]. -->

There are a few small differences in applying a special material to all geometry to make it look like AO and using different settings during texture rendering.

In 3D's Max with VRay, this is done by creating a material of type **VRayDirt** with **Ambient Occlusion** mode, where you can change the **radius** to get the desired result.

![3D's Max: Ambient Occlusion VRay Material](/img/user-manual/graphics/lighting/lightmapping/3ds-max-ao-rendering.png)

This material should be applied to all static geometry that should be in the ambient occlusion map. In 3D's Max, you can either apply it manually to individual objects or use the VRay render settings with the **Override mtl** property. This preserves individual materials and makes the work easier.

![3D's Max VRay Render Settings: Override mtl](/img/user-manual/graphics/lighting/lightmapping/3ds-max-vray-override-mtl.png)

Then you need to export this data as a texture. In 3D's Max, this is done using Render To Texture, which is the same as lightmapping rendering, but the **output** option should use **VRayCompleteMap**.

AO textures don't need to store very detailed information and are not significantly affected by texture compression artifacts visually. Therefore, JPEG is an economical and suitable format.

## Upload to Editor

Simply upload the texture in the editor and apply it to the Ambient Occlusion slot of the material.

![Editor Ambient Occlusion Map](/img/user-manual/graphics/lighting/lightmapping/editor-ao-map.png)

## Examples

<!-- You can [explore example][6] that uses global Ambient Occlusion described above and its [project][7]. -->

![OasisW Lightmapping](/img/user-manual/graphics/lighting/lightmapping/oasis-lightmapping-scene.jpg)  
*The lighting in this scene is implemented using lightmap and AO textures, and Box Projected IBL (reflections)*

[0]: /user-manual/graphics/lighting/lightmapping/
[3]: /user-manual/graphics/lighting/lightmapping#render-to-texture
<!-- [6]: https://playcanv.as/p/zdkARz26/ -->
<!-- [7]: https://playcanvas.com/project/446587/overview/archviz-example -->
