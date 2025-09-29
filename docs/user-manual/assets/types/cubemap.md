---
title: 큐브맵 (Cubemap)
---

큐브맵은 특별한 유형의 텍스처 에셋입니다. 각 텍스처가 큐브의 면을 나타내는 6개의 텍스처 에셋으로 구성됩니다. 일반적으로 두 가지 용도가 있습니다:

1. 큐브맵은 씬의 스카이박스를 정의할 수 있습니다. 스카이박스는 언덕, 산, 하늘 등 씬의 원거리 시각적 이미지를 포함합니다.
2. 큐브맵은 모든 재질에 반사를 추가할 수 있습니다. 씬에 있는 반짝이는 크롬 볼 베어링을 상상해보세요. 볼은 주변 씬을 반사합니다. 열린 환경의 경우 일반적으로 씬의 스카이박스 큐브맵을 반사 객체의 재질에 큐브맵으로 설정합니다.

<div className="iframe-container">
    <iframe src="https://playcanv.as/b/xp7v1oFB/" title="큐브맵" allow="camera; microphone; xr-spatial-tracking; fullscreen" allowfullscreen></iframe>
</div>

## 큐브맵 텍스처 가져오기

큐브맵은 6개의 텍스처 에셋을 입력으로 필요로 하는 에셋입니다. 따라서 새 큐브맵 에셋을 완전히 구성하려면 먼저 프로젝트에 6개의 이미지를 가져와야 합니다. 이를 위해 파일 시스템에서 6개의 이미지를 에셋 패널로 드래그하거나(또는 에셋 패널의 업로드 옵션을 선택) 하세요. 업로드되고 처리되면 이미지가 에셋 패널에 나타나며 이제 큐브맵 에셋에 할당할 준비가 됩니다.

## 큐브맵 생성

OasisW 에디터 인터페이스에서 직접 새 큐브맵 에셋을 만들 수 있습니다. 에셋 패널의 에셋 생성 메뉴를 사용하세요.

![큐브맵 생성](/img/user-manual/assets/cubemaps/cubemap-create.png)

이렇게 하면 새 큐브맵 에셋이 생성되고 화면 오른쪽에 큐브맵 에디터가 열립니다.

## 큐브맵 선택

편집할 큐브맵을 선택하려면 에셋 패널에서 선택하세요. 가장 쉬운 방법은 선택 옵션을 좁히기 위해 큐브맵 필터를 선택하는 것입니다. 큐브맵은 십자 모양 썸네일로 식별됩니다:

![큐브맵 썸네일](/img/user-manual/assets/cubemaps/cubemap-thumbnails.png)

큐브맵이 선택되면 에디터 오른쪽의 검사기 패널에 로드됩니다.

## 큐브맵 속성

큐브맵을 선택하면 속성을 편집할 수 있습니다.

![큐브맵 속성](/img/user-manual/assets/cubemaps/cubemap-properties.png)

### Filtering

이 설정은 큐브맵의 픽셀이 확대될 때 어떻게 보간되는지를 결정합니다. 확대는 텍셀 대 화면 픽셀 비율이 1보다 작을 때입니다. Linear가 시각적으로 가장 좋은 결과를 제공합니다.

### Anisotropy

이방성은 카메라의 뷰 벡터가 텍스처된 표면의 평면과 더 밀접하게 정렬될 때 텍스처 샘플링의 품질을 제어할 수 있는 1과 16 사이의 값입니다.

## 큐브맵에 텍스처 할당하기

![큐브맵 미리보기](/img/user-manual/assets/cubemaps/cubemap-preview.png)

큐브맵 미리보기 패널은 큐브맵의 6개 면을 십자 모양으로 평면화하여 표시합니다. 펼쳐져서 평평하게 놓인 판지 상자를 상상해보세요. 큐브맵을 구성하려면 에셋 패널에서 텍스처 에셋을 미리보기 패널의 면 슬롯으로 드래그하기만 하면 됩니다. 큐브맵 면 슬롯을 선택한 다음 에셋 패널에서 텍스처 에셋을 선택할 수도 있습니다.

