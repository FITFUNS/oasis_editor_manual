---
title: 물리 기초 (Physics Basics)
---

OasisW는 [ammo.js][1]라는 강력한 물리 엔진을 사용합니다. ammo.js는 오픈 소스 C++ 물리 엔진인 Bullet을 브라우저에서 돌아가도록 옮긴 것입니다.

물리 시뮬레이션을 만들 때는 OasisW가 제공하는 [강체][2]와 [충돌][3] 컴포넌트를 사용합니다.

## 물리 활성화 {#enabling-physics}

새 OasisW 프로젝트에는 처음부터 ammo.js 모듈이 들어 있지 않습니다. ammo.js는 용량이 수백 킬로바이트나 되기 때문에, 물리가 필요 없는 앱까지 매번 이 라이브러리를 불러오지 않도록 하기 위해서입니다.

물리를 쓰려면 Scene Settings 패널의 import 버튼을 눌러 ammo.js 모듈을 프로젝트로 가져오면 됩니다:

![Physics Settings](/img/user-manual/physics/physics-settings.png)

이렇게 하면 OasisW가 기본으로 제공하는 ammo.js 빌드가 들어옵니다. 원한다면 직접 컴파일한 나만의 ammo.js 버전을 프로젝트에 추가할 수도 있습니다. 자세한 방법은 [이 페이지][11]를 참조하세요.

<!-- 레거시 프로젝트를 최신 ammo.js로 마이그레이션하는 자세한 내용은 [이 페이지][10]를 참조하세요. -->

## 중력 {#gravity}

같은 Settings 패널에서 물리 시뮬레이션 전체에 적용될 중력을 설정할 수 있습니다. 중력은 씬 안의 모든 강체에 똑같이 작용하는 일정한 힘입니다. 기본값은 세계의 Y축 아래 방향(즉, 똑바로 아래)으로 -9.81이며, 이는 지구의 중력과 거의 같습니다. 필요하면 이 값을 키우거나 줄일 수 있습니다. 예를 들어 우주를 배경으로 한 게임이라면 중력을 0으로 두면 됩니다.

## 측정 단위 {#units-of-measurement}

OasisW 물리 엔진은 기본적으로 1 단위를 1미터로 봅니다. 그래서 물체가 현실처럼 자연스러운 속도로 떨어지게 하려면 씬 안 물체의 크기를 실제 크기에 맞춰 정해야 합니다.

예를 들어 게임에 키 1.8m인 캐릭터가 있다면, 에디터의 3D 뷰에서도 그 캐릭터를 1.8 단위 높이로 만들어야 합니다.

## 강체 {#rigid-bodies}

씬 안의 어떤 엔티티든 물리 시뮬레이션에 참여시킬 수 있습니다. 강체 컴포넌트와 충돌 컴포넌트만 추가하면 됩니다. 강체 컴포넌트에서는 다음 세 가지 유형 중 하나를 고릅니다:

- Static - 절대 움직이지 않는 물리 객체
- Dynamic - 적용된 힘에 반응하여 움직이는 물리 객체
- Kinematic - API를 통해서만 명시적으로 위치를 지정할 수 있는 물리 객체

또한 질량, 마찰, 복원력(간단히 말해 '얼마나 잘 튀는지')처럼 물체의 물리적 성질도 여기서 정합니다.

충돌 컴포넌트는 물체의 물리적 모양을 정합니다. 이 물리적 모양이 눈에 보이는 그래픽 모양과 똑같을 필요는 없습니다. 오히려 물리용 모양을 그래픽보다 훨씬 단순하게 만드는 경우가 많습니다. 고를 수 있는 충돌 컴포넌트 유형은 다음과 같습니다:

- Box
- Sphere
- Capsule
- Cylinder
- Mesh
- Cone
- [Compound][12]

## 정적 지면 생성 {#creating-a-static-ground}

대부분의 게임에서는 먼저 움직이지 않는 물리 환경, 예를 들어 경주 트랙이나 축구장 같은 바닥을 만들게 됩니다. 가장 간단한 형태는 평평한 바닥면입니다. OasisW에는 평면 모양의 충돌 원시 객체가 따로 없지만 box 원시 객체가 있습니다. 정적 강체로 된 1 단위 높이의 10x10 박스를 만드는 방법은 다음과 같습니다:

![Static Ground](/img/user-manual/physics/static-ground.png)

더 복잡한 지형이 필요하다면 충돌 컴포넌트 유형을 Mesh로 바꾸고 모델 에셋을 지정하면 됩니다.

## 동적 몸체 생성 {#creating-dynamic-bodies}

물리의 핵심은 움직임이므로, 동적 강체를 만들 때부터 진짜 재미가 시작됩니다. 1x1x1 크기의 동적 박스를 하나 만들어 보겠습니다:

![Dynamic Box](/img/user-manual/physics/dynamic-box.png)

박스를 살짝 기울여 두면 떨어지면서 정적 지면과 부딪혀 재미있게 튀어 오릅니다:

![Falling Box](/img/user-manual/physics/falling-box.gif)

## 운동학적 몸체 생성 {#creating-kinematic-bodies}

때로는 물리 객체의 움직임을 직접 정해 주고, 그 객체가 다른 물리 객체를 밀어낼 때는 절대 밀리지 않게 하고 싶을 수 있습니다. 예를 들어 플레이어를 레벨 곳곳으로 실어 나르는 움직이는 발판을 떠올려 보세요. 이럴 때는 강체 유형을 Kinematic으로 설정하면 됩니다. 운동학적 박스를 만들어 보겠습니다:

![Kinematic Box](/img/user-manual/physics/kinematic-box.png)

운동학적 몸체를 움직이는 일은 개발자인 여러분이 직접 맡아야 합니다. 위에 보이는 운동학적 박스에는 movement.js라는 스크립트가 스크립트 컴포넌트로 함께 붙어 있는 것을 볼 수 있습니다:

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

이 스크립트는 사인 함수를 이용해 박스를 세계 x축을 따라 좌우로 움직여 줄 뿐입니다. 운동학적 몸체는 `setPosition`, `setRotation`, `setEulerAngles` 같은 엔티티의 기본 변환 함수로 움직입니다. 이제 씬을 실행하면 동적 박스가 운동학적 박스 위로 떨어져 그 위에 얹힌 채 함께 실려 다닙니다:

![Kinematic Box](/img/user-manual/physics/kinematic-box.gif)

## 동적 몸체 텔레포트 {#teleporting-dynamic-bodies}

운동학적 몸체에는 기본 엔티티 변환 함수를 써도 되지만, 동적 몸체에는 쓸 수 없습니다. 동적 강체를 만들면 그 엔티티의 위치와 방향을 정하는 일은 물리 엔진이 맡게 됩니다. 그래서 스크립트에서 pc.Entity API로 위치나 방향을 바꾸려 해도 아무 효과가 없습니다. 대신 강체 컴포넌트의 teleport 함수를 호출해야 합니다. 이 함수는 강체의 위치나 방향을 잠시 바꾸고 싶다는 뜻을 물리 엔진에 분명히 알려 줍니다.

[1]: https://github.com/kripken/ammo.js
[2]: /user-manual/scenes/components/rigidbody/
[3]: /user-manual/scenes/components/collision/
[10]: /user-manual/physics/physics-migration/
[11]: /user-manual/assets/types/wasm/
[12]: /user-manual/physics/compound-shapes/
