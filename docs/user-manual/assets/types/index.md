---
title: 에셋 유형
---

에셋 패널은 프로젝트의 에셋을 관리합니다. 에셋에는 여러 가지 유형이 있고, 유형에 따라 쓰임새와 인스팩터에 나오는 항목이 달라집니다. 유형은 **업로드한 파일의 확장자를 보고 자동으로 정해지므로** 직접 고를 필요는 없습니다.

## 유형 목록

**가져오기 소스**는 "이 확장자를 올리면 이 유형이 만들어진다"는 뜻이고, **리소스 확장자**는 파이프라인을 거친 뒤 실제로 저장되는 파일의 확장자입니다. 둘이 다른 경우가 [Source 에셋과 Target 에셋](/user-manual/assets)이 갈라지는 지점입니다.

| 유형 | 가져오기 소스 | 리소스 확장자 | 설명 |
|---|---|---|---|
| [`animation`](/user-manual/assets/types/animation) | `.glb` `.fbx` | `.glb` | 애니메이션 키프레임 데이터 |
| [`audio`](/user-manual/assets/types/audio) | `.mp3` `.wav` `.ogg` | `.mp3` `.wav` `.ogg` | 사운드 데이터 |
| `binary` | `.bin` | `.bin` | 바이너리 데이터 |
| [`css`](/user-manual/assets/types/css) | `.css` | `.css` | HTML용 스타일시트 |
| [`cubemap`](/user-manual/assets/types/cubemap) | `.png` `.jpg` `.webp` `.avif` | `.png` `.jpg` `.webp` `.avif` | 환경 조명 데이터 |
| [`font`](/user-manual/assets/types/font) | `.ttf` `.woff` | `.json` `.png` | 텍스트 렌더링용 폰트 데이터 |
| [`html`](/user-manual/assets/types/html) | `.html` | `.html` | HTML 문서 |
| [`json`](/user-manual/assets/types/json) | `.json` | `.json` | JSON 문서 |
| [`material`](/user-manual/assets/types/material) | `.glb` `.fbx` | 없음 | 3D 모델용 재질 정의 |
| [`render`](/user-manual/assets/types/render) | `.glb` `.fbx` | `.glb` | 3D 메시 데이터 |
| [`script`](/user-manual/scripting) | `.js` | `.js` | 스크립트 |
| [`shader`](/user-manual/assets/types/shader) | `.glsl` `.vert` `.frag` | `.glsl` `.vert` `.frag` | 렌더링용 커스텀 셰이더 |
| [`sprite`](/user-manual/assets/types/sprite) | 에디터에서 생성 | 없음 | UI 또는 텍스처용 2D 이미지 |
| [`template`](/user-manual/assets/types/template) | `.glb` | 없음 | 엔티티 계층 구조용 템플릿 |
| [`text`](/user-manual/assets/types/text) | `.txt` | `.txt` | 텍스트 문서 |
| [`texture-atlas`](/user-manual/assets/types/texture-atlas) | `.png` `.jpg` `.webp` `.avif` | `.png` `.jpg` `.webp` `.avif` | 스프라이트 시트 이미지 데이터 |
| [`texture`](/user-manual/assets/types/texture) | `.png` `.jpg` `.webp` `.avif` | `.png` `.jpg` `.webp` `.avif` | 3D 모델 또는 UI용 이미지 데이터 |
| [`wasm`](/user-manual/assets/types/wasm) | `.wasm` | `.wasm` | WebAssembly 모듈 |

:::note 리소스 확장자가 '없음'인 유형

`material`, `sprite`, `template`은 별도 파일로 저장되지 않고 **프로젝트 데이터 안에 정의로만 존재**합니다. 그래서 에셋 패널에서 크기(Size)가 비어 있는 것으로 보입니다.

:::

## 에디터에서 실제로 보이는 목록

에셋 패널의 `All` 드롭다운을 열면 이 프로젝트에서 쓸 수 있는 유형이 모두 나열됩니다. 실제 에디터에서 확인한 목록과 위의 표를 비교하면 세 가지 차이가 눈에 띕니다.

- **`(source)`가 붙은 항목** — `Font (source)`, `Model (source)`, `Texture (source)`, `Texture Atlas (source)`는 업로드한 원본 파일, 즉 **Source 에셋**을 가리킵니다. 표에는 유형별로 한 줄씩만 적혀 있지만 에디터에서는 원본과 결과물을 따로 걸러 볼 수 있습니다.
- **`Model`과 `Container`** — 표에는 없지만 필터에는 있습니다. GLB·FBX를 올렸을 때 만들어지는 상위 묶음 에셋으로, 그 안에 템플릿·렌더·재질·텍스처가 딸려 나옵니다. 자세한 내용은 [3D 모델 가져오기](/user-manual/assets/models)를 참고하십시오.
- **`Folder`** — 엄밀히 말하면 콘텐츠가 아니라 정리용 항목이지만, 에셋 목록에 함께 나오므로 필터에도 포함되어 있습니다.

