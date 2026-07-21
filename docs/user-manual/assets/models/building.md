---
title: 모델 구축 (Building Models)
---

OasisW에서 쓸 아트와 애니메이션은 **거의 모든 3D 모델링 프로그램**으로 만들 수 있습니다. Blender, SketchUp, Autodesk 3D Studio Max, Autodesk Maya 등이 대표적입니다.

OasisW는 오픈 소스 형식인 **glTF 바이너리(GLB)**를 통해 콘텐츠를 가장 충실하게 가져오도록 설계되었습니다. 그래서 **모델링 프로그램이 GLB를 지원한다면 OasisW도 그 프로그램을 지원한다**고 보아도 무방합니다.

:::tip 먼저 알아 두면 편한 것

OasisW 전용 플러그인을 깔거나, OasisW만을 위한 특별한 작업 순서를 따를 필요가 **전혀 없습니다.** 평소대로 모델을 만들고 GLB로 내보내면 됩니다. 이 문서의 나머지 내용은 "더 잘 나오게 하는 요령"이라고 생각하십시오.

:::

## GLB로 가져올 수 있는 것들

GLB 가져오기는 씬을 아주 빠르게 구성할 수 있도록 다음 glTF 기능을 지원합니다.

![GLB Import Example](/img/user-manual/assets/models/building/glb-import.gif)

| 기능 | 쉽게 말하면 |
|---|---|
| 노드 계층 구조 | 부모·자식으로 묶인 구조가 그대로 들어옵니다. 팔이 몸통을 따라 움직이는 관계가 유지됩니다. |
| 표준 재질 | 색과 질감 설정이 그대로 넘어옵니다. |
| 승인된 재질 확장 | 클리어코트·광휘 같은 추가 표현도 지원됩니다. |
| 애니메이션된 스켈레톤 및 스키닝 데이터 | 뼈대와, 뼈대를 따라 살이 움직이는 정보가 함께 들어옵니다. |
| 모프 타겟 | 얼굴 표정처럼 정점을 직접 변형하는 애니메이션입니다. |
| 카메라 | 모델링 툴에서 잡아 둔 카메라가 넘어옵니다. |
| 점광 지원 | 포인트 라이트가 함께 들어옵니다. |

## FBX는 어떤가요

OasisW는 또 하나의 일반적인 교환 형식인 **FBX** 가져오기도 지원합니다. 다만 **FBX 재질은 glTF 재질만큼 충실하게 들어오지 않으며**, 가져온 뒤 손을 좀 봐야 할 수 있습니다.

:::note 권장 사항

가장 매끄러운 경험과 최고의 호환성을 원하신다면 **가능한 한 GLB를 사용하십시오.** FBX만 받을 수 있는 상황이라면 Blender에서 열어 GLB로 다시 내보내는 방법도 있습니다.

:::

## 메시를 만들 때의 일반적인 고려사항

어떤 모델링 프로그램을 쓰든 OasisW용 3D 씬을 만들 때 알아 두어야 할 점이 몇 가지 있습니다.

- 메시는 **최대 256개의 본**에 스키닝할 수 있습니다. 캐릭터 하나에 뼈대를 256개 넘게 쓰면 안 된다는 뜻입니다.
- **NURBS 메시**는 OasisW 형식으로 변환될 때 **삼각형 메시로 바뀝니다.** 곡면을 수식으로 다루던 것이 잘게 쪼갠 삼각형으로 대체되므로, 원하는 정밀도가 나오는지 미리 확인하십시오.

## 어떤 프로그램을 쓸까요

### 모델링 · 애니메이션

| 가격대 | 프로그램 |
|---|---|
| 무료 | Blender* · Wings3D · Voidworld · SketchUp · Sculptris · Daz Studio* |
| 저비용 유료 | 3D-Coat · NVIL · Hexagon |
| 고비용 유료 | ZBrush · Autodesk 3D Studio Max* · Autodesk Maya* · Luxology Modo* |

\* 표시가 붙은 프로그램은 **애니메이션도 만들 수 있습니다.**

### 텍스처 제작

| 가격대 | 프로그램 |
|---|---|
| 무료 | Blender · Pixexix Free · xNormal · MaPZone · GIMP · Krita desktop · MyPaint |
| 유료 | Substance Designer(Substance Painter 및 Bitmap2Material 포함) · Photoshop · Quixel NDO 및 DDO · CrazyBump · Pixexix Pro · Clip Studio Paint/Manga Studio · SERIF DrawPlus/PhotoPlus |

