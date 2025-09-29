---
title: 폰트 (Font)
---

폰트 에셋은 사용자가 포함하기로 선택한 폰트의 모든 문자를 포함하는 이미지와 각 문자가 어떻게 표시되어야 하는지에 대한 관련 데이터를 포함합니다. 폰트 에셋은 Text 유형의 [요소][1] 컴포넌트를 사용하여 텍스트를 렌더링하는 데 사용됩니다. 텍스트를 렌더링하려면 엔티티에 요소 컴포넌트를 추가하고 유형을 Text로 설정한 다음 폰트 에셋을 요소 컴포넌트의 폰트 슬롯으로 드래그 앤 드롭하세요.

<!-- You can create a Font asset by uploading a font file ending in `.ttf`, `.ttc`, `.otf` or `.dfont`. We convert the uploaded font to a multi-channel signed distance field. This makes a font keep its details at various sizes so you only need to upload one font and use the same one for every size you want to display. The technique might work better for some fonts than others. -->

## 폰트 생성

OasisW 에디터 인터페이스에서 직접 새 폰트 에셋을 만들 수 있습니다. 에셋 패널의 에셋 생성 메뉴를 사용하세요.

:::warning 참고

폰트 업로드 기능은 추후 지원 예정입니다.

:::

![폰트 추가](/img/user-manual/assets/fonts/add-font.png)

에디터에서 폰트 에셋에 대해 편집할 수 있는 속성들입니다:

![폰트 에셋](/img/user-manual/assets/fonts/font.png)

## 속성

### 강도

강도는 부호 거리 필드에서 읽은 값을 부스트하는 데 사용되며, 0은 부스트 없음, 1은 최대 부스트입니다. 폰트가 기본 강도로 깨끗하고 부드러운 가장자리로 렌더링되지 않거나 작은 폰트 크기에서 폰트를 렌더링하는 경우 유용할 수 있습니다.

<!-- ## Character Presets

Click on a preset to include its characters to the Font asset. Clicking on a preset will add the characters to the existing selection.

## Custom Character Range

If you want to include a specific range of characters to the Font asset, enter the range in Hex and click the Plus icon to add the range to the character selection.

## Font

### Characters

The characters that should be included in the Font asset. If you only need numbers for example, there is no need to include all the other characters of the Font. This is useful to keep Font assets small. Please note that some characters may not exist in the uploaded font.

## Process Font

Click on the Process Font button after you make changes to the Font asset in order to generate a new version. -->

[1]: /user-manual/scenes/components/element/
