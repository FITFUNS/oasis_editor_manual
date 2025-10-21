---
id: viewport
title: Viewport
sidebar_label: 뷰포트
---

# Viewport

OasisW의 3D 씬을 시각적으로 편집하고 탐색하는 핵심 인터페이스인 뷰포트를 학습합니다.

![Viewport](/img/usage-guide/5_1_viewport.png)

## Gizmos (기즈모)

| <img src="/img/usage-guide/5_3_gizmo1.png" alt="기즈모 종류 1" width="250" height="250" /> | <img src="/img/usage-guide/5_3_gizmo2.png" alt="기즈모 종류 2" width="250" height="250" /> | <img src="/img/usage-guide/5_3_gizmo3.png" alt="기즈모 종류 3" width="250" height="250" /> |
|:---:|:---:|:---:|
| 이동(Translate) | 회전(Rotate) | 크기 조절(Scale) |

- 화면에 보이는 **3색 축(3-Colored Axis)** 을 **기즈모**라고 합니다.
- 선택한 엔티티의 **변환 행렬(Transform matrix)** 을 조작할 때 사용합니다.
- 종류:
  1. **이동(Translate)** → 축 끝에 화살표 아이콘이 있습니다.
  2. **회전(Rotate)** → 3색 원 링 구조입니다.
  3. **크기 조절(Scale)** → 축 끝에 큐브 아이콘이 있습니다.

## Cameras

### Perspective
- 기본적으로 에디터는 **원근(Perspective) 카메라**를 사용합니다.  
  → 영화 카메라가 씬 안을 떠다니는 듯한 시야를 제공합니다.
- **카메라 드롭다운 메뉴**를 통해 다양한 카메라로 전환 가능합니다.

![Viewport](/img/usage-guide/5_2_camera.png)

### Orthographic
- 종류: **Top, Bottom, Front, Back, Left, Right**  
- 특징: 원근감이 없는 뷰를 제공합니다 → **정밀한 위치 조정**에 유용합니다.

## Render Mode

- 뷰포트 우측 상단의 **렌더 모드 드롭다운 메뉴**로 설정을 변경할 수 있습니다.

![Viewport](/img/usage-guide/5_4_render_mode.png)

### 기능
1. **Wireframe 표시**: 씬의 메시를 선 구조로만 시각화합니다.
2. **디버그 렌더 모드**: 특정 렌더링 속성만 표시 가능합니다.
    - **Standard**: 일반 렌더링 모드입니다. 모든 재질과 조명이 적용된 최종 결과를 표시합니다.
    - **Albedo**: 재질의 기본 색상 텍스처(광원과 그림자 영향을 제외한 순수 색상)만 표시합니다.
    - **Opacity**: 불투명도(Transparency/Opacity) 값을 시각화합니다.
    - **World Normal**: 표면의 방향(법선 벡터)을 색상으로 표현합니다. 표면 기울기 확인에 사용합니다.
    - **Specularity**: 재질의 반사 강도(Specular level)를 표시합니다.
    - **Gloss**: 표면의 매끄러움(Smoothness) 또는 거칠기(Roughness)를 표시합니다.
    - **Metalness**: 표면이 금속성인지 여부를 시각화합니다.
    - **AO (Ambient Occlusion)**: 주변광 차단 효과를 표시하여 표면의 깊이감과 음영을 확인합니다.
    - **Emission (발광)**: 발광 속성(광원 없이 스스로 빛나는 부분)을 표시합니다.
    - **Lighting**: 씬 내 조명만 시각화합니다(재질 색상과 텍스처 제외).
    - **UVO**: UV 채널 0의 텍스처 좌표 배치를 시각화합니다.

## JOBS

작업의 **진행상태**를 표시합니다.

![Viewport](/img/usage-guide/5_8.png)

## ONLINE

프로젝트의 씬에 접속 중인 **사용자 목록**을 표시합니다.

![Viewport](/img/usage-guide/5_5.png)

### START EDIT (force)

씬 **편집 권한**을 강제로 가져옵니다.

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/usage-guide/5_7_1.png" alt="Image" style={{maxWidth: '30%'}} />
  <img src="/img/usage-guide/5_7_2.png" alt="Image" style={{maxWidth: '38%'}} />
  <img src="/img/usage-guide/5_7_3.png" alt="Image" style={{maxWidth: '30%'}} />
</div>
<br />