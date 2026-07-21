---
title: Asset Types
---

The Assets Panel manages the assets in your project. There are many types of assets, and the type determines how an asset is used and which items appear in the Inspector. Since the type is **set automatically from the extension of the file you upload**, you don't need to choose it yourself.

## Type List

**Import Source** means "uploading this extension creates this type," and **Resource Extension** is the extension of the file that's actually stored after the pipeline runs. When the two differ, that's where [Source Assets and Target Assets](/user-manual/assets) diverge.

| Type | Import Source | Resource Extension | Description |
|---|---|---|---|
| [`animation`](/user-manual/assets/types/animation) | `.glb` `.fbx` | `.glb` | Animation keyframe data |
| [`audio`](/user-manual/assets/types/audio) | `.mp3` `.wav` `.ogg` | `.mp3` `.wav` `.ogg` | Sound data |
| `binary` | `.bin` | `.bin` | Binary data |
| [`css`](/user-manual/assets/types/css) | `.css` | `.css` | Stylesheet for HTML |
| [`cubemap`](/user-manual/assets/types/cubemap) | `.png` `.jpg` `.webp` `.avif` | `.png` `.jpg` `.webp` `.avif` | Environment lighting data |
| [`font`](/user-manual/assets/types/font) | `.ttf` `.woff` | `.json` `.png` | Font data for text rendering |
| [`html`](/user-manual/assets/types/html) | `.html` | `.html` | HTML document |
| [`json`](/user-manual/assets/types/json) | `.json` | `.json` | JSON document |
| [`material`](/user-manual/assets/types/material) | `.glb` `.fbx` | None | Material definition for 3D models |
| [`render`](/user-manual/assets/types/render) | `.glb` `.fbx` | `.glb` | 3D mesh data |
| [`script`](/user-manual/scripting) | `.js` | `.js` | Script |
| [`shader`](/user-manual/assets/types/shader) | `.glsl` `.vert` `.frag` | `.glsl` `.vert` `.frag` | Custom shader for rendering |
| [`sprite`](/user-manual/assets/types/sprite) | Created in editor | None | 2D image for UI or textures |
| [`template`](/user-manual/assets/types/template) | `.glb` | None | Template for entity hierarchy |
| [`text`](/user-manual/assets/types/text) | `.txt` | `.txt` | Text document |
| [`texture-atlas`](/user-manual/assets/types/texture-atlas) | `.png` `.jpg` `.webp` `.avif` | `.png` `.jpg` `.webp` `.avif` | Sprite sheet image data |
| [`texture`](/user-manual/assets/types/texture) | `.png` `.jpg` `.webp` `.avif` | `.png` `.jpg` `.webp` `.avif` | Image data for 3D models or UI |
| [`wasm`](/user-manual/assets/types/wasm) | `.wasm` | `.wasm` | WebAssembly module |

:::note Types whose Resource Extension is 'None'

`material`, `sprite`, and `template` aren't stored as separate files; they **exist only as definitions inside the project data**. That's why their Size appears empty in the Assets panel.

:::

## What You Actually See in the Editor

Opening the `All` dropdown in the Assets panel lists every type available in this project. Comparing the list you see in the editor with the table above, three differences stand out.

- **Items with `(source)`** — `Font (source)`, `Model (source)`, `Texture (source)`, and `Texture Atlas (source)` refer to the original files you uploaded — that is, the **Source assets**. The table lists only one row per type, but in the editor you can filter the originals and the results separately.
- **`Model` and `Container`** — Not in the table, but present in the filter. These are the top-level container assets created when you upload a GLB or FBX, holding templates, renders, materials, and textures inside. For details, see [Importing 3D Models](/user-manual/assets/models).
- **`Folder`** — Strictly speaking it's not content but an organizational item; since it appears alongside assets in the list, it's included in the filter too.

## Types You Can Create Directly vs. Types Made Only by Upload

The types for which you can create an *empty asset* directly with the **+** button in the Assets panel (or by right-clicking empty space and choosing **New Asset**) are fixed.

| Category | Items |
|---|---|
| Upload files | `Upload Files` · `Upload Folder` |
| Organizational | `Folder` |
| Assets you can create new | `CSS` · `CubeMap` · `HTML` · `JSON` · `Material` · `Script` · `Shader` · `Text` · `Anim State Graph` · `Font` |

Types not listed here, such as `texture`, `audio`, `render`, `template`, `animation`, and `wasm`, are created **only by uploading a file**. For example, to use a texture you have to upload a PNG or JPG, and to get a template you upload a GLB or save a scene entity as a template.

:::tip Note

Pressing the **+** button opens the list of kinds directly, with no `New Asset` step. Right-clicking empty space, on the other hand, folds it one level, as in `New Asset › …`. The result is the same.

:::

:::warning Check the extension

If you upload an unsupported extension, no type can be assigned, so either no asset is created or it's treated as `binary`. It's safest to use `.glb` for 3D models, `.png`/`.jpg` for images, and `.mp3`/`.ogg` for sound.

:::

## Per-type Reference Documents

Each type's properties and usage are covered in detail in the documents below.

| Document | One-line summary |
|---|---|
| [Animation](/user-manual/assets/types/animation) | Holds a single motion of a 3D model. |
| [Audio](/user-manual/assets/types/audio) | A sound file played by the sound component. |
| [CSS](/user-manual/assets/types/css) | Defines the appearance of overlaid HTML UI. |
| [Cubemap](/user-manual/assets/types/cubemap) | A six-sided texture used for skyboxes and reflections. |
| [Font](/user-manual/assets/types/font) | Character images and data for drawing text. |
| [HTML](/user-manual/assets/types/html) | Markup overlaid on top of the game. |
| [JSON](/user-manual/assets/types/json) | Holds structured configuration and level data. |
| [Material](/user-manual/assets/types/material) | Defines a surface's color, gloss, and roughness. |
| [Render](/user-manual/assets/types/render) | 3D mesh data. |
| [Shader](/user-manual/assets/types/shader) | GLSL code that runs on the GPU. |
| [Sprite](/user-manual/assets/types/sprite) | A 2D graphic cut from an atlas. |
| [Template](/user-manual/assets/types/template) | A reusable entity hierarchy. |
| [Text](/user-manual/assets/types/text) | Plain text data. |
| [Texture](/user-manual/assets/types/texture) | An image applied to a material. |
| [Texture Atlas](/user-manual/assets/types/texture-atlas) | Collects several images into one sheet and defines their frames. |
| [WASM Module](/user-manual/assets/types/wasm) | Executable code compiled for the web. |

`binary` and `script` don't have separate type documents. Scripts are covered in [Adding a Script](/user-manual/scripting/fundamentals/getting-started).

## Next

- [Importing 3D Models](/user-manual/assets/models) — See how a single model file is split into several assets.
- [Preloading and Streaming](/user-manual/assets/preloading-and-streaming) — Control loading timing per type.
