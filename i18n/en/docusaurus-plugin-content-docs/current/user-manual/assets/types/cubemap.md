---
title: Cubemap
---

A cubemap is a **special type of texture asset**. It is made up of **six texture assets**, each responsible for one face of a cube. It is typically used in two ways.

1. **Skybox** — the distant scenery that forms the background of a scene. It holds far-off imagery such as hills, mountains, and sky.
2. **Reflection** — you can add reflections to any material. Picture a shiny chrome ball bearing placed in your scene: the ball reflects the surrounding scenery. In an open environment, you usually assign the scene's skybox cubemap as the reflection cubemap.

<div className="iframe-container">
    <iframe src="https://playcanv.as/b/xp7v1oFB/" title="Cubemap" allow="camera; microphone; xr-spatial-tracking; fullscreen" allowfullscreen></iframe>
</div>

## Importing Cubemap Textures

A cubemap is an asset that **requires six texture assets as input**. So to fully configure a cubemap, you first need to import six images into your project. Drag six images from your file browser into the Assets Panel, or use the upload option in the Assets Panel. Once uploaded and processed, they appear in the Assets Panel and are ready to be assigned to the cubemap.

## Creating a Cubemap

You can create a new cubemap asset directly in the editor. Press the **+** button in the Assets Panel and choose **CubeMap**.

![Create cubemap](/img/user-manual/assets/cubemaps/cubemap-create.png)

This creates a new cubemap asset and opens the cubemap editor on the right side of the screen.

## Selecting a Cubemap

To choose a cubemap for editing, select it in the Assets Panel. The easiest way is to pick `Cubemap` in the type filter to narrow down the selection. Cubemaps can be recognized by their **cross-shaped thumbnails**.

![Cubemap thumbnails](/img/user-manual/assets/cubemaps/cubemap-thumbnails.png)

When you select a cubemap, it loads into the Inspector panel on the right.

## Cubemap Properties

![Cubemap properties](/img/user-manual/assets/cubemaps/cubemap-properties.png)

### Filtering

Determines how the pixels of the cubemap are interpolated **when magnified**. Magnification is when the texel-to-screen-pixel ratio is less than 1. `Linear` produces the best visual results.

### Anisotropy

Anisotropy is **a value between 1 and 16** that controls the sampling quality, which drops as the camera's view direction becomes more parallel to the plane of the textured surface.

## Assigning Textures to a Cubemap

![Cubemap preview](/img/user-manual/assets/cubemaps/cubemap-preview.png)

The cubemap preview panel shows the six faces **unfolded in a cross shape**. It helps to picture a cardboard box unfolded and laid flat. To configure the cubemap, simply drag texture assets from the Assets Panel onto the face slots in the preview panel. You can also select a face slot first and then choose a texture in the Assets Panel.

Cubemap faces must meet the following requirements.

- **Square** — width and height must be equal.
- **Power-of-two size** — 1×1, 2×2, 4×4, 8×8, 16×16, 32×32 …
- **All six faces must have the same resolution.**

The editor **tries to place textures on the faces automatically**. The moment you drag the first face onto a slot, it matches against the naming conventions commonly used for cubemap faces.

- `negx`, `posx`, `negy`, `posy`, `negz`, `posz`
- `left`, `right`, `top`|`up`, `bottom`|`down`, `front`|`forward`, `back`|`backward`
- `0-5` | `1-6`

An example of a texture set whose names line up.

- `face_posx.jpg`
- `face_negx.jpg`
- `face_posy.jpg`
- `face_negy.jpg`
- `face_posz.jpg`
- `face_negz.jpg`

:::tip Tip

If a downloaded skybox's image names differ from this convention, it is much faster to **rename the files before uploading**. Drag just one image in and the remaining five fill themselves in.

:::

## Image-based Lighting

This technique uses environment maps such as cubemaps to simulate **physically-based ambient lighting and material reflections**. See [Learn More](/user-manual/graphics/physical-rendering/image-based-lighting) for how it works and how to create cubemaps for IBL.

## Assigning a Cubemap to Materials

Both the basic Phong material and the Physical material have reflection properties. Expand the **Environment** properties section to reveal the cubemap slot.

![Cubemap slot on a material](/img/user-manual/assets/cubemaps/cubemap-material.png)

Click the empty slot to choose a cubemap, or drag a cubemap asset from the Assets Panel onto the slot.

:::note Note

A Physical material **uses the scene's skybox as the default environment map** when a skybox is assigned and pre-filtered.

:::

## Converting Equirectangular or Octahedral HDRI to a Cubemap

Environment textures are commonly distributed in equirectangular or Octahedral format from sites such as [Poly Haven](https://polyhaven.com/hdris). To use them in OasisW, you **must first convert them to a cubemap.**

- Mateusz Wisniowski's [HDRI-to-CubeMap tool](https://matheowis.github.io/HDRI-to-CubeMap/) (runs right in the browser)
- [cmftStudio](https://github.com/dariomanesku/cmftStudio) (desktop) and its [guide](https://jamie-white.com/webgl/equirectangular-hdr-image-to-face-list/)

## Related Pages

- [Texture](/user-manual/assets/types/texture) — the assets that make up the six faces of a cubemap.
- [Material](/user-manual/assets/types/material) — uses cubemaps for reflections.
- [Procedural generation tools](/user-manual/assets/finding) — create skyboxes yourself.
