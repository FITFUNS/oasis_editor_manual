---
title: Components
---

A **[`Component`](https://manual.oasisserver.link/engine/classes/Component.html)** adds data and behavior to an Entity.

## Examples

- [`CameraComponent`](https://manual.oasisserver.link/engine/classes/CameraComponent.html)
- [`LightComponent`](https://manual.oasisserver.link/engine/classes/LightComponent.html)
- [`RenderComponent`](https://manual.oasisserver.link/engine/classes/RenderComponent.html)
- [`RigidBodyComponent`](https://manual.oasisserver.link/engine/classes/RigidBodyComponent.html) & [`CollisionComponent`](https://manual.oasisserver.link/engine/classes/CollisionComponent.html)
- [`ScriptComponent`](https://manual.oasisserver.link/engine/classes/ScriptComponent.html)

:::tip
Only add components you actually need, and remove unused ones to keep Entities lean.
:::

## Adding a Component in code

```javascript
entity.addComponent('camera', {
    nearClip: 1,
    farClip: 100,
    fov: 55
});
```

See [`addComponent`](https://manual.oasisserver.link/engine/classes/Entity.html#addcomponent).

## Accessing a Component

```javascript
const camera = entity.camera;
```

## Removing a Component

```javascript
entity.removeComponent('camera');
```

See [`removeComponent`](https://manual.oasisserver.link/engine/classes/Entity.html#removecomponent).

## Enabling / Disabling Components

```javascript
entity.model.enabled = false;
```

See [`enabled`](https://manual.oasisserver.link/engine/classes/Component.html#enabled).

:::tip
If a component is temporarily not needed, consider disabling it instead of removing it.
:::
