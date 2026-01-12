---
id: volleyball-tutorial-script
title: Volleyball Tutorial Scripts
sidebar_label: Volleyball Tutorial Scripts
---

# Volleyball Tutorial Scripts

Learn the basics of game development through various script examples provided by OasisW.


## Ball Controller

Script that handles ball physics simulation and tap input.

```javascript
var Ball = pc.createScript('ball');

// Default attributes
Ball.attributes.add('gravity', {
    type: 'number',
    default: -9.8,
    title: 'Gravity'
});

Ball.attributes.add('defaultTap', {
    type: 'number',
    default: 5,
    title: 'Default Tap Speed'
});

Ball.attributes.add('impactEffect', {
    type: 'entity',
    title: 'Impact Effect'
});

Ball.attributes.add('ballMinimum', {
    type: 'number',
    default: -6,
    title: 'Ball Minimum Y'
});

Ball.attributes.add('speedMult', {
    type: 'number',
    default: 4,
    title: 'Speed Multiplier'
});

Ball.attributes.add('angMult', {
    type: 'number',
    default: -6,
    title: 'Angular Speed Multiplier'
});

// Initialize code
Ball.prototype.initialize = function () {
    this.paused = true;

    this.game = this.app.root.findByName('Game');

    this.app.on('game:start', this.unpause, this);
    this.app.on('game:gameover', this.pause, this);
    this.app.on('game:reset', this.reset, this);

    this._vel = new pc.Vec3(0, 0, 0);
    this._acc = new pc.Vec3(0, this.gravity, 0);
    this._angSpeed = 0;

    this._origin = this.entity.getLocalPosition().clone();
    this._rotation = this.entity.getLocalRotation().clone();

    if (!Ball._tmp) {
        Ball._tmp = new pc.Vec3();
    }
};

// Update function
Ball.prototype.update = function (dt) {
    if (this.paused) {
        this.entity.rotate(0, 30 * dt, 0);
        return;
    }

    const position = this.entity.getLocalPosition();
    const tmp = Ball._tmp;

    tmp.copy(this._acc).scale(dt);
    this._vel.add(tmp);

    tmp.copy(this._vel).scale(dt);
    position.add(tmp);
    this.entity.setLocalPosition(position);

    this.entity.rotate(0, 0, this._angSpeed);

    if (position.y < this.ballMinimum) {
        if (this.game.script && this.game.script.game && this.game.script.game.gameOver) {
            this.game.script.game.gameOver();
        }
    }
};

// Tap function
Ball.prototype.tap = function (dx, dy, notScoring) {
    if (notScoring === undefined) notScoring = false;

    this._vel.set(this.speedMult * dx, this.defaultTap, 0);
    this._angSpeed += this.angMult * dx;

    const tmp = Ball._tmp;
    tmp.copy(this.entity.getLocalPosition());
    tmp.x -= dx;
    tmp.y -= dy;

    if (this.impactEffect && this.impactEffect.particlesystem) {
        this.impactEffect.setLocalPosition(tmp);
        this.impactEffect.particlesystem.reset();
        this.impactEffect.particlesystem.play();
        this.impactEffect.lookAt(this.entity.getPosition());
    }

    if (this.entity.sound) {
        this.entity.sound.play("bounce");
    }

    if (!notScoring && this.game.script && this.game.script.game && this.game.script.game.addScore) {
        this.game.script.game.addScore(1);
    }
};

// Game control functions
Ball.prototype.unpause = function () {
    this.paused = false;
    this.tap(0, 0, true);
};

Ball.prototype.pause = function () {
    this.paused = true;
};

Ball.prototype.reset = function () {
    this.entity.setLocalPosition(this._origin);
    this.entity.setLocalRotation(this._rotation);
    this._vel.set(0, 0, 0);
    this._acc.set(0, this.gravity, 0);
    this._angSpeed = 0;
};
```

## Input Handling

Script that detects mouse and touch input to tap the ball.

