---
title: 애니메이션 (Animation)
---

애니메이션 에셋은 3D 모델에서 단일 애니메이션을 재생하는 데 사용됩니다. 애니메이션은 애니메이션 데이터를 포함하는 3D 씬(FBX 파일 등)을 업로드하여 가져옵니다. 애니메이션 데이터는 에셋 파이프라인에 의해 업로드된 파일에서 추출되고 게임에서 사용할 Target 에셋이 생성됩니다.

## 애니메이션 미리보기

검사기에는 템플릿 또는 모델 에셋과 함께 애니메이션을 미리볼 수 있는 뷰어가 있습니다. 이는 다른 캐릭터 리그에 적용할 수 있는 단일 애니메이션이 있는 경우 유용합니다.

![에셋 검사기 미리보기](/img/user-manual/assets/animation/inspector-preview.gif)

그래프에서 상태를 선택할 때 [애니메이션 상태 그래프 에디터][anim-state-graph-editor]에도 뷰어가 있습니다. 선택하면 그래프를 사용하는 씬의 모든 엔티티가 목록에 표시되고 미리보기를 위해 선택할 수 있습니다.

![애니메이션 상태 그래프 미리보기](/img/user-manual/assets/animation/anim-state-graph-preview.gif)

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
