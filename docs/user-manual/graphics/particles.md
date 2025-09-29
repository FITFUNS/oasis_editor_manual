---
title: 파티클 (Particles)
---

OasisW는 파티클 시스템 생성 및 편집을 위한 포괄적인 지원을 제공합니다.

## 파티클 시스템이란?

파티클 시스템은 많은 독립적으로 움직이는 파티클을 관리하는 시뮬레이션입니다. 비, 눈, 연기, 불 등과 같은 엄청난 수의 효과를 근사하는 데 사용할 수 있습니다.

파티클은 물리적으로 시뮬레이션되지 않습니다. 서로 상호작용하거나 충돌하지 않습니다. 씬의 표면을 통과할 것입니다.

## 파티클 시스템 생성

에디터의 3D 뷰에서 선택되지 않은 파티클 시스템은 다음 아이콘으로 표시됩니다:

![Particle system icon](/img/user-manual/graphics/particles/particle_system_icon.png)

새 파티클 시스템을 생성하려면 새 엔티티를 만들고 파티클 시스템 컴포넌트를 추가하면 됩니다. 편의를 위해 에디터 메뉴에는 이를 한 번에 수행하는 항목이 있습니다:

![Particle system creation](/img/user-manual/graphics/particles/particle_system_create.png)

기본 설정으로 새로 생성된 파티클 시스템은 다음과 같습니다:

![Default particle system](/img/user-manual/graphics/particles/particle_system_default.gif)

파티클 시스템 컴포넌트 인터페이스를 통해 파티클 시스템을 구성하려면 [여기][4]의 참조를 확인하세요.

## 스크립트에서 파티클 시스템 트리거

때때로 특정 이벤트나 특정 시간에 파티클 시스템이 재생되기를 원할 수 있습니다. 예를 들어, 미사일이 목표에 도달했을 때 폭발이 재생되어야 합니다. 이를 위해 파티클 시스템의 자동 재생 옵션이 비활성화되어 있는지 확인하세요. 그런 다음 파티클 시스템 엔티티에 스크립트 컴포넌트를 연결하세요. 다음 두 줄이 파티클 시스템을 시작(또는 재시작)합니다:

```javascript
this.entity.particlesystem.reset();
this.entity.particlesystem.play();
```

## 소프트 파티클

소프트 파티클은 씬 지오메트리와의 교차점 근처에서 페이드아웃되는 파티클입니다. [```depthSoftening```][5]을 사용하여 소프트 파티클이 활성화된 경우, 파티클을 렌더링하는 카메라에 [깊이 맵][6] 렌더링이 활성화되어야 합니다.

[4]: /user-manual/scenes/components/particlesystem
[5]: https://manual.oasisserver.link/engine/classes/ParticleSystemComponent.html#depthsoftening
[6]: /user-manual/graphics/cameras/depth-layer
