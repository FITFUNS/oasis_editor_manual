---
title: 스크립트 라이프사이클 (Script Lifecycle)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

OasisW에서 엔티티에 붙이는 모든 스크립트는 정해진 흐름(라이프사이클)을 따라 움직입니다. 이 흐름을 알아두면 내 코드가 "언제" 실행되고, 앱의 다른 부분과 "어떻게" 맞물리는지 쉽게 이해할 수 있습니다. OasisW는 스크립트 안에 만들어 둘 수 있는 특별한 함수들을 준비해 두었는데, 이를 라이프사이클 메서드라고 부릅니다. 이 함수들은 우리가 직접 부르지 않아도 엔진이 알맞은 순간에 자동으로 불러 줍니다.

배우가 무대에 서는 과정과 비슷하다고 생각하면 쉽습니다. 무대 뒤에서 준비하고(`initialize`), 무대에 올라 공연하고(`update`), 마지막으로 인사하며 내려옵니다(`destroy` 이벤트).

![Script Lifecycle Diagram](/img/user-manual/scripting/script-lifecycle.png)

:::note[실행 순서]

한 엔티티에 스크립트 컴포넌트로 여러 스크립트를 붙였다면, 그 스크립트들의 라이프사이클 메서드(`initialize`, `postInitialize`, `update`, `postUpdate`)는 컴포넌트의 스크립트 목록에 적힌 순서대로 실행됩니다. 이 순서는 프레임이 바뀌어도 늘 똑같이 지켜집니다.

:::

## 라이프사이클 메서드 {#lifecycle-methods}

주요 라이프사이클 메서드들을 하나씩 살펴보겠습니다.

### `initialize()`

**호출 시점:**

* 스크립트 인스턴스마다 딱 한 번.
* 스크립트 인스턴스가 만들어지고 그 엔티티가 활성화된 뒤.
* 스크립트의 모든 속성이 읽혀서 처음 값(기본값 또는 에디터에서 지정한 값)이 채워진 뒤.
* 특히, 앱이 다 로드되고 엔티티 계층 구조가 짜인 다음, 첫 번째 `update` 루프나 첫 프레임이 그려지기 전에 호출됩니다.
* 앱이 시작될 때 엔티티나 스크립트가 꺼져 있다면, 둘 다 켜지는 첫 순간에 `initialize`가 호출됩니다.

**목적:**

