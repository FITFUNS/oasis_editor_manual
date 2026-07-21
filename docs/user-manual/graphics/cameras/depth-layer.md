---
title: 깊이 레이어 (Depth Layer)
---

어떤 렌더링 기법은 특정 카메라가 보는 씬의 깊이 버퍼나 컬러 버퍼를 가져다 써야 합니다. 깊이 레이어는 이럴 때 쓰는 특별한 레이어로, 카메라의 `layers` 속성에 추가할 수 있습니다. 이 레이어의 [`order`][4] 값은 렌더링 과정 중 어느 시점에 깊이 버퍼나 컬러 버퍼를 저장(캡처)할지 정합니다. 저장한 버퍼는 그 카메라의 뒤이은 레이어에서 다시 사용할 수 있습니다.

보통은 불투명한 레이어를 모두 그린 뒤에 이 버퍼들을 저장하며, 그 다음에 오는 투명 레이어나 후처리 단계에서 활용합니다.

또한 이 버퍼들을 저장하려면 스크립트에서 CameraComponent의 캡처 기능을 켜 줘야 합니다:

- [```requestSceneColorMap```][0] - 컬러 맵 요청
- [```requestSceneDepthMap```][1] - 깊이 맵 요청

## 버퍼 접근

셰이더에서 이 버퍼들을 텍스처처럼 가져다 쓰려면 아래 유니폼 이름을 씁니다:

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
