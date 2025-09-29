---
title: 엔티티 컴포넌트 시스템 (ECS)
sidebar_label: 엔티티 컴포넌트 시스템
---

OasisW는 애플리케이션의 객체들을 구성하고 관리하기 위해 **엔티티 컴포넌트 시스템 (ECS)** 을 사용합니다.  
이 디자인 패턴에서는:

- [**엔티티**](https://manual.oasisserver.link/engine/classes/Entity.html)는 컨테이너입니다 — 컴포넌트를 보유하지만 자체적인 동작은 없습니다.
- [**컴포넌트**](https://manual.oasisserver.link/engine/classes/Component.html)는 엔티티에 기능이나 데이터를 추가합니다.
- [**시스템**](https://manual.oasisserver.link/engine/classes/ComponentSystem.html)은 주어진 컴포넌트 타입의 모든 인스턴스를 관리합니다.

이 접근 방식은 다음을 제공합니다:

- **유연성** — 복잡한 동작을 구축하기 위해 컴포넌트를 조합하고 매칭할 수 있습니다.
- **모듈성** — 로직이 컴포넌트 내부에 캡슐화됩니다.
- **성능** — 시스템이 컴포넌트를 효율적인 배치로 처리합니다.
