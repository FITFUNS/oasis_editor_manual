---
title: 엔티티 (Entity)
---

**엔티티**는 OasisW 씬을 이루는 **가장 기본 단위**입니다 ([`Entity`](https://manual.oasisserver.link/engine/classes/Entity.html)). 앞서 말한 "빈 상자"가 바로 엔티티예요. 여기에 컴포넌트(부품)를 끼워 캐릭터도, 카메라도, 조명도 만듭니다.

## 이런 특징이 있어요

- 엔티티는 **부품(컴포넌트)을 0개 이상** 가질 수 있습니다. 아무것도 안 끼운 빈 엔티티도 그 자체로 존재할 수 있습니다.
- 엔티티끼리 **부모-자식 관계**로 묶어 계층 구조를 만들 수 있습니다 ([`addChild`](https://manual.oasisserver.link/engine/classes/GraphNode.html#addchild), [`removeChild`](https://manual.oasisserver.link/engine/classes/GraphNode.html#removechild)). 예를 들어 자동차(부모) 아래에 바퀴 네 개(자식)를 두는 식입니다.
- 엔티티는 **켜거나 끌 수** 있습니다 ([`enabled`](https://manual.oasisserver.link/engine/classes/GraphNode.html#enabled)). 끄면 화면에서 사라지고 동작도 멈춥니다.

:::tip

엔티티는 **가볍게** 유지하세요. 당장 필요 없는 부품은 끼우지 않는 편이 좋습니다.

:::

## 코드로 엔티티 만들기

```javascript
const entity = new pc.Entity("MyEntity");
app.root.addChild(entity);
```

새 엔티티를 만들고 씬의 최상단(`app.root`)에 붙이는 코드입니다. 붙여야 씬에 실제로 등장합니다.

## 엔티티 켜기 / 끄기

```javascript
entity.enabled = false; // 엔티티와 그 안의 모든 부품을 끕니다
```

:::tip

당장 안 쓰는 엔티티는 **꺼 두면** 처리량이 줄어 성능에 도움이 됩니다.

:::

## 엔티티의 일생(생명주기)

- **생성** — [`Entity constructor`](https://manual.oasisserver.link/engine/classes/Entity.html#constructor)로 만듭니다.
- **부모 붙이기 / 떼기** — [`addChild`](https://manual.oasisserver.link/engine/classes/GraphNode.html#addchild) / [`removeChild`](https://manual.oasisserver.link/engine/classes/GraphNode.html#removechild).
- **없애기** — [`destroy`](https://manual.oasisserver.link/engine/classes/GraphNode.html#destroy)로 완전히 삭제합니다.

:::tip

엔티티가 더 이상 필요 없으면 `destroy`를 불러 **자원을 정리**하고 계층 구조에서 떼어 내세요.

:::
