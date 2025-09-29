---
title: 깊이 레이어 (Depth Layer)
---

일부 렌더링 기법은 특정 카메라에 대한 씬의 깊이 또는 컬러 버퍼에 접근해야 합니다. 깊이 레이어는 카메라의 `layers` 속성에 추가할 수 있는 특별한 레이어입니다. 레이어의 [`order`][4]는 렌더링 중 어느 시점에서 깊이 또는 컬러 버퍼가 캡처되는지를 정의합니다. 캡처된 버퍼는 카메라의 후속 레이어에서 사용할 수 있습니다.

일반적으로 이러한 버퍼는 모든 불투명 레이어가 렌더링된 후에 캡처되며, 후속 투명 레이어나 후처리에서 사용할 수 있습니다.

또한 이러한 버퍼를 캡처하려면 스크립트에서 CameraComponent에서 캡처를 활성화해야 합니다:

- [```requestSceneColorMap```][0] - 컬러 맵 요청
- [```requestSceneDepthMap```][1] - 깊이 맵 요청

## 버퍼 접근

셰이더에서 이러한 버퍼 중 하나를 텍스처로 접근하려면 다음 유니폼 이름을 사용해야 합니다:

- 컬러 맵용: `uSceneColorMap`
- 깊이 맵용: `uSceneDepthMap`

<!-- ## 예제

이러한 엔진 예제들은 깊이 맵과 컬러 맵의 렌더링을 보여주며, 사용을 가능하게 하는 사용자 정의 셰이더도 보여줍니다:

- GrabPass는 컬러 버퍼의 사용을 보여줍니다: [`GrabPass`][2]
- GroundFog는 깊이 버퍼의 사용을 보여줍니다: [`GroundFog`][3] -->

[0]: https://manual.oasisserver.link/engine/classes/CameraComponent.html#requestscenecolormap
[1]: https://manual.oasisserver.link/engine/classes/CameraComponent.html#requestscenedepthmap
[2]: https://playcanvas.github.io/#/shaders/grab-pass
[3]: https://playcanvas.github.io/#/shaders/ground-fog
[4]: /user-manual/graphics/layers/#choosing-the-layer-order
