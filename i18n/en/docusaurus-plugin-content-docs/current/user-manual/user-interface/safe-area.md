---
title: Safe Area
---

As mobile devices trend toward full-screen displays, notches or cutouts are used on displays to make room for earpiece speakers and front-facing cameras (see iPhone X below).

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/iphone-notch.png" />

(Image source: Rafael Fernandez, modified version: OasisW, [CC BY-SA 4.0][cc-by-sa-40], via Wikimedia Commons)

Developers need to be careful about essential information that users need, which can be hidden by the notch during development.

For example, the screenshot below looks fine in the desktop developer tools mobile view.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/desktop-view.png" width="500" />

But when opened on a mobile device like the iPhone X, the 'Left' text is rendered under the notch and the 'Bottom' text is rendered under the navigation bar.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/mobile-view-render-under-notch.png" width="500" />

## Safe Area

To help developers, browsers on these devices support CSS [environment variables][env-mdn] that return values for placing elements within the area occupied by the notch or navigation bar. This is called the 'safe area'.

We have a project with a reusable script that takes these CSS values and applies them to a UI group element entity through margin size adjustments.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/mobile-view-safe-area.png" width="500" />

The project's UI setup has an entity with a full-screen group element called 'Safe Area'. This has a 'mobileSafeArea' script attached that contains logic to fit elements within the device's safe area.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/hierarchy-layout.png" width="420" />

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/safe-area-entity-setup.png" width="420" />

All essential UI elements can be placed as children of the safe area entity so they are anchored relative to the safe area entity.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/hierarchy-essential-elements.png" width="420" />

To help with development, you can enable debug settings that simulate the safe area so you can preview how the UI layout will look without a device.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/debug-config.png" width="600" />

Debug settings can also be edited with real-time updates in the launch tab.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/debug-config-runtime.gif" width="500" />

[env-mdn]: https://developer.mozilla.org/en-US/docs/Web/CSS/env()
<!-- [safe-area-project]: https://playcanvas.com/project/828118/overview/mobile-ui-safe-areas -->
[cc-by-sa-40]: https://creativecommons.org/licenses/by-sa/4.0
