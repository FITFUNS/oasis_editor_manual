---
title: Alternatives to ammo.js
---

ammo.js is probably the most popular and well-known JavaScript physics engine. It's very versatile and can produce high-quality simulations. However, it has quite high performance and memory requirements. Therefore, you should investigate whether it's really the best choice for your application. For example, if you're making a 2D game, a 2D physics engine might be more appropriate.

In fact, there are several alternatives to ammo.js:

| Physics Engine                                | JS       | WASM     | 2D       | 3D       | 
| -------------------------------------------- | -------- | -------- | -------- |------------|
| [box2d.js](https://github.com/kripken/box2d.js)    | &#x2713; | &#x2713; | &#x2713; |          |
| [Matter.js](https://github.com/liabru/matter-js)   | &#x2713; |          | &#x2713; |          |
| [p2.js](https://github.com/schteppe/p2.js)         | &#x2713; |          | &#x2713; |          |
| [cannon.js](https://github.com/schteppe/cannon.js) | &#x2713; |          |          | &#x2713; |
| [Oimo.js](https://github.com/lo-th/Oimo.js)        | &#x2713; |          |          | &#x2713; | 

<!-- Currently, there is only one OasisW integration for the p2.js engine, but it would be straightforward to create additional integrations for the other engines listed using a similar approach. -->

In December 2018, Nvidia open-sourced the [PhysX][1] physics engine. While there's no JS/WASM port of PhysX yet, it would probably be the most competitive physics runtime compared to Bullet/ammo.js. When a web port becomes available, it will be added to the table above.

[1]: https://github.com/NVIDIAGameWorks/PhysX
