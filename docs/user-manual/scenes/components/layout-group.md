---
title: 레이아웃 그룹 (Layout Group)
---

레이아웃 그룹 컴포넌트는 엔티티가 자식 요소 컴포넌트의 크기와 위치를 지정할 수 있게 합니다.

자세한 내용은 [레이아웃 그룹][0] 섹션을 참조하세요.

![LayoutGroup component](/img/user-manual/scenes/components/component-layoutgroup.png)

## 속성

| 속성       | 설명 |
|----------------|-------------|
| Orientation    | 레이아웃이 수평 또는 수직으로 실행되어야 하는지 여부입니다. |
| ReverseX       | x축을 따라 자식의 순서를 뒤집습니다. |
| ReverseY       | y축을 따라 자식의 순서를 뒤집습니다. |
| Alignment      | 자식 요소의 수평 및 수직 정렬을 지정합니다. 값은 0에서 1 범위이며, [0, 0]은 왼쪽 하단이고 [1, 1]은 오른쪽 상단입니다. |
| Padding        | 자식을 배치하기 전에 컨테이너 내부에 적용할 패딩입니다. 왼쪽, 하단, 오른쪽, 상단 값으로 지정됩니다. |
| Spacing        | 각 자식 요소 간에 적용할 간격입니다. |
| Width Fitting  | 자식 요소를 배치하고 스케일링할 때 적용할 피팅 로직입니다. |
| Height Fitting | 자식 요소를 배치하고 스케일링할 때 적용할 피팅 로직입니다. |
| Wrap           | 컨테이너 크기를 초과할 때 자식을 새 행/열로 래핑할지 여부입니다. |

## 스크립팅 인터페이스

[스크립트 컴포넌트][2]를 사용하여 레이아웃 그룹 컴포넌트의 속성을 제어할 수 있습니다. 레이아웃 그룹 컴포넌트의 스크립팅 인터페이스는 [여기][3]에 있습니다.

[0]: /user-manual/user-interface/layout-groups
[2]: /user-manual/scenes/components/script
[3]: https://manual.oasisserver.link/engine/classes/LayoutGroupComponent.html
