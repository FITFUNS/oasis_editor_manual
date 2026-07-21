---
title: 텍스트 요소 (Text Elements)
---

텍스트 요소는 [폰트 에셋][1]을 이용해 글자를 화면에 보여줄 때 사용합니다.

## 텍스트 (Text)

텍스트 요소에는 보여줄 글을 적어 넣는 문자열 필드가 있습니다. 이 필드 안에서 줄을 바꾸고 싶으면 `Shift+Enter`를 누르세요.

:::tip

텍스트 요소는 글자 하나하나를 사각형(쿼드) 한 개로 그려서 화면에 표시합니다. 그래서 텍스트 속성을 바꾸면 요소의 메시가 다시 만들어집니다. 여기에 약간의 성능 부담이 있긴 하지만, 요소가 지나치게 많지만 않다면 매 프레임 텍스트 내용을 바꿔도 문제없습니다.

:::

### 텍스트 마크업 (Text Markup)

텍스트 요소는 글의 일부분에만 다른 색을 입힐 수 있는 간단한 마크업 문법을 지원합니다. 다음 예를 보세요:

```none
[color="#ff0000"]Red[/color], [color="#00ff00"]green[/color] and [color="#0000ff"]blue[/color].
```

텍스트 요소의 기본 색이 흰색이라고 하면, 위 문장은 이렇게 표시됩니다:

![Text Markup](/img/user-manual/user-interface/text-element/text-markup.png)

:::tip

마크업 문법을 쓰려면 먼저 텍스트 요소에서 이 기능을 켜 두어야 합니다. API로 켜는 방법은 다음과 같습니다:

```javascript
entity.element.enableMarkup = true;
```

또는 에디터에서 켤 수도 있습니다:

![Enable Markup](/img/user-manual/user-interface/text-element/enable-markup.png)

:::

<!-- ## 현지화 (Localization)

텍스트 요소의 텍스트를 현지화하려면 'Localized' 체크박스를 선택할 수 있습니다. 이 기능이 활성화되면 텍스트 대신 현지화 에셋에서 현지화된 텍스트를 가져오는 데 사용될 텍스트 요소의 현지화 키를 지정합니다.

현지화에 대한 자세한 내용은 [여기][11]에서 확인하세요. -->

## 자동 크기 조정 (Auto-size)

텍스트 요소는 기본적으로 글 내용에 맞춰 너비와 높이를 스스로 맞추도록 되어 있습니다. 이 기능을 끄고 에디터 패널에서 요소의 너비와 높이를 직접 정할 수도 있습니다.

![Auto Size](/img/user-manual/user-interface/text-element/auto-size.png)

:::note

글자 한 줄의 높이는 폰트에서 가장 큰 글자를 기준으로 정해집니다. 어떤 글자가 들어오든 줄 높이가 늘 같아야, 내용에 따라 글자 위치가 흔들리지 않기 때문입니다.

:::

## 정렬 (Alignment)

텍스트 요소에는 위치를 잡는 데 도움이 되는 정렬 기능이 하나 더 있습니다. 워드 프로세서 같은 프로그램에서 정렬을 써 봤다면 익숙할 것입니다. 다만 여기서는 정해진 몇 가지 옵션 대신, 직접 바꿀 수 있는 값을 노출합니다. 정렬은 0과 1 사이의 두 값 `[X, Y]`로 이루어집니다. `[0,0]`은 왼쪽 아래, `[0.5,0.5]`는 가운데, `[1,1]`은 오른쪽 위 정렬입니다.

![Top Left](/img/user-manual/user-interface/text-element/alignment-bottom-left.png)

![Centered](/img/user-manual/user-interface/text-element/alignment-centered.png)

![Bottom Right](/img/user-manual/user-interface/text-element/alignment-top-right.png)

## 폰트 크기 및 줄 높이 (Font Size & Line Height)

폰트 크기 속성은 글자가 화면 컴포넌트 픽셀 기준으로 얼마나 크게 그려질지를 정합니다. 줄 높이는 글에 줄바꿈이 있을 때 다음 줄로 얼마나 아래로 내려갈지를 화면 컴포넌트 픽셀 단위로 정합니다.

기본값은 폰트 크기와 줄 높이가 같습니다:

![Font Size Line Equal](/img/user-manual/user-interface/text-element/font-line-equal.png)

줄 간격을 넓히고 싶으면 줄 높이를 키우세요:

![Font Size Line Spaced](/img/user-manual/user-interface/text-element/font-line-spaced.png)

## 간격 (Spacing)

간격 속성은 글자와 글자 사이의 거리를 넓혀 줍니다. 폰트는 글자마다 커서를 앞으로 얼마나 옮기는 게 가장 알맞은지를 정해 두는데, 간격 속성은 그 거리에 곱해지는 배수입니다.

![Spacing](/img/user-manual/user-interface/text-element/spacing.png)

## 틴팅 (Tinting)

색상 속성을 쓰면 원하는 색으로 글자에 색을 입힐(틴팅) 수 있습니다.

![Tinted](/img/user-manual/user-interface/text-element/tinted.png)

## 투명도 (Transparency)

불투명도 속성을 쓰면 글자가 얼마나 투명하게 보일지 정할 수 있습니다.

![Transparent](/img/user-manual/user-interface/text-element/transparent.png)

[1]: /user-manual/assets/types/font
[11]: /user-manual/user-interface/localization
