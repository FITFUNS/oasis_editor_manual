---
title: 레이아웃 그룹 (Layout Group)
---

레이아웃 그룹(Layout Group) 컴포넌트를 엔티티에 붙이면, 그 아래 자식 요소들의 크기와 위치를 자동으로 정리해 줍니다.

더 알아보려면 [레이아웃 그룹][0] 섹션을 참조하세요.

![LayoutGroup component](/img/user-manual/scenes/components/component-layoutgroup.png)

## 속성

| 속성       | 설명 |
|----------------|-------------|
| Orientation    | 자식들을 가로로 늘어놓을지 세로로 늘어놓을지 정합니다. |
| ReverseX       | x축을 따라 자식들의 순서를 거꾸로 뒤집습니다. |
| ReverseY       | y축을 따라 자식들의 순서를 거꾸로 뒤집습니다. |
| Alignment      | 자식 요소들을 가로·세로로 어느 쪽에 맞출지 정합니다. 값은 0에서 1 사이이며, [0, 0]은 왼쪽 아래, [1, 1]은 오른쪽 위입니다. |
| Padding        | 자식들을 배치하기 전에 컨테이너 안쪽에 남겨 둘 여백입니다. 왼쪽, 아래, 오른쪽, 위 순서의 값으로 지정합니다. |
| Spacing        | 자식 요소들 사이에 둘 간격입니다. |
| Width Fitting  | 자식 요소들을 배치하고 가로 크기를 맞출 때 적용할 방식입니다. |
| Height Fitting | 자식 요소들을 배치하고 세로 크기를 맞출 때 적용할 방식입니다. |
| Wrap           | 자식들이 컨테이너 크기를 넘어가면 다음 행이나 열로 넘겨서 배치할지 정합니다. |

## 스크립팅 인터페이스

[스크립트 컴포넌트][2]를 이용하면 코드로 레이아웃 그룹 컴포넌트의 속성을 조절할 수 있습니다. 레이아웃 그룹 컴포넌트의 스크립팅 인터페이스는 [여기][3]에서 확인할 수 있습니다.

[0]: /user-manual/user-interface/layout-groups
[2]: /user-manual/scenes/components/script
[3]: https://manual.oasisserver.link/engine/classes/LayoutGroupComponent.html
