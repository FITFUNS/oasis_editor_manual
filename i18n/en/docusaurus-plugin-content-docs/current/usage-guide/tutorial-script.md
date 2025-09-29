---
id: tutorial-script
title: Tutorial Scripts
sidebar_label: Tutorial Scripts
---

# Tutorial Scripts

Learn the basics of game development through various script examples provided by OasisW.

## Player Controller

<!-- Basic script for moving player using WASD keys. -->

```javascript
var Player = pc.createScript("player");

Player.attributes.add("speed", {
  type: "number",
  default: 10,
});
Player.attributes.add("modelEntity", {
  type: "entity",
});

Player.prototype.initialize = function () {
  this._anim = this.modelEntity.anim;
  this._angle = 0;

  this._frameMovement = new pc.Vec3();
};

Player.prototype.update = function (dt) {
  this._frameMovement.set(0, 0, 0);

  const keyboard = this.app.keyboard;

  if (keyboard.isPressed(pc.KEY_A)) this._frameMovement.x += 1;
  if (keyboard.isPressed(pc.KEY_D)) this._frameMovement.x -= 1;
  if (keyboard.isPressed(pc.KEY_W)) this._frameMovement.z += 1;
  if (keyboard.isPressed(pc.KEY_S)) this._frameMovement.z -= 1;

  if (this._frameMovement.x !== 0 || this._frameMovement.z !== 0) {
    this._frameMovement.normalize().scale(this.speed * dt);
    this.entity.rigidbody.applyForce(this._frameMovement);

    this._anim.setFloat("Speed", this.entity.rigidbody.linearVelocity.length());

    const newAngle =
      90 -
      Math.atan2(this._frameMovement.z, this._frameMovement.x) *
        pc.math.RAD_TO_DEG;
    this._angle = pc.math.lerpAngle(this._angle, newAngle, 0.4) % 360;
    this.modelEntity.setEulerAngles(0, this._angle, 0);
  } else {
    this._anim.setFloat("Speed", 0);
  }
};
```

## Mushroom Creation

<!-- Mushroom trigger script. -->

```javascript
var Mushroom = pc.createScript("mushroom");

Mushroom.prototype.initialize = function () {
  this.entity.collision.on("triggerenter", this.onTriggerEnter, this);
};

Mushroom.prototype.onTriggerEnter = function (entity) {
  this.app.fire("mushroom");
  this.entity.destroy();
};
```

## Game Manager Script

```javascript
// game-manager.js — Global instance + Authentication event only on first mushroom
var GameManager = pc.createScript("gameManager");

GameManager.attributes.add("playerMaxTime", {
  type: "number",
  default: 10,
  title: "Max Time (s)",
});
GameManager.attributes.add("addBonusTime", {
  type: "number",
  default: 2,
});
GameManager.attributes.add("mapBounds", {
  type: "vec3",
  default: [11, 0, 11],
  title: "Map Bounds (x,z)",
});
GameManager.attributes.add("collectableTemplate", {
  type: "asset",
  assetType: "template",
  title: "Collectable Template",
});

GameManager.prototype.initialize = function () {
  GameManager.instance = this;

  this._round = false;
  this._playing = false;
  this._playerTime = 0;

  this._authSent = false;

  this.app.on("mushroom", this._onCollected, this);
  this.app.on("ui:restartRound", this._startRound, this);

  this._startRound();

  this.app.root.findByName("MushRoom").setPosition(0, 0, 3);
};

GameManager.prototype.update = function (dt) {
  if (!this._playing) return;

  this._playerTime -= dt;
  if (this._playerTime <= 0) {
    this._playing = false;
    this._round = false;
    this.app.fire("roundOver");
  }
};

GameManager.prototype._startRound = function () {
  if (this._round) return;

  this._round = true;
  this._playing = false;
  this._playerTime = this.playerMaxTime;
  this._authSent = false;
  this.app.fire("roundStart");
  // Uncomment if you want to spawn at start as well
  // this._spawnCollectable();
};

GameManager.prototype._onCollected = function () {
  // ✅ Authentication event only on "first" mushroom after game starts
  if (!this._authSent) {
    this._authSent = true;
    this.app.fire("oasisw:authenticate:guest", new pc.Entity());
  }

  if (!this._round) this._startRound();

  this._playing = true;
  this._playerTime = Math.min(
    this._playerTime + this.addBonusTime,
    this.playerMaxTime
  );

  this._spawnCollectable();
};

GameManager.prototype._spawnCollectable = function () {
  var x = (Math.random() - 0.5) * this.mapBounds.x;
  var z = (Math.random() - 0.5) * this.mapBounds.z;

  var e = this.collectableTemplate.resource.instantiate();
  e.setPosition(x, 0, z);
  this.entity.addChild(e);
};

GameManager.prototype.getPlayerTimePercentage = function () {
  return this._playerTime / this.playerMaxTime;
};
```

## Score System

```javascript
// ui-manager.js — Access GameManager.instance
var UIManager = pc.createScript("uiManager");

UIManager.attributes.add("timeBarEntity", {
  type: "entity",
  title: "Time Bar (fill) Entity",
});
UIManager.attributes.add("scoreTextEntity", {
  type: "entity",
  title: "Score Text Entity",
});
UIManager.attributes.add("roundOverScreenEntity", {
  type: "entity",
  title: "Round Over Screen Entity",
});
UIManager.attributes.add("roundStartButtonEntity", {
  type: "entity",
  title: "Restart Button Entity",
});

UIManager.prototype.initialize = function () {
  // === Direct reference to global instance ===
  this._gm = GameManager.instance;

  this._score = 0;
  this._scoreText = this.scoreTextEntity.element;
  this._margin = new pc.Vec4();

  this.app.on("mushroom", this._onCollected, this);
  this.app.on("roundStart", this._onRoundStart, this);
  this.app.on("roundOver", this._onRoundOver, this);

  this.roundStartButtonEntity.button.on("click", this._onRestart, this);

  this._scoreText.text = "Score: 0";
  this.roundOverScreenEntity.enabled = false;
};

UIManager.prototype.update = function (dt) {
  var width = this.timeBarEntity.parent.element.width;
  var remain = this._gm.getPlayerTimePercentage();
  this._margin.z = (1 - remain) * width;
  this.timeBarEntity.element.width = remain * width;
};

UIManager.prototype._onCollected = function () {
  this._score++;
  this._scoreText.text = "Score: " + this._score;
};

UIManager.prototype._onRoundStart = function () {
  this.roundOverScreenEntity.enabled = false;
  this._score = 0;
  this._scoreText.text = "Score: 0";
};

UIManager.prototype._onRoundOver = function () {
  this.roundOverScreenEntity.enabled = true;
  this.app.fire("leaderboardRecord:write", { score: this._score });
};

UIManager.prototype._onRestart = function () {
  this.app.fire("ui:restartRound");
};
```

Create your own game logic based on these examples!
