---
title: Script Attributes
---

Script attributes are a powerful feature of OasisW that defines the public and configurable interface of a script. You can expose specific parameters that can be easily adjusted programmatically when instantiating or configuring scripts in code. This means you can write a script once and then easily adjust its behavior and properties by different instances or different team members.

## Why Use Script Attributes

* **Clear Public Interface:** Attributes formally define which parts of a script are intended for customization, improving code clarity and maintainability.
* **Visual Configuration:** When using visual development tools, attributes can appear as editable fields that provide a user-friendly interface for artists, designers, or other developers to configure scripts without diving deep into code.
* **Programmatic Configuration:** When creating or managing entities and script components through code, you can directly set initial values for these attributes, enabling dynamic and flexible setup.
* **Reusability:** Create generic scripts (e.g., "Movement" script) and customize attributes (speed, direction, target, etc.) for different entities through code configuration.
* **Collaboration:** Enables team members who don't primarily focus on coding to modify gameplay elements, character stats, and visual properties.
* **Rapid Iteration:** Quickly test different configurations and values by modifying initialization parameters in code.

## How It Works

When you declare attributes in a script, you're essentially defining properties that can be initialized and modified.

* **In Code:** You can set values for these attributes when adding scripts to script components or through script instance properties at runtime.
* **Programmatic Access:** You can directly access and modify attribute values through script instances.

For example, you can expose a `speed` attribute for a rotation script. You can set it programmatically with `this.speed = 5;` in the `initialize` method or set it when configuring an entity with `entity.script.myScript.speed = 5;`. This allows you to set different rotation speeds for different rotating objects using the same base script logic.

## Systems: Classic

OasisW has systems for defining script attributes that correspond to types of scripting methodologies:

<!-- 1. **[ESM Script Attributes](./esm.md):** Used with modern ES Module (`.mjs`) scripts. Attributes are typically declared using JSDoc comments above class member variables. This is the recommended approach for new projects. -->
1. **[Classic Script Attributes](./classic.md):** Used with older "classic" script (`.js`) files. Attributes are declared using the specific `MyScript.attributes.add(...)` API.

<!-- While the underlying goal is the same—to define a configurable interface—the syntax and some capabilities differ between the two. Click the links above to learn the specifics for each system. -->

Understanding and utilizing script attributes is key to building flexible, maintainable, and collaboration-friendly projects in OasisW when configuring scenes through code.
