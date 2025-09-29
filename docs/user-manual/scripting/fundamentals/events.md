---
title: 이벤트 (Events)
---

이벤트는 매 프레임마다 확인하지 않고 발생하는 일에 반응하기 위해 스크립트 간에 통신하는 유용한 방법입니다.

많은 OasisW 객체 타입(스크립트 인스턴스 등)은 엔진의 [`EventHandler`][1] 클래스에서 상속받은 내장 이벤트 처리 지원을 가지고 있습니다. 이벤트 처리 객체는 다음 메서드들을 가집니다:

* `on()` - 이벤트 리스너를 등록합니다.
* `once()` - 첫 번째 호출 후 자동으로 등록 해제되는 이벤트 리스너를 등록합니다.
* `off()` - 이벤트 리스너를 등록 해제합니다.
* `fire()` - 이벤트를 전송합니다.
* `hasEvent()` - 객체가 특정 이벤트를 수신하고 있는지 쿼리합니다.

## 이벤트 사용

`fire()`를 사용하여 이벤트를 발생시킵니다. 이 예제에서 플레이어 스크립트는 매 프레임마다 `x`와 `y` 값을 인수로 전달하여 `move` 이벤트를 발생시킵니다.

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

`on()`과 `off()`를 사용하여 발생하는 이벤트를 수신합니다. 이 예제에서 디스플레이 스크립트는 플레이어의 `move` 이벤트를 수신하고 x와 y 값을 출력합니다.

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
    // 플레이어가 움직일 때 호출할 메서드
    const onPlayerMove = (x, y) => {
        console.log(x, y);
    };

    // 플레이어 이동 이벤트 수신
    this.playerEntity.script.player.on('move', onPlayerMove);

    // 스크립트가 파괴될 때 플레이어 이동 이벤트 리스너 제거
    this.playerEntity.script.player.once('destroy', () => {
        this.playerEntity.script.player.off('move', onPlayerMove);
    });
};
```

</TabItem>
</Tabs>

## 애플리케이션 이벤트

엔티티 간 통신을 위해 이벤트를 사용하는 매우 편리하고 강력한 방법이 있으며, 이를 "애플리케이션 이벤트"라고 합니다. 위의 예제에서 볼 수 있듯이, 특정 엔티티의 이벤트를 수신하는 데는 일부 설정 비용이 발생합니다. 예를 들어, 리스너는 이벤트를 발생시키는 특정 엔티티에 대한 참조를 가져야 합니다. 이는 일부 경우에 작동하지만, 더 일반적인 경우에는 이벤트 발생을 위한 중앙 허브로 메인 애플리케이션(`this.app`)을 사용하는 것이 더 적절하다는 것을 알 수 있습니다. 이는 이벤트를 사용하기 위해 엔티티의 참조를 유지할 필요가 없음을 의미합니다.

이는 `this.app`에서 모든 이벤트를 발생시키고 수신함으로써 작동합니다. 관례적으로, 이벤트 범위를 신호하고 충돌을 방지하기 위해 이벤트 이름에 네임스페이스를 사용합니다. 예를 들어, 플레이어에서 `move` 이벤트를 발생시키는 대신 애플리케이션에서 `player:move` 이벤트를 발생시킵니다.

애플리케이션 이벤트를 사용하여 동일한 예제를 시도해보겠습니다.

`player:move` 이벤트 발생:

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

`player:move` 이벤트 수신:

```javascript
var Display = pc.createScript('display');

Display.prototype.initialize = function () {
    // 플레이어가 움직일 때 호출할 메서드
    const onPlayerMove = (x, y) => {
        console.log(x, y);
    };

    // player:move 이벤트 수신
    this.app.on('player:move', onPlayerMove);

    // 스크립트가 파괴될 때 player:move 이벤트 리스너 제거
    this.on('destroy', function() {
        this.app.off('player:move', onPlayerMove);
    });
};
```

</TabItem>
</Tabs>

보시다시피, 이는 설정 양을 줄이고 더 깔끔한 코드를 만듭니다.

[1]: https://manual.oasisserver.link/engine/classes/EventHandler.html
