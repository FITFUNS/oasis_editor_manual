---
title: 프로젝트 설정
---

# 프로젝트 설정

프로젝트 설정은 프로젝트의 실행 방식과 팀에서 에디터가 동작하는 방식을 제어합니다.
여기에는 엔진/런타임 구성(렌더링, 물리, 입력, 네트워크), 에셋 가져오기 기본값, 그리고 에디터 환경설정이 포함됩니다.
일부 설정은 개인에게만 적용되는 설정(세션 또는 사용자별 설정)인 반면, 대부분의 설정은 현재 브랜치에서 작업 중인 모든 협업자에게 영향을 미칩니다.

## 설정 열기 {#settings-open}

[ProjectToolbar](/user-manual/editor/interface/project-toolbar)에 있는 톱니바퀴 아이콘을 클릭하면, 설정이 [Inspector](/user-manual/editor/interface/inspector)에 로드됩니다.

![Settings](/img/user-manual/editor/toolbar/settings.png)

## 설정 개요 {#settings}

설정은 여러 카테고리로 그룹화되어 있으며, 각 카테고리는 접었다 펼칠 수 있는 패널 형태로 표시됩니다.
이 카테고리들은 Inspector에서 다음 순서로 나열됩니다:

| Panel | Description |
| --- | --- |
| [Editor](/user-manual/editor/interface/settings/editor) | 카메라 Near/Far 클립, 줌 민감도 등 에디터 관련 설정입니다. |
| [Asset Tasks](/user-manual/editor/interface/settings/asset-import) | 에셋을 프로젝트로 가져오는 방식을 제어하는 설정입니다. |
| [Physics](/user-manual/editor/interface/settings/physics) | 물리 라이브러리 포함 여부 및 중력 설정 등 물리 관련 설정입니다. |
| [Rendering](/user-manual/editor/interface/settings/rendering) | 스카이박스, 클러스터드 라이팅, 그림자 설정 등 렌더링 관련 설정입니다. |
| [Layers](/user-manual/editor/interface/settings/layers) | 렌더링 레이어와 그 순서를 관리합니다. |
| [Lightmapping](/user-manual/editor/interface/settings/lightmapping) | 해상도, 모드, 앰비언트 베이크 등 라이트매핑 설정입니다. |
| [Batch Groups](/user-manual/editor/interface/settings/batch-groups) | 이 프로젝트의 배치 그룹을 관리합니다. 배치 그룹은 유사한 모델과 요소를 묶어 드로우 콜을 줄입니다. |
| [Loading Screen](/user-manual/editor/interface/settings/loading-screen) | 애플리케이션 로딩 화면을 표시하는 스크립트를 지정합니다.      |
| [External Scripts](/user-manual/editor/interface/settings/external-scripts) | 외부 스크립트 URL을 지정하여 `<script>` 태그로 로드합니다.     |
| [Launch Page](/user-manual/editor/interface/settings/launch-page) | 실행 페이지 관련 설정입니다. |
| [Input](/user-manual/editor/interface/settings/input) | 입력 장치(마우스, 키보드 등)를 활성화하거나 비활성화합니다. |
| [Network](/user-manual/editor/interface/settings/network) | 프로젝트의 네트워크 관련 설정입니다. |
| [Scripts Loading Order](/user-manual/editor/interface/settings/scripts-loading-order) | 스크립트 로딩 순서를 설정하여 의존성 문제를 방지합니다.        |
<!-- | [Engine](/user-manual/editor/interface/settings/engine) | Engine settings, including the engine version. | -->
<!-- | [Localization](/user-manual/editor/interface/settings/localization) | 로컬라이제이션 에셋을 추가하기 위한 설정입니다. | -->


<!-- - **Scene Name**  
  - 씬 이름을 변경하여 프로젝트에서 식별 가능하게 합니다.


- **Loading Screen**  
  - 애플리케이션 로딩 화면을 표시하는 스크립트를 지정합니다.
- **External Scripts**
  - 외부 스크립트 URL을 지정하여 `<script>` 태그로 로드합니다.
- **Scripts Loading Order**  
  - 스크립트 로딩 순서를 설정하여 의존성 문제를 방지합니다. -->