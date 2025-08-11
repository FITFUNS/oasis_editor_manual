---
id: viewport
title: Viewport
sidebar_label: 뷰포트
---

# Viewport

OasisW의 뷰포트는 3D 씬을 시각적으로 편집하고 탐색하는 핵심 인터페이스로 현재 렌더링된 씬을 보여줍니다.

![Viewport](/img/usage-guide/5_1_viewport.png)

## Cameras

### Perspective
- 기본적으로 에디터는 **원근(Perspective) 카메라** 사용  
  → 영화 카메라가 씬 안을 떠다니는 듯한 시야를 제공
- **카메라 드롭다운 메뉴**를 통해 다양한 카메라로 전환 가능

![Viewport](/img/usage-guide/5_2_camera.png)

### Orthographic
- 종류: **Top, Bottom, Front, Back, Left, Right**  
- 특징: 원근감이 없는 뷰 제공 → **정밀한 위치 조정**에 유용

## Gizmos (기즈모)

| <img src="/img/usage-guide/5_3_gizmo1.png" alt="기즈모 종류 1" width="250" height="250" /> | <img src="/img/usage-guide/5_3_gizmo2.png" alt="기즈모 종류 2" width="250" height="250" /> | <img src="/img/usage-guide/5_3_gizmo3.png" alt="기즈모 종류 3" width="250" height="250" /> |
|:---:|:---:|:---:|
| 이동(Translate) | 회전(Rotate) | 크기 조절(Scale) |

- 화면에 보이는 **3색 축(3-Colored Axis)** 을 **기즈모**라고 함
- 선택한 엔티티의 **변환 행렬(Transform matrix)** 을 조작할 때 사용
- 종류:
  1. **이동(Translate)** → 축 끝에 화살표 아이콘
  2. **회전(Rotate)** → 3색 원 링 구조
  3. **크기 조절(Scale)** → 축 끝에 큐브 아이콘

## Render Mode

- 뷰포트 우측 상단의 **렌더 모드 드롭다운 메뉴**로 설정 변경 가능

![Viewport](/img/usage-guide/5_4_render_mode.png)

### 기능
1. **Wireframe 표시**: 씬의 메시를 선 구조로만 시각화
2. **디버그 렌더 모드**: 특정 렌더링 속성만 표시 가능
    - **Standard**: 일반 렌더링 모드. 모든 재질과 조명이 적용된 최종 결과를 표시
    - **Albedo**: 재질의 기본 색상 텍스처(광원과 그림자 영향을 제외한 순수 색상)만 표시
    - **Opacity**: 불투명도(Transparency/Opacity) 값을 시각화
    - **World Normal**: 표면의 방향(법선 벡터)을 색상으로 표현. 표면 기울기 확인에 사용
    - **Specularity**: 재질의 반사 강도(Specular level)를 표시
    - **Gloss**: 표면의 매끄러움(Smoothness) 또는 거칠기(Roughness)를 표시
    - **Metalness**: 표면이 금속성인지 여부를 시각화
    - **AO (Ambient Occlusion)**: 주변광 차단 효과를 표시하여 표면의 깊이감과 음영을 확인
    - **Emission (발광)**: 발광 속성(광원 없이 스스로 빛나는 부분)을 표시
    - **Lighting**: 씬 내 조명만 시각화(재질 색상과 텍스처 제외)
    - **UVO**: UV 채널 0의 텍스처 좌표 배치를 시각화