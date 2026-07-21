---
title: Building Models
---

Art and animations for OasisW can be created with **almost any 3D modeling program**. Blender, SketchUp, Autodesk 3D Studio Max, and Autodesk Maya are among the most common.

OasisW is designed to import content most faithfully through the open-source **glTF binary (GLB)** format. So generally, **if a modeling program supports GLB, OasisW supports that program too.**

:::tip Good to Know First

You **don't** need to install an OasisW-specific plugin or follow any special OasisW-only workflow. Just build your model as usual and export it as GLB. Think of the rest of this document as "tips for getting better results."

:::

## What GLB Import Supports

GLB import supports the following glTF features so you can build scenes very quickly.

![GLB Import Example](/img/user-manual/assets/models/building/glb-import.gif)

| Feature | In plain terms |
|---|---|
| Node hierarchy | The parent-child structure comes in intact. The relationship where an arm moves along with the torso is preserved. |
| Standard materials | Color and texture settings carry over as-is. |
| Approved material extensions | Extra effects like clearcoat and sheen are supported too. |
| Animated skeleton and skinning data | The bones, and the information about how the skin moves with the bones, come in together. |
| Morph targets | Animations that deform vertices directly, like facial expressions. |
| Cameras | Cameras set up in the modeling tool carry over. |
| Point light support | Point lights come in as well. |

## What About FBX

OasisW also supports importing **FBX**, another common exchange format. However, **FBX materials are not imported as faithfully as glTF materials**, and may need some touch-up after import.

:::note Recommendation

If you want the smoothest experience and the best compatibility, **use GLB whenever possible.** If FBX is all you can get, one option is to open it in Blender and re-export it as GLB.

:::

## General Considerations When Building Meshes

Whichever modeling program you use, there are a few things to know when building 3D scenes for OasisW.

- A mesh can be skinned to a **maximum of 256 bones.** This means a single character shouldn't use more than 256 bones.
- **NURBS meshes** are **converted to triangular meshes** when converted to OasisW's format. Since surfaces handled by equations are replaced with finely divided triangles, check in advance that you get the precision you want.

## Which Program Should I Use

### Modeling and Animation

| Price tier | Programs |
|---|---|
| Free | Blender* · Wings3D · Voidworld · SketchUp · Sculptris · Daz Studio* |
| Low-cost paid | 3D-Coat · NVIL · Hexagon |
| High-cost paid | ZBrush · Autodesk 3D Studio Max* · Autodesk Maya* · Luxology Modo* |

\* Programs marked with an asterisk **can also create animations.**

### Texture Creation

| Price tier | Programs |
|---|---|
| Free | Blender · Pixexix Free · xNormal · MaPZone · GIMP · Krita desktop · MyPaint |
| Paid | Substance Designer (includes Substance Painter and Bitmap2Material) · Photoshop · Quixel NDO and DDO · CrazyBump · Pixexix Pro · Clip Studio Paint/Manga Studio · SERIF DrawPlus/PhotoPlus |

Many of the modeling programs listed above **also support texture painting**. If you'd like to see more options, [this external wiki](http://wiki.polycount.com/wiki/Tools) page may help. Note that some information may be outdated.

:::tip If You're New

