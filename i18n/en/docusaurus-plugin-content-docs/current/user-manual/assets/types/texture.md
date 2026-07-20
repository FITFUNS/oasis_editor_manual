---
title: Texture
---

A texture is an **image** that can be assigned to a [material](/user-manual/assets/types/material) and then applied to a graphics primitive. Wood grain, scratches on metal, a character's face — any picture you see on the surface of an object is a texture.

## Importing textures

There are three ways to import a texture asset.

1. **Drag and drop** an image onto the Assets panel.
2. Select **Upload** from the Assets panel context menu and choose an image with the file browser.
3. Import an **FBX file** that contains textures.

The supported image formats are as follows.

- JPG
- PNG
- GIF
- BMP
- WEBP
- AVIF

Imported JPG, PNG, AVIF, WebP, and GIF files **keep their original format**.

GIF and BMP are converted to JPG or PNG on import. If the image **has transparency it becomes a PNG**, otherwise a JPG.

### Power-of-two resizing

By default, imported images are **resized to the nearest power of two**. For example, a 323×414 image becomes 256×512 on import. This is because the graphics engine cannot use mipmapping on non-power-of-two textures.

If this behavior is inconvenient, you can override it by turning off the **Texture POT** setting in the Asset Tasks panel **before** uploading the image.

:::warning Please note

This setting applies only to **images uploaded from now on**. To restore an already uploaded texture to its original size, change the setting and then upload it again.

:::

## Texture properties

Selecting a texture thumbnail in the Assets panel loads it into the Inspector panel. You can also **select multiple textures at once and edit them simultaneously**.

Textures share the standard asset properties such as `ID`, `Name`, and `Tags`, while also having their own texture-specific properties.

![Texture properties](/img/user-manual/assets/textures/texture-properties.png)

### Texture filtering

Texture filtering controls **how the color of a texture-mapped pixel is calculated**. `Point` applies no filtering, while `Linear` interpolates the color with neighboring texels. `Linear` produces better results especially when the texture is **minified** (when it takes up fewer screen pixels than there are texels).

### Anisotropy

When a texture is viewed on a surface at an **oblique angle**, its quality can degrade and appear blurry. To reduce this problem, raise the anisotropy value.

![Anisotropy comparison](/img/user-manual/assets/textures/anisotropy.png)

However, **the higher the anisotropy, the greater the cost of sampling the texture on the GPU.**

### Texture addressing

Texture addressing controls how the texture is sampled at **texture coordinates outside the 0 to 1 range**.

![Addressing mode comparison](/img/user-manual/assets/textures/texture-address.png)

## Maximum texture size

Different devices support different texture sizes. You can check the maximum supported size on your device and browser with the [WebGL Report](https://webglreport.com/).

For example, a MacBook Pro 16-inch (2020) with Chrome supports up to **16384×16384**, whereas a Samsung S7 mobile device supports only up to **4096×4096**.

When the engine tries to use a texture larger than the maximum size reported by WebGL, it **resizes it down to that maximum at runtime**. This is only done for textures loaded from images (PNG, JPG, AVIF, WebP, GIF). **Compressed textures cannot be resized at runtime, and if they are too large for the device, rendering fails.**

:::tip Recommended size

If you want to avoid runtime downscaling, **4096×4096** is very widely supported. Some developers choose **2048×2048** to guarantee it works everywhere.

:::

## Related

- [Material](/user-manual/assets/types/material) — assign textures to its slots.
- [Cubemap](/user-manual/assets/types/cubemap) — built from six textures.
- [Texture Atlas](/user-manual/assets/types/texture-atlas) — adds frame data to a texture.
