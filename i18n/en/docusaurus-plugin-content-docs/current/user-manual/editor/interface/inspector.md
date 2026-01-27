---
title: Inspector
sidebar_label: Inspector
---

# Inspector

Learn about the Inspector view, a core tool for editing all properties and components of selected objects in OasisW.

![Inspector](/img/usage-guide/7_1_inspector.png)

## Inspector View Types Based on Selection

- **Entity/Component Inspector**: Edits entity and component properties.
- **Texture Inspector**: Edits texture-related properties.
- **Material Inspector**: Edits material properties.
- **Cubemap Inspector**: Edits cubemap properties.

## Changing Property Values

- Specify how entities behave by changing property values.  
  Example: Select the model to render in the Model component, set light colors, etc.

- Simple text or numeric properties can be adjusted using text fields or sliders.  
- Some cases require special input methods.  
  Example: When selecting assets, available assets in the Asset view are highlighted.

- Some values can be manipulated directly in the viewport.  
  Example: Translate, Rotate, and Scale values can be changed by dragging gizmos.

## Component and Feature List and Descriptions

![Inspector](/img/usage-guide/7_2_component.png)

### 2D
- **Sprite**: Represents 2D graphics with a single image.  
- **Animated Sprite**: A 2D element that plays multi-frame animations.

### 3D
- **Model (legacy)**: Renders 3D models imported using the legacy method.  
- **Render**: A basic 3D mesh rendering component.

### Audio
- **Audio Listener**: Receives sounds in the scene, typically connected to the camera.  
- **Sound**: A component for playing sound clips.

### Animation
- **Anim**: The latest animation system component.  
- **Animation (legacy)**: A legacy animation component.

### Camera
- **Perspective**: A 3D camera with perspective.  
- **Orthographic**: A flat camera without perspective.

### Light
- **Directional Light**: A light that shines in a constant direction.  
- **Spot Light**: A light that focuses light within a specific angular range.
- **Omni Light**: A spherical light that emits light in all directions.  

### Physics
- **Collision**: Defines collision detection and response.  
- **Rigid Body**: Implements physics engine-based movement.

<!-- ### Gaussian Splat
- Implements particle and point cloud effects using point-based rendering. -->

<!-- ### Navigation
- Provides pathfinding information for AI characters. -->

### Particle System
- Creates and controls various particle effects such as flames, smoke, etc.

### Script
- Defines game logic and behavior using user-written code.

<!-- ### Sequence
- Controls animations, events, and camera movements in chronological order. -->

### User Interface
- **Button**: A clickable interactive button.  
- **Element**: Basic UI elements such as text and images.  
- **Layout Child**: A child element that is automatically placed within a layout group.  
- **Layout Group**: A container that aligns and arranges UI elements.  
- **2D Screen**: Displays 2D screen space UI.  
- **3D Screen**: Places and displays UI within 3D space.  
- **Scrollbar**: A bar that adjusts scroll position.  
- **Scroll View**: Provides a scrollable content area.
