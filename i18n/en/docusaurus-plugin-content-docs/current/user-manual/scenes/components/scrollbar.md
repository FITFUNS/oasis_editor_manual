---
title: Scrollbar
---

The scrollbar component defines scroll controls for a [scrollview][1] component.

For more details, see the [User Interface][2] section.

![Scrollbar Component](/img/user-manual/scenes/components/component-scrollbar.png)

## Component Properties

| Property    | Description |
|-------------|-------------|
| Orientation | Controls whether the scrollbar moves horizontally or vertically. |
| Value       | The current position value of the scrollbar, ranging from 0 to 1. |
| Handle      | The entity to be used as the scrollbar handle. This entity must have a scrollbar component. |
| Handle Size | The relative size of the handle compared to the track size, ranging from 0 to 1. For vertical scrollbars, a value of 1 means the handle takes up the full height of the track. |

[1]: /user-manual/scenes/components/scrollview
[2]: /user-manual/user-interface
