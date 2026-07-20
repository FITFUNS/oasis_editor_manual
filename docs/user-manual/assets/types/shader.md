---
title: 셰이더 (Shader)
---

셰이더 에셋은 **GLSL 코드**를 담고 있습니다. 에디터의 에셋 패널에서 **+ › Shader**를 선택하거나, `.vert` · `.frag` · `.glsl` 확장자를 가진 파일을 업로드해 만들 수 있습니다.

셰이더 에셋을 편집하려면 에디터에서 **마우스 오른쪽 클릭** 후 **편집(Edit)**을 선택하십시오.

:::warning 난이도가 높은 기능입니다

셰이더는 GPU에서 직접 실행되는 코드로, 그래픽 파이프라인에 대한 이해가 필요합니다. 물체의 색이나 질감을 바꾸는 정도라면 [재질](/user-manual/assets/types/material)의 속성만으로 충분한 경우가 대부분입니다. 재질로 표현할 수 없는 효과가 필요할 때 셰이더를 고려하십시오.

:::

## 사용자 정의 재질 만들기

다음은 셰이더 에셋을 사용해 사용자 정의 재질을 만드는 예제입니다.

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

`find()`에 넘기는 이름은 에셋 패널에 보이는 이름과 같아야 합니다. 정점 셰이더(`vshader`)와 프래그먼트 셰이더(`fshader`) 두 개가 한 쌍으로 필요하다는 점에 유의하십시오.

## 관련 문서

- [재질 (Material)](/user-manual/assets/types/material) — 코드 없이 표면 표현을 조절합니다.
- [그래픽스 (Graphics)](/user-manual/graphics)
