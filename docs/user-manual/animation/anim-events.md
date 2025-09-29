---
title: 애님 이벤트 (Anim Events)
---

애님 이벤트는 애니메이션 재생 중에 이벤트 리스너를 트리거하는 데 사용할 수 있습니다. 각 이벤트는 연결된 애니메이션 에셋의 특정 프레임과 연결됩니다. 애니메이션 재생이 해당 프레임에 도달하면 이벤트가 발생하고 연결된 이벤트 리스너가 호출됩니다.

### 이벤트 생성

새로운 이벤트를 생성하려면 이벤트를 생성하고 싶은 애니메이션 에셋을 에셋 패널에서 선택하세요. 그러면 아래에 표시된 것처럼 에셋 인스펙터에서 `+ EVENT` 버튼을 볼 수 있습니다:

![Animation Asset With Event](/img/user-manual/anim/animation_asset_with_events.png)

각 이벤트는 다음과 같은 수정 가능한 속성을 가집니다:

| 변수 | 설명 |
|------|------|
| time     | 이벤트가 트리거되어야 하는 애니메이션 재생 중의 특정 시간을 정의합니다. 초 단위로 제공됩니다. |
| name     | 이벤트의 이름은 애님 컴포넌트에 이벤트 리스너를 연결할 때 이벤트를 식별하는 데 사용됩니다. |
| number   | 임의의 숫자로 설정할 수 있는 추가 속성입니다. 이벤트 리스너에 추가 세부 정보를 전달하는 데 사용됩니다. |
| string   | 임의의 문자열로 설정할 수 있는 추가 속성입니다. 이벤트 리스너에 추가 세부 정보를 전달하는 데 사용됩니다. |

### 이벤트 리스너

애니메이션 에셋에 대한 이벤트를 생성한 후, 해당 에셋이 애님 컴포넌트에 의해 재생될 때마다 이벤트가 발생합니다. 따라서 이벤트를 처리하기 위해 애님 컴포넌트에 리스너를 연결할 수 있습니다. 다음 예제는 애님 컴포넌트에 이벤트 리스너를 연결하는 방법을 보여줍니다:

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

임의의 수의 애니메이션 이벤트를 단일 애니메이션 에셋에 연결하고 임의의 수의 애님 컴포넌트에서 사용할 수 있습니다. 이벤트의 추가 `number` 및 `string` 속성을 활용하면 동일한 이벤트 리스너에 전달되는 이벤트를 구분할 수 있습니다.
