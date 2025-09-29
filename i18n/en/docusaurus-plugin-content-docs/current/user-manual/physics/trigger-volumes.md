---
title: Trigger Volumes
---

Trigger volumes are static collision shapes that can fire events whenever a rigid body enters or leaves the volume. This can be useful for determining when a goal is scored in a football game or when a race car reaches the finish line.

To create a trigger volume, add a [Collision Component][1] to an entity and configure its shape. Do not add a rigid body component to the trigger volume entity.

![Trigger Volume](/img/user-manual/physics/trigger-volume.png)

A simple script is needed to check if a rigid body based entity has entered or left the volume:

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
