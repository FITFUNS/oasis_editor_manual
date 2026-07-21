---
title: 클래식 참조 (Classic Reference)
---

<!-- :::note

이 페이지는 더 이상 사용되지 않는 **클래식 스크립트** 시스템의 스크립트 속성을 문서화합니다.

For **ESM Script Attributes**, click [here](./esm.md).

::: -->

스크립트 속성은 스크립트 파일 안의 값을 밖으로 열어 OasisW 에디터에 표시되게 하는 강력한 기능입니다. 즉, 코드는 한 번만 작성해 두고, 엔티티의 인스턴스마다 값만 바꿔 서로 다른 특성을 줄 수 있습니다. 그래서 아티스트, 디자이너처럼 코드를 직접 다루지 않는 팀원도 코드를 건드리지 않고 값을 조절하고 수정할 수 있습니다.

## 스크립트 속성 선언

스크립트 속성은 스크립트 파일 맨 위쪽에서 다음과 같은 형식으로 선언합니다:

```javascript
var MyScript = pc.createScript('myScript');

MyScript.attributes.add('speed', {
    type: 'number',
    default: 80
});
```

이 예제에서는 `speed`라는 속성을 선언했는데, 타입은 `number`이고 기본값은 `80`입니다:

값을 여러 개 담는 속성 배열이 필요하다면, 다음처럼 `array: true`를 넣어 주세요:

```javascript
var MyScript = pc.createScript('myScript');

MyScript.attributes.add('names', {
    type: 'string',
    array: true
});
```

## 에디터에서 속성 가져오기

![Script Attributes](/img/user-manual/scripting/script-attributes.png)

속성을 선언한 뒤에는, 에디터가 그 속성을 화면에 보여 주려면 먼저 코드를 읽어(파싱) 들여야 합니다. 속성을 바꾼 경우에는 파싱 버튼을 눌러 속성을 직접 새로고침해 주어야 합니다.

![Parse Button](/img/user-manual/scripting/script-parse-button.png)

## 코드에서 속성 접근

스크립트에서 속성을 선언하면, 그 속성은 스크립트 인스턴스의 멤버 변수처럼 쓸 수 있습니다. 예를 들어 위에서 선언한 `speed` 속성은 `this.speed`로 접근할 수 있습니다.

```javascript
MyScript.prototype.update = function (dt) {
    this.entity.translate(this.speed * dt, 0, 0);
}
```

## 속성 업데이트

에디터에서 속성을 바꾸면, 그 변경사항이 에디터로 실행 중인 애플리케이션의 모든 복사본에 전달됩니다. 덕분에 애플리케이션을 다시 로드하지 않고도 속성을 실시간으로 편집할 수 있습니다. 속성이 바뀔 때 특별한 처리를 하고 싶다면, `attr` 및 `attr:[name]` 이벤트를 사용해 변경에 반응하세요.

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

속성을 선언할 때는 그 속성의 타입도 함께 정합니다. 타입을 알려 주면 에디터가 그 값을 편집하기에 알맞은 컨트롤을 보여 줄 수 있습니다. 대부분의 타입은 이름만 봐도 뜻이 분명합니다. 예를 들어 'boolean', 'number', 'string'이 그렇습니다. 하지만 몇몇 타입은 아래 예제처럼 조금 더 설명이 필요합니다. 더 자세한 내용은 [전체 속성 참조][3]를 확인하세요.

### Entity 속성

```javascript
MyScript.attributes.add('target', { type: 'entity' })
```

Entity 타입을 쓰면 계층 구조 안의 다른 엔티티를 가리킬 수 있습니다. 두 엔티티를 서로 연결하기에 좋은 방법입니다.

### Asset 속성

```javascript
MyScript.attributes.add('textures', { type: 'asset', assetType: 'texture', array: true });
```

Asset 속성을 쓰면 스크립트에서 프로젝트의 에셋을 가리킬 수 있습니다. Asset 속성은 `assetType` 옵션도 지원하는데, 이것으로 속성을 특정 종류의 에셋(예: 'texture', 'material', 'model')으로만 제한할 수 있습니다.

Asset 속성의 실행 중 타입은 `pc.Asset`입니다. 실행 중에는 Asset 속성이 가진 실제 리소스를 다음처럼 가져올 수 있습니다:

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

Color 속성은 에디터에 열리면 색상 선택기를 보여 줍니다. 알파 채널까지 함께 다룰지에 따라 `rgb`와 `rgba` 두 가지 중에 고를 수 있습니다.

### Curve 속성

```javascript
MyScript.attributes.add('wave', { type: 'curve' }); // 하나의 곡선
MyScript.attributes.add('wave', { type: 'curve', curves: [ 'x', 'y', 'z' ] }); // 세 개의 곡선: x, y, z
MyScript.attributes.add('wave', { type: 'curve', color: 'r' }); // 빨간색 채널용 하나의 곡선
MyScript.attributes.add('wave', { type: 'curve', color: 'rgba' }); // 알파를 포함한 전체 색상용 네 개의 곡선
```

Curve 속성은 시간이 지나면서 변하는 값을 나타낼 때 씁니다. 모든 곡선은 0.0부터 1.0까지의 구간에 걸쳐 정의됩니다. 예를 들어 곡선으로 3D 위치를 표현하고 싶다면, `curves` 옵션을 써서 x, y, z용 곡선 세 개를 정의할 수 있습니다. 또한 `color` 옵션을 쓰면 색을 다루는 전용 곡선 에디터도 사용할 수 있습니다.

### Enumeration 속성

Enumeration 속성을 쓰면 미리 정해 둔 옵션들 중에서 하나를 고르게 할 수 있습니다:

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

`enum` 옵션으로 고를 수 있는 값 목록을 선언하세요. 이 옵션은 객체들의 배열인데, 각 객체는 하나의 선택지를 나타냅니다. 여기서 `key`는 화면에 보이는 옵션 이름이고, `value`는 실제로 속성에 들어갈 값입니다. 이 옵션은 `number`, `string` 등 여러 속성 타입에 함께 쓸 수 있습니다.

### JSON 속성

JSON 속성을 쓰면 여러 속성 타입을 한데 묶은 중첩 속성을 만들 수 있습니다. 모든 JSON 속성에는 그 안의 내용을 설명하는 스키마를 반드시 지정해야 합니다. 스키마 안에는 위에서 본 것과 같은 일반 스크립트 속성 정의들이 들어갑니다. 예를 들어:

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

편집할 수 있는 객체들의 배열을 만들고 싶다면 JSON 속성도 배열로 선언할 수 있습니다. 다른 속성 타입에서와 똑같이, JSON 속성을 정의할 때 `array: true`만 추가하면 됩니다.

다음은 스크립트에서 위 속성에 접근하는 예제입니다:

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

지금은 JSON 속성 안에 또 다른 JSON 속성을 자식으로 넣는 것은 지원하지 않습니다. JSON 속성은 한 단계 깊이까지만 정의할 수 있습니다.

:::

[3]: https://manual.oasisserver.link/engine/classes/ScriptAttributes.html
