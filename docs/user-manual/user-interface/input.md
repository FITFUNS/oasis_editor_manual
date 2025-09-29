---
title: 입력 (Input)
---

사용자는 요소 컴포넌트의 `useInput` 필드를 활성화하여 [Element][1] 컴포넌트와 상호작용할 수 있습니다:

![Use Input](/img/user-manual/assets/fonts/use-input.png)

이것이 작동하려면 `pc.Application#elementInput`에 대해 초기화된 `pc.ElementInput` 인스턴스가 있어야 합니다. 에디터를 사용하는 경우 이것이 자동으로 생성됩니다. 엔진만 사용하는 경우 `pc.Mouse` 또는 `pc.TouchDevice`와 같은 다른 입력 장치보다 *먼저* 인스턴스를 생성해야 합니다:

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

## 입력 이벤트 (Input Events)

요소 컴포넌트에서 입력을 활성화하면 다음 이벤트가 발생합니다:

### mousedown

마우스 커서가 컴포넌트 위에 있을 때 마우스가 눌렸을 때 발생합니다.

### mouseup

마우스 커서가 컴포넌트 위에 있을 때 마우스가 놓였을 때 발생합니다.

### mouseenter

마우스 커서가 컴포넌트에 들어갔을 때 발생합니다.

### mouseleave

마우스 커서가 컴포넌트를 벗어났을 때 발생합니다.

### mousemove

마우스 커서가 컴포넌트 위에서 이동했을 때 발생합니다.

### mousewheel

마우스 휠이 컴포넌트에서 스크롤되었을 때 발생합니다.

### click

마우스가 컴포넌트에서 눌렸다가 놓였을 때 또는 터치가 컴포넌트에서 시작되고 끝났을 때 발생합니다.

### touchstart

컴포넌트에서 터치가 시작되었을 때 발생합니다.

### touchend

컴포넌트에서 터치가 끝났을 때 발생합니다.

### touchmove

컴포넌트를 터치한 후 터치가 이동했을 때 발생합니다.

### touchcancel

컴포넌트에서 터치가 취소되었을 때 발생합니다.

## 이벤트 처리 (Event Handling)

입력 이벤트를 처리하려면 요소 컴포넌트에서 이를 수신할 수 있습니다:

```javascript
this.entity.element.on('click', function (event) {
    console.log('The element ' + event.element.entity.name + ' was clicked.');
}, this);
```

## 이벤트 버블링 (Event bubbling)

요소 컴포넌트에서 입력 이벤트가 발생하면 `event.stopPropagation()`을 호출하지 않는 한 부모 요소로 버블링됩니다. 예를 들어:

```javascript
this.entity.element.on('click', function (event) {
    // 버블링 중지
    event.stopPropagation();

    console.log('The element ' + event.element.entity.name + ' was clicked.');
}, this);
```

`stopPropagation`을 호출하면 `pc.Mouse` 또는 `pc.TouchDevice`와 같은 다른 입력 장치에서 이벤트가 처리되는 것도 중지됩니다. 예를 들어 `app.mouse.wasPressed`를 사용하여 마우스 입력을 처리하는 경우, `mousedown` 이벤트에서 `stopPropagation`을 호출하여 `app.mouse.wasPressed`가 true를 반환하지 않도록 할 수 있습니다. 예를 들어:

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

## Google Chrome에서 마우스와 터치 이벤트 충돌

Google Chrome은 터치 장치에서도 마우스 이벤트를 시뮬레이션합니다. 이로 인해 예상치 못한 동작이 발생할 수 있습니다. 예를 들어 클릭 이벤트 직후에 버튼을 숨기면, 그 뒤에 있는 다른 UI 요소도 원하지 않는 클릭 이벤트를 받을 수 있습니다.

이 동작을 방지하려면 ```pc.EVENT_TOUCHEND``` 이벤트에서 네이티브 이벤트 객체의 ```preventDefault()``` 메서드를 호출할 수 있습니다:

다음은 씬에 한 번 포함할 작은 스크립트입니다:

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

// 엔티티당 한 번 호출되는 초기화 코드
TouchFix.prototype.initialize = function() {
    // 터치를 지원하는 장치에서만 터치 이벤트를 등록합니다
    const touch = this.app.touch;
    if (touch) {
        touch.on(pc.EVENT_TOUCHEND, function(event) {
            // 터치 이벤트 후에 마우스 클릭 이벤트가 실행되는 것을 방지합니다.
            event.event.preventDefault();
        });
    }
};
```

</TabItem>
</Tabs>

[1]: /user-manual/scenes/components/element/
