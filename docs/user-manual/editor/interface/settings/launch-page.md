---
title: 실행 페이지 설정
sidebar_label: 실행 페이지
---

**실행 페이지** 설정은 OasisW 에디터에서 프로젝트를 실행할 때, 그 프로젝트가 열리는 브라우저 쪽 기능을 조정하는 곳입니다.

:::note

이 설정은 현재 활성화된 프로젝트 브랜치의 모든 사용자에게 영향을 줍니다.

:::

`LAUNCH PAGE` 섹션으로 이동한 뒤 패널을 펼치세요:

![실행 페이지 설정](/img/user-manual/editor/interface/settings/launch-page.webp)

아래는 사용 가능한 설정에 대한 설명입니다:

## 설정

| 설정 | 설명 |
| --- | --- |
| **Enable SharedArrayBuffer** | SharedArrayBuffer 기능을 쓸 수 있도록, 실행 페이지에 필요한 HTTP 헤더를 자동으로 붙여 줍니다. |

### 참고 사항

- [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)는 여러 스레드를 쓰는 물리 연산 같은 일부 고급 기능에 필요합니다.
- 이 옵션을 켤 때는, 프로젝트를 올려 둔 호스팅 환경이 아래 HTTP 헤더를 제대로 내보내는지 꼭 확인하세요:
  - `Cross-Origin-Opener-Policy: same-origin`
  - `Cross-Origin-Embedder-Policy: require-corp`
