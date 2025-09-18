---
id: volleyball-tutorial-script
title: 배구 튜토리얼 스크립트
sidebar_label: 배구 튜토리얼 스크립트
---

# 배구 튜토리얼 스크립트

OasisW에서 제공하는 다양한 스크립트 예제들을 통해 게임 개발의 기본기를 학습합니다.


## 공 컨트롤러

공의 물리 시뮬레이션과 탭 입력을 처리하는 스크립트입니다.

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

## 입력 처리

마우스와 터치 입력을 감지하여 공을 탭하는 스크립트입니다.

```javascript
var Input = pc.createScript('input');

// 속성 정의
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

// 초기화
Input.prototype.initialize = function () {
    this._paused = true;

    // 이벤트 리스너 등록
    this.app.on("game:start", function () {
        this._paused = false;
    }, this);

    this.app.on("game:gameover", function () {
        this._paused = true;
    }, this);

    // 입력 처리 등록
    if (this.app.touch) {
        this.app.touch.on("touchstart", this._onTouchStart, this);
    }

    this.app.mouse.on("mousedown", this._onMouseDown, this);

    // 공유 벡터 초기화
    if (!Input._worldPos) {
        Input._worldPos = new pc.Vec3();
    }
};

// 터치 입력 처리
Input.prototype._onTouchStart = function (event) {
    if (this._paused) return;

    var touch = event.changedTouches[0];
    this._onTap(touch.x, touch.y);
    event.event.preventDefault(); // 마우스 이벤트 중복 방지
};

// 마우스 클릭 처리
Input.prototype._onMouseDown = function (event) {
    if (this._paused) return;

    this._onTap(event.x, event.y);
};

// 탭 처리 로직
Input.prototype._onTap = function (x, y) {
    var ballPos = this.ball.getPosition();
    var camPos = this.camera.getPosition();
    var worldPos = Input._worldPos;

    // Z 깊이 보정: ball과 camera 간 거리 사용
    this.camera.camera.screenToWorld(x, y, camPos.z - ballPos.z, worldPos);

    var dx = ballPos.x - worldPos.x;
    var dy = ballPos.y - worldPos.y;

    var lenSqr = dx * dx + dy * dy;
    if (lenSqr < this.ballRadius * this.ballRadius) {
        if (this.ball.script && this.ball.script.ball && this.ball.script.ball.tap) {
            this.ball.script.ball.tap(dx, dy);
        }
    }
};
```

## 메뉴 UI

게임 시작 메뉴 화면을 관리하는 스크립트입니다.

```javascript
var UiMenu = pc.createScript('uiMenu');

// 속성 정의
UiMenu.attributes.add('overlay', {
    type: 'entity',
    title: 'Overlay Entity'
});

// 초기화
UiMenu.prototype.initialize = function () {
    this.on('enable', this.onEnable, this);
    this.on('disable', this.onDisable, this);

    this.onEnable(); // 처음 활성화될 때도 처리
};

// 활성화 시
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

// 비활성화 시
UiMenu.prototype.onDisable = function () {
    if (this.overlay) {
        this.overlay.enabled = false;

        if (this.overlay.element) {
            this.overlay.element.off('click', this.start, this);
        }
    }
};

// 시작 이벤트
UiMenu.prototype.start = function (event) {
    this.app.fire('ui:start');

    if (event && event.stopPropagation) {
        event.stopPropagation();
    }
};
```

## 점수 UI

게임 중 점수를 표시하는 UI 스크립트입니다.

```javascript
var UiScore = pc.createScript('uiScore');

UiScore.prototype.initialize = function() {
    this.score = this.entity.findByName('Score');
    this._changeScore = this._changeScore.bind(this);

    this.on('enable', this.onEnable, this);
    this.on('disable', this.onDisable, this);

    this.onEnable();
};

UiScore.prototype.onEnable = function() {
    this.app.on('game:score', this._changeScore, this);
    this._changeScore(0);
};

UiScore.prototype.onDisable = function() {
    this.app.off('game:score', this._changeScore, this);
};

UiScore.prototype._changeScore = function(newScore) {
    if (this.score && this.score.element) {
        this.score.element.text = newScore.toString();
    }
};

UiScore.prototype.update = function(dt) {
};
```

