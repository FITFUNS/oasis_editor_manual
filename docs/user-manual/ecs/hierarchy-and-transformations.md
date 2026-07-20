---
title: 계층 구조 & 변환 (Hierarchy & Transforms)
---

엔티티는 **부모-자식 계층 구조**로 묶을 수 있습니다. 이렇게 묶으면 위치·회전·크기 같은 **변환(transform)**이 부모를 따라 함께 움직입니다. (`Entity`는 [`GraphNode`](https://manual.oasisserver.link/engine/classes/GraphNode.html)로부터 이 변환 기능을 물려받습니다.)

## 꼭 기억할 점

- 자식의 위치·회전·크기는 **부모를 기준으로** 정해집니다. (로컬 변환)
- 화면에 실제로 보이는 최종 위치(**월드 변환**)는, 부모부터 자식까지의 변환을 쭉 합쳐서 계산됩니다.
- **부모를 움직이면 자식도 모두 따라 움직입니다.** 자동차(부모)를 옮기면 바퀴(자식)도 같이 가는 것과 같습니다.

:::tip

계층 구조는 **너무 깊게** 만들지 마세요. 얕은 구조가 관리하기도 쉽고 성능에도 유리할 수 있습니다.

:::

## 예시

```javascript
childEntity.setLocalPosition(1, 0, 0); // 부모 기준 위치
console.log(childEntity.getWorldPosition()); // 화면상의 실제(전역) 위치
```

`setLocalPosition`은 부모를 기준으로 한 위치를 정하고, `getWorldPosition`은 부모까지 반영된 최종 위치를 알려 줍니다. [`setLocalPosition`](https://manual.oasisserver.link/engine/classes/GraphNode.html#setlocalposition), [`getWorldPosition`](https://manual.oasisserver.link/engine/classes/GraphNode.html#getworldposition)을 참고하세요.

## 부모 바꾸기

```javascript
newParent.addChild(childEntity);
```

자식을 다른 부모에게 옮겨 붙이는 코드입니다.

## 크기(스케일) 주의사항

- **가로·세로·높이를 서로 다르게** 늘이는(비균등) 스케일링은 화면이나 물리에서 문제를 일으킬 수 있습니다.
- 특히 **물리를 쓰는 엔티티**는 꼭 필요한 경우가 아니면 스케일을 바꾸지 마세요.
