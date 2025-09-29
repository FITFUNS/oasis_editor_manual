---
title: Cubemap
---

A cubemap is a special type of texture asset. It consists of 6 texture assets where each texture represents a face of a cube. It typically has two uses:

1. A cubemap can define the skybox of a scene. The skybox contains the distant visual imagery of the scene such as hills, mountains, sky, etc.
2. A cubemap can add reflections to any material. Imagine a shiny chrome ball bearing in your scene. The ball reflects the surrounding scene. For open environments, it's common to set the scene's skybox cubemap as the cubemap on reflective objects' materials.

<div className="iframe-container">
    <iframe src="https://playcanv.as/b/xp7v1oFB/" title="Cubemap" allow="camera; microphone; xr-spatial-tracking; fullscreen" allowfullscreen></iframe>
</div>

## Importing Cubemap Textures

A cubemap is an asset that requires 6 texture assets as input. So to fully configure a new cubemap asset, you first need to import 6 images into your project. To do this, drag 6 images from your file system to the Assets Panel (or select the upload option in the Assets Panel). Once uploaded and processed, the images will appear in the Assets Panel and are now ready to be assigned to the cubemap asset.

## Creating a Cubemap

You can create a new cubemap asset directly from the OasisW editor interface. Use the Create Asset menu in the Assets Panel.

![Create Cubemap](/img/user-manual/assets/cubemaps/cubemap-create.png)

This will create a new cubemap asset and open the cubemap editor on the right side of the screen.

## Selecting a Cubemap

To select a cubemap for editing, select it in the Assets Panel. The easiest way is to select the cubemap filter to narrow down the selection options. Cubemaps are identified by cross-shaped thumbnails:

![Cubemap Thumbnails](/img/user-manual/assets/cubemaps/cubemap-thumbnails.png)

When a cubemap is selected, it loads in the Inspector panel on the right side of the editor.

## Cubemap Properties

When a cubemap is selected, you can edit its properties.

![Cubemap Properties](/img/user-manual/assets/cubemaps/cubemap-properties.png)

### Filtering

This setting determines how pixels of the cubemap are interpolated when magnified. Magnification is when the texel to screen pixel ratio is less than 1. Linear provides the best visual results.

### Anisotropy

Anisotropy is a value between 1 and 16 that can control the quality of texture sampling when the camera's view vector is more closely aligned with the plane of the textured surface.

## Assigning Textures to Cubemap

![Cubemap Preview](/img/user-manual/assets/cubemaps/cubemap-preview.png)

The cubemap preview panel displays the 6 faces of the cubemap flattened in a cross shape. Imagine an unfolded cardboard box laid flat. To configure the cubemap, simply drag texture assets from the Assets Panel to the face slots in the preview panel. You can also select a cubemap face slot and then select a texture asset from the Assets Panel.

Cubemap faces must meet the following requirements:

- Square (resolution where width and height are equal)
- Power of two dimensions (1x1, 2x2, 4x4, 8x8, 16x16, 32x32, etc.)
- All faces must have the same resolution

To help with this, the editor tries to intelligently auto-assign textures to faces. It does this by trying to match commonly used naming conventions for cubemap faces when you drag the first face to a slot:

- negx, posx, negy, posy, negz, posz
- left, right, top|up, bottom|down, front|forward, back|backward
- 0-5|1-6

Example of a matching texture set:

- face_posx.jpg
- face_negx.jpg
- face_posy.jpg
- face_negy.jpg
- face_posz.jpg
- face_negz.jpg

## Image-based Lighting

This technique allows you to use environment maps like cubemaps to simulate physically-based ambient lighting and material reflections. See [Learn More][6] for how it works and how to create cubemaps for IBL.

## Assigning Cubemap to Materials

Both the basic Phong and Physical material types have reflection properties. When you expand the Environment properties section, you can see:

![Cubemap Material](/img/user-manual/assets/cubemaps/cubemap-material.png)

You can click on an empty slot to select a cubemap or drag and drop a cubemap asset from the Assets Panel to the cubemap slot.

:::note

Physical materials use the scene's skybox as the default environment map when assigned and pre-filtered.

:::

## Converting Equirectangular or Octahedral HDRI to Cubemap

Environment textures are often in equirectangular or Octahedral format (example from [Poly Haven][7]) and need to be converted to cubemaps before use in OasisW.

<!-- This can be done via [OasisW Texture Tool][8], available in the browser.

1. Download the HDR version of environment texture and press 'Add Files' button in OasisW Texture Tool to load the file.
2. Select the loaded texture on the left.
3. Under 'Reproject' section, change the 'source' to the format of texture.
4. Change 'target' to 'cube'.
5. Change 'encoding' to the desired format:
    - 'rgbe' for exporting to 'HDR'
    - 'rgbm' for exporting to 'PNG'
6. Set the width to the desired size per face texture. 512 is a good balance between quality and file size.
7. Press 'Reproject' button to do the conversion to a cubemap.
8. Press 'Export to PNG' or 'Export to HDR' to download the 6 individual cubemap face textures that are ready to be uploaded to OasisW.

![OasisW Texture Tool](/img/user-manual/assets/cubemaps/playcanvas-texture-tool-convert.png) -->

Other tools that can perform this conversion:

- Mateusz Wisniowski's [HDRI-to-CubeMap tool][9] (browser)
- [cmftStudio][10] (desktop) and [guide][11]

[6]: /user-manual/graphics/physical-rendering/image-based-lighting/
[7]: https://polyhaven.com/hdris
<!-- [8]: https://playcanvas.com/texture-tool -->
[9]: https://matheowis.github.io/HDRI-to-CubeMap/
[10]: https://github.com/dariomanesku/cmftStudio
[11]: https://jamie-white.com/webgl/equirectangular-hdr-image-to-face-list/