위에 적은 모델링 프로그램 중 상당수는 **텍스처 페인팅도 함께 지원**합니다. 더 많은 선택지를 보고 싶다면 [이 외부 위키](http://wiki.polycount.com/wiki/Tools) 페이지가 도움이 될 수 있습니다. 다만 일부 정보는 오래된 것일 수 있습니다.

:::tip 처음이라면

[Blender](https://www.blender.org/) 하나면 모델링·애니메이션·텍스처 페인팅을 모두 할 수 있고 무료입니다. 특별한 이유가 없다면 Blender로 시작하시기를 권합니다.

:::

## Blender

![Blender Logo](/img/user-manual/assets/models/building/blender-logo.jpg)

[Blender](https://www.blender.org/)는 3D 모델링을 위한 훌륭한 무료 도구이며, OasisW용 3D 에셋을 만들기에 부족함이 없습니다.

Blender는 GLB · FBX · COLLADA로 내보내기를 지원하지만, 내장 내보내기 도구에는 몇 가지 제약이 있습니다.

### 맵 유형

Blender 2.71부터 재질의 **디퓨즈 맵과 노멀 맵은 FBX 파일로 함께 내보내집니다.** 다른 맵 유형이 내보내기 과정에서 빠졌다면, OasisW 에디터의 [재질 에디터](/user-manual/assets/types/material)에서 직접 설정해야 합니다.

### 텍스처 임베딩

텍스처가 모델 파일 **안에 들어 있으면** 가져오기가 훨씬 수월합니다. 이미지 파일을 따로 챙기지 않아도 되기 때문입니다.

- Blender의 **COLLADA 내보내기 도구에는 텍스처를 파일에 담는 기능이 없습니다.**
- Blender 2.71부터는 FBX 내보내기 모듈이 개선되어 **여러 텍스처를 함께 담을 수 있습니다.** 먼저 Blender 안에서 물체가 제대로 보이는지 확인하십시오. 그런 다음 FBX로 내보낼 때 `Path Mode`를 `Copy`로 설정하고 `Embed Textures` 상자를 체크하십시오.
- 또는 [Autodesk FBX Converter](https://www.autodesk.com/developer-network/platform-technologies/fbx-converter-archives)로 변환할 수 있습니다. 내보낸 파일을 열고 *Embedded Media* 체크박스를 켠 상태로 다시 저장하십시오.

:::warning 경고

Blender 2.71의 FBX 내보내기에는 **Blender에서 이미시브 속성을 설정하지 않았는데도 이미시비티가 생기는** 문제가 있는 것으로 보입니다. 이는 OasisW 엔진의 문제가 아닙니다.

피하는 방법은 두 가지입니다. Blender의 *Properties Editor* › *Material* 탭에서 재질의 **Diffuse 색상 설정을 0으로** 바꾸거나, OasisW 에디터에서 **이미시비티를 그냥 낮추면** 됩니다.

:::

### 애니메이션

Blender 2.71 기준입니다. blend 파일에 들어 있는 애니메이션은 **기본 FBX 내보내기 설정 그대로 내보내지며** OasisW의 에셋 가져오기 파이프라인과 호환됩니다.

같은 모델에 애니메이션이 여러 개라면 **FBX 파일을 여러 개 올려야 합니다. 애니메이션 하나당 파일 하나입니다.** 이때 같은 모델 데이터가 계속 중복되므로, 메모리를 아끼려면 다음 중 하나를 하십시오.

- 내보내기 전에 blend 파일에서 **모델과 텍스처를 지웁니다.**
- FBX 내보내기 설정에서 **아마추어(뼈대)만 내보내도록** 선택합니다.
- 업로드 후 프로젝트 대시보드의 에셋 페이지에서 **중복된 `model` 타겟 에셋을 지웁니다.** 에셋 페이지의 드롭다운 메뉴에서 `target`을 선택하면 타겟 에셋만 볼 수 있습니다.

### Blender 학습

웹에는 Blender 사용법을 배울 수 있는 자료가 많습니다. 권장하는 곳은 다음과 같습니다.

- [Blender Cookie](https://cgcookie.com/learn-blender)
- [Blender Guru](https://www.blenderguru.com/)

## Autodesk 3D Studio Max

### Max 재질

Max에서는 **Standard 재질** 유형을 쓰거나, 참조하는 재질이 Standard 재질인 경우 **Multi/Sub-Object 재질** 유형을 써야 합니다. 그 밖의 재질 유형은 OasisW로 제대로 넘어오지 않을 수 있습니다.

![Max material editor](/img/user-manual/assets/models/building/max-material-editor.jpg)

### 지원되는 맵 슬롯

OasisW는 내보낼 때 3DS Max 재질 맵 유형 중 **일부만** 해석합니다. 맵 자체는 3DS Max가 지원하는 어떤 형식이어도 되지만, 웹 형식(JPEG · GIF · PNG)이 아니면 내보낼 때 이 형식들로 변환됩니다.

| 슬롯 | 할당하면 일어나는 일 |
|---|---|
| `Diffuse Color` | Bitmap 맵을 넣으면 디퓨즈 매핑이 켜지고, 색상 선택기로 지정한 디퓨즈 색상을 덮어씁니다. 디퓨즈 맵에 알파 채널이 있으면 픽셀당 알파 값으로 쓰입니다. 이 슬롯에 `RGB Multiply` 맵을 넣으면 라이트매핑이 켜지며, Map 1이 디퓨즈 맵, Map 2가 라이트맵이 됩니다. |
| `Specular Color` | 스펙큘러 매핑이 켜지고 스펙큘러 색상을 덮어씁니다. 표면의 반짝이는 영역을 가리거나 부위별로 다른 색으로 틴트할 수 있습니다. 알파 채널이 있으면 픽셀당 광택을 정하는 데 쓰입니다. |
| `Specular Level` | 스펙큘러 색상에 대한 픽셀당 감쇠가 켜지고, 재질에 설정한 스펙큘러 레벨을 덮어씁니다. |
| `Glossiness` | 픽셀당 광택이 켜지고, 재질에 설정한 광택을 덮어씁니다. |
| `Self-Illumination` | 이미시브 매핑이 켜집니다. 이미시브 맵은 회색조가 아니어도 되며 전체 RGB를 쓸 수 있습니다. 표면 조명 결과에 더해지는 방식이라, **검은색 픽셀은 아무것도 더하지 않고** 그 외의 색은 밝기를 올립니다. |
| `Opacity` | 불투명도 매핑이 켜집니다. **검은색은 완전 투명, 흰색은 완전 불투명, 회색은 그 중간**입니다. 불투명도 맵이 있으면 디퓨즈 맵의 알파 채널을 덮어씁니다. |
| `Bump` | Normal Bump 맵을 넣으면 노멀 매핑이 켜집니다. 알파 채널이 있으면 그 채널을 높이 맵으로 해석해 패럴랙스 맵으로 처리합니다. 높이 맵에서 밝은 영역이 더 '높은' 곳입니다. |
| `Reflection` | Bitmap 맵을 넣으면 스피어 매핑이 켜집니다. 반사 표현 중 가장 값싸고 가장 '그럴듯하지 않은' 축에 속하지만, 표면에 만족스러운 광택을 주기에는 충분한 경우가 많습니다. |

:::warning Bump 슬롯의 Amount 값

기본적으로 Bump 슬롯의 `Amount` 값은 **30**으로 설정되어 있습니다. OasisW는 이 값을 사실상 무시하고 **100인 것처럼** 처리합니다. 그러니 Max에서 보이는 렌더 결과와 실시간 렌더링이 더 비슷해지도록, **Max에서도 이 값을 100으로 바꾸시기를 권합니다.**

:::

:::warning 노멀 맵의 초록 채널을 뒤집어야 합니다

노멀 맵을 만드는 방식은 여러 가지이고, 주요 두 방식은 **초록 채널의 형식이 서로 다릅니다.**

3DS Max는 기본적으로 벽돌 벽의 노멀 맵에서 **튀어나온 부분의 아래쪽 가장자리가 밝게** 나오기를 기대합니다. 그런데 OasisW는 **초록 성분(각 노멀의 Y 성분)이 뒤집힌** 형태를 기대합니다.

해결 방법은 간단합니다. 파일을 Photoshop에서 열고 **초록 채널을 선택한 뒤 `Ctrl`+`I`**로 반전시키십시오. 그러면 OasisW에서 조명이 일관되게 보입니다.

:::

![Normal map](/img/user-manual/assets/models/building/wall-norm.jpg)

![Normal map with Y component flipped](/img/user-manual/assets/models/building/wall-norm-yflip.jpg)

![Sphere map](/img/user-manual/assets/models/building/mountains-sphere.jpg)

## Autodesk Maya

### Maya 재질

Maya에서는 **표준 재질 유형**을 써야 합니다. `lambert` · `blinn` · `phong` 세 가지입니다. 그 밖의 재질은 OasisW로 내보낼 때 설정이 존중되지 않을 수 있습니다.

![Maya material editor](/img/user-manual/assets/models/building/maya-material-editor.jpg)

## 관련 문서

- [단위 (Units)](/user-manual/assets/models/units) — 모델 크기를 OasisW 기준에 맞춥니다.
- [3D 모델 가져오기](/user-manual/assets/models) — 만든 파일을 프로젝트에 올립니다.
- [재질 (Material)](/user-manual/assets/types/material) — 가져온 뒤 재질을 다듬습니다.
- [서드파티 에셋 사이트](/user-manual/assets/finding) — 직접 만들지 않고 구하는 방법입니다.
