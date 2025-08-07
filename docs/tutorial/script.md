---
id: script
title: 스크립트 추가하기
sidebar_label: 스크립트 추가하기
---

# 스크립트 추가하기

OasisW에서 스크립트를 사용하여 객체의 동작을 프로그래밍하는 방법을 배워보겠습니다.

## 스크립트란?

스크립트는 다음과 같은 기능을 제공합니다:
- 객체의 동작 제어
- 사용자 입력 처리
- 애니메이션 및 효과
- 게임 로직 구현

## 스크립트 생성하기

### 1단계: 스크립트 에셋 생성

1. **Assets 뷰**에서 마우스 오른쪽 클릭
2. **New Asset** → **Script** 클릭

![스크립트 생성](https://via.placeholder.com/600x400/87CEEB/000000?text=New+Asset+→+Script)

### 2단계: 스크립트 이름 입력

**Script** 클릭 후 스크립트 이름을 입력합니다:

![스크립트 이름 입력](https://via.placeholder.com/600x400/87CEEB/000000?text=스크립트+이름+입력)

### 3단계: 스크립트 편집

**Assets 뷰**에 생성된 스크립트를 더블 클릭하여 편집기를 엽니다:

![스크립트 편집](https://via.placeholder.com/600x400/87CEEB/000000?text=스크립트+더블+클릭)

### 4단계: 움직임 로직 구현

프롬프트를 활용하여 움직임 로직을 구현한 후 **Apply**를 눌러 적용하고 **Save** 후 닫습니다:

![움직임 로직 구현](https://via.placeholder.com/600x400/87CEEB/000000?text=움직임+로직+구현)

## 스크립트 적용하기

### 1단계: 스크립트 컴포넌트 추가

1. **Hierarchy 뷰**에서 Box 오브젝트 선택
2. **Inspector 뷰**에서 **Add Component** → **Script** 클릭

![스크립트 컴포넌트 추가](https://via.placeholder.com/600x400/87CEEB/000000?text=Add+Component+→+Script)

### 2단계: 스크립트 추가

**Inspector 뷰** 하단에 스크립트 컴포넌트가 생성되면 **Add Script** 클릭:

![Add Script 클릭](https://via.placeholder.com/600x400/87CEEB/000000?text=Add+Script+클릭)

### 3단계: 스크립트 선택

생성해놓은 스크립트를 클릭하여 적용합니다:

![스크립트 선택](https://via.placeholder.com/600x400/87CEEB/000000?text=스크립트+선택)

### 4단계: 결과 확인

**Viewport**의 **Launch**를 눌러서 확인하면 카메라가 포함된 박스 오브젝트의 움직임을 확인할 수 있습니다:

![움직임 확인](https://via.placeholder.com/600x400/87CEEB/000000?text=움직임+확인)

```javascript
// 기본 스크립트 생성
var BasicScript = pc.createScript('basicScript');

BasicScript.prototype.initialize = function() {
    console.log('스크립트가 시작되었습니다!');
};

BasicScript.prototype.update = function(dt) {
    // 매 프레임마다 실행되는 로직
};
```

### 2단계: 스크립트 적용

생성한 스크립트를 객체에 적용합니다:

```javascript
// 스크립트를 객체에 적용
var cube = pc.Entity.create();
cube.addComponent('render', {
    type: 'box'
});
cube.addComponent('script', {
    scripts: [{
        url: 'basicScript.js'
    }]
});
```

### 3단계: 스크립트 실행

스크립트가 자동으로 실행됩니다:

```javascript
// 스크립트는 자동으로 실행됩니다
// start() 메서드는 객체가 생성될 때 호출됩니다
// update() 메서드는 매 프레임마다 호출됩니다
```

## 사용자 입력 처리

### 키보드 입력

키보드 입력을 처리하는 스크립트를 만들어보겠습니다:

```javascript
// 키보드 입력 처리 스크립트
var KeyboardController = pc.createScript('keyboardController');

KeyboardController.prototype.initialize = function() {
    this.speed = 5;
    this.input = app.keyboard;
};

KeyboardController.prototype.update = function(dt) {
    // 키보드 입력 처리
    if (this.input.isPressed(pc.KEY_W)) {
        this.entity.translate(0, 0, -this.speed * dt);
    }
    if (this.input.isPressed(pc.KEY_S)) {
        this.entity.translate(0, 0, this.speed * dt);
    }
    if (this.input.isPressed(pc.KEY_A)) {
        this.entity.translate(-this.speed * dt, 0, 0);
    }
    if (this.input.isPressed(pc.KEY_D)) {
        this.entity.translate(this.speed * dt, 0, 0);
    }
};
```

### 마우스 입력

마우스 입력을 처리하는 스크립트입니다:

```javascript
// 마우스 입력 처리 스크립트
var MouseController = pc.createScript('mouseController');

MouseController.prototype.initialize = function() {
    this.sensitivity = 2.0;
    this.input = app.mouse;
    this.camera = this.entity.camera;
};

MouseController.prototype.update = function(dt) {
    // 마우스 움직임 처리
    var mouseDelta = this.input.getDelta();
    
    if (this.camera) {
        this.entity.rotate(0, -mouseDelta.x * this.sensitivity * dt, 0);
        this.entity.rotate(-mouseDelta.y * this.sensitivity * dt, 0, 0);
    }
};
```

## 애니메이션 스크립트

### 회전 애니메이션

객체를 회전시키는 스크립트입니다:

```javascript
// 회전 애니메이션 스크립트
var RotationScript = pc.createScript('rotationScript');

RotationScript.prototype.initialize = function() {
    this.rotationSpeed = 90; // 도/초
};

RotationScript.prototype.update = function(dt) {
    // Y축을 중심으로 회전
    this.entity.rotate(0, this.rotationSpeed * dt, 0);
};
```

### 부드러운 이동

부드러운 이동을 구현하는 스크립트입니다:

```javascript
// 부드러운 이동 스크립트
var SmoothMovement = pc.createScript('smoothMovement');

SmoothMovement.prototype.initialize = function() {
    this.targetPosition = new pc.Vec3(0, 0, 0);
    this.smoothSpeed = 5.0;
};

SmoothMovement.prototype.update = function(dt) {
    // 현재 위치에서 목표 위치로 부드럽게 이동
    var currentPos = this.entity.getLocalPosition();
    var targetPos = this.targetPosition;
    
    var newPos = new pc.Vec3();
    newPos.lerp(currentPos, targetPos, this.smoothSpeed * dt);
    this.entity.setLocalPosition(newPos);
};

SmoothMovement.prototype.setTargetPosition = function(x, y, z) {
    this.targetPosition.set(x, y, z);
};
```

## 충돌 감지 스크립트

### 충돌 이벤트 처리

객체 간 충돌을 감지하는 스크립트입니다:

```javascript
// 충돌 감지 스크립트
var CollisionDetector = pc.createScript('collisionDetector');

CollisionDetector.prototype.initialize = function() {
    this.isColliding = false;
    
    // 충돌 이벤트 리스너 등록
    this.entity.on('collisionstart', this.handleCollisionEnter, this);
    this.entity.on('collisionend', this.handleCollisionExit, this);
};

CollisionDetector.prototype.handleCollisionEnter = function(result) {
    console.log('충돌 발생:', result.other.name);
    this.isColliding = true;
    
    // 충돌 시 효과
    if (result.other.tags.has('collectible')) {
        this.collectItem(result.other);
    }
};

CollisionDetector.prototype.handleCollisionExit = function(result) {
    console.log('충돌 종료:', result.other.name);
    this.isColliding = false;
};

CollisionDetector.prototype.collectItem = function(item) {
    // 아이템 수집 로직
    item.destroy();
    this.entity.score += 10;
};
```

## 게임 로직 스크립트

### 점수 시스템

점수를 관리하는 스크립트입니다:

```javascript
// 점수 시스템 스크립트
var ScoreManager = pc.createScript('scoreManager');

ScoreManager.prototype.initialize = function() {
    this.score = 0;
    this.highScore = 0;
    
    // UI 요소 찾기
    this.scoreText = app.root.findByName('ScoreText');
    this.highScoreText = app.root.findByName('HighScoreText');
    
    // 저장된 최고 점수 로드
    this.highScore = this.loadHighScore();
    this.updateUI();
};

ScoreManager.prototype.addScore = function(points) {
    this.score += points;
    this.updateUI();
    
    // 최고 점수 업데이트
    if (this.score > this.highScore) {
        this.highScore = this.score;
        this.saveHighScore();
    }
};

ScoreManager.prototype.updateUI = function() {
    if (this.scoreText) {
        this.scoreText.element.text = '점수: ' + this.score;
    }
    if (this.highScoreText) {
        this.highScoreText.element.text = '최고 점수: ' + this.highScore;
    }
};

ScoreManager.prototype.loadHighScore = function() {
    return localStorage.getItem('highScore') || 0;
};

ScoreManager.prototype.saveHighScore = function() {
    localStorage.setItem('highScore', this.highScore.toString());
};
```

## 고급 스크립트 기능

### 스크립트 간 통신

스크립트 간에 메시지를 주고받을 수 있습니다:

```javascript
// 메시지 발신 스크립트
var MessageSender = pc.createScript('messageSender');

MessageSender.prototype.initialize = function() {
    this.input = app.keyboard;
};

MessageSender.prototype.update = function(dt) {
    if (this.input.isPressed(pc.KEY_SPACE)) {
        // 메시지 전송
        this.entity.fire('playerJumped');
    }
};

// 메시지 수신 스크립트
var GameManager = pc.createScript('gameManager');

GameManager.prototype.initialize = function() {
    // 메시지 리스너 등록
    this.entity.on('playerJumped', this.handlePlayerJump, this);
};

GameManager.prototype.handlePlayerJump = function() {
    console.log('플레이어가 점프했습니다!');
    // 점프 관련 로직 처리
};
```

### 스크립트 조건부 실행

특정 조건에서만 스크립트를 실행할 수 있습니다:

```javascript
// 조건부 실행 스크립트
var ConditionalScript = pc.createScript('conditionalScript');

ConditionalScript.prototype.initialize = function() {
    this.enabled = true;
};

ConditionalScript.prototype.update = function(dt) {
    // 스크립트가 활성화된 경우에만 실행
    if (!this.enabled) return;
    
    // 스크립트 로직
    this.entity.rotate(0, 90 * dt, 0);
};

ConditionalScript.prototype.toggle = function() {
    this.enabled = !this.enabled;
};
```

## 실습 예제

완전한 스크립트 예제입니다:

```javascript
// 완전한 스크립트 예제
var PlayerController = pc.createScript('playerController');

PlayerController.prototype.initialize = function() {
    this.speed = 5;
    this.jumpForce = 10;
    this.isGrounded = false;
    
    this.input = app.keyboard;
    this.rigidbody = this.entity.rigidbody;
    this.animator = this.entity.anim;
};

PlayerController.prototype.update = function(dt) {
    this.handleMovement(dt);
    this.handleJump();
    this.updateAnimation();
};

PlayerController.prototype.handleMovement = function(dt) {
    var horizontal = 0;
    var vertical = 0;
    
    if (this.input.isPressed(pc.KEY_A)) horizontal -= 1;
    if (this.input.isPressed(pc.KEY_D)) horizontal += 1;
    if (this.input.isPressed(pc.KEY_W)) vertical -= 1;
    if (this.input.isPressed(pc.KEY_S)) vertical += 1;
    
    var movement = new pc.Vec3(
        horizontal * this.speed * dt,
        0,
        vertical * this.speed * dt
    );
    
    this.entity.translate(movement);
};

PlayerController.prototype.handleJump = function() {
    if (this.input.isPressed(pc.KEY_SPACE) && this.isGrounded) {
        this.rigidbody.applyImpulse(0, this.jumpForce, 0);
        this.isGrounded = false;
    }
};

PlayerController.prototype.updateAnimation = function() {
    if (this.animator) {
        var velocity = this.rigidbody.linearVelocity.length();
        this.animator.setFloat('Speed', velocity);
        this.animator.setBool('IsGrounded', this.isGrounded);
    }
};

PlayerController.prototype.onCollisionEnter = function(result) {
    if (result.other.tags.has('Ground')) {
        this.isGrounded = true;
    }
};
```
