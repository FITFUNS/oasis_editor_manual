---
title: Entity
---

**Entities** are the fundamental building blocks of OasisW scenes ([`Entity`](https://manual.oasisserver.link/engine/classes/Entity.html)).

## Key characteristics

- Entities can have **zero or more components**.
- Entities can have **parent-child relationships** to form hierarchies ([`addChild`](https://manual.oasisserver.link/engine/classes/GraphNode.html#addchild), [`removeChild`](https://manual.oasisserver.link/engine/classes/GraphNode.html#removechild)).
- Entities can be **enabled** or **disabled** ([`enabled`](https://manual.oasisserver.link/engine/classes/GraphNode.html#enabled)).

:::tip
Keep entities lightweight — avoid adding unnecessary components.
:::

## Creating Entities in Code

```javascript
const entity = new pc.Entity("MyEntity");
app.root.addChild(entity);
```

## Enabling / Disabling Entities

```javascript
entity.enabled = false; // Disable entity and all components
```

:::tip
Disable entities when not in use to reduce processing overhead and improve performance.
:::

## Lifecycle

- **Creation** — [`Entity constructor`](https://manual.oasisserver.link/engine/classes/Entity.html#constructor).
- **Parent Assignment** — [`addChild`](https://manual.oasisserver.link/engine/classes/GraphNode.html#addchild) / [`removeChild`](https://manual.oasisserver.link/engine/classes/GraphNode.html#removechild).
- **Destruction** — [`destroy`](https://manual.oasisserver.link/engine/classes/GraphNode.html#destroy).

:::tip
Call `destroy` when an entity is no longer needed to free resources and remove it from the hierarchy.
:::

