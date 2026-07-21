---
title: Animstategraph 에셋 (Animstategraph Assets)
---

**Animstategraph(애님 상태 그래프) 에셋**은 모델이 취할 수 있는 여러 애니메이션 **상태를 정리해 둔 설계도**입니다. 여기서 각 상태가 언제 재생될지, 상태끼리 어떻게 바뀌고 얼마나 부드럽게 이어질지를 정합니다.

중요한 점은, **이 에셋 자체는 실제 애니메이션 파일을 담지 않는다**는 것입니다. "어떤 순서로 동작이 이어지는가"라는 **틀**만 담고, 실제 애니메이션 에셋은 나중에 [애님 컴포넌트](/user-manual/scenes/components/anim/)를 통해 각 상태에 끼워 넣습니다.

이렇게 틀과 실제 동작을 분리해 두면, **하나의 상태 그래프를 여러 캐릭터가 공유**할 수 있습니다. 예를 들어 "사람 이동" 상태 그래프 하나를 인간·엘프·드워프 엔티티가 함께 쓰되, 각자 자기 애니메이션 에셋만 끼워 넣으면 동작 흐름은 같고 겉모습만 다르게 됩니다.

상태 그래프는 간단할 수도, 복잡할 수도 있습니다. 바퀴라면 *정지*·*회전* 두 상태만으로 "언제 돌기 시작하고 멈추는지, 얼마나 빠르게 도는지"를 정할 수 있고, 사람 캐릭터라면 훨씬 많은 상태를 엮어 복잡한 동작을 만들 수 있습니다.

에디터의 에셋 패널에서 animstategraph 에셋을 고르면 아래처럼 **상태 그래프 에디터**가 열립니다.

![Initial Editor](/img/user-manual/anim/state_graph_editor.png)

이 화면에서 상태 그래프를 편집합니다. 아래에서 각 구성 요소가 무엇이고 어떻게 쓰이는지 하나씩 살펴봅니다.

## 상태 {#states}

**상태(state)**는 "지금 이 순간 어떤 애니메이션을 재생할지"를 나타냅니다. 상태 그래프는 언제나 **이 상태들 중 딱 하나에만** 머물러 있습니다.

상태에는 네 종류가 있습니다. 사용자가 만드는 **애니메이션 상태**, 그리고 흐름을 제어하는 **START · END · ANY** 상태입니다. 이 중 **애니메이션 상태만** 직접 만들고 지울 수 있고, 실제 애니메이션 에셋과 연결됩니다. 나머지 셋은 상태 사이의 흐름을 잡아 주는 특수 상태입니다.

### 애니메이션 상태 {#animation-states}

![State](/img/user-manual/anim/state.png)

`Idle`, `Jump`, `Walk`처럼 **실제로 재생되는 동작 하나**가 애니메이션 상태입니다. 빈 캔버스를 우클릭하고 **Add new state**를 고르면 새로 만들 수 있습니다. 만들면 오른쪽 인스펙터에서 아래 값을 조절할 수 있습니다.

| 변수 | 설명 |
|------|------|
| Name | 이 상태의 이름입니다. 스크립트에서 상태를 찾아 재생·수정할 때 씁니다. 같은 레이어 안에서 이름이 겹치면 안 됩니다. |
| Speed | 이 상태에 연결된 애니메이션의 재생 속도입니다. |
| Loop | 애니메이션을 반복 재생할지 여부입니다. 끄면(false) 마지막 프레임에서 멈춘 채, 이 상태를 벗어날 때까지 정지해 있습니다. |

### START 상태 {#start-state}

![Start State](/img/user-manual/anim/start_state.png)

**START 상태**는 그래프의 **출발점**입니다. 애님 컴포넌트가 재생을 시작하면 먼저 여기로 들어온 뒤, 곧바로 연결된 애니메이션 상태로 넘어갑니다. 이 첫 애니메이션 상태를 **기본 상태(default state)**라고 하며, 아래 레이어 패널에서 고릅니다.

![Layers](/img/user-manual/anim/layers.png)

START 상태로 들어오는(또는 나가는) 전환은 따로 만들 수 없습니다. 오직 **END 상태를 거쳐야만** 다시 START로 돌아옵니다.

### END 상태 {#end-state}

![End State](/img/user-manual/anim/end_state.png)

**END 상태**는 그래프의 **출구**입니다. 어떤 애니메이션 상태가 END로 이어지도록 해 두면, 시스템은 곧장 START에 연결된 기본 상태로 되돌아갑니다. 그래프를 위에서 아래로 죽 늘어놓으면서도 **다시 처음으로 순환**하게 만들 때 편리합니다. END에서 다른 상태로는 못 가고, 항상 START로만 돌아갑니다.

### ANY 상태 {#any-state}

![Any State](/img/user-manual/anim/any_state.png)

**ANY 상태**는 "지금 어떤 상태에 있든 상관없이" 발동시키고 싶은 전환을 만들 때 씁니다. ANY에서 시작한 전환은 마치 현재 상태에서 바로 연결된 것처럼 블렌딩됩니다. (ANY에서 나가는 전환은 만들 수 있지만, ANY로 들어오는 전환은 만들 수 없습니다.)

예를 들어 `Idle`에서도 `Walk`에서도 `Jump`로 갈 수 있어야 한다면, 두 상태에서 각각 점프 전환을 만드는 대신 **ANY → Jump** 전환 하나만 만들면 됩니다.

### 전환 {#transitions}

**전환(transition)**은 한 애니메이션 상태에서 다른 상태로 **넘어가는 길**입니다. 애니메이션 상태를 우클릭하고 `Add transition`을 고르면 만들 수 있습니다. 전환의 값을 조절하면 상태가 바뀔 때 애니메이션이 어떻게 섞일지도 정할 수 있습니다.

