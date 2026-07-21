---
title: HTML
---

HTML 에셋은 HTML 코드를 담고 있습니다. 코드는 **전체 HTML 페이지**일 수도 있고 **일부분**일 수도 있습니다. 에디터에서 새 HTML 에셋을 만들거나 `.html` 확장자를 가진 파일을 업로드할 수 있습니다.

HTML 에셋을 편집하려면 에디터에서 **마우스 오른쪽 클릭** 후 **편집(Edit)**을 선택하십시오.

## 스크립트에서 사용하기

로드된 HTML 에셋은 **단순한 문자열**입니다. 그 문자열을 원하는 대로 쓸 수 있습니다. 문서에 붙이는 가장 일반적인 방법은 다음과 같습니다.

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

`32`는 에셋의 `ID`이므로 인스팩터에서 확인한 실제 값으로 바꿔 넣으십시오.

:::tip CSS와 함께 쓰기

이렇게 붙인 HTML은 게임 화면 **위에 겹쳐지는 일반 웹 요소**입니다. 모양을 다듬으려면 [CSS 에셋](/user-manual/assets/types/css)을 같은 방식으로 문서에 넣으십시오. 점수판이나 메뉴처럼 3D와 무관한 UI를 만들 때 편리한 조합입니다.

:::

:::warning 주의하시기 바랍니다

HTML 요소는 3D 화면 위에 떠 있으므로 **마우스 클릭을 가로챌 수 있습니다.** 게임 조작이 안 먹는다면 겹쳐 둔 요소가 원인일 수 있습니다. 필요한 경우 CSS의 `pointer-events: none`으로 클릭을 통과시키십시오.

:::

## 관련 문서

- [CSS](/user-manual/assets/types/css) — HTML의 모양을 정합니다.
- [사용자 인터페이스](/user-manual/user-interface) — 엔진 내부 UI 시스템입니다.
