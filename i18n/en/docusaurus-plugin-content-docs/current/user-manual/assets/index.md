---
title: Assets
---

Assets are the **materials** you can use in your game. Almost anything you see or hear on screen — 3D models, images, sounds, fonts, scripts — is an asset. If a scene is the 'stage', then assets are the 'props' you place on it.

When you upload a file, it isn't used in the game right away. It first passes through the **import pipeline**, which converts and optimizes the file so it runs quickly on the web.

## Touring the Assets Panel

You manage all of a project's assets in the **ASSETS** panel at the bottom of the editor. The actual panel is laid out like this:

- **Path and count** — The current folder path (such as `assets`) and the item count (such as `5 items`) appear at the top left. When you go into a folder, the path continues, like `assets / ammo.js`.
- **+ button** — Creates a new asset or uploads a file.
- **Type filter** — The dropdown set to `All` lets you view only a specific type.
- **Search** — Finds an asset by name.
- **TYPE row** — Automatically summarizes which types are in the current folder and how many of each. Clicking one of these chips also applies a filter.
- **List** — Shown in three columns, `Name` · `Type` · `Size`; click a column heading to sort.
- **Left-hand tree** — Shows the folder structure. The number to the right of a folder name is the item count inside it.

## Types

OasisW supports several content types. The most common are:

- Models (e.g., `.fbx`, `.glb`)
- 3D animations
- Images for textures (e.g., `.jpg`, `.png`)
- Audio (e.g., `.mp3`, `.ogg`)

When you upload a new file, **the asset type is set automatically based on the file extension**. For example, uploading a PNG file creates an asset of type `texture`. You don't need to choose the type yourself.

The full list of types, and which extensions create each one, is collected on the [Asset Types](/user-manual/assets/types) page.

## Source Assets and Target Assets

After asset type, the next most important property is whether an asset is a **Source** or a **Target**.

- **Source asset** — The *original file* you uploaded, exactly as it is.
- **Target asset** — The *new result* the import pipeline produces by converting and optimizing the original.

For example, if you upload a Photoshop (PSD) file to use as a texture, a **Source asset** of type `texture` is created first, pointing to that PSD. The pipeline then converts the PSD to a JPG and creates a **Target asset** of type `texture` pointing to that JPG.

:::note Keep in mind

What the editor and game actually reference is **always the Target asset**, because it's in a form optimized for immediate use at runtime. Think of the Source asset as "the original, kept on file."

:::

:::tip Confirming it in the editor

Open the type filter in the Assets panel and you'll see **two rows for the same type**, such as `Model` and `Model (source)`, or `Texture` and `Texture (source)`. The one with `(source)` is the Source asset; the one without is the Target asset. This is where the concept becomes visible on screen.

:::

## Inspecting Asset Properties

When you select an asset, its properties appear in the **Inspector** on the right. The following items are shown for every asset regardless of type:

| Property | Description |
|---|---|
| `ID` | A unique number assigned to each asset. Used to find an asset from a script. |
| `Name` | The asset name. You can edit it directly in this field. |
| `Tags` | Labels attached to an asset. Used to handle several assets as a group. See [Asset Tags](/user-manual/assets/preloading-and-streaming). |
| `Runtime` | Indicates whether the asset can be used at runtime. |
| `Type` | The asset type. Set automatically on upload and cannot be changed. |
| `Exclude` | When checked, excludes this asset from the published build. |
| `Preload` | Determines whether to download the asset before the application starts. On by default. |
| `Size` | The file size. |
| `Source` | The Source asset this asset was created from. Shown as `none` if there is no original. |
| `Created` | The date and time it was created. |

Click the **?** next to a property name to open help that contains a description of the property and an **API REFERENCE** link. When you meet an unfamiliar property, try clicking it first.

Below the properties is a **DOWNLOAD** button for downloading the original file. Script assets also show an **EDIT** button, and texture assets show type-specific items such as `Width` · `Height` · `sRGB` · `Mipmaps`.

## Import Pipeline Settings

How the pipeline behaves when you upload a file is controlled in the project settings. Click the **gear** icon at the top right to open **SETTINGS** and expand the **ASSET TASKS** section.

| Setting | Default | Description |
|---|---|---|
| `Create Atlases` | Off | Automatically generates a texture atlas from uploaded images. |
| `Create FBX Folder` | On | Automatically creates a folder to hold the resulting assets when you upload an FBX. |
| `Server-side GLB Decompose` | On | Decomposes GLB files on the server into template, render, material, and texture assets. |

:::warning Please note

These settings apply only to **files you upload from now on**. They are not applied retroactively to assets you've already uploaded, so after changing a setting you must re-upload the files you need.

:::

## Organizing with Folders

Once you have more than a few dozen assets, finding what you want in the list gets hard. It's much easier to split them into folders from the start.

1. Click the **+** button in the Assets panel and choose **Folder**.
2. Enter a name and press `Enter`.
3. Drag an asset onto the folder to move it there.

Clicking a folder in the left-hand tree enters it, and the path display at the top changes to something like `assets / ammo.js`. The TYPE row is also recalculated to match that folder's contents.

:::tip Tip

Assets whose files move as a set — such as `ammo.js`, used by the physics engine — are already grouped into a folder. It's safest to leave these folders as they are.

:::

## Next

- [Asset Types](/user-manual/assets/types) — Check which types exist and which extensions create them.
- [Importing 3D Models](/user-manual/assets/models) — How to upload files made in a modeling tool.
- [Third-party Asset Sites](/user-manual/assets/finding) — Where to get assets that are hard to make yourself.
- [Preloading and Streaming](/user-manual/assets/preloading-and-streaming) — How to start your game quickly.
