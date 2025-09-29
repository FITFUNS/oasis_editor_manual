---
title: 스크립팅 (Scripting)
---

스크립트는 OasisW에서 상호작용의 핵심입니다. 엔티티에 연결하여 동작을 정의하고, 사용자 입력을 처리하며, 게임 로직을 관리하고, 프로젝트에 생명을 불어넣는 재사용 가능한 코드 조각입니다.

## 스크립팅 시스템

OasisW는 다음 스크립팅 접근 방식을 지원합니다:

<!-- * **ESM Scripts** (`.mjs` files) - Modern ES Module-based scripts using class syntax. **Recommended for new projects.** -->
* **Classic Scripts** (`.js` files) - 프로토타입 기반 구문을 사용하는 원래 OasisW 스크립팅 시스템.

<!-- Both systems can coexist in the same project, allowing you to migrate gradually or use whichever approach fits your needs. -->

## 빠른 예제

엔티티를 회전시키는 간단한 스크립트입니다:

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

모든 OasisW 스크립트에 적용되는 핵심 개념들:

<!-- * [ESM Scripts](/user-manual/scripting/fundamentals/esm-scripts.md) - Modern scripting with ES Modules -->
* [시작하기](/user-manual/scripting/fundamentals/getting-started.md) - 기본 스크립트 구조와 구문
* [스크립트 라이프사이클](/user-manual/scripting/fundamentals/script-lifecycle.md) - 스크립트 메서드가 언제, 어떻게 호출되는지
* [스크립트 속성](/user-manual/scripting/fundamentals/script-attributes/index.md) - 구성 가능한 속성 노출
* [엔진 API 호출](/user-manual/scripting/fundamentals/engine-api.md) - 주요 클래스와 패턴
* [이벤트](/user-manual/scripting/fundamentals/events.md) - 스크립트 간 통신

<!-- ### [디버깅](/user-manual/scripting/debugging/index.md) -->

<!-- 스크립트 문제 해결을 위한 도구와 기법: -->

<!-- * [콘솔 로깅](/user-manual/scripting/debugging/console-logging.md) - 콘솔 출력을 통한 기본 디버깅 -->
<!-- * [브라우저 개발자 도구](/user-manual/scripting/debugging/browser-dev-tools.md) - 고급 디버깅 기법 -->

<!-- :::tip

OasisW 스크립팅이 처음이신가요? 기본을 배우기 위해 [시작하기](/user-manual/scripting/fundamentals/getting-started.md)부터 시작한 다음, 현대적인 접근 방식을 위해 [ESM Scripts](/user-manual/scripting/fundamentals/esm-scripts.md)를 탐색해보세요.

::: -->
