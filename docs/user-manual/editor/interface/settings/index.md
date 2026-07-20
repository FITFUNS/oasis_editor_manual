---
title: 프로젝트 설정
---

# 프로젝트 설정

프로젝트 설정에서는 프로젝트가 어떻게 실행되는지, 그리고 팀에서 에디터가 어떻게 동작하는지를 정합니다.
렌더링, 물리, 입력, 네트워크 같은 엔진/런타임 구성부터 에셋을 가져올 때의 기본값, 에디터 사용 환경까지 여기서 조절합니다.
일부 설정은 나에게만 적용되지만, 대부분의 설정은 지금 같은 브랜치에서 함께 작업하는 모든 팀원에게 영향을 줍니다.

## 설정 열기 {#settings-open}

[ProjectToolbar](/user-manual/editor/interface/project-toolbar)의 톱니바퀴 아이콘을 클릭하면, 설정이 [Inspector](/user-manual/editor/interface/inspector)에 나타납니다.

![Settings](/img/user-manual/editor/toolbar/settings.png)

## 설정 개요 {#settings}

설정은 여러 카테고리로 나뉘어 있으며, 각 카테고리는 접었다 펼칠 수 있는 패널로 표시됩니다.
Inspector에는 아래 순서로 나열됩니다:

| Panel | Description |
| --- | --- |
| [Editor](/user-manual/editor/interface/settings/editor) | 카메라 Near/Far 클립, 줌 민감도 등 에디터 사용과 관련된 설정입니다. |
| [Asset Tasks](/user-manual/editor/interface/settings/asset-import) | 에셋을 프로젝트로 가져오는 방식을 정하는 설정입니다. |
| [Physics](/user-manual/editor/interface/settings/physics) | 물리 라이브러리를 포함할지, 중력을 어떻게 줄지 등 물리 관련 설정입니다. |
| [Rendering](/user-manual/editor/interface/settings/rendering) | 스카이박스, 클러스터드 라이팅, 그림자 등 화면 렌더링 관련 설정입니다. |
| [Layers](/user-manual/editor/interface/settings/layers) | 렌더링 레이어와 그 순서를 관리합니다. |
| [Lightmapping](/user-manual/editor/interface/settings/lightmapping) | 해상도, 모드, 앰비언트 베이크 등 라이트매핑 설정입니다. |
| [Batch Groups](/user-manual/editor/interface/settings/batch-groups) | 이 프로젝트의 배치 그룹을 관리합니다. 배치 그룹은 비슷한 모델과 요소를 묶어 드로우 콜을 줄여 줍니다. |
| [Loading Screen](/user-manual/editor/interface/settings/loading-screen) | 애플리케이션 로딩 화면을 보여 줄 스크립트를 지정합니다.      |
| [External Scripts](/user-manual/editor/interface/settings/external-scripts) | 외부 스크립트 URL을 지정해 `<script>` 태그로 불러옵니다.     |
| [Launch Page](/user-manual/editor/interface/settings/launch-page) | 실행 페이지와 관련된 설정입니다. |
| [Input](/user-manual/editor/interface/settings/input) | 마우스, 키보드 같은 입력 장치를 켜거나 끕니다. |
| [Scripts Loading Order](/user-manual/editor/interface/settings/scripts-loading-order) | 스크립트를 불러오는 순서를 정해 의존성 문제를 방지합니다.        |
<!-- | [Engine](/user-manual/editor/interface/settings/engine) | Engine settings, including the engine version. | -->
<!-- | [Localization](/user-manual/editor/interface/settings/localization) | 로컬라이제이션 에셋을 추가하기 위한 설정입니다. | -->
<!-- | [Network](/user-manual/editor/interface/settings/network) | 프로젝트의 네트워크 관련 설정입니다. | -->
