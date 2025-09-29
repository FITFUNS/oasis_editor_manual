---
id: leaderboard
title: Leaderboard
sidebar_label: Leaderboard
---

# Leaderboard

Learn about OasisW's leaderboard system.

:::warning Note
**This feature requires a server entity to be created.**
:::

### OasisW Studio Leaderboard Creation Procedure

1. Visit [OasisW Studio](https://oasisserver.link/).

2. Click **Leaderboard** then click create new leaderboard.

![Server](/img/usage-guide/12_6.png)

3. You can check the newly created leaderboard in the leaderboard list.

![Server](/img/usage-guide/12_7.png)

### Editor Leaderboard Setup Procedure

1. In the **Hierarchy view**, click **Add Entity(+)** button → Select **Server Side → Leaderboard**.
    - Related templates and **leaderboard.js** file are automatically created in the Asset view.
    - **Leaderboard** is created under 2D Screen in the Hierarchy view.

![Server](/img/usage-guide/12_leaderboard.png)

2. Click **Leaderboard** → **Inspector view** → Select the leaderboard to use in **script**.

![Server](/img/usage-guide/12_8.png)

### Execution Procedure 

1. Click **Launch** in the **Toolbar**.

2. Click the **Leaderboard** button to check it.

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/usage-guide/12_1.png" alt="Image" style={{maxWidth: '45%'}} />
  <img src="/img/usage-guide/12_2.png" alt="Image" style={{maxWidth: '45%'}} />
</div>
<br />

3. When **adding score**, it is registered with the logged-in guest account.

![Server](/img/usage-guide/12_3.png)

### How to Apply Score

1. Apply a script containing a score registration function to an entity.

```javascript
pc.app.fire("leaderboardRecord:write", {score: 1000})
```

2. Code that registers score when Enter key is pressed.

```javascript
var ScoreSubmit = pc.createScript('scoreSubmit');

// initialize code called once per entity
ScoreSubmit.prototype.initialize = function() {
    // Example: Set to register score when Enter key is pressed
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
};

// Score registration event
ScoreSubmit.prototype.submitScore = function(score) {
    // Request to record score on leaderboard
    this.app.fire("leaderboardRecord:write", { score: score });
    console.log("Score registration request:", score);
};

// Key input detection example
ScoreSubmit.prototype.onKeyDown = function (event) {
    if (event.key === pc.KEY_ENTER) {
        // Register 1000 points when Enter key is pressed
        this.submitScore(1000);
    }
};
```

You can check the changed score when you press Enter.

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/usage-guide/12_4.png" alt="Image" style={{maxWidth: '45%'}} />
  <img src="/img/usage-guide/12_5.png" alt="Image" style={{maxWidth: '45%'}} />
</div>