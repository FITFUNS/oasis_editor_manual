---
title: 시작하기 (Getting Started)
---

이 가이드에서는 OasisW 스크립트를 작성할 때 꼭 알아야 하는 기본 구조와 개념을 살펴봅니다.
<!-- 현대적인 ESM 접근 방식을 사용하든 클래식 시스템을 사용하든  -->


## 스크립트란 무엇인가요?

스크립트는 씬에 있는 엔티티가 어떻게 움직이고 동작할지를 정해 주는 자바스크립트(JavaScript) 코드 조각입니다. 스크립트에는 다음과 같은 특징이 있습니다:

* **재사용 가능** - 같은 스크립트를 여러 엔티티에 붙여서 그대로 쓸 수 있습니다
* **구성 가능** - 속성을 이용해 엔티티마다 동작을 다르게 맞출 수 있습니다
* **이벤트 기반** - 라이프사이클 이벤트나 사용자의 조작에 맞춰 반응합니다

## 기본 스크립트 구조

어떤 시스템을 쓰더라도 OasisW 스크립트는 대부분 비슷한 틀을 따릅니다:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem value="esm" label="ESM (Recommended)">

```javascript
import { Script } from 'playcanvas';

export class MyScript extends Script {
    static scriptName = 'myScript';

    /** @attribute */
    speed = 10;

    initialize() {
        // Called once when the script starts
        console.log('Script initialized!');
    }

    update(dt) {
        // Called every frame
        this.entity.rotate(0, this.speed * dt, 0);
    }
}
```

**Key points for ESM scripts:**

* Import the `Script` class from OasisW
* Export a class that extends `Script`
* Use `/** @attribute */` to expose properties to the editor
* File must have `.mjs` extension

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var MyScript = pc.createScript('myScript');

MyScript.attributes.add('speed', { type: 'number', default: 10 });

MyScript.prototype.initialize = function() {
    // 스크립트가 시작될 때 한 번 호출됩니다
    console.log('Script initialized!');
};

MyScript.prototype.update = function(dt) {
    // 매 프레임마다 호출됩니다
    this.entity.rotate(0, this.speed * dt, 0);
};
```

**클래식 스크립트에서 꼭 기억할 점:**

* `pc.createScript()`로 스크립트를 만듭니다
* `.attributes.add()` 메서드로 속성을 추가합니다
* 프로토타입(prototype)에 메서드를 정의합니다
* 파일 확장자는 `.js`를 사용합니다

</TabItem>
</Tabs>

## 핵심 개념

### 스크립트 라이프사이클

스크립트에는 정해진 시점에 자동으로 실행되는 여러 메서드가 있습니다:

* `initialize()` - 스크립트가 시작될 때 딱 한 번 실행됩니다
* `update(dt)` - 매 프레임마다 실행되며, 이전 프레임과의 시간 간격(dt)을 함께 받습니다
* `postUpdate(dt)` - 모든 업데이트가 끝난 뒤에 실행됩니다
* `enable`, `disable`, `destroy` 시점에 반응하는 이벤트 핸들러

[스크립트 라이프사이클](./script-lifecycle.md)에서 더 자세히 알아보세요.

### 속성

속성을 이용하면 스크립트의 값을 에디터에 드러낼 수 있어서, 코드를 고치지 않고도 스크립트 동작을 바꿀 수 있습니다:

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem value="esm" label="ESM">

```javascript
import { Color, Entity, Script } from 'playcanvas';

export class Configurable extends Script {
    static scriptName = 'configurable';

    /** @attribute */
    speed = 5;
    
    /** @attribute */
    color = new Color(1, 0, 0);
    
    /** 
     * @attribute 
     * @type {Entity}
     */
    target;
}
```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var Configurable = pc.createScript('configurable');

Configurable.attributes.add('speed', { type: 'number', default: 5 });
Configurable.attributes.add('color', { type: 'rgba', default: [1, 0, 0, 1] });
Configurable.attributes.add('target', { type: 'entity' });
```

</TabItem>
</Tabs>

[스크립트 속성](./script-attributes/index.md)에 대해 더 자세히 알아보세요.

### 엔티티 접근

모든 스크립트는 `this.entity`를 통해 자신이 붙어 있는 엔티티를 다룰 수 있습니다:

```javascript
// 엔티티의 위치 가져오기
const position = this.entity.getPosition();

// 자식 엔티티 찾기
const child = this.entity.findByName('ChildName');

// 컴포넌트 접근
const camera = this.entity.camera;
const rigidbody = this.entity.rigidbody;
```

## 다음 단계

<!-- * **ESM 스크립트 학습:** 새로 시작한다면 현대적인 접근 방식을 위해 [ESM 스크립트](./esm-scripts.md)를 확인하세요 -->
* **라이프사이클 이해:** 코드가 언제 실행되는지 파악하려면 [스크립트 라이프사이클](./script-lifecycle.md)을 읽어보세요
* **상호작용 추가:** 스크립트끼리 신호를 주고받게 하려면 [이벤트](./events.md)를 살펴보세요

<!-- :::tip

**어떤 시스템을 사용해야 할까요?**

새 프로젝트의 경우 더 나은 도구, 깔끔한 구문, 현대적인 JavaScript 기능을 제공하는 **ESM 스크립트**를 권장합니다. 클래식 스크립트는 기존 프로젝트에서 여전히 완전히 지원됩니다.

::: -->
