---
title: 앰비언트 오클루전 (Ambient Occlusion)
---

앰비언트 오클루전(AO)은 주변 물체에 가려져서 빛이 잘 닿지 않는 부분을 흉내 내는 기법입니다. 즉, 표면의 각 지점에 주변 빛이 얼마나 도달하는지를 어림잡아 계산합니다.

OasisW에서는 주변 빛(앰비언트 조명)에 AO 맵을 곱해서 적용하며, 이는 디퓨즈(퍼진 빛)와 스펙큘러(반사광) 양쪽 모두에 반영됩니다.

![Ambient Occlusion comparison: without/with](/img/user-manual/graphics/lighting/lightmapping/model-ao-comparison.jpg)  
*왼쪽: AO 없음; 오른쪽: 글로벌 AO 있음*

AO 맵은 여러 스케일(크기)로 만들 수 있습니다. 예를 들어 표면의 작은 균열까지 표현하는 텍스처 디테일 AO가 있고, 모델의 서로 다른 부분끼리 만드는 큰 그림자를 담은 월드 스케일 AO도 있습니다. 스케일이 큰 AO가 화면에 미치는 영향이 더 크며, 보통 UV1의 라이트맵과 짝을 이루고 더 중요하게 쓰입니다.

## 글로벌 AO 렌더링

AO는 널리 쓰이는 3D 모델링 도구나 건축 시각화(아키비즈) 도구로 만들 수 있습니다. 
<!-- 이는 [라이트맵핑 섹션][0]에서 설명된 라이트맵 렌더링과 실질적으로 동일합니다. -->

방법은 라이트맵 만들기와 거의 같지만, 모든 지오메트리에 AO처럼 보이는 특수 머티리얼을 입히고 텍스처로 뽑아낼 때 설정을 조금 다르게 한다는 작은 차이가 있습니다.

VRay를 쓰는 3D's Max에서는 **VRayDirt** 타입에 **Ambient Occlusion** 모드를 켠 머티리얼을 만들어 처리하며, **radius** 값을 조절해 원하는 결과를 얻습니다.

![3D's Max: Ambient Occlusion VRay Material](/img/user-manual/graphics/lighting/lightmapping/3ds-max-ao-rendering.png)

이 머티리얼은 앰비언트 오클루전 맵에 담기길 원하는 모든 정적(움직이지 않는) 지오메트리에 적용해야 합니다. 3D's Max에서는 객체마다 하나씩 직접 적용해도 되고, VRay 렌더 설정의 **Override mtl** 속성을 쓸 수도 있습니다. 후자를 쓰면 원래 머티리얼은 그대로 두면서 작업이 훨씬 편해집니다.

![3D's Max VRay Render Settings: Override mtl](/img/user-manual/graphics/lighting/lightmapping/3ds-max-vray-override-mtl.png)

그다음 이 결과를 텍스처 파일로 내보냅니다. 3D's Max에서는 Render To Texture로 처리하며, 라이트맵 렌더링과 같은 방식이지만 **output** 옵션만 **VRayCompleteMap**으로 지정하면 됩니다.

AO 텍스처는 아주 세밀한 정보를 담을 필요가 없고, 텍스처 압축 때문에 생기는 화질 손상에도 크게 티가 나지 않습니다. 그래서 용량이 작고 다루기 좋은 JPEG 형식이 잘 맞습니다.

## 에디터에 업로드

에디터에서 텍스처를 업로드한 뒤, 머티리얼의 Ambient Occlusion 슬롯에 넣어주기만 하면 됩니다.

![Editor Ambient Occlusion Map](/img/user-manual/graphics/lighting/lightmapping/editor-ao-map.png)

## 예제

<!-- You can [explore example][6] that uses global Ambient Occlusion described above and its [project][7]. -->

![OasisW Lightmapping](/img/user-manual/graphics/lighting/lightmapping/oasis-lightmapping-scene.jpg)  
*이 씬의 조명은 라이트맵과 AO 텍스처, 그리고 Box Projected IBL(반사)을 사용하여 구현되었습니다*

[0]: /user-manual/graphics/lighting/lightmapping/
[3]: /user-manual/graphics/lighting/lightmapping#render-to-texture
<!-- [6]: https://playcanv.as/p/zdkARz26/ -->
<!-- [7]: https://playcanvas.com/project/446587/overview/archviz-example -->
