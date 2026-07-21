---
title: Units
---

OasisW scenes typically treat **1 unit as 1 meter**. Moving a Position value by `1` in the editor is like moving 1 meter in the real world.

:::note Why It Matters

If the size reference is off, **a human character can come in as big as a building, or a car as small as a fingernail.** You can force it to fit afterwards with Scale, but because physics simulation and lighting calculations work off real-world size, gravity can feel wrong and shadows can look off. It's far easier to get it right from the start.

:::

## Set a Standard and Stick to It

When creating artwork for OasisW, it's important to **work at the scale you want**. To do that, you first need to check the **working unit** of the scene in the modeling program you use.

You can choose any working unit you like. **But once you've decided, you must stick to that standard all the way through.**

For example, suppose you make a cube that is 1 meter on each side.

| Working unit | Cube size to build | Result imported into OasisW |
|---|---|---|
| Meters | 1 × 1 × 1 | 1 × 1 × 1 |
| Centimeters | 100 × 100 × 100 | 1 × 1 × 1 |

Export both scenes to FBX and import them into OasisW, and both become **the same 1×1×1 cube.** What matters isn't the numbers themselves, but keeping *"how big this object is in the unit I chose"* consistent.

:::tip A Way to Check

Keep a **1.7-meter-tall reference box** in your modeling program as you work. Comparing any character or piece of furniture against that box makes it immediately obvious if the size is off.

:::

## Blender

To make sure units export correctly from Blender, check two places.

1. In **Scene Properties**, confirm the Unit System is set to `Metric` and the Unit Scale is `1.0`.
2. **When exporting to FBX format**, confirm `Apply Scaling` is set to `FBX All`.

![Blender unit settings](/img/user-manual/assets/models/units/blender-units.png)

![Blender FBX export settings](/img/user-manual/assets/models/units/blender-fbx-export.png)

:::warning A Commonly Missed Spot

If the Unit Scale is set to a non-1 value like `0.01`, it can look fine in the Blender view but **come in 100× off when imported.** If a model comes in absurdly large or small, check this value first.

:::

## Autodesk 3D Studio Max

To check or change the working unit in 3D Studio Max, open the **Units Setup** dialog and click the **System Unit Setup** button.

![3DS Max unit settings](/img/user-manual/assets/models/units/max-units.png)

## Autodesk Maya

To check or change the working unit in Maya, open the **Preferences** dialog.

![Maya unit settings](/img/user-manual/assets/models/units/maya-units.png)

## When the Imported Size Looks Wrong

- **If it's off by 100× or 0.01×** — Meters and centimeters got mixed up. Check the unit settings in your modeling program.
- **If it's off by 2.54×** — The file was worked on in inches. This often appears with SketchUp or US-region assets.
- **If it's a downloaded asset you can't edit at the source** — Adjust with the template instance's Scale, but if you plan to use physics it's safer to resize in Blender and re-export.
- **If the model is lying on its side** — It's an axis problem, not a size one. Set the Y axis to be up (Y-up) when exporting.

## Related Documents

- [Building Models](/user-manual/assets/models/building) — Export tips for each program.
- [Importing 3D Models](/user-manual/assets/models) — Upload the files to your project.
- [Physics](/user-manual/physics) — Simulates based on real-world size.
