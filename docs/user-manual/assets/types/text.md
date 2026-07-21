---
title: 텍스트 (Text)
---

OasisW의 텍스트 에셋 유형은 **일반 텍스트 데이터**를 저장하는 데 사용됩니다. 쓰임새가 넓어서 대사, 설정 데이터, 그 밖의 텍스트 정보를 저장하는 등 여러 목적으로 사용할 수 있습니다.

:::note JSON과 무엇이 다른가요

[JSON 에셋](/user-manual/assets/types/json)은 불러오는 순간 **객체로 해석**되지만, 텍스트 에셋은 **문자열 그대로** 들어옵니다. 구조가 있는 데이터라면 JSON이, 긴 문장이나 자유 형식 메모라면 텍스트가 알맞습니다.

:::

## 스크립트에서 텍스트 데이터 접근

스크립트에서 텍스트 에셋의 데이터에 접근하는 순서입니다.

1. 텍스트 에셋을 스크립트에 **속성(attribute)**으로 추가합니다.
2. 텍스트 파일에서 읽어 들인 문자열인 **에셋의 리소스**에 접근합니다.

예시입니다.

```javascript
var TextScript = pc.createScript('textScript');

// 텍스트 에셋을 담을 스크립트 속성을 정의합니다
TextScript.attributes.add('textAsset', { type: 'asset', assetType: 'text' });

TextScript.prototype.initialize = function() {
    if (this.textAsset) {
        // 텍스트 에셋의 리소스(문자열)를 가져옵니다
        const textData = this.textAsset.resource;

        // 텍스트 에셋의 내용을 출력합니다
        console.log('Content of text asset: ', textData);
    }
};
```

이 스크립트를 엔티티에 붙이면 인스팩터에 `textAsset` 슬롯이 나타납니다. 여기에 텍스트 에셋을 끌어다 놓으십시오.

## 만들기와 편집

1. 에셋 패널의 **+** 버튼을 누르고 **Text**를 선택합니다. 또는 `.txt` 파일을 올립니다.
2. 마우스 오른쪽 클릭 후 **편집(Edit)**으로 내용을 고칩니다.

## 관련 문서

- [JSON](/user-manual/assets/types/json) — 구조화된 데이터를 저장합니다.
- [스크립트 추가하기](/user-manual/scripting/fundamentals/getting-started)