## 게임 오버 UI

게임 종료 시 표시되는 UI와 재시작 기능을 관리하는 스크립트입니다.

```javascript
var UiGameover = pc.createScript('uiGameover');

// 속성 정의
UiGameover.attributes.add('overlay', {
    type: 'entity',
    title: 'Overlay Entity'
});

// 초기화
UiGameover.prototype.initialize = function () {
    // Score 텍스트 엔티티 찾아 저장
    this.score = this.entity.findByName('Score');
    this._score = 0;

    // 게임 점수 갱신 이벤트 리스닝
    this.app.on('game:score', function (score) {
        this._score = score;
        if (this.score && this.score.element) {
            this.score.element.text = this._score.toString();
        }
    }, this);

    this.on('enable', this.onEnable, this);
    this.on('disable', this.onDisable, this);

    this.onEnable(); // 처음 활성화될 때 수동 실행
};

// 활성화 시 UI 보이고 클릭 이벤트 연결
UiGameover.prototype.onEnable = function () {
    if (this.overlay) {
        this.overlay.enabled = true;

        if (this.overlay.element) {
            this.overlay.element.on('click', this.reset, this);
        }
    }
};

// 비활성화 시 UI 숨기고 이벤트 해제
UiGameover.prototype.onDisable = function () {
    if (this.overlay) {
        this.overlay.enabled = false;

        if (this.overlay.element) {
            this.overlay.element.off('click', this.reset, this);
        }
    }
};

// 리셋 처리
UiGameover.prototype.reset = function (event) {
    this.app.fire('ui:reset');

    if (event && event.stopPropagation) {
        event.stopPropagation();
    }
};

```

## 게임 매니저

전체 게임의 상태와 흐름을 관리하는 메인 스크립트입니다.

```javascript
var Game = pc.createScript('game');

// 속성 정의
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

// 상태 상수 (static 대신 전역 상수로 정의)
Game.STATE_MENU = 'menu';
Game.STATE_INGAME = 'ingame';
Game.STATE_GAMEOVER = 'gameover';

// 초기화
Game.prototype.initialize = function () {
    this._state = Game.STATE_MENU;
    this._score = 0;

    this.setResolution();

    // 창 크기 변경 시 해상도 조절
    window.addEventListener('resize', this.setResolution.bind(this));

    // 이벤트 리스너 등록
    this.app.on('ui:start', this.start, this);
    this.app.on('ui:reset', this.reset, this);
};

// 해상도 설정
Game.prototype.setResolution = function () {
    var w = window.screen.width;
    var h = window.screen.height;

    if (w < 640) {
        this.app.setCanvasResolution(pc.RESOLUTION_AUTO, w, h);
        this.app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
    }
};

// 게임 시작
Game.prototype.start = function () {
    this._state = Game.STATE_INGAME;
    this.app.fire('game:start');

    this.uiMenu.enabled = false;
    this.uiInGame.enabled = true;

    if (this.audio && this.audio.sound) {
        this.audio.sound.play('music');
    }
};

// 게임 오버
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

// 게임 리셋
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

// 점수 가져오기
Game.prototype.getScore = function () {
    return this._score;
};

// 점수 추가
Game.prototype.addScore = function (v) {
    this._score += v;
    this.app.fire('game:score', this._score);
};

// 점수 초기화
Game.prototype.resetScore = function () {
    this._score = 0;
    this.app.fire('game:score', this._score);
};
```

이러한 예제들을 기반으로 자신만의 게임 로직을 만들어보세요!

