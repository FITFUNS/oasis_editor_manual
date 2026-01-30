---
title: 라이트매핑 설정
sidebar_label: 라이트매핑
---

베이크된 조명의 해상도, 필터링, 앰비언트 오클루전을 제어합니다.

:::note

이 설정은 현재 활성화된 프로젝트 브랜치의 모든 사용자에게 영향을 줍니다.

:::

`LIGHTMAPPING` 섹션으로 이동한 뒤 패널을 펼치세요:

![라이트매핑 설정](/img/user-manual/editor/interface/settings/lightmapping.webp)

아래는 사용 가능한 설정에 대한 설명입니다:

## 일반

| 설정 | 설명 |
| --- | --- |
| **Size Multiplier** | 자동 생성되는 라이트맵 텍스처의 해상도는 월드 공간에서의 지오메트리 면적과 모델 및 씬의 크기 배율을 기준으로 결정됩니다. 이 값을 변경하면 씬 전체의 라이트맵 해상도에 영향을 줍니다. |
| **Max Resolution** | 자동 생성되는 라이트맵 텍스처의 최대 해상도입니다. |
| **Mode** | 라이트맵 베이킹 모드입니다:<ul><li><strong>Color Only</strong>: 단일 색상 라이트맵</li><li><strong>Color and Direction</strong>: 색상 라이트맵과 주요 광원 방향 정보(범프/스페큘러에 사용)</li></ul> |

## 필터링

| 설정 | 설명 |
| --- | --- |
| **Filter** | 런타임에서 베이크된 라이트맵에 양방향(bilateral) 필터를 적용합니다. |
| **Range** | 양방향 필터의 범위 파라미터입니다. |
| **Smoothness** | 양방향 필터의 공간 파라미터입니다. |

## 앰비언트 베이크

| 설정 | 설명 |
| --- | --- |
| **Ambient Bake** | 앰비언트 라이트를 라이트맵에 베이크합니다. |
| **Samples** | 앰비언트 라이트 베이킹 시 사용할 샘플 수입니다. |
| **Sphere Part** | 앰비언트 라이트를 베이크할 때 포함할 구체 영역의 비율입니다. |
| **Occlusion Brightness** | 베이크된 앰비언트 오클루전의 밝기입니다. |
| **Occlusion Contrast** | 베이크된 앰비언트 오클루전의 대비입니다. |
