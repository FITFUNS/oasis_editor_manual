---
title: Camera
---

The camera component enables an entity to render the scene from a specific viewpoint.

The camera component can be enabled or disabled using the toggle in the top-right of the component panel. When enabled, the camera renders the scene every frame.

![Camera component](/img/user-manual/scenes/components/component-camera.png)

## Properties

| Property        | Description |
|-----------------|-------------|
| Clear Buffers   | Controls how the camera's render target is cleared before rendering each frame. The camera maintains two types of buffers: a color buffer that stores the visible image and a depth buffer that stores distance information from the camera position for rendered pixels. Buffers can be cleared independently: <ul><li>Color: When selected, the camera explicitly clears the render target to the selected clear color before rendering the scene.</li><li>Depth: When selected, the camera explicitly clears the render target's depth buffer before rendering the scene.</li></ul> |
| Clear Color     | The color used to clear the camera's render target. This property is only shown when 'Clear Color Buffer' is selected. |
| Depth Grabpass     | When selected, the camera requests that a texture containing the scene's depth map be generated. |
| Color Grabpass     | When selected, the camera requests that a texture containing the scene's color map be generated. |
| Projection      | The camera's projection type. Options are: <ul><li>Perspective</li><li>Orthographic</li></ul> |
| Frustum Culling | When selected, the camera only renders mesh instances whose axis-aligned bounding boxes intersect the camera's view frustum. Otherwise, the entire scene is rendered regardless of visibility. |
| Field of View   | The angle between the top and bottom clip planes of a perspective camera. This property is only shown when 'Projection' is set to 'Perspective'. |
| Ortho Height    | The distance in world units between the top and bottom clip planes of an orthographic camera. This property is only shown when 'Projection' is set to 'Orthographic'. |
| Near Clip       | The distance from the camera's viewpoint to the near clip plane in camera space. |
| Far Clip        | The distance from the camera's viewpoint to the far clip plane in camera space. |
| Priority        | A number that defines the order in which the engine renders camera views. Smaller numbers are rendered first. |
| Viewport        | A rectangle that specifies the viewport for the camera's connected render target. This enables features like split-screen or picture-in-picture. Defined in normalized coordinates (0 to 1) in the following format: <ul><li>x: Bottom-left x coordinate</li><li>y: Bottom-left y coordinate</li><li>w: Width of the rectangle</li><li>h: Height of the rectangle</li></ul> |
| Layers        | The layers this camera will render. |

## Scripting Interface

You can control the camera component's properties using a [script component][2]. The camera component's scripting interface is [here][3].

[2]: /user-manual/scenes/components/script
[3]: https://manual.oasisserver.link/engine/classes/CameraComponent.html
