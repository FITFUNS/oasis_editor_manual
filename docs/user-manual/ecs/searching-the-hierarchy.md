---
title: 계층 구조 검색 (Searching the Hierarchy)
---

## 이름으로 검색

```javascript
const found = app.root.findByName("Player");
```

[`findByName`](https://manual.oasisserver.link/engine/classes/GraphNode.html#findbyname)을 참조하세요.

## 태그로 검색

태그는 엔티티에 할당할 수 있는 문자열 라벨입니다 ([`Tags`](https://manual.oasisserver.link/engine/classes/Tags.html)).

```javascript
entity.tags.add("enemy");
const enemies = app.root.findByTag("enemy");
```

[`tags`](https://manual.oasisserver.link/engine/classes/Entity.html#tags)와 [`findByTag`](https://manual.oasisserver.link/engine/classes/Entity.html#findbytag)를 참조하세요.

:::tip
관련된 엔티티를 그룹화하기 위해 태그를 사용하세요. 태그 기반 검색은 일반적으로 깊은 이름 기반 검색보다 빠르고 유연합니다.
:::

## 컴포넌트로 검색

```javascript
const lights = app.root.findComponents("light");
```

[`findComponents`](https://manual.oasisserver.link/engine/classes/Entity.html#findcomponents)를 참조하세요.

## 재귀 및 범위

- 검색은 `app.root`뿐만 아니라 모든 엔티티에서 시작할 수 있습니다.
- 작은 하위 트리에서 검색하는 것이 전체 씬을 검색하는 것보다 빠릅니다.
