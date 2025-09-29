---
title: Searching the Hierarchy
---

## Search by Name

```javascript
const found = app.root.findByName("Player");
```

See [`findByName`](https://manual.oasisserver.link/engine/classes/GraphNode.html#findbyname).

## Search by Tag

Tags are string labels that can be assigned to entities ([`Tags`](https://manual.oasisserver.link/engine/classes/Tags.html)).

```javascript
entity.tags.add("enemy");
const enemies = app.root.findByTag("enemy");
```

See [`tags`](https://manual.oasisserver.link/engine/classes/Entity.html#tags) and [`findByTag`](https://manual.oasisserver.link/engine/classes/Entity.html#findbytag).

:::tip
Use tags to group related entities. Tag-based searches are generally faster and more flexible than deep name-based searches.
:::

## Search by Component

```javascript
const lights = app.root.findComponents("light");
```

See [`findComponents`](https://manual.oasisserver.link/engine/classes/Entity.html#findcomponents).

## Recursion and Scope

- Searches can start from any entity, not just `app.root`.
- Searching in a smaller subtree is faster than searching the entire scene.