| 변수 | 설명 |
|------|------|
| Duration | 전환에 걸리는 시간(초)입니다. |
| Exit Time | 지금 상태를 언제 빠져나갈지 정합니다. 지금 상태의 길이를 1로 본 비율로 지정합니다. 비우면 언제든 빠져나갈 수 있고, 1보다 작은 값을 주면 매 반복마다 그 지점에서 빠져나갈 수 있습니다. |
| Offset | 도착할 상태의 애니메이션을 **어느 지점부터** 시작할지 정합니다. 도착 상태 길이를 1로 본 비율(0~1)로 지정합니다. |
| Interruption Source | 이 전환이 다른 전환에 의해 **중간에 끊길 수 있는지**, 그리고 어떤 상태의 전환이 끊을 수 있는지 정합니다. |

두 상태 사이에는 조건이 다른 **여러 전환**을 만들 수 있습니다. 여러 전환이 동시에 조건을 만족하면 어느 것을 쓸지 헷갈릴 수 있는데, 전환 화살표를 골라 인스펙터에서 **우선순위**를 정할 수 있습니다.

### 매개변수 {#parameters}

**매개변수(parameter)**는 실행 중에 애니메이션 흐름을 조종하는 **변수**입니다. 스크립트에서 언제든 값을 바꿀 수 있어서, 게임 도중에 캐릭터의 동작을 제어하는 손잡이 역할을 합니다.

왼쪽 인스펙터의 매개변수 패널에서 새로 추가할 수 있습니다.

![Parameters](/img/user-manual/anim/parameters.png)

각 매개변수는 세 가지 값을 가집니다.

| 변수 | 설명 |
|------|------|
| Name | 매개변수 이름입니다. 스크립트에서 찾아 설정할 때 씁니다. 상태 그래프 안에서 이름이 겹치면 안 됩니다. |
| Type | 값의 종류로 Boolean·Float·Integer·Trigger 중 하나입니다. **Trigger**는 Boolean과 비슷하지만, 전환을 한 번 발동시키고 나면 자동으로 다시 false로 돌아가는 특별한 종류입니다. |
| Default Value | 상태 그래프가 시작될 때의 초깃값입니다. |

이 매개변수로 흐름을 제어하는 방법은 **전환 조건**입니다. 각 전환은 "이 조건들이 모두 맞아야 넘어간다"는 조건 목록을 가질 수 있고, 하나라도 안 맞으면 그 전환으로 넘어가지 않습니다.

각 조건은 매개변수의 현재 값을, 지정한 연산자로 어떤 값과 비교하는 문장입니다. 예를 들어 아래 조건은

![Condition](/img/user-manual/anim/condition.png)

`Idle`과 `Jump` 사이의 전환에 걸어 두면, 스크립트에서 `Jump` 매개변수를 true로 바꿨을 때만 캐릭터가 점프하게 만들 수 있습니다.

### 레이어 {#layers}

지금까지는 상태 그래프 **하나**를 편집하는 이야기였습니다. 그런데 한 모델의 애니메이션을 **여러 개의 독립된 상태 그래프**로 나눠 돌리고 싶을 때가 있습니다. 이때 쓰는 것이 **레이어(layer)**입니다. 예를 들어 한 레이어에서는 캐릭터의 **이동**을, 다른 레이어에서는 자체 상태 그래프로 **표정**을 따로 애니메이션할 수 있습니다.

animstategraph를 만들면 기본 레이어 하나가 딸려 옵니다. 이 레이어는 지울 수 없고, 대부분의 경우 이 하나만으로 충분합니다. 레이어를 더 만들고 싶으면 왼쪽 레이어 패널에서 새 레이어 버튼을 누릅니다.

![Layers](/img/user-manual/anim/layers.png)

그런 다음 그래프 뷰 오른쪽 위의 **레이어 선택 드롭다운**에서 편집할 레이어를 고르면 됩니다.

![Select Layer](/img/user-manual/anim/select_layer.png)

### 레이어 블렌딩 {#layer-blending}

기본적으로 레이어는 패널에 만든 **순서대로** 모델을 애니메이션하며, 뒤 레이어가 앞 레이어의 값을 **덮어씁니다(Override).** 대신 여러 레이어를 **함께 섞고** 싶다면, 레이어의 `blend type`을 기본값 `Override`에서 `Additive`로 바꾸면 됩니다.

![Layer Blend](/img/user-manual/anim/anim_layer_blend.png)

각 레이어의 **블렌드 가중치(blend weight)**는 여러 레이어를 섞을 때 그 레이어가 최종 동작에 얼마나 기여할지를 정합니다. 이 값은 게임 스크립트에서 실행 중에 조절해, 레이어 섞임을 실시간으로 바꿀 수 있습니다.

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

[레이어를 마스킹][anim-layer-masking]하면 모델의 **일부 뼈만** 제어하는 애니메이션을 만들 수 있는데, 이때 레이어의 `blend type`을 `Additive`로 두고 위처럼 `blend weight`를 실시간으로 조절하면 서로 다른 레이어의 애니메이션을 부드럽게 섞을 수 있습니다. 상체와 하체가 **다른 동작**을 해야 하는 캐릭터에 특히 유용합니다. 예를 들어 상체에는 `shooting`(사격) 애니메이션을 섞고, 하체는 `walking`·`running` 같은 이동 애니메이션을 자유롭게 재생하는 식입니다.

반대로 `Override`로 둔 레이어는 그 레이어가 다루는 뼈의 애니메이션 값을 **완전히 대체**하며, 그때는 앞 레이어의 값이 최종 결과에 반영되지 않습니다.

[anim-layer-masking]: /user-manual/animation/anim-layer-masking
