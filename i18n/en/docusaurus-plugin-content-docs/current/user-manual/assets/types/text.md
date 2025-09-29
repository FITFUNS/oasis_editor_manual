---
title: Text
---

The Text asset type in OasisW is used to store general text data. It's versatile and can be used for various purposes such as storing dialogue, configuration data, or other text information.

## Accessing Text Data in Scripts

To access data from a text asset in a script:

1. Add the text asset as an attribute to your script.
2. Access the resource of the text asset, which is the parsed string from the text file.

Example:

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
