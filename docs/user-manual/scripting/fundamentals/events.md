---
title: 이벤트 (Events)
---

이벤트는 "어떤 일이 일어났을 때 알려줘"라고 약속해 두는 방식입니다. 매 프레임마다 값이 바뀌었는지 계속 확인하는 대신, 필요한 순간에만 반응할 수 있어 스크립트끼리 소통하기에 편리합니다.

OasisW의 많은 객체(스크립트 인스턴스 등)는 엔진의 [`EventHandler`][1] 클래스로부터 이벤트 처리 기능을 물려받습니다. 그래서 이런 객체들은 다음 메서드들을 기본으로 가지고 있습니다:

* `on()` - 이벤트를 듣는 리스너를 등록합니다.
* `once()` - 딱 한 번만 반응하고 스스로 등록을 해제하는 리스너를 등록합니다.
* `off()` - 등록했던 리스너를 해제합니다.
* `fire()` - 이벤트를 발생시켜 알립니다.
* `hasEvent()` - 객체가 특정 이벤트를 듣고 있는지 확인합니다.

## 이벤트 사용

이벤트를 발생시킬 때는 `fire()`를 사용합니다. 아래 예제에서 플레이어 스크립트는 매 프레임마다 `x`와 `y` 값을 인수로 함께 담아 `move` 이벤트를 발생시킵니다.

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

발생한 이벤트를 듣고 반응할 때는 `on()`과 `off()`를 사용합니다. 아래 예제에서 디스플레이 스크립트는 플레이어의 `move` 이벤트를 듣고 있다가, 전달받은 x와 y 값을 출력합니다.

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

엔티티끼리 소통하는 데는 훨씬 편하고 강력한 방법이 하나 더 있는데, 이것을 "애플리케이션 이벤트"라고 부릅니다. 앞의 예제를 보면, 특정 엔티티의 이벤트를 들으려면 준비 작업이 필요했습니다. 예를 들어 이벤트를 듣는 쪽은 이벤트를 발생시키는 엔티티를 미리 참조로 가지고 있어야 했습니다. 이런 방식도 경우에 따라 잘 동작하지만, 좀 더 일반적인 상황에서는 메인 애플리케이션(`this.app`)을 이벤트가 오가는 중앙 허브로 쓰는 편이 더 나을 때가 많습니다. 이렇게 하면 이벤트를 쓰기 위해 굳이 상대 엔티티의 참조를 들고 있을 필요가 없습니다.

방법은 간단합니다. 모든 이벤트를 `this.app`에서 발생시키고 `this.app`에서 듣는 것입니다. 이때 관례적으로 이벤트 이름에 네임스페이스를 붙여, 이벤트가 어디에 속하는지 표시하고 이름이 겹치는 것을 막습니다. 예를 들어 플레이어에서 `move` 이벤트를 발생시키는 대신, 애플리케이션에서 `player:move` 이벤트를 발생시킵니다.

앞의 예제를 애플리케이션 이벤트 방식으로 다시 만들어 보겠습니다.

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

이렇게 하면 준비 작업이 줄어들고 코드도 훨씬 깔끔해집니다.

[1]: https://manual.oasisserver.link/engine/classes/EventHandler.html
