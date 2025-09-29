---
title: Events
---

Events are a useful way for scripts to communicate with each other without having to check every frame for something that has happened.

Many OasisW object types (including script instances) have built-in event handling support inherited from the engine's [`EventHandler`][1] class. Event handling objects have the following methods:

* `on()` - Registers an event listener.
* `once()` - Registers an event listener that automatically unregisters after the first call.
* `off()` - Unregisters an event listener.
* `fire()` - Sends an event.
* `hasEvent()` - Queries whether an object is receiving a specific event.

## Using Events

Use `fire()` to trigger an event. In this example, the player script fires a `move` event every frame, passing `x` and `y` values as arguments.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem  value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class Player extends Script {
    static scriptName = 'player';

    update(dt) {
        const x = 1;
        const y = 1;
        this.fire('move', x, y);
    }
}
```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var Player = pc.createScript('player');

Player.prototype.update = function (dt) {
    const x = 1;
    const y = 1;
    this.fire('move', x, y);
};
```

</TabItem>
</Tabs>

Use `on()` and `off()` to receive events that are fired. In this example, the display script listens for the player's `move` event and outputs the x and y values.

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class Display extends Script {
    static scriptName = 'display';

    /**
     * @attribute
     * @type {Entity}
     */
    playerEntity;

    initialize() {
        // Method to call when player moves
        const onPlayerMove = (x, y) => {
            console.log(x, y);
        };

        // Listen for the player move event
        if (this.playerEntity && this.playerEntity.script && this.playerEntity.script.player) {
            this.playerEntity.script.player.on('move', onPlayerMove);

            // Remove player move event listeners when script destroyed
            this.playerEntity.script.player.once('destroy', () => {
                this.playerEntity.script.player.off('move', onPlayerMove);
            });
        }
    }
}
```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var Display = pc.createScript('display');

// Set up an entity reference for the player entity
Display.attributes.add('playerEntity', { type: 'entity' });

Display.prototype.initialize = function () {
    // Method to call when player moves
    const onPlayerMove = (x, y) => {
        console.log(x, y);
    };

    // Listen for the player move event
    this.playerEntity.script.player.on('move', onPlayerMove);

    // Remove player move event listeners when script destroyed
    this.playerEntity.script.player.once('destroy', () => {
        this.playerEntity.script.player.off('move', onPlayerMove);
    });
};
```

</TabItem>
</Tabs>

## Application Events

There is a very convenient and powerful way to use events for communication between entities, called "application events". As you can see from the example above, there is some setup cost to listening for events from a specific entity. For example, the listener needs to get a reference to the specific entity that fires the event. This works in some cases, but in more general cases, it is more appropriate to use the main application (`this.app`) as a central hub for event firing. This means you don't need to maintain references to entities just to use events.

This works by firing and receiving all events from `this.app`. Conventionally, namespaces are used in event names to signal event scope and prevent collisions. For example, instead of firing a `move` event from the player, fire a `player:move` event from the application.

Let's try the same example using application events.

Firing `player:move` event:

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem  value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class Player extends Script {
    static scriptName = 'player';

    update(dt) {
        var x = 1;
        var y = 1;
        this.app.fire('player:move', x, y);
    }
}

export class Display extends Script {
    static scriptName = 'display';

    initialize() {
        // Method to call when player moves
        const onPlayerMove = (x, y) => {
            console.log(x, y);
        };

        // Listen for the player:move event
        this.app.on('player:move', onPlayerMove);

        // Remove player:move event listeners when script destroyed
        this.on('destroy', () => {
            this.app.off('player:move', onPlayerMove);
        });
    }
}
```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var Player = pc.createScript('player');

Player.prototype.update = function (dt) {
    const x = 1;
    const y = 1;
    this.app.fire('player:move', x, y);
};
```

Receiving `player:move` event:

```javascript
var Display = pc.createScript('display');

Display.prototype.initialize = function () {
    // Method to call when player moves
    const onPlayerMove = (x, y) => {
        console.log(x, y);
    };

    // Listen for the player:move event
    this.app.on('player:move', onPlayerMove);

    // Remove player:move event listeners when script destroyed
    this.on('destroy', function() {
        this.app.off('player:move', onPlayerMove);
    });
};
```

</TabItem>
</Tabs>

As you can see, this reduces the amount of setup and creates cleaner code.

[1]: https://manual.oasisserver.link/engine/classes/EventHandler.html