* 스크립트의 기본 준비를 하는 단계로, "생성자와 비슷한" 역할을 합니다.
* 다음에 이상적입니다:
  * 스크립트 [라이프사이클 이벤트](#lifecycle-events) 구독.
  * [DOM 이벤트](https://developer.mozilla.org/en-US/docs/Web/Events) 핸들러 등록.
  * 스크립트가 내부적으로 관리해야 하는 객체 생성.
  * 씬 계층 구조의 다른 엔티티에 대한 참조 캐싱.

:::warning[Constructor vs initialize]

준비 작업에는 `constructor` 대신 `initialize()`를 쓰세요. `constructor`는 언제 실행될지 순서가 보장되지 않습니다.

:::

:::info[엔티티 복제]

`entity.clone()`으로 엔티티를 복제하면, 그 스크립트의 `initialize`는 곧바로 실행되지 **않습니다**. 복제한 엔티티를 나중에 씬 계층 구조에 넣을 때(예: `this.app.root.addChild(clonedEntity)`)만 실행되며, 이때 복제된 엔티티와 스크립트 인스턴스가 둘 다 켜져 있어야 합니다.

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

* 스크립트 인스턴스마다 딱 한 번.
* 씬에 켜져 있는 모든 엔티티의 모든 스크립트 인스턴스에서 `initialize()`가 전부 끝난 뒤에 호출됩니다.

**목적:**

* 다른 스크립트나 엔티티가 `initialize()`를 이미 마쳤다는 것을 전제로 하는 준비 작업에 알맞습니다.
* 아직 준비가 끝나지 않은 다른 스크립트의 속성에 먼저 손대다 생기는 타이밍 충돌(경쟁 상태)을 피할 수 있습니다.

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

* 스크립트 인스턴스와 그 엔티티, 그리고 위쪽 조상 엔티티들이 모두 켜져 있다면 매 프레임마다.

**매개변수:**

* dt (델타 시간): 직전 프레임 이후 흐른 시간을 초 단위로 담은 숫자입니다. 프레임률에 흔들리지 않는 로직을 만들 때 꼭 필요합니다.

**목적:**

* 스크립트가 실행 중에 하는 일의 핵심입니다.
* 다음에 사용됩니다:
  * 연속적인 입력 처리.
  * 움직임이나 애니메이션을 위한 위치, 회전, 스케일 업데이트.
  * 게임 조건 확인 (예: 충돌, 승/패 상태).
  * 시간에 따라 반복적으로 수행되어야 하는 모든 로직.

:::important

update는 매 프레임 아주 자주 돌기 때문에 되도록 가볍게 유지하세요. 무거운 계산이나 메모리 할당은 다른 곳(예: initialize)에서 할 수 있다면 여기서는 피하세요.

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

* 스크립트 인스턴스와 그 엔티티가 켜져 있다면 매 프레임마다.
* 이번 프레임에서 모든 스크립트 인스턴스의 `update()`가 다 끝난 뒤에 호출됩니다.

**매개변수:**

* dt (델타 시간): update()와 동일합니다.

**목적:**

* 모든 주요 업데이트가 끝난 다음에 실행돼야 하는 로직에 알맞습니다.
* 대표적인 예: 플레이어를 따라다니는 카메라 스크립트. 플레이어의 update가 플레이어를 움직이면, 카메라의 `postUpdate`가 플레이어의 새 위치를 부드럽게 뒤따라가도록 카메라 위치를 맞춥니다.

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

주요 라이프사이클 메서드(`initialize`, `postInitialize`, `update`, `postUpdate`) 말고도, 스크립트 인스턴스는 라이프사이클의 중요한 순간마다 특정 이벤트를 알려 줍니다. 이런 상태 변화가 일어날 때 내가 원하는 코드를 실행하고 싶다면 그 이벤트를 구독하면 됩니다. 리소스 관리, 동작을 켜고 끄기, 마지막 정리 작업을 할 때 특히 쓸모가 많습니다.

가장 중요한 세 가지 라이프사이클 이벤트는 `enable`, `disable`, `destroy`입니다.

### `enable` 이벤트 {#enable-event}

**발생 시점:**

* 스크립트 인스턴스가 켜질 때. 다음과 같은 여러 경우에 일어날 수 있습니다:
  * 스크립트가 처음 초기화될 때, 스크립트 컴포넌트와 그 엔티티가 둘 다 켜진 상태로 시작하는 경우.
  * `this.enabled`를 코드로 false에서 true로 바꿀 때.
  * 스크립트의 부모(또는 조상) 엔티티가 켜지고, 스크립트 자체는 이미 켜짐 상태였던 경우.

**목적:**

* 스크립트가 꺼진 상태에서 켜진 상태로 바뀐 뒤 할 일을 처리합니다.
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

스크립트가 켜진 상태로 시작하면 `enable` 이벤트는 초기화 단계 중에 발생합니다. 이때 `onEnable`에 넣어 둔 설정도 함께 실행되게 하고 싶다면, 이벤트를 구독한 뒤 `initialize`에서 그 핸들러를 직접 한 번 호출하되 `if (this.enabled)` 체크로 감싸 주면 됩니다.

:::

### `disable` 이벤트 {#disable-event}

**발생 시점:**

* 스크립트 인스턴스가 꺼질 때. 다음 경우에 일어날 수 있습니다:
  * `this.enabled`를 코드로 `true`에서 `false`로 바꿀 때.
  * 스크립트의 부모(또는 조상) 엔티티가 꺼질 때.
  * `destroy` 이벤트가 일어나기 직전 (스크립트는 파괴되기 전에 자동으로 꺼지기 때문).

**목적:**

* 스크립트가 꺼진 상태가 될 때 할 일을 처리합니다.
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

* 스크립트 인스턴스의 실제 실행 상태가 켜짐에서 꺼짐으로, 또는 꺼짐에서 켜짐으로 바뀔 때마다. 다음 때문에 일어날 수 있습니다:
  * 스크립트 인스턴스의 `this.enabled` 속성을 코드로 바꿀 때.
  * 부모 스크립트 컴포넌트의 `enabled` 상태가 바뀔 때.
  * 스크립트의 부모(또는 조상) 엔티티의 `enabled` 상태가 바뀔 때.

**목적:**

* 스크립트의 켜짐/꺼짐 변화에 반응하는 콜백을 하나로 모아서 제공합니다.
* 방금 켜졌는지 꺼졌는지에 상관없이, 보통 바뀐 상태 값 자체를 기준으로 무언가를 처리해야 할 때 편리합니다.
* 두 경우에 할 일이 비슷하면서 결과 상태에 따라 조금 달라진다면, [`enable`](#enable-event)과 [`disable`](#disable-event)을 따로 다루는 것보다 로직이 간단해질 수 있습니다.

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

* 스크립트 인스턴스가 곧 파괴되려 할 때. 다음 경우에 일어납니다:
  * 그 부모 엔티티가 파괴될 때.
  * 이 스크립트 인스턴스를 담고 있는 스크립트 컴포넌트가 엔티티에서 제거될 때.
  * 스크립트 인스턴스 자체를 직접 파괴할 때 (예: `this.destroy()`, 직접 호출은 흔치 않음).

**목적:**

* 스크립트의 마지막 정리 단계입니다. 메모리 누수를 막고 스크립트를 깔끔하게 끝내려면 꼭 필요합니다.
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

`destroy` 핸들러는 한 번만 실행하면 되므로 보통 `this.once('destroy', ...)`를 씁니다.

:::

:::important[이벤트 핸들러 등록 해제]

스크립트가 `on`이나 `once`로 이벤트 핸들러를 등록했다면, `destroy` 핸들러 안에서 그 핸들러를 `off`로 꼭 풀어 주세요. 그러지 않으면 가비지 컬렉터가 스크립트가 쓰던 메모리를 회수하지 못할 수 있습니다.

:::
