---
title: 애님 이벤트 (Anim Events)
---

**애님 이벤트(anim event)**는 애니메이션이 재생되다가 **특정 프레임에 도달하는 순간 신호를 보내는** 기능입니다. 애니메이션의 한 지점에 이벤트를 심어 두면, 재생이 그 지점을 지날 때 미리 연결해 둔 코드(리스너)가 실행됩니다.

예를 들어 걷기 애니메이션에서 **발이 땅에 닿는 프레임**에 이벤트를 달아 두면, 그 순간 발밑에 먼지 효과를 내는 식으로 동작과 효과를 딱 맞출 수 있습니다.

### 이벤트 만들기

이벤트를 달고 싶은 **애니메이션 에셋**을 에셋 패널에서 고르면, 인스펙터에 **`+ EVENT`** 버튼이 보입니다. 이 버튼으로 이벤트를 추가합니다.

![Animation Asset With Event](/img/user-manual/anim/animation_asset_with_events.png)

각 이벤트는 다음 속성을 가집니다.

| 변수 | 설명 |
|------|------|
| time | 이벤트가 발생할 애니메이션 재생 시점(초)입니다. |
| name | 이벤트의 이름입니다. 나중에 리스너를 연결할 때 어떤 이벤트인지 구분하는 데 씁니다. |
| number | 원하는 숫자를 담아 리스너에 함께 전달할 수 있는 추가 값입니다. |
| string | 원하는 문자열을 담아 리스너에 함께 전달할 수 있는 추가 값입니다. |

### 이벤트 받기(리스너)

애니메이션 에셋에 이벤트를 만들어 두면, 그 에셋이 애님 컴포넌트에서 재생될 때마다 이벤트가 발생합니다. 그 이벤트를 처리하려면 애님 컴포넌트에 **리스너**를 연결하면 됩니다. 아래는 리스너를 다는 예제입니다.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem  value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

// initialize code called once per entity
export class AnimationEvents extends Script {
    static scriptName = "animationEvents";

    initialize() {
        this.entity.anim.on('plant_foot', (event) => {
            // get the foot bone from the event's string property, either right_foot or left_foot
            const footBone = this.entity.findByName(event.string);
            createDustCloudAtLocation(footBone.getPosition());
        });
    }
}
```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var AnimationEvents = pc.createScript('animationEvents');

// initialize code called once per entity
AnimationEvents.prototype.initialize = function() {
    this.entity.anim.on('plant_foot', function (event) {
        // get the foot bone from the event's string property, either right_foot or left_foot
        const footBone = this.entity.findByName(event.string);
        createDustCloudAtLocation(footBone.getPosition());
    }, this);
};
```

</TabItem>
</Tabs>

이벤트는 한 애니메이션 에셋에 **여러 개** 달 수 있고, **여러 애님 컴포넌트**에서 함께 쓸 수 있습니다. 이벤트의 `number`·`string` 값을 활용하면, 같은 리스너로 들어오는 이벤트들을 서로 구분해 다르게 처리할 수 있습니다. (위 예제에서는 `string`에 담긴 발 이름(`right_foot`/`left_foot`)으로 어느 발인지 구분합니다.)
