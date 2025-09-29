---
id: hierarchy
title: Hierarchy
sidebar_label: Hierarchy
---

# Hierarchy

Learn about the Hierarchy view, a core tool for managing all objects in OasisW scenes in a hierarchical structure.

![Hierarchy](/img/usage-guide/4_hierarchy.png)

## Entity Creation and Deletion

- **Create**: Select an entity in the hierarchy view, then create a **new child entity**.  
- **Delete**: Delete the selected entity.  
- **Method**: Use the button in the top right of the hierarchy view, or **right-click** the entity to use the context menu.

## Building Hierarchy

- Scenes have a hierarchical structure, and entities can have **parent-child relationships**.
- The parent entity's **transform matrix** is applied to all child entities.
  - When a parent is moved/rotated, children also move/rotate together.
  - Useful when manipulating many entities at once.
- Change hierarchy structure with **drag and drop**.
  - Move entities to become children of other entities (reparent).

## Searching Hierarchy

- Use the **Search Box** at the top of the hierarchy view to filter the entity list.

![Hierarchy](/img/usage-guide/4_2_search_box.png)

## Duplicating Entities

- **Shortcut**: Ctrl+D (Cmd+D on Mac)  
- **Method**: Select entity → duplicate → duplicate is created next to the original.
- **Right-click menu**: Select `Duplicate`.

## Entity Copy / Paste

- **Within the same scene**:
  1. Select the entity to copy.
  2. Press **Ctrl+C** (Cmd+C on Mac).
  3. Select the parent entity to paste to.
  4. Press **Ctrl+V** (Cmd+V on Mac).
- **Between different scenes or projects**:
  1. Execute copy (Ctrl+C).
  2. Navigate to another scene/project.
  3. Select a parent entity then execute paste (Ctrl+V).

## Web Editor Menu Structure

- **Entity**  
  The basic unit of objects within a scene. Acts as a container that can be the parent of all elements.
- **2D**
    - **Sprite**: 2D graphic element represented by a single image.
    - **Animated Sprite**: 2D animation element that plays multiple frame images sequentially.
- **3D**
    - **Render**: Basic component for rendering 3D meshes.
    - **Box**: 3D basic shape in box form.
    - **Capsule**: 3D basic shape in capsule form.
    - **Cone**: 3D basic shape in cone form.
    - **Cylinder**: 3D basic shape in cylinder form.
    - **Plane**: 3D basic shape in plane form.
    - **Sphere**: 3D basic shape in sphere form.
    - **Model (legacy)**: Legacy 3D model loading and rendering object.
    <!-- - **GSplat**: Object for point-based rendering (gaussian splatting). -->
- **Audio**
    - **Audio Listener**: Receives sound within the scene, mainly connected to the camera.
    - **Sound**: Component for playing audio files.
- **Camera**
    - **Perspective**: 3D camera view with perspective applied.
    - **Orthographic**: Camera view that renders in parallel without perspective.
- **Light**
    - **Directional Light**: Light that shines in one direction like sunlight.
    - **Spot Light**: Light that only shines within a specific angle range.
    - **Omni Light**: Light that emits in all directions from one point.
- **Particle System**  
    - System that implements visual effects (fire, smoke, snow, etc.) using particles.
- **User Interface**
    - **2D Screen**: Screen for placing 2D UI elements.
    - **3D Screen**: UI screen that can be placed in 3D space.
    - **Button**: Clickable UI button element.
    - **Layout Group**: Group that arranges UI elements according to certain rules.
    - **Layout Child**: Individual element that applies layout rules within a Layout Group.
    - **Group Element**: Container that groups multiple UI elements.
    - **Text Element**: UI element that displays text.
    - **Image Element**: UI element that displays images.
    - **Scrollbar**: Moving bar for scrollable areas.
    - **Scroll View**: Scrollable UI area.
- **Server Side**
    - **Server**: Entity that provides server functionality.
    - **Authentication**: Component that provides user authentication processing functionality.
    - **Leaderboard**: Server component that provides leaderboard functionality.
    <!-- - **Chat**: Server component that implements chat functionality. -->