---
title: Calling the Engine API
---

When writing OasisW scripts, you use the [OasisW Engine API](https://manual.oasisserver.link/engine/). This page covers the core classes and patterns you'll use most frequently in scripts.

## Core Classes for Script Writers

### Script Context

All scripts have access to these core objects:

```javascript
this.app        // Main application (AppBase)
this.entity     // Entity this script is attached to
```

:::important Important

`this.app` and `this.entity` are only valid within methods defined on the script instance (`initialize`, `update`, etc.). Learn more about JavaScript's `this` keyword [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).

:::

### Core Classes

**[`AppBase`](https://manual.oasisserver.link/engine/classes/AppBase.html)** - Application

```javascript
// Common app operations
this.app.fire('game:start');
const player = this.app.root.findByName('Player');
const texture = this.app.assets.find('logo', 'texture');
```

**[`Entity`](https://manual.oasisserver.link/engine/classes/Entity.html)** - Objects in the scene

```javascript
// Common entity operations
this.entity.setPosition(0, 5, 0);
this.entity.rotate(0, 90, 0);
const child = this.entity.findByName('Weapon');
```

**[`Component`](https://manual.oasisserver.link/engine/classes/Component.html)** - Add functionality to entities

```javascript
// Access components
const camera = this.entity.camera;
const light = this.entity.light;
const rigidbody = this.entity.rigidbody;
const sound = this.entity.sound;
```

### Math Classes

Import these for calculations and transformations:

```javascript
import { Vec3, Quat, Color } from 'playcanvas';

const position = new Vec3(0, 5, 0);
const rotation = new Quat();
const red = new Color(1, 0, 0);
```

## Common Script Patterns

### Finding Entities

```javascript
// By name (searches entire hierarchy)
const player = this.app.root.findByName('Player');

// By tag (returns array)
const enemies = this.app.root.findByTag('enemy');

// Relative to current entity
const weapon = this.entity.findByPath('Arms/RightHand/Weapon');
```

### Working with Assets

```javascript
// Find and load assets
const sound = this.app.assets.find('explosion', 'audio');
sound.ready(() => {
    this.entity.sound.play('explosion');
});
this.app.assets.load(sound);
```

### Events and Communication

```javascript
// Fire application events
this.app.fire('player:died', this.entity);

// Listen for events
this.app.on('game:start', this.onGameStart, this);
```

## Learn More

<!-- * **[Engine Guide](../../engine/index.md)** - In-depth guide to the OasisW Engine runtime -->
* **[Complete Engine API Reference](https://manual.oasisserver.link/engine/)** - Full documentation
* **[Script Lifecycle](./script-lifecycle.md)** - When script methods are called
* **[Events](./events.md)** - Script communication patterns

<!-- :::tip

**IDE Support:** Take advantage of modern IDE features for autocomplete and inline documentation when writing scripts.

::: -->

