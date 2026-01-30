---
title: 렌더링 설정
sidebar_label: 렌더링
---

조명, 해상도 및 렌더링 관련 기능을 제어합니다.

:::note

이 설정들은 프로젝트에서 현재 활성화된 브랜치의 모든 사용자에게 적용됩니다.

:::

`RENDERING` 섹션으로 이동한 뒤 패널을 확장하세요:

![Rendering Settings](/img/user-manual/editor/interface/settings/rendering.webp)

아래는 사용 가능한 설정 항목에 대한 설명입니다.

## 환경

| 설정               | 설명                                         |
| ----------------- | -------------------------------------------- |
| **Ambient Color** | sRGB 색 공간으로 지정되는 씬의 전역 주변광 색상입니다.   |
| **Skybox**        | 3D 씬 뒤에 렌더링되는 큐브맵 에셋입니다. 프리필터링된 경우 물리 기반 머티리얼의 기본 환경 맵으로도 사용됩니다.   |
| **Type**          | 스카이박스 큐브맵을 렌더링할 투영 방식을 선택합니다:<ul><li><strong>Infinite</strong>: 무한 원점에 렌더링</li><li><strong>Box</strong>: 박스 메시로 매핑</li><li><strong>Dome</strong>: 반구형 돔에 매핑</li></ul> |
| **Intensity**     | 노출 수준을 맞추기 위한 스카이박스 강도입니다.          |
| **Rotation**      | 스카이박스의 회전 값입니다.                         |
| **Mip**           | 프리필터링된 스카이박스의 Mip 레벨입니다. 값이 높을수록 해상도가 낮고 더 흐릿한 Mip이 선택됩니다. |
<!-- | **Mesh Position / Rotation / Scale** | The position, rotation and scale of the sky mesh. | -->
<!-- | **Center** | The relative normalized offset of the sky from the ground. | -->

## 클러스터드 라이팅

| 설정                          | 설명                                                   |
| --------------------------- | ---------------------------------------------------- |
| **Clustered Lighting**      | 클러스터드 라이팅을 활성화합니다.                                   |
| **Cells (X, Y, Z)**         | 조명이 포함된 공간을 분할하기 위해 월드 좌표축(X, Y, Z)별로 사용되는 셀의 개수입니다. |
| **Max Lights Per Cell**     | 하나의 셀에 저장할 수 있는 최대 조명 수입니다.                          |
| **Cookies Enabled**         | 클러스터드 라이트에서 쿠키 텍스처를 사용할 수 있도록 합니다.                   |
| **Cookie Atlas Resolution** | 방향성이 없는 쿠키 텍스처를 저장하는 아틀라스 텍스처의 해상도입니다.               |
| **Shadows Enabled**         | 클러스터드 라이트에서 그림자를 사용할 수 있도록 합니다.                      |
| **Shadow Atlas Resolution** | 방향성이 없는 그림자 텍스처를 저장하는 아틀라스 텍스처의 해상도입니다.              |
| **Shadow Type**             | 모든 그림자에 사용되는 그림자 필터링 방식입니다.                          |
| **Area Lights Enabled**     | 클러스터드 라이팅에서 영역 라이트를 지원합니다.                           |


## 노출 및 안개

| 설정          | 설명                             |
| ------------ | ------------------------------- |
| **Exposure** | 씬 전체의 밝기를 조절하는 노출 값입니다.  |
| **Fog**      | 씬의 전역 안개 효과를 제어합니다. 유형은 다음과 같습니다:<ul><li><strong>None</strong>: 안개 비활성화</li><li><strong>Linear</strong>: Fog Start와 Fog End 거리 사이에서 선형으로 페이드 인</li><li><strong>Exp</strong>: 지수 함수에 따라 뷰 위치로부터 페이드 인</li><li><strong>Exp2</strong>: 제곱 지수 함수에 따라 뷰 위치로부터 페이드 인</li></ul> |
<!-- | **Fog Density** | Controls the rate at which fog fades in for Exp and Exp2 fog types. Larger values cause fog to fade in more quickly. Must be positive. | -->
<!-- | **Fog Start / End** | Distances, in scene units, where fog starts to fade in (start) and where it reaches maximum (end). | -->

## 해상도

| 설정                           | 설명                                    |
| ----------------------------- | ------------------------------------- |
| **Resolution Width / Height** | 애플리케이션의 가로/세로 해상도(픽셀 단위)입니다.             |
| **Resolution Mode**           | 캔버스 크기가 변경될 때 해상도를 함께 변경할지 여부를 결정합니다. |
| **Fill Mode**                 | 캔버스가 브라우저 창을 채우는 방식을 결정합니다.              |


## 디바이스 및 API

| 설정                   | 설명                                   |
| -------------------- | ------------------------------------ |
| **Device Order**     | 그래픽 디바이스 생성을 시도하는 순서입니다.             |
| **Enable WebGPU**    | 활성화하면 사용 가능한 경우 WebGPU 사용을 시도합니다.    |
| **Enable WebGL 2.0** | 활성화하면 사용 가능한 경우 WebGL 2.0 사용을 시도합니다. |

## 렌더링 옵션

| 설정                          | 설명                                              |
| --------------------------- | ------------------------------------------------- |
| **Power Preference**        | WebGL에 선호하는 전력 모드를 힌트로 제공합니다:<ul><li><strong>Default</strong>: 브라우저가 결정</li><li><strong>High Performance</strong>: 렌더링 성능 우선</li><li><strong>Low Power</strong>: 전력 절약 우선</li></ul>           |
| **Anti-aliasing**           | 비활성화하면 백 버퍼에 대한 안티앨리어싱이 적용되지 않습니다.    |
| **Device Pixel Ratio**      | 캔버스 백 버퍼 해상도를 디바이스 픽셀 비율만큼 곱합니다(예: Retina 디스플레이에서 2배). 선명도는 증가하지만 GPU/메모리 사용량도 증가합니다.   |
| **Transparent Canvas**      | 캔버스 배경을 투명하게 만들어 웹 페이지가 비쳐 보이도록 합니다. 커스텀 페이지 디자인이나 UI 위에 애플리케이션을 오버레이할 때 유용합니다.   |
| **Preserve Drawing Buffer** | 명시적으로 지우기 전까지 드로잉 버퍼를 유지합니다. 스크린샷을 찍을 때 유용합니다.                                        |

<!-- ## External Libraries

| Setting | Description |
| --- | --- |
| **Basis Library** | Add the necessary libraries to support Basis compression. |
| **Draco Library** | Add the necessary libraries to support Draco compression. | -->
