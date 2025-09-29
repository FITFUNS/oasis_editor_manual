---
title: Input
---

Users can interact with [Element][1] components by enabling the `useInput` field of the element component:

![Use Input](/img/user-manual/assets/fonts/use-input.png)

For this to work, there must be an initialized `pc.ElementInput` instance for `pc.Application#elementInput`. When using the editor, this is created automatically. When using the engine only, you must create the instance *before* other input devices like `pc.Mouse` or `pc.TouchDevice`:

```javascript
const app = new pc.Application(canvas, {
    elementInput: new pc.ElementInput(canvas),
    mouse: new pc.Mouse(canvas),
    touch: !!('ontouchstart' in window) ? new pc.TouchDevice(canvas) : null,
    keyboard: new pc.Keyboard(window),
    gamepads: new pc.GamePads(),
    ...
});
```

## Input Events

When input is enabled on an element component, the following events are fired:

### mousedown

Fired when the mouse is pressed while the mouse cursor is over the component.

### mouseup

Fired when the mouse is released while the mouse cursor is over the component.

### mouseenter

Fired when the mouse cursor enters the component.

### mouseleave

Fired when the mouse cursor leaves the component.

### mousemove

Fired when the mouse cursor moves over the component.

### mousewheel

Fired when the mouse wheel is scrolled over the component.

### click

Fired when the mouse is pressed and released on the component or when a touch starts and ends on the component.

### touchstart

Fired when a touch starts on the component.

### touchend

Fired when a touch ends on the component.

### touchmove

Fired when a touch moves after touching the component.

### touchcancel

Fired when a touch is cancelled on the component.

## Event Handling

To handle input events, you can listen for them on the element component:

```javascript
this.entity.element.on('click', function (event) {
    console.log('The element ' + event.element.entity.name + ' was clicked.');
}, this);
```

## Event bubbling

When input events are fired on an element component, they bubble up to parent elements unless `event.stopPropagation()` is called. For example:

```javascript
this.entity.element.on('click', function (event) {
    // Stop bubbling
    event.stopPropagation();

    console.log('The element ' + event.element.entity.name + ' was clicked.');
}, this);
```

Calling `stopPropagation` also stops the event from being handled by other input devices like `pc.Mouse` or `pc.TouchDevice`. For example, if you're using `app.mouse.wasPressed` to handle mouse input, you can call `stopPropagation` on the `mousedown` event to prevent `app.mouse.wasPressed` from returning true. For example:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem  value="esm" label="ESM">

```javascript
import { Script, MOUSEBUTTON_LEFT } from 'playcanvas';

export class InputScript extends Script {
    static scriptName = "inputScript";

    initialize() {
        this.entity.element.on('mousedown', (evt) => {
            evt.stopPropagation();
        }, this);
    }

    update(dt) {
        if (this.app.mouse.wasPressed(MOUSEBUTTON_LEFT)) {
            // do something when the left button was pressed.
            // this will not be called if the button was pressed on the Element
            // because we call stopPropagation
        }
    }
}

```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var InputScript = pc.createScript('inputScript');

InputScript.prototype.initialize = function () {
    this.entity.element.on('mousedown', function (evt) {
        evt.stopPropagation();
    }, this);
},

InputScript.prototype.update = function (dt) {
    if (this.app.mouse.wasPressed(pc.MOUSEBUTTON_LEFT)) {
        // do something when the left button was pressed.
        // this will not be called if the button was pressed on the Element
        // because we call stopPropagation
    }
}
```

</TabItem>
</Tabs>

## Mouse and Touch Event Conflicts in Google Chrome

Google Chrome simulates mouse events on touch devices as well. This can cause unexpected behavior. For example, if you hide a button immediately after a click event, other UI elements behind it may receive unwanted click events.

To prevent this behavior, you can call the ```preventDefault()``` method of the native event object on the ```pc.EVENT_TOUCHEND``` event:

Here is a small script to include once in your scene:

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem  value="esm" label="ESM">

```javascript
import { Script, EVENT_TOUCHEND } from 'playcanvas';

export class TouchFix extends Script {
    static scriptname = "touchFix";

    initialize () {
        // 터치를 지원하는 장치에서만 터치 이벤트를 등록합니다
        const touch = this.app.touch;
        if (touch) {
        touch.on(EVENT_TOUCHEND, function(event) {
            // 터치 이벤트 후에 마우스 클릭 이벤트가 실행되는 것을 방지합니다.
            event.event.preventDefault();
        });
        }
    }
}
```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var TouchFix = pc.createScript('touchFix');

// initialize code called once per entity
TouchFix.prototype.initialize = function() {
    // Register touch events only on devices that support touch
    const touch = this.app.touch;
    if (touch) {
        touch.on(pc.EVENT_TOUCHEND, function(event) {
            // Prevent mouse click events from firing after touch events.
            event.event.preventDefault();
        });
    }
};
```

</TabItem>
</Tabs>

[1]: /user-manual/scenes/components/element/
