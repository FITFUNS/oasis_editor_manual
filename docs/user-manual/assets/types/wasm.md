---
title: WASM 모듈 (WASM Module)
---

WASM 모듈(WebAssembly 모듈이라고도 함)은 웹을 위한 컴파일된 실행 가능한 코드를 포함합니다.

WASM 모듈은 세 부분으로 구성됩니다:

* 바이너리 실행 파일
* JavaScript 글루 코드 파일
* 선택적 폴백 asm.js

이러한 파일들은 Assets 패널로 파일을 드래그 앤 드롭하거나 Assets 패널 컨텍스트 메뉴에서 '업로드'를 선택하여 프로젝트에 추가할 수 있습니다.

OasisW 에디터는 현재 [Emscripten][2]으로 컴파일된 WASM 모듈만 지원합니다.

## WASM 모듈 속성

파일이 프로젝트에 추가되면 WASM 모듈을 선택하여 Inspector 패널에서 속성을 표시합니다:
![Wasm Module Properties](/img/user-manual/assets/wasm-module.png)

### Name

이름은 글루 및 폴백 스크립트에 정의된 모듈 이름과 일치해야 합니다. 이 이름은 로드 시 모듈을 인스턴스화하는 데 사용됩니다.

### Glue script

이는 WASM 코드를 실행하는 데 필요한 JavaScript 글루 코드입니다.

### Fallback script

이는 WebAssembly가 지원되지 않을 때 사용할 선택적 폴백 asm.js 스크립트입니다.

[2]: https://emscripten.org/
