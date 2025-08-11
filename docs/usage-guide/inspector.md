---
id: inspector
title: Inspector
sidebar_label: 인스팩터
---

# Inspector

OasisW의 인스팩터 뷰는 선택된 오브젝트의 모든 속성과 컴포넌트를 편집하는 핵심 도구입니다.

![Inspector](/img/usage-guide/7_1_inspector.png)

## 선택 항목에 따른 Inspector 패널 종류

- **Entity/Component Inspector**: 엔티티 및 컴포넌트 속성 편집
- **Texture Inspector**: 텍스처 관련 속성 편집
- **Material Inspector**: 재질 속성 편집
- **Cubemap Inspector**: 큐브맵 속성 편집

## 속성 값 변경

- 속성 값 변경을 통해 엔티티가 어떻게 동작할지 지정  
  예) Model 컴포넌트의 렌더링할 모델 선택, 조명의 색상 설정 등

- 단순 텍스트나 숫자 속성은 텍스트 필드 또는 슬라이더로 조절 가능  
- 특수한 입력 방식이 필요한 경우도 있음  
  예) 에셋 선택 시 Asset 패널에서 사용 가능한 에셋을 강조 표시

- 뷰포트에서 직접 조작 가능한 값도 있음  
  예) Translate, Rotate, Scale 값은 기즈모를 드래그하여 변경 가능

## 컴포넌트 및 기능 목록과 설명

![Inspector](/img/usage-guide/7_2_component.png)

### 2D
- **Sprite**: 단일 이미지로 2D 그래픽을 표현  
- **Animated Sprite**: 여러 프레임 애니메이션을 재생하는 2D 요소

### 3D
- **Model (legacy)**: 이전 방식으로 임포트된 3D 모델 렌더링  
- **Render**: 기본 3D 메시 렌더링 컴포넌트

### Audio
- **Audio Listener**: 씬 내 소리 수신 역할, 주로 카메라에 연결  
- **Sound**: 사운드 클립 재생 컴포넌트

### Animation
- **Anim**: 최신 애니메이션 시스템 컴포넌트  
- **Animation (legacy)**: 이전 방식의 애니메이션 컴포넌트

### Camera
- **Perspective**: 원근감 있는 3D 카메라  
- **Orthographic**: 원근감 없는 평면 카메라

### Light
- **Directional Light**: 일정 방향으로 비추는 조명  
- **Spot Light**: 특정 각도 범위로 빛을 집중하는 조명
- **Omni Light**: 모든 방향으로 빛을 뿜는 구 형태 조명  

### Physics
- **Collision**: 충돌 감지 및 반응 정의  
- **Rigid Body**: 물리 엔진 기반 움직임 구현

### Gaussian Splat
- 점 기반 렌더링으로 입자 및 포인트 클라우드 효과 구현

### Navigation
- AI 캐릭터의 경로 탐색 정보 제공

### Particle System
- 불꽃, 연기 등 다양한 입자 효과 생성 및 제어

### Script
- 사용자 작성 코드로 게임 로직 및 동작 정의

### Sequence
- 애니메이션, 이벤트, 카메라 동작을 시간 순서대로 제어

### User Interface
- **Button**: 클릭 가능한 인터랙티브 버튼  
- **Element**: 텍스트, 이미지 등 UI 기본 요소  
- **Layout Child**: 레이아웃 그룹 내 자동 배치되는 자식 요소  
- **Layout Group**: UI 요소들을 정렬, 배치하는 컨테이너  
- **2D Screen**: 2D 화면 공간 UI 표시  
- **3D Screen**: 3D 공간 내 UI 배치 및 표시  
- **Scrollbar**: 스크롤 위치 조절 바  
- **Scroll View**: 스크롤 가능한 콘텐츠 영역 제공
