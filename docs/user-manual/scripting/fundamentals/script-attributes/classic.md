---
title: 클래식 참조 (Classic Reference)
---

<!-- :::note

이 페이지는 더 이상 사용되지 않는 **클래식 스크립트** 시스템의 스크립트 속성을 문서화합니다.

For **ESM Script Attributes**, click [here](./esm.md).

::: -->

스크립트 속성은 스크립트 파일의 값을 노출하여 OasisW 에디터에 표시되게 하는 강력한 기능입니다. 이는 코드를 한 번 작성한 다음, 엔티티의 다른 인스턴스에서 값을 조정하여 다른 속성을 부여할 수 있음을 의미합니다. 이는 아티스트, 디자이너 또는 다른 비프로그래머 팀 멤버가 코드를 작성하지 않고도 값을 조정하고 수정할 수 있도록 속성을 노출하는 데 완벽합니다.

## 스크립트 속성 선언

스크립트 속성은 다음 형식을 사용하여 스크립트 파일의 상단에 선언됩니다:

```javascript
var MyScript = pc.createScript('myScript');

MyScript.attributes.add('speed', {
    type: 'number',
    default: 80
});
```

이 예제에서 우리는 `number` 타입이고 기본값이 `80`인 `speed`라는 속성을 선언하고 있습니다:

속성 배열이 필요하다면 다음과 같이 `array: true`를 설정하세요:

```javascript
var MyScript = pc.createScript('myScript');

MyScript.attributes.add('names', {
    type: 'string',
    array: true
});
```

## 에디터에서 속성 가져오기

![Script Attributes](/img/user-manual/scripting/script-attributes.png)

속성을 선언한 후 에디터가 스크립트 속성을 노출하기 위해 코드를 파싱해야 합니다. 속성이 변경된 경우 파싱 버튼을 클릭하여 속성을 수동으로 새로고침해야 합니다.

![Parse Button](/img/user-manual/scripting/script-parse-button.png)

## 코드에서 속성 접근

스크립트에서 속성을 선언하면 스크립트 인스턴스의 멤버 변수로 사용할 수 있습니다. 예를 들어, 위에서 선언한 `speed` 속성은 `this.speed`로 사용할 수 있습니다.

```javascript
MyScript.prototype.update = function (dt) {
    this.entity.translate(this.speed * dt, 0, 0);
}
```

## 속성 업데이트

에디터에서 속성을 수정하면 변경사항이 에디터에서 실행된 애플리케이션의 모든 복사본에 전송됩니다. 이는 애플리케이션을 다시 로드하지 않고도 속성을 실시간으로 편집할 수 있음을 의미합니다. 속성이 변경될 때 특별한 동작을 적용해야 하는 경우 `attr` 및 `attr:[name]` 이벤트를 사용하여 변경사항에 반응하세요.

```javascript
MyScript.prototype.initialize = function () {
    // `speed` 속성에 대해서만 발생
    this.on('attr:speed', function (value, prev) {
        // speed의 새로운 값
    });

    // 모든 속성 변경에 대해 발생
    this.on('attr', function(name, value, prev) {
        // 새로운 속성 값
    });
}
```

## 속성 타입

속성을 선언할 때 속성의 타입도 선언합니다. 이를 통해 에디터가 속성을 편집하기 위한 관련 컨트롤을 표시할 수 있습니다. 대부분의 타입은 자명합니다. 예를 들어, 'boolean', 'number' 또는 'string'입니다. 하지만 일부는 아래 예제에서 추가 설명이 필요합니다. 자세한 내용은 [전체 속성 참조][3]를 참조하세요.

### Entity 속성

```javascript
MyScript.attributes.add('target', { type: 'entity' })
```

Entity 타입을 사용하면 계층 구조의 다른 엔티티를 참조할 수 있습니다. 두 엔티티를 연결하는 좋은 방법입니다.

### Asset 속성

```javascript
MyScript.attributes.add('textures', { type: 'asset', assetType: 'texture', array: true });
```

