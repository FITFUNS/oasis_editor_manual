---
title: Animation
---

Animation assets are used to play a single animation on a 3D model. Animations are imported by uploading a 3D scene (such as an FBX file) that contains animation data. The animation data is extracted from the uploaded file by the asset pipeline and a Target asset is created for use in the game.

## Animation Preview

The Inspector has a viewer that allows you to preview animations alongside template or model assets. This is useful when you have a single animation that can be applied to different character rigs.

![Asset Inspector Preview](/img/user-manual/assets/animation/inspector-preview.gif)

There is also a viewer in the [Animation State Graph Editor][anim-state-graph-editor] when selecting states in the graph. When selected, all entities in the scene that use the graph are listed and can be selected for preview.

![Animation State Graph Preview](/img/user-manual/assets/animation/anim-state-graph-preview.gif)

<!-- ## Animation Import Settings

:::warning

This is an experimental feature. Please let us know your feedback in the [forums](https://forum.playcanvas.com/).

:::

When importing animations, there are settings that can be tweaked to adjust the animation quality against the file size.

They can be found in the Project Settings under Asset Tasks.

![Animation Import Settings](/img/user-manual/assets/animation/animation-import-settings.png)

### Naming Strategy

Only available for GLB export format. When importing an animation, the generated asset name can either be set from the 'Take Name' in the animation file, or use the animation filename instead.

This is useful with assets that are brought/taken from a store such as [Mixamo][mixamo] where all the take names are 'mixamo.com' and using the filename as the asset name is clearer.

### Sample rate

Available for both JSON and GLB export formats. The higher the rate, the higher detail and fidelity the animation at the cost of size. If you would like to keep the keyframes that have been set and defined in the original animation, select Disabled.

### Curve tolerance

Available for both JSON and GLB export formats. Curve tolerance controls a lossy compression setting of the animation import with the idea that a saving in file size can be made with little or no noticeable difference.

This is a value between 0 and 100 where the higher number, the smaller the file size but at cost of losing information in the animation. 0 would be no compression and 100 would lose all information.

1 or 2 is considered to be good starting point.

### Cubic curves

Only available for GLB export formats. Enable this option if you wish to keep the easing in the animation curves from the original animation. However, this will mean that the file will have extra information per keyframe and increase the size.

If enabling this option, it is recommended that Sample Rate is disabled and Curve Tolerance is set to 0. -->

[mixamo]: https://www.mixamo.com/
[anim-state-graph-editor]: /user-manual/animation/anim-state-graph-assets/
