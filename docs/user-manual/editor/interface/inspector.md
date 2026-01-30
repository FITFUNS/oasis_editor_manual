---
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

## 컴포넌트 추가

![Inspector](/img/usage-guide/7_2_component.png)

- 인스팩터 뷰 하단의 **Add Component** 버튼을 통해 2D, 3D, Audio, Physics, Script 등 다양한 컴포넌트를 엔티티에 추가할 수 있습니다.
- 추가된 컴포넌트는 즉시 씬에 반영되며, 설정 값 변경 시 실시간으로 결과를 확인할 수 있습니다.
- 각 컴포넌트의 세부 기능 및 사용 방법은 [**컴포넌트**](/user-manual/scenes/components) 에서 확인할 수 있습니다.