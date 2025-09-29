---
id: project-toolbar
title: Project Toolbar
sidebar_label: Project Toolbar
---

# Project Toolbar

Learn about project management-related tools in OasisW's project toolbar.

## Features
| Image | Button | Description |
|------|------|-------|
| ![Scenes](/img/usage-guide/8_manage_scenes.svg) | **Manage Scenes** | Opens scene selection screen |
| ![Settings](/img/usage-guide/8_settings.svg) | **Settings** |  Project environment settings |
| ![Toolbar](/img/usage-guide/8_project_toolbar.svg) | **Publish/Download** |  Download built project |

### Manage Scenes
- **Function**: Opens the scene selection screen.

![Scenes](/img/usage-guide/8_manage_scenes.png)

### Settings
![Settings](/img/usage-guide/8_settings.png)

- **Scene Name**  
  - Change the scene name to make it identifiable in the project.
- **Editor**  
  - Panel for adjusting overall project environment settings.
- **Asset Tasks**  
  - **Create FBX Folder** : When bringing FBX files, automatically creates a dedicated folder for that asset to organize FBX and related texture, material, and animation data in one place.
- **Physics**  
  - **Physics Library**: Option to set the physics engine to use, clicking Import Ammo button automatically adds Ammo folder to the project.
  - **Gravity**: Gravity value applied to all physics objects.
- **Rendering**  
  - **Ambient Color**: Sets global ambient light color.  
  - **Skybox / Skybox Intensity / Skybox Mip**: Adjusts cubemap-based sky background, brightness, and blur levels.  
  - **Tonemapping**: Selects HDR → LDR conversion method. (Linear, Filmic)  
  - **Exposure**: Adjusts overall scene brightness.  
  - **Gamma Correction**: Enables gamma correction to improve color and lighting expression.  
  - **Fog**: Sets fog type (None, Linear, Exponential, Exponential Squared), color, range, and density.  
  - **Resolution**: Sets resolution and resolution mode.  
  - **Fill Mode**: Sets canvas size adjustment method. (None, Keep aspect ratio, Fill window)  
  - **Device Pixel Ratio**: Sets whether to apply device pixel ratio.  
  - **Transparent Canvas**: Enables alpha blending for main canvas.  
  - **Preserve Drawing Buffer**: Sets whether to preserve buffer when creating WebGL context.  
- **Layers**  
  - Creates/manages layers for rendering order and grouping.
- **Lightmapping**  
  - **Size Multiplier / Max Resolution**: Adjusts lightmap size and sets maximum resolution.  
  - **Mode**: Selects Color Only or Color and Direction.  
  - **Filter / Range / Smoothness**: Sets runtime lightmap blur filter and intensity.  
  - **Ambient Bake / Samples / Sphere Part**: Sets ambient light baking.  
  - **Occlusion Brightness / Occlusion Contrast**: Adjusts shadow contrast.
- **Batch Groups**
  - Groups models and UI elements to optimize draw calls.
- **Loading Screen**  
  - Specifies script to display application loading screen.
- **External Scripts**
  - Specifies external script URLs to load with `<script>` tags.
- **Launch Page**  
  <!-- - Enables inter-thread memory sharing in browser to improve performance of WebAssembly-based physics engines (e.g., Ammo) or large-scale computations
  - Only works in Cross-Origin Isolation environment for security -->
- **Input**  
  - Enables/disables input devices (mouse, keyboard, touch, gamepad, etc.) to use in the project.
- **Network**  
  - Enables and configures network-related features. (Details vary by project implementation.)
- **Audio**  
  - **Use Legacy Audio**: Sets whether to use legacy audio components. (For legacy project compatibility)
- **Scripts Loading Order**  
  - Sets script loading order to prevent dependency issues.

### Publish/Download
![Toolbar](/img/usage-guide/8_publish_download.png)
- **Change Image**: Select the image to use when downloading. (Default image is applied if not selected.)
- **Choose Scenes**: Select the first scene to be shown when starting.
- **Title**: Enter the project title.
- **Description**: Enter the project description.