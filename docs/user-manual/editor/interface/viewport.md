---
title: Viewport
sidebar_label: 뷰포트
---

# Viewport

뷰포트는 3D 씬을 눈으로 보면서 직접 만지고 둘러보는 가장 중심이 되는 화면입니다. 오브젝트를 옮기거나 카메라 시점을 바꾸는 등 대부분의 작업이 여기서 이루어집니다. 아래에서 뷰포트의 주요 기능을 하나씩 살펴봅니다.

![Viewport](/img/usage-guide/5_1_viewport.png)

## Gizmos (기즈모) {#gizmos}

| <img src="/img/usage-guide/5_3_gizmo1.png" alt="기즈모 종류 1" width="250" height="250" /> | <img src="/img/usage-guide/5_3_gizmo2.png" alt="기즈모 종류 2" width="250" height="250" /> | <img src="/img/usage-guide/5_3_gizmo3.png" alt="기즈모 종류 3" width="250" height="250" /> |
|:---:|:---:|:---:|
| 이동(Translate) | 회전(Rotate) | 크기 조절(Scale) |

- 오브젝트를 선택하면 나타나는 **3색 축(3-Colored Axis)** 을 **기즈모**라고 부릅니다.
- 선택한 엔티티의 위치·회전·크기, 즉 **변환 행렬(Transform matrix)** 을 바꿀 때 이 축을 잡고 조작합니다.
- 종류:
  1. **이동(Translate)** → 축 끝에 화살표 아이콘이 붙어 있습니다.
  2. **회전(Rotate)** → 3색 원 링 모양입니다.
  3. **크기 조절(Scale)** → 축 끝에 큐브 아이콘이 붙어 있습니다.

## Cameras

### Perspective
- 에디터는 처음에 **원근(Perspective) 카메라**를 사용합니다.  
  → 가까운 것은 크게, 먼 것은 작게 보여서 실제로 공간 안을 들여다보는 듯한 시야를 줍니다.
- **카메라 드롭다운 메뉴**에서 다른 카메라로 바꿀 수 있습니다.

![Viewport](/img/usage-guide/5_2_camera.png)

### Orthographic
- 종류: **Top, Bottom, Front, Back, Left, Right**  
- 특징: 원근감이 없어 정면에서 곧게 바라보는 뷰입니다 → **위치를 정밀하게 맞출 때** 유용합니다.

## Render Mode

- 뷰포트 오른쪽 위에 있는 **렌더 모드 드롭다운 메뉴**에서 화면을 어떻게 그릴지 바꿀 수 있습니다.

![Viewport](/img/usage-guide/5_4_render_mode.png)

### 기능
1. **Wireframe 표시**: 씬의 메시를 색이나 면 없이 선 구조로만 보여 줍니다.
2. **디버그 렌더 모드**: 특정 렌더링 속성 하나만 따로 떼어 볼 수 있습니다.
    - **Standard**: 기본 렌더링 모드입니다. 재질과 조명이 모두 적용된 최종 결과를 보여 줍니다.
    - **Albedo**: 광원과 그림자를 뺀 재질 본래의 색상 텍스처만 보여 줍니다.
    - **Opacity**: 불투명도(Transparency/Opacity) 값을 눈으로 확인할 수 있게 표시합니다.
    - **World Normal**: 표면이 향한 방향(법선 벡터)을 색으로 나타내 표면 기울기를 확인합니다.
    - **Specularity**: 재질이 얼마나 반사되는지(Specular level)를 보여 줍니다.
    - **Gloss**: 표면이 매끄러운지(Smoothness) 거친지(Roughness)를 보여 줍니다.
    - **Metalness**: 표면이 금속처럼 보이는지 여부를 보여 줍니다.
    - **AO (Ambient Occlusion)**: 주변광이 가려지는 정도를 표시해 표면의 깊이감과 음영을 확인합니다.
    - **Emission (발광)**: 광원 없이 스스로 빛나는 부분을 보여 줍니다.
    - **Lighting**: 재질 색상과 텍스처를 빼고 씬의 조명만 보여 줍니다.
    - **UVO**: UV 채널 0의 텍스처 좌표가 어떻게 펼쳐졌는지 보여 줍니다.

## JOBS

작업이 지금 얼마나 진행됐는지 **진행상태**를 보여 줍니다.

![Viewport](/img/usage-guide/5_8.png)

## ONLINE

지금 이 씬에 함께 접속해 있는 **사용자 목록**을 보여 줍니다.

![Viewport](/img/usage-guide/5_5.png)

### START EDIT (force)

다른 사람이 편집 중이더라도 씬 **편집 권한**을 강제로 가져옵니다.

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/usage-guide/5_7_1.png" alt="Image" style={{maxWidth: '30%'}} />
  <img src="/img/usage-guide/5_7_2.png" alt="Image" style={{maxWidth: '38%'}} />
  <img src="/img/usage-guide/5_7_3.png" alt="Image" style={{maxWidth: '30%'}} />
</div>
<br />
