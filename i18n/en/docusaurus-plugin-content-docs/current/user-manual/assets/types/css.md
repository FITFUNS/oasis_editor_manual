---
title: CSS
---

CSS assets contain CSS code. You can create a new CSS asset in the editor or upload a file with a .css extension.

To edit a CSS asset, right-click in the editor and select Edit.

The loaded CSS asset resource is a simple string. You can use the string however you want. Here's a common way to add the loaded CSS string to a document:

```javascript
// Get asset from registry by ID
const asset = this.app.assets.get(32);

// Create element
const style = document.createElement('style');
style.type = "text/css";
style.textContent = asset.resource || '';
document.head.appendChild(style);

// Update style when asset's resource is loaded/changed
asset.on('load', function() {
    style.innerHTML = asset.resource;
});

// Ensure asset is loaded
this.app.assets.load(asset);
```
