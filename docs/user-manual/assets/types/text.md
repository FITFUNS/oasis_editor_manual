---
title: 텍스트 (Text)
---

OasisW의 텍스트 에셋 유형은 일반 텍스트 데이터를 저장하는 데 사용됩니다. 다재다능하며 대화, 설정 데이터 또는 기타 텍스트 정보 저장과 같은 다양한 목적으로 사용할 수 있습니다.

## 스크립트에서 텍스트 데이터 접근

스크립트에서 텍스트 에셋의 데이터에 접근하려면:

1. 텍스트 에셋을 스크립트에 속성으로 추가합니다.
2. 텍스트 파일에서 파싱된 문자열인 텍스트 에셋의 리소스에 접근합니다.

예시:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem  value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class TextScript extends Script {
    static scriptName = "textScript";

    /**
     * @attribute
     * @title Text Asset
     * @type {Asset}
     * @resource text
     */
    textAsset = null;

    initialize() {
        if (this.textAsset) {
            // Get the Text asset's resource (a string)
            var textData = this.textAsset.resource;
            
            // Output the content of the text asset
            console.log('Content of text asset: ', textData);
        }
    }
}
```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var TextScript = pc.createScript('textScript');

// Define a script attribute to hold the text asset
TextScript.attributes.add('textAsset', { type: 'asset', assetType: 'text' });

TextScript.prototype.initialize = function() {
    if (this.textAsset) {
        // Get the Text asset's resource (a string)
        const textData = this.textAsset.resource;
        
        // Output the content of the text asset
        console.log('Content of text asset: ', textData);
    }
};
```

</TabItem>
</Tabs>
