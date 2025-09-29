---
title: 물리 기초 (Physics Basics)
---

OasisW는 [ammo.js][1]라는 매우 강력한 물리 엔진을 통합합니다. 이는 오픈 소스 C++ Bullet 물리 엔진의 브라우저 포트입니다.

OasisW는 물리 시뮬레이션을 설정하기 위해 [강체][2] 및 [충돌][3] 컴포넌트를 제공합니다.

## 물리 활성화 {#enabling-physics}

기본적으로 새로운 OasisW 프로젝트는 ammo.js 모듈을 포함하지 않습니다. 이는 ammo.js가 수백 킬로바이트에 달하고 필요하지 않은 경우 앱이 이 라이브러리를 로드할 필요가 없기 때문입니다.

Scene Settings 패널의 import 버튼을 사용하여 ammo.js 모듈을 프로젝트로 가져올 수 있습니다:

![Physics Settings](/img/user-manual/physics/physics-settings.png)

이렇게 하면 OasisW에서 제공하는 ammo.js의 기본 빌드가 가져와집니다. 그러나 자체 ammo.js 버전을 컴파일하고 프로젝트에 추가하는 것도 가능합니다. 자세한 정보는 [이 페이지][11]를 참조하세요.

<!-- 레거시 프로젝트를 최신 ammo.js로 마이그레이션하는 자세한 내용은 [이 페이지][10]를 참조하세요. -->

## 중력 {#gravity}

동일한 Settings 패널에서 물리 시뮬레이션의 전역 중력을 설정할 수 있습니다. 중력은 씬의 모든 강체에 적용되는 일정한 힘입니다. 기본적으로 이는 세계의 음의 Y축(즉, 직선 아래)에서 -9.81로 설정됩니다. 이 기본값은 지구 중력을 근사합니다. 하지만 이 값을 증가시키거나 감소시키고 싶을 수 있습니다. 예를 들어, 우주를 배경으로 한 게임의 경우 중력을 0으로 설정하고 싶을 것입니다.

## 측정 단위 {#units-of-measurement}

기본적으로 OasisW 물리 엔진은 1 단위를 1미터로 해석합니다. 따라서 물체가 물리적으로 정확해 보이는 속도로 떨어지려면 씬의 물체 크기를 적절히 설정해야 합니다.

예를 들어, 게임에 1.8m 키의 캐릭터가 있다면, 에디터의 3D 뷰에서 1.8 단위 높이여야 합니다.

## 강체 {#rigid-bodies}

씬의 모든 엔티티가 물리 시뮬레이션에 참여하도록 할 수 있습니다. 강체 컴포넌트와 충돌 컴포넌트만 추가하면 됩니다. 강체 컴포넌트는 유형을 지정합니다:

- Static - 절대 움직이지 않는 물리 객체
- Dynamic - 적용된 힘에 반응하여 움직이는 물리 객체
- Kinematic - API를 통해서만 명시적으로 위치를 지정할 수 있는 물리 객체

또한 질량, 마찰, 복원력(본질적으로 '튀는 정도'의 측정)과 같은 물리적 속성을 지정합니다.

충돌 컴포넌트는 몸체의 물리적 모양을 지정합니다. 강체의 물리적 모양이 그래픽 모양과 일치할 필요는 없습니다. 객체의 물리적 표현이 그래픽보다 훨씬 단순한 것이 일반적입니다. 사용 가능한 충돌 컴포넌트 유형은 다음과 같습니다:

- Box
- Sphere
- Capsule
- Cylinder
- Mesh
- Cone
- [Compound][12]

## 정적 지면 생성 {#creating-a-static-ground}

대부분의 경우 어떤 종류의 정적 물리 환경을 만들고 싶을 것입니다. 예를 들어, 경주 트랙이나 축구장 같은 것 말이죠. 가장 간단한 예는 평평한 평면입니다. OasisW는 평면형 충돌 원시 객체를 노출하지 않지만 box 원시 객체를 제공합니다. 정적 강체인 1 단위 높이의 10x10 박스를 구성하는 방법은 다음과 같습니다:

