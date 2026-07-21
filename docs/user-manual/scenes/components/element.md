---
title: 요소 (Element)
---

요소(Element) 컴포넌트는 화면(Screen) 컴포넌트 아래에 놓여서, 이미지나 텍스트 같은 2D 조각들을 모아 화면 위의 사용자 인터페이스(UI)를 만드는 데 쓰입니다. 요소는 화면 어디에 붙이고 어느 지점을 기준으로 놓을지 같은 배치용 속성을 제공합니다.

더 알아보려면 [사용자 인터페이스][1] 섹션을 참조하세요.

## 그룹 요소

그룹 요소는 아무것도 그리지 않고, 요소 컴포넌트의 배치 관련 속성만 제공합니다. 여러 요소를 묶어서 함께 배치할 때 사용합니다.

![Group Element](/img/user-manual/scenes/components/component-element-group.png)

## 이미지 요소

이미지 요소는 텍스처 에셋(그림 파일)이나 단색을 화면에 그려서 이미지를 보여 줍니다.

![Image Element](/img/user-manual/scenes/components/component-element-image.png)

## 텍스트 요소

텍스트 요소는 [폰트 에셋][4]을 이용해 글자를 화면에 그려 줍니다.

![Text Element](/img/user-manual/scenes/components/component-element-text.png)

## 공통 컴포넌트 속성

| 속성    | 설명 |
|-------------|-------------|
| Type        | 요소의 종류입니다. Group, Image, Text 중 하나입니다. |
| Preset      | 미리 정해 둔 배치 형태를 고르면 Anchor와 Pivot 값이 그 형태에 맞게 자동으로 채워집니다. |
| Anchor      | 요소가 화면의 어느 지점을 기준으로 자기 위치를 잡는지 정합니다. 자세한 내용은 [Elements#Anchor][6] 섹션을 참조하세요. |
| Pivot       | 요소 자체의 기준점이 어디인지 정합니다. (0, 0)은 왼쪽 아래, (1, 1)은 오른쪽 위입니다. 자세한 내용은 [Elements#Pivot][7] 섹션을 참조하세요. |
| Size        | 요소의 가로와 세로 크기입니다. 다른 설정에 따라 자동으로 계산되기도 합니다. |
| Margin      | 요소의 가장자리에서 Anchor까지의 거리입니다. Anchor가 양쪽으로 나뉘어 있을 때(한 축에서 두 값이 서로 다를 때)만 사용할 수 있습니다. |
| Use Input   | 켜면 이 요소가 입력을 감지하고 입력 관련 이벤트를 발생시키는 대상 목록에 들어갑니다. |
| Layers      | 이 요소를 그릴 레이어입니다. 레이어에 대한 자세한 내용은 [여기][8]를 참조하세요. |
| Batch Group | 이 모델이 속한 배치 그룹입니다. |
<!-- 배치에 대한 자세한 내용은 [여기][9]를 참조하세요.  -->


## 이미지 컴포넌트 속성

| 속성 | 설명 |
|----------|-------------|
| Rect     | 텍스처 에셋에서 실제로 보여 줄 부분(영역)을 지정합니다. |
| Mask     | 이미지 요소를 마스크로 바꿉니다. 마스크 자체는 화면에 그려지지 않고, 대신 자식 요소가 이 요소와 겹치는 부분에서만 보이도록 잘라 줍니다. |
| Texture  | 화면에 보여 줄 텍스처 에셋입니다. |
| Color    | 요소에 입힐 색(틴트)입니다. |
| Opacity  | 요소가 얼마나 불투명한지(투명도)입니다. |

## 텍스트 컴포넌트 속성

| 속성    | 설명 |
|-------------|-------------|
| Alignment   | 텍스트를 요소 안에서 어느 쪽으로 맞출지 정합니다. (0, 0)은 왼쪽 아래, (1, 1)은 오른쪽 위입니다. |
| Text        | 화면에 보여 줄 글자 내용입니다. |
| Font Size   | 스크린 컴포넌트 픽셀 단위로 잰 글자 크기입니다. |
| Line Height | 다음 줄로 내려갈 때의 줄 간격으로, 스크린 컴포넌트 픽셀 단위입니다. |
| Spacing     | 글자와 글자 사이 간격에 곱해 줄 배수입니다. |
| Font        | 사용할 폰트 에셋입니다. |
| Color       | 글자에 입힐 색(틴트)입니다. |
| Opacity     | 요소가 얼마나 불투명한지(투명도)입니다. |
| Wrap Lines  | 줄바꿈을 켭니다. 텍스트 요소의 너비를 넘어가는 글자는 자동으로 다음 줄로 내려갑니다. |

[1]: /user-manual/user-interface
[4]: /user-manual/assets/types/font/
[6]: /user-manual/user-interface/elements/#anchor
[7]: /user-manual/user-interface/elements/#pivot
[8]: /user-manual/graphics/layers
[9]: /user-manual/graphics/advanced-rendering/batching
