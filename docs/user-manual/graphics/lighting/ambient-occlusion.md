---
title: 앰비언트 오클루전 (Ambient Occlusion)
---

앰비언트 오클루전은 환경에 의한 오클루전을 기반으로 표면에 얼마나 많은 빛이 도달하는지를 근사하는 기법입니다.

OasisW에서는 앰비언트 조명이 AO 맵에 의해 곱해지며, 이는 디퓨즈와 스펙큘러 모두에 적용됩니다.

![Ambient Occlusion comparison: without/with](/img/user-manual/graphics/lighting/lightmapping/model-ao-comparison.jpg)  
*왼쪽: AO 없음; 오른쪽: 글로벌 AO 있음*

AO 맵은 다양한 스케일을 가질 수 있습니다. 예를 들어, 표면의 균열을 보여주는 텍스처 디테일 AO나 모델의 다른 부분들의 큰 그림자 효과를 가진 월드 스케일 AO가 있습니다. 대규모 AO는 더 큰 효과를 주며, 보통 UV1의 라이트맵과 일치하고 더 중요합니다.

## 글로벌 AO 렌더링

AO 렌더링은 인기 있는 3D 모델링 및 아키비즈 도구를 사용하여 수행할 수 있습니다. 
<!-- 이는 [라이트맵핑 섹션][0]에서 설명된 라이트맵 렌더링과 실질적으로 동일합니다. -->

모든 지오메트리에 특수 머티리얼을 적용하여 AO처럼 보이게 하고, 텍스처로 렌더링하는 동안 다른 설정을 사용하는 몇 가지 작은 차이점이 있습니다.

VRay가 있는 3D's Max에서는 **VRayDirt** 타입과 **Ambient Occlusion** 모드의 머티리얼을 생성하여 수행하며, 여기서 **radius**를 변경하여 원하는 결과를 얻을 수 있습니다.

![3D's Max: Ambient Occlusion VRay Material](/img/user-manual/graphics/lighting/lightmapping/3ds-max-ao-rendering.png)

이 머티리얼은 앰비언트 오클루전 맵에 있어야 하는 모든 정적 지오메트리에 적용되어야 합니다. 3D's Max에서는 개별 객체에 수동으로 적용하거나 VRay 렌더 설정을 사용하여 **Override mtl** 속성을 사용할 수 있습니다. 이렇게 하면 개별 머티리얼이 보존되고 작업이 더 쉬워집니다.

![3D's Max VRay Render Settings: Override mtl](/img/user-manual/graphics/lighting/lightmapping/3ds-max-vray-override-mtl.png)

그런 다음 이 데이터를 텍스처로 내보내야 합니다. 3D's Max에서는 Render To Texture를 사용하여 수행하며, 라이트맵핑 렌더링과 동일하지만 **output** 옵션은 **VRayCompleteMap**을 사용해야 합니다.

AO 텍스처는 매우 상세한 정보를 저장할 필요가 없으며, 시각적으로 텍스처 압축 아티팩트에 크게 영향을 받지 않습니다. 따라서 JPEG가 경제적이고 적합한 형식입니다.

## 에디터에 업로드

에디터에서 텍스처를 업로드하고 머티리얼의 Ambient Occlusion 슬롯에 적용하기만 하면 됩니다.

![Editor Ambient Occlusion Map](/img/user-manual/graphics/lighting/lightmapping/editor-ao-map.png)

## 예제

<!-- You can [explore example][6] that uses global Ambient Occlusion described above and its [project][7]. -->

![OasisW Lightmapping](/img/user-manual/graphics/lighting/lightmapping/oasis-lightmapping-scene.jpg)  
*이 씬의 조명은 라이트맵과 AO 텍스처, 그리고 Box Projected IBL(반사)을 사용하여 구현되었습니다*

[0]: /user-manual/graphics/lighting/lightmapping/
[3]: /user-manual/graphics/lighting/lightmapping#render-to-texture
<!-- [6]: https://playcanv.as/p/zdkARz26/ -->
<!-- [7]: https://playcanvas.com/project/446587/overview/archviz-example -->
