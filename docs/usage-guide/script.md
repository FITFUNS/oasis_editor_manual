---
id: script
title: 스크립트 추가하기
sidebar_label: 스크립트 추가하기
---

# 스크립트 추가하기

OasisW에서 스크립트를 사용하여 객체의 동작을 프로그래밍하는 방법을 학습합니다.

## 스크립트 생성하기

### 1단계: 스크립트 에셋 생성

1. **에셋 뷰**에서 마우스 오른쪽 클릭합니다.
2. **New Asset** → **Script**를 클릭합니다.

![script](/img/tutorial/6_1.png)

### 2단계: 스크립트 이름 입력

![script](/img/tutorial/6_2.png)

### 3단계: 스크립트 편집

**에셋 뷰**에 생성된 스크립트를 더블 클릭하여 편집기를 엽니다.

![script](/img/tutorial/6_3.png)

### 4단계: 움직임 로직 구현

프롬프트를 활용하여 움직임 로직을 구현한 후 **Apply**를 눌러 적용하고 **Save** 후 닫습니다.

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/tutorial/6_4.png" alt="Image" style={{maxWidth: '45%'}} />
  <img src="/img/tutorial/6_5.png" alt="Image" style={{maxWidth: '45%'}} />
</div>
<br />

1. x, y축 기준 플레이어 엔티티 방향키로 동작
- 예: `"Player 엔티티가 wasd 방향키로 x, y축 기준 상하좌우 움직일 수 있도록 코드 추가"`  

```javascript
var PlayerController = pc.createScript('playerController');

PlayerController.prototype.initialize = function() {
    this.force = 5;
};

PlayerController.prototype.update = function(dt) {
    var inputForce = new pc.Vec3();
    
    if (this.app.keyboard.isPressed(pc.KEY_A)) {
        inputForce.x = -this.force;
    }
    if (this.app.keyboard.isPressed(pc.KEY_D)) {
        inputForce.x = this.force;
    }
    if (this.app.keyboard.isPressed(pc.KEY_W)) {
        inputForce.y = this.force;
    }
    if (this.app.keyboard.isPressed(pc.KEY_S)) {
        inputForce.y = -this.force;
    }
    
    this.entity.translate(inputForce.x * dt, inputForce.y * dt, 0);
};
```

2. y축 방향으로 미사일 발사

```javascript
var GameManager = pc.createScript('gameManager');

GameManager.prototype.initialize = function() {
    this.missile = null;
    this.missileSpeed = 10;
    this.fireInterval = 1;
    this.fireTimer = 0;
    this.activeMissiles = [];
};

GameManager.prototype.update = function(dt) {
    this.fireTimer += dt;
    if (this.fireTimer >= this.fireInterval) {
        this.fireMissile();
        this.fireTimer = 0;
    }
    
    for (var i = 0; i < this.activeMissiles.length; i++) {
        var missile = this.activeMissiles[i];
        var pos = missile.getPosition();
        missile.setPosition(pos.x, pos.y + this.missileSpeed * dt, pos.z);
    }
};

GameManager.prototype.fireMissile = function() {
    this.missile = this.app.root.findByName('Missile');
    if (this.missile) {
        var player = this.app.root.findByName('Player');
        if (player) {
            var missileClone = this.missile.clone();
            missileClone.setPosition(player.getPosition());
            missileClone.setEulerAngles(0, 0, 0);
            this.app.root.addChild(missileClone);
            missileClone.collision.enabled = true;
            this.activeMissiles.push(missileClone);
        }
    }
};

GameManager.prototype.swap = function(old) { };
```

3. 적 엔티티 드롭

```javascript
var EnemyController = pc.createScript('enemyController');

EnemyController.prototype.initialize = function () {
    this.enemyTemplate = this.app.root.findByName('Enemy');
    this.timer = 0;
    this.spawnInterval = 2.0;
    this.enemySpeed = 3.0;
    this.enemyCount = 5;
    this.spawnY = 10.0;
    this.enemies = [];
};

EnemyController.prototype.update = function (dt) {
    this.timer += dt;

    if (this.timer >= this.spawnInterval) {
        this.timer = 0;
        this.spawnEnemies();
    }

    this.moveEnemies(dt);
};

EnemyController.prototype.spawnEnemies = function () {
    for (let i = 0; i < this.enemyCount; i++) {
        const xPos = -4 + (i * 2);
        const enemy = this.enemyTemplate.clone();
        enemy.setPosition(xPos, this.spawnY, 0);
        enemy.enabled = true;
        this.entity.addChild(enemy);
        this.enemies.push(enemy);
    }
};

EnemyController.prototype.moveEnemies = function (dt) {
    for (let i = 0; i < this.enemies.length; i++) {
        const enemy = this.enemies[i];
        const pos = enemy.getPosition();
        enemy.setPosition(pos.x, pos.y - this.enemySpeed * dt, pos.z);
    }
};
```

## 스크립트 적용하기

### 1단계: 스크립트 컴포넌트 추가

1. **하이어라키 뷰**에서 Box 오브젝트를 선택합니다.
2. **인스팩터 뷰**에서 **Add Component** → **Script**를 클릭합니다.

![script](/img/tutorial/6_6.png)

### 2단계: 스크립트 추가

**인스팩터 뷰** 하단에 스크립트 컴포넌트가 생성되면 **Add Script**를 클릭합니다.

![script](/img/tutorial/6_7.png)

### 3단계: 스크립트 선택

생성해놓은 스크립트를 클릭하여 적용합니다.

![script](/img/tutorial/6_8.png)

### 4단계: 결과 확인

**뷰포트**의 **Launch**를 클릭하여 박스 오브젝트의 움직임을 확인합니다.

![script](/img/tutorial/6_9.png)
