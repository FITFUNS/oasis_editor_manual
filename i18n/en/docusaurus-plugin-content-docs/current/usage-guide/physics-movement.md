---
id: physics-movement
title: Setting Up Physics Movement
sidebar_label: Setting Up Physics Movement
---

# Setting Up Physics Movement

Learn how to use the physics engine in OasisW to implement object movement and interactions.

## Applying Physics to Ground

### Step 1: Add Collision Component

1. Click Plane in the **Hierarchy view** → Click **Add Component** in the **Inspector view**.
2. Add **Physics** → **Collision**.

![physics](/img/tutorial/4_1.png)

### Step 2: Set Half Extents

Set the collision range with [**Half Extents**](/user-manual/scenes/components/collision#properties).

![physics](/img/tutorial/4_2.png)

### Step 3: Add Rigid Body Component

1. Click **Add Component** in the **Inspector view**.
2. Add **Physics** → **Rigid Body**.

![physics](/img/tutorial/4_3.png)

### Step 4: Import AMMO.js

Click the **IMPORT AMMO** button to check the automatically created ammo.js folder in the **Asset view**.

![physics](/img/tutorial/4_5.png)

## Applying Physics to Moving Objects

### Step 1: Add Collision and Rigid Body

Add **Collision** and **Rigid Body** to moving objects as well.

### Step 2: Set Rigid Body Type

Change the **Type** of **Rigid Body** to **Dynamic**.

![physics](/img/tutorial/4_6.png)

### Step 3: Check Results

Click **Launch** in the **Viewport** to verify that the Box object falls down and stops when it touches the Plane object.

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/tutorial/4_7.png" alt="Image" style={{maxWidth: '45%'}} />
  <img src="/img/tutorial/4_8.png" alt="Image" style={{maxWidth: '45%'}} />
</div>
<br />
