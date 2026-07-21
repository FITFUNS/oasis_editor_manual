---
title: Importing 3D Models
---

3D models and animations are imported into OasisW by uploading scene files created in [3D modeling applications](/user-manual/assets/models/building) such as [Blender](https://www.blender.org/), 3D Studio Max, or Maya.

OasisW supports various formats including glTF binary (`.glb`), FBX (`.fbx`), and more. **For the best results, use the GLB format.** GLB packs the mesh, materials, textures, and animations into a single file, so there is less risk of textures going missing.

## Uploading a Model

1. Click the **+** button in the assets panel and choose **Upload Files**.
2. Select your model file (`.glb` or `.fbx`). You can also **drag and drop** it from your file browser onto the assets panel.
3. Once the upload finishes, a conversion job starts. You can track its progress from the **Jobs** indicator at the top of the screen.

## One File Becomes Several Assets

You might expect uploading a single model file to create just one asset, but in fact **several are created at once**.

- **Model (source)** — The original file you uploaded. This is a [source asset](/user-manual/assets).
- **[Template](/user-manual/assets/types/template)** — An asset that holds the model's entity hierarchy. This is what you actually place into a scene.
- **[Render](/user-manual/assets/types/render)** — The 3D mesh data.
- **[Material](/user-manual/assets/types/material)** — Defines the color and texture of surfaces.
- **[Texture](/user-manual/assets/types/texture)** — The images applied to the model.
- **[Animation](/user-manual/assets/types/animation)** — Created as well if the model contains animation.

:::note Checking in the Editor

If you look at the **TYPE** row in the assets panel, you'll see that uploading a single model has increased the counts of several types together, such as `Template · 1`, `Texture · 1`, and `Material · 1`. It's normal for one file to add several rows to the list.

:::

## Choosing How the Model Is Split

How a model is broken apart is controlled in the project settings. Click the **gear** in the top right and expand **SETTINGS › ASSET TASKS**.

| Setting | Default | What it means when uploading a model |
|---|---|---|
| `Create FBX Folder` | On | When you upload an FBX, a folder is created automatically to hold and organize the resulting assets. If turned off, the several assets are scattered at the top level. |
| `Server-side GLB Decompose` | On | Decomposes the GLB on the server into template, render, material, and texture assets. If turned off, it comes in as a single container asset. |
| `Create Atlases` | Off | Bundles images into a texture atlas. Useful when you use many 2D sprites. |

:::warning Please Note

These settings apply only to **files you upload from now on**. They are not applied to models already uploaded, so if you change a setting you'll need to re-upload the file.

:::

## Placing It in a Scene

To place a model in the scene, use the **Template asset**.

1. Find the asset of type `Template` in the assets panel.
2. Drag it into the **viewport** or the **hierarchy**.
3. The model's hierarchy is created as entities exactly as it was.

What you place this way is an **instance** of the template. Editing the original template is reflected in the instances, and editing an instance alone shows an `Override` marker at the top of the inspector.

## Things to Check When It Doesn't Work

- **The model looks far too large or too small.** — The units of the modeling tool and OasisW may differ. See the [Units](/user-manual/assets/models/units) document and match your export settings.
- **Textures don't show and the model appears gray.** — FBX often doesn't embed textures in the file. Re-export as GLB, or upload the texture images separately and connect them to the material.
- **The model is upside down or lying on its side.** — Modeling tools differ in their up axis (Y-up / Z-up). It's safer to set Y-up when exporting.
- **The upload takes a long time.** — Models with high polygon counts and high-resolution textures take time to convert. Wait until the **Jobs** indicator finishes.

## Next

- [Building Models](/user-manual/assets/models/building) — Recommendations for exporting from your modeling tool.
- [Units](/user-manual/assets/models/units) — Match the size reference.
- [Third-party Asset Sites](/user-manual/assets/finding) — Where to find finished models.
