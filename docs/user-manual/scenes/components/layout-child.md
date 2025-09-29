---
title: 레이아웃 자식 (Layout Child)
---

레이아웃 자식 컴포넌트는 레이아웃 그룹 컴포넌트에 의해 제어되는 요소가 레이아웃 그룹의 기본 동작을 재정의할 수 있게 합니다.

자세한 내용은 [레이아웃 그룹][0] 섹션을 참조하세요.

![LayoutChild component](/img/user-manual/scenes/components/component-layoutchild.png)

## 속성

| 속성              | 설명 |
|-----------------------|-------------|
| Min Width             | 요소가 렌더링될 수 있는 최소 너비를 설정합니다. |
| Min Height            | 요소가 렌더링될 수 있는 최소 높이를 설정합니다. |
| Max Width             | 요소가 렌더링될 수 있는 최대 너비를 설정합니다. |
| Max Height            | 요소가 렌더링될 수 있는 최대 높이를 설정합니다. |
| Fit Width Proportion  | 레이아웃 그룹이 늘리기 또는 줄이기로 설정된 경우 요소가 차지할 추가 공간의 비율입니다. |
| Fit Height Proportion | 레이아웃 그룹이 늘리기 또는 줄이기로 설정된 경우 요소가 차지할 추가 공간의 비율입니다. |
| Exclude from Layout   | 레이아웃을 계산할 때 이 요소를 완전히 무시합니다. |

## 스크립팅 인터페이스

[스크립트 컴포넌트][2]를 사용하여 레이아웃 자식 컴포넌트의 속성을 제어할 수 있습니다. 레이아웃 자식 컴포넌트의 스크립팅 인터페이스는 [여기][3]에 있습니다.

[0]: /user-manual/user-interface/layout-groups
[2]: /user-manual/scenes/components/script
[3]: https://manual.oasisserver.link/engine/classes/LayoutChildComponent.html