## 직접 만들 수 있는 유형과 업로드로만 생기는 유형

에셋 패널의 **+** 버튼(또는 빈 공간에서 마우스 오른쪽 클릭 후 **New Asset**)으로 *빈 에셋*을 바로 만들 수 있는 유형은 정해져 있습니다.

| 구분 | 항목 |
|---|---|
| 파일 올리기 | `Upload Files` · `Upload Folder` |
| 정리용 | `Folder` |
| 새로 만들 수 있는 에셋 | `CSS` · `CubeMap` · `HTML` · `JSON` · `Material` · `Script` · `Shader` · `Text` · `Anim State Graph` · `Font` |

여기에 없는 `texture`, `audio`, `render`, `template`, `animation`, `wasm` 등은 **파일을 업로드해야만** 만들어집니다. 예를 들어 텍스처를 쓰려면 PNG나 JPG 파일을 올려야 하고, 템플릿을 얻으려면 GLB를 올리거나 씬의 엔티티를 템플릿으로 저장해야 합니다.

:::tip 참고

**+** 버튼을 누르면 `New Asset` 단계 없이 곧바로 종류 목록이 열립니다. 반면 빈 공간에서 **마우스 오른쪽 클릭**하면 `New Asset › …` 처럼 한 단계 접혀 있습니다. 결과는 같습니다.

:::

:::warning 확장자를 확인하십시오

지원하지 않는 확장자를 올리면 유형이 정해지지 않아 에셋이 만들어지지 않거나 `binary`로 처리됩니다. 3D 모델은 `.glb`, 이미지는 `.png`/`.jpg`, 소리는 `.mp3`/`.ogg`를 쓰는 것이 가장 안전합니다.

:::

## 유형별 상세 문서

각 유형의 속성과 사용법은 아래 문서에서 자세히 다룹니다.

| 문서 | 한 줄 요약 |
|---|---|
| [애니메이션 (Animation)](/user-manual/assets/types/animation) | 3D 모델의 동작 하나를 담습니다. |
| [오디오 (Audio)](/user-manual/assets/types/audio) | 사운드 컴포넌트로 재생하는 소리 파일입니다. |
| [CSS](/user-manual/assets/types/css) | 겹쳐 놓는 HTML UI의 모양을 정합니다. |
| [큐브맵 (Cubemap)](/user-manual/assets/types/cubemap) | 스카이박스와 반사에 쓰는 여섯 면 텍스처입니다. |
| [폰트 (Font)](/user-manual/assets/types/font) | 텍스트를 그리기 위한 문자 이미지와 데이터입니다. |
| [HTML](/user-manual/assets/types/html) | 게임 위에 겹쳐 놓는 마크업입니다. |
| [JSON](/user-manual/assets/types/json) | 구조화된 설정·레벨 데이터를 담습니다. |
| [재질 (Material)](/user-manual/assets/types/material) | 표면의 색·광택·거칠기를 정의합니다. |
| [렌더 (Render)](/user-manual/assets/types/render) | 3D 메시 데이터입니다. |
| [셰이더 (Shader)](/user-manual/assets/types/shader) | GPU에서 실행되는 GLSL 코드입니다. |
| [스프라이트 (Sprite)](/user-manual/assets/types/sprite) | 아틀라스에서 잘라 쓰는 2D 그래픽입니다. |
| [템플릿 (Template)](/user-manual/assets/types/template) | 재사용 가능한 엔티티 계층 구조입니다. |
| [텍스트 (Text)](/user-manual/assets/types/text) | 일반 텍스트 데이터입니다. |
| [텍스처 (Texture)](/user-manual/assets/types/texture) | 재질에 입히는 이미지입니다. |
| [텍스처 아틀라스](/user-manual/assets/types/texture-atlas) | 여러 그림을 한 장에 모으고 프레임을 정의합니다. |
| [WASM 모듈](/user-manual/assets/types/wasm) | 웹용으로 컴파일된 실행 코드입니다. |

`binary`와 `script`에는 별도 유형 문서가 없습니다. 스크립트는 [스크립트 추가하기](/user-manual/scripting/fundamentals/getting-started)에서 다룹니다.

## 다음으로

- [3D 모델 가져오기](/user-manual/assets/models) — 모델 파일 하나가 여러 에셋으로 나뉘는 과정을 봅니다.
- [사전 로드 및 스트리밍](/user-manual/assets/preloading-and-streaming) — 유형별로 로딩 시점을 조절합니다.
