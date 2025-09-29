---
title: 텍스트 요소 (Text Elements)
---

텍스트 요소는 [폰트 에셋][1]을 사용하여 텍스트 문자열을 표시하는 데 사용됩니다.

## 텍스트 (Text)

텍스트 요소에는 표시될 텍스트를 입력할 수 있는 문자열 필드가 포함되어 있습니다. 문자열 필드에서 새 줄 문자를 입력하려면 `Shift+Enter`를 사용하세요.

:::tip

텍스트 요소는 문자열의 각 문자에 대해 단일 쿼드를 사용하여 화면에 렌더링됩니다. 텍스트 속성을 변경하면 요소의 메시를 다시 생성합니다. 이에 대한 성능 영향이 있지만, 매 프레임마다 합리적인 수의 요소에 대해 텍스트 내용을 변경하는 데는 문제가 없어야 합니다.

:::

### 텍스트 마크업 (Text Markup)

텍스트 요소는 텍스트의 특정 부분에 다른 색상을 적용할 수 있는 간단한 마크업 구문을 지원합니다. 다음 예제를 살펴보세요:

```none
[color="#ff0000"]Red[/color], [color="#00ff00"]green[/color] and [color="#0000ff"]blue[/color].
```

텍스트 요소의 기본 색상이 흰색이라고 가정하면, 다음과 같이 렌더링됩니다:

![Text Markup](/img/user-manual/user-interface/text-element/text-markup.png)

:::tip

텍스트 요소에서 마크업 구문 지원을 사전에 활성화해야 합니다. API를 통해 이를 수행할 수 있습니다:

```javascript
entity.element.enableMarkup = true;
```

또는 에디터에서 활성화할 수 있습니다:

![Enable Markup](/img/user-manual/user-interface/text-element/enable-markup.png)

:::

<!-- ## 현지화 (Localization)

텍스트 요소의 텍스트를 현지화하려면 'Localized' 체크박스를 선택할 수 있습니다. 이 기능이 활성화되면 텍스트 대신 현지화 에셋에서 현지화된 텍스트를 가져오는 데 사용될 텍스트 요소의 현지화 키를 지정합니다.

현지화에 대한 자세한 내용은 [여기][11]에서 확인하세요. -->

## 자동 크기 조정 (Auto-size)

기본적으로 텍스트 요소는 텍스트 문자열에 맞게 너비와 높이를 자동으로 조정하도록 설정되어 있습니다. 이를 비활성화하고 에디터 패널에서 요소의 높이와 너비를 직접 지정할 수 있습니다.

![Auto Size](/img/user-manual/user-interface/text-element/auto-size.png)

:::note

문자의 높이는 폰트에 있는 가장 큰 문자에 의해 결정됩니다. 문자열의 내용에 따라 문자열 위치가 변경되는 것을 피하기 위해 모든 문자에 대해 동일합니다.

:::

## 정렬 (Alignment)

텍스트 요소에는 위치 지정을 돕는 추가 도구인 정렬이 있습니다. 워드 프로세서와 같은 도구에서 이 속성이 어떻게 작동하는지 알고 계실 것입니다. 이 경우 사전 설정보다는 변경할 수 있는 변수를 노출합니다. 정렬은 0과 1 사이의 두 값 `[X, Y]`로 구성됩니다. `[0,0]`은 왼쪽 아래 정렬, `[0.5,0.5]`는 중앙 정렬, `[1,1]`은 오른쪽 위 정렬입니다.

![Top Left](/img/user-manual/user-interface/text-element/alignment-bottom-left.png)

![Centered](/img/user-manual/user-interface/text-element/alignment-centered.png)

![Bottom Right](/img/user-manual/user-interface/text-element/alignment-top-right.png)

## 폰트 크기 및 줄 높이 (Font Size & Line Height)

폰트 크기 속성은 화면 컴포넌트 픽셀에서 폰트의 렌더링 크기를 설정합니다. 줄 높이는 텍스트에 새 줄 문자가 포함되어 있을 때 아래로 이동할 화면 컴포넌트 픽셀의 거리를 설정합니다.

폰트 크기와 줄 높이가 동일한 것이 기본값입니다:

![Font Size Line Equal](/img/user-manual/user-interface/text-element/font-line-equal.png)

줄 간격을 늘리려면 줄 높이를 증가시키세요:

![Font Size Line Spaced](/img/user-manual/user-interface/text-element/font-line-spaced.png)

## 간격 (Spacing)

간격 속성은 문자열에서 문자 간의 거리를 증가시킵니다. 폰트는 각 문자에 대해 커서를 앞으로 이동할 이상적인 거리를 정의합니다. 간격 속성은 이 거리의 배수입니다.

![Spacing](/img/user-manual/user-interface/text-element/spacing.png)

## 틴팅 (Tinting)

색상 속성을 사용하면 선택한 색상으로 문자열을 틴팅할 수 있습니다.

![Tinted](/img/user-manual/user-interface/text-element/tinted.png)

## 투명도 (Transparency)

불투명도 속성을 사용하면 문자열의 투명도를 설정할 수 있습니다.

![Transparent](/img/user-manual/user-interface/text-element/transparent.png)

[1]: /user-manual/assets/types/font
[11]: /user-manual/user-interface/localization
