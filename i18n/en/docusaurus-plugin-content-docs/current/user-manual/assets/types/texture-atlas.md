---
title: Texture Atlas
---

![Texture Atlas](/img/user-manual/assets/texture-atlas/texture-atlas.jpg)

A texture atlas asset is a **texture asset with additional data that describes the 'frames' within the texture**. A frame is a rectangular area defined within the texture, and it has a **pivot** point that acts as the reference for position and rotation.

You create a texture atlas by **right-clicking** a regular [texture asset](/user-manual/assets/types/texture) and choosing **Create Atlas**. Alternatively, you can change the default asset settings to turn on atlas creation automatically.

Texture atlases are used together with [sprite assets](/user-manual/assets/types/sprite) to render 2D graphics.

:::note Why combine them into one image

Loading 100 images separately is **much slower than combining them into a single image and loading it all at once.** It also reduces the number of draw calls, which helps performance. It is common to pack images that are used together — such as the 8 frames of a character's walk cycle — into a single sheet.

:::

## Properties

### Frames

Frames in a texture atlas are keyed by **unique values** (usually integer strings). The format of a frame is as follows.

```javascript
{
    rect: [0, 0, 0, 0],  // u, v, width, height - width and height in pixels
    pivot: [0, 0],       // x, y - expressed as a 0-1 ratio
    border: [0, 0, 0, 0] // left, bottom, right, top - in pixels
}
```

| Property | Meaning |
| --- | --- |
| `rect` | The rectangle to cut out of the atlas. `u` and `v` are the starting position, and the width and height are in pixels. |
| `pivot` | The reference point for position and rotation, expressed as a ratio between 0 and 1. `[0.5, 0.5]` is the center. |
| `border` | The border thickness used for 9-slicing, in the order left, bottom, right, top, measured in pixels. |

### Texture properties

In addition to the frame data, a texture atlas also keeps all the properties of a [texture asset](/user-manual/assets/types/texture). You can adjust filtering, anisotropy, and so on in the same way.

## Related

- [Sprite](/user-manual/assets/types/sprite) — picks a frame from the atlas and draws it on screen.
- [Texture](/user-manual/assets/types/texture)
- [9-slicing](/user-manual/2D/slicing)
