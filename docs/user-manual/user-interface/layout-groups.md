---
title: 레이아웃 그룹 (Layout Groups)
---

레이아웃 그룹 컴포넌트는 자식 요소들의 위치와 크기를 자동으로 잡아 줍니다. 자식 요소들을 세로 열, 가로 행, 또는 그리드 형태로 나란히 정렬할 수 있습니다. 레이아웃 그룹은 자기 바로 아래의 모든 직접 자식에게 같은 규칙을 적용하는데, 특정 자식 하나만 다르게 하고 싶으면 레이아웃 자식 컴포넌트로 그 규칙을 덮어쓸 수 있습니다.

레이아웃 그룹 컴포넌트로 흔히 쓰이는 배치를 손쉽게 만들 수 있습니다. 예를 들면 [그리드][10], 너비가 고정된 [세로 열][11], 또는 [가로 행][12] 같은 것입니다.

## 레이아웃 그룹 생성 {#creating-a-layout-group}

이미 있는 요소 엔티티에 LayoutGroup 컴포넌트를 추가하면 레이아웃 그룹이 만들어집니다.

![Create Layout Group](/img/user-manual/user-interface/layout-groups/create-layout-group.jpg)

## 레이아웃 그룹 속성 {#layout-group-properties}

### 방향 (Orientation)

`Orientation`을 `Horizontal`로 두면 레이아웃이 왼쪽에서 오른쪽(또는 오른쪽에서 왼쪽)으로 배치됩니다. Vertical로 두면 위에서 아래(또는 아래에서 위)로 배치됩니다.

### 반전 (Reverse)

ReverseX와 ReverseY 속성은 레이아웃 그룹이 채워지는 방향을 정합니다. 기본값은 왼쪽에서 오른쪽, 아래에서 위입니다.

### 정렬 (Alignment)

정렬은 자식 요소들을 레이아웃 그룹의 어느 가장자리에 붙일지를 정합니다. `[0,0]`은 왼쪽 아래에, `[1,1]`은 오른쪽 위에 붙입니다.

### 패딩 (Padding)

패딩은 자식 요소들을 배치하기 전에 레이아웃 그룹 안쪽에 여백을 만들어 줍니다.

### 간격 (Spacing)

간격은 자식 요소들 사이의 벌어진 정도를 정합니다.

### 피팅 (Fitting)

너비 피팅과 높이 피팅 속성은 자식 요소의 너비나 높이를 레이아웃 그룹이 어떻게 조절할지를 정합니다.

**None** 값은 피팅을 하지 않습니다.

**Stretch** 값은 다음 순서에 따라 자식 요소들을 늘려서 컨테이너의 너비나 높이를 채웁니다:

- 각 자식의 fitWidthProportion/fitHeightProportion 값을 모두 더한 뒤, 합이 1이 되도록 정규화합니다.
- 각 자식에게 원래의 자연스러운 너비/높이를 적용합니다.
- 컨테이너에 남는 공간이 있으면, 정규화된 fitWidthProportion/fitHeightProportion 값에 따라 각 자식에게 나눠 줍니다. 단, 각 자식의 maxWidth/maxHeight는 넘지 않습니다.

**Shrink** 값은 다음 순서에 따라 자식 요소들을 줄여서 컨테이너에 맞춥니다:

- 각 자식의 fitWidthProportion/fitHeightProportion 값을 모두 더한 뒤, 합이 1이 되도록 정규화합니다.
- 각 자식에게 원래의 자연스러운 너비/높이를 적용합니다.
- 자식들의 새 총 너비/높이가 컨테이너의 남은 공간보다 크면, 정규화된 fitWidthProportion/fitHeightProportion 값에 비례해 각 자식의 너비/높이를 줄입니다. 단, 각 자식의 minWidth/minHeight보다 더 작아지지는 않습니다.

**Both** 값은 **Stretch**와 **Shrink**를 둘 다 적용합니다.

### 래핑 (Wrap)

래핑 속성은 너비(세로 그룹) 또는 높이(가로 그룹)를 넘치는 자식 요소들을 다음 행이나 열로 넘겨 줍니다. 이 래핑 속성을 이용하면 그리드 형태의 배치를 만들 수 있습니다.

## 레이아웃 자식 (Layout Children)

레이아웃 그룹은 바로 아래의 모든 직접 자식에게 규칙을 적용합니다. 특정 자식만 규칙을 다르게 하고 싶다면 그 자식에 LayoutChild 컴포넌트를 추가하면 됩니다.

![Layout Child](/img/user-manual/user-interface/layout-groups/layout-child-max-width.jpg)

이 예에서 가로 레이아웃은 **Stretch** 너비 피팅을 써서 각 버튼을 컨테이너에 고르게 채우도록 늘립니다. 가운데 버튼에는 `maxWidth` 값이 64로 설정된 Layout Child 컴포넌트가 있어서, 이 버튼만 늘어나지 않습니다.

![Layout Child Setup](/img/user-manual/user-interface/layout-groups/layout-child-setup.jpg)

## 예제 레이아웃 {#example-layouts}

### 세로 리더보드 {#vertical-leaderboard}

![Leaderboard](/img/user-manual/user-interface/layout-groups/leaderboard.jpg)

이 리더보드는 위쪽 가운데에 맞춘 세로 열로 만들었습니다. 너비 피팅 속성으로 각 항목을 전체 너비까지 늘리고, 패딩과 간격 속성으로 칸 사이를 깔끔하게 벌려 두었습니다.

![Leaderboard Setup](/img/user-manual/user-interface/layout-groups/leaderboard-setup.jpg)

### 가로 버튼 {#horizontal-buttons}

![Horizontal Buttons](/img/user-manual/user-interface/layout-groups/horizontal-layout.jpg)

이 버튼 행은 간격과 패딩만 조금 조정한 가로 레이아웃 그룹으로 배치했습니다. 버튼들이 저마다 원래 너비를 지키도록, 너비 피팅과 높이 피팅은 쓰지 않았습니다.

![Horizontal Setup](/img/user-manual/user-interface/layout-groups/horizontal-setup.jpg)

### 그리드 {#grid}

![Grid](/img/user-manual/user-interface/layout-groups/grid-layout.jpg)

이 버튼 행은 래핑을 켠 레이아웃 그룹으로 그리드를 만든 것입니다. 레이아웃 그룹이 붙은 그룹 요소의 너비를 딱 맞는 값(버튼 너비 + 간격)으로 정해 두면, 래핑이 일어나 두 열짜리 그리드가 만들어집니다. 가로 레이아웃이라는 것은 그리드가 열이 아니라 행 방향으로 채워진다는 뜻이며, 정렬 속성을 `[0.5, 1]`로 두어 요소가 하나만 남은 행("느슨한" 요소)이 X축에서 가운데 오도록 했습니다.

![Setup](/img/user-manual/user-interface/layout-groups/grid-setup.jpg)

[10]: /user-manual/user-interface/layout-groups#grid
[11]: /user-manual/user-interface/layout-groups#vertical-leaderboard
[12]: /user-manual/user-interface/layout-groups#horizontal-buttons
