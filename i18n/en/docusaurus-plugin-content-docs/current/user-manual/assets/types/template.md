---
title: Template
---

A template (also called a prefab) is an asset that holds **part of an entity hierarchy**. It has a single root entity, under which you can place any number of child entities.

A template is a **reusable entity**. It can be created from code at runtime, or placed multiple times in a scene ahead of time. And **when you edit a template asset, every instance of that template changes with it.**

:::note Think of a cookie cutter

The template is the **cutter** that stamps out cookies, and the things placed in the scene are the **cookies** stamped from it. Change the shape of the cutter and not only future cookies but the ones already placed change too. This property is a huge help when you want to adjust the health of 100 enemy characters at once.

:::

## Creating a template

1. In the hierarchy, select the entity you want to turn into a template. Its children are included as well.
2. Right-click and choose the option to create a template.
3. An asset of type `Template` appears in the Assets Panel.

Uploading a `.glb` model file also creates a template automatically. See [Importing 3D Models](/user-manual/assets/models) for details.

## Instances and overrides

Dragging a template asset into the viewport or hierarchy creates an **instance**. If you edit only that instance, an `N Override` indicator appears at the top of the inspector along with the following buttons.

| Button | Action |
| --- | --- |
| `VIEW DIFF` | Shows what has changed compared to the original template. |
| `REVERT ALL` | Reverts your changes so the instance matches the original template again. |
| `APPLY ALL` | Applies your changes to the original template. This is **applied to all other instances** of the same template as well. |

:::warning Please be careful

`APPLY` **affects every instance.** If you want just this one to be different, leave it in the overridden state.

:::

## Related documentation

- Try out templates — A hands-on tutorial.
- [Importing 3D Models](/user-manual/assets/models) — How templates are created from models.
- [Entity Component System](/user-manual/ecs) — The basic concept of the entity hierarchy.
