---
title: WASM 모듈 (WASM Module)
---

WASM 모듈(WebAssembly 모듈이라고도 합니다)은 **웹을 위해 컴파일된 실행 가능한 코드**를 담고 있습니다. C나 C++ 같은 언어로 작성한 코드를 브라우저에서 빠르게 실행할 수 있게 해 줍니다.

WASM 모듈은 세 부분으로 구성됩니다.

- 바이너리 실행 파일
- JavaScript 글루 코드 파일
- 선택적 폴백 asm.js

이 파일들은 에셋 패널로 **끌어다 놓거나**, 에셋 패널 컨텍스트 메뉴에서 **업로드**를 선택해 프로젝트에 추가할 수 있습니다.

:::warning 지원 범위

OasisW 에디터는 현재 [Emscripten](https://emscripten.org/)으로 컴파일된 WASM 모듈만 지원합니다.

:::

:::note 이미 쓰고 있을지도 모릅니다

물리 엔진 `ammo.js`가 대표적인 WASM 모듈입니다. 프로젝트의 에셋 패널에서 `ammo.js` 폴더를 열어 보면 `ammo.js`(글루 코드) · `ammo.wasm.js`(글루 코드) · `ammo.wasm.wasm`(바이너리) 세 파일이 위 구성 그대로 들어 있는 것을 확인할 수 있습니다.

:::

## WASM 모듈 속성

파일이 프로젝트에 추가되면 WASM 모듈을 선택해 인스팩터 패널에서 속성을 확인할 수 있습니다.

![WASM 모듈 속성](/img/user-manual/assets/wasm-module.png)

### Name

이름은 **글루 스크립트와 폴백 스크립트에 정의된 모듈 이름과 일치해야 합니다.** 이 이름은 로드 시 모듈을 인스턴스화하는 데 사용됩니다.

### Glue script

WASM 코드를 실행하는 데 필요한 JavaScript 글루 코드입니다.

### Fallback script

WebAssembly가 지원되지 않을 때 사용할 **선택적** 폴백 asm.js 스크립트입니다.

## 관련 문서

- [물리 (Physics)](/user-manual/physics) — ammo.js WASM 모듈을 사용합니다.
- [박스에 물리 적용하기](/user-manual/physics)
