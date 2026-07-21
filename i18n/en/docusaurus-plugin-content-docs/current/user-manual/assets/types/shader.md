---
title: Shader
---

Shader assets contain **GLSL code**. You can create one by selecting **+ › Shader** in the editor's Assets Panel, or by uploading a file with a `.vert`, `.frag`, or `.glsl` extension.

To edit a shader asset, **right-click** in the editor and select **Edit**.

:::warning An advanced feature

Shaders are code that runs directly on the GPU and require an understanding of the graphics pipeline. If you only need to change an object's color or texture, the properties of a [material](/user-manual/assets/types/material) are usually enough. Consider a shader only when you need an effect that a material cannot express.

:::

## Creating a custom material

The following example creates a custom material using shader assets.

```javascript
const vertexShader = this.app.assets.find('my_vertex_shader');
const fragmentShader = this.app.assets.find('my_fragment_shader');
const shaderDefinition = {
    attributes: {
        aPosition: pc.SEMANTIC_POSITION,
        aUv0: pc.SEMANTIC_TEXCOORD0
    },
    vshader: vertexShader.resource,
    fshader: fragmentShader.resource
};

const shader = new pc.Shader(this.app.graphicsDevice, shaderDefinition);
const material = new pc.Material();
material.setShader(shader);
```

The name you pass to `find()` must match the name shown in the Assets Panel. Note that a vertex shader (`vshader`) and a fragment shader (`fshader`) are always needed together as a pair.

## Related documentation

- [Material](/user-manual/assets/types/material) — Controls surface appearance without code.
- [Graphics](/user-manual/graphics)
