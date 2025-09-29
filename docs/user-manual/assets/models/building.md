---
title: 모델 구축 (Building Models)
---

OasisW를 위한 아트와 애니메이션 구축은 사용 가능한 많은 3D 모델링 프로그램 중 거의 모든 것을 사용하여 수행할 수 있습니다. 예를 들어: Blender, SketchUp, Autodesk 3D Studio Max 또는 Autodesk Maya.

OasisW는 오픈 소스 glTF 바이너리(GLB) 형식을 통해 콘텐츠를 가장 충실하게 가져오도록 설계되었으므로, 일반적으로 모델링 애플리케이션이 GLB를 지원한다면 OasisW도 지원합니다.

GLB 가져오기는 매우 빠른 씬 생성을 위해 다음 glTF 기능을 지원합니다:

- 노드 계층 구조
- 표준 재질
- 승인된 재질 확장
- 애니메이션된 스켈레톤 및 스키닝 데이터
- 모프 타겟
- 카메라
- 점광 지원
<!-- - Draco 압축 모델 -->

따라서 OasisW를 대상으로 하기 위해 특별한 아트 도구 플러그인을 사용할 필요가 없으며, 따라야 할 OasisW 특정 워크플로우도 없습니다.

![GLB Import Example](/img/user-manual/assets/models/building/glb-import.gif)  
*Artwork by MAR.COS.*

OasisW는 또 다른 일반적인 교환 형식인 FBX 파일 가져오기도 지원합니다. 그러나 FBX 재질은 glTF 재질만큼 충실하게 가져오지 않으며 가져온 후 일부 편집이 필요할 수 있습니다.

최상의 경험과 최고의 호환성을 위해 가능한 한 GLB를 사용하는 것을 권장합니다.

고려할 만한 모델링 및 애니메이션 프로그램들:

- 무료 옵션: Blender\*, Wings3D, Voidworld, SketchUp, Sculptris, Daz Studio\*.
- 저비용 유료 옵션: 3D-Coat, NVIL, Hexagon.
- 고비용 유료 옵션: ZBrush, Autodesk 3D Studio Max\*, Autodesk Maya\*, Luxology Modo\*.

\* *이 프로그램들도 애니메이션을 생성할 수 있습니다.*

텍스처 생성을 위해 고려할 프로그램들:

- 무료: Blender, Pixexix Free, xNormal, MaPZone, GIMP, Krita desktop, MyPaint.
- 유료: Substance Designer (Substance Painter 및 Bitmap2Material 포함), Photoshop, Quixel NDO 및 DDO, CrazyBump, Pixexix Pro, Clip Studio Paint/Manga Studio, SERIF DrawPlus/PhotoPlus.

