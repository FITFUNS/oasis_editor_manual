---
title: 레이아웃 그룹 (Layout Groups)
---

레이아웃 그룹 컴포넌트는 자식 요소들의 위치와 크기를 자동으로 설정하는 데 사용됩니다. 레이아웃 그룹 컴포넌트는 자식 요소들을 세로 또는 가로 열 또는 그리드로 정렬하는 데 사용할 수 있습니다. 레이아웃 그룹 컴포넌트는 레이아웃 규칙을 모든 직접 자식에게 적용하며, 레이아웃 자식 컴포넌트를 사용하여 단일 자식에 대한 레이아웃 그룹 규칙을 재정의할 수 있습니다.

레이아웃 그룹 컴포넌트는 일반적인 레이아웃을 생성하는 데 사용할 수 있습니다. 예를 들어, [그리드][10], 고정 너비 [세로 열][11], 또는 [가로 행][12] 등입니다.

## 레이아웃 그룹 생성 {#creating-a-layout-group}

기존 요소 엔티티에 LayoutGroup 컴포넌트를 추가하여 레이아웃 그룹을 추가합니다.

![Create Layout Group](/img/user-manual/user-interface/layout-groups/create-layout-group.jpg)

## 레이아웃 그룹 속성 {#layout-group-properties}

### 방향 (Orientation)

레이아웃을 왼쪽에서 오른쪽 또는 오른쪽에서 왼쪽으로 구성하려면 `Orientation`을 `Horizontal`로 설정하세요. 또는 레이아웃을 위에서 아래 또는 아래에서 위로 구성하려면 Vertical로 설정하세요.

### 반전 (Reverse)

ReverseX 및 ReverseY 속성은 레이아웃 그룹이 구성되는 방향을 설정하는 데 사용됩니다. 기본값은 왼쪽에서 오른쪽, 아래에서 위입니다.

### 정렬 (Alignment)

정렬은 자식 요소들을 레이아웃 그룹의 가장자리에 정렬하는 데 사용됩니다. `[0,0]`은 왼쪽 아래에 정렬하고, `[1,1]`은 오른쪽 위에 정렬합니다.

### 패딩 (Padding)

패딩은 자식 요소들을 배치하기 전에 레이아웃 그룹 내부에 공간을 추가합니다.

### 간격 (Spacing)

간격은 각 자식 요소 간의 간격을 결정합니다.

### 피팅 (Fitting)

너비 피팅 및 높이 피팅 속성은 자식 요소의 너비 또는 높이가 레이아웃 그룹에 의해 어떻게 조정될지를 결정합니다.

**None** 값은 피팅을 적용하지 않습니다.

**Stretch** 값은 다음 절차를 사용하여 자식 요소들을 컨테이너의 너비 또는 높이를 채우도록 늘립니다:

- 각 자식의 fitWidthProportion/fitHeightProportion 값을 합산하고 모든 값의 합이 1이 되도록 정규화합니다.
- 각 자식에 대해 자연스러운 너비/높이를 적용합니다.
- 컨테이너에 남은 공간이 있으면 정규화된 fitWidthProportion/fitHeightProportion 값을 기반으로 각 자식에게 분배하되, 각 자식의 maxWidth/maxHeight를 초과하지 않습니다.

**Shrink** 값은 다음 절차를 사용하여 자식 요소들을 컨테이너에 맞도록 축소합니다:

- 각 자식의 fitWidthProportion/fitHeightProportion 값을 합산하고 모든 값의 합이 1이 되도록 정규화합니다.
- 각 자식에 대해 자연스러운 너비/높이를 적용합니다.
- 모든 자식의 새로운 총 너비/높이가 컨테이너의 사용 가능한 공간을 초과하면 정규화된 fitWidthProportion/fitHeightProportion 값을 기반으로 각 자식의 너비/높이를 비례적으로 줄이되, 각 자식의 minWidth/minHeight를 초과하지 않습니다.

**Both** 값은 **Stretch**와 **Shrink**를 모두 적용합니다.

### 래핑 (Wrap)

래핑 속성은 너비(세로 그룹의 경우) 또는 높이(가로 그룹의 경우)를 벗어나는 자식 요소들을 새로운 행 또는 열로 이동시킵니다. 래핑 속성을 사용하여 그리드 기반 레이아웃을 만들 수 있습니다.

## 레이아웃 자식 (Layout Children)

레이아웃 그룹은 모든 직접 자식에게 규칙을 적용합니다. 특정 자식에 대해 이러한 규칙을 재정의하려면 해당 자식에 LayoutChild 컴포넌트를 추가하면 됩니다.

![Layout Child](/img/user-manual/user-interface/layout-groups/layout-child-max-width.jpg)

이 예제에서 가로 레이아웃은 **Stretch** 너비 피팅을 사용하여 각 버튼을 컨테이너에 균등하게 맞도록 늘립니다. 중앙 버튼은 `maxWidth` 값이 64로 설정된 Layout Child 컴포넌트를 가지므로 늘어나지 않습니다.

![Layout Child Setup](/img/user-manual/user-interface/layout-groups/layout-child-setup.jpg)

## 예제 레이아웃 {#example-layouts}

### 세로 리더보드 {#vertical-leaderboard}

![Leaderboard](/img/user-manual/user-interface/layout-groups/leaderboard.jpg)

이 리더보드는 상단 중앙에 정렬된 세로 열로 설정되어 있습니다. 너비 피팅 속성을 사용하여 각 항목을 전체 너비로 늘리고, 패딩 및 간격 속성을 사용하여 셀 간에 명확한 간격을 남겨둡니다.

![Leaderboard Setup](/img/user-manual/user-interface/layout-groups/leaderboard-setup.jpg)

### 가로 버튼 {#horizontal-buttons}

![Horizontal Buttons](/img/user-manual/user-interface/layout-groups/horizontal-layout.jpg)

이 버튼 행은 일부 간격 및 패딩 설정을 사용하는 가로 레이아웃 그룹을 사용하여 배치됩니다. 버튼이 올바른 너비에 맞도록 하기 위해 너비 또는 높이 피팅은 사용되지 않습니다.

![Horizontal Setup](/img/user-manual/user-interface/layout-groups/horizontal-setup.jpg)

### 그리드 {#grid}

![Grid](/img/user-manual/user-interface/layout-groups/grid-layout.jpg)

이 버튼 행은 그리드를 설정하기 위해 래핑 설정이 활성화된 레이아웃 그룹을 사용하여 배치됩니다. 레이아웃 그룹이 연결된 그룹 요소는 올바른 너비(버튼 너비 + 간격)로 설정되어 래핑이 두 열 그리드를 생성하도록 강제합니다. 가로 레이아웃은 그리드가 열이 아닌 행으로 채워진다는 의미이며, 정렬 속성은 `[0.5, 1]`로 설정되어 "느슨한" 요소(하나의 요소만 있는 행)가 X축에서 중앙에 정렬됩니다.

![Setup](/img/user-manual/user-interface/layout-groups/grid-setup.jpg)

[10]: /user-manual/user-interface/layout-groups#grid
[11]: /user-manual/user-interface/layout-groups#vertical-leaderboard
[12]: /user-manual/user-interface/layout-groups#horizontal-buttons
