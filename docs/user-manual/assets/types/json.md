---
title: JSON
---

[JSON](https://en.wikipedia.org/wiki/JSON)(JavaScript Object Notation)은 사람이 읽고 쓰기 쉬우면서 기계가 해석하고 만들어 내기도 쉬운 **가벼운 데이터 교환 형식**입니다.

OasisW에서 JSON 에셋은 여러 종류의 구조화된 데이터를 저장하는 데 쓰입니다. 대표적인 사용 사례는 다음과 같습니다.

- 설정 파일
- 절차적 생성을 위한 데이터
- 게임 설정 저장
- 레벨 디자인 데이터

:::note 이렇게 쓰면 좋습니다

적의 체력이나 이동 속도 같은 값을 코드 안에 직접 적어 두면, 수치를 바꿀 때마다 코드를 열어야 합니다. 이런 값을 JSON 에셋으로 빼 두면 **코드를 건드리지 않고 숫자만 고칠 수 있습니다.**

:::

## 스크립트에서 JSON 데이터 접근

스크립트에서 JSON 에셋의 데이터에 접근하는 순서입니다.

1. JSON 에셋을 스크립트에 **속성(attribute)**으로 추가합니다.
2. JSON 데이터에서 파싱된 객체인 **에셋의 리소스**에 접근합니다.

예시입니다.

```javascript
var JsonScript = pc.createScript('jsonScript');

// JSON 에셋을 담을 속성을 정의합니다
JsonScript.attributes.add('jsonAsset', { type: 'asset', assetType: 'json' });

JsonScript.prototype.initialize = function () {
    if (this.jsonAsset) {
        // JSON 에셋의 리소스(객체)를 가져옵니다
        const jsonData = this.jsonAsset.resource;

        // 예시: JSON 객체에서 데이터 꺼내기
        if (jsonData.someDataField) {
            console.log("Data from JSON:", jsonData.someDataField);
        }
    }
};
```

이 스크립트를 엔티티에 붙이면 인스팩터에 `jsonAsset`이라는 빈 슬롯이 생깁니다. 여기에 에셋 패널의 JSON 에셋을 끌어다 놓으면 연결됩니다.

:::warning 문법 오류를 조심하십시오

JSON은 쉼표 하나만 어긋나도 전체를 읽지 못합니다. 마지막 항목 뒤에 쉼표를 남기지 않도록 주의하시고, 주석(`//`)은 JSON에서 쓸 수 없다는 점도 기억하십시오.

:::

## 관련 문서

- [텍스트 (Text)](/user-manual/assets/types/text) — 구조가 없는 일반 텍스트를 저장합니다.
- [스크립트 추가하기](/user-manual/scripting/fundamentals/getting-started) — 스크립트를 만들고 붙이는 방법입니다.
