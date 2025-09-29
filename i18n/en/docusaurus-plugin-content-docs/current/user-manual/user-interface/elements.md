---
title: Elements
---

Elements are the individual pieces that make up a user interface screen. User interface elements are created by attaching an element component to an entity and adding that entity as a child or descendant of a screen entity. Elements that are part of a screen differ from regular entities in how their transform is calculated and therefore how they are positioned on the screen.

In addition to the local position, rotation and scale used to calculate the entity's position relative to its parent, the element component uses anchor, pivot and margin properties to determine where the local position should be measured from, where the center point of the element rectangle should be, and the distance between the element rectangle's edges and the anchor.

These new properties provide sufficient control for laying out user interfaces, including aligning with other elements or positioning elements at fixed distances.

## Element Positioning {#element-positioning}

![Element Guide](/img/user-manual/user-interface/elements/element-guide.png)

## Element Resizing {#element-resizing}

To resize an element, activate the resize gizmo or press '4':

![Resize Gizmo Toolbar](/img/user-manual/user-interface/elements/gizmo-resize.png)

Then drag the corners to resize the element:

![Resize Gizmo Viewport](/img/user-manual/user-interface/elements/gizmo-resize-viewport.png)

## Pivot {#pivot}

The pivot property of an element determines the point at which position, rotation and scale are applied. The pivot is defined by two numbers between 0 and 1 that determine the position of the pivot along the full width and height of the element in the X and Y directions. For example, `[0,0]` sets the pivot to the bottom left of the element, and `[1,1]` sets the pivot to the top right of the element.

![Pivot](/img/user-manual/user-interface/elements/pivot.png)

## Anchor {#anchor}

The anchor property determines the point or points on the parent from which the element's position is calculated. The anchor value is specified as two points `[minX, minY]` and `[maxX, maxY]`. In the editor, this is displayed as four numbers: [minX, minY, maxX, maxY]

![Anchor](/img/user-manual/user-interface/elements/anchor-editor.png)

For example, setting the anchor to `[0,0,0,0]` anchors the element to the bottom left of the parent. The element's position sets the offset from the parent's bottom left.

## Split Anchors {#split-anchors}

Sometimes it's useful to anchor different edges of an element to different positions. For example, if you want to create an element that stretches to fill the screen regardless of resolution. You can do this by splitting the minimum and maximum values of the anchor.

![Split Anchor](/img/user-manual/user-interface/elements/split-anchor.png)

In this image, the anchor is set to `[0,0,1,1]` so the element's edges are anchored to the parent's edges. Each edge has a margin of 50 pixels, so the element is anchored to fill the parent with a 50 pixel margin from the edges.

## Margin {#margin}

The margin property can only be used when the anchor values are split on an axis. The margin sets the number of screen component pixels from the anchor that the element's edge should be. Shortcuts for margin values are available as `left`, `right`, `top`, `bottom` properties in the element component's script.

## Loose Elements {#loose-elements}

The main use case for elements is to be part of a user interface screen component. It is possible to have element components that are not part of a screen. For example, a single piece of text in the world.

The sizing and positioning of elements without a screen works slightly differently. For screens, a 32x32 element is 32 pixels, but for elements without a screen, it is 32m x 32m. Scale accordingly.
