---
title: 컴포넌트 (Component)
---

[**컴포넌트**](https://manual.oasisserver.link/engine/classes/Component.html)는 빈 엔티티(상자)에 끼워 **데이터와 기능을 더해 주는 부품**입니다. 어떤 부품을 끼우느냐에 따라 그 엔티티가 카메라가 되기도, 조명이 되기도 합니다.

## 어떤 부품들이 있나요

- [`CameraComponent`](https://manual.oasisserver.link/engine/classes/CameraComponent.html) — 화면을 비추는 카메라
- [`LightComponent`](https://manual.oasisserver.link/engine/classes/LightComponent.html) — 빛(조명)
- [`RenderComponent`](https://manual.oasisserver.link/engine/classes/RenderComponent.html) — 3D 메시를 화면에 그림
- [`RigidBodyComponent`](https://manual.oasisserver.link/engine/classes/RigidBodyComponent.html) & [`CollisionComponent`](https://manual.oasisserver.link/engine/classes/CollisionComponent.html) — 물리(무게·충돌)
- [`ScriptComponent`](https://manual.oasisserver.link/engine/classes/ScriptComponent.html) — 내가 짠 코드(동작)

:::tip

정말 필요한 부품만 끼우고, 안 쓰는 것은 빼서 엔티티를 **가볍게** 유지하세요.

:::

## 코드로 부품 끼우기

```javascript
entity.addComponent('camera', {
    nearClip: 1,
    farClip: 100,
    fov: 55
});
```

엔티티에 카메라 부품을 끼우면서 초기 설정값을 함께 넘기는 예시입니다. 자세한 내용은 [`addComponent`](https://manual.oasisserver.link/engine/classes/Entity.html#addcomponent)를 참고하세요.

## 부품 가져오기

```javascript
const camera = entity.camera;
```

끼워 둔 부품은 이렇게 이름으로 바로 꺼내 쓸 수 있습니다.

## 부품 빼기

```javascript
entity.removeComponent('camera');
```

자세한 내용은 [`removeComponent`](https://manual.oasisserver.link/engine/classes/Entity.html#removecomponent)를 참고하세요.

## 부품 켜기 / 끄기

```javascript
entity.model.enabled = false;
```

부품을 아예 빼지 않고 잠깐 **꺼 둘** 수도 있습니다. [`enabled`](https://manual.oasisserver.link/engine/classes/Component.html#enabled)를 참고하세요.

:::tip

잠깐만 안 쓸 부품이라면, **빼는 대신 꺼 두는 것**을 먼저 고려하세요.

:::
