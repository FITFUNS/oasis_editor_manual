---
title: 스크립트 로딩 순서
---

## Classic 스크립트

보통 모든 스크립트는 앱이 시작될 때 함께 로드됩니다. 어떤 순서로 로드할지는 **Settings** 에서 정할 수 있습니다.

로딩 순서 패널에는 `preload`로 표시된 Classic 스크립트가 모두 나오며, 각 스크립트가 로드되어 실행되는 순서를 보여 줍니다.

![Loading Order List](/img/user-manual/scripting/loading-order-list.jpg)

각 스크립트를 클릭한 채 끌어다 놓으면 순서를 바꿀 수 있습니다.

스크립트는 로드되자마자 실행됩니다. 즉, **로드된 순서대로 처음 실행**됩니다. 다만 **스크립트 로딩 순서가 스크립트 컴포넌트 안에 있는 메서드의 실행 순서까지 정하지는 않습니다.**

예를 들어 같은 엔티티에 여러 스크립트가 붙어 있으면, `initialize` 메서드는 **로딩 순서가 아니라** 엔티티에 나열된 스크립트 순서대로 호출됩니다.

### 프리로드

OasisW의 다른 에셋들처럼, 스크립트 에셋도 기본적으로 `preload`로 설정되어 있습니다. 이는 앱이 시작되기 전에 그 스크립트를 미리 로드해 둔다는 뜻입니다.

스크립트의 `preload` 옵션을 끄면, 그 스크립트는 평소에는 로드되지 않습니다. 이렇게 하면 스크립트를 프로젝트에 넣어 두되, 필요할 때만 골라서 로드하도록 직접 조절할 수 있습니다.

`preload`를 끈 스크립트는 일반적인 에셋 API로 필요할 때 직접 불러올 수 있습니다. (참고: [`AssetRegistry#load`](https://manual.oasisserver.link/engine/classes/AssetRegistry.html#load)).

스크립트 레지스트리가 실시간으로 바뀌는 것을 감지하려면 다음처럼 구독하면 됩니다:

```javascript
this.app.scripts.on('add', (name, scriptType) => {
    console.log('script', name, 'has been loaded');
});
```

### 스크립트 병합

앱을 퍼블리시하거나 내보낼 때, preload로 설정된 Classic 스크립트는 기본적으로 하나의 스크립트 파일로 합쳐집니다.
이렇게 하면 여러 번 나눠서 하던 스크립트 요청이 한 번으로 줄어, 전체 로딩 시간을 줄이는 데 도움이 됩니다.