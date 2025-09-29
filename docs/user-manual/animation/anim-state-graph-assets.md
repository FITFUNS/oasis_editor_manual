---
title: Animstategraph 에셋 (Animstategraph Assets)
---

Animstategraph 에셋은 모델이 애니메이션화될 수 있는 모든 다양한 방법인 서로 다른 애니메이션 상태 세트를 구성하는 데 사용됩니다. 이러한 각 애니메이션 상태를 정의하고, 각 상태가 언제 재생되어야 하는지, 그리고 상태가 어떻게 전환되고 서로 블렌딩되는지 결정하는 데 사용할 수 있습니다. Animstategraph 에셋은 실제 애니메이션 에셋을 저장하거나 연결하지 않으며, 대신 애니메이션 에셋이 어떻게 구성되어야 하는지에 대한 템플릿 역할을 합니다. 실제 애니메이션 에셋은 [애님 컴포넌트](/user-manual/scenes/components/anim/)를 통해 animstategraph의 애니메이션 상태에 연결됩니다.

시스템은 단일 animstategraph가 각각 고유한 애니메이션 에셋 세트를 가진 많은 서로 다른 엔티티에서 사용될 수 있도록 설계되었습니다. 예를 들어 휴머노이드 캐릭터 이동의 애니메이션을 관리하는 animstategraph 에셋이 있습니다. 이 단일 에셋은 인간 엔티티, 엘프 엔티티, 드워프 엔티티에서 사용할 수 있습니다. 이러한 각 엔티티는 서로 동일한 애니메이션 동작을 유지하면서 자신만의 캐릭터 애니메이션 에셋을 연결할 수 있습니다.

따라서 이러한 에셋은 모델의 애니메이션 동작을 위한 상태 머신이며, 엔티티의 생명주기에 걸쳐 애니메이션 시퀀스의 흐름을 제어합니다. 바퀴의 동작을 정의하는 데 사용되는 간단한 animstategraph 에셋은 정적(static)과 회전(spinning)이라는 두 가지 애니메이션 상태만 정의할 수 있습니다. 이 에셋은 바퀴가 언제 회전을 시작하고 중지하는지, 얼마나 오래 회전할지, 바퀴 회전 속도, 그리고 얼마나 급격하게 시작/중지하는지 제어하도록 정의할 수 있습니다. 더 고급 에셋은 복잡한 휴머노이드 캐릭터 애니메이션 동작을 만들기 위해 다양한 애니메이션 상태를 결합하는 데 사용할 수 있습니다.

에디터의 에셋 패널에서 animstategraph 에셋을 선택하면 애니메이션 상태 그래프 에디터 뷰가 열립니다:

![Initial Editor](/img/user-manual/anim/state_graph_editor.png)

이 뷰 내에서 애니메이션 상태 그래프를 편집할 수 있습니다. 다음 섹션에서는 animstategraph 에셋의 다양한 요소가 특정 애니메이션 동작을 정의하는 데 어떻게 사용될 수 있는지 강조할 것입니다.

## 상태 {#states}

본질적으로 상태는 주어진 시점에 어떤 애니메이션이 재생되어야 하는지 지정하는 데 사용됩니다. 애니메이션 상태 그래프는 주어진 시간에 이러한 상태 중 하나에만 있을 수 있습니다.

상태 그래프에는 네 가지 유형의 상태가 있습니다. 애니메이션 상태와 함께 START 상태, END 상태, ANY 상태가 있습니다. 애니메이션 상태만 사용자가 생성하고 삭제할 수 있으며, 이들만 애니메이션 에셋에 연결됩니다. 다른 상태는 상태 머신을 통한 흐름을 제어하는 데 사용됩니다.

### 애니메이션 상태 {#animation-states}

![State](/img/user-manual/anim/state.png)

