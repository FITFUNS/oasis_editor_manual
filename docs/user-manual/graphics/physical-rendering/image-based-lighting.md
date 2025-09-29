---
title: 이미지 기반 조명 (Image Based Lighting)
---

OasisW에서 물리 기반 렌더링의 최상의 결과를 얻기 위해 이미지 기반 조명 또는 IBL이라고 하는 기법을 사용할 수 있습니다. 이는 사전 렌더링된 이미지 데이터를 앰비언트 및 반사 조명의 소스 정보로 사용할 수 있게 합니다.

이 기법은 [큐브맵][3]에 의존합니다. 큐브맵은 완전한 주변 텍스처 커버리지를 위해 큐브를 형성하는 6개의 텍스처(면)로 만들어진 환경 맵입니다.

## HDR

이미지 데이터는 LDR 또는 HDR(High Dynamic Range) 색상 공간에 저장될 수 있으며, 이는 단일 채널에서 0.0에서 1.0(256 단계)보다 많은 값을 저장할 수 있게 합니다. HDR은 1.0 이상의 값("흰색"으로 간주되는 값)을 저장할 수 있으며, 감마 보정, 톤 매핑, 노출과 같은 환경의 많은 요소와 결합하여 더 많은 조명 세부사항을 포함하고 아티스트에게 조명 품질과 원하는 결과에 대한 훨씬 더 나은 제어를 제공합니다.

![HDR vs LDR CubeMap for Image Based Rendering](/img/user-manual/graphics/physical-rendering/ibl-hdr-ldr.jpg)

LDR을 사용할 때 텍스처의 밝은 부분이 어떻게 클램핑되는지 주목하세요.

## 에너지 보존

이 개념은 디퓨즈 빛과 반사된 빛이 모두 머티리얼에 닿는 빛에서 나온다는 사실에서 파생됩니다. 디퓨즈 빛과 반사된 빛의 합은 머티리얼에 닿는 총 빛보다 클 수 없습니다. 실제로 이는 표면이 매우 반사적이면 디퓨즈 색상이 거의 보이지 않는다는 의미입니다. 반대로 머티리얼이 밝은 디퓨즈 색상을 가지면 많이 반사할 수 없습니다.

자연에서 더 매끄러운 표면은 더 선명한 반사를 가지고 더 거친 표면은 더 흐릿한 반사를 가집니다. 그 이유는 기본적으로 더 거친 표면이 더 크고 더 두드러진 마이크로 패싯을 가지고 있어 많은 방향으로 빛을 반사하는 반면, 매끄러운 표면은 주로 한 방향으로 반사하는 경향이 있기 때문입니다. 다른 방향에서 오는 빛이 작은 가시점 내에서 평균화될 때, 에너지 보존 덕분에 결과는 우리에게 흐릿하게 보이고 덜 밝게 보입니다. OasisW는 광택도 매개변수로 이 동작을 시뮬레이션하며, 이는 조명에 대해 자동으로 작동합니다. 하지만 IBL의 경우 사전에 올바른 흐릿한 반응을 미리 계산해야 합니다. 이것이 Prefilter 버튼이 하는 일입니다.

**Prefilter** 버튼은 Inspector의 큐브맵 에셋에서 사용할 수 있으며, 큐브맵을 사용하는 물리 머티리얼에서 IBL을 활성화하는 데 필수입니다.

## 환경 맵 제작

환경 맵은 다양한 투영법으로 제공됩니다: 등장방형(equirectangular), 큐브맵(면 목록), 방위각(azimuthal) 및 기타 여러 가지입니다. WebGL과 GPU는 면 목록(큐브의 면을 나타내는 6개의 텍스처 세트)인 큐브맵과 함께 작동합니다. 따라서 환경 맵이 다른 투영법으로 제공되는 경우 6개의 텍스처로 변환되어야 합니다.

투영법 간 변환을 위해 다양한 도구를 사용할 수 있으며, 그 중 하나는 크로스 플랫폼 오픈 소스 큐브맵 필터링 도구인 [cmftStudio][0]입니다.

큐브맵은 CGI로 렌더링되거나 사진에서 조립될 수 있으며, HDR 환경 맵을 다운로드하거나 구매할 수 있는 웹사이트가 있습니다. 실험에 좋은 소스로는 [sIBL Archive][6], [No Emotion HDR's][10], [Open Footage][11], [Paul Debevec][12]가 있습니다. 환경 맵은 등장방형 투영으로 제공될 수 있으며 위에서 언급한 cmftStudio로 변환 가능합니다.

## 큐브맵 렌더링

큐브맵은 6개의 면으로 구성되며, 각 면은 큐브의 정사각형 면을 나타냅니다. 간단히 말하면: 90도 시야각으로 서로 다른 90도 방향으로 회전시켜 정사각형 뷰포트 카메라를 사용하여 렌더링할 수 있습니다.

![CubeMap Faces](/img/user-manual/graphics/physical-rendering/cubemap-faces.jpg)

인기 있는 3D 모델링 도구나 사진 및 360 이미지 소프트웨어를 사용할 수 있습니다. 
<!-- 이들은 [라이트맵핑 감마 보정 섹션][1]에서 설명한 대로 선형 감마 공간에서 색상 보정 없이 렌더링되어야 합니다. -->

[이와 같은][2] 3D Studio Max용 플러그인 중 하나를 사용하여 OasisW 에디터에 업로드할 준비가 된 VRay 큐브맵 면을 렌더링할 수 있습니다.

## IBL 적용

이는 두 가지 방법을 사용하여 수행할 수 있습니다:

1. 씬 설정에서 큐브맵을 스카이박스로 사용합니다.
2. 머티리얼에서 직접 큐브맵을 환경 맵으로 사용합니다.

## 박스 투영 매핑

이 기법은 환경 맵의 투영을 변경하여 공간 내에서 박스를 지정할 수 있게 하여 큐브맵이 그 경계에 대응하도록 합니다. 가장 일반적인 용도는 룸 스케일 환경 내의 표면에서 반사를 시뮬레이션하는 것입니다.

![Material CubeMap Box Projection](/img/user-manual/graphics/physical-rendering/cubemap-box-projection.png)

## 예제

큐브맵 박스 투영을 사용하는 씬의 예제와 프로젝트입니다. 창문에서 나오는 나무 바닥의 반사와 천장의 미묘한 반사에 주목하세요. 이는 동적 효과이며 매우 사실적인 반사를 제공하고 표면이 방 환경을 어떻게 반사하는지에 대한 아티스트의 제어를 제공할 수 있습니다.

![Environment Box Projection Mapping](/img/user-manual/graphics/lighting/lightmapping/oasis-lightmapping-scene.jpg)

이 씬의 조명은 라이트맵과 AO 텍스처, 그리고 박스 투영 IBL(반사)을 사용하여 구현되었습니다.

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