![Static Ground](/img/user-manual/physics/static-ground.png)

더 복잡한 것을 원한다면 충돌 컴포넌트 유형을 Mesh로 설정하고 모델 에셋을 할당할 수도 있습니다.

## 동적 몸체 생성 {#creating-dynamic-bodies}

물리는 모두 움직임에 관한 것이므로 동적 강체를 만들 때 흥미로워집니다. 동적 1x1x1 박스를 만들어 보겠습니다:

![Dynamic Box](/img/user-manual/physics/dynamic-box.png)

박스가 회전되어 정적 지면과 충돌할 때 흥미로운 방식으로 튀게 됩니다:

![Falling Box](/img/user-manual/physics/falling-box.gif)

## 운동학적 몸체 생성 {#creating-kinematic-bodies}

때로는 씬의 물리 객체의 움직임을 명시적으로 제어하고 이러한 객체가 다른 물리 객체에 저항할 수 없는 힘을 가하도록 하는 것이 유용할 수 있습니다. 예를 들어, 플레이어를 레벨 전체로 운반할 수 있는 움직이는 플랫폼을 상상해 보세요. 이를 달성하려면 강체의 유형을 Kinematic으로 설정할 수 있습니다. 운동학적 박스를 만들어 보겠습니다:

![Kinematic Box](/img/user-manual/physics/kinematic-box.png)

운동학적 몸체를 애니메이션화하는 책임은 개발자인 여러분에게 있습니다. 위에 표시된 운동학적 박스에는 movement.js라는 스크립트가 할당된 스크립트 컴포넌트도 있다는 것을 알 수 있습니다:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem  value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class Movement extends Script {
    static scriptName = "movement";

    initialize() {

    }

    update(dt) {
        this.entity.setPosition(Math.sin(Date.now() / 1000), 0.5, 0);
    }
}
```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var Movement = pc.createScript('movement');

// initialize code called once per entity
Movement.prototype.initialize = function() {

};

// update code called every frame
Movement.prototype.update = function(dt) {
    this.entity.setPosition(Math.sin(Date.now() / 1000), 0.5, 0);
};
```

</TabItem>
</Tabs>

이 스크립트는 사인 함수를 사용하여 박스를 세계 x축을 따라 단순히 애니메이션화합니다. `setPosition`, `setRotation`, `setEulerAngles`와 같은 엔티티의 표준 변환 함수를 사용하여 운동학적 몸체를 움직입니다. 이제 씬을 실행하면 동적 박스가 운동학적 박스 위로 떨어지고 그 위에서 함께 운반됩니다:

![Kinematic Box](/img/user-manual/physics/kinematic-box.gif)

## 동적 몸체 텔레포트 {#teleporting-dynamic-bodies}

운동학적 몸체에 표준 엔티티 변환 함수를 사용할 수 있지만, 동적 몸체에는 허용되지 않습니다. 동적 강체를 생성할 때 해당 엔티티의 위치와 방향을 설정하는 책임을 물리 엔진에 넘깁니다. 이는 스크립트에서 pc.Entity API를 사용하여 엔티티의 위치나 방향을 업데이트하려고 시도하면 함수가 효과가 없다는 것을 의미합니다. 대신 강체 컴포넌트의 teleport 함수를 호출해야 하며, 이는 강체의 위치 및/또는 방향을 일시적으로 업데이트하고 싶다는 것을 물리 엔진에 명시적으로 알립니다.

[1]: https://github.com/kripken/ammo.js
[2]: /user-manual/scenes/components/rigidbody/
[3]: /user-manual/scenes/components/collision/
[10]: /user-manual/physics/physics-migration/
[11]: /user-manual/assets/types/wasm/
[12]: /user-manual/physics/compound-shapes/
