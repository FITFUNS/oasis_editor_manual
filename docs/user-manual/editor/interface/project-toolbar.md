---
title: Project Toolbar
sidebar_label: 프로젝트 툴바
---

# Project Toolbar

OasisW의 프로젝트 툴바에 있는 프로젝트 관리와 관련된 도구들을 학습합니다.

## 기능
| 이미지 | 버튼 | 설명 |
|------|------|-------|
| ![Scenes](/img/usage-guide/8_manage_scenes.svg) | **Manage Scenes** | 씬 선택 화면 열림 |
| <img src="/img/usage-guide/8_home.svg" alt="Settings" width="24" height="24" /> | **Home** |  프로젝트 선택창으로 이동 |
| ![Settings](/img/usage-guide/8_settings.svg) | **Settings** |  프로젝트 환경 설정 |
| ![Toolbar](/img/usage-guide/8_project_toolbar.svg) | **Publish/Download** |  빌드 된 프로젝트 다운로드 |

### Manage Scenes
- **기능**: 씬 선택 화면을 엽니다.

![Scenes](/img/usage-guide/8_manage_scenes.png)

### Settings
![Settings](/img/usage-guide/8_settings.png)

- **Scene Name**  
  - 씬 이름을 변경하여 프로젝트에서 식별 가능하게 합니다.
- **Editor**  
  - 프로젝트의 전반적인 환경 설정을 조정하는 패널입니다.
- **Asset Tasks**  
  - **Create Atlases** : 활성화하면 텍스처를 가져올 때 Texture와 Texture Atlas 두 가지 에셋이 모두 생성됩니다.
  - **Create FBX Folder** : FBX 파일을 가지고 올 때, 해당 에셋 전용 폴더를 자동으로 생성하여
FBX와 관련 텍스처, 머티리얼, 애니메이션 데이터를 한곳에 모아 정리하는 기능입니다.
- **Physics**  
  - **Physics Library**: 사용할 물리 엔진을 설정하는 옵션, Import Ammo 버튼을 누르면 프로젝트에 Ammo 폴더가 자동으로 추가합니다.
  - **Gravity**: 모든 물리 객체에 적용되는 중력 값입니다.
- **Rendering**  
  - **Ambient Color**: 전역 주변광 색상을 설정합니다.  
  - **Skybox**: 스카이박스는 3D 씬 뒤에 렌더링되는 큐브맵 에셋입니다. 여섯 개의 2D 이미지를 사용해 씬의 3D 모델 너머의 먼 배경 세계를 표현할 수 있습니다. 스카이박스를 추가하려면 큐브맵 에셋을 생성한 후, 설정 패널의 큐브맵 슬롯에 할당합니다.
  - **Type**: 스카이박스 큐브맵을 렌더링할 때 사용할 투영 방식을 선택합니다. 옵션: Infinite(무한대에서 렌더링), Box(박스 메시에 매핑), Dome(반구 돔에 매핑).
  - **Intensity**: 노출 수준을 맞추기 위한 스카이박스의 강도를 설정합니다.
  - **Rotation**: 스카이박스의 회전 값을 설정합니다.
  - **Mip**: 프리필터링된 스카이박스의 Mip 레벨을 선택합니다. 값이 커질수록 해상도가 낮고 더 흐려진(프리필터된) Mip을 사용합니다.
  - **Clustered Lighting**: 클러스터드 라이팅을 활성화합니다.
  - **Cells**: 조명을 포함하는 공간을 축별로 분할할 셀의 개수를 설정합니다.
  - **Max Lights Per Cell**: 각 셀이 저장할 수 있는 최대 조명 개수를 설정합니다.
  - **Cookies Enabled**: 클러스터드 조명에서 라이트 쿠키 기능을 사용할 수 있습니다.
  - **CookieAtlasResolution**: 모든 비-디렉셔널(Non-directional) 쿠키 텍스처를 저장할 아틀라스 텍스처의 해상도를 설정합니다.
  - **Shadows Enabled**: 클러스터드 조명에서 그림자 기능을 사용할 수 있습니다.
  - **Shadow Atlas Resolution**: 모든 비-디렉셔널(Non-directional) 그림자 텍스처를 저장할 아틀라스 텍스처의 해상도를 설정합니다.
  - **Shadow Type**: 모든 그림자에 사용되는 그림자 필터링 타입을 설정합니다.
  - **Area Lights Enabled**: 클러스터드 조명에서 에어리어 라이트 기능을 활성화합니다.
  - **Exposure**: 장면 전체 밝기를 조정합니다.  
  - **Fog**: 안개 타입(None, Linear, Exponential, Exponential Squared), 색상, 범위, 밀도를 설정합니다.  
  - **Resolution Width**: 애플리케이션의 가로 해상도를 픽셀 단위로 지정합니다.  
  - **Resolution Height**: 애플리케이션의 세로 해상도를 픽셀 단위로 지정합니다.
  - **Resolution Mode**: 캔버스 해상도 조정 방식을 설정합니다. 크기 변경 시 해상도 변경 여부를 결정합니다.
  - **Fill Mode**: 캔버스 크기 조정 방식을 설정합니다. (None, Keep aspect ratio, Fill window)  
  - **Device Order**: The order in which attempts are made to create the graphics devices.
  - **Enable WebGPU**: When enabled, the application will try to use WebGPU if available.
  - **Enable WebGL 2.0**: When enabled, the application will try to use WebGL 2.0 if available.
  - **Power Preference**: WebGL의 전원 모드를 선택하는 힌트를 제공합니다. Default(브라우저 자동 결정), High Performance(성능 우선), Low Power(저전력 우선) 중에서 선택 가능합니다.
  - **Anti-aliasing**: 비활성화하면 백 버퍼의 앤티앨리어싱 기능이 꺼집니다.
  - **Device Pixel Ratio**: 기기 픽셀 비율 적용 여부를 설정합니다.  
  - **Transparent Canvas**: 메인 캔버스의 알파 블렌딩을 활성화합니다.  
  - **Preserve Drawing Buffer**: WebGL 컨텍스트 생성 시 버퍼 보존 여부를 설정합니다.  
