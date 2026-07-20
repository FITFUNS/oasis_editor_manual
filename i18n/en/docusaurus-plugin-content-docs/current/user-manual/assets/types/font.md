---
title: Font
---

A font asset holds **an image containing every character you chose to include**, along with data describing how each character should be displayed. Font assets are used to draw text with an [Element component](/user-manual/scenes/components/element) of type `Text`.

To draw text on screen, add an Element component to an entity, set its type to `Text`, and then **drag and drop** the font asset onto the font slot of the Element component.

:::note Why an image?

A 3D engine does not draw glyphs directly. Instead, it displays text by **cutting and pasting from an image where the glyph shapes are drawn**. That is why a font asset is a bundle of an image and coordinate data. Because of this approach, keep in mind that *only the characters you included in advance* can be displayed.

:::

## Creating a Font

You can create a new font asset directly in the editor. Click the **+** button in the Assets Panel and select **Font**.

:::warning Note

Font **upload** support is planned for a future release. For now, only creating a font in the editor is available.

:::

![Add font](/img/user-manual/assets/fonts/add-font.png)

These are the properties you can edit for a font asset in the editor.

![Font asset properties](/img/user-manual/assets/fonts/font.png)

## Properties

### Intensity

Intensity is used to **boost the value read from the signed distance field**. `0` means no boost, and `1` means maximum boost.

It can help to adjust this when the font's edges do not come out clean and smooth at the default intensity, or when **drawing glyphs at small font sizes**.

## When Writing Korean

:::tip Good to know

A font asset can only draw **the characters you included**. The alphabet has just 52 letters, but Korean has more than ten thousand composable characters. By including only the characters that actually appear in the text you use, you can greatly reduce the asset size. Characters that are not included appear on screen as blanks or boxes.

:::

## Related Documentation

- [Element component](/user-manual/scenes/components/element) — Draws text using a font.
- [User Interface](/user-manual/user-interface) — Builds on-screen UI.
