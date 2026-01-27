---
title: Hierarchy
sidebar_label: Hierarchy
---

# Hierarchy

Learn about the Hierarchy view, a core tool for managing all objects in OasisW scenes in a hierarchical structure.

![Hierarchy](/img/usage-guide/4_hierarchy.png)

## Creating and Deleting Entities

- **Create**: Select an entity in the Hierarchy view, then create a **new child entity**.  
- **Delete**: Delete the selected entity.  
- **Method**: Use the buttons in the top right of the Hierarchy view, or **right-click** on an entity to use the context menu.

## Building the Hierarchy

- Scenes have a hierarchical structure, and entities can have **parent-child relationships**.
- The **transform matrix** of a parent entity is applied to all child entities.
  - When you move/rotate the parent, children move/rotate together.
  - Useful for manipulating many entities at once.
- Change the hierarchy structure using **drag and drop**.
  - Move entities to become children of other entities (reparenting).

## Searching the Hierarchy

- Use the **Search Box** at the top of the Hierarchy view to filter the entity list.

![Hierarchy](/img/usage-guide/4_2_search_box.png)

## Duplicating Entities

- **Shortcut**: Ctrl+D (Cmd+D on Mac)  
- **Method**: Select entity → Duplicate → A duplicate is created right next to the original.
- **Right-click Menu**: Select `Duplicate`.

## Copy / Paste Entities

- **Within the Same Scene**:
  1. Select the entity you want to copy.
  2. Press **Ctrl+C** (Cmd+C on Mac).
  3. Select the parent entity where you want to paste.
  4. Press **Ctrl+V** (Cmd+V on Mac).
- **Between Different Scenes or Projects**:
  1. Execute copy (Ctrl+C).
  2. Navigate to another scene/project.
  3. Select the parent entity, then execute paste (Ctrl+V).

## Web Editor Menu Structure

- **Entity**  
  The basic unit of objects within a scene. Acts as a container that can be the parent of all elements.
- **2D**
    - **Sprite**: A 2D graphic element represented by a single image.
    - **Animated Sprite**: A 2D animation element that plays multiple frame images sequentially.
- **3D**
    - **Render**: A basic component for rendering 3D meshes.
    - **Box**: A box-shaped 3D primitive.
    - **Capsule**: A capsule-shaped 3D primitive.
    - **Cone**: A cone-shaped 3D primitive.
    - **Cylinder**: A cylinder-shaped 3D primitive.
    - **Plane**: A plane-shaped 3D primitive.
    - **Sphere**: A sphere-shaped 3D primitive.
    - **Model (legacy)**: An object for loading and rendering 3D models using the legacy method.
    <!-- - **GSplat**: An object for point-based rendering (gaussian splatting). -->
- **Audio**
    - **Audio Listener**: Receives sounds in the scene, typically connected to the camera.
    - **Sound**: A component for playing audio files.
- **Camera**
    - **Perspective**: A 3D camera view with perspective applied.
    - **Orthographic**: A camera view that renders in parallel without perspective.
- **Light**
    - **Directional Light**: A light that shines in one direction, like sunlight.
    - **Spot Light**: A light that only shines within a specific angular range.
    - **Omni Light**: A light that emits in all directions from a single point.
- **Particle System**  
    - A system for implementing visual effects (flames, smoke, snow, etc.) using particles.
- **User Interface**
    - **2D Screen**: A screen for placing 2D UI elements.
    - **3D Screen**: A UI screen that can be placed in 3D space.
    - **Button**: A clickable UI button element.
    - **Layout Group**: A group that arranges UI elements according to certain rules.
    - **Layout Child**: An individual element that has layout rules applied within a Layout Group.
    - **Group Element**: A container that groups multiple UI elements.
    - **Text Element**: A UI element that displays text.
    - **Image Element**: A UI element that displays images.
    - **Scrollbar**: A scroll bar for scrollable areas.
    - **Scroll View**: A scrollable UI area.
- **Server Side**
    - **Server**: An entity that provides server functionality.
    - **Authentication**: A component that provides user authentication functionality.
    - **Leaderboard**: A server component that provides leaderboard functionality.
    <!-- - **Chat**: A server component that implements chat functionality. -->