- **Layers**  
  - 렌더링 순서 및 그룹화를 위한 레이어를 생성/관리합니다.
- **Lightmapping**  
  - **Size Multiplier / Max Resolution**: 라이트맵 크기를 조정하고 최대 해상도를 설정합니다.  
  - **Mode**: Color Only 또는 Color and Direction을 선택합니다.  
  - **Filter / Range / Smoothness**: 런타임 라이트맵 블러 필터와 강도를 설정합니다.  
  - **Ambient Bake / Samples / Sphere Part**: 환경광 라이트 베이킹을 설정합니다.  
  - **Occlusion Brightness / Occlusion Contrast**: 그림자 명암을 조정합니다.
- **Batch Groups**
  - 모델 및 UI 요소를 그룹화하여 드로우콜을 최적화합니다.
- **Loading Screen**  
  - 애플리케이션 로딩 화면을 표시하는 스크립트를 지정합니다.
- **External Scripts**
  - 외부 스크립트 URL을 지정하여 `<script>` 태그로 로드합니다.
- **Launch Page**  
  - 시작 페이지에 필수 헤더를 추가하여 SharedArrayBuffer를 활성화합니다.
  - [SharedArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) 멀티스레드 물리 엔진과 같은 일부 고급 기능을 사용하려면 필요합니다.
- **Input**  
  - 프로젝트에서 사용할 입력 장치(마우스, 키보드, 터치, 게임패드 등)를 활성화/비활성화합니다.
- **Network**  
  - **Asset Retries**: 에셋 로딩에 실패했을 때 다시 시도할 최대 횟수를 설정합니다. 에셋 요청이 실패할 경우, 지수적으로 재시도 대기 시간이 증가하며 여러 번 시도합니다.
- **Scripts Loading Order**  
  - 스크립트 로딩 순서를 설정하여 의존성 문제를 방지합니다.

### Publish/Download
![Toolbar](/img/usage-guide/8_publish_download.png)
- **Change Image**: 다운로드 시 사용할 이미지를 선택합니다. (선택하지 않을 경우 기본 이미지가 적용됩니다.)
- **Choose Scenes**: 시작할 때 보이게 될 첫 씬을 선택합니다.
- **Title**: 프로젝트 제목을 입력합니다.
- **Description**: 프로젝트 설명을 입력합니다.
