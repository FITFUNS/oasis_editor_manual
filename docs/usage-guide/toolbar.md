---
id: toolbar
title: Toolbar
sidebar_label: 툴바
---

# Toolbar

OasisW의 툴바에 있는 각 버튼의 단축키와 기능을 학습합니다.

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
| ![Fullscreen](/img/usage-guide/3_9_hide_panels.svg) | **Fullscreen** | Space | 모든 패널 숨기기/보이기 (뷰포트 최대화) |
| ![Launch](/img/usage-guide/3_10_launch.svg) | **Launch** | Ctrl+Enter | 새 탭에서 씬 실행 |
| <img src="/img/usage-guide/3_11_publish.svg" alt="Deploy Test" style={{width: '24px'}} /> | **Deploy Test** |  | 배포 테스트 |
<!-- | ![AI Image Generation](/img/usage-guide/3_8_image_generation.svg) | **AI Image Generation** | I | AI로 이미지 생성 | -->

### Translate (이동)
- **단축키**: `1`
- **기능**: 오브젝트 이동 모드입니다.
- **사용법**: 
  - X축 (빨간색): 좌우로 이동합니다.
  - Y축 (녹색): 상하로 이동합니다.
  - Z축 (파란색): 앞뒤로 이동합니다.
- **특징**: 드래그하여 정밀한 위치 조정이 가능합니다.

### Rotate (회전)
- **단축키**: `2`
- **기능**: 오브젝트 회전 모드입니다.
- **사용법**:
  - X축 (빨간색): X축 기준으로 회전합니다.
  - Y축 (녹색): Y축 기준으로 회전합니다.
  - Z축 (파란색): Z축 기준으로 회전합니다.
- **특징**: 각 축별로 독립적인 회전 조작이 가능합니다.

### Scale (크기 조정)
- **단축키**: `3`
- **기능**: 오브젝트 크기 조정 모드입니다.
- **사용법**:
  - 각 축별로 크기를 조정합니다.
  - 중앙 핸들을 드래그하여 균등하게 크기를 조정합니다.

### Resize Element Component (크기 조정)
- **단축키**: `4`  
- **기능**: 엘리먼트 컴포넌트 크기 조정 모드입니다.  
- **사용법**:  
  - 마우스로 모서리를 드래그하여 크기를 조정합니다.
- **특징**:  
  - 가로·세로 독립 조정이 가능합니다. 

### World/Local
- **단축키**: `L`
- **기능**: 로컬/글로벌 좌표계를 전환합니다.
- **World**: 월드 기준 좌표계를 사용합니다.
- **Local**: 오브젝트 기준 좌표계를 사용합니다.

### Snap (스냅)
- **단축키**: `Shift`
- **기능**: 그리드에 맞춰 정렬합니다.
- **사용법**: 오브젝트를 이동할 때 그리드 단위로 정확히 배치합니다.

### Focus
- **단축키**: `F`
- **기능**: 선택된 오브젝트에 카메라를 포커스합니다.

<!-- ### AI Image Generation
- **단축키**: `I`
- **기능**: AI로 이미지를 생성하고 생성한 이미지를 오브젝트에 추가합니다.
- **사용법**: 툴바에서 Image Generation 아이콘을 클릭하여 이미지를 생성합니다.
- **상세 가이드**: [이미지 제네레이션](/usage-guide/image-generation)을 참조하세요. -->

### Fullscreen
- **단축키**: `Space`
- **기능**: 모든 패널을 숨기기/보이기합니다. (뷰포트 최대화)

### Launch
- **단축키**: `Ctrl+Enter`
- **기능**: 새 탭에서 씬을 실행합니다.

### Deploy Test
<!-- - **단축키**: ``   -->
- **기능**: 배포 테스트를 수행합니다.  
- **사용법**:  
새 탭에서 **배포**된 프로젝트를 테스트할 수 있습니다.  
**오른쪽 상단에 표시되는 QR 코드**를 스캔하면, **모바일 기기에서도 테스트**가 가능합니다.

:::warning 주의사항
Deploy 버튼을 클릭할 때 **주소창 옆에 팝업 차단됨 아이콘**이 표시되면,  
**팝업을 허용**해야 씬이 새 탭에서 정상적으로 실행됩니다.
:::

<br />
<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/usage-guide/3_12.png" alt="Image" style={{maxWidth: '45%'}} />
  <img src="/img/usage-guide/3_13.png" alt="Image" style={{maxWidth: '45%'}} />
</div>


<!-- ## 툴바 사용 팁

### 효율적인 작업을 위한 팁
1. **단축키 숙지**: 자주 사용하는 도구의 단축키를 외워두면 작업 속도가 향상됩니다.
2. **모드 전환**: 각 모드(Translate, Rotate, Scale)는 서로 다른 기능을 제공하므로 상황에 맞게 적절히 전환하세요.
3. **Snap 활용**: 정확한 배치가 필요한 경우 Snap 기능을 활성화하여 그리드에 맞춰 정렬하세요.
4. **툴바 위치 조정**: 원하는 위치에 툴바를 놓고 사용할 수 있습니다. -->