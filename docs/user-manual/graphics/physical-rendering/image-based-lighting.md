---
title: 이미지 기반 조명 (Image Based Lighting)
---

OasisW에서 물리 기반 렌더링으로 최고의 결과를 얻으려면 이미지 기반 조명, 줄여서 IBL이라는 기법을 쓸 수 있습니다. 이 기법은 미리 렌더링해 둔 이미지 데이터를 앰비언트(주변) 조명과 반사 조명의 출처로 사용합니다.

이 기법은 [큐브맵][3]을 바탕으로 합니다. 큐브맵은 6개의 텍스처(면)로 큐브를 이루어 주변 전체를 빈틈없이 덮는 환경 맵입니다.

## HDR

이미지 데이터는 LDR이나 HDR(High Dynamic Range) 색 공간에 저장할 수 있습니다. HDR을 쓰면 한 채널에 0.0~1.0(256단계)보다 훨씬 많은 값을 담을 수 있습니다. 특히 HDR은 1.0을 넘는 값("흰색"으로 여겨지는 값보다 더 밝은 값)까지 저장할 수 있어서, 감마 보정·톤 매핑·노출 같은 환경 요소와 어우러져 훨씬 풍부한 조명 정보를 담습니다. 덕분에 아티스트는 조명 품질과 원하는 결과를 훨씬 세밀하게 조절할 수 있습니다.

![HDR vs LDR CubeMap for Image Based Rendering](/img/user-manual/graphics/physical-rendering/ibl-hdr-ldr.jpg)

LDR을 쓰면 텍스처의 밝은 부분이 어떻게 잘려 나가는지(클램핑) 살펴보세요.

## 에너지 보존

이 개념은 디퓨즈 빛과 반사된 빛이 모두 머티리얼에 닿은 빛에서 나온다는 사실에서 나옵니다. 그래서 디퓨즈 빛과 반사된 빛을 합쳐도 머티리얼에 닿은 전체 빛보다 많을 수 없습니다. 쉽게 말해, 표면이 아주 잘 반사하면 디퓨즈 색은 거의 안 보이고, 반대로 디퓨즈 색이 밝으면 반사는 많이 못 합니다.

자연에서는 매끄러운 표면일수록 반사가 선명하고 거친 표면일수록 반사가 흐릿합니다. 그 이유는, 거친 표면은 크고 두드러진 마이크로 패싯(아주 작은 표면 조각)이 많아 빛을 여러 방향으로 흩뿌리는 반면, 매끄러운 표면은 주로 한 방향으로만 반사하기 때문입니다. 여러 방향에서 온 빛이 우리가 보는 작은 지점 안에서 평균처럼 섞이면, 에너지 보존 때문에 그 부분이 흐릿하고 덜 밝게 보입니다. OasisW는 이 현상을 광택도 매개변수로 흉내 내며, 일반 조명에서는 이 계산이 자동으로 됩니다. 하지만 IBL에서는 이 올바른 흐릿함을 미리 계산해 둬야 하는데, 바로 이 일을 Prefilter 버튼이 해 줍니다.

**Prefilter** 버튼은 Inspector의 큐브맵 에셋에서 쓸 수 있으며, 큐브맵을 사용하는 물리 머티리얼에서 IBL을 켜려면 반드시 눌러야 합니다.

## 환경 맵 제작

환경 맵은 여러 투영법으로 제공됩니다. 등장방형(equirectangular), 큐브맵(면 목록), 방위각(azimuthal) 등 종류가 다양합니다. WebGL과 GPU는 큐브맵, 즉 큐브의 여섯 면을 나타내는 6개 텍스처 세트를 씁니다. 따라서 환경 맵이 다른 투영법으로 되어 있다면 6개의 텍스처로 변환해야 합니다.

투영법을 서로 바꾸는 데 여러 도구를 쓸 수 있는데, 그중 하나가 크로스 플랫폼 오픈 소스 큐브맵 필터링 도구인 [cmftStudio][0]입니다.

큐브맵은 CGI로 렌더링하거나 사진을 이어 붙여 만들 수 있고, HDR 환경 맵을 내려받거나 구매할 수 있는 웹사이트도 있습니다. 연습용으로 좋은 곳으로는 [sIBL Archive][6], [No Emotion HDR's][10], [Open Footage][11], [Paul Debevec][12]가 있습니다. 환경 맵이 등장방형 투영으로 제공되는 경우는 위에서 소개한 cmftStudio로 변환할 수 있습니다.

## 큐브맵 렌더링

큐브맵은 6개의 면으로 이뤄지며, 각 면은 큐브의 정사각형 한 면에 해당합니다. 간단히 말하면, 정사각형 뷰포트 카메라를 시야각 90도로 두고 서로 90도씩 다른 방향으로 돌려 가며 렌더링하면 됩니다.

![CubeMap Faces](/img/user-manual/graphics/physical-rendering/cubemap-faces.jpg)

널리 쓰이는 3D 모델링 도구나 사진·360 이미지 소프트웨어를 사용하면 됩니다. 
<!-- 이들은 [라이트맵핑 감마 보정 섹션][1]에서 설명한 대로 선형 감마 공간에서 색상 보정 없이 렌더링되어야 합니다. -->

[이런][2] 3D Studio Max용 플러그인을 쓰면 OasisW 에디터에 바로 올릴 수 있는 VRay 큐브맵 면을 렌더링할 수 있습니다.

## IBL 적용

방법은 두 가지입니다:

1. 씬 설정에서 큐브맵을 스카이박스로 사용합니다.
2. 머티리얼에서 큐브맵을 직접 환경 맵으로 사용합니다.

## 박스 투영 매핑

이 기법은 환경 맵의 투영 방식을 바꿔, 공간 안에 박스를 지정하고 큐브맵이 그 박스의 경계에 맞춰지도록 합니다. 가장 흔한 용도는 방 크기의 실내 공간에서 표면에 비치는 반사를 흉내 내는 것입니다.

![Material CubeMap Box Projection](/img/user-manual/graphics/physical-rendering/cubemap-box-projection.png)

## 예제

큐브맵 박스 투영을 사용한 씬과 프로젝트 예제입니다. 창문에서 들어온 빛이 나무 바닥에 비친 반사와 천장에 은은하게 비친 반사를 눈여겨보세요. 이는 실시간으로 반응하는 효과라서 매우 사실적인 반사를 만들고, 표면이 방 안 환경을 어떻게 반사할지 아티스트가 조절할 수 있게 해 줍니다.

![Environment Box Projection Mapping](/img/user-manual/graphics/lighting/lightmapping/oasis-lightmapping-scene.jpg)

이 씬의 조명은 라이트맵과 AO 텍스처, 그리고 박스 투영 IBL(반사)을 함께 써서 만들었습니다.

[0]: https://github.com/dariomanesku/cmftStudio
[1]: /user-manual/graphics/lighting/lightmapping/#gamma-correction
[2]: http://www.scriptspot.com/3ds-max/scripts/vray-cubemap-generator-for-unity
[3]: /user-manual/assets/types/cubemap/
[6]: http://www.hdrlabs.com/sibl/archive.html
<!-- [7]: https://playcanv.as/p/zdkARz26/ -->
<!-- [8]: https://playcanvas.com/project/446587/overview/archviz-example -->
[10]: http://noemotionhdrs.net/
[11]: https://www.openfootage.net/?tag=hdri
[12]: https://www.pauldebevec.com/Probes/
