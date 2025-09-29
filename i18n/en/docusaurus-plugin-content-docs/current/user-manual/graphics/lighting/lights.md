---
title: Lights
---

In the real world, the surrounding environment is lit by multiple light sources. Examples include the sun, streetlights, and TV screens. In OasisW scenes, you can set up multiple types of light sources and light shapes to approximate the various types of lighting found in reality.

Descriptions of each light type and light shape are below, and examples of various light type combinations are shown in the [table](#use-cases) below.

## Light Types {#light-types}

OasisW has three types of lights:

* Directional lights
* Omni lights
* Spot lights

### Directional Lights {#directional-lights}

The light source we are most familiar with is the sun. Since the sun is very far from Earth, the light reaching our planet's surface can be approximated as traveling in a single direction. In OasisW, this type of light source is called a directional light.

When unselected, directional lights are displayed with the following icon in the editor's 3D view:

![Directional light icon](/img/user-manual/graphics/lighting/lights/directional_icon.jpg)

You can click this icon to select the light in the Hierarchy and Inspector panels.

Here's how a directional light illuminates objects:

![Directional light](/img/user-manual/graphics/lighting/lights/directional.jpg)

### Omni Lights {#omni-lights}

Omni lights are light sources that emit light in all directions. Examples of this type of light source include candles, and other examples can be found in the [table](#use-cases) below.

When unselected, omni lights are displayed with the following icon in the editor's 3D view:

![Omni light icon](/img/user-manual/graphics/lighting/lights/point_icon.jpg)

You can click this icon to select the light in the Hierarchy and Inspector panels.

Here's how an omni light illuminates objects:

![Omni light](/img/user-manual/graphics/lighting/lights/point.jpg)

### Spot Lights {#spot-lights}

Spot lights emit light in all directions like omni lights. However, the light from spot lights is limited to a cone shape.

When unselected, spot lights are displayed with the following icon in the editor's 3D view:

![Spot light icon](/img/user-manual/graphics/lighting/lights/spot_icon.jpg)

You can click this icon to select the light in the Hierarchy and Inspector panels.

Here's how a spot light illuminates objects:

![Spot light](/img/user-manual/graphics/lighting/lights/spot.jpg)

## Light Shapes {#light-shapes}

There are four light source shapes:

* Punctual
* Rectangle
* Disk
* Sphere

### Punctual {#punctual}

The punctual light shape is an infinitely small point. This is the default light source shape and is less physically accurate but approximates light sources at relatively low cost. Other light shapes have higher rendering costs but provide more accurate lighting and reflections.

### Rectangle {#rectangle}

The rectangle light shape is a flat four-sided shape with specified width and height.

### Disk {#disk}

The disk light shape is a round, flat light shape with a specified radius.

### Sphere {#sphere}

The sphere light shape is a ball shape with a specified radius.

![Shapes](/img/user-manual/graphics/lighting/lights/shapes.jpg)

## Use Cases {#use-cases}

The following is a table of common use cases for each light source shape and light type:

| Shape/Type   | Punctual      | Rectangle              | Disk                   | Sphere                |
| -------------|---------------| -----------------------| -----------------------| ----------------------|
| Directional  | Sun           | ❌                      | Sun or Moon            | Sun or Moon           |
| Omni         | Unshaded bulb | ❌                      | ❌                     | Unshaded round bulb   |
| Spot         | Torch         | TV screen              | Shaded bulb            | Shaded round bulb     |

❌ = No common use case - but can still be used for application/game-specific lighting effects.

## Performance Considerations {#performance-considerations}

Rectangle, disk, and sphere light shapes have higher rendering costs than punctual lights. Therefore, use punctual light shapes when you have relatively small light sources or when there are no reflective surfaces where punctual lights might look visually inaccurate.
