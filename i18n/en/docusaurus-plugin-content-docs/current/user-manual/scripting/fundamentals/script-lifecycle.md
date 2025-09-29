---
title: Script Lifecycle
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Every script instance attached to an entity in OasisW goes through a well-defined lifecycle. Understanding this lifecycle is important because it determines when your code runs and how it can interact with the rest of the application. OasisW provides specific functions called lifecycle methods that you can define in your scripts. The engine automatically calls these methods at the appropriate times.

Think of it like an actor's performance stages: preparing backstage (`initialize`), performing on stage (`update`), and taking a final bow (`destroy` event).

![Script Lifecycle Diagram](/img/user-manual/scripting/script-lifecycle.png)

:::note[Execution Order]

When an entity has multiple scripts attached through script components, the lifecycle methods (`initialize`, `postInitialize`, `update`, `postUpdate`) of those scripts are called in the order they appear in the entity's script component list. This order is consistently applied across frames.

:::

## Lifecycle Methods {#lifecycle-methods}

Let's examine the main lifecycle methods one by one.

### `initialize()`

**When called:**

* Once per script instance.
* After the script instance is created and its entity is enabled.
* After all script attributes are parsed and initial values (default values or values set in the editor) are assigned.
* Importantly, it's called after the application is loaded and the entity hierarchy is set up, but before the first `update` loop or frame is rendered.
* If the entity or script is disabled at application start, the `initialize` method is called the first time both the entity and script are enabled.

**Purpose:**