애니메이션 상태는 'Idle', 'Jump', 'Walk'와 같은 재생 가능한 애니메이션을 정의합니다. 새로운 애니메이션 상태는 상태 그래프 뒤의 빈 캔버스를 우클릭하고 메뉴에서 'Add new state'를 선택하여 생성할 수 있습니다. 에디터는 새로 생성된 상태를 대상으로 하고 오른쪽에 인스펙터 패널을 표시합니다. 이 인스펙터 내에서 다음 상태 변수를 수정할 수 있습니다:

| 변수 | 설명 |
|------|------|
| Name     | 이 상태가 호출될 이름입니다. 스크립트를 통해 상태를 찾고 편집하고 재생하는 데 사용됩니다. 이름은 상태 그래프 레이어당 고유해야 합니다. |
| Speed    | 이 상태에 연결된 애니메이션의 재생 속도입니다. |
| Loop     | 이 상태에 연결된 애니메이션이 재생 중에 루프해야 하는지 여부입니다. false로 설정하면 애니메이션이 이 상태가 종료될 때까지 마지막 키프레임에서 일시정지됩니다. |

### START 상태 {#start-state}

![Start State](/img/user-manual/anim/start_state.png)

START 상태는 모든 상태 그래프의 진입점입니다. 애님 컴포넌트가 할당된 애님 상태 그래프 재생을 시작할 때, 먼저 이 상태에 진입한 다음 연결된 애니메이션 상태로 직접 전환됩니다. 이 애니메이션 상태를 기본 상태라고 하며, 여기 레이어 패널을 통해 선택할 수 있습니다:

![Layers](/img/user-manual/anim/layers.png)

START 상태에서 또는 START 상태로의 다른 전환을 생성할 수 없습니다. END 상태로 전환하여야만 다시 진입할 수 있습니다.

### END 상태 {#end-state}

![End State](/img/user-manual/anim/end_state.png)

END 상태는 현재 상태 그래프에서의 출구를 표시합니다. 애니메이션 상태가 END 상태로 전환되도록 설정되어 있다면, 시스템은 START 상태에 연결된 기본 애니메이션 상태로 직접 이동합니다. 이는 그래프를 선형 방식으로 배치하면서도 그래프를 통한 순환 흐름을 만드는 데 유용합니다. END 상태에서 다른 상태로의 전환을 생성할 수 없습니다. 항상 START 상태로 직접 전환됩니다.

### ANY 상태 {#any-state}

![Any State](/img/user-manual/anim/any_state.png)

이 상태는 시스템이 현재 다른 애니메이션 상태 중 하나에 있는 동안 활성화될 수 있는 전환을 만드는 데 사용됩니다. 이 상태에서 트리거되는 모든 전환은 현재 활성 애니메이션 상태에서 직접 연결된 것처럼 블렌딩됩니다. ANY 상태에서 전환을 생성할 수 있지만 ANY 상태로는 생성할 수 없습니다.

이는 현재 어떤 상태에 있든 상관없이 활성화하고 싶은 전환을 설정하는 데 유용합니다. 예를 들어, idle 상태와 walk 상태 모두에서 도달할 수 있는 jump 상태가 있을 수 있습니다. idle 상태와 walk 상태 모두에서 jump 상태로의 전환을 설정하는 대신, ANY 상태와 jump 상태 사이에 전환을 설정할 수 있습니다.

### 전환 {#transitions}

전환은 anim 상태 그래프가 하나의 애니메이션 상태에서 다른 상태로 이동할 수 있는 방법을 정의합니다. 애니메이션 상태를 우클릭하고 컨텍스트 메뉴에서 `Add transition`을 선택하여 생성할 수 있습니다.

주어진 전환의 변수를 설정하여 전환하는 상태의 애니메이션이 어떻게 블렌딩될지도 제어할 수 있습니다.

사용 가능한 전환 변수는 다음과 같습니다:

