---
title: 씬 로딩
---

이 페이지에서는 코드로 씬을 불러오는 방법과, 프로젝트에서 씬을 활용하는 여러 가지 방식을 소개합니다.

씬을 다루는 방식은 크게 두 가지입니다. 하나는 씬을 통째로 바꾸는 것이고, 다른 하나는 기존 씬 위에 씬을 덧붙여 불러오는 것입니다.

## 씬을 완전히 변경하기

개발자들이 가장 흔하게 쓰는 방식으로, 씬 하나하나가 게임의 독립된 한 부분이 됩니다. 예를 들어 하나의 씬은 타이틀 화면이고, 각 레벨마다 씬을 하나씩 두는 식입니다.

[여기 예시][switch-scenes-completely-project]에서는 타이틀 화면에서 시작해 다른 레벨로 넘어갈 수 있습니다.

<div className="iframe-container">
    <iframe src="https://playcanv.as/e/p/Q1gKd1ek/"  title="Switching Scenes Completely" allow="camera; microphone; xr-spatial-tracking; fullscreen" allowfullscreen></iframe>
</div>

이렇게 씬을 바꾸려면 바꿀 씬의 이름을 넣어 [`SceneRegistry.changeScene`][changescene-api]을 호출하기만 하면 됩니다.

```javascript
this.app.scenes.changeScene('Some Scene Name');
```

씬 데이터가 아직 불러와지지 않은 상태라면, 이 함수는 다음 순서로 동작합니다:

- 새 씬 데이터를 받아 오기 위해 비동기 네트워크 요청을 보냅니다.
- 씬 데이터를 다 받으면, 애플리케이션 루트 노드에 붙어 있던 모든 자식 엔티티를 지웁니다 (즉, 지금 쓰던 씬 계층 구조를 없앱니다).
- 씬 데이터가 준비되었으므로, 이제 동기 방식으로 `loadSceneSettings`를 호출합니다.
- 마찬가지로 씬 데이터가 준비되었으므로, 동기 방식으로 `loadSceneHierarchy`를 호출합니다.

씬이 다 로드된 시점이나 도중에 오류가 난 시점을 알고 싶다면, 콜백 함수를 함께 넘겨 주면 됩니다:

```javascript
this.app.scenes.changeScene('Some Scene Name', (err, loadedSceneRootEntity) {
    if (err) {
        console.error(err);
    } else {
        // 씬 계층 구조가 성공적으로 로드되었습니다
    }
});
```

`changeScene`을 부를 때 새 씬 데이터를 받아 오는 비동기 네트워크 요청이 일어나는 것을 미리 없애고 싶다면, 앞서 [`SceneRegistry.loadSceneData`][loadscenedata-api]를 먼저 호출해 두면 됩니다. 그러면 `changeScene`은 곧바로 `loadSceneSettings`와 `loadSceneHierarchy`를 실행하는 동기 호출이 됩니다.

자주 있는 상황을 예로 들면, 레벨 1을 끝내면 다음에 레벨 2를 불러올 것이 뻔한 경우입니다. 이럴 때는 사용자가 아직 레벨 1을 하고 있는 동안 레벨 2의 씬 데이터를 미리 받아 둘 수 있습니다. 그러면 레벨 1을 끝냈을 때 데이터를 기다릴 필요 없이 곧바로 레벨 2로 들어갈 수 있습니다.

## 씬을 추가적으로 로딩하기 {#loading-scenes-additively}

씬을 통째로 바꾸는 대신, 여러 씬 계층 구조를 기존 위에 덧붙여 불러올 수도 있습니다. 이 방식은 넓은 세계를 여러 조각으로 나눠서, 시작할 때 전부 한꺼번에 불러오지 않고 필요할 때마다 조금씩 불러오고 싶을 때 흔히 씁니다.

여기서 한 걸음 더 나아가면, 각 씬이 세계의 한 구역을 나타내고 플레이어가 움직일 때마다 필요한 구역을 불러오고 필요 없어진 구역은 없애도록 만들 수 있습니다. 이렇게 하면 시스템은 지금 위치에서 가까운, 이어진 구역과 그에 딸린 에셋만 불러오고, 필요 없는 구역의 에셋은 없애서 메모리에서 내립니다. 메모리나 VRAM 같은 자원을 아끼는 데 도움이 됩니다.

