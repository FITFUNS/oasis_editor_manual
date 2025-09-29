---
title: 스크립트 라이프사이클 (Script Lifecycle)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

OasisW에서 엔티티에 연결하는 모든 스크립트 인스턴스는 잘 정의된 라이프사이클을 거칩니다. 이 라이프사이클을 이해하는 것은 코드가 언제 실행되고 애플리케이션의 나머지 부분과 어떻게 상호작용할 수 있는지를 결정하기 때문에 중요합니다. OasisW는 스크립트에서 정의할 수 있는 라이프사이클 메서드라고 하는 특정 함수들을 제공합니다. 엔진은 적절한 시점에 이러한 메서드들을 자동으로 호출합니다.

배우의 공연 단계와 같이 생각해보세요: 무대 뒤에서 준비하기(`initialize`), 무대에서 공연하기(`update`), 마지막 인사하기(`destroy` 이벤트).

![Script Lifecycle Diagram](/img/user-manual/scripting/script-lifecycle.png)

:::note[실행 순서]

엔티티가 스크립트 컴포넌트를 통해 여러 스크립트를 연결한 경우, 해당 스크립트들의 라이프사이클 메서드(`initialize`, `postInitialize`, `update`, `postUpdate`)는 해당 엔티티의 컴포넌트 스크립트 목록에 나타나는 순서대로 호출됩니다. 이 순서는 프레임 간에 일관되게 적용됩니다.

:::

## 라이프사이클 메서드 {#lifecycle-methods}

주요 라이프사이클 메서드들을 하나씩 살펴보겠습니다.

### `initialize()`

**호출 시점:**

* 스크립트 인스턴스당 한 번.
* 스크립트 인스턴스가 생성되고 해당 엔티티가 활성화된 후.
* 모든 스크립트 속성이 파싱되고 초기 값(기본값 또는 에디터에서 설정한 값)이 할당된 후.
* 중요한 것은 애플리케이션이 로드되고 엔티티 계층 구조가 구성된 후, 첫 번째 `update` 루프나 프레임이 렌더링되기 전에 호출됩니다.
* 애플리케이션 시작 시 엔티티나 스크립트가 비활성화되어 있다면, 엔티티와 스크립트가 모두 활성화된 첫 번째에 `initialize` 메서드가 호출됩니다.

**목적:**

