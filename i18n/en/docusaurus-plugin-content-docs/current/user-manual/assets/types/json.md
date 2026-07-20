---
title: JSON
---

[JSON](https://en.wikipedia.org/wiki/JSON) (JavaScript Object Notation) is a **lightweight data-interchange format** that is easy for humans to read and write, and easy for machines to parse and generate.

In OasisW, JSON assets are used to store many kinds of structured data. Common use cases include:

- Configuration files
- Data for procedural generation
- Saving game settings
- Level design data

:::note A good way to use it

When you hard-code values such as an enemy's health or movement speed directly in your code, you have to open the code every time you want to change a number. By moving these values out into a JSON asset, you can **change the numbers without touching the code.**

:::

## Accessing JSON Data From a Script

Here is the sequence for accessing the data of a JSON asset from a script.

1. Add the JSON asset to the script as an **attribute**.
2. Access the **asset's resource**, which is the object parsed from the JSON data.

Here is an example.

```javascript
var JsonScript = pc.createScript('jsonScript');

// Define an attribute to hold the JSON asset
JsonScript.attributes.add('jsonAsset', { type: 'asset', assetType: 'json' });

JsonScript.prototype.initialize = function () {
    if (this.jsonAsset) {
        // Get the JSON asset's resource (object)
        const jsonData = this.jsonAsset.resource;

        // Example: read data from the JSON object
        if (jsonData.someDataField) {
            console.log("Data from JSON:", jsonData.someDataField);
        }
    }
};
```

When you attach this script to an entity, an empty slot named `jsonAsset` appears in the inspector. Drag a JSON asset from the Assets Panel onto it to connect them.

:::warning Watch out for syntax errors

JSON fails to parse entirely if even a single comma is out of place. Be careful not to leave a trailing comma after the last item, and remember that comments (`//`) cannot be used in JSON.

:::

## Related Documentation

- [Text](/user-manual/assets/types/text) — Stores plain, unstructured text.
- [Adding a Script](/user-manual/scripting/fundamentals/getting-started) — How to create and attach scripts.
