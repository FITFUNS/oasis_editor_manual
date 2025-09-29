---
title: Components
---

Components encapsulate functionality that can be added to or removed from entities. For example, a component can enable an entity to play sound, render a 3D model, or execute scripts.

You can add components to entities using the OasisW editor or the engine API. The properties that a component exposes are listed in the inspector when the entity is selected.

## Component Types

The OasisW engine has various components defined:

| Component                         | Description                                                                   |
| --------------------------------- | ----------------------------------------------------------------------------- |
| [Anim](/user-manual/scenes/components/anim)                      | Specifies state graphs and animations that can be executed in the entity hierarchy. |
| [Audio Listener](/user-manual/scenes/components/audiolistener)   | Specifies the position of the listener for 3D audio playback. |
| [Button](/user-manual/scenes/components/button)                  | Creates user interface buttons.       |
| [Camera](/user-manual/scenes/components/camera)                  | Renders the scene from the location of the entity.      |
| [Collision](/user-manual/scenes/components/collision)            | Assigns a collision volume to the entity.|
| [Element](/user-manual/scenes/components/element)                | Defines user interface text or image elements. |
| [Layout Child](/user-manual/scenes/components/layout-child)      | Overrides default layout group properties for a single element.  |
| [Layout Group](/user-manual/scenes/components/layout-group)      | Automatically sets the position and scale of child user interface elements.   |
| [Light](/user-manual/scenes/components/light)                    | Attaches a dynamic light source to the entity.    |
| [Particle System](/user-manual/scenes/components/particlesystem) | Attaches a particle system to the entity.     |
| [Rigid Body](/user-manual/scenes/components/rigidbody)           | Adds the entity to the scene's physics simulation.     |
| [Render](/user-manual/scenes/components/render)                  | Renders graphics primitives or render assets.     |
| [Screen](/user-manual/scenes/components/screen)                  | Defines the area and rendering of the user interface.   |
| [Script](/user-manual/scenes/components/script)                  | Allows the entity to run JavaScript fragments to implement custom behavior.  |
| [Scrollbar](/user-manual/scenes/components/scrollbar)            | Defines a scrolling control for a Scrollview component.  |
| [Scroll View](/user-manual/scenes/components/scrollview)         | Defines a scrollable area in a user interface.   |
| [Sound](/user-manual/scenes/components/sound)                    | Plays audio assets.            |
| [Sprite](/user-manual/scenes/components/sprite)                  | Renders 2D graphics at the location of the entity.    |
<!-- | [GSplat](/user-manual/scenes/components/gsplat)                  | Renders a 3D Gaussian Splat at the location of the entity.                    | -->

### Deprecated Components

OasisW still provides some deprecated components. These components should not be used in new projects.

| Component              | Description                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------- |
| [Animation](/user-manual/scenes/components/animation) | Specifies animations that can be executed on the model specified by the entity's model component. |
| [Model](/user-manual/scenes/components/model)         | Renders a 3D model at the location of the entity.   |
