---
title: Entity Component System (ECS)
sidebar_label: Entity Component System
---

OasisW uses an **Entity Component System (ECS)** to organize and manage objects in your application.  
In this design pattern:

- [**Entities**](https://manual.oasisserver.link/engine/classes/Entity.html) are containers — they hold components but have no behavior of their own.
- [**Components**](https://manual.oasisserver.link/engine/classes/Component.html) add functionality or data to entities.
- [**Systems**](https://manual.oasisserver.link/engine/classes/ComponentSystem.html) manage all instances of a given component type.

This approach provides:

- **Flexibility** — You can combine and match components to build complex behaviors.
- **Modularity** — Logic is encapsulated within components.
- **Performance** — Systems process components in efficient batches.
