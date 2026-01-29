---
title: 네트워크 설정
sidebar_label: 네트워크
---

에셋 로딩 시 네트워크 재시도 동작을 설정합니다.

:::note

이 설정은 현재 활성화된 프로젝트 브랜치의 모든 사용자에게 적용됩니다.

:::

`NETWORK` 섹션으로 이동한 뒤 패널을 펼치세요:

![Network Settings](/img/user-manual/editor/interface/settings/network.webp)

사용 가능한 설정은 다음과 같습니다:

## 설정

| 설정 | 설명 |
| --- | --- |
| **Asset Retries** | 에셋 로딩에 실패했을 때 다시 시도하는 최대 횟수입니다. 에셋 요청이 실패하면 지수 백오프(exponential backoff) 방식으로 재시도가 수행됩니다. |

### 참고 사항

- 재시도 횟수를 높이면 네트워크 상태가 좋지 않은 환경에서도 안정성이 향상되지만, 오류가 사용자에게 표시되기까지 시간이 더 걸릴 수 있습니다.