또 어떤 개발자들은, 실제 게임이 시작되기 전에 특정 코드와 엔티티를 미리 만들어 두고 게임을 하는 내내 어디서든 접근할 수 있게 하려고 이 방식을 쓰기도 합니다.

[아래는 씬을 덧붙여 불러오는 간단한 예시][additively-loading-scenes-project]입니다. 왼쪽 위의 UI가 '메인' 씬이고, 나머지 씬 계층 구조들이 그 위로 불러와졌다가 없어집니다.

<div className="iframe-container">
    <iframe src="https://playcanv.as/e/p/cjBInud1/" title="Additively Loading Scenes" allow="camera; microphone; xr-spatial-tracking; fullscreen" allowfullscreen></iframe>
</div>

한 가지 주의할 점은, 같은 씬 계층 구조를 여러 개 동시에 불러올 수는 없다는 것입니다. 엔티티마다 에디터에서 고유한 GUID가 붙기 때문입니다. 같은 씬 계층 구조를 여러 개 한 번에 불러오려고 하면, 엔티티마다 달라야 할 GUID가 서로 겹치는 충돌이 생깁니다.

같은 엔티티 계층 구조를 여러 벌 만들어야 한다면 템플릿을 쓰세요. 템플릿은 인스턴스로 만들어질 때마다 고유한 GUID를 새로 받기 때문입니다.

## 씬이 작동하는 방식 이해하기

씬을 잘 활용하려면, 프로젝트에서 씬이 실제로 어떻게 불러와지는지 아는 것이 중요합니다. 이 섹션에서는 씬이 어떻게 짜여 있고 어떻게 로드되는지 자세히 설명합니다.

씬은 [에셋][assets]과는 별개이며, 불러올 때 쓰는 속성과 API도 서로 다릅니다.

씬은 [씬 레지스트리][sceneregistry-api] 안에 [씬 레지스트리 아이템][sceneregistryitem-api] 형태로 저장되며, 이 레지스트리에는 [애플리케이션][application-sceneregistry-api] 객체를 통해 접근합니다. 씬 레지스트리를 이용하면 에디터에서 붙인 씬 이름으로 씬 레지스트리 아이템을 찾을 수 있고, 그 아이템으로 씬 계층 구조나 설정을 불러올 수 있습니다.

:::note

