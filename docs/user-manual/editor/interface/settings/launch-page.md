---
title: 실행 페이지 설정
sidebar_label: 실행 페이지
---

**실행 페이지** 설정은 OasisW 에디터에서 프로젝트를 실행할 때 사용되는 브라우저 수준의 기능을 제어합니다.

:::note

이 설정은 현재 활성화된 프로젝트 브랜치의 모든 사용자에게 영향을 줍니다.

:::

`LAUNCH PAGE` 섹션으로 이동한 뒤 패널을 펼치세요:

![실행 페이지 설정](/img/user-manual/editor/interface/settings/launch-page.webp)

아래는 사용 가능한 설정에 대한 설명입니다:

## 설정

| 설정 | 설명 |
| --- | --- |
| **Enable SharedArrayBuffer** | SharedArrayBuffer를 사용하기 위해 실행 페이지에 필요한 HTTP 헤더를 추가합니다. |

### 참고 사항

- [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)는 멀티스레드 물리 연산과 같은 일부 고급 기능에 필요합니다.
- 이 옵션을 활성화할 경우, 호스팅 환경에서 아래 HTTP 헤더가 올바르게 제공되는지 반드시 확인해야 합니다:
  - `Cross-Origin-Opener-Policy: same-origin`
  - `Cross-Origin-Embedder-Policy: require-corp`
