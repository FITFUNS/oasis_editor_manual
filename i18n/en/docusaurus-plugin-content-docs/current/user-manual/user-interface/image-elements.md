---
title: Image Elements
---

Image elements are used to display textures or solid colors. Image elements can be used as the foundation for more complex user interface components like buttons.

## Tinting

Each image element has a color property. When no texture is applied, the image element is simply a colored rectangle. When a texture is applied, this color is used to tint the texture. This allows you to create color variations using only a single grayscale texture.

![Tinting](/img/user-manual/user-interface/image-element/image-tinted.png)

## Transparency

Like the color property, you can set the transparency level of the element using the opacity property.

![Transparent](/img/user-manual/user-interface/image-element/image-transparent.png)

## Advanced Materials

When you can't achieve the desired result using the texture, color and opacity properties, you can assign your own material to the image element using the material property. For proper rendering, _Depth Write must be disabled_ on all materials added to image elements.

:::note

For screen space elements, lighting doesn't work as expected. It's recommended to disable lighting and shadows for all materials used in screen space.

:::

## Masks and Masking

Image elements can be used to mask or hide child elements. To enable this functionality, set the `mask` property of the image element to true.

When no texture asset is assigned to the image element used for masking, the mask becomes a rectangle defined by width and height. When a texture is assigned to the image element, the texture's alpha channel is used as the mask. Note that image masks are 1-bit, meaning there is no fade-out for masks using the texture's alpha channel.
