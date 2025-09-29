---
title: 조명 (Lights)
---

실제 세계에서는 주변 환경이 여러 광원으로부터 조명됩니다. 태양, 가로등, TV 화면 등이 그 예입니다. OasisW 씬에서는 현실에서 발견되는 다양한 유형의 조명을 근사하기 위해 여러 유형의 광원과 광원의 모양을 설정할 수 있습니다.

각 조명 유형과 광원 모양에 대한 설명은 아래에 있으며, 다양한 조명 유형 조합의 예는 아래 [표](#use-cases)에 나와 있습니다.

## 조명 유형 {#light-types}

OasisW에는 세 가지 유형의 조명이 있습니다:

* 방향성 조명 (Directional lights)
* 전방향 조명 (Omni lights)
* 스팟 조명 (Spot lights)

### 방향성 조명 {#directional-lights}

우리에게 가장 친숙한 광원은 태양입니다. 태양이 지구로부터 매우 멀리 떨어져 있기 때문에, 우리 행성 표면에 닿는 빛은 단일 방향으로 이동하는 것으로 근사할 수 있습니다. OasisW에서 이러한 유형의 광원을 방향성 조명이라고 합니다.

선택되지 않은 상태에서 방향성 조명은 에디터의 3D 뷰에서 다음 아이콘으로 표시됩니다:

![Directional light icon](/img/user-manual/graphics/lighting/lights/directional_icon.jpg)

이 아이콘을 클릭하여 Hierarchy와 Inspector 패널에서 조명을 선택할 수 있습니다.

방향성 조명이 객체를 조명하는 모습은 다음과 같습니다:

![Directional light](/img/user-manual/graphics/lighting/lights/directional.jpg)

### 전방향 조명 {#omni-lights}

전방향 조명은 모든 방향으로 빛을 방출하는 광원입니다. 이러한 유형의 광원의 예로는 촛불이 있으며, 다른 예는 아래 [표](#use-cases)에서 확인할 수 있습니다.

선택되지 않은 상태에서 전방향 조명은 에디터의 3D 뷰에서 다음 아이콘으로 표시됩니다:

![Omni light icon](/img/user-manual/graphics/lighting/lights/point_icon.jpg)

이 아이콘을 클릭하여 Hierarchy와 Inspector 패널에서 조명을 선택할 수 있습니다.

전방향 조명이 객체를 조명하는 모습은 다음과 같습니다:

![Omni light](/img/user-manual/graphics/lighting/lights/point.jpg)

### 스팟 조명 {#spot-lights}

스팟 조명은 전방향 조명처럼 모든 방향으로 빛을 방출합니다. 하지만 스팟 조명의 빛은 원뿔 모양으로 제한됩니다.

선택되지 않은 상태에서 스팟 조명은 에디터의 3D 뷰에서 다음 아이콘으로 표시됩니다:

![Spot light icon](/img/user-manual/graphics/lighting/lights/spot_icon.jpg)

이 아이콘을 클릭하여 Hierarchy와 Inspector 패널에서 조명을 선택할 수 있습니다.

스팟 조명이 객체를 조명하는 모습은 다음과 같습니다:

![Spot light](/img/user-manual/graphics/lighting/lights/spot.jpg)

## 조명 모양 {#light-shapes}

네 가지 광원 모양이 있습니다:

* 점광원 (Punctual)
* 사각형 (Rectangle)
* 원판 (Disk)
* 구 (Sphere)

### 점광원 {#punctual}

점광원 모양은 무한히 작은 점입니다. 이것은 기본 광원 모양이며 물리적으로는 덜 정확하지만 상대적으로 낮은 비용으로 광원을 근사합니다. 다른 광원 모양들은 렌더링 비용이 더 높지만 더 정확한 조명과 반사광을 제공합니다.

### 사각형 {#rectangle}

사각형 광원 모양은 지정된 너비와 높이를 가진 평평한 4면체 모양입니다.

### 원판 {#disk}

원판 광원 모양은 지정된 반지름을 가진 둥글고 평평한 조명 모양입니다.

### 구 {#sphere}

구 광원 모양은 지정된 반지름을 가진 공 모양입니다.

![Shapes](/img/user-manual/graphics/lighting/lights/shapes.jpg)

## 사용 사례 {#use-cases}

다음은 각 광원 모양과 조명 유형의 일반적인 사용 사례 표입니다:

| 모양/유형     | 점광원        | 사각형                 | 원판                  | 구                  |
| ------------- |---------------| ------------------------| ----------------------| --------------------|
| Directional        | 태양          | ❌                      | 태양 또는 달          | 태양 또는 달         |
| Omni        | 차광 없는 전구| ❌                      | ❌                    | 차광 없는 둥근 전구  |
| Spot         | 횃불          | TV 화면                 | 차광 전구             | 차광 둥근 전구       |

❌ = 일반적인 사용 사례 없음 - 하지만 여전히 애플리케이션/게임 특정 조명 효과에 사용할 수 있습니다.

## 성능 고려사항 {#performance-considerations}

사각형, 원판, 구 모양의 광원은 점광원보다 렌더링 비용이 더 높습니다. 따라서 상대적으로 작은 광원이 있거나 점광원이 시각적으로 부정확하게 보일 수 있는 반사 표면이 없는 경우 점광원 모양을 사용하세요.
