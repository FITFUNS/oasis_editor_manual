---
title: Preloading and Streaming
---

On the web, **how quickly you can start the game** after the page opens matters. If you leave a loading bar up for too long, visitors leave before the game even starts. The OasisW asset system includes several features for refining the loading process and getting your application running as fast as possible.

## Preload

Every asset in your project has a property called `preload`. **The default is on (true).** Assets marked for preloading are all downloaded and made ready *before* the application's initialization phase begins.

In the editor, this appears as a `Preload` checkbox in the Inspector when you select an asset. Click the **?** next to it and the following description appears.

> If true the asset will be loaded during the preload phase of application set up.

Keep any asset that's needed the moment the game starts on preload. That prevents objects and textures from **'popping in'** late after the game has started.

:::warning Should I just turn them all on?

The more assets you mark for preloading, **the longer it takes for the first screen to appear**. It's better to keep on only what's visible at the very start, and turn off assets that don't show up until, say, the second stage.

:::

## Streaming

When an entity in your scene references an asset, a loading request starts **the moment that entity is enabled**. If the entity is active from the start, the request goes out as soon as the application starts.

Every component handles these later-arriving assets without trouble, and works normally once the asset arrives. In this approach, though, you'll often see the **'pop-in'** mentioned earlier. For example, a model appears on screen the moment it loads, even before it has its materials or textures.

## When Are Assets Loaded?

To decide when a given asset will load, work through the following order.

1. If `preload = true`, it loads **before the application starts**. Otherwise, move on below.
2. It loads when an **enabled component on an enabled entity** in the scene hierarchy references it. Loading starts when the entity or component is enabled, or when the asset is assigned to the component. Here, 'the component is enabled' means *the component itself is on, and every entity in the hierarchy above it is on*.
3. An asset **referenced by another asset that's already loaded** loads along with it. When a model loads, the materials it uses load, and the textures those materials use load in turn.

:::note In short

An asset loads if it's marked for preloading, if something enabled on screen is using it, or if an already-loaded asset holds it. If none of the three apply, it doesn't load.

:::

## Asset Tags {#asset-tags}

Often you don't want to watch assets 'pop in' one by one as they arrive. In that case it's better to **fetch all the needed assets as a group in advance, and show them all at once after they've finished**. To do this, you can attach **tags** to assets to form groups.

You attach a tag in the `Tags` field of the Inspector. For example, you might tag every asset used in stage 1 with `level-1`. This approach is only meaningful if the tagged assets have `preload` turned off.

Here's a JavaScript example that loads all assets with a given tag and detects when they've all finished.

```javascript
const assets = this.app.assets.findByTag("level-1");
let count = 0;

for (let i = 0; i < assets.length; i++) {
    assets[i].once("load", function () {
        count++;
        if (count === assets.length) {
            // Asset loading complete
        }
    });
    this.app.assets.load(assets[i]);
}
```

Put this code in a [script](/user-manual/scripting/fundamentals/getting-started) and use it together with a loading screen, and you can show the stage only after all the assets are ready.

## Script Loading Order

Unlike other assets, script assets sometimes have a **load order** that matters — when one script uses something defined in another.

Select a script asset and the Inspector shows a `Loading Order` item and a **MANAGE** button. Clicking it takes you to **SETTINGS › SCRIPTS LOADING ORDER**, where you can adjust the order.

In the same place there's also a `Loading Type` item. Its default is `Asset`, meaning the script is loaded like a regular asset.

## What to Check When Loading Is Slow

- Check that **you don't have too many assets set to preload**. Turn off anything not needed on the first screen.
- Check the **texture resolution**. There's no need to use a 4K texture on an object that appears small on screen.
- Upload **audio as `.mp3` or `.ogg`**. WAV is several times larger.
- For **assets you don't use**, turn on `Exclude` in the Inspector to leave them out of the published build, or delete them.
- **Standardize on GLB for 3D models.** For details, see [Importing 3D Models](/user-manual/assets/models).

## Next

- [Scripting](/user-manual/scripting) — How to work with assets from code.
- [Assets](/user-manual/assets) — Return to the basic asset concepts.
