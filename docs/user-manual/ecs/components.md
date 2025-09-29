---
title: 컴포넌트 (Component)
---

[**`Component`**](https://manual.oasisserver.link/engine/classes/Component.html)는 엔티티에 데이터와 동작을 추가합니다.

## 예시

- [`CameraComponent`](https://manual.oasisserver.link/engine/classes/CameraComponent.html)
- [`LightComponent`](https://manual.oasisserver.link/engine/classes/LightComponent.html)
- [`RenderComponent`](https://manual.oasisserver.link/engine/classes/RenderComponent.html)
- [`RigidBodyComponent`](https://manual.oasisserver.link/engine/classes/RigidBodyComponent.html) & [`CollisionComponent`](https://manual.oasisserver.link/engine/classes/CollisionComponent.html)
- [`ScriptComponent`](https://manual.oasisserver.link/engine/classes/ScriptComponent.html)

:::tip
실제로 필요한 컴포넌트만 추가하고, 사용하지 않는 것은 제거하여 엔티티를 가볍게 유지하세요.
:::

## 코드에서 컴포넌트 추가

```javascript
entity.addComponent('camera', {
    nearClip: 1,
    farClip: 100,
    fov: 55
});
```

[`addComponent`](https://manual.oasisserver.link/engine/classes/Entity.html#addcomponent)를 참조하세요.

## 컴포넌트 접근

```javascript
const camera = entity.camera;
```

## 컴포넌트 제거

```javascript
entity.removeComponent('camera');
```

[`removeComponent`](https://manual.oasisserver.link/engine/classes/Entity.html#removecomponent)를 참조하세요.

## 컴포넌트 활성화 / 비활성화

```javascript
entity.model.enabled = false;
```

[`enabled`](https://manual.oasisserver.link/engine/classes/Component.html#enabled)를 참조하세요.

:::tip
컴포넌트가 일시적으로 필요하지 않다면, 제거하는 대신 비활성화를 고려하세요.
:::
