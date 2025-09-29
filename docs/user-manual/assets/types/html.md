---
title: HTML
---

HTML 에셋은 HTML 코드를 포함합니다. 코드는 전체 HTML 페이지이거나 부분 HTML일 수 있습니다. 에디터에서 새 HTML 에셋을 만들거나 .html 확장자가 있는 파일을 업로드할 수 있습니다.

HTML 에셋을 편집하려면 에디터에서 우클릭하고 편집을 선택하세요.

로드된 HTML 에셋은 단순한 문자열입니다. 원하는 대로 해당 문자열을 사용할 수 있습니다 - HTML을 문서에 추가하는 일반적인 방법은 다음과 같습니다:

```javascript
// ID로 레지스트리에서 에셋 가져오기
const asset = this.app.assets.get(32);

// 요소 생성
const div = document.createElement('div');
div.innerHTML = asset.resource || '';
document.body.appendChild(div);

// 에셋 리소스가 로드/변경될 때
// 요소의 HTML 업데이트
asset.on('load', function() {
    div.innerHTML = asset.resource;
});

// 에셋이 로드되도록 보장
this.app.assets.load(asset);
```
