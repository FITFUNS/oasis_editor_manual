---
title: 트리거 볼륨 (Trigger Volumes)
---

트리거 볼륨은 강체가 볼륨에 진입하거나 떠날 때마다 이벤트를 발생시킬 수 있는 정적 충돌 모양입니다. 축구 경기에서 골이 들어갔을 때나 경주차가 결승선에 도달했을 때를 판단하는 데 유용할 수 있습니다.

트리거 볼륨을 생성하려면 엔티티에 [충돌 컴포넌트][1]를 추가하고 모양을 구성하세요. 트리거 볼륨 엔티티에는 강체 컴포넌트를 추가하지 마세요.

![Trigger Volume](/img/user-manual/physics/trigger-volume.png)

강체 기반 엔티티가 볼륨에 진입했거나 나갔는지 확인하려면 간단한 스크립트가 필요합니다:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem  value="esm" label="ESM">

```javascript
import { Script } from 'playcanvas';

export class TriggerVolume extends Script {
    static scriptName = "triggerVolume";

    initialize() {
        this.entity.collision.on('triggerenter', (entity) => {
            console.log(`${entity.name} has entered trigger volume.`);
        });
        this.entity.collision.on('triggerleave', (entity) => {
            console.log(`${entity.name} has left trigger volume.`);
        });
    }
}
```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var TriggerVolume = pc.createScript('triggerVolume');

// initialize code called once per entity
TriggerVolume.prototype.initialize = function() {
    this.entity.collision.on('triggerenter', function (entity) {
        console.log(entity.name + ' has entered trigger volume.');
    });
    this.entity.collision.on('triggerleave', function (entity) {
        console.log(entity.name + ' has left trigger volume.');
    });
};
```

</TabItem>
</Tabs>

[1]: /user-manual/scenes/components/collision
