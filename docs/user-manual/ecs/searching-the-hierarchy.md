---
title: 계층 구조 검색 (Searching the Hierarchy)
---

게임을 만들다 보면 "그 엔티티가 지금 어디 있지?" 하고 **원하는 엔티티를 찾아야** 할 때가 많습니다. 이름·태그·부품 등 여러 방법으로 찾을 수 있습니다.

## 이름으로 찾기

```javascript
const found = app.root.findByName("Player");
```

이름이 `Player`인 엔티티를 찾습니다. [`findByName`](https://manual.oasisserver.link/engine/classes/GraphNode.html#findbyname)을 참고하세요.

## 태그로 찾기

**태그(tag)**는 엔티티에 붙이는 **문자열 꼬리표**입니다 ([`Tags`](https://manual.oasisserver.link/engine/classes/Tags.html)). 예를 들어 적 캐릭터마다 `enemy` 태그를 붙여 두면, 나중에 한 번에 모아 찾을 수 있습니다.

```javascript
entity.tags.add("enemy");
const enemies = app.root.findByTag("enemy");
```

[`tags`](https://manual.oasisserver.link/engine/classes/Entity.html#tags), [`findByTag`](https://manual.oasisserver.link/engine/classes/Entity.html#findbytag)를 참고하세요.

:::tip

관련된 엔티티는 **태그로 묶어** 두세요. 태그로 찾는 편이 이름을 하나하나 뒤지는 것보다 대체로 빠르고 유연합니다.

:::

## 부품(컴포넌트)으로 찾기

```javascript
const lights = app.root.findComponents("light");
```

씬 안의 모든 **조명 부품**을 한 번에 모읍니다. [`findComponents`](https://manual.oasisserver.link/engine/classes/Entity.html#findcomponents)를 참고하세요.

## 어디서부터 찾을지(검색 범위)

- 검색은 꼭 `app.root`(최상단)에서만 하는 게 아니라, **아무 엔티티에서나** 시작할 수 있습니다.
- **작은 가지에서만** 찾으면 씬 전체를 뒤지는 것보다 빠릅니다. 찾을 범위를 좁힐수록 좋습니다.