Asset 속성을 사용하면 스크립트에서 프로젝트 에셋을 참조할 수 있습니다. Asset 속성은 특정 타입의 에셋(예: 'texture', 'material', 'model')으로 속성을 제한하는 `assetType` 속성도 지원합니다.

Asset 속성의 런타임 타입은 `pc.Asset`입니다. 런타임에 Asset 속성의 리소스를 다음과 같이 참조할 수 있습니다:

```javascript
MyScript.attributes.add('texture', {type: 'asset', assetType: 'texture'});

MyScript.prototype.initialize = function () {
    console.log('This is the texture asset', this.texture);
    console.log('This is the texture resource', this.texture.resource);
};
```

### Color 속성

```javascript
MyScript.attributes.add('color', { type: 'rgba' });
```

Color 속성은 에디터에서 노출될 때 색상 선택기를 표시합니다. 알파 채널도 노출할지 여부에 따라 `rgb`와 `rgba` 두 가지 옵션이 있습니다.

### Curve 속성

```javascript
MyScript.attributes.add('wave', { type: 'curve' }); // 하나의 곡선
MyScript.attributes.add('wave', { type: 'curve', curves: [ 'x', 'y', 'z' ] }); // 세 개의 곡선: x, y, z
MyScript.attributes.add('wave', { type: 'curve', color: 'r' }); // 빨간색 채널용 하나의 곡선
MyScript.attributes.add('wave', { type: 'curve', color: 'rgba' }); // 알파를 포함한 전체 색상용 네 개의 곡선
```

Curve 속성은 시간에 따라 변하는 값을 표현하는 데 사용됩니다. 모든 곡선은 0.0 - 1.0 기간에 걸쳐 정의됩니다. 예를 들어 곡선에서 3D 위치를 원한다면 `curves` 속성을 사용하여 x, y, z에 대한 세 개의 곡선을 정의할 수 있습니다. `color` 속성을 사용하여 색상을 수정하는 특별한 곡선 에디터도 있습니다.

### Enumeration 속성

Enumeration 속성을 사용하면 사용 가능한 옵션 중 하나를 선택할 수 있습니다:

```javascript
MyScript.attributes.add('value', {
    type: 'number',
    enum: [
        { 'valueOne': 1 },
        { 'valueTwo': 2 },
        { 'valueThree': 3 }
    ]
});
```

enum 속성을 사용하여 열거형의 가능한 값 목록을 선언하세요. 속성은 객체 배열이며, 각 객체는 `key`가 옵션의 제목이고 `value`가 속성의 값인 옵션입니다. 이 속성은 `number`, `string` 등 다양한 속성 타입에 사용할 수 있습니다.

### JSON 속성

JSON 속성을 사용하면 다른 속성 타입의 중첩된 속성을 생성할 수 있습니다. 모든 JSON 속성에 대해 해당 속성을 설명하는 스키마를 지정해야 합니다. 스키마에는 위와 같은 다른 일반 스크립트 속성 정의가 포함됩니다. 예를 들어:

```javascript
MyScript.attributes.add('gameConfig', {
    type: 'json',
    schema: [{
        name: 'numEnemies',
        type: 'number',
        default: 10
    }, {
        name: 'enemyModels',
        type: 'asset',
        assetType: 'model',
        array: true
    }, {
        name: 'godMode',
        type: 'boolean',
        default: false
    }]
});
```

편집 가능한 객체의 배열을 생성할 수 있도록 JSON 속성의 배열을 선언할 수도 있습니다. 다른 속성 타입에서와 같이 JSON 속성을 정의할 때 `array: true`를 추가하기만 하면 됩니다.

다음은 스크립트에서 위의 속성에 접근하는 예제입니다:

```javascript
MyScript.prototype.update = function (dt) {
    if (this.gameConfig.godMode) {
        for (var i = 0; i < this.gameConfig.numEnemies; i++) {
            // ...
        }
    }
};
```

:::note

현재 다른 JSON 속성의 자식으로 JSON 속성을 정의하는 것은 지원하지 않습니다. JSON 속성을 정의할 때는 1단계 깊이까지만 가능합니다.

:::

[3]: https://manual.oasisserver.link/engine/classes/ScriptAttributes.html