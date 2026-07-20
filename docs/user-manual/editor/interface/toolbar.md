---
title: Toolbar
sidebar_label: 툴바
---

# Toolbar

툴바에는 오브젝트를 옮기고 돌리고 크기를 바꾸는 등 자주 쓰는 도구들이 모여 있습니다. 각 버튼은 키보드 단축키로도 바로 쓸 수 있어서 익혀 두면 작업이 훨씬 빨라집니다. 아래에서 버튼별 단축키와 하는 일을 하나씩 살펴봅니다.

## 단축키 및 기능

| 이미지 | 버튼 | 단축키 | 설명 |
|------|------|--------|------|
| ![Translate](/img/usage-guide/3_1_translate.svg) | **Translate** | 1 | 오브젝트 이동 모드 |
| ![Rotate](/img/usage-guide/3_2_rotate.svg) | **Rotate** | 2 | 오브젝트 회전 모드 |
| ![Scale](/img/usage-guide/3_3_scale.svg) | **Scale** | 3 | 오브젝트 크기 조정 모드 |
| ![Resize Element Component](/img/usage-guide/3_4_resize_element_component.svg) | **Resize Element Component** | 4 | 엘리먼트 컴포넌트 크기 조정 |
| ![World/Local](/img/usage-guide/3_5_world_local.svg) | **World/Local** | L | World / Local 좌표계 전환 |
| ![Snap](/img/usage-guide/3_6_snap.svg) | **Snap** | Shift | 그리드에 맞춰 정렬 |
| ![Focus](/img/usage-guide/3_7_focus.svg) | **Focus** | F | 선택한 오브젝트에 포커스 |
| ![AI Image Generation](/img/usage-guide/3_8_image_generation.svg) | **AI Image Generation** | I | AI로 이미지 생성 |
| ![Fullscreen](/img/usage-guide/3_9_hide_panels.svg) | **Fullscreen** | Space | 모든 패널 숨기기/보이기 (뷰포트 최대화) |
| ![Launch](/img/usage-guide/3_10_launch.svg) | **Launch** | Ctrl+Enter | 새 탭에서 씬 실행 |
| <img src="/img/usage-guide/3_11_publish.svg" alt="Publish" style={{width: '24px'}} /> | **Publish** |  | 배포 테스트 |

### Translate (이동)
- **단축키**: `1`
- **기능**: 오브젝트를 원하는 위치로 옮기는 모드입니다.
- **사용법**: 
  - X축 (빨간색): 좌우로 이동합니다.
  - Y축 (녹색): 상하로 이동합니다.
  - Z축 (파란색): 앞뒤로 이동합니다.
- **특징**: 축을 드래그하면 위치를 세밀하게 맞출 수 있습니다.

### Rotate (회전)
- **단축키**: `2`
- **기능**: 오브젝트를 돌리는 모드입니다.
- **사용법**:
  - X축 (빨간색): X축을 중심으로 회전합니다.
  - Y축 (녹색): Y축을 중심으로 회전합니다.
  - Z축 (파란색): Z축을 중심으로 회전합니다.
- **특징**: 축마다 따로 돌릴 수 있어 원하는 방향을 정확히 맞출 수 있습니다.

### Scale (크기 조정)
- **단축키**: `3`
- **기능**: 오브젝트의 크기를 키우거나 줄이는 모드입니다.
- **사용법**:
  - 각 축을 잡고 그 방향으로만 크기를 바꿉니다.
  - 가운데 핸들을 드래그하면 전체 크기가 한 번에 똑같이 바뀝니다.

### Resize Element Component (크기 조정)
- **단축키**: `4`  
- **기능**: 엘리먼트 컴포넌트의 크기를 바꾸는 모드입니다.  
- **사용법**:  
  - 마우스로 모서리를 드래그해서 크기를 바꿉니다.
- **특징**:  
  - 가로와 세로를 따로따로 조정할 수 있습니다. 

### World/Local
- **단축키**: `L`
- **기능**: 기준이 되는 좌표계를 로컬과 글로벌 사이에서 바꿉니다.
- **World**: 씬 전체(월드)를 기준으로 방향을 잡습니다.
- **Local**: 오브젝트 자신을 기준으로 방향을 잡습니다.

### Snap (스냅)
- **단축키**: `Shift`
- **기능**: 오브젝트를 그리드 선에 딱딱 맞춰 정렬합니다.
- **사용법**: 오브젝트를 옮길 때 그리드 한 칸 단위로 정확하게 놓입니다.

### Focus
- **단축키**: `F`
- **기능**: 선택한 오브젝트가 화면 가운데에 오도록 카메라를 맞춰 줍니다.

### AI Image Generation
- **단축키**: `I`
- **기능**: AI로 이미지를 만들어 그 이미지를 오브젝트에 바로 넣습니다.
- **사용법**: 툴바에서 Image Generation 아이콘을 눌러 이미지를 만듭니다.
- **상세 가이드**: [이미지 제네레이션](/usage-guide/image-generation)을 참조하세요.

### Fullscreen
- **단축키**: `Space`
- **기능**: 주변 패널을 모두 숨기거나 다시 보여 줍니다. (뷰포트를 최대로 넓게 씁니다)

### Launch
- **단축키**: `Ctrl+Enter`
- **기능**: 새 탭을 열어 씬을 실제로 실행해 봅니다.

### Publish
<!-- - **단축키**: ``   -->
- **기능**: 배포된 상태를 미리 테스트합니다.  
- **사용법**:  
새 탭에서 **배포**된 프로젝트가 잘 작동하는지 확인할 수 있습니다.  
**오른쪽 상단에 뜨는 QR 코드**를 스캔하면 **모바일 기기에서도 테스트**할 수 있습니다.

::::warning 주의사항
Publish 버튼을 눌렀을 때 **주소창 옆에 팝업 차단됨 아이콘**이 보이면,  
**팝업을 허용**해야 씬이 새 탭에서 제대로 열립니다.
::::

<br />
<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/usage-guide/3_12.png" alt="Image" style={{maxWidth: '50%'}} />
  <img src="/img/usage-guide/3_13.png" alt="Image" style={{maxWidth: '50%'}} />
</div>
