---
title: Layout Group
---

The layout group component enables an entity to specify the size and position of child element components.

For more details, see the [Layout Groups][0] section.

![LayoutGroup component](/img/user-manual/scenes/components/component-layoutgroup.png)

## Properties

| Property       | Description |
|----------------|-------------|
| Orientation    | Whether the layout should run horizontally or vertically. |
| ReverseX       | Reverses the order of children along the x-axis. |
| ReverseY       | Reverses the order of children along the y-axis. |
| Alignment      | Specifies the horizontal and vertical alignment of child elements. Values range from 0 to 1, where [0, 0] is bottom-left and [1, 1] is top-right. |
| Padding        | Padding to apply inside the container before placing children. Specified as left, bottom, right, top values. |
| Spacing        | Spacing to apply between each child element. |
| Width Fitting  | The fitting logic to apply when placing and scaling child elements. |
| Height Fitting | The fitting logic to apply when placing and scaling child elements. |
| Wrap           | Whether to wrap children to new rows/columns when they exceed the container size. |

## Scripting Interface

You can control the layout group component's properties using a [script component][2]. The layout group component's scripting interface is [here][3].

[0]: /user-manual/user-interface/layout-groups
[2]: /user-manual/scenes/components/script
[3]: https://manual.oasisserver.link/engine/classes/LayoutGroupComponent.html
