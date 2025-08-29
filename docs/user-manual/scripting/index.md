---
title: Scripting
---

Scripts are the heart of interactivity in OasisW. They're reusable pieces of code that you attach to Entities to define behaviors, handle user input, manage game logic, and bring your projects to life.

## Two Scripting Systems

OasisW supports two scripting approaches:

* **ESM Scripts** (`.mjs` files) - Modern ES Module-based scripts using class syntax. **Recommended for new projects.**
* **Classic Scripts** (`.js` files) - The original OasisW scripting system using prototype-based syntax.

Both systems can coexist in the same project, allowing you to migrate gradually or use whichever approach fits your needs.

## Quick Example

Here's a simple script that rotates an entity:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="esm" groupId='script-code'>
<TabItem value="esm" label="ESM (Recommended)">

```javascript
import { Script } from 'playcanvas';

export class Rotate extends Script {
    static scriptName = 'rotate';

    /** @attribute */
    speed = 10;

    update(dt) {
        this.entity.rotate(0, this.speed * dt, 0);
    }
}
```

</TabItem>
<TabItem value="classic" label="Classic">

```javascript
var Rotate = pc.createScript('rotate');

Rotate.attributes.add('speed', { type: 'number', default: 10 });

Rotate.prototype.update = function(dt) {
    this.entity.rotate(0, this.speed * dt, 0);
};
```

</TabItem>
</Tabs>

## What You'll Learn

### [Fundamentals](./fundamentals/index.md)

Core concepts that apply to all OasisW scripts:

* [Getting Started](./fundamentals/getting-started.md) - Basic script structure and syntax
* [ESM Scripts](./fundamentals/esm-scripts.md) - Modern scripting with ES Modules
* [Script Lifecycle](./fundamentals/script-lifecycle.md) - When and how script methods are called
* [Script Attributes](./fundamentals/script-attributes/index.md) - Exposing configurable properties
* [Calling the Engine API](./fundamentals/engine-api.md) - Key classes and patterns
* [Events](./fundamentals/events.md) - Communication between scripts

### [Debugging](./debugging/index.md)

Tools and techniques for troubleshooting your scripts:

* [Console Logging](./debugging/console-logging.md) - Basic debugging with console output
* [Browser Dev Tools](./debugging/browser-dev-tools.md) - Advanced debugging techniques

:::tip

New to OasisW scripting? Start with [Getting Started](./fundamentals/getting-started.md) to learn the basics, then explore [ESM Scripts](./fundamentals/esm-scripts.md) for the modern approach.

:::
