---
title: Component
---

[**`Component`**](https://manual.oasisserver.link/engine/classes/Component.html) adds data and behavior to entities.

## Examples

- [`CameraComponent`](https://manual.oasisserver.link/engine/classes/CameraComponent.html)
- [`LightComponent`](https://manual.oasisserver.link/engine/classes/LightComponent.html)
- [`RenderComponent`](https://manual.oasisserver.link/engine/classes/RenderComponent.html)
- [`RigidBodyComponent`](https://manual.oasisserver.link/engine/classes/RigidBodyComponent.html) & [`CollisionComponent`](https://manual.oasisserver.link/engine/classes/CollisionComponent.html)
- [`ScriptComponent`](https://manual.oasisserver.link/engine/classes/ScriptComponent.html)

:::tip
Only add components that are actually needed, and remove unused ones to keep entities lightweight.
:::

## Adding Components in Code

```javascript
entity.addComponent('camera', {
    nearClip: 1,
    farClip: 100,
    fov: 55
});
```

See [`addComponent`](https://manual.oasisserver.link/engine/classes/Entity.html#addcomponent).

## Accessing Components

```javascript
const camera = entity.camera;
```

## Removing Components

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
Consider disabling components instead of removing them if they're only temporarily not needed.
:::
