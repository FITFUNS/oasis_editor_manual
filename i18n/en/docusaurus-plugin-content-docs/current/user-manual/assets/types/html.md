---
title: HTML
---

An HTML asset holds HTML code. The code can be a **full HTML page** or just **a fragment**. You can create a new HTML asset in the editor or upload a file with the `.html` extension.

To edit an HTML asset, **right-click** it in the editor and select **Edit**.

## Using It From a Script

A loaded HTML asset is **just a string**. You can use that string however you like. The most common way to attach it to the document is as follows.

```javascript
// Get the asset from the registry by ID
const asset = this.app.assets.get(32);

// Create an element
const div = document.createElement('div');
div.innerHTML = asset.resource || '';
document.body.appendChild(div);

// When the asset resource loads/changes,
// update the element's HTML
asset.on('load', function() {
    div.innerHTML = asset.resource;
});

// Make sure the asset is loaded
this.app.assets.load(asset);
```

`32` is the asset's `ID`, so replace it with the actual value you see in the inspector.

:::tip Pairing with CSS

The HTML you attach this way is a **regular web element overlaid on top of the game view**. To refine its appearance, add a [CSS asset](/user-manual/assets/types/css) to the document the same way. It's a handy combination for building UI unrelated to 3D, such as scoreboards or menus.

:::

:::warning Be careful

Because HTML elements float on top of the 3D view, they **can intercept mouse clicks.** If your game controls stop responding, an overlaid element may be the cause. When needed, let clicks pass through with CSS `pointer-events: none`.

:::

## Related Documentation

- [CSS](/user-manual/assets/types/css) — Defines the appearance of the HTML.
- [User Interface](/user-manual/user-interface) — The engine's built-in UI system.
