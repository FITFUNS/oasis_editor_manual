---
title: Depth Layer
---

Some rendering techniques require access to the scene's depth or color buffer for a specific camera. The depth layer is a special layer that can be added to a camera's `layers` property. The [`order`][4] of the layer defines at which point during rendering the depth or color buffer is captured. The captured buffer can then be used by subsequent layers of the camera.

Typically, these buffers are captured after all opaque layers have been rendered and can be used by subsequent transparent layers or post-processing.

Additionally, to capture these buffers, you need to enable capture in the CameraComponent from a script:

- [```requestSceneColorMap```][0] - Request color map
- [```requestSceneDepthMap```][1] - Request depth map

## Buffer Access

To access one of these buffers as a texture in a shader, you need to use the following uniform names:

- For color map: `uSceneColorMap`
- For depth map: `uSceneDepthMap`

<!-- ## Examples

These engine examples show the rendering of depth maps and color maps, as well as custom shaders that enable their use:

- GrabPass shows the use of color buffer: [`GrabPass`][2]
- GroundFog shows the use of depth buffer: [`GroundFog`][3] -->

[0]: https://manual.oasisserver.link/engine/classes/CameraComponent.html#requestscenecolormap
[1]: https://manual.oasisserver.link/engine/classes/CameraComponent.html#requestscenedepthmap
[2]: https://playcanvas.github.io/#/shaders/grab-pass
[3]: https://playcanvas.github.io/#/shaders/ground-fog
[4]: /user-manual/graphics/layers/#choosing-the-layer-order
