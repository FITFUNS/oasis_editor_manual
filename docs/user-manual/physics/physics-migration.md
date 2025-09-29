---
title: ammo.js 업데이트 (Updating ammo.js)
---

### 소개

OasisW는 ammo.js의 최신 버전에 대한 지원을 추가했습니다.

새 버전에는 여러 가지 이점이 있습니다:

- 기본 Bullet API의 더 많은 부분이 노출되었습니다
- ammo.js wasm 모듈에 대한 지원이 추가되었습니다
- wasm 버전은 더 작고 더 빠르게 실행됩니다

### 기존 프로젝트

wasm 모듈 도입 이전에 생성된 프로젝트는 기본적으로 ammo.js의 레거시 버전을 계속 사용합니다. 프로젝트 소유자가 물리 시스템을 ammo.js의 최신 버전으로 마이그레이션하는 것은 프로젝트 소유자의 몫입니다.

프로젝트가 ammo.js의 레거시 버전을 사용하고 있는지 확인하려면 Scene Settings 패널로 이동하세요:

![Physics Legacy Settings](/img/user-manual/physics/physics-legacy-settings.png)

'Enable Physics'가 나타나지 않으면 프로젝트가 새 것이며 ammo.js의 레거시 내장 버전을 사용할 옵션이 없습니다.

그렇지 않고 'Enable Physics'가 체크되어 있으면 ammo.js의 레거시 버전이 빌드 시 프로젝트에 조용히 추가되고 있습니다.

### 마이그레이션

ammo.js의 최신 버전을 사용하려면 'Enable Physics'를 비활성화하고 'Import Ammo'를 클릭하세요. 이렇게 하면 OasisW에서 제공하는 ammo.js의 최신 버전이 Assets 패널로 가져와집니다.

ammo.js 업데이트가 프로젝트에 문제를 일으키는 경우 이전 버전으로 되돌려야 할 수 있습니다. 프로젝트의 ammo.js 모듈을 삭제(또는 비활성화)하고 물리 체크박스를 다시 활성화하여 이를 수행하세요.

### 참고

프로젝트는 레거시 물리( 'Enable Physics' 체크박스 사용)를 포함하거나 프로젝트에 ammo.js 모듈이 직접 포함되어야 하지만, 동시에 둘 다 포함되어서는 안 됩니다!
