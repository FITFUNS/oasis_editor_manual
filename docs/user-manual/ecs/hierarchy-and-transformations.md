---
title: 계층 구조 & 변환 (Hierarchy & Transforms)
---

엔티티는 **부모-자식 계층 구조**로 배치할 수 있습니다. `Entity` 클래스는 [`GraphNode`](https://manual.oasisserver.link/engine/classes/GraphNode.html) 슈퍼클래스에서 변환 기능을 상속받습니다.

## 주요 포인트

- **변환은 부모를 기준으로** 상대적입니다.
- **월드 변환**은 계층 구조를 통해 로컬 변환을 결합하여 계산됩니다.
- 부모를 이동하면 모든 자식에 영향을 줍니다.

:::tip
깊은 계층 구조를 최소화하세요. 얕은 계층 구조가 관리하기 쉽고 성능이 더 좋을 수 있습니다.
:::

## 예시

```javascript
childEntity.setLocalPosition(1, 0, 0); // 부모를 기준으로 상대적
console.log(childEntity.getWorldPosition()); // 전역 위치
```

[`setLocalPosition`](https://manual.oasisserver.link/engine/classes/GraphNode.html#setlocalposition)과 [`getWorldPosition`](https://manual.oasisserver.link/engine/classes/GraphNode.html#getworldposition)을 참조하세요.

## 부모 재설정

```javascript
newParent.addChild(childEntity);
```

## 스케일링 고려사항

- 비균등 스케일링은 시각적이거나 물리적 문제를 일으킬 수 있습니다.
- 필요한 경우가 아니면 물리 활성화된 엔티티의 스케일링을 피하세요.
