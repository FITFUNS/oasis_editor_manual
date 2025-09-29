---
title: WASM Module
---

A WASM module (also called a WebAssembly module) contains compiled executable code for the web.

A WASM module consists of three parts:

* Binary executable file
* JavaScript glue code file
* Optional fallback asm.js

These files can be added to your project by dragging and dropping files to the Assets Panel or selecting 'Upload' from the Assets Panel context menu.

The OasisW editor currently only supports WASM modules compiled with [Emscripten][2].

## WASM Module Properties

When files are added to your project, select the WASM module to display properties in the Inspector panel:
![Wasm Module Properties](/img/user-manual/assets/wasm-module.png)

### Name

The name must match the module name defined in the glue and fallback scripts. This name is used to instantiate the module when loading.

### Glue script

This is the JavaScript glue code required to execute the WASM code.

### Fallback script

This is the optional fallback asm.js script to use when WebAssembly is not supported.

[2]: https://emscripten.org/
