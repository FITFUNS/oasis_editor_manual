---
title: GSplat
---

The GSplat component enables an entity to render 3D Gaussian splats.

The GSplat component can be enabled or disabled using the toggle in the top-right of the component panel. When enabled, the 3D Gaussian splat referenced by the component is added to the scene and rendered.

![GSplat component](/img/user-manual/scenes/components/component-gsplat.png)

## Properties

| Property | Description |
|----------|-------------|
| Asset    | The GSplat asset to render in this GSplat component. Only a single GSplat asset can be assigned to a GSplat component. |
| Layers   | The [layers](/user-manual/graphics/layers) on which this element will be rendered. |

## Scripting Interface

You can control the GSplat component's properties using a [script component](/user-manual/scenes/components/script). The GSplat component's scripting interface is [here](https://manual.oasisserver.link/engine/classes/GSplatComponent.html).
