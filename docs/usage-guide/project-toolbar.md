---
id: project-toolbar
title: Project Toolbar
sidebar_label: 프로젝트 툴바
---

# Project Toolbar

OasisW의 프로젝트 툴바는 프로젝트 관리와 관련된 도구들을 제공합니다.

## 기능
| 이미지 | 버튼 | 설명 |
|------|------|-------|
| ![Scenes](/img/usage-guide/8_manage_scenes.svg) | **Manage Scenes** | 씬 선택 화면 열림 |
| ![Settings](/img/usage-guide/8_settings.svg) | **Settings** |  프로젝트 환경 설정 |
| ![Toolbar](/img/usage-guide/8_project_toolbar.svg) | **Publish/Download** |  빌드 된 프로젝트 다운로드 |

### Manage Scenes
- **기능**: 씬 선택 화면 열림

![Scenes](/img/usage-guide/8_manage_scenes.png)

### Settings
![Settings](/img/usage-guide/8_settings.png)

- **Scene Name**  
  - 씬 이름을 변경하여 프로젝트에서 식별 가능하게 함
- **Editor**  
  - 프로젝트의 전반적인 환경 설정을 조정하는 패널
- **Asset Tasks**  
  - **Create FBX Folder** : FBX 파일을 가지고 올 때, 해당 에셋 전용 폴더를 자동으로 생성해
FBX와 관련 텍스처, 머티리얼, 애니메이션 데이터를 한곳에 모아 정리하는 기능
- **Physics**  
  - **Physics Library**: 사용할 물리 엔진을 설정하는 옵션, Import Ammo 버튼을 누르면 프로젝트에 Ammo 폴더가 자동으로 추가
  - **Gravity**: 모든 물리 객체에 적용되는 중력 값
- **Rendering**  
  - **Ambient Color**: 전역 주변광 색상 설정  
  - **Skybox / Skybox Intensity / Skybox Mip**: 큐브맵 기반 하늘 배경과 밝기, 블러 단계 조정  
  - **Tonemapping**: HDR → LDR 변환 방식 선택 (Linear, Filmic)  
  - **Exposure**: 장면 전체 밝기 조정  
  - **Gamma Correction**: 감마 보정 활성화로 색상 및 조명 표현 개선  
  - **Fog**: 안개 타입(None, Linear, Exponential, Exponential Squared)과 색상, 범위, 밀도 설정  
  - **Resolution**: 해상도와 해상도 모드 설정  
  - **Fill Mode**: 캔버스 크기 조정 방식 설정 (None, Keep aspect ratio, Fill window)  
  - **Device Pixel Ratio**: 기기 픽셀 비율 적용 여부  
  - **Transparent Canvas**: 메인 캔버스의 알파 블렌딩 활성화  
  - **Preserve Drawing Buffer**: WebGL 컨텍스트 생성 시 버퍼 보존 여부  
- **Layers**  
  - 렌더링 순서 및 그룹화를 위한 레이어 생성/관리
- **Lightmapping**  
  - **Size Multiplier / Max Resolution**: 라이트맵 크기 조정 및 최대 해상도  
  - **Mode**: Color Only 또는 Color and Direction  
  - **Filter / Range / Smoothness**: 런타임 라이트맵 블러 필터와 강도  
  - **Ambient Bake / Samples / Sphere Part**: 환경광 라이트 베이킹 설정  
  - **Occlusion Brightness / Occlusion Contrast**: 그림자 명암 조정
- **Batch Groups**
  - 모델 및 UI 요소를 그룹화하여 드로우콜 최적화
- **Loading Screen**  
  - 애플리케이션 로딩 화면을 표시하는 스크립트 지정
- **External Scripts**
  - 외부 스크립트 URL을 지정하여 `<script>` 태그로 로드
- **Launch Page**  
  <!-- - 브라우저에서 스레드 간 메모리 공유를 활성화해, WebAssembly 기반 물리 엔진(예: Ammo)이나 대규모 연산의 성능을 향상시킴
  - 보안상 Cross-Origin Isolation 환경에서만 동작 -->
- **Input**  
  - 프로젝트에서 사용할 입력 장치(마우스, 키보드, 터치, 게임패드 등) 활성화/비활성화
- **Network**  
  - 네트워크 관련 기능 활성화 및 설정(상세 내용은 프로젝트 구현에 따라 다름)
- **Audio**  
  - **Use Legacy Audio**: 예전 오디오 컴포넌트 사용 여부 (구형 프로젝트 호환용)
- **Scripts Loading Order**  
  - 스크립트 로딩 순서를 설정하여 의존성 문제를 방지

### Publish/Download
![Toolbar](/img/usage-guide/8_publish_download.png)
- **Change Image**: 다운로드 시 사용할 이미지 (선택하지 않을 경우 기본 이미지 적용)
- **Choose Scenes**: 시작할 때 보이게 될 첫 씬 선택
- **Title**: 프로젝트 제목
- **Description**: 프로젝트 설명