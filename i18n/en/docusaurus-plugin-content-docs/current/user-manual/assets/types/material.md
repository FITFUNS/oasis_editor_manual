---
title: Material
---

All surfaces of 3D models are drawn using a **material**. A material defines properties of that surface such as its color, shininess, and roughness.

In OasisW, a material is an asset type that collects all of these properties together. By default it represents a **Physical material**, providing properties that can create a wide range of looks, from smooth plastic to rough wood to scratched metal. The legacy **Phong material** type is also supported.

## Importing Materials

When you upload a 3D model file (such as FBX) to OasisW, **its materials are automatically imported as well.** They are created with the same properties they had in the 3D modeling tool. If you upload with embedded media (FBX only), the related texture maps are also connected automatically.

## Creating New Materials

You can create a new material directly in the editor. Click the **+** button in the Assets Panel and select **Material**.

![Create material](/img/user-manual/assets/materials/create-asset-menu.jpg)

A new material asset is created and the material inspector opens on the right side of the screen.

## Selecting a Material

To edit a material, you must first select it. Selecting it brings up the material inspector.

- Select a material directly from the Assets Panel.
- You can also select one from the model inspector or a model component.
- Usually, **clicking the material preview icon** takes you to the material inspector.

![Model inspector](/img/user-manual/assets/materials/model-inspector-simple.jpg)

## Assigning Materials {#assigning-materials}

You can change which material is assigned to which part of a model asset, and you can also assign a different material **to a specific entity only** that has a model component.

### Asset Materials

Clicking Asset Materials selects the model asset. You can also pick the model asset directly from the Assets Panel. The model inspector shows the model's **list of meshes and the material assigned to each**. Use the `X` button to clear a material, and click an empty slot to assign a new one. You can also drag and drop a material asset from the Assets Panel onto a slot.

### Entity Materials

Clicking Entity Materials first **prompts you to choose the mesh instance whose material you want to change**. Once you pick a mesh instance, a new material selector appears on the model component, letting you assign a different material for that entity only.

![Per-entity material assignment](/img/user-manual/assets/materials/overridden.png)

## Editing a Material

When a material is selected, you can edit its properties.

![Material inspector](/img/user-manual/assets/materials/material-inspector.jpg)

## Material Maps

Most material editing involves **creating and assigning texture maps to various slots**. The texture map slots of a material share the following common options.

### Texture Asset

The first is a texture asset. When you upload an image to OasisW, a [texture asset](/user-manual/assets/types/texture) is created, and you can assign it to a slot in the material.

### Color or Tint Color

Some map slots can use a **solid color** instead of a texture. Some slots also support a **tint color** when a texture is assigned. When tint is enabled, that color is multiplied with the color of the texture map.

### Channel

Some maps only need a **single grayscale value** from `0.0` to `1.0`. In this case, you can choose which channel of the texture to use. **RGB** means all three channels are used, and **R**, **G**, and **B** mean only the red, green, or blue channel is used, respectively.

### Texture Transformation

| Property | Description |
|----------|-------------|
| Apply to all Maps | Uncheck this option to apply offset and tiling values to individual maps. |
| Offset | The U and V offset to apply to the first UV channel referenced by this material's maps. |
| Tiling | The U and V scale to apply to the first UV channel referenced by this material's maps. |
| Rotation | The U and V rotation to apply to the first UV channel referenced by this material's maps. |

### Ambient

The ambient properties determine **how the material appears under ambient light**.

| Property | Description |
|----------|-------------|
| AO Texture | A map containing pre-baked ambient occlusion. |
| Vertex Color | Use mesh vertex colors for AO. When aoMap is set, it is multiplied with the vertex colors. |
| Color | A tint color to multiply with the scene's global ambient color. |
| Intensity | The ambient occlusion intensity. Default value is 1. |

### Diffuse

The diffuse properties define **how the material reflects diffuse light emitted by the scene's dynamic lights**. In simple terms, it is the object's base color.

| Property | Description |
|----------|-------------|
| Texture | A map that specifies the diffuse color per pixel. If not set, the diffuse color below is used instead. |
| Vertex Color | Multiply mesh vertex colors into the diffuse. |
| Color | When there is no diffuse map, this is the material's diffuse color. When a map is present and tint is enabled, this color modulates the map. |

### Specular

The specular properties define the **color of the shiny highlights**, that is, the gloss.

| Property | Description |
|----------|-------------|
| Use Metalness | Switches between the specular workflow and the metalness workflow. |
| Specular Map | A map that specifies the specular color per pixel. If absent, the specular color is used. |
| Vertex Color | Use mesh vertex colors for the specular. |
| Color | When there is no specular map, this is the material's specular color. |
| Metalness Map | [When metalness is used] Specifies the metalness value per pixel. 1 is metal, 0 is non-metal. |
| Metalness | Defines how metallic the surface is, from 0 (dielectric) to 1 (metal). |
| Metalness Specular Color | When metalness is on, applies a color tint to reflections using the specular map. |
| Gloss Map | A gloss map that specifies the gloss value per pixel. Modulated by the glossiness property. |
| Glossiness | Determines the smoothness of the surface. Lower values are rougher with highlights spread wide; higher values are smoother with highlights tightly focused. |
| Invert | Inverts the gloss value so it is treated like roughness. Default is off. |

### Emissive

The emissive properties control **how much light the material emits by itself**. This is the opposite of reflecting light.

