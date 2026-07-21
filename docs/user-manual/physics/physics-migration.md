---
title: ammo.js 업데이트 (Updating ammo.js)
---

### 소개

OasisW는 이제 최신 버전의 ammo.js를 지원합니다.

새 버전에는 다음과 같은 장점이 있습니다:

- 기본 Bullet API의 더 많은 부분이 노출되었습니다
- ammo.js wasm 모듈에 대한 지원이 추가되었습니다
- wasm 버전은 더 작고 더 빠르게 실행됩니다

### 기존 프로젝트

wasm 모듈이 도입되기 전에 만든 프로젝트는 별도 조치가 없으면 예전(레거시) 버전의 ammo.js를 계속 씁니다. 이런 프로젝트를 최신 ammo.js로 옮길지 말지는 프로젝트 소유자가 직접 정하면 됩니다.

내 프로젝트가 레거시 버전을 쓰고 있는지 확인하려면 Scene Settings 패널로 이동하세요:

![Physics Legacy Settings](/img/user-manual/physics/physics-legacy-settings.png)

'Enable Physics' 항목이 보이지 않는다면 그 프로젝트는 새 방식이라서, 레거시 내장 버전을 쓸 옵션 자체가 없습니다.

반대로 'Enable Physics'가 체크되어 있다면, 빌드할 때 레거시 버전 ammo.js가 프로젝트에 조용히 추가되고 있다는 뜻입니다.

### 마이그레이션

최신 ammo.js로 바꾸려면 'Enable Physics' 체크를 해제하고 'Import Ammo'를 클릭하세요. 그러면 OasisW가 제공하는 최신 ammo.js가 Assets 패널로 들어옵니다.

만약 ammo.js를 업데이트한 뒤 프로젝트에 문제가 생긴다면 예전 버전으로 되돌려야 할 수도 있습니다. 이때는 프로젝트에 들어온 ammo.js 모듈을 삭제(또는 비활성화)하고 물리 체크박스를 다시 켜면 됩니다.

### 참고

프로젝트는 레거시 물리('Enable Physics' 체크박스)를 쓰거나, 아니면 ammo.js 모듈을 직접 포함해야 합니다. 다만 이 둘을 동시에 쓰면 안 됩니다!
