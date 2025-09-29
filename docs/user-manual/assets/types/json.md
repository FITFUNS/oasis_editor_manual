---
title: JSON
---

[JSON](https://en.wikipedia.org/wiki/JSON) (JavaScript Object Notation)은 사람이 읽고 쓰기 쉽고 기계가 파싱하고 생성하기 쉬운 경량 데이터 교환 형식입니다.

OasisW에서 JSON 에셋은 다양한 유형의 구조화된 데이터를 저장하는 데 사용됩니다. 일부 사용 사례는 다음과 같습니다:

- 설정 파일
- 절차적 생성을 위한 데이터
- 게임 설정 저장
- 레벨 디자인 데이터

## 스크립트에서 JSON 데이터 접근

스크립트에서 JSON 에셋의 데이터에 접근하려면:

1. JSON 에셋을 스크립트에 속성으로 추가합니다.
2. JSON 데이터에서 파싱된 객체인 JSON 에셋의 리소스에 접근합니다.

예시:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem  value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class JsonScript extends Script {
    static scriptName = "jsonScript";

    /**
     * @attribute
     * @title Json Asset
     * @type {Asset}
     * @resource json
     */
    jsonAsset = null;

    initialize() {
        if (this.jsonAsset) {
            // Get the JSON asset's resource (an object)
            var jsonData = this.jsonAsset.resource;

            // Example: Accessing data from the JSON object
            if (jsonData.someDataField) {
                console.log("Data from JSON:", jsonData.someDataField);
            }
        }
    }
}
```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var JsonScript = pc.createScript('jsonScript');

// Define an attribute to hold the JSON asset
JsonScript.attributes.add('jsonAsset', { type: 'asset', assetType: 'json' });

JsonScript.prototype.initialize = function () {
    if (this.jsonAsset) {
        // Get the JSON asset's resource (an object)
        const jsonData = this.jsonAsset.resource;

        // Example: Accessing data from the JSON object
        if (jsonData.someDataField) {
            console.log("Data from JSON:", jsonData.someDataField);
        }
    }
};
```

</TabItem>
</Tabs>
