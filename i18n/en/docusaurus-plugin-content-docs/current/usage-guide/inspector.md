---
id: inspector
title: Inspector
sidebar_label: Inspector
---

# Inspector

Learn about the Inspector view, a core tool for editing all properties and components of selected objects in OasisW.

![Inspector](/img/usage-guide/7_1_inspector.png)

## Inspector View Types by Selection

- **Entity/Component Inspector**: Edits entity and component properties.
- **Texture Inspector**: Edits texture-related properties.
- **Material Inspector**: Edits material properties.
- **Cubemap Inspector**: Edits cubemap properties.

## Changing Property Values

- Specify how entities behave by changing property values.  
  Example) Select model to render in Model component, set lighting color, etc.

- Simple text or numeric properties can be adjusted with text fields or sliders.  
- Some cases require special input methods.  
  Example) When selecting assets, available assets in Asset view are highlighted.

- Some values can be manipulated directly in the viewport.  
  Example) Translate, Rotate, Scale values can be changed by dragging gizmos.

## Component and Feature List and Descriptions

![Inspector](/img/usage-guide/7_2_component.png)

### 2D
- **Sprite**: Represents 2D graphics with a single image.  
- **Animated Sprite**: 2D element that plays multi-frame animations.

### 3D
- **Model (legacy)**: Renders 3D models imported in the legacy way.  
- **Render**: Basic 3D mesh rendering component.

### Audio
- **Audio Listener**: Receives sound within the scene, mainly connected to the camera.  
- **Sound**: Component for playing sound clips.

### Animation
- **Anim**: Latest animation system component.  
- **Animation (legacy)**: Legacy animation component.

### Camera
- **Perspective**: 3D camera with perspective.  
- **Orthographic**: Flat camera without perspective.

### Light
- **Directional Light**: Light that shines in a constant direction.  
- **Spot Light**: Light that focuses light within a specific angle range.
- **Omni Light**: Spherical light that emits in all directions.  

### Physics
- **Collision**: Defines collision detection and response.  
- **Rigid Body**: Implements physics engine-based movement.

<!-- ### Gaussian Splat
- Implements particle and point cloud effects with point-based rendering. -->

### Navigation
- Provides pathfinding information for AI characters.

### Particle System
- Creates and controls various particle effects like fire, smoke, etc.

### Script
- Defines game logic and behavior with user-written code.

### Sequence
- Controls animations, events, and camera movements in chronological order.

### User Interface
- **Button**: Clickable interactive button.  
- **Element**: Basic UI elements like text, images, etc.  
- **Layout Child**: Child element that is automatically placed within a layout group.  
- **Layout Group**: Container that arranges and positions UI elements.  
- **2D Screen**: Displays 2D screen space UI.  
- **3D Screen**: Places and displays UI within 3D space.  
- **Scrollbar**: Bar that controls scroll position.  
- **Scroll View**: Provides scrollable content area.
