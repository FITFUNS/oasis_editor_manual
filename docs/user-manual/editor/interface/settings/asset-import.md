---
title: 에셋 작업 설정
sidebar_label: 에셋 작업
---

가져온 에셋의 기본 동작 방식을 제어합니다.

:::note

이 설정들은 본인에게만 적용되며, 프로젝트 전체에 대해 전역적으로 사용됩니다.

:::

`ASSET TASKS` 섹션으로 이동한 뒤 패널을 확장하세요:

![Asset Import Settings](/img/user-manual/editor/interface/settings/asset-import.webp)

아래는 사용 가능한 설정 항목에 대한 설명입니다.

<!-- ## General

| Setting | Description |
| --- | --- |
| **Search related assets** | If enabled, importing a source asset updates related target assets wherever they are located. If disabled, assets are updated only when in the same folder; otherwise, new assets are created. |
| **Assets default to preload** | Creates new assets with the preload option enabled. Script assets are always created with preload enabled. | -->

## 에셋 작업

| 설정 | 설명 |
| --- | --- |
| **Create Atlases** | 활성화하면 텍스처를 가져올 때 Texture와 Texture Atlas 두 가지 에셋이 모두 생성됩니다. |
| **Create FBX Folder** | FBX 파일을 가지고 올 때, 가져온 FBX 콘텐츠를 저장하기 위해 현재 디렉터리에 새 폴더를 생성합니다. |

<!-- ## Model Import

| Setting | Description |
| --- | --- |
| **Preserve material mappings** | If enabled, when reimporting an existing source model, the Editor attempts to preserve existing user-defined material mappings. |
| **Overwrite Models** | When a model is imported, overwrites any previously imported model asset. |
| **Overwrite Animations** | When a model is imported, overwrites previously imported animation assets. |
| **Overwrite Materials** | When a model is imported, overwrites previously imported material assets. |
| **Overwrite Textures** | When a model is imported, overwrites previously imported texture assets. |
| **Convert to GLB** | Create model assets in GLB format. |
| **Import Hierarchy** | Generates a template asset when importing 3D assets (FBX, etc.). The template asset contains the full entity hierarchy from the imported file. |
| **Mesh Compression** | Specify the mesh compression to apply to imported models. |
| **Unwrap UV** | Generates a set of unwrapped UV coordinates. |
| **Texels Per Meter** | Specifies the number of texels per meter when UV unwrapping is enabled. Default: 16. |
| **Import Morph Normals** | Imports morph target normals when importing a model. Disable this if morph target normals look incorrect. |

## Animation Import

| Setting | Description |
| --- | --- |
| **Naming Strategy** | Choose the naming strategy for imported animations:<ul><li><strong>Use Take Name</strong>: Name the animation after the take name assigned in the FBX file</li><li><strong>Use FBX Filename</strong>: Name the animation after the FBX filename</li></ul> |
| **Sample Rate** | The rate at which to sample animation curves (samples per second). Specify 0 to disable sampling and use input keys instead. |
| **Curve Tolerance** | The tolerance used when optimizing linear animation curve segments. Specify 0 to disable curve optimization. |
| **Cubic Curves** | Output cubic curves when they are encountered. Disable to convert all curves to linear segments. | -->
