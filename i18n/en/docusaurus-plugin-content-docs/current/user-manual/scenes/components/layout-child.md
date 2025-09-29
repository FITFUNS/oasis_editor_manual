---
title: Layout Child
---

The layout child component enables elements controlled by a layout group component to override the layout group's default behavior.

For more details, see the [Layout Groups][0] section.

![LayoutChild component](/img/user-manual/scenes/components/component-layoutchild.png)

## Properties

| Property              | Description |
|-----------------------|-------------|
| Min Width             | Sets the minimum width at which the element can be rendered. |
| Min Height            | Sets the minimum height at which the element can be rendered. |
| Max Width             | Sets the maximum width at which the element can be rendered. |
| Max Height            | Sets the maximum height at which the element can be rendered. |
| Fit Width Proportion  | The proportion of additional space the element will take when the layout group is set to stretch or shrink. |
| Fit Height Proportion | The proportion of additional space the element will take when the layout group is set to stretch or shrink. |
| Exclude from Layout   | Completely ignores this element when calculating the layout. |

## Scripting Interface

You can control the layout child component's properties using a [script component][2]. The layout child component's scripting interface is [here][3].

[0]: /user-manual/user-interface/layout-groups
[2]: /user-manual/scenes/components/script
[3]: https://manual.oasisserver.link/engine/classes/LayoutChildComponent.html
