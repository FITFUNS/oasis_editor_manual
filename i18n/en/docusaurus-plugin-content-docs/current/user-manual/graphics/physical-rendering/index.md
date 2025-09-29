---
title: Physically Based Rendering
---

![Star-Lord](/img/user-manual/graphics/physical-rendering/star-lord.jpg)  
*Star-Lord Model by [Joachim Coppens][2]*

Physically Based Rendering (PBR) is a combination of material shaders that work together to bring order and consistency to artist workflows, measured physical properties, and graphics rendering. By using the fundamental physical principles of how light and surfaces interact, it creates predictable visual effects that work under all lighting conditions without special cases.

## Basic Principles

Below, we'll summarize the fundamental principles of how physically based shaders calculate lighting. The following sections will cover more specific details about how to use physically based rendering in OasisW.

## Diffuse & Specular

Diffuse and specular (or reflected) light are terms that describe the two main types of interaction between light and materials. Specular light refers to light that bounces off the surface. On smooth surfaces, this light is all reflected in the same direction, making the surface appear mirror-like. Diffuse light is light that is absorbed, scattered within the material, and re-emerges. Unlike specular light, this light tends to be uniform in direction. During this absorption and re-emergence process, some wavelengths of light are absorbed. The wavelengths that are not absorbed give the material its color. For example, if all blue and green wavelengths are absorbed, the material appears red. In rendering terminology, diffuse color is sometimes known as "albedo" or "base color."

## Energy Conservation

![Energy Conservation](/img/user-manual/graphics/physical-rendering/energy-conservation.jpg)
*Smooth surfaces have small, bright patches while rough surfaces have large, dark patches*

One of the core features of physically correct rendering is energy conservation. Derived from the fact that both diffuse and reflected light come from the light hitting the material, the sum of diffuse and reflected light cannot be greater than the total light hitting the material. In practice, this means that if a surface is very reflective, the diffuse color will be barely visible. Conversely, if a material has bright diffuse color, it cannot reflect much.

The advantage of PBR is that energy conservation is built into the shader, so as an artist, you don't need to think about it. It just works!

## Metals & Non-metals

![Metals & Non-metals](/img/user-manual/graphics/physical-rendering/materials.jpg)

One of the new aspects that makes PBR different from previous shading models is thinking about what the material is made of to determine how the material behaves. The main consideration here is whether the material is a conductor (usually metal) or an insulator (non-metal).

This is important because it determines many factors about how the material reacts to light. For example, metals are generally reflective (between 60%-90%) while non-metals are not (0%-20%). Second, non-metal reflections are usually white while metals usually reflect the same color as the diffuse.

Because of these differences, one of the PBR workflows simplifies this by including a **metallic** property to define materials as either metal or non-metal. We'll cover the metallic workflow in more detail in the next section.

## Fresnel

Fresnel is not a term you must know when working with PBR in OasisW, but understanding it will help you better understand how materials behave.

What you need to know about Fresnel is that the angle at which you view a surface affects how reflective that surface appears. If the surface is oriented almost edge-on to your view, it will be almost completely reflective.

## Micro Surface

Finally, micro surface. Generally, 3D artists are familiar with the concept of normal maps. These are textures that modify the orientation of the surface they're applied to. Micro surface, known as roughness or glossiness, provides something similar at a much smaller scale. A material's micro surface describes how rough or smooth the surface is. Compare glass (high glossiness, low roughness) with sandpaper (high roughness, low glossiness). It's not about specifying the exact direction the surface faces, but simply the general concept of rough or smooth.

Some PBR systems use roughness, others use glossiness, but they are the same thing. Roughness is the inverse of glossiness and vice versa. To convert from one to the other, simply invert the texture or value.

<!-- [Next: Physical Materials][6] -->

*You can find more reading material in Marmoset Toolbag's excellent [PBR Theory][5] article.*

[2]: https://www.joachimcoppens.com/
[5]: https://www.marmoset.co/toolbag/learn/pbr-theory
[6]: /user-manual/graphics/physical-rendering/physical-materials