[애플리케이션 루트 노드](https://manual.oasisserver.link/engine/classes/AppBase.html#root)는 에디터에서 씬에 보이는, 기본 이름이 'Root'인 씬 계층 구조 루트 엔티티와는 다른 것입니다. 씬 계층 구조 루트 엔티티는 애플리케이션 루트 노드의 자식으로 들어갑니다.

:::

씬 계층 구조와 설정을 불러오는 API는 두 가지입니다:

- [`SceneRegistry.loadSceneHierarchy`][loadscenehierarchy-api] - 씬 계층 구조를 불러옵니다
- [`SceneRegistry.loadSceneSettings`][loadscenesettings-api] - 씬의 설정을 불러옵니다

씬 계층 구조나 설정을 불러오는 코드 예시입니다:

```javascript
// 씬의 이름으로 씬 레지스트리 아이템 찾기
const sceneItem = this.app.scenes.find('Some Scene Name');

// 완료되었을 때 콜백과 함께 씬 계층 구조 로드
this.app.scenes.loadSceneHierarchy(sceneItem, function (err, loadedSceneRootEntity) {
    if (err) {
        console.error(err);
    } else {
        // 씬 계층 구조가 성공적으로 로드되었습니다
    }
});

// 완료되었을 때 콜백과 함께 씬 설정 로드
this.app.scenes.loadSceneSettings(sceneItem, function (err) {
    if (err) {
        console.error(err);
    } else {
        // 씬 설정이 성공적으로 로드되었습니다
    }
});
```

`loadSceneHierarchy`와 `loadSceneSettings`는 계층 구조나 설정을 불러오는 데 필요한 데이터를 가져오는 부분에서 비슷하게 동작합니다.

이 함수를 호출하면 씬 데이터를 받기 위해 서버로 비동기 네트워크 요청을 보냅니다. 그래서 씬을 불러오라고 요청한 시점과 브라우저가 그 요청을 다 받아 온 시점 사이에는 시간 차이가 생깁니다 (네트워크 속도, 연결 상태, 씬 크기에 따라 달라집니다). 그 사이에도 애플리케이션은 멈추지 않고 계속 갱신됩니다.

네트워크 요청이 끝나면 엔진은 다음 일을 합니다:

`loadSceneHierarchy`

- 불러온 씬을 바탕으로 엔티티와 컴포넌트를 만들고, 그 계층 구조를 [애플리케이션 루트 노드][application-root-api]에 붙입니다.
- 불러온 씬의 ScriptType에서 `initialize`와 `postInitialize` 함수를 호출합니다.
- `loadSceneHierarchy` 함수에 넘겨 준 콜백을 호출합니다.
- (선택) [콜백][loadhierarchycallback-api]에는 방금 불러온 씬의 루트를 가리키는 엔티티가 매개변수로 전달됩니다. 필요하면 이 엔티티를 수정하거나 다른 엔티티의 자식으로 옮길 수 있습니다. [씬을 추가적으로 로딩하기](#loading-scenes-additively) 예시에서는 관리하기 편하도록 씬 루트를 현재 씬의 다른 엔티티 밑으로 옮겨 붙입니다.

`loadSceneSettings`

- 불러온 씬 설정을 애플리케이션에 적용합니다.
- `loadSceneSettings` 함수에 넘겨 준 [콜백][loadsettingscallback-api]을 호출합니다.

`loadSceneHierarchy`는 기본적으로 언제나 기존 씬 위에 덧붙여 불러옵니다. 그래서 씬을 통째로 바꾸고 싶다면, 이미 불러와 있던 씬을 지우거나 없애는 일은 개발자가 직접 해 줘야 합니다.

이 일을 처리하는 방법은 여러 가지가 있고, 각각 장단점이 있습니다:

### 애플리케이션 루트 노드 아래의 모든 자식을 먼저 파괴하기

이 방식은 새 씬을 불러와 만들기 전에 지금 씬을 먼저 없애는 단계를 따로 두기 때문에, 언제 어디서 기존 씬이 사라지는지 파악하기가 쉽습니다.

```javascript
// 씬의 이름으로 씬 레지스트리 아이템 찾기
const sceneItem = this.app.scenes.find('Some Scene Name');

// 현재 로드된 씬 계층 구조를 제거하기 위해 애플리케이션 루트 아래의 모든 자식 파괴
const rootChildren = this.app.root.children;
while(rootChildren.length > 0) {
    rootChildren[0].destroy();
}

// 완료되었을 때 콜백과 함께 씬 계층 구조 로드
this.app.scenes.loadSceneHierarchy(sceneItem, function (err, loadedSceneRootEntity) {
    if (err) {
        console.error(err);
    } else {
        // 씬 계층 구조가 성공적으로 로드되었습니다
    }
});
```

하지만 앞서 말했듯이 `loadSceneHierarchy`를 호출한 시점과 씬 데이터가 실제로 다 불러와지는 시점 사이에는 시간 차이가 있습니다. 그래서 네트워크 요청이 끝나기를 기다리는 동안 애플리케이션은 몇 프레임 정도 아무것도 없는 빈 화면을 그리게 됩니다. 이 점 때문에 다음 방법이 필요해집니다.

### 새 씬이 로드된 후 이전 씬 루트 엔티티 파괴하기

이 방식은 새 씬 계층 구조가 다 붙은 뒤에 콜백 안에서 이전 씬 계층 구조를 없애는 것입니다. 이렇게 하면 네트워크에서 씬 데이터를 받아 오는 동안에도 이전 씬이 화면에 그대로 남아 있게 됩니다.

```javascript
// 씬의 이름으로 씬 레지스트리 아이템 찾기
const sceneItem = this.app.scenes.find('Some Scene Name');

// 이전 씬 계층 구조의 루트 엔티티가 기본 이름인 'Root'라고 가정
const oldSceneRootEntity = this.app.root.findByName('Root');

// 완료되었을 때 콜백과 함께 씬 계층 구조 로드
this.app.scenes.loadSceneHierarchy(sceneItem, function (err, loadedSceneRootEntity) {
    if (err) {
        console.error(err);
    } else {
        // 씬 계층 구조가 성공적으로 로드되었습니다
        oldSceneRootEntity.destroy();
    }
});
```

다만 이 경우, 새 씬의 scriptType이 `initialize`와 `postInitialize`를 호출하는 동안에는 이전 씬이 아직 계층 구조에 함께 남아 있습니다. 스크립트가 "지금 불러온 씬이 유일한 씬"이라고 가정하고 짜여 있다면 문제가 될 수 있습니다. 예를 들어 `initialize`에서 이름으로 엔티티를 찾는데, 마침 이전 씬 계층 구조에도 같은 이름의 엔티티가 있다면, 스크립트는 새 씬의 엔티티가 아니라 이전 씬의 엔티티를 참조하게 됩니다. 그러면 나중에 이전 씬이 없어진 뒤 예상치 못한 동작이 생길 수 있습니다.

이런 문제를 줄이기 위해, 씬 데이터를 불러오는 일과 씬 계층 구조를 만드는 일을 나눠서 할 수 있는 API인 [`SceneRegistry.loadSceneData`][loadscenedata-api]를 제공합니다.

## 씬에서 에셋 관리하기

씬에 대해 자주 나오는 질문 하나는, 씬에서 쓰는 에셋이 씬을 불러올 때 같이 불러와지는가 하는 것입니다. OasisW에서는 에셋과 씬이 서로 분리되어 있어서 따로따로 불러와야 하며, 그만큼 개발자가 자유롭게 다룰 수 있습니다.

권장하는 방법은, 씬에서 쓰는 모든 에셋에 그 씬 이름으로 태그를 달아 두는 것입니다. 그러면 씬을 불러올 때 먼저 해당 태그의 에셋을 모두 불러오고, 에셋이 다 준비된 다음에 씬 로딩을 시작하면 됩니다.

에셋 태그와 에셋 로딩에 대한 자세한 내용은 [이 페이지][asset-tags-loading]에서 볼 수 있습니다.

[아래 예시 프로젝트][asset-load-for-scene-project]는 씬을 불러올 때 에셋도 함께 불러오고, 메인 메뉴로 돌아갈 때 그 에셋을 다시 내립니다.

<div className="iframe-container">
    <iframe src="https://playcanv.as/e/p/SBTfOAeM/" title="Loading scenes and assets" allow="camera; microphone; xr-spatial-tracking; fullscreen" allowfullscreen></iframe>
</div>

[switch-scenes-completely-project]: https://playcanvas.com/project/924351/overview/switch-full-scene-example
[additively-loading-scenes-project]: https://playcanvas.com/project/685077/overview/additive-loading-scenes
<!-- [templates]: /user-manual/editor/templates/ -->
[assets]: /user-manual/assets/
[loadscenehierarchy-api]: https://manual.oasisserver.link/engine/classes/SceneRegistry.html#loadscenehierarchy
[loadscenesettings-api]: https://manual.oasisserver.link/engine/classes/SceneRegistry.html#loadscenesettings
[sceneregistryitem-api]: https://manual.oasisserver.link/engine/classes/SceneRegistryItem.html
[sceneregistry-api]: https://manual.oasisserver.link/engine/classes/SceneRegistry.html
[application-sceneregistry-api]: https://manual.oasisserver.link/engine/classes/AppBase.html#scenes
[loadhierarchycallback-api]: https://manual.oasisserver.link/engine/types/LoadHierarchyCallback.html
[loadsettingscallback-api]: https://manual.oasisserver.link/engine/types/LoadSettingsCallback.html
[application-root-api]: https://manual.oasisserver.link/engine/classes/AppBase.html#root
[loadscenedata-api]: https://manual.oasisserver.link/engine/classes/SceneRegistry.html#loadscenedata
[asset-tags-loading]: /user-manual/assets/preloading-and-streaming/#asset-tags
[asset-load-for-scene-project]: https://playcanvas.com/project/926754/overview/asset-loading-for-scenes-example
[changescene-api]: https://manual.oasisserver.link/engine/classes/SceneRegistry.html#changescene
