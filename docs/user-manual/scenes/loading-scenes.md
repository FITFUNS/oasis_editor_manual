---
title: 씬 로딩
---

이 페이지에서는 코드로 씬을 로딩하는 방법과 프로젝트에서 씬을 사용하는 다양한 접근 방식을 안내합니다.

씬을 사용하는 두 가지 주요 접근 방식이 있습니다: 씬을 완전히 변경하는 것과 씬을 추가적으로 로딩하는 것입니다.

## 씬을 완전히 변경하기

이는 개발자들이 가장 많이 사용하는 접근 방식으로, 각 씬이 게임의 독립적인 부분이 됩니다. 예를 들어, 하나의 씬은 타이틀 화면이고, 각 레벨마다 하나의 씬이 있습니다.

[여기 예시][switch-scenes-completely-project]에서 사용자가 타이틀 화면에서 다른 레벨로 이동할 수 있습니다.

<div className="iframe-container">
    <iframe src="https://playcanv.as/e/p/Q1gKd1ek/"  title="Switching Scenes Completely" allow="camera; microphone; xr-spatial-tracking; fullscreen" allowfullscreen></iframe>
</div>

이는 씬의 이름으로 [`SceneRegistry.changeScene`][changescene-api]을 호출하는 것만으로 수행됩니다.

```javascript
this.app.scenes.changeScene('Some Scene Name');
```

씬 데이터가 아직 로드되지 않은 경우, 이 함수는 다음을 수행합니다:

- 새로운 씬 데이터에 대한 비동기 네트워크 요청을 만듭니다.
- 씬 데이터가 로드되면, 애플리케이션 루트 노드에서 모든 자식 엔티티를 삭제합니다 (기존 씬 계층 구조를 파괴).
- 씬 데이터가 로드되었으므로 이제 동기적인 `loadSceneSettings`를 호출합니다.
- 씬 데이터가 로드되었으므로 이제 동기적인 `loadSceneHierarchy`를 호출합니다.

씬이 로드되었을 때나 오류가 발생했을 때를 알고 싶다면, 콜백을 제공해야 합니다:

```javascript
this.app.scenes.changeScene('Some Scene Name', (err, loadedSceneRootEntity) {
    if (err) {
        console.error(err);
    } else {
        // 씬 계층 구조가 성공적으로 로드되었습니다
    }
});
```

`changeScene`을 호출하는 시점에서 새로운 씬 데이터에 대한 비동기 네트워크 요청을 피하려면, 미리 [`SceneRegistry.loadSceneData`][loadscenedata-api]를 호출할 수 있으며, 그러면 `changeScene`이 `loadSceneSettings`와 `loadSceneHierarchy`를 즉시 호출하는 동기 호출이 됩니다.

일반적인 사용 사례는 레벨 1이 완료되었을 때 사용자가 레벨 2를 로드할 것을 아는 것입니다. 이 경우, 사용자가 레벨 1에 있을 때 레벨 2의 씬 데이터를 로드할 수 있습니다. 레벨 1을 완료하면 데이터 로드를 기다릴 필요 없이 즉시 레벨 2에 진입할 수 있습니다.

## 씬을 추가적으로 로딩하기 {#loading-scenes-additively}

씬을 완전히 변경하는 대신 추가적인 방식으로 여러 씬 계층 구조를 로드할 수 있습니다. 이의 일반적인 사용 사례는 큰 세계를 분할하여 시작 시 모든 것을 한 번에 로드하는 대신 시간에 걸쳐 로드할 수 있도록 하는 것입니다.

위의 변형으로는 각 씬이 플레이어가 이동할 때 로드되고 파괴되는 세계의 섹션을 나타내는 것입니다. 시스템은 필요한 섹션이 아닌 섹션의 에셋을 파괴하고 언로드하면서 세계의 가장 가까운 연결된 섹션과 관련 에셋만 로드할 것입니다. 이는 메모리와 VRAM과 같은 리소스 관리에 도움이 됩니다.

