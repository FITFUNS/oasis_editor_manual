---
title: 조명 (Lights)
---

실제 세상은 여러 광원에서 나오는 빛으로 밝혀집니다. 태양, 가로등, TV 화면 등이 모두 광원입니다. OasisW 씬에서도 현실의 다양한 빛을 흉내 내기 위해 여러 종류의 광원과 광원 모양을 설정할 수 있습니다.

각 조명 유형과 광원 모양에 대한 설명은 아래에 있으며, 여러 조합을 어디에 쓰면 좋은지는 아래 [표](#use-cases)에 정리되어 있습니다.

## 조명 유형 {#light-types}

OasisW에는 세 가지 조명 유형이 있습니다:

* 방향성 조명 (Directional lights)
* 전방향 조명 (Omni lights)
* 스팟 조명 (Spot lights)

### 방향성 조명 {#directional-lights}

우리에게 가장 익숙한 광원은 태양입니다. 태양은 지구에서 아주 멀리 떨어져 있어서, 지표면에 닿는 빛이 모두 한 방향으로 나아간다고 봐도 무방합니다. OasisW에서는 이런 광원을 방향성 조명이라고 부릅니다.

선택하지 않은 상태에서 방향성 조명은 에디터의 3D 뷰에 다음 아이콘으로 나타납니다:

![Directional light icon](/img/user-manual/graphics/lighting/lights/directional_icon.jpg)

이 아이콘을 클릭하면 Hierarchy와 Inspector 패널에서 조명을 선택할 수 있습니다.

방향성 조명이 객체를 비추는 모습은 다음과 같습니다:

![Directional light](/img/user-manual/graphics/lighting/lights/directional.jpg)

### 전방향 조명 {#omni-lights}

전방향 조명은 모든 방향으로 빛을 뿜는 광원입니다. 촛불이 대표적인 예이며, 다른 예는 아래 [표](#use-cases)에서 볼 수 있습니다.

선택하지 않은 상태에서 전방향 조명은 에디터의 3D 뷰에 다음 아이콘으로 나타납니다:

![Omni light icon](/img/user-manual/graphics/lighting/lights/point_icon.jpg)

이 아이콘을 클릭하면 Hierarchy와 Inspector 패널에서 조명을 선택할 수 있습니다.

전방향 조명이 객체를 비추는 모습은 다음과 같습니다:

![Omni light](/img/user-manual/graphics/lighting/lights/point.jpg)

### 스팟 조명 {#spot-lights}

스팟 조명도 전방향 조명처럼 여러 방향으로 빛을 뿜지만, 그 빛이 원뿔 모양 안으로만 퍼지도록 제한됩니다.

선택하지 않은 상태에서 스팟 조명은 에디터의 3D 뷰에 다음 아이콘으로 나타납니다:

![Spot light icon](/img/user-manual/graphics/lighting/lights/spot_icon.jpg)

이 아이콘을 클릭하면 Hierarchy와 Inspector 패널에서 조명을 선택할 수 있습니다.

스팟 조명이 객체를 비추는 모습은 다음과 같습니다:

![Spot light](/img/user-manual/graphics/lighting/lights/spot.jpg)

## 조명 모양 {#light-shapes}

광원 모양은 네 가지가 있습니다:

* 점광원 (Punctual)
* 사각형 (Rectangle)
* 원판 (Disk)
* 구 (Sphere)

### 점광원 {#punctual}

점광원 모양은 크기가 없는 하나의 점입니다. 기본 광원 모양이며, 물리적으로 정확하지는 않지만 비용이 적게 드는 방식으로 빛을 흉내 냅니다. 나머지 광원 모양들은 렌더링 비용이 더 들지만, 대신 더 정확한 조명과 반사광을 만들어 줍니다.

### 사각형 {#rectangle}

사각형 광원 모양은 지정한 너비와 높이를 가진 평평한 네모난 면입니다.

### 원판 {#disk}

원판 광원 모양은 지정한 반지름을 가진 둥글고 평평한 면입니다.

### 구 {#sphere}

구 광원 모양은 지정한 반지름을 가진 공 모양입니다.

![Shapes](/img/user-manual/graphics/lighting/lights/shapes.jpg)

## 사용 사례 {#use-cases}

다음은 각 광원 모양과 조명 유형을 흔히 어디에 쓰는지 정리한 표입니다:

| 모양/유형     | 점광원        | 사각형                 | 원판                  | 구                  |
| ------------- |---------------| ------------------------| ----------------------| --------------------|
| Directional        | 태양          | ❌                      | 태양 또는 달          | 태양 또는 달         |
| Omni        | 차광 없는 전구| ❌                      | ❌                    | 차광 없는 둥근 전구  |
| Spot         | 횃불          | TV 화면                 | 차광 전구             | 차광 둥근 전구       |

❌ = 일반적인 사용 사례 없음 - 하지만 여전히 애플리케이션/게임 특정 조명 효과에 사용할 수 있습니다.

## 성능 고려사항 {#performance-considerations}

사각형, 원판, 구 모양의 광원은 점광원보다 렌더링 비용이 더 큽니다. 그러니 광원이 비교적 작거나, 점광원이 부정확하게 보일 만한 반사 표면이 주변에 없다면 점광원 모양을 쓰세요.
