---
title: 셰이더 (Shader)
---

셰이더 에셋은 GLSL 코드를 포함합니다. 에디터의 에셋 패널에서 "새 셰이더"를 클릭하거나 ```.vert```, ```.frag``` 또는 ```.glsl``` 확장자를 가진 파일을 업로드하여 새로운 셰이더 에셋을 생성할 수 있습니다.

셰이더 에셋을 편집하려면 에디터에서 우클릭하고 "편집"을 선택하세요. 다음은 셰이더 에셋을 사용하여 사용자 정의 재질을 생성하는 예제입니다.

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
