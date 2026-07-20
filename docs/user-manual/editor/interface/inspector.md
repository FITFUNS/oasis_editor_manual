---
title: Inspector
sidebar_label: 인스팩터
---

# Inspector

인스팩터 뷰는 지금 고른 오브젝트의 속성과 컴포넌트를 살펴보고 바꾸는 곳입니다.

![Inspector](/img/usage-guide/7_1_inspector.png)

## 선택 항목에 따른 Inspector 뷰 종류

무엇을 골랐는지에 따라 인스팩터가 알맞은 형태로 바뀝니다.

- **Entity/Component Inspector**: 엔티티와 컴포넌트의 속성을 바꿉니다.
- **Texture Inspector**: 텍스처 관련 속성을 바꿉니다.
- **Material Inspector**: 재질 속성을 바꿉니다.
- **Cubemap Inspector**: 큐브맵 속성을 바꿉니다.

## 속성 값 변경

- 속성 값을 바꿔서 엔티티가 어떻게 움직일지 정합니다.  
  예) Model 컴포넌트에서 보여줄 모델을 고르거나, 조명의 색을 정할 수 있습니다.

- 글자나 숫자처럼 간단한 속성은 텍스트 필드나 슬라이더로 조절합니다.  
- 조금 특별한 방식으로 입력해야 하는 속성도 있습니다.  
  예) 에셋을 고를 때는 Asset 뷰에서 쓸 수 있는 에셋을 밝게 표시해 줍니다.

- 뷰포트에서 바로 만질 수 있는 값도 있습니다.  
  예) Translate, Rotate, Scale 값은 기즈모를 끌어서 바꿀 수 있습니다.

## 컴포넌트 추가

![Inspector](/img/usage-guide/7_2_component.png)

- 인스팩터 뷰 아래쪽의 **Add Component** 버튼으로 2D, 3D, Audio, Physics, Script 등 여러 컴포넌트를 엔티티에 붙일 수 있습니다.
- 붙인 컴포넌트는 곧바로 씬에 나타나고, 설정을 바꾸면 그 결과를 실시간으로 확인할 수 있습니다.
- 각 컴포넌트의 자세한 기능과 쓰는 방법은 [**컴포넌트**](/user-manual/scenes/components) 에서 볼 수 있습니다.
