---
id: template
title: Using Templates
sidebar_label: Using Templates
---

# Using Templates

Learn how to reuse identical game objects using templates in OasisW.

## What is a Template?

- Prevents repetitive creation of identical objects.
- Maintains consistent settings and properties.
- Enables rapid project development.
- Provides efficient asset management.

## Creating Templates

### Step 1: Select Object to Make into Template

1. Select the object to make into a template in the **Hierarchy view**.
2. Click **Template** → **New Template**.

![template](/img/tutorial/5_1.png)

### Step 2: Check Template

Objects made into templates are created in both **Hierarchy view** and **Asset view**.

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/tutorial/5_2.png" alt="Image" style={{maxWidth: '25%'}} />
  <img src="/img/tutorial/5_3.png" alt="Image" style={{maxWidth: '70%'}} />
</div>
<br />

## Using Templates

### Step 1: Create Template Instance

You can drag and drop template assets from **Asset view** into **Hierarchy view** or **Viewport** to place object instances in the scene.

![template](/img/tutorial/5_4.png)

### Step 2: Check Results

Click **Launch** in the **Viewport** to check the results.

![template](/img/tutorial/5_5.png)

## Template Instance Management

### Individual Instance Modification

Even if you change property values (Position, Rotation) of one template instance among multiple instances, it doesn't affect other instances.

![template](/img/tutorial/5_6.png)

### Template Instance Options

Template instances have **Template Instance** at the top of the **Inspector view**, and when changes occur to one object, **VIEW DIFF**, **REVERT ALL**, **APPLY ALL** buttons are created.

![template](/img/tutorial/5_7.png)

#### VIEW DIFF
When you click **VIEW DIFF** → **Apply to Box**, only the selected changes are applied to the original template and all template instances.

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/tutorial/5_8.png" alt="Image" style={{maxWidth: '55%'}} />
  <img src="/img/tutorial/5_9.png" alt="Image" style={{maxWidth: '35%'}} />
</div>

#### REVERT ALL
When you click **REVERT ALL**, it cancels the instance's changes and reverts to the same state as the original template.

![template](/img/tutorial/5_10.png)

#### APPLY ALL
When you click **APPLY ALL**, all changes are applied to the original template and all template instances.

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/tutorial/5_11.png" alt="Image" style={{maxWidth: '45%'}} />
  <img src="/img/tutorial/5_12.png" alt="Image" style={{maxWidth: '45%'}} />
</div>

