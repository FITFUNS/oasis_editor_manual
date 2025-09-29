---
title: Layout Groups
---

The Layout Group component is used to automatically set the position and size of child elements. The Layout Group component can be used to arrange child elements in vertical or horizontal columns or grids. The Layout Group component applies layout rules to all direct children, and you can override the layout group rules for a single child using the Layout Child component.

The Layout Group component can be used to create common layouts. For example, [grids][10], fixed width [vertical columns][11], or [horizontal rows][12].

## Creating a Layout Group {#creating-a-layout-group}

Add a layout group by adding a LayoutGroup component to an existing element entity.

![Create Layout Group](/img/user-manual/user-interface/layout-groups/create-layout-group.jpg)

## Layout Group Properties {#layout-group-properties}

### Orientation

Set `Orientation` to `Horizontal` to arrange the layout from left to right or right to left. Or set it to Vertical to arrange the layout from top to bottom or bottom to top.

### Reverse

The ReverseX and ReverseY properties are used to set the direction in which the layout group is arranged. The default is left to right, bottom to top.

### Alignment

Alignment is used to align child elements to the edges of the layout group. `[0,0]` aligns to the bottom left, and `[1,1]` aligns to the top right.

### Padding

Padding adds space inside the layout group before placing child elements.

### Spacing

Spacing determines the space between each child element.

### Fitting

The width fitting and height fitting properties determine how the width or height of child elements will be adjusted by the layout group.

**None** value applies no fitting.

**Stretch** value stretches child elements to fill the container's width or height using the following procedure:

- Sum each child's fitWidthProportion/fitHeightProportion values and normalize so all values sum to 1.
- Apply natural width/height for each child.
- If there is remaining space in the container, distribute it to each child based on normalized fitWidthProportion/fitHeightProportion values, but not exceeding each child's maxWidth/maxHeight.

**Shrink** value shrinks child elements to fit the container using the following procedure:

- Sum each child's fitWidthProportion/fitHeightProportion values and normalize so all values sum to 1.
- Apply natural width/height for each child.
- If the new total width/height of all children exceeds the container's available space, proportionally reduce each child's width/height based on normalized fitWidthProportion/fitHeightProportion values, but not below each child's minWidth/minHeight.

**Both** value applies both **Stretch** and **Shrink**.

### Wrap

The wrap property moves child elements that exceed the width (for vertical groups) or height (for horizontal groups) to a new row or column. The wrap property can be used to create grid-based layouts.

## Layout Children

Layout groups apply rules to all direct children. To override these rules for a specific child, add a LayoutChild component to that child.

![Layout Child](/img/user-manual/user-interface/layout-groups/layout-child-max-width.jpg)

In this example, the horizontal layout uses **Stretch** width fitting to stretch each button to fit the container equally. The center button has a Layout Child component with `maxWidth` set to 64, so it doesn't stretch.

![Layout Child Setup](/img/user-manual/user-interface/layout-groups/layout-child-setup.jpg)

## Example Layouts {#example-layouts}

### Vertical Leaderboard {#vertical-leaderboard}

![Leaderboard](/img/user-manual/user-interface/layout-groups/leaderboard.jpg)

This leaderboard is set up as a vertical column aligned to the top center. The width fitting property is used to stretch each item to full width, and padding and spacing properties are used to leave clear gaps between cells.

![Leaderboard Setup](/img/user-manual/user-interface/layout-groups/leaderboard-setup.jpg)

### Horizontal Buttons {#horizontal-buttons}

![Horizontal Buttons](/img/user-manual/user-interface/layout-groups/horizontal-layout.jpg)

This button row is arranged using a horizontal layout group with some spacing and padding settings. Width or height fitting is not used to ensure buttons fit to their proper width.

![Horizontal Setup](/img/user-manual/user-interface/layout-groups/horizontal-setup.jpg)

### Grid {#grid}

![Grid](/img/user-manual/user-interface/layout-groups/grid-layout.jpg)

This button row is arranged using a layout group with wrap settings enabled to create a grid. The group element connected to the layout group is set to the correct width (button width + spacing) to force wrapping to create a two-column grid. Horizontal layout means the grid fills by rows rather than columns, and the alignment property is set to `[0.5, 1]` so "loose" elements (rows with only one element) are centered on the X-axis.

![Setup](/img/user-manual/user-interface/layout-groups/grid-setup.jpg)

[10]: /user-manual/user-interface/layout-groups#grid
[11]: /user-manual/user-interface/layout-groups#vertical-leaderboard
[12]: /user-manual/user-interface/layout-groups#horizontal-buttons
