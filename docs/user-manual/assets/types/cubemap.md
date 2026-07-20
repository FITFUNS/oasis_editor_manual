---
title: 큐브맵 (Cubemap)
---

큐브맵은 **특별한 유형의 텍스처 에셋**입니다. 큐브의 여섯 면을 각각 담당하는 **6개의 텍스처 에셋**으로 구성됩니다. 일반적으로 두 가지 용도로 씁니다.

1. **스카이박스** — 씬의 배경이 되는 먼 풍경입니다. 언덕, 산, 하늘 같은 원거리 이미지를 담습니다.
2. **반사** — 어떤 재질에든 반사를 더할 수 있습니다. 씬에 놓인 반짝이는 크롬 볼 베어링을 떠올려 보십시오. 그 공은 주변 풍경을 비춥니다. 열린 환경이라면 보통 씬의 스카이박스 큐브맵을 그대로 반사용 큐브맵으로 지정합니다.

<div className="iframe-container">
    <iframe src="https://playcanv.as/b/xp7v1oFB/" title="큐브맵" allow="camera; microphone; xr-spatial-tracking; fullscreen" allowfullscreen></iframe>
</div>

## 큐브맵 텍스처 가져오기

큐브맵은 **6개의 텍스처 에셋을 입력으로 필요로 하는** 에셋입니다. 따라서 큐브맵을 완전히 구성하려면 먼저 이미지 6장을 프로젝트에 가져와야 합니다. 파일 탐색기에서 이미지 6장을 에셋 패널로 끌어다 놓거나, 에셋 패널의 업로드 옵션을 사용하십시오. 업로드와 처리가 끝나면 에셋 패널에 나타나고, 이제 큐브맵에 할당할 준비가 된 것입니다.

## 큐브맵 생성

에디터에서 직접 새 큐브맵 에셋을 만들 수 있습니다. 에셋 패널의 **+** 버튼을 누르고 **CubeMap**을 선택하십시오.

![큐브맵 생성](/img/user-manual/assets/cubemaps/cubemap-create.png)

그러면 새 큐브맵 에셋이 만들어지고 화면 오른쪽에 큐브맵 에디터가 열립니다.

## 큐브맵 선택

편집할 큐브맵을 고르려면 에셋 패널에서 선택하십시오. 가장 쉬운 방법은 타입 필터에서 `Cubemap`을 골라 선택 범위를 좁히는 것입니다. 큐브맵은 **십자 모양 썸네일**로 알아볼 수 있습니다.

![큐브맵 썸네일](/img/user-manual/assets/cubemaps/cubemap-thumbnails.png)

큐브맵을 선택하면 오른쪽 인스팩터 패널에 불러옵니다.

## 큐브맵 속성

![큐브맵 속성](/img/user-manual/assets/cubemaps/cubemap-properties.png)

### Filtering

큐브맵의 픽셀이 **확대될 때** 어떻게 보간할지 정합니다. 확대란 텍셀 대 화면 픽셀 비율이 1보다 작을 때를 말합니다. `Linear`가 시각적으로 가장 좋은 결과를 냅니다.

### Anisotropy

이방성은 **1과 16 사이의 값**으로, 카메라의 시선 방향이 텍스처가 입혀진 표면의 평면과 나란해질수록 떨어지는 샘플링 품질을 조절합니다.

## 큐브맵에 텍스처 할당하기

![큐브맵 미리보기](/img/user-manual/assets/cubemaps/cubemap-preview.png)

큐브맵 미리보기 패널은 여섯 면을 **십자 모양으로 펼쳐** 보여 줍니다. 접힌 부분을 펴서 평평하게 눕힌 판지 상자를 떠올리면 이해하기 쉽습니다. 큐브맵을 구성하려면 에셋 패널의 텍스처 에셋을 미리보기 패널의 면 슬롯으로 끌어다 놓기만 하면 됩니다. 면 슬롯을 먼저 선택한 뒤 에셋 패널에서 텍스처를 고르는 방법도 있습니다.

큐브맵 면은 다음 조건을 만족해야 합니다.

- **정사각형** — 너비와 높이가 같아야 합니다.
- **2의 거듭제곱 크기** — 1×1, 2×2, 4×4, 8×8, 16×16, 32×32 …
- **여섯 면 모두 같은 해상도**여야 합니다.

에디터는 텍스처를 면에 **알아서 배치하려고 시도**합니다. 첫 번째 면을 슬롯에 끌어다 놓는 순간, 큐브맵 면에 흔히 쓰이는 이름 규칙과 맞춰 보는 방식입니다.

- `negx`, `posx`, `negy`, `posy`, `negz`, `posz`
- `left`, `right`, `top`|`up`, `bottom`|`down`, `front`|`forward`, `back`|`backward`
- `0-5` | `1-6`

이름이 맞아떨어지는 텍스처 세트의 예시입니다.

- `face_posx.jpg`
- `face_negx.jpg`
- `face_posy.jpg`
- `face_negy.jpg`
- `face_posz.jpg`
- `face_negz.jpg`

:::tip 팁

내려받은 스카이박스 이미지의 이름이 이 규칙과 다르다면, **미리 파일 이름을 바꿔서 올리는 편**이 훨씬 빠릅니다. 한 장만 끌어다 놓으면 나머지 다섯 장이 알아서 채워집니다.

:::

## 이미지 기반 조명

이 기법은 큐브맵 같은 환경 맵을 사용해 **물리 기반 주변광과 재질의 반사**를 흉내 냅니다. 동작 방식과 IBL용 큐브맵을 만드는 방법은 [자세히 보기](/user-manual/graphics/physical-rendering/image-based-lighting)에서 확인하십시오.

## 재질에 큐브맵 할당하기

기본 Phong 재질과 Physical 재질 모두 반사 속성을 가지고 있습니다. **환경(Environment)** 속성 섹션을 펼치면 큐브맵 슬롯을 볼 수 있습니다.

![재질의 큐브맵 슬롯](/img/user-manual/assets/cubemaps/cubemap-material.png)

빈 슬롯을 클릭해 큐브맵을 고르거나, 에셋 패널의 큐브맵 에셋을 슬롯으로 끌어다 놓을 수 있습니다.

:::note 노트

Physical 재질은 스카이박스가 할당되어 있고 사전 필터링이 되어 있으면, **씬의 스카이박스를 기본 환경 맵으로 사용**합니다.

:::

## Equirectangular · Octahedral HDRI를 큐브맵으로 변환하기

환경 텍스처는 [Poly Haven](https://polyhaven.com/hdris) 같은 곳에서 흔히 equirectangular 또는 Octahedral 형식으로 배포됩니다. OasisW에서 쓰려면 **먼저 큐브맵으로 변환해야 합니다.**

- Mateusz Wisniowski의 [HDRI-to-CubeMap 도구](https://matheowis.github.io/HDRI-to-CubeMap/) (브라우저에서 바로 사용)
- [cmftStudio](https://github.com/dariomanesku/cmftStudio) (데스크톱) 및 [가이드](https://jamie-white.com/webgl/equirectangular-hdr-image-to-face-list/)

## 관련 문서

- [텍스처 (Texture)](/user-manual/assets/types/texture) — 큐브맵의 여섯 면을 이루는 에셋입니다.
- [재질 (Material)](/user-manual/assets/types/material) — 큐브맵을 반사에 사용합니다.
- [절차적 생성 도구](/user-manual/assets/finding) — 스카이박스를 직접 만들 수 있습니다.
