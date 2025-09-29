---
title: Anim Layer Masks
---

When creating complex animation behavior for game objects, it is often necessary to isolate the playback of specific animations to specific bones of each object model. This is particularly useful when animating characters that need to perform multiple actions simultaneously. This can be achieved in OasisW by creating masks for given [animation layers](/user-manual/animation/anim-state-graph-assets/#layers) of the anim component.

### Creating Masks

After creating an anim state graph asset and connecting it to an anim component, a list of layers included in the graph is displayed. You can create a mask for one of these layers by clicking the **Create Mask** button under each layer panel:

![Anim Component Create Mask](/img/user-manual/anim/anim_component_create_mask.png)

This opens the mask inspector for that layer as shown below:

![Mask Inspector](/img/user-manual/anim/anim_mask_inspector.png)

The mask inspector displays the entire hierarchy that the anim component drives, starting from the `root bone` specified in the anim component. Each bone in the hierarchy can be selected to be included in the mask. You can also right-click on specific bones to include or exclude entire sections of the hierarchy. All bones not selected in this mask will not be driven by animations playing on this mask's layer.

After creating masks, you can use [layer blending](/user-manual/animation/anim-state-graph-assets/#layer-blending) to smoothly blend masked animations from multiple layers.
