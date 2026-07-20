---
title: Text
---

The Text asset type in OasisW is used to store **plain text data**. It is versatile and can be used for many purposes, such as storing dialogue, configuration data, or any other textual information.

:::note How is it different from JSON

A [JSON asset](/user-manual/assets/types/json) is **parsed into an object** the moment it loads, whereas a Text asset comes in **as a raw string**. Use JSON for structured data, and Text for long passages or free-form notes.

:::

## Accessing text data from a script

To access the data of a Text asset from a script:

1. Add the Text asset to the script as an **attribute**.
2. Access the **asset's resource**, which is the string read from the text file.

For example:

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

When you attach this script to an entity, a `textAsset` slot appears in the Inspector. Drag your Text asset onto it.

## Creating and editing

1. Click the **+** button in the Assets panel and choose **Text**. Alternatively, upload a `.txt` file.
2. Right-click and choose **Edit** to change the contents.

## Related

- [JSON](/user-manual/assets/types/json) — stores structured data.
- [Adding a script](/user-manual/scripting/fundamentals/getting-started)
