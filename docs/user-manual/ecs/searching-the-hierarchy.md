---
title: Searching the Hierarchy
---

## By Name

```javascript
const found = app.root.findByName("Player");
```

See [`findByName`](https://manual.oasisserver.link/engine/classes/GraphNode.html#findbyname).

## By Tag

Tags are string labels you can assign to Entities ([`Tags`](https://manual.oasisserver.link/engine/classes/Tags.html)).

```javascript
entity.tags.add("enemy");
const enemies = app.root.findByTag("enemy");
```

See [`tags`](https://manual.oasisserver.link/engine/classes/Entity.html#tags) and [`findByTag`](https://manual.oasisserver.link/engine/classes/Entity.html#findbytag).

:::tip
Use tags for grouping related Entities. Tag-based searches are typically faster and more flexible than deep name-based searches.
:::

## By Component

```javascript
const lights = app.root.findComponents("light");
```

See [`findComponents`](https://manual.oasisserver.link/engine/classes/Entity.html#findcomponents).

## Recursion and Scope

- Searches can be started from any Entity, not just `app.root`.
- Searching from a smaller subtree is faster than searching the whole scene.
