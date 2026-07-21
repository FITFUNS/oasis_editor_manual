---
title: 텍스처 (Textures)
---

### sRGB 텍스처 처리

디퓨즈, 이미시브, 스펙큘러, 쉰처럼 색을 표현하는 텍스처는 보통 sRGB 공간에 저장합니다. 그래야 색이 정확하게 보이고 밴딩(색 경계가 계단처럼 보이는 현상)도 줄어들기 때문입니다. 이런 텍스처를 엔진이 쓸 때는 올바른 조명 계산을 위해 sRGB에서 선형 공간으로 자동으로 바꿉니다. 텍스처를 sRGB 형식으로 만들어 두면 이 변환이 GPU에서 추가 비용 없이 효율적으로 이뤄집니다.

#### **텍스처에 대한 sRGB 인코딩 지정**

sRGB 공간의 색을 담은 텍스처 에셋을 불러올 때는 sRGB 인코딩을 지정하는 것이 중요합니다. 다음 예제는 sRGB 인코딩으로 에셋을 만드는 방법을 보여줍니다:

```javascript
new pc.Asset(
    'color',
    'texture',
    { url: 'heart.png' },
    { encoding: 'srgb' }
);
```

#### **에디터에서 sRGB 텍스처 표시**

에디터에서 작업할 때는 색상 텍스처가 inspector 패널에 **sRGB**로 표시되는지 확인하세요. 이렇게 해야 엔진이 텍스처를 sRGB로 제대로 해석하고 선형 공간으로 필요한 변환을 적용합니다.

![sRGB](/img/user-manual/graphics/linear-workflow/srgb-editor.png)

#### **sRGB 절차적 텍스처 / 렌더 타겟**

색을 표현하면서 셰이더에서 읽을 절차적 텍스처를 만들거나 텍스처에 직접 렌더링할 때는, 자동 변환이 되도록 **sRGB 형식**으로 만드는 것이 중요합니다. 이 텍스처에 렌더링하면 선형 값이 밴딩을 막기 위해 자동으로 감마 공간으로 변환됩니다. 그리고 나중에 이 텍스처를 색상 텍스처로 쓸 때는 픽셀이 자동으로 다시 선형 공간으로 돌아옵니다.

다음 예제는 sRGB 렌더 타겟 텍스처를 만드는 방법을 보여줍니다:

```javascript
const texture = new pc.Texture(app.graphicsDevice, {
    name: 'color-texture',
    width: 512,
    height: 512,
    format: pc.PIXELFORMAT_SRGBA8
});
```