| 변수            | 설명 |
|-----------------|------|
| Duration            | 전환의 지속 시간(초)입니다. |
| Exit Time           | 소스 상태를 종료하고 대상 상태에 진입할 시간입니다. 소스 상태의 지속 시간을 기반으로 한 정규화된 시간으로 제공됩니다. 값을 제공하지 않으면 소스 상태가 이 전환으로 언제든지 종료할 수 있습니다. 1보다 작은 값은 소스 상태의 모든 루프 동안 해당 시간에 전환이 종료 가능하도록 만듭니다. |
| Offset              | 제공된 경우, 대상 상태가 이 시간에 애니메이션 재생을 시작합니다. 대상 상태의 지속 시간을 기반으로 한 정규화된 시간으로 제공됩니다. 0과 1 사이여야 합니다. |
| Interruption Source | 다른 전환이 이 전환을 중단할 수 있는지, 그리고 현재 또는 이전 상태의 전환 중 어느 것이 그렇게 할 수 있는지 정의합니다. |

두 애니메이션 상태 사이에 서로 다른 값과 조건이 설정된 여러 전환을 생성할 수 있습니다. 이러한 전환의 우선순위는 그래프에서 전환의 화살표를 선택한 후 전환 인스펙터에서 재정렬할 수 있습니다. 우선순위 순서는 여러 전환이 조건을 만족할 때 상태 그래프가 어떤 전환을 사용할지 결정합니다.

### 매개변수 {#parameters}

애님 상태 그래프의 매개변수는 런타임 중 애니메이션의 흐름을 제어하는 데 사용되는 변수입니다. 이러한 변수는 스크립트를 통해 액세스할 수 있으며 언제든지 새로운 값으로 설정할 수 있습니다. 이는 사용자가 엔티티의 생명주기 동안 애니메이션 동작을 제어할 수 있는 방법입니다.

왼쪽 인스펙터의 매개변수 패널을 통해 상태 그래프에 새로운 매개변수를 추가할 수 있습니다:

![Parameters](/img/user-manual/anim/parameters.png)

각 매개변수는 설정할 수 있는 세 가지 변수를 가집니다:

| 변수      | 설명 |
|-----------|------|
| Name          | 이 매개변수가 호출될 이름입니다. 스크립트를 통해 매개변수를 찾고 설정하는 데 사용됩니다. 이름은 상태 그래프당 고유해야 합니다. |
| Type          | 매개변수가 포함하는 변수의 유형입니다. Boolean, Float, Integer 또는 Trigger 중 하나입니다. Trigger 유형은 Boolean처럼 작동하지만 전환을 성공적으로 활성화하는 데 사용된 후 값이 false로 다시 설정되는 특별한 속성을 가집니다. |
| Default Value | 상태 그래프가 시작될 때 매개변수 변수의 값입니다. |

이들이 상태 그래프를 제어하는 방법은 전환 조건을 사용하는 것입니다. 그래프의 각 전환은 시스템에서 전환이 사용 가능한 시기를 정의하는 조건 목록을 가질 수 있습니다. 모든 조건이 충족되지 않는 한 상태는 주어진 전환을 통해 다른 상태로 전달될 수 없습니다.

각 조건은 지정된 연산자를 사용하여 매개변수 변수의 현재 값을 조건의 주어진 값과 비교하는 조건문으로 구성됩니다. 예를 들어, 다음 조건:

![Condition](/img/user-manual/anim/condition.png)

Idle과 Jump 애니메이션 상태 간의 전환에서 사용되어 캐릭터가 스크립트를 통해 'Jump' 매개변수가 true로 설정된 경우에만 점프하도록 할 수 있습니다.

### 레이어 {#layers}

지금까지 animstategraph 에셋은 단일 애니메이션 상태 그래프 편집의 맥락에서 논의되었습니다. 그러나 때로는 단일 모델의 애니메이션이 각각 고유한 정의된 동작을 가진 여러 개의 별도 상태 그래프에 의해 구동되는 것이 필요할 수 있습니다. 예를 들어, 단일 레이어에서 주인공의 움직임과 이동을 애니메이션화하는 동시에, 자체 상태 그래프와 매개변수에 의해 구동되는 별도 레이어에서 표정을 애니메이션화할 수 있습니다.

