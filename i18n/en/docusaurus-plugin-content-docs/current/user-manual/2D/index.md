---
title: 2D
---

The OasisW engine is designed to make 3D games and applications quickly and easily. However, it also supports many great features for making 2D games. Using OasisW's 2D features, you can get all the benefits of a powerful 3D engine in your 2D games.

## Basic Features

### Sprites

![Sprite](/img/user-manual/2D/sprite.jpg)

2D graphics are often called **sprites**. In OasisW, you can create [sprite assets][0] and [sprite components][1]. Sprite components are attached to entities to display 2D graphics in the scene. OasisW's sprite assets store multiple image frames from a texture atlas in sequence. Therefore, you can use sprite assets to create flipbook-style animated graphics in your games.

### Texture Atlas

![Texture Atlas](/img/user-manual/2D/texture-atlas.jpg)

A [texture atlas][2] is an enhanced version of a standard [texture][3] asset. In addition to normal texture functionality, texture atlases include definitions for a set of "frames". Each frame is a region of the texture that can be referenced by sprite assets.

### Sprite Editor

![Sprite Editor](/img/user-manual/2D/sprite-editor.jpg)

The [sprite editor][4] is a tool used to create texture atlas frames and sprite assets. You can open the sprite editor by double-clicking a texture atlas or sprite asset. [Learn more][4].

<!-- *Artwork created by [PixelBoy](https://twitter.com/2pblog1)* -->

[0]: /user-manual/assets/types/sprite
[1]: /user-manual/scenes/components/sprite
[2]: /user-manual/assets/types/texture-atlas
[3]: /user-manual/assets/types/texture
[4]: /user-manual/2D/sprite-editor
