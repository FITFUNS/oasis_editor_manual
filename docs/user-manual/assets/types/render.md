---
title: 렌더 (Render)
---

OasisW의 렌더 에셋은 씬에서 **3D 모델의 겉모습을 정의하는 핵심 구성 요소**입니다. 3D 환경에서 객체가 어떻게 그려질지를 결정하는 **메시 데이터와 재질**을 담고 있습니다.

렌더 에셋은 주로 다음 용도로 사용됩니다.

- 3D 모델의 모양과 구조를 정의합니다.
- 모델에 재질을 적용합니다.

## 어디에서 만들어지나요

렌더 에셋은 **직접 만드는 것이 아니라** `.glb`나 `.fbx` 파일을 업로드할 때 자동으로 생성됩니다. 결과 리소스 확장자는 `.glb`입니다. 자세한 과정은 [3D 모델 가져오기](/user-manual/assets/models)를 참고하십시오.

:::note 템플릿과 무엇이 다른가요

[템플릿](/user-manual/assets/types/template)은 *엔티티 계층 구조*를 담고 있고, 렌더 에셋은 *메시 그 자체*를 담고 있습니다. 씬에 모델을 배치할 때는 보통 템플릿을 끌어다 놓고, 렌더 에셋은 [렌더 컴포넌트](/user-manual/scenes/components/render)의 슬롯에 직접 지정할 때 씁니다.

:::

## 관련 문서

- [렌더 컴포넌트](/user-manual/scenes/components/render) — 엔티티에 메시를 표시합니다.
- [재질 (Material)](/user-manual/assets/types/material) — 메시의 표면 표현을 정합니다.
- [3D 모델 가져오기](/user-manual/assets/models)