| Property | Description |
|----------|-------------|
| Texture | A map that specifies the emissive color per pixel. |
| Vertex Color | Use mesh vertex colors for the emissive. |
| Color | When there is no emissive map, this is the material's emissive color. |
| Intensity | A multiplier for the emissive color. Can produce an overbright effect on very bright materials. |

### Opacity

Opacity sets the **level of transparency**.

| Property | Description |
|----------|-------------|
| Blend Type | The blend mode for this material. |
| Texture | A map that specifies opacity per pixel. Modulated by the Amount property. |
| Vertex Color | Use mesh vertex colors for the opacity. |
| Alpha To Coverage | Turns alpha to coverage on or off. Works only on WebGL2. |
| Opacity Dither | Dithers opacity to produce transparency without alpha blending. |
| Opacity Shadow Dither | Dithers shadow opacity to produce transparent shadows without alpha blending. |

### Normals

Specifies a normal map. This map expresses surface bumps, and **in OasisW you must use a normal map rather than a height map.**

| Property | Description |
|----------|-------------|
| Texture | A normal map that specifies the surface normal per pixel. Modulated by the Bumpiness property. |

### Parallax

A parallax map adds an **illusion of depth** to the surface, making the normal map more realistic. It is only enabled when a normal map is set on the material.

| Property | Description |
|----------|-------------|
| Height Map | A height map that specifies the per-pixel intensity of the parallax effect. White is maximum height, black is zero height. |

### Clearcoat

Clearcoat simulates a **thin, transparent coating layer** on top of the surface. Use it to represent car paint or plastic surfaces.

| Property | Description |
|----------|-------------|
| Clear Coat Factor | Defines the strength of the clearcoat layer, from 0 to 1. |

### Sheen

Sheen simulates the **soft reflection seen on fabric materials** such as cloth or velvet. It represents the scattered reflection produced by the surface's fine roughness.

| Property | Description |
|----------|-------------|
| Use Sheen | Turns on the sheen specular effect. |
| Invert | Inverts the sheen gloss so it is treated like roughness. |

### Refraction

Refraction simulates the phenomenon where **light bends direction** as it passes through a transparent material. Use it to represent glass, water, and crystal.

| Property | Description |
|----------|-------------|
| Dynamic Refractions | Uses a grab pass for refraction. |
| Refraction Map | A map that defines the amount of refraction per pixel. |
| Vertex Color | Use vertex colors for the refraction strength, or multiply them with the refraction map. |
| Refraction | Determines the fraction of light that passes through the material. |
| Index Of Refraction | Determines how much light is distorted as it passes through the material. Expressed as 1.0 / index of refraction. |
| Dispersion | The strength of the angular separation of colors (chromatic aberration) passing through the volume. Default is 0, meaning no dispersion. |

### Iridescence

Iridescence simulates the phenomenon where **color changes with the viewing angle**. It represents materials such as soap bubbles, oil films, butterfly wings, and pearls.

| Property | Description |
|----------|-------------|
| Use Iridescence | Turns on the iridescence diffraction effect. |

### Environment

The environment properties determine **how the material reflects its surroundings**.

| Property | Description |
|----------|-------------|
| Sphere Map | A sphere map texture that approximates environment reflections. Setting it hides the cube map property. The two properties cannot be used together. |
| Cube Map | A [cube map](/user-manual/assets/types/cubemap) texture that approximates environment reflections. More accurate than a sphere map. Setting it hides the sphere map property. |
| Reflectivity | Determines how much light is reflected from the material. Default value is 1 (full reflection). |

### Lightmap

A lightmap holds **pre-computed, baked diffuse lighting**. Because it pre-processes dynamic lighting calculations that would otherwise run at runtime, it is regarded as an optimization.

| Property | Description |
|----------|-------------|
| Texture | A lightmap texture containing pre-baked diffuse lighting. To use a lightmap, the mesh must have two UV sets; the lightmap uses the second UV set. |
| Vertex Color | Use baked vertex lighting. When lightMap is set, it is multiplied with the vertex colors. |

### Other Render States

Controls additional behavior when drawing a mesh with the assigned material.

| Property | Description |
|----------|-------------|
| Depth Test | When on, a depth test is performed per pixel so the mesh is only visible when nothing is in front of it. When off, it is always drawn regardless of the depth buffer. Default is on. |
| Depth Write | When on, this mesh's depth information is written to the depth buffer, allowing later meshes to depth-test against it. Default is on. |
| Cull | None draws both front and back faces. Front Faces draws only the front, and Back Faces draws only the back, which is the default. OasisW treats counter-clockwise vertex winding as the front face. Back face culling helps performance. |
| Use Fog | Applies the fog defined in the scene settings. |
| Use Lighting | Applies lighting. |
| Use Skybox | Applies the scene skybox as a pre-filtered environment map. |
| Use Tonemap | Applies tonemapping. Default is on. |

:::tip When starting out

There look like a lot of properties, but at first you can produce most looks by touching just three: the **diffuse Color and Texture** and the **specular Glossiness**. Open the rest one at a time as you need them.

:::

## Related Documentation

- [Texture](/user-manual/assets/types/texture) — The images to place in a material's map slots.
- [Cubemap](/user-manual/assets/types/cubemap) — Used for environment reflections.
- [Render](/user-manual/assets/types/render) — The mesh data the material is applied to.
