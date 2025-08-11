---
id: hierarchy
title: Hierarchy
sidebar_label: 하이어라키
---

# Hierarchy

OasisW의 하이어라키 뷰는 씬의 모든 오브젝트를 계층 구조로 관리하는 핵심 도구입니다.

![Hierarchy](/img/usage-guide/4_hierarchy.png)

## 엔티티 생성 및 삭제

- **생성**: Hierarchy에서 엔티티를 선택한 후, **새 하위 엔티티**를 만들 수 있음  
- **삭제**: 선택한 엔티티를 삭제할 수 있음  
- **방법**:
  - Hierarchy 패널 우측 상단의 버튼 사용
  - 엔티티를 **마우스 오른쪽 클릭**하여 나오는 컨텍스트 메뉴 사용

## Hierarchy 구성하기

- 엔티티의 트리 구조 순서는 중요함
- 씬(Scene)은 계층 구조를 가지며, 엔티티는 **부모-자식 관계**를 가질 수 있음
- 부모 엔티티의 **변환 행렬(Transform matrix)** 은 자식 엔티티에 모두 적용됨
  - 부모를 이동/회전하면 자식도 함께 이동/회전함
  - 많은 엔티티를 한 번에 조작할 때 유용
- **드래그 앤 드롭**으로 Hierarchy 구조 변경 가능
  - 엔티티를 다른 엔티티의 자식으로 이동(리패런트, Reparent) 가능

## Hierarchy 검색하기

- Hierarchy 패널 상단의 **검색 상자(Search Box)** 를 사용해 엔티티 목록을 필터링 가능

![Hierarchy](/img/usage-guide/4_2_search_box.png)

## 엔티티 복제하기

- **단축키**: Ctrl+D (Mac은 Cmd+D)  
- **방법**: 엔티티 선택 → 복제 → 원본 바로 옆에 복제본 생성
- **우클릭 메뉴**: `Duplicate` 선택

## 엔티티 복사 / 붙여넣기

- **같은 씬 내**:
  1. 복사할 엔티티 선택
  2. **Ctrl+C** (Mac은 Cmd+C)
  3. 붙여넣을 부모 엔티티 선택
  4. **Ctrl+V** (Mac은 Cmd+V)
- **다른 씬 또는 프로젝트 간**:
  1. 복사(Ctrl+C)
  2. 다른 씬/프로젝트로 이동
  3. 부모 엔티티 선택 후 붙여넣기(Ctrl+V)
## 웹 에디터 메뉴 구성

- **Entity**  
  씬 내에서 오브젝트의 기본 단위. 모든 요소의 부모가 될 수 있는 컨테이너
- **2D**
    - **Sprite**: 단일 이미지로 표현되는 2D 그래픽 요소
    - **Animated Sprite**: 여러 프레임 이미지를 순차적으로 재생하는 2D 애니메이션 요소
- **3D**
    - **Render**: 3D 메시를 렌더링하는 기본 컴포넌트
    - **Box**: 박스 형태의 3D 기본 도형
    - **Capsule**: 캡슐 형태의 3D 기본 도형
    - **Cone**: 원뿔 형태의 3D 기본 도형
    - **Cylinder**: 원기둥 형태의 3D 기본 도형
    - **Plane**: 평면 형태의 3D 기본 도형
    - **Sphere**: 구 형태의 3D 기본 도형
    - **GSplat**: 점 기반 렌더링(gaussian splatting)을 위한 객체
    - **Model (legacy)**: 이전 방식의 3D 모델 로드 및 렌더링 객체
- **Audio**
    - **Audio Listener**: 씬 내 사운드를 수신하는 역할 카메라에 주로 연결
    - **Sound**: 오디오 파일 재생을 위한 컴포넌트
- **Camera**
    - **Perspective**: 원근감을 적용한 3D 카메라 뷰
    - **Orthographic**: 원근감 없이 평행하게 렌더링하는 카메라 뷰
- **Light**
    - **Directional Light**: 태양광과 같이 한 방향으로 비추는 조명
    - **Spot Light**: 특정 각도 범위로만 빛을 비추는 조명
    - **Omni Light**: 한 지점에서 모든 방향으로 빛을 방출하는 조명
- **Particle System**  
    - 입자를 이용한 연출 효과(불꽃, 연기, 눈 등)를 구현하는 시스템
- **User Interface**
    - **2D Screen**: 2D UI 요소를 배치하는 화면
    - **3D Screen**: 3D 공간에 배치할 수 있는 UI 화면
    - **Button**: 클릭 가능한 UI 버튼 요소
    - **Layout Group**: UI 요소를 일정 규칙에 따라 배치하는 그룹
    - **Layout Child**: Layout Group 안에서 배치 규칙이 적용되는 개별 요소
    - **Group Element**: 여러 UI 요소를 묶는 컨테이너
    - **Text Element**: 텍스트를 표시하는 UI 요소
    - **Image Element**: 이미지를 표시하는 UI 요소
    - **Scrollbar**: 스크롤 가능한 영역의 이동 바
    - **Scroll View**: 스크롤 가능한 UI 영역
- **Server Side**
    - **Server**: 서버 기능을 제공하는 엔티티
    - **Authentication**: 사용자 인증 처리 기능
    - **Chat**: 채팅 기능을 구현하는 서버 컴포넌트
    - **Leaderboard**: 순위표 기능을 제공하는 서버 컴포넌트