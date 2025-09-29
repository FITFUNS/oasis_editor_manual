---
title: Anim Events
---

Anim events can be used to trigger event listeners during animation playback. Each event is linked to a specific frame of the connected animation asset. When animation playback reaches that frame, the event fires and the connected event listener is called.

### Creating Events

To create a new event, select the animation asset for which you want to create an event in the asset panel. You will then see the `+ EVENT` button in the asset inspector as shown below:

![Animation Asset With Event](/img/user-manual/anim/animation_asset_with_events.png)

Each event has the following modifiable properties:

| Variable | Description |
|----------|-------------|
| time     | Defines the specific time during animation playback when the event should be triggered. Provided in seconds. |
| name     | The name of the event is used to identify the event when connecting event listeners to the anim component. |
| number   | An additional property that can be set to any number. Used to pass additional details to event listeners. |
| string   | An additional property that can be set to any string. Used to pass additional details to event listeners. |

### Event Listeners

After creating events for an animation asset, the events will fire whenever that asset is played by an anim component. Therefore, you can connect listeners to the anim component to handle the events. The following example shows how to connect event listeners to an anim component:

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

Any number of animation events can be connected to a single animation asset and used by any number of anim components. By utilizing the additional `number` and `string` properties of events, you can distinguish between events passed to the same event listener.
