---
id: image-generation
title: 이미지 생성
sidebar_label: 이미지 생성
---

# 이미지 생성

OasisW의 AI 이미지 생성 기능을 활용하여 프로젝트에 필요한 이미지 생성 과정을 단계별로 학습합니다.

## 1. 인터페이스

**AI Image Generation 버튼**을 클릭합니다. 

![Image](/img/usage-guide/3_8.png)

![Image](/img/usage-guide/3_8_1.png)

### Generation Mode
![Image](/img/usage-guide/3_8_2.png)
* **Text to Image** : 프롬프트에 텍스트를 입력하여 이미지를 생성합니다.
* **Image to Image** : 기존 이미지를 기반으로 새로운 이미지를 생성합니다.
* **Remove Background** : 이미지에서 배경을 제거합니다.
### Prompt
* **Show Examples** : 여러 예제 프롬프트를 클릭하여 사용할 수 있습니다.
![Image](/img/usage-guide/3_8_3.png)
### Generation Result
생성된 이미지를 확인할 수 있습니다.
### Generated Images
* **Project** : 해당 프로젝트에서 생성한 이미지를 확인할 수 있습니다.
* **Org** : 현재 조직에서 생성된 이미지를 확인할 수 있습니다.
* **Public** : 공개설정이 되어 있는 이미지를 확인할 수 있습니다.

![Image](/img/usage-guide/3_8_5.png)
* **1. Edit Asset Properties** : 에셋 설정을 수정할 수 있습니다.
![Image](/img/usage-guide/3_8_6.png)
* **2. Add to Assets** : 텍스처 에셋으로 추가합니다.

## 2. Text to Image

1. 프롬프트 창에 원하는 명령어를 입력합니다.
   - **Show Examples**의 예제에서 선택하여 이미지를 생성할 수 있습니다.
2. **Generate 버튼**을 클릭하여 이미지를 생성합니다.

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/usage-guide/3_8_4.png" alt="Image" style={{maxWidth: '50%'}} />
  <img src="/img/usage-guide/3_8_9.png" alt="Image" style={{maxWidth: '50%'}} />
</div>
<br />
3. **Add to Assets 버튼**을 클릭하여 텍스처 에셋으로 추가합니다.

![Image](/img/usage-guide/3_8_10.png)
![Image](/img/usage-guide/3_8_11.png)

## 3. Image to Image

1. **Inpainting Image**에 원하는 이미지를 추가합니다.

![Image](/img/usage-guide/3_8_14.png)

2. **+ 아이콘**을 클릭하고, 원본 이미지에 추가할 객체(선글라스, 꽃, 모자 등)의 이미지를 추가합니다.
<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/usage-guide/3_8_17.png" alt="Image" style={{maxWidth: '50%'}} />
  <img src="/img/usage-guide/3_8_18.png" alt="Image" style={{maxWidth: '50%'}} />
</div>
<br />

* **Image Controls**에서 이미지를 변경하거나 제거할 수 있습니다.

![Image](/img/usage-guide/3_8_16.png)

3. **Drawing Tools**를 사용하여 원본 이미지에 이미지를 수정할 위치를 표시하고 프롬프트를 입력한 후 **Generate 버튼**을 클릭하여 이미지를 생성합니다.

![Image](/img/usage-guide/3_8_19.png)

## 4. Remove Background

:::tip
에셋 뷰에서 이미지 더블클릭 시 **Remove Background**로 바로 이동이 가능합니다.
:::

**Background Removal**에 원하는 이미지를 추가합니다.

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/usage-guide/3_8_20.png" alt="Image" style={{maxWidth: '50%'}} />
  <img src="/img/usage-guide/3_8_21.png" alt="Image" style={{maxWidth: '50%'}} />
</div>
<br />

**Remove Background 버튼**을 클릭하여 이미지를 생성합니다.

![Image](/img/usage-guide/3_8_22.png)
