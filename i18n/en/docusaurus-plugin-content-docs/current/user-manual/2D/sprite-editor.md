---
title: Sprite Editor
---

The sprite editor is used to edit both texture atlas assets and sprite assets. It's also used to create sprite assets.

To open the sprite editor, double-click a texture atlas or sprite asset in the editor's asset panel.

![Sprite Editor](/img/user-manual/2D/sprite-editor/sprite-editor-highlights.jpg)

## Viewport

![Viewport](/img/user-manual/2D/sprite-editor/viewport.jpg)

The sprite editor's viewport shows the currently selected texture atlas. Frames are displayed as gray boxes in the texture atlas. The currently selected asset is shown with two sets of handles. Green and blue. Green handles modify the width and height of the frame, and blue handles modify the border properties of the frame.

### Editing Texture Atlas

Use the mouse within the viewport to drag the outline of frames, then use the green and blue handles to modify the extent and borders of frames.

#### Frames

Frames are defined areas in the texture atlas. Frames have a name, position and size, and borders. Borders are used to define the edges of 9-slicing regions. See the [9-slicing documentation][7] for more information.

## Inspector

The inspector panel shows the properties of the currently selected item. The inspector changes depending on whether the selected item is a texture atlas, frame, or sprite asset.

### Texture Atlas Inspector

![Texture Atlas Inspector](/img/user-manual/2D/sprite-editor/texture-atlas-inspector.jpg)

The texture atlas inspector allows you to automatically slice a texture atlas into a fixed grid.

First, choose how to handle existing frames. You can either *delete* existing frames or *add only* without deleting them.

Then choose how to specify grid cells:

- Grid by frame count - Specify the number of horizontal and vertical grid cells to divide the texture into
- Grid by frame size - Specify the pixel size each grid cell should have

Then set values for offset and spacing. Offset is the number of pixels to move from the top-left of the texture before starting the grid. Spacing is the number of pixels between each grid cell.

Finally, set the pivot for all newly created frames. The pivot determines the position and rotation point of the sprite. It's specified as a ratio of width and height.

After selecting all settings, click the **Generate Frames** button to create the frames.

### Frame Inspector

![Frame Inspector](/img/user-manual/2D/sprite-editor/frame-inspector.jpg)

The frame inspector allows you to set properties for individual frames or groups of frames. It appears when one or more frames are selected. The frame inspector is also where you create new sprites.

You can use the inspector to modify the position, size, and border properties of frames.

#### Frame Inspector Actions

- **New Sprite from Selection** - Creates a new sprite asset and assigns the selected frames to the sprite in the order they were selected.
- **New Sliced Sprite from Selection** - Creates a new sprite asset and sets the type to *sliced*. Assigns the selected frames to the sprite in the order they were selected.
- **Focus on Selection** - Focuses the viewport on the selected frames. [Keyboard shortcut: F]
- **Trim Selected Frames** - Reduces the size of selected frames to remove extra empty space around the image. [Keyboard shortcut: T]
- **Delete Selected Frames** - Deletes the selected frames [Keyboard shortcut: Delete]

### Sprite Inspector

![Sprite Inspector](/img/user-manual/2D/sprite-editor/sprite-inspector.jpg)

The sprite inspector appears when a sprite asset is selected. This inspector is used to edit one or more sprite properties. See the [sprite asset][6] for details about properties.

Click the **Add Frames to Sprite Asset** button to enter sprite editing mode. In this mode, you can select multiple frames from the frame panel or viewport and add them to the sprite. Click **Add Selected Frames** to add frames to the sprite.

You can also use the sprite inspector to reorder the frame sequence of a sprite or delete individual frames.

## Frame Panel

The frame panel allows you to select and delete frames from the texture atlas.

## Asset Panel

The asset panel shows all sprite assets created from the current texture atlas. You can select sprite assets from this panel.

<!-- *Artwork created by [PixelBoy](https://twitter.com/2pblog1)* -->

[6]: /user-manual/assets/types/sprite/
[7]: /user-manual/2D/slicing/

