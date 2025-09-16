---
id: inspector
title: Inspector
sidebar_label: 인스팩터
---

# Inspector

OasisW의 선택된 오브젝트의 모든 속성과 컴포넌트를 편집하는 핵심 도구인 인스팩터 뷰를 학습합니다.

![Inspector](/img/usage-guide/7_1_inspector.png)

## 선택 항목에 따른 Inspector 뷰 종류

- **Entity/Component Inspector**: 엔티티 및 컴포넌트 속성을 편집합니다.
- **Texture Inspector**: 텍스처 관련 속성을 편집합니다.
- **Material Inspector**: 재질 속성을 편집합니다.
- **Cubemap Inspector**: 큐브맵 속성을 편집합니다.

## 속성 값 변경

- 속성 값 변경을 통해 엔티티가 어떻게 동작할지 지정합니다.  
  예) Model 컴포넌트의 렌더링할 모델 선택, 조명의 색상 설정 등을 지정합니다.

- 단순 텍스트나 숫자 속성은 텍스트 필드 또는 슬라이더로 조절 가능합니다.  
- 특수한 입력 방식이 필요한 경우도 있습니다.  
  예) 에셋 선택 시 Asset 뷰에서 사용 가능한 에셋을 강조 표시합니다.

- 뷰포트에서 직접 조작 가능한 값도 있습니다.  
  예) Translate, Rotate, Scale 값은 기즈모를 드래그하여 변경 가능합니다.

## 컴포넌트 및 기능 목록과 설명

![Inspector](/img/usage-guide/7_2_component.png)

### 2D
- **Sprite**: 단일 이미지로 2D 그래픽을 표현합니다.  
- **Animated Sprite**: 여러 프레임 애니메이션을 재생하는 2D 요소입니다.

### 3D
- **Model (legacy)**: 이전 방식으로 임포트된 3D 모델을 렌더링합니다.  
- **Render**: 기본 3D 메시 렌더링 컴포넌트입니다.

### Audio
- **Audio Listener**: 씬 내 소리 수신 역할로, 주로 카메라에 연결됩니다.  
- **Sound**: 사운드 클립 재생 컴포넌트입니다.

### Animation
- **Anim**: 최신 애니메이션 시스템 컴포넌트입니다.  
- **Animation (legacy)**: 이전 방식의 애니메이션 컴포넌트입니다.

### Camera
- **Perspective**: 원근감 있는 3D 카메라입니다.  
- **Orthographic**: 원근감 없는 평면 카메라입니다.

### Light
- **Directional Light**: 일정 방향으로 비추는 조명입니다.  
- **Spot Light**: 특정 각도 범위로 빛을 집중하는 조명입니다.
- **Omni Light**: 모든 방향으로 빛을 뿜는 구 형태 조명입니다.  

### Physics
- **Collision**: 충돌 감지 및 반응을 정의합니다.  
- **Rigid Body**: 물리 엔진 기반 움직임을 구현합니다.

<!-- ### Gaussian Splat
- 점 기반 렌더링으로 입자 및 포인트 클라우드 효과를 구현합니다. -->

### Navigation
- AI 캐릭터의 경로 탐색 정보를 제공합니다.

### Particle System
- 불꽃, 연기 등 다양한 입자 효과를 생성 및 제어합니다.

### Script
- 사용자 작성 코드로 게임 로직 및 동작을 정의합니다.

### Sequence
- 애니메이션, 이벤트, 카메라 동작을 시간 순서대로 제어합니다.

### User Interface
- **Button**: 클릭 가능한 인터랙티브 버튼입니다.  
- **Element**: 텍스트, 이미지 등 UI 기본 요소입니다.  
- **Layout Child**: 레이아웃 그룹 내 자동 배치되는 자식 요소입니다.  
- **Layout Group**: UI 요소들을 정렬, 배치하는 컨테이너입니다.  
- **2D Screen**: 2D 화면 공간 UI를 표시합니다.  
- **3D Screen**: 3D 공간 내 UI를 배치 및 표시합니다.  
- **Scrollbar**: 스크롤 위치를 조절하는 바입니다.  
- **Scroll View**: 스크롤 가능한 콘텐츠 영역을 제공합니다.