때로는 개발자들이 실제 게임이 로드되기 전에 특정 코드와 엔티티가 생성되고 게임 세션 전체에서 전역적으로 접근 가능하도록 하기 위해 이 접근 방식을 사용합니다.

[아래는 추가적으로 씬을 로딩하는 간단한 예시][additively-loading-scenes-project]로, 왼쪽 상단의 UI가 '메인' 씬이고 다른 씬 계층 구조들이 로드/파괴됩니다.

<div className="iframe-container">
    <iframe src="https://playcanv.as/e/p/cjBInud1/" title="Additively Loading Scenes" allow="camera; microphone; xr-spatial-tracking; fullscreen" allowfullscreen></iframe>
</div>

씬 계층 구조의 여러 인스턴스를 한 번에 로드할 수 없다는 점에 유의하세요. 이는 엔티티가 에디터에서 고유한 GUID를 할당받기 때문입니다. 동일한 씬 계층 구조의 여러 인스턴스를 한 번에 로드하려고 시도하면, 엔티티당 고유해야 하는 GUID 충돌이 발생합니다.

엔티티 계층 구조의 여러 인스턴스가 필요하다면, 템플릿 인스턴스화 시 고유한 GUID가 부여되므로 템플릿을 사용하세요.

## 씬이 작동하는 방식 이해하기

씬을 효과적으로 사용하려면 프로젝트에서 사용될 때 어떻게 로드되는지 이해하는 것이 중요합니다. 이 섹션에서는 씬이 어떻게 구조화되고 로드되는지 자세히 설명합니다.

씬은 [에셋][assets]과 분리되어 있으며, 로드하기 위한 다른 속성과 API를 가집니다.

씬은 [애플리케이션][application-sceneregistry-api] 객체를 통해 접근할 수 있는 [씬 레지스트리][sceneregistry-api]에 저장된 [씬 레지스트리 아이템][sceneregistryitem-api]으로 표현됩니다. 씬 레지스트리를 통해 에디터에서 씬의 이름으로 씬 레지스트리 아이템을 찾고, 이를 사용하여 씬 계층 구조나 설정을 로드할 수 있습니다.

:::note