큐브맵 면은 다음 조건을 만족해야 합니다:

- 정사각형 (너비와 높이가 같은 해상도)
- 2의 거듭제곱 차원 (1x1, 2x2, 4x4, 8x8, 16x16, 32x32 등)
- 모든 면이 같은 해상도여야 함

도움을 위해 에디터는 텍스처를 면에 지능적으로 자동 할당하는 방법을 파악하려고 시도합니다. 첫 번째 면을 슬롯으로 드래그할 때 큐브맵 면에 대한 일반적으로 사용되는 명명 규칙을 일치시키려고 시도하여 이를 수행합니다:

- negx, posx, negy, posy, negz, posz
- left, right, top|up, bottom|down, front|forward, back|backward
- 0-5|1-6

일치하는 텍스처 세트의 예시:

- face_posx.jpg
- face_negx.jpg
- face_posy.jpg
- face_negy.jpg
- face_posz.jpg
- face_negz.jpg

## 이미지 기반 조명

이 기술은 물리 기반 주변광과 재질의 반사를 시뮬레이션하기 위해 큐브맵과 같은 환경 맵을 사용할 수 있게 합니다. [자세히 보기][6]에서 작동 방식과 IBL용 큐브맵 작성 방법을 확인하세요.

## 재질에 큐브맵 할당하기

기본 Phong 및 Physical 재질 유형 모두 반사 속성을 가집니다. 환경 속성 섹션을 확장하면 다음을 볼 수 있습니다:

![큐브맵 재질](/img/user-manual/assets/cubemaps/cubemap-material.png)

빈 슬롯을 클릭하여 큐브맵을 선택하거나 에셋 패널에서 큐브맵 에셋을 큐브맵 슬롯으로 드래그 앤 드롭할 수 있습니다.

:::note

Physical 재질은 할당되고 사전 필터링된 경우 씬의 스카이박스를 기본 환경 맵으로 사용합니다.

:::

## Equirectangular 또는 Octahedral HDRI를 큐브맵으로 변환하기

환경 텍스처는 종종 equirectangular 또는 Octahedral 형식([Poly Haven][7] 예시)이며 OasisW에서 사용하기 전에 큐브맵으로 변환해야 합니다.

<!-- This can be done via [OasisW Texture Tool][8], available in the browser.

1. Download the HDR version of environment texture and press 'Add Files' button in OasisW Texture Tool to load the file.
2. Select the loaded texture on the left.
3. Under 'Reproject' section, change the 'source' to the format of texture.
4. Change 'target' to 'cube'.
5. Change 'encoding' to the desired format:
    - 'rgbe' for exporting to 'HDR'
    - 'rgbm' for exporting to 'PNG'
6. Set the width to the desired size per face texture. 512 is a good balance between quality and file size.
7. Press 'Reproject' button to do the conversion to a cubemap.
8. Press 'Export to PNG' or 'Export to HDR' to download the 6 individual cubemap face textures that are ready to be uploaded to OasisW.

![OasisW Texture Tool](/img/user-manual/assets/cubemaps/playcanvas-texture-tool-convert.png) -->

이 변환을 수행할 수 있는 다른 도구들:

- Mateusz Wisniowski의 [HDRI-to-CubeMap 도구][9] (브라우저)
- [cmftStudio][10] (데스크톱) 및 [가이드][11]

[6]: /user-manual/graphics/physical-rendering/image-based-lighting/
[7]: https://polyhaven.com/hdris
<!-- [8]: https://playcanvas.com/texture-tool -->
[9]: https://matheowis.github.io/HDRI-to-CubeMap/
[10]: https://github.com/dariomanesku/cmftStudio
[11]: https://jamie-white.com/webgl/equirectangular-hdr-image-to-face-list/
