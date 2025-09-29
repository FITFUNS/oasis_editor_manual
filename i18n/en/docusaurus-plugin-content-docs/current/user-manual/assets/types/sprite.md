---
title: Sprite
---

A sprite is a 2D graphic that can be rendered in a scene. A sprite asset is a reference to a [texture atlas][1] and a frame sequence within that atlas. This allows a sprite to represent either a single image (extracted from the atlas) or a flipbook-style animation (multiple frames from the atlas).

## Properties

![Sprites](/img/user-manual/assets/sprites/sprites.jpg)

### Pixels Per Unit

The number of pixels in the sprite image that map to 1 unit in the OasisW scene. For example, if `pixelsPerUnit` is 1 and the sprite is 32x32, it will have 32 units width and height when rendered in the scene. By default, sprites in *Simple* render mode are created with `pixelsPerUnit` set to 100. This means a 100x100 sprite will have 1 unit width/height in the scene.

When creating a *Sliced* sprite, the `pixelsPerUnit` value is set to 1 by default. These sprites are typically used as part of screen components for building user interfaces, so 1 sprite pixel should map to 1 screen pixel.

### Render Mode

* Simple - The sprite does not use border values
* Sliced - The sprite uses border values to perform [9-slicing][2] rendering with stretching.
* Tiled - The sprite uses border values to perform [9-slicing][2] rendering with tiling.

### Texture Atlas

The texture atlas asset that the sprite references

[1]: /user-manual/assets/types/texture-atlas
[2]: /user-manual/2D/slicing
