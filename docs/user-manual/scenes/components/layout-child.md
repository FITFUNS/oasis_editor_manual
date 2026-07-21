---
title: 레이아웃 자식 (Layout Child)
---

레이아웃 자식(Layout Child) 컴포넌트를 요소에 붙이면, 레이아웃 그룹이 정해 놓은 기본 배치 방식을 그 요소만 따로 바꿀 수 있습니다.

더 알아보려면 [레이아웃 그룹][0] 섹션을 참조하세요.

![LayoutChild component](/img/user-manual/scenes/components/component-layoutchild.png)

## 속성

| 속성              | 설명 |
|-----------------------|-------------|
| Min Width             | 요소가 가질 수 있는 가장 작은 너비를 정합니다. |
| Min Height            | 요소가 가질 수 있는 가장 작은 높이를 정합니다. |
| Max Width             | 요소가 가질 수 있는 가장 큰 너비를 정합니다. |
| Max Height            | 요소가 가질 수 있는 가장 큰 높이를 정합니다. |
| Fit Width Proportion  | 레이아웃 그룹이 늘리기 또는 줄이기로 설정된 경우, 남는 가로 공간 중 이 요소가 가져갈 몫의 비율입니다. |
| Fit Height Proportion | 레이아웃 그룹이 늘리기 또는 줄이기로 설정된 경우, 남는 세로 공간 중 이 요소가 가져갈 몫의 비율입니다. |
| Exclude from Layout   | 배치를 계산할 때 이 요소를 아예 빼고 무시합니다. |

## 스크립팅 인터페이스

[스크립트 컴포넌트][2]를 이용하면 코드로 레이아웃 자식 컴포넌트의 속성을 조절할 수 있습니다. 레이아웃 자식 컴포넌트의 스크립팅 인터페이스는 [여기][3]에서 확인할 수 있습니다.

[0]: /user-manual/user-interface/layout-groups
[2]: /user-manual/scenes/components/script
[3]: https://manual.oasisserver.link/engine/classes/LayoutChildComponent.html
