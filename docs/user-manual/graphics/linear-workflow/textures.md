---
title: 텍스처 (Textures)
---

### sRGB 텍스처 처리

디퓨즈, 이미시브, 스펙큘러, 쉰과 같은 색상을 나타내는 텍스처는 색상 정확도를 유지하고 밴딩을 줄이기 위해 일반적으로 sRGB 공간에 저장됩니다. 엔진에서 사용될 때 이러한 텍스처는 올바른 조명 계산을 위해 sRGB에서 선형 공간으로 자동 변환됩니다. 이 변환은 텍스처가 sRGB 형식으로 생성된 경우 추가 비용 없이 GPU에서 효율적으로 수행됩니다.

#### **텍스처에 대한 sRGB 인코딩 지정**

sRGB 공간에서 색상을 나타내는 텍스처 에셋을 로드할 때 sRGB 인코딩을 지정하는 것이 중요합니다. 다음 예제는 sRGB 인코딩으로 에셋을 생성하는 방법을 보여줍니다:

```javascript
new pc.Asset(
    'color',
    'texture',
    { url: 'heart.png' },
    { encoding: 'srgb' }
);
```

#### **에디터에서 sRGB 텍스처 표시**

에디터에서 작업할 때 색상 텍스처가 inspector 패널에서 **sRGB**로 표시되도록 하세요. 이는 엔진이 텍스처를 sRGB로 올바르게 해석하고 선형 공간으로 필요한 변환을 적용하도록 보장합니다.

![sRGB](/img/user-manual/graphics/linear-workflow/srgb-editor.png)

#### **sRGB 절차적 텍스처 / 렌더 타겟**

색상을 나타내고 셰이더에서 읽힐 절차적 텍스처나 텍스처로 렌더링할 때 자동 변환을 활성화하기 위해 **sRGB 형식**으로 생성하는 것이 중요합니다. 이 텍스처로 렌더링할 때 선형 값은 밴딩을 방지하기 위해 자동으로 감마 공간으로 변환됩니다. 나중에 텍스처가 색상 텍스처로 사용될 때 픽셀이 자동으로 선형 공간으로 다시 변환됩니다.

다음 예제는 sRGB 렌더 타겟 텍스처를 생성하는 방법을 보여줍니다:

```javascript
const texture = new pc.Texture(app.graphicsDevice, {
    name: 'color-texture',
    width: 512,
    height: 512,
    format: pc.PIXELFORMAT_SRGBA8
});
```