* 이것은 스크립트의 주요 설정 또는 "생성자와 같은" 단계입니다.
* 다음에 이상적입니다:
  * 스크립트 [라이프사이클 이벤트](#lifecycle-events) 구독.
  * [DOM 이벤트](https://developer.mozilla.org/en-US/docs/Web/Events) 핸들러 등록.
  * 스크립트가 내부적으로 관리해야 하는 객체 생성.
  * 씬 계층 구조의 다른 엔티티에 대한 참조 캐싱.

:::warning[Constructor vs initialize]

시작 로직에 `constructor` 사용을 피하고 대신 `initialize()`를 사용하세요. `constructor`의 실행 순서는 보장되지 않습니다.

:::

:::info[엔티티 복제]

엔티티가 `entity.clone()` 메서드를 사용하여 복제될 때, 해당 스크립트의 `initialize` 메서드는 즉시 호출되지 **않습니다**. 복제된 엔티티가 나중에 씬 계층 구조에 추가될 때(예: `this.app.root.addChild(clonedEntity)` 사용)만 호출되며, 이때 복제된 엔티티와 스크립트 인스턴스 모두가 활성화되어 있어야 합니다.

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
    // 일부 스크립트 라이프사이클 이벤트 구독
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

**호출 시점:**

* 스크립트 인스턴스당 한 번.
* 씬의 모든 활성화된 엔티티의 모든 스크립트 인스턴스의 `initialize()` 메서드가 완료된 후 호출됩니다.

**목적:**

* 다른 스크립트나 엔티티가 이미 자신의 `initialize()` 단계를 완료한 것에 의존하는 설정 로직에 유용합니다.
* 한 스크립트가 다른 스크립트가 설정하기 전에 다른 스크립트의 속성에 접근하려고 시도하는 경쟁 상태를 피하는 데 도움이 됩니다.

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
    // 씬 계층 구조의 다른 엔티티에 대한 참조 가져오기
    this.otherEntity = this.app.root.findByName('OtherEntity');

    // OtherEntity의 initialize 메서드가 실행될 때
    // 'material'이라는 속성을 할당한다고 가정해보세요. 이 시점에서는
    // OtherEntity의 initialize 메서드가 실행되었는지 확실하지 않습니다...
};

MyScript.prototype.postInitialize = function() {
    // 하지만 여기에 도달할 때까지는 실행되었음을 확신할 수 있습니다...
    const material = this.otherEntity.material;
};
```

</TabItem>
</Tabs>

### `update(dt)`

**호출 시점:**

* 스크립트 인스턴스, 해당 엔티티, 그리고 엔티티의 조상들이 모두 활성화되어 있다면 매 프레임.

**매개변수:**

* dt (델타 시간): 이전 프레임 이후 경과된 시간을 초 단위로 나타내는 숫자. 프레임률에 독립적인 로직에 중요합니다.

**목적:**

* 이것은 스크립트의 런타임 동작의 핵심입니다.
* 다음에 사용됩니다:
  * 연속적인 입력 처리.
  * 움직임이나 애니메이션을 위한 위치, 회전, 스케일 업데이트.
  * 게임 조건 확인 (예: 충돌, 승/패 상태).
  * 시간에 따라 반복적으로 수행되어야 하는 모든 로직.

:::important

매우 자주 실행되므로 update를 가능한 한 효율적으로 유지하세요. 다른 곳에서 수행할 수 있다면(예: initialize에서) 여기서 무거운 계산이나 할당을 피하세요.

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
    // 엔티티를 세계 Y축을 중심으로 초당 10도 회전
    this.entity.rotate(0, 10 * dt, 0);
};
```

</TabItem>
</Tabs>

### `postUpdate(dt)`

**호출 시점:**

* 스크립트 인스턴스와 해당 엔티티가 활성화되어 있다면 매 프레임.
* 현재 프레임에 대한 모든 스크립트 인스턴스의 `update()` 메서드가 완료된 후 호출됩니다.

**매개변수:**

* dt (델타 시간): update()와 동일합니다.

**목적:**

* 모든 주요 업데이트가 발생한 후 실행되어야 하는 로직에 유용합니다.
* 일반적인 사용 사례: 플레이어를 따라가는 카메라 스크립트. 플레이어의 update가 플레이어를 이동시키고, 카메라의 `postUpdate`가 플레이어의 새로운 위치를 부드럽게 따라가도록 카메라의 위치를 조정합니다.

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
    // 이제 플레이어의 위치가 업데이트되었음을 알 수 있습니다...
    const playerPos = this.player.getPosition();
    this.entity.lookAt(playerPos);
};
```

</TabItem>
</Tabs>

## 라이프사이클 이벤트 {#lifecycle-events}

주요 라이프사이클 메서드(`initialize`, `postInitialize`, `update`, `postUpdate`) 외에도, 스크립트 인스턴스는 라이프사이클의 주요 순간에 특정 이벤트를 발생시킵니다. 이러한 상태 변화가 발생할 때 사용자 정의 로직을 실행하기 위해 이러한 이벤트에 구독할 수 있습니다. 이는 리소스 관리, 동작 토글, 또는 최종 정리 작업에 특히 유용합니다.

세 가지 주요 라이프사이클 이벤트는 `enable`, `disable`, `destroy`입니다.

### `enable` 이벤트 {#enable-event}

**발생 시점:**

* 스크립트 인스턴스가 활성화될 때. 이는 여러 방식으로 발생할 수 있습니다:
  * 스크립트가 처음 초기화될 때, 스크립트 컴포넌트와 해당 엔티티가 모두 활성화된 상태로 시작하는 경우.
  * `this.enabled`가 프로그래밍 방식으로 false에서 true로 설정될 때.
  * 스크립트의 부모 엔티티(또는 조상 엔티티)가 활성화되고, 스크립트 자체가 이미 활성화로 표시된 경우.

**목적:**

* 스크립트가 비활성 상태에서 활성 상태가 된 후 작업을 수행합니다.
* 다음에 이상적입니다:
  * 일시정지된 동작을 다시 활성화 (예: 애니메이션 재개, disable에서 제거된 이벤트 리스너 재등록).
  * 활성 상태를 반영하도록 시각적 상태 업데이트.

**구독:**

```javascript
// 일반적으로 initialize() 내부에서...
this.on('enable', () => {
    console.log('script enabled');
});
```

:::tip

스크립트가 활성화된 상태로 시작하면, `enable` 이벤트는 초기화 단계 중에 발생합니다. 스크립트가 활성화된 상태로 시작하는 경우 `onEnable`의 특정 설정도 실행되도록 하려면, 구독 후 `if (this.enabled)` 체크로 보호된 핸들러를 `initialize`에서 직접 호출할 수 있습니다.

:::

### `disable` 이벤트 {#disable-event}

**발생 시점:**

* 스크립트 인스턴스가 비활성화될 때. 이는 다음 경우에 발생할 수 있습니다:
  * `this.enabled`가 프로그래밍 방식으로 `true`에서 `false`로 설정될 때.
  * 스크립트의 부모 엔티티(또는 조상 엔티티)가 비활성화될 때.
  * `destroy` 이벤트가 발생하기 전 (스크립트가 파괴되기 전에 암시적으로 비활성화되기 때문).

**목적:**

* 스크립트가 비활성 상태가 될 때 작업을 수행합니다.
* 다음에 이상적입니다:
  * 동작 일시정지 (예: 애니메이션 중지, 활성 상태일 때만 관련된 이벤트 리스너 등록 해제).
  * 활성화된 상태일 때만 필요한 임시 리소스 해제.
  * 비활성 상태를 반영하도록 시각적 상태 업데이트.

**구독:**

```javascript
// 일반적으로 initialize() 내부에서...
this.on('disable', () => {
    console.log('script disabled');
});
```

### `state` 이벤트 {#state-event}

**발생 시점:**

* 스크립트 인스턴스의 유효한 실행 상태가 활성화에서 비활성화로, 또는 비활성화에서 활성화로 변경될 때마다. 이는 다음으로 인해 발생할 수 있습니다:
  * 스크립트 인스턴스의 `this.enabled` 속성이 프로그래밍 방식으로 변경될 때.
  * 부모 스크립트 컴포넌트의 `enabled` 상태가 변경될 때.
  * 스크립트의 부모 엔티티(또는 조상 엔티티)의 `enabled` 상태가 변경될 때.

**목적:**

* 스크립트의 활성 상태 변화에 반응하는 단일 콜백을 제공합니다.
* 스크립트가 방금 활성화되었는지 비활성화되었는지에 관계없이 작업을 수행해야 할 때 유용하며, 종종 새로운 상태 자체를 기반으로 합니다.
* 필요한 작업이 두 경우 모두 유사하지만 결과 상태에 의존하는 경우, [`enable`](#enable-event)과 [`disable`](#disable-event)을 별도로 처리하는 것과 비교하여 때로는 로직을 단순화할 수 있습니다.

**매개변수:**

* enabled (boolean): 스크립트 인스턴스의 새로운 상태 (방금 활성화되었다면 `true`, 방금 비활성화되었다면 `false`).

**구독:**

```javascript
// 일반적으로 initialize() 내부에서...
this.on('state', (enabled) => {
    console.log(`script ${enabled ? 'enabled' : 'disabled'}`);
});
```

### `destroy` 이벤트 {#destroy-event}

**발생 시점:**

* 스크립트 인스턴스가 파괴되려고 할 때. 이는 다음 경우에 발생합니다:
  * 해당 부모 엔티티가 파괴될 때.
  * 이 스크립트 인스턴스를 포함하는 스크립트 컴포넌트가 엔티티에서 제거될 때.
  * 스크립트 인스턴스 자체가 명시적으로 파괴될 때 (예: `this.destroy()`, 직접 호출은 덜 일반적).

**목적:**

* 이것은 스크립트의 최종 정리 단계입니다. 메모리 누수를 방지하고 스크립트 기능의 깔끔한 종료를 보장하는 데 중요합니다.
* 다음에 필수적입니다:
  * 스크립트가 구독한 모든 이벤트에서 구독 해제 (예: `this.app.off(...)`, `someEntity.off(...)`, 자체 이벤트에 대한 `this.off(...)`).
  * 스크립트가 생성했거나 참조를 보유하는 모든 외부 리소스나 DOM 요소 해제.
  * 가비지 컬렉터를 돕기 위해 다른 객체에 대한 참조를 null로 설정.

**구독:**

```javascript
// 일반적으로 initialize() 내부에서...
this.once('destroy', () => {
    console.log('script destroyed');
});
```

:::tip[on vs once]

`destroy` 핸들러는 한 번만 실행되면 되므로 `this.once('destroy', ...)`를 사용하는 것이 일반적입니다.

:::

:::important[이벤트 핸들러 등록 해제]

스크립트가 `on` 또는 `once`를 사용하여 이벤트 핸들러를 등록했다면, `destroy` 핸들러에서 해당 핸들러에 대해 `off`를 사용하는 것을 기억하세요. 그렇지 않으면 가비지 컬렉터가 스크립트에서 사용하는 메모리를 해제하지 못할 수 있습니다.

:::