[Blender](https://www.blender.org/) alone can do modeling, animation, and texture painting, and it's free. Unless you have a specific reason otherwise, we recommend starting with Blender.

:::

## Blender

![Blender Logo](/img/user-manual/assets/models/building/blender-logo.jpg)

[Blender](https://www.blender.org/) is an excellent free tool for 3D modeling and is more than capable of creating 3D assets for OasisW.

Blender supports exporting to GLB, FBX, and COLLADA, but its built-in export tools have some limitations.

### Map Types

From Blender 2.71, a material's **diffuse map and normal map are exported together to the FBX file.** If other map types were dropped during export, you'll need to set them manually in the [material editor](/user-manual/assets/types/material) of the OasisW editor.

### Texture Embedding

Importing is much smoother when textures are **embedded inside** the model file, because you don't have to keep track of the image files separately.

- Blender's **COLLADA export tool has no ability to embed textures in the file.**
- From Blender 2.71, the FBX export module was improved so it **can embed multiple textures.** First make sure the object displays correctly inside Blender. Then, when exporting to FBX, set `Path Mode` to `Copy` and check the `Embed Textures` box.
- Alternatively, you can convert with the [Autodesk FBX Converter](https://www.autodesk.com/developer-network/platform-technologies/fbx-converter-archives). Open the exported file and save it again with the *Embedded Media* checkbox on.

:::warning Warning

Blender 2.71's FBX export appears to have an issue where it **produces emissivity even when no emissive properties were set in Blender.** This is not an issue with the OasisW engine.

There are two ways to avoid it. Either change the material's **Diffuse color setting to 0** in Blender's *Properties Editor* › *Material* tab, or simply **lower the emissivity** in the OasisW editor.

:::

### Animation

This applies to Blender 2.71. Animations contained in a blend file **export with the default FBX export settings as-is** and are compatible with OasisW's asset import pipeline.

If a single model has multiple animations, you'll need to **upload multiple FBX files — one file per animation.** Since the same model data is duplicated each time, do one of the following to save memory.

- **Delete the model and textures** from the blend file before exporting.
- Choose to **export only the armature (bones)** in the FBX export settings.
- After uploading, **delete the duplicate `model` target assets** from the asset page of the project dashboard. Selecting `target` from the dropdown menu on the asset page lets you view only the target assets.

### Learning Blender

There are many resources on the web for learning how to use Blender. Here are the ones we recommend.

- [Blender Cookie](https://cgcookie.com/learn-blender)
- [Blender Guru](https://www.blenderguru.com/)

## Autodesk 3D Studio Max

### Max Materials

In Max, you should use the **Standard material** type, or the **Multi/Sub-Object material** type if the materials it references are Standard materials. Other material types may not carry over to OasisW correctly.

![Max material editor](/img/user-manual/assets/models/building/max-material-editor.jpg)

### Supported Map Slots

OasisW interprets only **a subset** of 3DS Max material map types when exporting. The map itself can be in any format that 3DS Max supports, but if it isn't a web format (JPEG · GIF · PNG) it will be converted to these formats on export.

| Slot | What happens when you assign it |
|---|---|
| `Diffuse Color` | Adding a Bitmap map enables diffuse mapping and overrides the diffuse color set with the color picker. If the diffuse map has an alpha channel, it's used as per-pixel alpha values. Adding an `RGB Multiply` map to this slot enables lightmapping, where Map 1 is the diffuse map and Map 2 is the lightmap. |
| `Specular Color` | Enables specular mapping and overrides the specular color. You can mask the shiny areas of a surface or tint them with different colors by region. If there's an alpha channel, it's used to set per-pixel glossiness. |
| `Specular Level` | Enables per-pixel attenuation of the specular color and overrides the specular level set on the material. |
| `Glossiness` | Enables per-pixel glossiness and overrides the glossiness set on the material. |
| `Self-Illumination` | Enables emissive mapping. The emissive map doesn't have to be grayscale and can use full RGB. Because it's added to the surface lighting result, **black pixels add nothing** while other colors increase brightness. |
| `Opacity` | Enables opacity mapping. **Black is fully transparent, white is fully opaque, and gray is in between.** If an opacity map is present, it overrides the diffuse map's alpha channel. |
| `Bump` | Adding a Normal Bump map enables normal mapping. If there's an alpha channel, that channel is interpreted as a height map and processed as a parallax map. Brighter areas in the height map are the 'higher' areas. |
| `Reflection` | Adding a Bitmap map enables sphere mapping. It's among the cheapest and least 'convincing' forms of reflection, but is often enough to give a surface a satisfactory gloss. |

:::warning The Amount Value of the Bump Slot

By default, the `Amount` value of the Bump slot is set to **30**. OasisW effectively ignores this value and treats it **as if it were 100**. So, to make the render you see in Max more closely match real-time rendering, **we recommend changing this value to 100 in Max too.**

:::

:::warning You Must Flip the Green Channel of the Normal Map

There are several ways to create normal maps, and the two main methods **differ in the format of the green channel.**

By default, 3DS Max expects a brick wall's normal map to have **bright lower edges on the protruding parts.** OasisW, however, expects the **green component (the Y component of each normal) to be flipped.**

The fix is simple. Open the file in Photoshop, **select the green channel, and press `Ctrl`+`I`** to invert it. The lighting will then look consistent in OasisW.

:::

![Normal map](/img/user-manual/assets/models/building/wall-norm.jpg)

![Normal map with Y component flipped](/img/user-manual/assets/models/building/wall-norm-yflip.jpg)

![Sphere map](/img/user-manual/assets/models/building/mountains-sphere.jpg)

## Autodesk Maya

### Maya Materials

In Maya, you should use a **standard material type**: one of the three, `lambert`, `blinn`, or `phong`. Other materials may not have their settings respected when exporting to OasisW.

![Maya material editor](/img/user-manual/assets/models/building/maya-material-editor.jpg)

## Related Documents

- [Units](/user-manual/assets/models/units) — Match model sizes to the OasisW standard.
- [Importing 3D Models](/user-manual/assets/models) — Upload the files you created to your project.
- [Material](/user-manual/assets/types/material) — Refine materials after import.
- [Third-party Asset Sites](/user-manual/assets/finding) — How to obtain models without building them yourself.
