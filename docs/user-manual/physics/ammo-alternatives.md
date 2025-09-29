---
title: ammo.js 대안 (Alternatives to ammo.js)
---

ammo.js는 아마도 가장 인기 있고 잘 알려진 JavaScript 물리 엔진일 것입니다. 매우 다재다능하며 고품질 시뮬레이션을 생성할 수 있습니다. 하지만 상당히 높은 성능과 메모리 요구사항을 가지고 있습니다. 따라서 애플리케이션에 정말로 최선의 선택인지 조사해야 합니다. 예를 들어, 2D 게임을 만든다면 2D 물리 엔진이 더 적절할 수 있습니다.

실제로 ammo.js에는 여러 대안이 있습니다:

| 물리 엔진                                     | JS       | WASM     | 2D       | 3D       | 
| -------------------------------------------- | -------- | -------- | -------- |------------|
| [box2d.js](https://github.com/kripken/box2d.js)    | &#x2713; | &#x2713; | &#x2713; |          |
| [Matter.js](https://github.com/liabru/matter-js)   | &#x2713; |          | &#x2713; |          |
| [p2.js](https://github.com/schteppe/p2.js)         | &#x2713; |          | &#x2713; |          |
| [cannon.js](https://github.com/schteppe/cannon.js) | &#x2713; |          |          | &#x2713; |
| [Oimo.js](https://github.com/lo-th/Oimo.js)        | &#x2713; |          |          | &#x2713; | 

<!-- 현재 p2.js 엔진에 대한 OasisW 통합이 하나만 존재하지만, 유사한 접근 방식을 사용하여 나열된 다른 엔진에 대한 추가 통합을 만드는 것은 간단할 것입니다. -->

2018년 12월에 Nvidia가 [PhysX][1] 물리 엔진을 오픈소스로 공개했습니다. 아직 PhysX의 JS/WASM 포트는 없지만, Bullet/ammo.js와 비교했을 때 아마도 가장 경쟁력 있는 물리 런타임일 것입니다. 웹 포트가 사용 가능해지면 위 표에 추가될 것입니다.

[1]: https://github.com/NVIDIAGameWorks/PhysX
