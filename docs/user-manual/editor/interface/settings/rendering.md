---
title: 렌더링 설정
sidebar_label: 렌더링
---

화면이 그려지는 방식, 즉 조명·해상도를 비롯한 렌더링 관련 기능을 정하는 설정입니다.

:::note

이 설정들은 프로젝트에서 현재 활성화된 브랜치의 모든 사용자에게 적용됩니다.

:::

`RENDERING` 섹션으로 이동한 뒤 패널을 확장하세요:

![Rendering Settings](/img/user-manual/editor/interface/settings/rendering.webp)

사용할 수 있는 설정 항목은 다음과 같습니다.

## 환경

| 설정               | 설명                                         |
| ----------------- | -------------------------------------------- |
| **Ambient Color** | 씬 전체에 은은하게 깔리는 기본 조명 색상입니다(sRGB 색 공간).   |
| **Skybox**        | 3D 씬 뒤에 배경으로 깔리는 큐브맵 에셋입니다. 미리 처리(프리필터링)해 두면 물리 기반 머티리얼의 기본 환경 반사에도 함께 쓰입니다.   |
| **Type**          | 스카이박스 큐브맵을 어떤 방식으로 펼쳐서 그릴지 고릅니다:<ul><li><strong>Infinite</strong>: 무한 원점에 렌더링</li><li><strong>Box</strong>: 박스 메시로 매핑</li><li><strong>Dome</strong>: 반구형 돔에 매핑</li></ul> |
| **Intensity**     | 노출에 맞춰 스카이박스의 밝기를 조절하는 값입니다.          |
| **Rotation**      | 스카이박스를 얼마나 돌려서 배치할지 정하는 회전 값입니다.                         |
| **Mip**           | 프리필터링된 스카이박스에서 사용할 Mip 단계입니다. 값이 클수록 더 낮은 해상도의 흐릿한 Mip이 쓰입니다. |
<!-- | **Mesh Position / Rotation / Scale** | The position, rotation and scale of the sky mesh. | -->
<!-- | **Center** | The relative normalized offset of the sky from the ground. | -->

## 클러스터드 라이팅

| 설정                          | 설명                                                   |
| --------------------------- | ---------------------------------------------------- |
| **Clustered Lighting**      | 클러스터드 라이팅을 켭니다.                                   |
| **Cells (X, Y, Z)**         | 조명 계산을 위해 공간을 잘게 나눌 때, X·Y·Z 방향으로 각각 몇 칸(셀)으로 나눌지 정합니다. |
| **Max Lights Per Cell**     | 한 칸(셀)에 담을 수 있는 조명의 최대 개수입니다.                          |
| **Cookies Enabled**         | 클러스터드 라이트에서 쿠키 텍스처(조명 모양을 씌우는 무늬)를 쓸 수 있게 합니다.                   |
| **Cookie Atlas Resolution** | 여러 쿠키 텍스처를 한데 모아 담는 아틀라스 텍스처의 해상도입니다.               |
| **Shadows Enabled**         | 클러스터드 라이트에서 그림자를 쓸 수 있게 합니다.                      |
| **Shadow Atlas Resolution** | 여러 그림자 텍스처를 한데 모아 담는 아틀라스 텍스처의 해상도입니다.              |
| **Shadow Type**             | 모든 그림자에 공통으로 쓰이는 그림자 다듬기(필터링) 방식입니다.                          |
| **Area Lights Enabled**     | 클러스터드 라이팅에서 면 형태로 빛나는 영역 라이트를 쓸 수 있게 합니다.                           |


## 노출 및 안개

| 설정          | 설명                             |
| ------------ | ------------------------------- |
| **Exposure** | 씬 전체가 얼마나 밝게 보일지 조절하는 노출 값입니다.  |
| **Fog**      | 씬 전체에 깔리는 안개 효과를 정합니다. 종류는 다음과 같습니다:<ul><li><strong>None</strong>: 안개 없음</li><li><strong>Linear</strong>: Fog Start와 Fog End 거리 사이에서 일정하게 짙어짐</li><li><strong>Exp</strong>: 보는 위치에서 멀어질수록 지수적으로 짙어짐</li><li><strong>Exp2</strong>: 보는 위치에서 멀어질수록 더 급격하게(제곱 지수) 짙어짐</li></ul> |
<!-- | **Fog Density** | Controls the rate at which fog fades in for Exp and Exp2 fog types. Larger values cause fog to fade in more quickly. Must be positive. | -->
<!-- | **Fog Start / End** | Distances, in scene units, where fog starts to fade in (start) and where it reaches maximum (end). | -->

## 해상도

| 설정                           | 설명                                    |
| ----------------------------- | ------------------------------------- |
| **Resolution Width / Height** | 앱의 가로/세로 해상도입니다(픽셀 단위).             |
| **Resolution Mode**           | 캔버스 크기가 바뀔 때 해상도도 따라서 바꿀지 정합니다. |
| **Fill Mode**                 | 캔버스가 브라우저 창을 어떻게 채울지 정합니다.              |


## 디바이스 및 API

| 설정                   | 설명                                   |
| -------------------- | ------------------------------------ |
| **Device Order**     | 그래픽 장치를 어떤 순서로 시도해서 만들지 정합니다.             |
| **Enable WebGPU**    | 켜면 가능한 경우 WebGPU를 우선 써 봅니다.    |
| **Enable WebGL 2.0** | 켜면 가능한 경우 WebGL 2.0을 써 봅니다. |

## 렌더링 옵션

| 설정                          | 설명                                              |
| --------------------------- | ------------------------------------------------- |
| **Power Preference**        | WebGL에 어떤 전력 모드를 선호하는지 힌트로 알려 줍니다:<ul><li><strong>Default</strong>: 브라우저가 결정</li><li><strong>High Performance</strong>: 렌더링 성능 우선</li><li><strong>Low Power</strong>: 전력 절약 우선</li></ul>           |
| **Anti-aliasing**           | 끄면 화면 가장자리의 계단 현상을 매끄럽게 다듬는 처리를 하지 않습니다.    |
| **Device Pixel Ratio**      | 화면의 픽셀 밀도만큼 캔버스 해상도를 높입니다(예: 레티나 디스플레이에서 2배). 더 선명해지지만 GPU와 메모리도 그만큼 더 씁니다.   |
| **Transparent Canvas**      | 캔버스 배경을 투명하게 만들어 뒤의 웹 페이지가 비쳐 보이게 합니다. 직접 꾸민 페이지나 UI 위에 앱을 겹쳐 올릴 때 유용합니다.   |
| **Preserve Drawing Buffer** | 화면을 직접 지우기 전까지 그려진 내용을 그대로 남겨 둡니다. 스크린샷을 찍을 때 유용합니다.                                        |

<!-- ## External Libraries

| Setting | Description |
| --- | --- |
| **Basis Library** | Add the necessary libraries to support Basis compression. |
| **Draco Library** | Add the necessary libraries to support Draco compression. | -->