[애플리케이션 루트 노드](https://manual.oasisserver.link/engine/classes/AppBase.html#root)는 에디터에서 씬에 보이는 기본적으로 'Root'라는 이름을 가진 씬 계층 구조 루트 엔티티가 아닙니다. 씬 계층 구조 루트 엔티티는 애플리케이션 루트 노드의 자식이 됩니다.

:::

씬 계층 구조와 설정을 로드하는 두 가지 API가 있습니다:

- [`SceneRegistry.loadSceneHierarchy`][loadscenehierarchy-api] - 씬 계층 구조를 로드합니다
- [`SceneRegistry.loadSceneSettings`][loadscenesettings-api] - 씬에서 설정을 로드합니다

씬 계층 구조나 설정을 로드하는 코드 예시입니다:

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

`loadSceneHierarchy`와 `loadSceneSettings` 모두 계층 구조나 설정을 로드하는 데 필요한 데이터를 가져오는 방식에서 유사한 동작을 합니다.

함수가 호출되면 씬 데이터에 대해 서버에 비동기 네트워크 요청을 수행합니다. 이는 씬을 로드하는 요청과 브라우저가 네트워크 요청을 완료하는 사이에 지연이 있을 것임을 의미합니다 (네트워크 속도, 네트워크 연결 및 씬 크기에 따라 다름). 이 동안 애플리케이션은 계속 업데이트됩니다.

네트워크 요청이 완료되면 엔진은 다음을 수행합니다:

`loadSceneHierarchy`

- 로드된 씬에서 엔티티와 컴포넌트를 생성하고 계층 구조를 [애플리케이션 루트 노드][application-root-api]에 추가합니다.
- 로드된 씬의 ScriptType에서 `initialize`와 `postInitialize` 함수를 호출합니다.
- `loadSceneHierarchy` 함수에 전달된 콜백을 호출합니다.
- (선택사항) [콜백][loadhierarchycallback-api]에서 로드된 씬 루트를 나타내는 엔티티가 매개변수로 전달됩니다. 필요에 따라 이를 수정하거나 부모를 재설정할 수 있습니다. [씬을 추가적으로 로딩하기](#loading-scenes-additively) 예시에서는 관리하기 쉽도록 씬 루트를 현재 씬의 다른 엔티티로 부모를 재설정합니다.

`loadSceneSettings`

- 로드된 씬 설정을 애플리케이션에 적용합니다.
- `loadSceneSettings` 함수에 전달된 [콜백][loadsettingscallback-api]을 호출합니다.

기본적으로 `loadSceneHierarchy`는 항상 추가적으로 로드되며, 씬을 완전히 변경하려면 기존 로드된 씬을 제거/파괴하는 것은 개발자의 몫입니다.

이에 접근하는 여러 방법이 있으며 각각 장단점이 있습니다:

### 애플리케이션 루트 노드 아래의 모든 자식을 먼저 파괴하기

이 접근 방식은 현재 로드된 씬이 새 씬의 로딩과 생성 전에 파괴되는 위치를 관리하기 쉽게 만드는 개별 단계를 가집니다.

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

하지만 위에서 언급했듯이 `loadSceneHierarchy`를 호출하는 것과 씬 데이터가 실제로 로드되는 사이에 지연이 있습니다. 이는 네트워크 요청이 완료되기를 기다리는 동안 애플리케이션이 몇 프레임 동안 빈 화면을 렌더링할 것임을 의미하며, 이는 대안으로 이어집니다.

### 새 씬이 로드된 후 이전 씬 루트 엔티티 파괴하기

이는 새 씬 계층 구조가 계층 구조에 추가된 후 콜백에서 이전 씬 계층 구조가 파괴됨을 의미하며, 이는 네트워크에서 씬 데이터가 로드되는 동안 이전 씬이 존재하도록 보장합니다.

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

하지만 새 씬의 scriptType이 `initialize`와 `postInitialize`를 호출하는 동안 이전 씬이 계층 구조에 존재할 것입니다. 스크립트에서 로드된 유일한 씬 계층 구조라는 의존성이나 가정이 있다면 문제가 될 수 있습니다. 예를 들어 `initialize`에서 이름으로 엔티티를 검색하는데 이전 씬 계층 구조에도 같은 이름의 엔티티가 있는 경우입니다. 그러면 스크립트는 새 씬의 엔티티 대신 이전 씬 계층 구조의 엔티티에 대한 참조를 가지게 되어, 이전 씬의 계층 구조가 파괴된 후 예상치 못한 동작을 일으킬 수 있습니다.

이러한 잠재적 문제를 완화하기 위해 씬 데이터 로딩과 씬 계층 구조 생성을 분리할 수 있는 API인 [`SceneRegistry.loadSceneData`][loadscenedata-api]를 제공합니다.

## 씬에서 에셋 관리하기

씬에 대한 일반적인 질문은 씬에서 사용되는 에셋이 씬 로드의 일부로 로드되는지 여부입니다. OasisW에서는 에셋과 씬이 분리되어 있으며 별도로 로드해야 하므로 개발자에게 큰 유연성을 제공합니다.

권장되는 방법은 씬에서 필요한 모든 에셋에 씬 이름으로 태그를 지정하고, 씬을 로드할 때 먼저 에셋을 로드한 다음 모든 에셋이 로드된 후 씬 로딩을 시작하는 것입니다.

에셋 태그와 에셋 로딩에 대한 자세한 정보는 [이 페이지][asset-tags-loading]에서 찾을 수 있습니다.

[아래 예시 프로젝트][asset-load-for-scene-project]는 씬을 로드할 때 에셋을 로드하고 메인 메뉴로 돌아갈 때 언로드합니다.

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
