---
title: Scripting
---

Scripts are the heart of interactivity in OasisW. They are reusable pieces of code that you attach to entities to define behavior, handle user input, manage game logic, and bring life to your project.

## Scripting Systems

OasisW supports the following scripting approaches:

<!-- * **ESM Scripts** (`.mjs` files) - Modern ES Module-based scripts using class syntax. **Recommended for new projects.** -->
* **Classic Scripts** (`.js` files) - The original OasisW scripting system using prototype-based syntax.

<!-- Both systems can coexist in the same project, allowing you to migrate gradually or use whichever approach fits your needs. -->

## Quick Example

Here's a simple script that rotates an entity:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem value="esm" label="ESM (Recommended)">

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

</TabItem> -->
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

## What to Learn

### [Fundamentals](/user-manual/scripting/fundamentals/index.md)

Core concepts that apply to all OasisW scripts:

<!-- * [ESM Scripts](/user-manual/scripting/fundamentals/esm-scripts.md) - Modern scripting with ES Modules -->
* [Getting Started](/user-manual/scripting/fundamentals/getting-started.md) - Basic script structure and syntax
* [Script Lifecycle](/user-manual/scripting/fundamentals/script-lifecycle.md) - When and how script methods are called
* [Script Attributes](/user-manual/scripting/fundamentals/script-attributes/index.md) - Exposing configurable properties
* [Calling the Engine API](/user-manual/scripting/fundamentals/engine-api.md) - Key classes and patterns
* [Events](/user-manual/scripting/fundamentals/events.md) - Script communication

<!-- ### [Debugging](/user-manual/scripting/debugging/index.md) -->

<!-- Tools and techniques for troubleshooting scripts: -->

<!-- * [Console Logging](/user-manual/scripting/debugging/console-logging.md) - Basic debugging with console output -->
<!-- * [Browser Developer Tools](/user-manual/scripting/debugging/browser-dev-tools.md) - Advanced debugging techniques -->

<!-- :::tip

New to OasisW scripting? Start with [Getting Started](/user-manual/scripting/fundamentals/getting-started.md) to learn the basics, then explore [ESM Scripts](/user-manual/scripting/fundamentals/esm-scripts.md) for the modern approach.

::: -->