```javascript
var Input = pc.createScript('input');

// Attribute definitions
Input.attributes.add('ball', {
    type: 'entity',
    title: 'Ball Entity'
});

Input.attributes.add('camera', {
    type: 'entity',
    title: 'Camera Entity'
});

Input.attributes.add('ballRadius', {
    type: 'number',
    default: 0.5,
    title: 'Ball Tap Radius'
});

// Initialization
Input.prototype.initialize = function () {
    this._paused = true;

    // Event listener registration
    this.app.on("game:start", function () {
        this._paused = false;
    }, this);

    this.app.on("game:gameover", function () {
        this._paused = true;
    }, this);

    // Input handling registration
    if (this.app.touch) {
        this.app.touch.on("touchstart", this._onTouchStart, this);
    }

    this.app.mouse.on("mousedown", this._onMouseDown, this);

    // Shared vector initialization
    if (!Input._worldPos) {
        Input._worldPos = new pc.Vec3();
    }
};

// Touch input handling
Input.prototype._onTouchStart = function (event) {
    if (this._paused) return;

    var touch = event.changedTouches[0];
    this._onTap(touch.x, touch.y);
    event.event.preventDefault(); // Prevent mouse event duplication
};

// Mouse click handling
Input.prototype._onMouseDown = function (event) {
    if (this._paused) return;

    this._onTap(event.x, event.y);
};

// Tap handling logic
Input.prototype._onTap = function (x, y) {
    var ballPos = this.ball.getPosition();
    var camPos = this.camera.getPosition();
    var worldPos = Input._worldPos;

    // Z depth correction: use distance between ball and camera
    this.camera.camera.screenToWorld(x, y, camPos.z - ballPos.z, worldPos);

    var dx = ballPos.x - worldPos.x;
    var dy = ballPos.y - worldPos.y;

    var lenSqr = dx * dx + dy * dy;
    // Check if within tap radius
    if (lenSqr < this.ballRadius * this.ballRadius) {
        if (this.ball.script && this.ball.script.ball && this.ball.script.ball.tap) {
            this.ball.script.ball.tap(dx, dy);
        }
    }
};
```

## Menu UI

Script that manages the game start menu screen.

```javascript
var UiMenu = pc.createScript('uiMenu');

// Attribute definitions
UiMenu.attributes.add('overlay', {
    type: 'entity',
    title: 'Overlay Entity'
});

// Initialization
UiMenu.prototype.initialize = function () {
    this.on('enable', this.onEnable, this);
    this.on('disable', this.onDisable, this);

    this.onEnable(); // Handle initial activation as well
};

// When activated
UiMenu.prototype.onEnable = function () {
    if (this.overlay) {
        this.overlay.enabled = true;

        if (this.overlay.element) {
            this.overlay.element.on('click', this.start, this);
        }
    }

    if (this.ball) {
        var meshInstance = this.ball.model && this.ball.model.meshInstances && this.ball.model.meshInstances[0];
        if (meshInstance && meshInstance.material) {
            meshInstance.material.depthTest = false;
        }
    }
};

// When deactivated
UiMenu.prototype.onDisable = function () {
    if (this.overlay) {
        this.overlay.enabled = false;

        if (this.overlay.element) {
            this.overlay.element.off('click', this.start, this);
        }
    }
};

// Start event
UiMenu.prototype.start = function (event) {
    this.app.fire('ui:start');

    if (event && event.stopPropagation) {
        event.stopPropagation();
    }
};
```

## Game Over UI

Script that manages the UI displayed when the game ends and the restart functionality.

```javascript
var UiGameover = pc.createScript('uiGameover');

// Attribute definitions
UiGameover.attributes.add('overlay', {
    type: 'entity',
    title: 'Overlay Entity'
});

// Initialization
UiGameover.prototype.initialize = function () {
    // Find and store Score text entity
    this.score = this.entity.findByName('Score');
    this._score = 0;

    // Listen for game score update events
    this.app.on('game:score', function (score) {
        this._score = score;
        if (this.score && this.score.element) {
            this.score.element.text = this._score.toString();
        }
    }, this);

    this.on('enable', this.onEnable, this);
    this.on('disable', this.onDisable, this);

    this.onEnable(); // Manually execute on initial activation
};

// Show UI and connect click events when activated
UiGameover.prototype.onEnable = function () {
    if (this.overlay) {
        this.overlay.enabled = true;

        if (this.overlay.element) {
            this.overlay.element.on('click', this.reset, this);
        }
    }
};

// Hide UI and disconnect events when deactivated
UiGameover.prototype.onDisable = function () {
    if (this.overlay) {
        this.overlay.enabled = false;

        if (this.overlay.element) {
            this.overlay.element.off('click', this.reset, this);
        }
    }
};

// Reset handling
UiGameover.prototype.reset = function (event) {
    this.app.fire('ui:reset');

    if (event && event.stopPropagation) {
        event.stopPropagation();
    }
};

```


