---
title: WASM Module
---

A WASM module (also called a WebAssembly module) contains **compiled executable code for the web**. It lets code written in languages like C or C++ run fast in the browser.

A WASM module consists of three parts.

- A binary executable file
- A JavaScript glue code file
- An optional fallback asm.js

You can add these files to your project by **dragging and dropping** them onto the Assets panel, or by selecting **Upload** from the Assets panel context menu.

:::warning Support scope

The OasisW editor currently supports only WASM modules compiled with [Emscripten](https://emscripten.org/).

:::

:::note You may already be using one

The physics engine `ammo.js` is a classic example of a WASM module. If you open the `ammo.js` folder in your project's Assets panel, you will find exactly the three files described above: `ammo.js` (glue code), `ammo.wasm.js` (glue code), and `ammo.wasm.wasm` (binary).

:::

## WASM module properties

Once the files have been added to your project, select the WASM module to view its properties in the Inspector panel.

![WASM module properties](/img/user-manual/assets/wasm-module.png)

### Name

The name **must match the module name defined in the glue and fallback scripts.** This name is used to instantiate the module when loading.

### Glue script

The JavaScript glue code required to execute the WASM code.

### Fallback script

An **optional** fallback asm.js script to use when WebAssembly is not supported.

## Related

- [Physics](/user-manual/physics) — uses the ammo.js WASM module.
- [Applying physics to a box](/user-manual/physics)
