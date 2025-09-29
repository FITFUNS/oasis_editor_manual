---
title: Font
---

Font assets contain an image with all the characters of a font that the user has chosen to include, along with related data about how each character should be displayed. Font assets are used to render text using the [Element][1] component of type Text. To render text, add an Element component to an entity, set the type to Text, and then drag and drop a font asset to the font slot of the Element component.

<!-- You can create a Font asset by uploading a font file ending in `.ttf`, `.ttc`, `.otf` or `.dfont`. We convert the uploaded font to a multi-channel signed distance field. This makes a font keep its details at various sizes so you only need to upload one font and use the same one for every size you want to display. The technique might work better for some fonts than others. -->

## Creating a Font

You can create a new font asset directly from the OasisW editor interface. Use the Create Asset menu in the Assets Panel.

:::warning Note

Font upload functionality will be supported in the future.

:::

![Add Font](/img/user-manual/assets/fonts/add-font.png)

Here are the properties you can edit for font assets in the editor:

![Font Asset](/img/user-manual/assets/fonts/font.png)

## Properties

### Intensity

Intensity is used to boost the values read from the signed distance field, where 0 is no boost and 1 is maximum boost. This can be useful when a font doesn't render with clean and smooth edges at the default intensity or when rendering fonts at small font sizes.

<!-- ## Character Presets

Click on a preset to include its characters to the Font asset. Clicking on a preset will add the characters to the existing selection.

## Custom Character Range

If you want to include a specific range of characters to the Font asset, enter the range in Hex and click the Plus icon to add the range to the character selection.

## Font

### Characters

The characters that should be included in the Font asset. If you only need numbers for example, there is no need to include all the other characters of the Font. This is useful to keep Font assets small. Please note that some characters may not exist in the uploaded font.

## Process Font

Click on the Process Font button after you make changes to the Font asset in order to generate a new version. -->

[1]: /user-manual/scenes/components/element/
