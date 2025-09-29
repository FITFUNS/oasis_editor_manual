---
title: 엔진 API 호출 (Calling the Engine API)
---

OasisW 스크립트를 작성할 때는 [OasisW Engine API](https://manual.oasisserver.link/engine/)를 사용합니다. 이 페이지에서는 스크립트에서 가장 자주 사용하게 될 핵심 클래스와 패턴을 다룹니다.

## 스크립트 작성자를 위한 핵심 클래스

### 스크립트 컨텍스트

모든 스크립트는 이러한 핵심 객체에 접근할 수 있습니다:

```javascript
this.app        // 메인 애플리케이션 (AppBase)
this.entity     // 이 스크립트가 연결된 엔티티
```

:::important 중요

`this.app`과 `this.entity`는 스크립트 인스턴스에서 정의된 메서드(`initialize`, `update` 등) 내에서만 유효합니다. JavaScript의 `this` 키워드에 대해 [더 알아보세요](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).

:::

### 핵심 클래스

**[`AppBase`](https://manual.oasisserver.link/engine/classes/AppBase.html)** - 애플리케이션

```javascript
// 일반적인 앱 작업
this.app.fire('game:start');
const player = this.app.root.findByName('Player');
const texture = this.app.assets.find('logo', 'texture');
```

**[`Entity`](https://manual.oasisserver.link/engine/classes/Entity.html)** - 씬의 객체

```javascript
// 일반적인 엔티티 작업
this.entity.setPosition(0, 5, 0);
this.entity.rotate(0, 90, 0);
const child = this.entity.findByName('Weapon');
```

**[`Component`](https://manual.oasisserver.link/engine/classes/Component.html)** - 엔티티에 기능 추가

```javascript
// 컴포넌트 접근
const camera = this.entity.camera;
const light = this.entity.light;
const rigidbody = this.entity.rigidbody;
const sound = this.entity.sound;
```

### 수학 클래스

계산과 변환을 위해 이를 가져오세요:

```javascript
import { Vec3, Quat, Color } from 'playcanvas';

const position = new Vec3(0, 5, 0);
const rotation = new Quat();
const red = new Color(1, 0, 0);
```

## 일반적인 스크립트 패턴

### 엔티티 찾기

```javascript
// 이름으로 (전체 계층 구조 검색)
const player = this.app.root.findByName('Player');

// 태그로 (배열 반환)
const enemies = this.app.root.findByTag('enemy');

// 현재 엔티티를 기준으로
const weapon = this.entity.findByPath('Arms/RightHand/Weapon');
```

### 에셋 작업

```javascript
// 에셋 찾기 및 로드
const sound = this.app.assets.find('explosion', 'audio');
sound.ready(() => {
    this.entity.sound.play('explosion');
});
this.app.assets.load(sound);
```

### 이벤트 및 통신

```javascript
// 애플리케이션 이벤트 발생
this.app.fire('player:died', this.entity);

// 이벤트 수신
this.app.on('game:start', this.onGameStart, this);
```

## 더 알아보기

<!-- * **[Engine Guide](../../engine/index.md)** - In-depth guide to the OasisW Engine runtime -->
* **[전체 엔진 API 참조](https://manual.oasisserver.link/engine/)** - 완전한 문서
* **[스크립트 라이프사이클](./script-lifecycle.md)** - 스크립트 메서드가 호출되는 시점
* **[이벤트](./events.md)** - 스크립트 통신 패턴

<!-- :::tip

**IDE 지원:** 스크립트 작성 시 자동완성과 인라인 문서를 위한 현대적인 IDE 기능을 활용하세요.

::: -->
