---
title: GSplat
---

GSplat 컴포넌트를 붙이면 엔티티가 3D 가우시안 스플랫(점 구름 형태로 표현한 3D 데이터)을 화면에 그릴 수 있습니다.

GSplat 컴포넌트는 컴포넌트 패널 오른쪽 위의 토글로 켜거나 끌 수 있습니다. 켜면 이 컴포넌트가 가리키는 3D 가우시안 스플랫이 씬에 들어가 화면에 그려집니다.

![GSplat component](/img/user-manual/scenes/components/component-gsplat.png)

## 속성

| 속성 | 설명 |
|----------|-------------|
| Asset    | 이 GSplat 컴포넌트가 그려 줄 GSplat 에셋입니다. 하나의 GSplat 컴포넌트에는 GSplat 에셋을 딱 하나만 지정할 수 있습니다. |
| Layers   | 이 요소를 그릴 [레이어](/user-manual/graphics/layers)입니다. |

## 스크립팅 인터페이스

[스크립트 컴포넌트](/user-manual/scenes/components/script)를 이용하면 코드로 GSplat 컴포넌트의 속성을 조절할 수 있습니다. GSplat 컴포넌트의 스크립팅 인터페이스는 [여기](https://manual.oasisserver.link/engine/classes/GSplatComponent.html)에서 확인할 수 있습니다.
