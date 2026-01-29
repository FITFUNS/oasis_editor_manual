---
title: Project Toolbar
sidebar_label: Project Toolbar
---

# Project Toolbar

Learn about the project management tools available in OasisW's project toolbar.

## Features
| Image | Button | Description |
|------|------|-------|
| ![Scenes](/img/usage-guide/8_manage_scenes.svg) | **Manage Scenes** | Opens the scene selection screen |
| <img src="/img/usage-guide/8_home.svg" alt="Settings" width="24" height="24" /> | **Home** | Navigate to project selection window |
| ![Settings](/img/usage-guide/8_settings.svg) | **Settings** | Project environment settings |
| ![Toolbar](/img/usage-guide/8_project_toolbar.svg) | **Publish/Download** | Download built project |

### Manage Scenes
- **Function**: Opens the scene selection screen.

![Scenes](/img/usage-guide/8_manage_scenes.png)

### Settings
- Project Settings control how your project runs and how the Editor behaves for your team. 

![Settings](/img/usage-guide/8_settings.png)

<!-- - **Scene Name**  
  - Change the scene name to make it identifiable in the project.
- **Editor**  
  - A panel for adjusting overall project environment settings.
- **Asset Tasks**  
  - **Create Atlases**: When enabled, both Texture and Texture Atlas assets are created when importing textures.
  - **Create FBX Folder**: When importing FBX files, automatically creates a dedicated folder for that asset, organizing the FBX and related textures, materials, and animation data in one place.
- **Physics**  
  - **Physics Library**: Option to set the physics engine to use. Clicking the Import Ammo button automatically adds an Ammo folder to the project.
  - **Gravity**: The gravity value applied to all physics objects.
- **Rendering**  
  - **Ambient Color**: Sets the global ambient light color.  
  - **Skybox**: A skybox is a cubemap asset rendered behind the 3D scene. It uses six 2D images to represent the distant background world beyond the 3D models in the scene. To add a skybox, create a cubemap asset and assign it to the cubemap slot in the settings panel.
  - **Type**: Select the projection method to use when rendering the skybox cubemap. Options: Infinite (rendered from infinity), Box (mapped to box mesh), Dome (mapped to hemispherical dome).
  - **Intensity**: Sets the intensity of the skybox to match exposure levels.
  - **Rotation**: Sets the rotation value of the skybox.
  - **Mip**: Selects the Mip level of the prefiltered skybox. Higher values use lower resolution, more blurred (prefiltered) Mips.
  - **Clustered Lighting**: Enables clustered lighting.
  - **Cells**: Sets the number of cells to divide the space containing lights along each axis.
  - **Max Lights Per Cell**: Sets the maximum number of lights each cell can store.
  - **Cookies Enabled**: Enables light cookie functionality in clustered lighting.
  - **CookieAtlasResolution**: Sets the resolution of the atlas texture that stores all non-directional cookie textures.
  - **Shadows Enabled**: Enables shadow functionality in clustered lighting.
  - **Shadow Atlas Resolution**: Sets the resolution of the atlas texture that stores all non-directional shadow textures.
  - **Shadow Type**: Sets the shadow filtering type used for all shadows.
  - **Area Lights Enabled**: Enables area light functionality in clustered lighting.
  - **Exposure**: Adjusts the overall brightness of the scene.  
  - **Fog**: Sets fog type (None, Linear, Exponential, Exponential Squared), color, range, and density.  
  - **Resolution Width**: Specifies the horizontal resolution of the application in pixels.  
  - **Resolution Height**: Specifies the vertical resolution of the application in pixels.
  - **Resolution Mode**: Sets how canvas resolution is adjusted. Determines whether resolution changes when size changes.
  - **Fill Mode**: Sets how canvas size is adjusted. (None, Keep aspect ratio, Fill window)  
  - **Device Order**: The order in which attempts are made to create the graphics devices.
  - **Enable WebGPU**: When enabled, the application will try to use WebGPU if available.
  - **Enable WebGL 2.0**: When enabled, the application will try to use WebGL 2.0 if available.
  - **Power Preference**: Provides a hint for selecting WebGL's power mode. Options: Default (browser auto-determines), High Performance (performance priority), Low Power (low power priority).
  - **Anti-aliasing**: When disabled, anti-aliasing on the back buffer is turned off.
  - **Device Pixel Ratio**: Sets whether to apply the device pixel ratio.  
  - **Transparent Canvas**: Enables alpha blending on the main canvas.  
  - **Preserve Drawing Buffer**: Sets whether to preserve the buffer when creating the WebGL context.  
- **Layers**  
  - Creates/manages layers for rendering order and grouping.
- **Lightmapping**  
  - **Size Multiplier / Max Resolution**: Adjusts lightmap size and sets maximum resolution.  
  - **Mode**: Select Color Only or Color and Direction.  
  - **Filter / Range / Smoothness**: Sets runtime lightmap blur filter and intensity.  
  - **Ambient Bake / Samples / Sphere Part**: Sets ambient light baking.  
  - **Occlusion Brightness / Occlusion Contrast**: Adjusts shadow brightness and contrast.
- **Batch Groups**
  - Groups models and UI elements to optimize draw calls.
- **Loading Screen**  
  - Specifies the script that displays the application loading screen.
- **External Scripts**
  - Specifies external script URLs to load via `<script>` tags.
- **Launch Page**  
  - Adds required headers to the launch page to enable SharedArrayBuffer.
  - Required to use some advanced features such as [SharedArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) multi-threaded physics engine.
- **Input**  
  - Enables/disables input devices (mouse, keyboard, touch, gamepad, etc.) to use in the project.
- **Network**  
  - **Asset Retries**: Sets the maximum number of retries when asset loading fails. If an asset request fails, it will retry multiple times with exponentially increasing wait times.
- **Scripts Loading Order**  
  - Sets script loading order to prevent dependency issues. -->

### Publish/Download
![Toolbar](/img/usage-guide/8_publish_download.png)
- **Change Image**: Select the image to use when downloading. (If not selected, the default image is applied.)
- **Choose Scenes**: Select the first scene to be displayed when starting.
- **Title**: Enter the project title.
- **Description**: Enter the project description.