위에 나열된 모델링 프로그램들 중 많은 것들이 텍스처 페인팅도 허용합니다. 더 많은 옵션을 원한다면 이 [외부 위키](http://wiki.polycount.com/wiki/Tools) 페이지가 도움이 될 수 있습니다. 일부 정보는 오래된 것일 수 있습니다.

## 메시 구축에 대한 일반적인 고려사항

어떤 모델링 애플리케이션을 사용하든 OasisW를 위한 3D 씬을 구축할 때 알아야 할 몇 가지 사항이 있습니다.

- 메시는 최대 256개의 본에 스키닝할 수 있습니다.
- NURBS 메시는 OasisW 네이티브 형식으로 변환할 때 삼각형 메시로 변환됩니다.

---

## Blender

![Blender Logo](/img/user-manual/assets/models/building/blender-logo.jpg)

[Blender](https://www.blender.org/)는 3D 모델링을 위한 훌륭한 무료 도구이며 OasisW를 위한 3D 에셋을 생성하는 데 완벽합니다.

Blender는 GLB, FBX 및 COLLADA로 내보내기를 지원하지만 내장 내보내기 도구에는 몇 가지 제한사항이 있습니다.

### **맵 유형**

Blender 2.71부터 재질의 디퓨즈 맵과 노멀 맵이 모두 FBX 파일로 내보내집니다. 다른 맵 유형이 내보내기에서 손실되는 경우 에디터 내의 재질 에디터에서 이러한 맵을 설정해야 합니다.

### **텍스처 임베딩**

임베디드 텍스처는 가져오기를 훨씬 쉽게 만듭니다.

Blender COLLADA 내보내기 도구는 내보낸 모델 파일에 텍스처를 임베드하는 기능이 없습니다.

Blender 2.71 릴리스는 Blender에서 직접 여러 임베디드 텍스처를 가능하게 하는 개선된 FBX 내보내기 모듈을 특징으로 합니다. 먼저 객체가 Blender 내에서 올바르게 렌더링되는지 확인하세요. FBX로 내보낼 때 'Path Mode'를 Copy로 설정하고 'Embed Textures' 상자를 체크하세요.

또는 [Autodesk FBX Converter](https://www.autodesk.com/developer-network/platform-technologies/fbx-converter-archives)를 사용하여 Blender에서 내보낸 것을 임베디드 미디어가 있는 것으로 변환할 수 있습니다. FBX Converter에서 파일을 열고 *Embedded Media* 체크박스가 설정된 상태로 다시 저장하세요.

:::warning

Blender 2.71의 FBX 내보내기에서 Blender에 이미시브 속성이 설정되지 않았음에도 불구하고 이미시비티를 생성하는 문제가 있는 것 같습니다. 이는 OasisW 엔진의 문제가 아닙니다. Blender 내에서 이를 피하려면 재질의 Diffuse 색상 설정을 0으로 변경할 수 있습니다('Properties Editor'의 'Material' 탭에서). 또는 OasisW 에디터 내에서 이미시비티를 단순히 줄일 수 있습니다.

:::

### **애니메이션**

Blender 2.71부터:

blend 파일에 포함된 애니메이션은 기본 fbx 내보내기 도구 설정으로 내보내지며 OasisW 에셋 가져오기 파이프라인과 호환됩니다. 동일한 모델에 대한 여러 애니메이션의 경우 여러 fbx 파일을 업로드해야 합니다 - 각 애니메이션마다 하나씩. 메모리를 절약하기 위해 내보내기 전에 blend 파일에서 모델과 텍스처를 삭제하거나, fbx 내보내기 도구 설정에서 아마추어만 내보내도록 선택하거나, 프로젝트 대시보드의 에셋 페이지에서 중복된 'model' 타겟 에셋을 단순히 삭제할 수 있습니다(에셋 페이지의 드롭다운 메뉴에서 'target'을 선택하여 타겟 에셋을 볼 수 있습니다).

### **Blender 학습**

웹에서 Blender 사용법을 배우는 데 사용할 수 있는 많은 리소스가 있습니다. 권장하는 몇 가지는 다음과 같습니다:

- [Blender Cookie](https://cgcookie.com/learn-blender)
- [Blender Guru](https://www.blenderguru.com/)

---

## Autodesk 3D Studio Max

### Max 재질

Max에서는 Standard 재질 유형을 사용하거나, 참조하는 재질이 Standard 재질인 경우 Multi/Sub-Object 재질 유형을 사용해야 합니다. 아래 스크린샷의 강조된 영역은 OasisW로 내보낼 때 존중되는 설정을 보여줍니다:

![Max material editor](/img/user-manual/assets/models/building/max-material-editor.jpg)

### 지원되는 맵 슬롯

OasisW는 내보낼 때 3DS Max 재질 맵 유형의 하위 집합을 해석합니다. 맵은 3DS Max가 지원하는 모든 형식일 수 있지만, 맵이 웹 형식(즉, JPEG, GIF 또는 PNG)이 아닌 경우 내보낼 때 이러한 형식으로 변환됩니다.

#### Diffuse Color

이 슬롯에 Bitmap 맵을 할당하면 OasisW 재질에서 디퓨즈 매핑이 활성화됩니다. 이는 본질적으로 재질에 설정된 디퓨즈 색상(색상 선택기를 통해)을 덮어씁니다. 디퓨즈 맵에 알파 채널이 있는 경우 OasisW 런타임에서 픽셀당 알파 값으로 사용됩니다.

또한 Diffuse Color 슬롯에 RGB Multiply 맵을 할당할 수 있습니다. 이는 라이트매핑을 활성화하는 효과가 있으며, Map 1은 디퓨즈 맵이고 Map 2는 라이트맵입니다.

#### Specular Color

이 슬롯에 Bitmap 맵을 할당하면 OasisW 재질에서 스펙큘러 매핑이 활성화됩니다. 이는 본질적으로 재질에 설정된 스펙큘러 색상(색상 선택기를 통해)을 덮어씁니다. 이를 통해 표면의 스펙큘러 영역을 마스킹하거나 다른 영역에서 스펙큘러 하이라이트를 다른 색상으로 틴트할 수 있습니다. 스펙큘러 맵에 알파 채널이 있는 경우 픽셀당 광택을 설정하는 데 사용됩니다.

#### Specular Level

이 슬롯에 Bitmap 맵을 할당하면 재질의 스펙큘러 색상에 대한 픽셀당 감쇠가 활성화됩니다. 이는 본질적으로 재질에 설정된 스펙큘러 레벨을 덮어씁니다.

#### Glossiness

이 슬롯에 Bitmap 맵을 할당하면 재질에서 픽셀당 광택이 활성화됩니다. 이는 본질적으로 재질에 설정된 광택을 덮어씁니다.

#### Self-Illumination

이 슬롯에 Bitmap 맵을 할당하면 OasisW 재질에서 이미시브 매핑이 활성화됩니다. 이미시브 맵은 전체 RGB일 수 있으며(회색조로 제한되지 않음) 본질적으로 표면 조명 결과에 추가됩니다. 따라서 이미시브 맵의 검은색 픽셀은 픽셀 값에 아무것도 추가하지 않습니다. 다른 모든 것은 픽셀의 광도를 증가시킵니다.

#### Opacity

이 슬롯에 Bitmap 맵을 할당하면 OasisW 재질에서 불투명도 매핑이 활성화됩니다. 불투명도 맵의 검은색 픽셀은 완전히 투명하고, 흰색 픽셀은 완전히 불투명하며, 회색 픽셀은 동등한 중간 알파 값에 해당합니다.

재질에 불투명도 맵이 있는 경우 디퓨즈 맵에 설정된 알파 채널을 덮어씁니다. 디퓨즈 맵의 알파 채널보다 불투명도 맵 슬롯을 사용하는 것이 덜 효율적입니다. 이는 OasisW 런타임에서 하나 대신 두 개의 텍스처가 생성되고 기본 셰이더가 조금 더 많은 작업을 수행해야 하기 때문입니다. 그러나 성능이 문제가 아니고 불투명도 맵을 사용하는 것이 편리하다면 이 기능이 지원됩니다.

#### Bump

이 슬롯에 Normal Bump 맵을 할당하면 노멀 매핑이 활성화됩니다. 기본적으로 Bump 슬롯의 'Amount' 값이 30으로 설정되어 있습니다. OasisW는 이 값을 효과적으로 무시하고 100으로 설정된 것처럼 처리하므로, 렌더링이 실시간 렌더링과 더 밀접하게 일치하도록 Max에서도 이를 100으로 설정하는 것이 권장됩니다.

노멀 맵을 작성하는 다양한 방법이 있으며, 주요 두 가지는 녹색 구성 요소의 형식이 다릅니다. 예를 들어, 기본적으로 3DS Max는 벽돌 벽의 노멀 맵이 다음과 같이 나타나기를 기대합니다:

![Normal map](/img/user-manual/assets/models/building/wall-norm.jpg)

돌출된 영역의 하단 가장자리에 더 밝은 영역이 있는 것을 확인하세요. OasisW는 녹색 구성 요소(또는 노멀 맵의 각 노멀의 Y 구성 요소)가 뒤집힐 것을 기대합니다. 파일을 Photoshop에 로드하고, 녹색 채널을 선택하고 Ctrl+I를 눌러 채널을 반전시키면:

![Normal map with Y component flipped](/img/user-manual/assets/models/building/wall-norm-yflip.jpg)

이제 OasisW의 조명이 일관성 있게 됩니다.

할당된 노멀 맵에 알파 채널이 있는 경우, 알파 채널이 높이 맵으로 해석되는 패럴랙스 맵으로 처리됩니다. 높이 맵의 더 밝은 영역은 더 어두운 영역보다 '더 높은' 것으로 처리됩니다.

#### Reflection

이 슬롯에 Bitmap 맵을 할당하면 OasisW 재질에서 스피어 매핑이 활성화됩니다. 비트맵은 다음과 같이 보일 것입니다:

![Sphere map](/img/user-manual/assets/models/building/mountains-sphere.jpg)

스피어 매핑은 반사 매핑의 가장 저렴하고 가장 '설득력이 없는' 형태 중 하나이지만, 많은 시나리오에서 표면에 만족스러운 광택을 제공하는 데 충분합니다.

---

## Autodesk Maya

### Maya 재질

Maya에서는 표준 재질 유형을 사용해야 합니다: lambert, blinn, phong. 아래 스크린샷의 강조된 영역은 OasisW로 내보낼 때 존중되는 재질 설정을 보여줍니다:

![Maya material editor](/img/user-manual/assets/models/building/maya-material-editor.jpg)
