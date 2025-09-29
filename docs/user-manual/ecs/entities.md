---
title: 엔티티 (Entity)
---

**엔티티**는 OasisW 씬의 기본 구성 요소입니다 ([`Entity`](https://manual.oasisserver.link/engine/classes/Entity.html)).

## 주요 특징

- 엔티티는 **0개 이상의 컴포넌트**를 가질 수 있습니다.
- 엔티티는 계층 구조를 형성하기 위해 **부모-자식 관계**를 가질 수 있습니다 ([`addChild`](https://manual.oasisserver.link/engine/classes/GraphNode.html#addchild), [`removeChild`](https://manual.oasisserver.link/engine/classes/GraphNode.html#removechild)).
- 엔티티는 **활성화**되거나 **비활성화**될 수 있습니다 ([`enabled`](https://manual.oasisserver.link/engine/classes/GraphNode.html#enabled)).

:::tip
엔티티를 가볍게 유지하세요 — 불필요한 컴포넌트 추가를 피하세요.
:::

## 코드에서 엔티티 생성

```javascript
const entity = new pc.Entity("MyEntity");
app.root.addChild(entity);
```

## 엔티티 활성화 / 비활성화

```javascript
entity.enabled = false; // 엔티티와 모든 컴포넌트를 비활성화
```

:::tip
사용하지 않을 때는 엔티티를 비활성화하여 처리량을 줄이고 성능을 향상시키세요.
:::

## 생명주기

- **생성** — [`Entity constructor`](https://manual.oasisserver.link/engine/classes/Entity.html#constructor).
- **부모 설정** — [`addChild`](https://manual.oasisserver.link/engine/classes/GraphNode.html#addchild) / [`removeChild`](https://manual.oasisserver.link/engine/classes/GraphNode.html#removechild).
- **파괴** — [`destroy`](https://manual.oasisserver.link/engine/classes/GraphNode.html#destroy).

:::tip
엔티티가 더 이상 필요하지 않을 때는 `destroy`를 호출하여 리소스를 해제하고 계층 구조에서 분리하세요.
:::