## Score UI

UI script that displays the score during the game.

```javascript
var UiScore = pc.createScript('uiScore');

UiScore.prototype.initialize = function() {
    // Find and store score text entity
    this.score = this.entity.findByName('Score');
    this._changeScore = this._changeScore.bind(this);

    this.on('enable', this.onEnable, this);
    this.on('disable', this.onDisable, this);

    this.onEnable();
};

UiScore.prototype.onEnable = function() {
    // Listen for game score update events
    this.app.on('game:score', this._changeScore, this);
    this._changeScore(0);
};

UiScore.prototype.onDisable = function() {
    // Stop listening for game score update events
    this.app.off('game:score', this._changeScore, this);
};

UiScore.prototype._changeScore = function(newScore) {
    // Update score display
    if (this.score && this.score.element) {
        this.score.element.text = newScore.toString();
    }
};

UiScore.prototype.update = function(dt) {
};
```

## Game Manager

Main script that manages the overall game state and flow.

```javascript
var Game = pc.createScript('game');

// Attribute definitions
Game.attributes.add('uiMenu', {
    type: 'entity',
    title: 'UI Menu'
});

Game.attributes.add('uiInGame', {
    type: 'entity',
    title: 'UI In-Game'
});

Game.attributes.add('uiGameOver', {
    type: 'entity',
    title: 'UI Game Over'
});

Game.attributes.add('audio', {
    type: 'entity',
    title: 'Audio Entity'
});

// State constants (defined as global constants instead of static)
Game.STATE_MENU = 'menu';
Game.STATE_INGAME = 'ingame';
Game.STATE_GAMEOVER = 'gameover';

// Initialization
Game.prototype.initialize = function () {
    this._state = Game.STATE_MENU;
    this._score = 0;

    this.setResolution();

    // Adjust resolution when window size changes
    window.addEventListener('resize', this.setResolution.bind(this));

    // Event listener registration
    this.app.on('ui:start', this.start, this);
    this.app.on('ui:reset', this.reset, this);
};

// Resolution setting
Game.prototype.setResolution = function () {
    var w = window.screen.width;
    var h = window.screen.height;

    // Set resolution for mobile devices
    if (w < 640) {
        this.app.setCanvasResolution(pc.RESOLUTION_AUTO, w, h);
        this.app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
    }
};

// Start game
Game.prototype.start = function () {
    this._state = Game.STATE_INGAME;
    this.app.fire('game:start');

    this.uiMenu.enabled = false;
    this.uiInGame.enabled = true;

    if (this.audio && this.audio.sound) {
        this.audio.sound.play('music');
    }
};

// Game over
Game.prototype.gameOver = function () {
    this._state = Game.STATE_GAMEOVER;
    this.app.fire('game:gameover');

    this.uiInGame.enabled = false;
    this.uiGameOver.enabled = true;

    this.app.fire('game:score', this._score);

    if (this.audio && this.audio.sound) {
        this.audio.sound.stop();
        this.audio.sound.play('gameover');
    }
};

// Game reset
Game.prototype.reset = function () {
    this.app.fire('game:reset');
    this.resetScore();

    this._state = Game.STATE_MENU;
    this.uiGameOver.enabled = false;
    this.uiMenu.enabled = true;

    if (this.audio && this.audio.sound) {
        this.audio.sound.stop();
    }
};

// Get score
Game.prototype.getScore = function () {
    return this._score;
};

// Add Score
Game.prototype.addScore = function (v) {
    this._score += v;
    this.app.fire('game:score', this._score);
};

// Score initialization
Game.prototype.resetScore = function () {
    this._score = 0;
    this.app.fire('game:score', this._score);
};
```

Create your own game logic based on these examples!

