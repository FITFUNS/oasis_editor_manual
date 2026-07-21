---
title: 스크립팅 (Scripting)
---

스크립트는 OasisW에서 상호작용을 만드는 가장 핵심적인 도구입니다. 엔티티(화면 속 물체)에 붙여서 움직임을 정하고, 사용자의 입력을 받아 처리하고, 게임 규칙을 관리합니다. 한 번 만들어 두면 여러 곳에서 다시 쓸 수 있는 코드 조각이라, 프로젝트에 생동감을 불어넣어 줍니다.

## 스크립팅 시스템

OasisW에서는 다음과 같은 방식으로 스크립트를 작성할 수 있습니다:

<!-- * **ESM Scripts** (`.mjs` files) - Modern ES Module-based scripts using class syntax. **Recommended for new projects.** -->
* **Classic Scripts** (`.js` files) - OasisW가 처음부터 제공해 온 기본 스크립팅 방식으로, 프로토타입(prototype) 문법을 사용합니다.

<!-- Both systems can coexist in the same project, allowing you to migrate gradually or use whichever approach fits your needs. -->

## 빠른 예제

엔티티를 빙글빙글 돌리는 간단한 스크립트 예제입니다:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="classic" groupId='script-code'>
<!-- <TabItem value="esm" label="ESM (Recommended)">

```javascript
import { Script } from 'playcanvas';

export class Rotate extends Script {
    static scriptName = 'rotate';

    /** @attribute */
    speed = 10;

    update(dt) {
        this.entity.rotate(0, this.speed * dt, 0);
    }
}
```

</TabItem> -->
<TabItem value="classic" label="Classic">

```javascript
var Rotate = pc.createScript('rotate');

Rotate.attributes.add('speed', { type: 'number', default: 10 });

Rotate.prototype.update = function(dt) {
    this.entity.rotate(0, this.speed * dt, 0);
};
```

</TabItem>
</Tabs>

## 학습할 내용

### [기본 사항](/user-manual/scripting/fundamentals/index.md)

어떤 OasisW 스크립트를 만들든 꼭 알아 두어야 할 핵심 개념들입니다:

<!-- * [ESM Scripts](/user-manual/scripting/fundamentals/esm-scripts.md) - Modern scripting with ES Modules -->
* [시작하기](/user-manual/scripting/fundamentals/getting-started.md) - 스크립트의 기본 구조와 문법
* [스크립트 라이프사이클](/user-manual/scripting/fundamentals/script-lifecycle.md) - 스크립트 메서드가 언제, 어떤 순서로 실행되는지
* [스크립트 속성](/user-manual/scripting/fundamentals/script-attributes/index.md) - 값을 바꿀 수 있는 속성을 밖으로 드러내기
* [엔진 API 호출](/user-manual/scripting/fundamentals/engine-api.md) - 자주 쓰는 주요 클래스와 사용 패턴
* [이벤트](/user-manual/scripting/fundamentals/events.md) - 스크립트끼리 서로 신호를 주고받기

<!-- ### [디버깅](/user-manual/scripting/debugging/index.md) -->

<!-- 스크립트 문제 해결을 위한 도구와 기법: -->

<!-- * [콘솔 로깅](/user-manual/scripting/debugging/console-logging.md) - 콘솔 출력을 통한 기본 디버깅 -->
<!-- * [브라우저 개발자 도구](/user-manual/scripting/debugging/browser-dev-tools.md) - 고급 디버깅 기법 -->

<!-- :::tip

OasisW 스크립팅이 처음이신가요? 기본을 배우기 위해 [시작하기](/user-manual/scripting/fundamentals/getting-started.md)부터 시작한 다음, 현대적인 접근 방식을 위해 [ESM Scripts](/user-manual/scripting/fundamentals/esm-scripts.md)를 탐색해보세요.

::: -->
