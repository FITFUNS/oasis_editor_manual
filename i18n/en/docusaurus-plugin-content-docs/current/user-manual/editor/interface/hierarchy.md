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

## Entity Creation and Category Structure

- Right-clicking in the Hierarchy view opens the entity creation menu, which is organized into purpose-based categories such as 2D, 3D, Audio, Camera, Light, User Interface, and Server Side.
- Each category creates an entity with predefined default components, and the created entity’s detailed settings can be modified through the Inspector.
- Detailed descriptions of each entity type and component shown in the Hierarchy view menu can be found in [Components](/user-manual/scenes/components).

<!-- - **Server Side**
    - **Server**: An entity that provides server functionality.
    - **Authentication**: A component that provides user authentication functionality.
    - **Leaderboard**: A server component that provides leaderboard functionality.
    - **Chat**: A server component that implements chat functionality. -->

