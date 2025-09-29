---
title: Loading Scenes
---

This page guides you through how to load scenes with code and the different approaches to using scenes in your project.

There are two main approaches to using scenes: completely changing scenes and additively loading scenes.

## Completely Changing Scenes

This is the most commonly used approach by developers, where each scene becomes an independent part of the game. For example, one scene is the title screen, and there's one scene per level.

[Here's an example][switch-scenes-completely-project] where the user can move from the title screen to different levels.

<div className="iframe-container">
    <iframe src="https://playcanv.as/e/p/Q1gKd1ek/"  title="Switching Scenes Completely" allow="camera; microphone; xr-spatial-tracking; fullscreen" allowfullscreen></iframe>
</div>

This is done simply by calling [`SceneRegistry.changeScene`][changescene-api] with the name of the scene.

```javascript
this.app.scenes.changeScene('Some Scene Name');
```

If the scene data hasn't been loaded yet, this function will:

- Make an asynchronous network request for the new scene data.
- When the scene data is loaded, it deletes all child entities from the application root node (destroying the existing scene hierarchy).
- Since the scene data is now loaded, it calls `loadSceneSettings` synchronously.
- Since the scene data is now loaded, it calls `loadSceneHierarchy` synchronously.

If you want to know when the scene has loaded or if an error occurred, you should provide a callback:

```javascript
this.app.scenes.changeScene('Some Scene Name', (err, loadedSceneRootEntity) {
    if (err) {
        console.error(err);
    } else {
        // Scene hierarchy has been successfully loaded
    }
});
```

To avoid the asynchronous network request for new scene data at the time `changeScene` is called, you can call [`SceneRegistry.loadSceneData`][loadscenedata-api] beforehand, which makes `changeScene` a synchronous call that immediately calls `loadSceneSettings` and `loadSceneHierarchy`.

A common use case is knowing that the user will load level 2 when level 1 is complete. In this case, you can load the scene data for level 2 while the user is in level 1. When level 1 is complete, you can immediately enter level 2 without waiting for data to load.

## Additively Loading Scenes {#loading-scenes-additively}

Instead of completely changing scenes, you can load multiple scene hierarchies additively. A common use case for this is splitting up a large world so that it can be loaded over time instead of loading everything at once at startup.

A variation of the above is where each scene represents a section of the world that gets loaded and destroyed as the player moves around. The system will only load the nearest connected sections of the world and their associated assets while destroying and unloading assets for sections that are not needed. This helps with resource management like memory and VRAM.

Sometimes developers use this approach to have certain code and entities created and globally accessible throughout the entire game session before the actual game loads.

[Below is a simple example of additively loading scenes][additively-loading-scenes-project], where the UI in the top-left is the 'main' scene and other scene hierarchies are loaded/destroyed.

<div className="iframe-container">
    <iframe src="https://playcanv.as/e/p/cjBInud1/" title="Additively Loading Scenes" allow="camera; microphone; xr-spatial-tracking; fullscreen" allowfullscreen></iframe>
</div>

Note that you cannot load multiple instances of a scene hierarchy at once. This is because entities are assigned unique GUIDs in the editor. Attempting to load multiple instances of the same scene hierarchy at once will cause GUID conflicts where each entity should be unique.

If you need multiple instances of an entity hierarchy, use templates as they are assigned unique GUIDs when instantiated.

## Understanding How Scenes Work

To use scenes effectively, it's important to understand how they are loaded when used in your project. This section explains in detail how scenes are structured and loaded.

Scenes are separate from [assets][assets] and have different properties and APIs for loading.

Scenes are represented as [scene registry items][sceneregistryitem-api] stored in the [scene registry][sceneregistry-api], which can be accessed through the [application][application-sceneregistry-api] object. Through the scene registry, you can find scene registry items by the name of the scene in the editor and use them to load scene hierarchies or settings.

:::note

The [application root node](https://manual.oasisserver.link/engine/classes/AppBase.html#root) is not the scene hierarchy root entity that appears in the scene in the editor, which by default has the name 'Root'. The scene hierarchy root entity becomes a child of the application root node.

:::

There are two APIs for loading scene hierarchies and settings:

- [`SceneRegistry.loadSceneHierarchy`][loadscenehierarchy-api] - Loads the scene hierarchy
- [`SceneRegistry.loadSceneSettings`][loadscenesettings-api] - Loads settings from the scene

Here's code to load a scene hierarchy or settings:

```javascript
// Find scene registry item by scene name
const sceneItem = this.app.scenes.find('Some Scene Name');

// Load scene hierarchy with callback when complete
this.app.scenes.loadSceneHierarchy(sceneItem, function (err, loadedSceneRootEntity) {
    if (err) {
        console.error(err);
    } else {
        // Scene hierarchy has been successfully loaded
    }
});

// Load scene settings with callback when complete
this.app.scenes.loadSceneSettings(sceneItem, function (err) {
    if (err) {
        console.error(err);
    } else {
        // Scene settings have been successfully loaded
    }
});
```

Both `loadSceneHierarchy` and `loadSceneSettings` behave similarly in how they fetch the data needed to load the hierarchy or settings.

When the function is called, it performs an asynchronous network request to the server for the scene data. This means there will be a delay between the request to load the scene and the browser completing the network request (depending on network speed, network connection, and scene size). During this time, the application continues to update.

When the network request completes, the engine does the following:

`loadSceneHierarchy`

- Creates entities and components from the loaded scene and adds the hierarchy to the [application root node][application-root-api].
- Calls `initialize` and `postInitialize` functions from the loaded scene's ScriptTypes.
- Calls the callback passed to the `loadSceneHierarchy` function.
- (Optional) In the [callback][loadhierarchycallback-api], the entity representing the loaded scene root is passed as a parameter. You can modify this or reparent it as needed. In the [additively loading scenes](#loading-scenes-additively) example, the scene root is reparented to another entity in the current scene for easier management.

`loadSceneSettings`

- Applies the loaded scene settings to the application.
- Calls the [callback][loadsettingscallback-api] passed to the `loadSceneSettings` function.

By default, `loadSceneHierarchy` always loads additively, and it's up to the developer to remove/destroy existing loaded scenes if they want to completely change scenes.

There are several approaches to this, each with their own advantages and disadvantages:

### Destroying All Children Under the Application Root Node First

This approach has separate steps that make it easy to manage where the currently loaded scene is destroyed before the loading and creation of the new scene.

```javascript
// Find scene registry item by scene name
const sceneItem = this.app.scenes.find('Some Scene Name');

// Destroy all children under application root to remove current loaded scene hierarchy
const rootChildren = this.app.root.children;
while(rootChildren.length > 0) {
    rootChildren[0].destroy();
}

// Load scene hierarchy with callback when complete
this.app.scenes.loadSceneHierarchy(sceneItem, function (err, loadedSceneRootEntity) {
    if (err) {
        console.error(err);
    } else {
        // Scene hierarchy has been successfully loaded
    }
});
```

However, as mentioned above, there is a delay between calling `loadSceneHierarchy` and the scene data actually being loaded. This means the application will render a blank screen for a few frames while waiting for the network request to complete, which leads to the alternative.

### Destroying the Previous Scene Root Entity After the New Scene is Loaded

This means the previous scene hierarchy is destroyed in the callback after the new scene hierarchy has been added to the hierarchy, which ensures the previous scene exists while the scene data is being loaded from the network.

```javascript
// Find scene registry item by scene name
const sceneItem = this.app.scenes.find('Some Scene Name');

// Assume the previous scene hierarchy root entity has the default name 'Root'
const oldSceneRootEntity = this.app.root.findByName('Root');

// Load scene hierarchy with callback when complete
this.app.scenes.loadSceneHierarchy(sceneItem, function (err, loadedSceneRootEntity) {
    if (err) {
        console.error(err);
    } else {
        // Scene hierarchy has been successfully loaded
        oldSceneRootEntity.destroy();
    }
});
```

However, the previous scene will exist in the hierarchy while the new scene's scriptTypes are calling `initialize` and `postInitialize`. This can be problematic if scripts have dependencies or assumptions that the loaded scene hierarchy is the only one. For example, if `initialize` searches for entities by name and the previous scene hierarchy also has entities with the same name. Then the script will have references to entities from the previous scene hierarchy instead of the new scene, which can cause unexpected behavior after the previous scene's hierarchy is destroyed.

To mitigate these potential issues, we provide the [`SceneRegistry.loadSceneData`][loadscenedata-api] API, which allows you to separate scene data loading from scene hierarchy creation.

## Managing Assets in Scenes

A common question about scenes is whether assets used in the scene are loaded as part of the scene load. In OasisW, assets and scenes are separate and must be loaded separately, giving developers great flexibility.

The recommended approach is to tag all assets needed by the scene with the scene name and load the assets first when loading the scene, then start scene loading after all assets are loaded.

For detailed information about asset tags and asset loading, see [this page][asset-tags-loading].

[The example project below][asset-load-for-scene-project] loads assets when loading a scene and unloads them when returning to the main menu.

<div className="iframe-container">
    <iframe src="https://playcanv.as/e/p/SBTfOAeM/" title="Loading scenes and assets" allow="camera; microphone; xr-spatial-tracking; fullscreen" allowfullscreen></iframe>
</div>

[switch-scenes-completely-project]: https://playcanvas.com/project/924351/overview/switch-full-scene-example
[additively-loading-scenes-project]: https://playcanvas.com/project/685077/overview/additive-loading-scenes
<!-- [templates]: /user-manual/editor/templates/ -->
[assets]: /user-manual/assets/
[loadscenehierarchy-api]: https://manual.oasisserver.link/engine/classes/SceneRegistry.html#loadscenehierarchy
[loadscenesettings-api]: https://manual.oasisserver.link/engine/classes/SceneRegistry.html#loadscenesettings
[sceneregistryitem-api]: https://manual.oasisserver.link/engine/classes/SceneRegistryItem.html
[sceneregistry-api]: https://manual.oasisserver.link/engine/classes/SceneRegistry.html
[application-sceneregistry-api]: https://manual.oasisserver.link/engine/classes/AppBase.html#scenes
[loadhierarchycallback-api]: https://manual.oasisserver.link/engine/types/LoadHierarchyCallback.html
[loadsettingscallback-api]: https://manual.oasisserver.link/engine/types/LoadSettingsCallback.html
[application-root-api]: https://manual.oasisserver.link/engine/classes/AppBase.html#root
[loadscenedata-api]: https://manual.oasisserver.link/engine/classes/SceneRegistry.html#loadscenedata
[asset-tags-loading]: /user-manual/assets/preloading-and-streaming/#asset-tags
[asset-load-for-scene-project]: https://playcanvas.com/project/926754/overview/asset-loading-for-scenes-example
[changescene-api]: https://manual.oasisserver.link/engine/classes/SceneRegistry.html#changescene
