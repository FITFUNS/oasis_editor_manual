---
title: 입력 (Input)
---

요소 컴포넌트의 `useInput` 필드를 켜면 사용자가 [Element][1] 컴포넌트와 상호작용할 수 있습니다:

![Use Input](/img/user-manual/assets/fonts/use-input.png)

이 기능이 동작하려면 `pc.Application#elementInput`에 `pc.ElementInput` 인스턴스가 초기화되어 있어야 합니다. 에디터를 쓴다면 이 인스턴스는 자동으로 만들어집니다. 엔진만 단독으로 쓴다면 `pc.Mouse`나 `pc.TouchDevice` 같은 다른 입력 장치보다 *먼저* 이 인스턴스를 만들어야 합니다:

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

요소 컴포넌트에서 입력을 켜면 다음과 같은 이벤트들이 발생합니다:

### mousedown

마우스 커서가 컴포넌트 위에 있는 상태에서 마우스 버튼을 눌렀을 때 발생합니다.

### mouseup

마우스 커서가 컴포넌트 위에 있는 상태에서 마우스 버튼을 놓았을 때 발생합니다.

### mouseenter

마우스 커서가 컴포넌트 안으로 들어왔을 때 발생합니다.

### mouseleave

마우스 커서가 컴포넌트 밖으로 나갔을 때 발생합니다.

### mousemove

마우스 커서가 컴포넌트 위에서 움직였을 때 발생합니다.

### mousewheel

컴포넌트 위에서 마우스 휠을 굴렸을 때 발생합니다.

### click

컴포넌트에서 마우스를 눌렀다 놓았을 때, 또는 컴포넌트에서 터치가 시작되어 끝났을 때 발생합니다.

### touchstart

컴포넌트에서 터치가 시작되었을 때 발생합니다.

### touchend

컴포넌트에서 터치가 끝났을 때 발생합니다.

### touchmove

컴포넌트를 터치한 뒤 손가락이 움직였을 때 발생합니다.

### touchcancel

컴포넌트에서 터치가 취소되었을 때 발생합니다.

## 이벤트 처리 (Event Handling)

입력 이벤트를 다루려면 요소 컴포넌트에서 해당 이벤트를 듣도록(수신) 등록하면 됩니다:

```javascript
this.entity.element.on('click', function (event) {
    console.log('The element ' + event.element.entity.name + ' was clicked.');
}, this);
```

## 이벤트 버블링 (Event bubbling)

요소 컴포넌트에서 입력 이벤트가 발생하면, `event.stopPropagation()`을 부르지 않는 한 그 이벤트는 부모 요소로 계속 전달됩니다(버블링). 예를 들면:

```javascript
this.entity.element.on('click', function (event) {
    // 버블링 중지
    event.stopPropagation();

    console.log('The element ' + event.element.entity.name + ' was clicked.');
}, this);
```

`stopPropagation`을 부르면 `pc.Mouse`나 `pc.TouchDevice` 같은 다른 입력 장치에서 그 이벤트를 처리하는 것도 함께 멈춥니다. 예를 들어 `app.mouse.wasPressed`로 마우스 입력을 확인하고 있다면, `mousedown` 이벤트에서 `stopPropagation`을 불러 `app.mouse.wasPressed`가 true를 돌려주지 않게 할 수 있습니다. 예를 들면:

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

Google Chrome은 터치 장치에서도 마우스 이벤트를 흉내 내어 만들어 냅니다. 이 때문에 생각지 못한 동작이 생길 수 있습니다. 예를 들어 클릭 이벤트가 일어난 직후에 버튼을 숨기면, 그 버튼 뒤에 있던 다른 UI 요소까지 원하지 않던 클릭 이벤트를 받을 수 있습니다.

이런 동작을 막으려면 ```pc.EVENT_TOUCHEND``` 이벤트에서 네이티브 이벤트 객체의 ```preventDefault()``` 메서드를 부르면 됩니다:

다음은 씬에 한 번만 넣어 두면 되는 짧은 스크립트입니다:

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
