---
title: 스크립트 로딩 순서
---

## Classic 스크립트

일반적으로 모든 스크립트는 애플리케이션이 시작될 때 로드됩니다. 로드 순서는 **Settings** 에서 설정할 수 있습니다.

로딩 순서 패널에는 `preload`로 표시된 모든 Classic 스크립트와 각 스크립트가 로드되고 실행되는 순서가 표시됩니다.

![Loading Order List](/img/user-manual/scripting/loading-order-list.jpg)

각 스크립트는 클릭 후 드래그하여 순서를 변경할 수 있습니다.

스크립트는 로드되는 즉시 실행됩니다. 즉, **스크립트는 로드된 순서대로 처음 실행**됩니다. 다만, **스크립트 로딩 순서는 스크립트 컴포넌트 내부 메서드의 실행 순서에는 영향을 주지 않습니다.**

예를 들어, 동일한 엔티티에 여러 스크립트가 있을 경우 `initialize` 메서드는 **스크립트 로딩 순서가 아니라**, 엔티티에 나열된 스크립트 순서대로 호출됩니다.

### 프리로드

기본적으로 OasisW의 다른 에셋과 마찬가지로, 스크립트 에셋은 `preload`로 설정되어 있습니다. 이는 애플리케이션 시작 전에 해당 스크립트가 로드된다는 의미입니다.

스크립트의 `preload` 옵션을 비활성화하면, 해당 스크립트는 일반적인 상황에서는 로드되지 않습니다. 이 방식을 사용하면 프로젝트에 스크립트를 포함해 두되, 필요할 때만 로드하도록 제어할 수 있습니다.

`preload`가 비활성화된 스크립트는 일반적인 에셋 API를 사용해 동적으로 로드할 수 있습니다. (참고: [`AssetRegistry#load`](https://manual.oasisserver.link/engine/classes/AssetRegistry.html#load)).

스크립트 레지스트리의 동적 변경 사항을 감지하려면 다음과 같이 구독할 수 있습니다:

```javascript
this.app.scripts.on('add', (name, scriptType) => {
    console.log('script', name, 'has been loaded');
});
```

### 스크립트 병합

기본적으로 애플리케이션을 퍼블리시하거나 내보낼 때, preload로 설정된 모든 Classic 스크립트는 하나의 스크립트 파일로 병합됩니다.
이 방식은 여러 개의 스크립트 요청을 하나로 줄여 전체 로딩 시간을 최적화하는 데 도움이 됩니다.