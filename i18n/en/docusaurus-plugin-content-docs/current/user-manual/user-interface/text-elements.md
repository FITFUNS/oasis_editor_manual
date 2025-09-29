---
title: Text Elements
---

Text elements are used to display text strings using [font assets][1].

## Text

Text elements include a string field where you can enter the text to be displayed. Use `Shift+Enter` to enter newline characters in the string field.

:::tip

Text elements render to the screen using a single quad for each character in the string. Changing text properties regenerates the element's mesh. There is a performance impact to this, but it should not be a problem for a reasonable number of elements changing text content every frame.

:::

### Text Markup

Text elements support a simple markup syntax that allows you to apply different colors to specific parts of the text. Take a look at this example:

```none
[color="#ff0000"]Red[/color], [color="#00ff00"]green[/color] and [color="#0000ff"]blue[/color].
```

Assuming the text element's default color is white, this renders as:

![Text Markup](/img/user-manual/user-interface/text-element/text-markup.png)

:::tip

Markup syntax support must be enabled in advance for text elements. You can do this via the API:

```javascript
entity.element.enableMarkup = true;
```

Or you can enable it in the editor:

![Enable Markup](/img/user-manual/user-interface/text-element/enable-markup.png)

:::

<!-- ## Localization

To localize the text of a text element, you can select the 'Localized' checkbox. When this feature is enabled, instead of text, you specify the localization key for the text element that will be used to fetch localized text from a localization asset.

For more information about localization, see [here][11]. -->

## Auto-size

By default, text elements are set to automatically adjust their width and height to fit the text string. You can disable this and specify the element's height and width directly in the editor panel.

![Auto Size](/img/user-manual/user-interface/text-element/auto-size.png)

:::note

The height of characters is determined by the largest character in the font. It's the same for all characters to avoid string position changes depending on the string's content.

:::

## Alignment

Text elements have an additional tool for positioning called alignment. You probably know how this property works from word processor-like tools. In this case, rather than presets, we expose variables that can be changed. Alignment is made up of two values `[X, Y]` between 0 and 1. `[0,0]` is bottom left alignment, `[0.5,0.5]` is center alignment, and `[1,1]` is top right alignment.

![Top Left](/img/user-manual/user-interface/text-element/alignment-bottom-left.png)

![Centered](/img/user-manual/user-interface/text-element/alignment-centered.png)

![Bottom Right](/img/user-manual/user-interface/text-element/alignment-top-right.png)

## Font Size & Line Height

The font size property sets the rendering size of the font in screen component pixels. Line height sets the distance in screen component pixels to move down when the text contains newline characters.

Font size and line height being equal is the default:

![Font Size Line Equal](/img/user-manual/user-interface/text-element/font-line-equal.png)

To increase line spacing, increase the line height:

![Font Size Line Spaced](/img/user-manual/user-interface/text-element/font-line-spaced.png)

## Spacing

The spacing property increases the distance between characters in the string. The font defines the ideal distance to move the cursor forward for each character. The spacing property is a multiple of this distance.

![Spacing](/img/user-manual/user-interface/text-element/spacing.png)

## Tinting

The color property allows you to tint the string with your chosen color.

![Tinted](/img/user-manual/user-interface/text-element/tinted.png)

## Transparency

The opacity property allows you to set the transparency of the string.

![Transparent](/img/user-manual/user-interface/text-element/transparent.png)

[1]: /user-manual/assets/types/font
[11]: /user-manual/user-interface/localization
