---
title: 파티클 (Particles)
---

OasisW는 파티클 시스템을 만들고 편집하는 기능을 폭넓게 지원합니다.

## 파티클 시스템이란?

파티클 시스템은 각자 따로 움직이는 수많은 작은 입자(파티클)를 한꺼번에 관리하는 시뮬레이션입니다. 비, 눈, 연기, 불처럼 아주 많은 종류의 효과를 흉내 내는 데 쓸 수 있습니다.

파티클은 물리적으로 시뮬레이션되지 않습니다. 서로 부딪히거나 영향을 주지 않고, 씬의 표면도 그냥 통과해 버립니다.

## 파티클 시스템 생성

에디터의 3D 뷰에서 선택하지 않은 파티클 시스템은 다음 아이콘으로 나타납니다:

![Particle system icon](/img/user-manual/graphics/particles/particle_system_icon.png)

새 파티클 시스템을 만들려면 새 엔티티를 하나 만들고 거기에 파티클 시스템 컴포넌트를 추가하면 됩니다. 더 편하게, 에디터 메뉴에는 이 두 과정을 한 번에 해주는 항목도 있습니다:

![Particle system creation](/img/user-manual/graphics/particles/particle_system_create.png)

기본 설정으로 갓 만든 파티클 시스템은 다음과 같은 모습입니다:

![Default particle system](/img/user-manual/graphics/particles/particle_system_default.gif)

파티클 시스템 컴포넌트 인터페이스로 파티클 시스템을 설정하는 방법은 [여기][4]의 참조 문서를 확인하세요.

## 스크립트에서 파티클 시스템 트리거

특정 이벤트가 일어나거나 원하는 시점에만 파티클 시스템을 재생하고 싶을 때가 있습니다. 예를 들어 미사일이 목표에 맞았을 때 폭발이 재생되어야 하는 경우죠. 이렇게 하려면 먼저 파티클 시스템의 자동 재생 옵션을 꺼 두세요. 그런 다음 파티클 시스템 엔티티에 스크립트 컴포넌트를 붙이면 됩니다. 아래 두 줄이 파티클 시스템을 시작(또는 다시 시작)합니다:

```javascript
this.entity.particlesystem.reset();
this.entity.particlesystem.play();
```

## 소프트 파티클

소프트 파티클은 씬의 지오메트리와 맞닿는 부분 근처에서 서서히 사라지는(페이드아웃되는) 파티클입니다. [```depthSoftening```][5]으로 소프트 파티클을 켰다면, 파티클을 그리는 카메라에서 [깊이 맵][6] 렌더링도 켜져 있어야 합니다.

[4]: /user-manual/scenes/components/particlesystem
[5]: https://manual.oasisserver.link/engine/classes/ParticleSystemComponent.html#depthsoftening
[6]: /user-manual/graphics/cameras/depth-layer
