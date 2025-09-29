---
title: User Interface Basics
---

User interfaces in OasisW are made up of two elements. The [Screen Component][1] describes the area that contains all user interface elements, and multiple entities with [Element Components][2] are connected in the hierarchy below the screen entity. The screen defines the area and how the user interface is rendered (in 2D space or in the 3D world). Elements make up the images and text components of the interface.

## Layout and Positioning

One of the big differences between regular entities and entities using element components as part of a screen is how they are positioned relative to their parent. Element components have two properties that change how the final position is calculated. The `anchor` property determines how the child is positioned relative to the parent, and the `pivot` property determines where the center point of the element is. Learn more on the [Elements][3] page.

## Drawing Order

The graphical parts of the user interface, image and text elements, are drawn in the order they appear in the hierarchy. That is, the first child is drawn first, then its child, and so on. Children drawn later appear on top of children drawn earlier.

To change the drawing order, reorder the entities in the editor hierarchy. You can reorder elements programmatically by calling `entity.reparent(...)`. However, this causes the drawing order to be recalculated for the entire screen component.

## Element 9-slicing

9-slicing (or 9-patch) is a graphics technique for creating scalable user interface elements from bitmap graphics. 9-slicing can be set up using texture atlases and sprite assets. [Learn more][5].

## Input

There is an additional way to handle input for UI elements. An instance of `pc.ElementInput` is provided on the application object, typically accessible as `this.app.elementInput`. This allows you to receive input directly on element components. For example: `this.entity.element.on('click', ...)`. Learn more on the [Input][4] page.

<!-- ## Localization

OasisW has a built-in localization system that supports localized text elements. Learn more [here][6]. -->

[1]: /user-manual/user-interface/screens
[2]: /user-manual/user-interface/elements
[3]: /user-manual/user-interface/elements
[4]: /user-manual/user-interface/input
[5]: /user-manual/2D/slicing
[6]: /user-manual/user-interface/localization