animstategraph가 생성될 때 단일 기본 레이어와 함께 제공됩니다. 이 레이어는 삭제할 수 없으며 많은 시나리오에서 필요한 유일한 레이어가 될 것입니다. 그러나 다른 레이어를 생성하고 싶다면 상태 그래프 뷰 왼쪽의 레이어 패널에서 새 레이어 버튼을 선택하여 할 수 있습니다:

![Layers](/img/user-manual/anim/layers.png)

그런 다음 그래프 뷰 오른쪽 상단에 있는 레이어 선택 드롭다운에서 선택하여 이 레이어 편집으로 전환할 수 있습니다:

![Select Layer](/img/user-manual/anim/select_layer.png)

### 레이어 블렌딩 {#layer-blending}

기본적으로 레이어는 레이어 패널에서 생성된 순서대로 모델을 애니메이션화합니다. 모델의 뼈에 설정한 모든 애니메이션 값은 후속 레이어에 의해 덮어쓰여집니다. 대신 레이어의 애니메이션 값을 함께 블렌딩하고 싶다면, 레이어의 `blend type`을 기본 `Override` 대신 `Additive`로 설정할 수 있습니다:

![Layer Blend](/img/user-manual/anim/anim_layer_blend.png)

각 레이어의 블렌드 가중치 값은 여러 레이어를 블렌딩할 때 각 레이어가 최종 애니메이션에 얼마나 기여해야 하는지 결정하는 데 사용됩니다. 이러한 블렌드 가중치는 게임 스크립트에서 런타임에 조정하여 레이어의 블렌드를 실시간으로 업데이트할 수 있습니다:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem  value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class AnimationBlending extends Script {
  static scriptName = "animationBlending";

  initialize() {
    this.entity.anim.on('smile_start', (event) => {
      this.entity.anim.findAnimationLayer('smile').weight = 1;
    });
    this.entity.anim.on('smile_end', (event) => {
      this.entity.anim.findAnimationLayer('smile').weight = 0;
    });
  }
}
```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var AnimationBlending = pc.createScript('animationBlending');

// initialize code called once per entity
AnimationBlending.prototype.initialize = function() {
    this.entity.anim.on('smile_start', function (event) {
        this.entity.anim.findAnimationLayer('smile').weight = 1;
    }), this);
    this.entity.anim.on('smile_end', function (event) {
        this.entity.anim.findAnimationLayer('smile').weight = 0;
    }), this);
};
```

</TabItem>
</Tabs>

[레이어를 마스킹][anim-layer-masking]하는 경우, 모델의 뼈의 일부만 제어하는 애니메이션을 블렌딩하기 위해 레이어의 `blend type`을 `Additive`로 설정할 수 있습니다. 위에서 설명한 대로 `blend weight`를 실시간으로 업데이트하면 서로 다른 레이어의 애니메이션 간에 부드러운 블렌드를 만들 수 있습니다. 이는 상체와 하체를 사용하여 서로 다른 동작을 수행해야 하는 캐릭터를 애니메이션화할 때 특히 유용합니다. 예를 들어, 캐릭터의 상체에서 블렌딩되고 블렌딩되는 `shooting` 애니메이션이 있을 수 있으며, 동시에 `walking`과 `running`과 같은 다양한 이동 애니메이션을 위해 하체를 자유롭게 할 수 있습니다.

`Overwrite`로 설정된 모든 레이어는 해당 레이어에서 애니메이션화된 모델의 뼈의 애니메이션 값을 완전히 대체합니다. 이러한 경우, 최종 애니메이션을 생성할 때 이전 레이어는 고려되지 않습니다.

[anim-layer-masking]: /user-manual/animation/anim-layer-masking