* This is the main setup or "constructor-like" stage of the script.
* Ideal for:
  * Subscribing to script [lifecycle events](#lifecycle-events).
  * Registering [DOM event](https://developer.mozilla.org/en-US/docs/Web/Events) handlers.
  * Creating objects that the script needs to manage internally.
  * Caching references to other entities in the scene hierarchy.

:::warning[Constructor vs initialize]

Avoid using `constructor` for startup logic and use `initialize()` instead. The execution order of `constructor` is not guaranteed.

:::

:::info[Entity Cloning]

When an entity is cloned using the `entity.clone()` method, the `initialize` method of its scripts is **not** called immediately. It's only called when the cloned entity is later added to the scene hierarchy (e.g., using `this.app.root.addChild(clonedEntity)`), and at that time both the cloned entity and script instances must be enabled.

:::

**Example:**

<Tabs>
<!-- <TabItem value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class MyScript extends Script {
    static scriptName = 'myScript';

    initialize() {
        // Subscribe to some script lifecycle events
        this.on('enable', () => {
            console.log('script enabled');
        });
        this.on('disable', () => {
            console.log('script disabled');
        });
        this.once('destroy', () => {
            console.log('script destroyed');
        });
    }
}
```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var MyScript = pc.createScript('myScript');

MyScript.prototype.initialize = function() {
    // Subscribe to some script lifecycle events
    this.on('enable', () => {
        console.log('script enabled');
    });
    this.on('disable', () => {
        console.log('script disabled');
    });
    this.once('destroy', () => {
        console.log('script destroyed');
    });
};
```

</TabItem>
</Tabs>

### `postInitialize()`

**When called:**

* Once per script instance.
* Called after all `initialize()` methods of all script instances of all enabled entities in the scene have completed.

**Purpose:**

* Useful for setup logic that depends on other scripts or entities having already completed their `initialize()` stage.
* Helps avoid race conditions where one script tries to access another script's properties before that script has been set up.

**Example:**

<Tabs>
<!-- <TabItem value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class MyScript extends Script {
    static scriptName = 'myScript';

    initialize() {
        // Get a reference to another entity in the scene hierarchy
        this.otherEntity = this.app.root.findByName('OtherEntity');

        // Let's assume that when the initialize method of OtherEntity runs,
        // it allocates a property called 'material'. At this point, we cannot
        // be sure that OtherEntity's initialize method has executed...
    }

    postInitialize() {
        // But we can be sure it has executed by the time we get to here...
        const material = this.otherEntity.material;
    }
}
```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var MyScript = pc.createScript('myScript');

MyScript.prototype.initialize = function() {
    // Get a reference to another entity in the scene hierarchy
    this.otherEntity = this.app.root.findByName('OtherEntity');

    // Let's assume that when the initialize method of OtherEntity runs,
    // it allocates a property called 'material'. At this point, we cannot
    // be sure that OtherEntity's initialize method has executed...
};

MyScript.prototype.postInitialize = function() {
    // But we can be sure it has executed by the time we get to here...
    const material = this.otherEntity.material;
};
```

</TabItem>
</Tabs>

### `update(dt)`

**When called:**

* Every frame, if the script instance, its entity, and the entity's ancestors are all enabled.

**Parameters:**

* dt (delta time): A number representing the time elapsed in seconds since the previous frame. Important for frame-rate independent logic.

**Purpose:**

* This is the core of the script's runtime behavior.
* Used for:
  * Continuous input handling.
  * Updating position, rotation, scale for movement or animation.
  * Checking game conditions (e.g., collisions, win/lose states).
  * Any logic that needs to be performed repeatedly over time.

:::important

Since this runs very frequently, keep update as efficient as possible. Avoid heavy calculations or allocations here if they can be done elsewhere (e.g., in initialize).

:::

**Example:**

<Tabs>
<!-- <TabItem value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class Rotator extends Script {
    static scriptName = 'rotator';

    update(dt) {
        // Rotate the entity 10 degrees per second around the world Y axis
        this.entity.rotate(0, 10 * dt, 0);
    }
}
```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var Rotator = pc.createScript('rotator');

Rotator.prototype.update = function(dt) {
    // Rotate the entity 10 degrees per second around the world Y axis
    this.entity.rotate(0, 10 * dt, 0);
};
```

</TabItem>
</Tabs>

### `postUpdate(dt)`

**When called:**

* Every frame, if the script instance and its entity are enabled.
* Called after all `update()` methods of all script instances for the current frame have completed.

**Parameters:**

* dt (delta time): Same as update().

**Purpose:**

* Useful for logic that needs to run after all major updates have occurred.
* Common use case: A camera script that follows the player. The player's update moves the player, and the camera's `postUpdate` adjusts the camera's position to smoothly follow the player's new position.

**Example:**

<Tabs>
<!-- <TabItem value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class TrackingCamera extends Script {
    static scriptName = 'trackingCamera';

    initialize() {
        this.player = this.app.root.findByName('Player');
    }

    postUpdate(dt) {
        // We know the player's position has been updated by now...
        const playerPos = this.player.getPosition();
        this.entity.lookAt(playerPos);
    }
}
```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var TrackingCamera = pc.createScript('trackingCamera');

TrackingCamera.prototype.initialize = function() {
    this.player = this.app.root.findByName('Player');
};

TrackingCamera.prototype.postUpdate = function(dt) {
    // We know the player's position has been updated by now...
    const playerPos = this.player.getPosition();
    this.entity.lookAt(playerPos);
};
```

</TabItem>
</Tabs>

## Lifecycle Events {#lifecycle-events}

In addition to the main lifecycle methods (`initialize`, `postInitialize`, `update`, `postUpdate`), script instances also fire specific events at key moments in their lifecycle. You can subscribe to these events to execute custom logic when these state changes occur. This is particularly useful for resource management, behavior toggling, or final cleanup tasks.

The three main lifecycle events are `enable`, `disable`, and `destroy`.

### `enable` Event {#enable-event}

**When fired:**

* When the script instance becomes enabled. This can happen in several ways:
  * When the script is first initialized, if both the script component and its entity start in an enabled state.
  * When `this.enabled` is programmatically set from false to true.
  * When the script's parent entity (or ancestor entity) becomes enabled, and the script itself is already marked as enabled.

**Purpose:**

* Perform tasks after the script transitions from disabled to enabled state.
* Ideal for:
  * Re-enabling paused behavior (e.g., resuming animations, re-registering event listeners that were removed in disable).
  * Updating visual state to reflect the enabled state.

**Subscribe:**

```javascript
// Usually inside initialize()...
this.on('enable', () => {
    console.log('script enabled');
});
```

:::tip

If the script starts in an enabled state, the `enable` event occurs during the initialization phase. If you want specific setup for `onEnable` to also run when the script starts enabled, you can call the handler directly in `initialize` after subscribing, protected by an `if (this.enabled)` check.

:::

### `disable` Event {#disable-event}

**When fired:**

* When the script instance becomes disabled. This can happen in the following cases:
  * When `this.enabled` is programmatically set from `true` to `false`.
  * When the script's parent entity (or ancestor entity) becomes disabled.
  * Before the `destroy` event occurs (because scripts are implicitly disabled before being destroyed).

**Purpose:**

* Perform tasks when the script becomes disabled.
* Ideal for:
  * Pausing behavior (e.g., stopping animations, unregistering event listeners that are only relevant when active).
  * Releasing temporary resources that are only needed when enabled.
  * Updating visual state to reflect the disabled state.

**Subscribe:**

```javascript
// Usually inside initialize()...
this.on('disable', () => {
    console.log('script disabled');
});
```

### `state` Event {#state-event}

**When fired:**

* Every time the script instance's valid execution state changes from enabled to disabled, or from disabled to enabled. This can be caused by:
  * The script instance's `this.enabled` property being changed programmatically.
  * The parent script component's `enabled` state changing.
  * The script's parent entity (or ancestor entity)'s `enabled` state changing.

**Purpose:**

* Provides a single callback that responds to changes in the script's active state.
* Useful when you need to perform tasks regardless of whether the script was just enabled or disabled, often based on the new state itself.
* Sometimes simplifies logic compared to handling [`enable`](#enable-event) and [`disable`](#disable-event) separately when the required work is similar for both cases but depends on the resulting state.

**Parameters:**

* enabled (boolean): The script instance's new state (`true` if just enabled, `false` if just disabled).

**Subscribe:**

```javascript
// Usually inside initialize()...
this.on('state', (enabled) => {
    console.log(`script ${enabled ? 'enabled' : 'disabled'}`);
});
```

### `destroy` Event {#destroy-event}

**When fired:**

* When the script instance is about to be destroyed. This occurs in the following cases:
  * When its parent entity is destroyed.
  * When the script component containing this script instance is removed from the entity.
  * When the script instance itself is explicitly destroyed (e.g., `this.destroy()`, direct calls are less common).

**Purpose:**

* This is the final cleanup stage of the script. It's important for preventing memory leaks and ensuring clean termination of script functionality.
* Essential for:
  * Unsubscribing from all events the script subscribed to (e.g., `this.app.off(...)`, `someEntity.off(...)`, `this.off(...)` for its own events).
  * Releasing all external resources or DOM elements the script created or holds references to.
  * Setting references to other objects to null to help the garbage collector.

**Subscribe:**

```javascript
// Usually inside initialize()...
this.once('destroy', () => {
    console.log('script destroyed');
});
```

:::tip[on vs once]

Since the `destroy` handler only needs to run once, it's common to use `this.once('destroy', ...)`.

:::

:::important[Unregistering Event Handlers]

If the script registered event handlers using `on` or `once`, remember to use `off` for those handlers in the `destroy` handler. Otherwise, the garbage collector may not be able to free the memory used by the script.

:::
