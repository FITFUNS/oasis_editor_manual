---
title: ammo.js 대안 (Alternatives to ammo.js)
---

ammo.js는 아마 가장 널리 쓰이고 잘 알려진 자바스크립트 물리 엔진일 것입니다. 활용 폭이 넓고 아주 높은 품질의 시뮬레이션을 만들 수 있습니다. 다만 성능과 메모리를 꽤 많이 쓰는 편입니다. 그래서 내 앱에 정말 ammo.js가 가장 알맞은지 한 번 따져 볼 필요가 있습니다. 예를 들어 2D 게임을 만든다면 2D 전용 물리 엔진이 더 잘 맞을 수 있습니다.

실제로 ammo.js 말고도 쓸 수 있는 대안이 여럿 있습니다:

| 물리 엔진                                     | JS       | WASM     | 2D       | 3D       | 
| -------------------------------------------- | -------- | -------- | -------- |------------|
| [box2d.js](https://github.com/kripken/box2d.js)    | &#x2713; | &#x2713; | &#x2713; |          |
| [Matter.js](https://github.com/liabru/matter-js)   | &#x2713; |          | &#x2713; |          |
| [p2.js](https://github.com/schteppe/p2.js)         | &#x2713; |          | &#x2713; |          |
| [cannon.js](https://github.com/schteppe/cannon.js) | &#x2713; |          |          | &#x2713; |
| [Oimo.js](https://github.com/lo-th/Oimo.js)        | &#x2713; |          |          | &#x2713; | 

<!-- 현재 p2.js 엔진에 대한 OasisW 통합이 하나만 존재하지만, 유사한 접근 방식을 사용하여 나열된 다른 엔진에 대한 추가 통합을 만드는 것은 간단할 것입니다. -->

2018년 12월에 Nvidia가 [PhysX][1] 물리 엔진을 오픈소스로 공개했습니다. 아직 PhysX를 JS나 WASM으로 옮긴 버전은 없지만, Bullet/ammo.js와 견주면 아마 가장 경쟁력 있는 물리 엔진일 것입니다. 웹용 포트가 나오면 위 표에 추가하겠습니다.

[1]: https://github.com/NVIDIAGameWorks/PhysX
