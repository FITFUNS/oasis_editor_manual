---
title: Shader
---

Shader assets contain GLSL code. You can create a new shader asset by clicking "New Shader" in the editor's Assets Panel or by uploading a file with ```.vert```, ```.frag``` or ```.glsl``` extensions.

To edit a shader asset, right-click in the editor and select "Edit". Here's an example of using shader assets to create a custom material:

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
