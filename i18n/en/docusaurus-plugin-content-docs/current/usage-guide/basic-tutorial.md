---
id: basic-tutorial
title: OasisW Manual - Basics
sidebar_label: Basics
---

# OasisW Manual - Basics

Learn OasisW's basic features step by step.

## Creating a New Project

### Step 1: Starting the Project
1. Launch the OasisW editor.
2. Enter a project name.
3. Select a folder path.
4. Choose a template.
5. Click the **Create Project** button.

### Step 2: Basic Scene Setup
- A default camera and lighting are automatically created.
- Check the Scene structure in the Hierarchy view.

## Creating a Ground Plane

### Step 1: Create Plane
1. Click **Add Entity** in the **Hierarchy view**.
2. Select **3D** → **Plane**.

### Step 2: Adjust Size
1. Adjust **Scale** values to set the size.
   - X: 10, Y: 1, Z: 10

### Step 3: Adjust Position
1. Adjust **Position** values.
   - Y: -1 (slightly below the ground plane)

## Materials

### Step 1: Create Box Object
1. In the **Hierarchy view**, select **Add Entity** → **3D** → **Box**.
2. Set Y value to 1 in **Position** to place it above the ground plane.

### Step 2: Create Material
1. Right-click in the **Asset view**.
2. Select **New Asset** → **Material**.
3. Change the material name to "BoxMaterial".

### Step 3: Set Color
1. Click the created material.
2. Change the color of **Diffuse** in the **Inspector view**.
3. Select your desired color (e.g., red).

### Step 4: Apply Material
1. Select Box in the **Hierarchy view**.
2. Drag and drop the material from **Asset view** to **Materials** in the **Inspector view**.

## Physics Movement

### Step 1: Apply Physics to Ground Plane
1. Select Plane in the **Hierarchy view**.
2. In the **Inspector view**, set **Add Component** → **Physics** → **Collision** → [**Half Extents**](/user-manual/scenes/components/collision#properties).
3. Add **Add Component** → **Physics** → **Rigid Body**.
4. Click **IMPORT AMMO**.

### Step 2: Apply Physics to Box
1. Select Box in the **Hierarchy view**.
2. Add **Add Component** → **Physics** → **Collision**.
3. Add **Add Component** → **Physics** → **Rigid Body**.
4. Change **Type** to **Dynamic**.

### Step 3: Test
1. Click **Launch** in the **Viewport**.
2. Verify that the Box falls and stops on the Plane.

## Templates

### Step 1: Create Template
1. Right-click Box in the **Hierarchy view**.
2. Click **Template** → **New Template**.
3. Enter a template name (e.g., "MyBox").

### Step 2: Use Template
1. Check the created template in the **Asset view**.
2. Drag and drop the template into the **Hierarchy view** to create an instance.
3. Create multiple identical Boxes.

### Step 3: Modify Instance
1. Select one instance.
2. Change **Position** or **Rotation**.
3. Verify that other instances are not affected.

## Adding Scripts

### Step 1: Create Script
1. Right-click in the **Asset view**.
2. Select **New Asset** → **Script**.
3. Enter a script name (e.g., "move-script").

### Step 2: Edit Script
1. Double-click the created script.
2. Check the default code:
```javascript
var MoveScript = pc.createScript('moveScript');

// initialize code called once per entity
MoveScript.prototype.initialize = function() {

};

// update code called every frame
MoveScript.prototype.update = function(dt) {

};
```

### Step 3: Implement Simple Movement
```javascript
var MoveScript = pc.createScript('moveScript');

MoveScript.prototype.initialize = function() {
    this.speed = 5;
};

MoveScript.prototype.update = function(dt) {
    var forward = this.app.keyboard.isPressed(pc.KEY_W);
    var backward = this.app.keyboard.isPressed(pc.KEY_S);
    var left = this.app.keyboard.isPressed(pc.KEY_A);
    var right = this.app.keyboard.isPressed(pc.KEY_D);
    
    var move = new pc.Vec3();
    if (forward) move.z -= 1;
    if (backward) move.z += 1;
    if (left) move.x -= 1;
    if (right) move.x += 1;
    
    if (move.length() > 0) {
        move.normalize().scale(this.speed);
        this.entity.translateLocal(move.x * dt, 0, move.z * dt);
    }
};
```

### Step 4: Apply Script
1. Select Box in the **Hierarchy view**.
2. In the **Inspector view**, select **Add Component** → **Script**.
3. Click **Add Script**.
4. Select the created script.

### Step 5: Test
1. Click **Launch** in the **Viewport**.
2. Verify Box movement with WASD keys.

<!-- ## Next Steps

You have learned all the basic features. Now let's create more complex projects:

- [Creating a Ball Rolling Game](../advanced/advanced-tutorial) -->