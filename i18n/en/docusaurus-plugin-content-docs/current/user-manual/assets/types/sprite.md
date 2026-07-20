---
title: Sprite
---

A sprite is a **2D graphic** that can be drawn in a scene. A sprite asset is a reference to a [texture atlas](/user-manual/assets/types/texture-atlas) and to a **frame sequence** within that atlas. This lets a sprite be either a **single image** cut from the atlas or a **flipbook-style animation** made of several frames joined together.

## Properties

![Sprite properties](/img/user-manual/assets/sprites/sprites.jpg)

### Pixels Per Unit

The **number of pixels in the sprite image that correspond to 1 unit** in an OasisW scene. For example, if `pixelsPerUnit` is 1 and the sprite is 32×32, it will be 32 units wide and tall when drawn in the scene.

By default, sprites in *Simple* render mode are created with `pixelsPerUnit` set to **100**. That means a 100×100 sprite is 1 unit in size in the scene.

When you create a *Sliced* sprite, the default is set to **1**. Such sprites are usually used as part of a Screen component when building a user interface, so **one sprite pixel must map to one screen pixel**.

### Render Mode

- **Simple** — The sprite does not use border values.
- **Sliced** — Uses border values to perform [9-slicing](/user-manual/2D/slicing) rendering by **stretching**.
- **Tiled** — Uses border values to perform [9-slicing](/user-manual/2D/slicing) rendering by **tiling**.

:::tip What is 9-slicing?

It is a technique for **UI images that are frequently resized**, such as button backgrounds. The image is divided into nine pieces: the corners are left as-is, while only the center and edges are stretched or repeated to fill. This way a button can be stretched wide without distorting its corners.

:::

### Texture Atlas

The texture atlas asset that the sprite references.

## Related documentation

- [Texture Atlas](/user-manual/assets/types/texture-atlas) — The source that a sprite cuts from.
- [Sprite component](/user-manual/scenes/components/sprite) — Displays a sprite in a scene.
- [2D](/user-manual/2D)
