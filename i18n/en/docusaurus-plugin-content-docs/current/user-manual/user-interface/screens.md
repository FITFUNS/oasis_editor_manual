---
title: Screens
---

The [Screen Component][1] defines the area where the user interface is built. Its main responsibility is to determine how the screen's content (child entities with element components) is rendered.

## Screen Space or World Space

The main choice in the screen's render mode is whether it renders in screen space or world space.

![Screen space](/img/user-manual/user-interface/screens/screen-space-viewport.png)

Screen space screen components do not follow the normal transform hierarchy. Instead, they are rendered as an overlay on the camera. This is useful for creating 2D interfaces, HUDs or other game interfaces. There is an option in the menu to add a *2D Screen* to create a screen space screen.

![World Space](/img/user-manual/user-interface/screens/world-space-viewport.png)

When the screen space option is disabled, the screen is instead rendered using the normal transform hierarchy. Elements are still positioned relative to the screen's coordinate system, but the screen appears in the 3D world. There is an option in the menu to add a *3D Screen* to create a world space screen.

## Resolution and Scaling

OasisW applications can be viewed on many devices with different resolutions. For screen space components, it's important to think about how the user interface will look on different screen sizes.

The simplest way to render elements is without scaling.

![iPad No Scaling](/img/user-manual/user-interface/screens/ipad-no-scaling.png)

In this case, the user interface works well at iPad resolution. But what happens when we view the same scene on an iPhone?

![iPhone No Scaling](/img/user-manual/user-interface/screens/iphone-no-scaling.png)

The phone's smaller resolution causes the user interface to extend beyond the screen edges and become unusable.

The screen component provides a scaling mode property that can be used on screen space components. Setting this to *Blend* scales the interface to match the resolution of the screen it's displayed on. The same interface using blend scaling on iPad looks like this:

![iPad Scaling](/img/user-manual/user-interface/screens/ipad-scaling.png)

And on iPhone

![iPhone Scaling](/img/user-manual/user-interface/screens/iphone-scaling.png)

You can see that the user interface now works on both resolutions.

### How is the scale factor calculated?

The screen component's *reference resolution* property is used as the "ideal" resolution. If the application is displayed at a resolution larger than the reference, it's scaled up, and if it's displayed at a resolution smaller than the reference, it's scaled down. A scale blend property is also exposed to determine which axis to use, as the application may need to respond differently to horizontal or vertical changes. Scale blend 0 uses only the horizontal resolution, scale blend 1 uses only the vertical resolution, and scale blend 0.5 uses both resolutions equally.

In this example, you can see how changing the scale blend property affects how the interface responds when rotating from portrait to landscape.

![Scale Blend 0](/img/user-manual/user-interface/screens/scale-blend-0.png)
When the value is 0, the buttons become too large due to the increase in horizontal resolution.

![Scale Blend 1](/img/user-manual/user-interface/screens/scale-blend-1.png)
When the value is 1, the buttons become too small due to the decrease in vertical resolution.

![Scale Blend 0.5](/img/user-manual/user-interface/screens/scale-blend-0.5.png)
When the value is 0.5, the two changes balance out and the buttons maintain the same size.

[1]: /user-manual/scenes/components/screen
