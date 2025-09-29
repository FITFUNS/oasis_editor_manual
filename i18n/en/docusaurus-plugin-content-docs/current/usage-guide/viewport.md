---
id: viewport
title: Viewport
sidebar_label: Viewport
---

# Viewport

Learn about the viewport, a core interface for visually editing and navigating OasisW's 3D scenes.

![Viewport](/img/usage-guide/5_1_viewport.png)

## Cameras

### Perspective
- By default, the editor uses a **Perspective camera**.  
  → Provides a view like a movie camera floating around the scene.
- You can switch to various cameras through the **camera dropdown menu**.

![Viewport](/img/usage-guide/5_2_camera.png)

### Orthographic
- Types: **Top, Bottom, Front, Back, Left, Right**  
- Features: Provides a view without perspective → Useful for **precise position adjustment**.

## Gizmos

| <img src="/img/usage-guide/5_3_gizmo1.png" alt="Gizmo type 1" width="250" height="250" /> | <img src="/img/usage-guide/5_3_gizmo2.png" alt="Gizmo type 2" width="250" height="250" /> | <img src="/img/usage-guide/5_3_gizmo3.png" alt="Gizmo type 3" width="250" height="250" /> |
|:---:|:---:|:---:|
| Translate | Rotate | Scale |

- The **3-colored axis** visible on screen is called a **gizmo**.
- Used when manipulating the **transform matrix** of selected entities.
- Types:
  1. **Translate** → Has arrow icons at the end of axes.
  2. **Rotate** → 3-colored circular ring structure.
  3. **Scale** → Has cube icons at the end of axes.

## Render Mode

- You can change settings through the **render mode dropdown menu** in the top right of the viewport.

![Viewport](/img/usage-guide/5_4_render_mode.png)

### Features
1. **Wireframe Display**: Visualizes scene meshes as line structures only.
2. **Debug Render Mode**: Can display only specific rendering properties.
    - **Standard**: General rendering mode. Displays final results with all materials and lighting applied.
    - **Albedo**: Displays only the basic color texture of materials (pure color excluding light and shadow effects).
    - **Opacity**: Visualizes opacity (Transparency/Opacity) values.
    - **World Normal**: Expresses surface direction (normal vector) as colors. Used to check surface slopes.
    - **Specularity**: Displays material reflection intensity (Specular level).
    - **Gloss**: Displays surface smoothness or roughness.
    - **Metalness**: Visualizes whether the surface is metallic.
    - **AO (Ambient Occlusion)**: Displays ambient occlusion effects to check surface depth and shading.
    - **Emission**: Displays emission properties (parts that glow without light sources).
    - **Lighting**: Visualizes only lighting in the scene (excluding material colors and textures).
    - **UVO**: Visualizes UV channel 0 texture coordinate placement.