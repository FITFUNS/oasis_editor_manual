---
title: Updating ammo.js
---

### Introduction

OasisW has added support for the latest version of ammo.js.

The new version has several benefits:

- More parts of the underlying Bullet API are exposed
- Support for ammo.js wasm module has been added
- The wasm version is smaller and runs faster

### Existing Projects

Projects created before the introduction of the wasm module continue to use the legacy version of ammo.js by default. It is up to the project owner to migrate the physics system to the latest version of ammo.js.

To check if your project is using the legacy version of ammo.js, go to the Scene Settings panel:

![Physics Legacy Settings](/img/user-manual/physics/physics-legacy-settings.png)

If 'Enable Physics' does not appear, then the project is new and has no option to use the legacy built-in version of ammo.js.

If 'Enable Physics' is checked, then the legacy version of ammo.js is being silently added to the project at build time.

### Migration

To use the latest version of ammo.js, disable 'Enable Physics' and click 'Import Ammo'. This will import the latest version of ammo.js provided by OasisW into the Assets panel.

If the ammo.js update causes problems in your project, you may need to revert to the previous version. Do this by deleting (or disabling) the ammo.js module in your project and re-enabling the physics checkbox.

### Note

A project should either include legacy physics (using the 'Enable Physics' checkbox) or have the ammo.js module directly included in the project, but not both!
