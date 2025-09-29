---
title: HTML
---

HTML assets contain HTML code. The code can be a complete HTML page or partial HTML. You can create a new HTML asset in the editor or upload a file with a .html extension.

To edit an HTML asset, right-click in the editor and select Edit.

The loaded HTML asset is a simple string. You can use that string however you want - here's a common way to add HTML to a document:

```javascript
// Get asset from registry by ID
const asset = this.app.assets.get(32);

// Create element
const div = document.createElement('div');
div.innerHTML = asset.resource || '';
document.body.appendChild(div);

// Update element's HTML when asset resource is loaded/changed
asset.on('load', function() {
    div.innerHTML = asset.resource;
});

// Ensure asset is loaded
this.app.assets.load(asset);
```
