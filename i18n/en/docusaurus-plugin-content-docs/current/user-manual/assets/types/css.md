---
title: CSS
---

A CSS asset holds CSS code. You can create a new CSS asset in the editor, or import one by uploading a file with a `.css` extension.

:::note What is it for

You do not style OasisW's 3D view itself with CSS. A CSS asset is used to define the look of the **HTML-based UI** (scoreboards, menus, pop-ups, etc.) that is overlaid on top of the game. It is often used together with an [HTML asset](/user-manual/assets/types/html).

:::

## Creating and Editing

1. Press the **+** button in the Assets Panel and choose **CSS**. Or drag a `.css` file in.
2. To edit a CSS asset, **right-click** it in the editor and choose **Edit**. You can also press the **EDIT** button in the Inspector.
3. Change the content in the code editor and save.

## Using It From a Script

The resource of a loaded CSS asset is a **plain string**. You can use this string however you like. The most common way to attach it to the document as a style is as follows.

```javascript
// Get the asset from the registry by ID
const asset = this.app.assets.get(32);

// Create the element
const style = document.createElement('style');
style.type = "text/css";
style.textContent = asset.resource || '';
document.head.appendChild(style);

// Update the style when the asset's resource loads/changes
asset.on('load', function() {
    style.innerHTML = asset.resource;
});

// Make sure the asset is loaded
this.app.assets.load(asset);
```

The `32` at the top is the asset's `ID`. Replace it with the actual ID you see in the Inspector. To look it up by name instead of ID, you can use `this.app.assets.find('myfile.css')`.

:::tip About the code

The `asset.on('load', …)` in the middle re-applies the style **when the asset arrives later or its content changes**. The last line, `this.app.assets.load(asset)`, tells the engine to load it now if it has not been loaded yet. This line is essential for assets that have [preloading](/user-manual/assets/preloading-and-streaming) turned off.

:::

## Related Pages

- [HTML](/user-manual/assets/types/html) — the markup asset used alongside it.
- [Adding a script](/user-manual/scripting/fundamentals/getting-started) — create the script that holds the code above.
