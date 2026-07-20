---
title: Third-party Asset Sites
---

Using assets you make yourself is sometimes best, but making everything from scratch costs too much money and time. Here is a collection of places where you can get assets for free or for a fee.

## Asset Marketplaces

An asset marketplace is an online library of content you can download and drop straight into your game.

| Provider | 2D Art | 3D Art | Audio |
|---|:---:|:---:|:---:|
| [3D Models Textures](https://www.3dmodels-textures.com/) |  | ✓ | ✓ |
| [BlendSwap](https://www.blendswap.com/) |  | ✓ |  |
| [CGTrader](https://www.cgtrader.com/) |  | ✓ |  |
| [Game Dev Market](https://www.gamedevmarket.net?ally=O0I9alFp) | ✓ | ✓ | ✓ |
| [GameSounds.xyz](https://gamesounds.xyz/) |  |  | ✓ |
| [Kenney](https://kenney.nl/) | ✓ | ✓ | ✓ |
| [Mixamo](https://www.mixamo.com/) |  | ✓ |  |
| [PlayOnLoop](https://www.playonloop.com/music-loops-category/videogame/) |  |  | ✓ |
| [Open Game Art](https://opengameart.org/) | ✓ | ✓ | ✓ |
| [Sound Bible](https://soundbible.com/) |  |  | ✓ |
| [Turbosquid](https://www.turbosquid.com/) | ✓ | ✓ | ✓ |

:::tip If you're just starting out

[Kenney](https://kenney.nl/) covers 2D, 3D, and audio, and distributes most of it under licenses with almost no restrictions. [Mixamo](https://www.mixamo.com/) lets you attach animations like walking and running to human characters and download them, which is especially handy for a first project that needs characters.

:::

## Formats That Work Well in OasisW

If you can choose a format when downloading, use the following as a guide.

| Kind | Recommended format | Why |
|---|---|---|
| 3D model | `.glb` | Mesh, materials, and textures are in one file, so textures never go missing. |
| Image · texture | `.png` · `.jpg` | Use PNG if you need transparency; JPG is lighter for large, photographic images. |
| Sound effect | `.mp3` · `.ogg` | Small in size, so they load quickly. |
| Font | `.ttf` | Converts into a font asset when uploaded. |

If you can only get FBX or OBJ, one option is to open it in [Blender](https://www.blender.org/) and re-export it as GLB. For details, see [Importing 3D Models](/user-manual/assets/models).

## Procedural Generation Tools

Instead of searching for assets, there are also tools that **create them on the spot**.

- [Sound FX Generator (Bfxr)](https://www.bfxr.net/) — Makes game sound effects like jumps, shots, and pickups with a few button clicks.
- [Spacescape Skybox Generator](http://alexcpeterson.com/spacescape) — Makes space-background cubemaps. You can use them as [cubemap](/user-manual/assets/types/cubemap) assets.
- [Sloyd 3D Model Generator](https://sloyd.ai) — Generates simple 3D models and downloads them as GLB.

## Always Check the License

:::warning Please note

Even when something is labeled 'free', conditions are often attached. Before downloading, please check the following.

- Whether **commercial use** is allowed — Essential to confirm if you plan to release your game or make money from it.
- Whether **attribution** is required — If it is, you must credit the creator on an in-game credits screen.
- Whether **redistribution and modification** are allowed — You need to check this if you plan to edit a model before using it.

Assets marked CC0 (public domain) have the loosest conditions. Keeping a **separate list** of which asset you got where and under which license makes things much easier later.

:::

## Next

- [Importing 3D Models](/user-manual/assets/models) — Upload the models you got into your project.
- [Preloading and Streaming](/user-manual/assets/preloading-and-streaming) — Manage loading time as your assets grow.
