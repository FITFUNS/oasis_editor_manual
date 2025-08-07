---
id: usage-guide
title: OasisW 사용법
sidebar_label: OasisW 사용법
---

# OasisW 사용법

OasisW의 기본 인터페이스와 도구들을 알아보겠습니다.

## 개요

OasisW는 웹 기반 3D 게임 엔진으로, 다양한 도구와 패널을 통해 효율적인 게임 개발을 지원합니다. 

프로그램 실행 시, 사용자는 처음에 프로젝트 열기 화면을 보게 됩니다. 이 화면에서 기존 프로젝트를 열거나 새 프로젝트를 시작할 수 있습니다.

![프로젝트 열기 화면](/img/usage-guide/1_open_project.png)

새 프로젝트를 시작하면, UNTITLED로 되어있는 씬을 더블 클릭하여 새로운 씬을 열 수 있습니다. 씬을 열면, 전체 화면으로 3D 공간을 탐색하고 수정할 수 있는 환경이 제공됩니다.

이 화면에서 다양한 도구와 패널을 활용하여 게임 개발 작업을 시작할 수 있습니다. 

![OasisW 전체 화면](/img/usage-guide/2_full.png)

각 패널과 도구의 상세한 사용법은 다음 문서들을 참조하세요.

## 주요 패널 및 도구

### [TOOLBAR](../usage-guide/toolbar)
툴바의 각 버튼과 단축키, 그리고 추가 도구들에 대한 상세한 설명을 확인할 수 있습니다.

![TOOLBAR](/img/usage-guide/3_toolbar.png)

### [HIERARCHY](../usage-guide/hierarchy)
Hierarchy 패널에서 관리되는 Entity 종류와 계층 구조 관리 방법을 알아보세요.

![HIERARCHY](/img/usage-guide/4_hierarchy.png)

### [VIEWPORT](../usage-guide/viewport)
Viewport의 다양한 모드와 컨트롤 방법, 렌더링 옵션에 대한 상세한 가이드입니다.

![VIEWPORT](/img/usage-guide/5_viewport.png)

### [ASSETS](../usage-guide/assets)
Assets 패널에서 관리되는 에셋 종류와 폴더 정리 팁, 에셋 최적화 방법을 확인하세요.

![ASSETS](/img/usage-guide/6_assets.png)

### [INSPECTOR](../usage-guide/inspector)
Inspector 패널의 컴포넌트 목록과 속성 편집 방법, 컴포넌트 관리에 대한 상세한 설명입니다.

![INSPECTOR](/img/usage-guide/7_inspector.png)

## 빠른 시작

### 기본 작업 흐름
1. **Toolbar**를 사용하여 오브젝트를 선택하고 조작
2. **Hierarchy**에서 씬의 오브젝트 구조 관리
3. **Viewport**에서 3D 씬을 시각적으로 편집
4. **Assets**에서 필요한 리소스 관리
5. **Inspector**에서 선택된 오브젝트의 속성 편집

### 핵심 단축키

#### **씬 실행 및 관리**
- **Ctrl + Enter** : 새 탭에서 씬 실행
- **Ctrl + E** : 현재 선택된 엔티티의 자식으로 새 엔티티 생성
- **Ctrl + D** : 선택한 엔티티와 모든 자식 복제
- **N 또는 F2** : 선택한 엔티티/에셋의 이름 필드에 포커스
- **Ctrl + C** : 현재 선택된 엔티티/에셋 복사
- **Ctrl + P** : 복사된 엔티티/에셋을 현재 선택된 엔티티/폴더 아래에 붙여넣기
- **Delete 또는 Ctrl + Backspace** : 현재 선택 항목 삭제

#### **3D 뷰 조작**
- **F** : 현재 선택된 엔티티에 3D 뷰에서 포커스
- **1** : 3D 뷰에서 이동 도구 활성화
- **2** : 3D 뷰에서 회전 도구 활성화
- **3** : 3D 뷰에서 크기 조정 도구 활성화
- **L** : 로컬/월드 좌표계 기즈모 전환
- **Space** : 모든 패널 숨기기/보이기 (뷰포트 최대화)

#### **편집 및 실행**
<!-- - **Ctrl + B** : 런타임 라이트매퍼를 사용하여 조명 재베이크 -->
- **Shift + Z** : 이전에 선택한 항목 선택
- **Ctrl + Z** : 마지막 작업 실행 취소
- **Ctrl + Y 또는 Ctrl + Shift + Z** : 마지막 작업 다시 실행
<!-- - **Ctrl + Space** : 미니 튜토리얼 검색 도구 모음 토글 -->
<!-- - **Shift + ?** : 에디터 컨트롤 표시 -->

### 효율적인 작업을 위한 팁
- 각 패널의 기능을 숙지하여 빠른 작업 진행
- 단축키를 활용하여 마우스 조작 최소화
- 일관된 폴더 구조와 명명 규칙 사용
- 정기적인 프로젝트 백업과 버전 관리

더 자세한 내용은 각 섹션별 문서를 참조하세요. 