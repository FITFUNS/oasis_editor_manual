---
title: CSS
---

CSS 에셋은 CSS 코드를 담고 있습니다. 에디터에서 새 CSS 에셋을 만들거나, `.css` 확장자를 가진 파일을 업로드해 가져올 수 있습니다.

:::note 무엇에 쓰나요

OasisW의 3D 화면 자체를 CSS로 꾸미지는 않습니다. CSS 에셋은 게임 위에 겹쳐 놓는 **HTML 기반 UI**(점수판, 메뉴, 팝업 등)의 모양을 정하는 데 씁니다. [HTML 에셋](/user-manual/assets/types/html)과 짝을 이루어 사용하는 경우가 많습니다.

:::

## 만들기와 편집

1. 에셋 패널의 **+** 버튼을 누르고 **CSS**를 선택합니다. 또는 `.css` 파일을 끌어다 놓습니다.
2. CSS 에셋을 편집하려면 에디터에서 **마우스 오른쪽 클릭** 후 **편집(Edit)**을 선택합니다. 인스팩터의 **EDIT** 버튼을 눌러도 됩니다.
3. 코드 편집기에서 내용을 고치고 저장합니다.

## 스크립트에서 사용하기

로드된 CSS 에셋의 리소스는 **단순한 문자열**입니다. 이 문자열을 원하는 대로 쓸 수 있습니다. 문서에 스타일로 붙이는 가장 일반적인 방법은 다음과 같습니다.

```javascript
// ID로 레지스트리에서 에셋 가져오기
const asset = this.app.assets.get(32);

// 요소 생성
const style = document.createElement('style');
style.type = "text/css";
style.textContent = asset.resource || '';
document.head.appendChild(style);

// 에셋의 리소스가 로드/변경될 때 스타일 업데이트
asset.on('load', function() {
    style.innerHTML = asset.resource;
});

// 에셋이 로드되도록 보장
this.app.assets.load(asset);
```

맨 위의 `32`는 에셋의 `ID`입니다. 인스팩터에서 확인한 실제 ID로 바꿔 넣으십시오. ID 대신 이름으로 찾으려면 `this.app.assets.find('내파일.css')`를 쓸 수도 있습니다.

:::tip 코드 설명

중간의 `asset.on('load', …)`는 **에셋이 나중에 도착하거나 내용이 바뀌었을 때** 스타일을 다시 반영하기 위한 것입니다. 마지막 줄의 `this.app.assets.load(asset)`는 아직 로드되지 않았다면 지금 불러오라는 뜻입니다. [사전 로드](/user-manual/assets/preloading-and-streaming)를 꺼 둔 에셋에서는 이 줄이 반드시 필요합니다.

:::

## 관련 문서

- [HTML](/user-manual/assets/types/html) — 함께 쓰는 마크업 에셋입니다.
- [스크립트 추가하기](/user-manual/scripting/fundamentals/getting-started) — 위 코드를 넣을 스크립트를 만듭니다.
