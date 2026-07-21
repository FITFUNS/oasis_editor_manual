---
title: 트리거 볼륨 (Trigger Volumes)
---

트리거 볼륨(Trigger Volume)은 강체가 그 영역 안으로 들어오거나 밖으로 나갈 때마다 이벤트를 알려 주는 정적 충돌 모양입니다. 예를 들어 축구에서 공이 골에 들어갔는지, 경주차가 결승선을 지났는지 판단할 때 쓰기 좋습니다.

트리거 볼륨을 만들려면 엔티티에 [충돌 컴포넌트][1]를 추가하고 원하는 모양으로 설정하세요. 단, 트리거 볼륨 엔티티에는 강체 컴포넌트를 붙이면 안 됩니다.

![Trigger Volume](/img/user-manual/physics/trigger-volume.png)

강체를 가진 엔티티가 볼륨 안으로 들어왔는지 또는 밖으로 나갔는지 확인하려면 아래처럼 간단한 스크립트를 붙이면 됩니다:

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
