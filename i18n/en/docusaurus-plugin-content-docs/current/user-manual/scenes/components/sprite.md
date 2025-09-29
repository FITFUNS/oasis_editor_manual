---
title: Sprite
---

The sprite component renders and animates [sprite assets][1] in the scene.

There are two types of sprites: Simple and Animated.

## Simple Sprite

The simple sprite component displays a single frame from an atlas.

![Simple Sprite](/img/user-manual/scenes/components/component-sprite-simple.png)

## Simple Sprite Component Properties

| Property    | Description |
|-------------|-------------|
| Type        | Simple or Animated. |
| Sprite      | The sprite asset to display. |
| Frame       | The frame index of the sprite to display. |
| Color       | The color to apply as a tint to the sprite. |
| Opacity     | The transparency of the sprite. |
| Flip X      | Flips the rendered sprite horizontally. |
| Flip Y      | Flips the rendered sprite vertically. |
| Layers      | The layers on which the sprite will be rendered. |
| Draw Order  | The order in which this sprite is rendered. Lower numbers are rendered first. |
<!-- | Batch Group | The batch group this model belongs to. For more details about batching, see [here][6]. | -->

## Animated Sprite

The animated sprite component has multiple sprite animation clips connected that can play different sprite assets.

![Animated Sprite](/img/user-manual/scenes/components/component-sprite-animated.png)

## Animated Sprite Component Properties

| Property   | Description |
|------------|-------------|
| Type       | Simple or Animated. |
| Frame      | The frame index of the sprite to display. |
| Color      | The color to apply as a tint to the sprite. |
| Opacity    | The transparency of the sprite. |
| Flip X     | Flips the rendered sprite horizontally. |
| Flip Y     | Flips the rendered sprite vertically. |
| Speed      | A multiplier applied to the speed at which this sprite component's sprite animation clips are animated. |
| Layers     | The layers on which the sprite will be rendered. |
| Draw Order | The order in which this sprite is rendered. Lower numbers are rendered first. |
| Auto Play  | The name of the sprite animation clip to play when the sprite is activated. |

## Sprite Animation Clip Properties

| Property | Description |
|----------|-------------|
| Name     | The name of the sprite animation clip. Used to reference individual clips. |
| Loop     | If true, the animation clip repeats from the beginning when it reaches the end. |
| FPS      | The speed at which the clip plays in frames per second. |
| Sprite   | The sprite asset used to play this clip. |

## Scripting Interface

You can control the sprite component's properties using a [script component][4]. The sprite component's scripting interface is [here][5].

[1]: /user-manual/assets/types/sprite
[4]: /user-manual/scenes/components/script
[5]: https://manual.oasisserver.link/engine/classes/SpriteComponent.html
[6]: /user-manual/graphics/advanced-rendering/batching
