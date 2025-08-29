---
title: Script Attributes
---

Script Attributes are a powerful feature in OasisW that define the public, configurable interface of your scripts. They allow you to expose specific parameters that can be easily tweaked programmatically when instantiating or configuring scripts in code. This means you can write a script once, and then easily adjust its behavior and properties for different instances or by different team members.

## Why Use Script Attributes?

* **Clear Public Interface:** Attributes formally define which parts of a script are intended to be customized, improving code clarity and maintainability.
* **Visual Configuration:** When using visual development tools, attributes can appear as editable fields providing a user-friendly interface for artists, designers, or other developers to configure scripts without needing to delve into code.
* **Programmatic Configuration:** When creating or managing Entities and Script Components via code, you can directly set the initial values for these attributes, allowing for dynamic and flexible setups.
* **Reusability:** Create generic scripts (e.g., a "Movement" script) and customize their properties (like speed, direction, target) for various Entities through code configuration.
* **Collaboration:** Enable team members, including those not primarily focused on coding, to modify gameplay elements, character stats, and visual properties.
* **Rapid Iteration:** Quickly test different configurations and values by modifying initialization parameters in your code.

## How They Work

When you declare an attribute in your script, you are essentially defining a property that can be initialized and modified.

* **In Code:** You can set the values of these attributes when you add a script to a Script Component or at runtime via script instance properties.
* **Programmatic Access:** You can directly access and modify attribute values through your script instances.

For example, a `speed` attribute in a rotation script could be exposed. Programmatically, you could set `this.speed = 5;` in an `initialize` method or `entity.script.myScript.speed = 5;` when setting up an entity. This allows you to set different rotation speeds for different spinning objects, all using the same underlying script logic.

## Two Systems: ESM and Classic

OasisW has two systems for defining script attributes, corresponding to the two types of scripting methodologies:

1. **[ESM Script Attributes](./esm.md):** Used with modern ES Module (`.mjs`) scripts. Attributes are typically declared using JSDoc comments above class member variables. This is the recommended approach for new projects.
2. **[Classic Script Attributes](./classic.md):** Used with the older "Classic" script (`.js`) files. Attributes are declared using a specific `MyScript.attributes.add(...)` API.

While the underlying goal is the same—to define a configurable interface—the syntax and some capabilities differ between the two. Click the links above to learn the specifics for each system.

Understanding and utilizing Script Attributes is key to building flexible, maintainable, and collaboratively-friendly projects in OasisW when constructing your scenes through code.
