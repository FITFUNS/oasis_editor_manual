---
title: 요소 (Element)
---

화면 컴포넌트 조상이 있는 계층 구조에서 요소 컴포넌트는 이미지와 텍스트와 같은 2D 컴포넌트로 구성된 사용자 인터페이스를 구축하는 데 사용됩니다. 요소는 앵커와 피벗 포인트와 같은 레이아웃 속성을 제공합니다.

자세한 내용은 [사용자 인터페이스][1] 섹션을 참조하세요.

## 그룹 요소

그룹 요소는 요소 컴포넌트의 레이아웃 속성만 제공합니다

![Group Element](/img/user-manual/scenes/components/component-element-group.png)

## 이미지 요소

이미지 요소는 텍스처 에셋이나 단색을 사용하여 이미지를 표시합니다.

![Image Element](/img/user-manual/scenes/components/component-element-image.png)

## 텍스트 요소

텍스트 요소는 [폰트 에셋][4]을 사용하여 텍스트 문자열을 렌더링합니다.

![Text Element](/img/user-manual/scenes/components/component-element-text.png)

## 공통 컴포넌트 속성

| 속성    | 설명 |
|-------------|-------------|
| Type        | 요소의 유형입니다: Group, Image 또는 Text. |
| Preset      | 레이아웃 프리셋을 선택하면 Anchor와 Pivot 속성이 프리셋 값으로 자동 설정됩니다. |
| Anchor      | 요소가 위치를 계산하는 기준을 결정합니다. 자세한 내용은 [Elements#Anchor][6] 섹션을 참조하세요. |
| Pivot       | 요소의 피벗 포인트가 어디에 있는지 결정합니다. (0, 0)은 왼쪽 하단, (1, 1)은 오른쪽 상단입니다. 자세한 내용은 [Elements#Pivot][7] 섹션을 참조하세요. |
| Size        | 요소의 너비와 높이입니다. 다른 설정에 따라 자동으로 계산될 수 있습니다. |
| Margin      | 요소 가장자리에서 Anchor까지의 거리입니다. Anchor가 분할된 경우(한 축에서 동일하지 않음)에만 사용할 수 있습니다. |
| Use Input   | 활성화되면 이 요소가 입력을 확인하고 입력 관련 이벤트를 발생시키는 요소 목록에 추가됩니다. |
| Layers      | 이 요소를 렌더링할 레이어입니다. 레이어에 대한 자세한 내용은 [여기][8]를 참조하세요. |
| Batch Group | 이 모델이 속한 배치 그룹입니다. |
<!-- 배치에 대한 자세한 내용은 [여기][9]를 참조하세요.  -->


## 이미지 컴포넌트 속성

| 속성 | 설명 |
|----------|-------------|
| Rect     | 표시할 텍스처 에셋의 영역을 정의합니다. |
| Mask     | 이미지 요소를 마스크로 전환합니다. 마스크는 씬에 렌더링되지 않지만, 대신 자식 요소가 이 요소가 렌더링되는 곳에서만 렌더링되도록 제한합니다. |
| Texture  | 표시되는 텍스처 에셋입니다. |
| Color    | 요소에 틴트할 색상입니다. |
| Opacity  | 요소의 투명도입니다. |

## 텍스트 컴포넌트 속성

| 속성    | 설명 |
|-------------|-------------|
| Alignment   | 텍스트가 요소 내에서 어떻게 정렬되는지 결정합니다. (0, 0)은 왼쪽 하단, (1, 1)은 오른쪽 상단입니다. |
| Text        | 표시할 텍스트 문자열입니다. |
| Font Size   | 폰트를 렌더링할 스크린 컴포넌트 픽셀 단위의 크기입니다. |
| Line Height | 새 줄로 이동하기 위한 스크린 컴포넌트 픽셀 단위의 크기입니다. |
| Spacing     | 각 문자 사이의 진행량에 적용할 배수입니다. |
| Font        | 폰트 에셋입니다. |
| Color       | 폰트에 틴트할 색상입니다. |
| Opacity     | 요소의 투명도입니다. |
| Wrap Lines  | 텍스트 줄바꿈을 활성화합니다. 텍스트 요소의 너비를 넘치는 모든 텍스트는 다음 줄로 줄바꿈됩니다. |

[1]: /user-manual/user-interface
[4]: /user-manual/assets/types/font/
[6]: /user-manual/user-interface/elements/#anchor
[7]: /user-manual/user-interface/elements/#pivot
[8]: /user-manual/graphics/layers
[9]: /user-manual/graphics/advanced-rendering/batching
