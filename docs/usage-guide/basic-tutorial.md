---
id: basic-tutorial
title: OasisW 메뉴얼 - 기초다지기
sidebar_label: 기초다지기
---

# OasisW 메뉴얼 - 기초다지기

OasisW의 기본 기능들을 단계별로 학습해보겠습니다.

## 새 프로젝트 생성

### 1단계: 프로젝트 시작
1. OasisW 에디터 실행
2. 프로젝트 이름 입력
3. 폴더 경로 선택
4. 템플릿 선택
5. **Create Project** 버튼 클릭

### 2단계: 기본 씬 설정
- 기본 카메라와 조명이 자동으로 생성됩니다
- 하이어라키 뷰에서 Scene 구조 확인

## 지면 생성

### 1단계: Plane 생성
1. **하이어라키 뷰**에서 **Add Entity** 클릭
2. **3D** → **Plane** 선택

### 2단계: 크기 조정
1. **Scale** 값을 조정하여 크기 설정
   - X: 10, Y: 1, Z: 10

### 3단계: 위치 조정
1. **Position** 값을 조정
   - Y: -1 (지면을 약간 아래로)

## 머티리얼

### 1단계: Box 오브젝트 생성
1. **하이어라키 뷰**에서 **Add Entity** → **3D** → **Box** 선택
2. **Position**에서 Y값을 1로 설정하여 지면 위에 배치

### 2단계: 머티리얼 생성
1. **에셋 뷰**에서 우클릭
2. **New Asset** → **Material** 선택
3. 머티리얼 이름을 "BoxMaterial"로 변경

### 3단계: 색상 설정
1. 생성된 머티리얼 클릭
2. **인스팩터 뷰**에서 **Diffuse** 색상 변경
3. 원하는 색상 선택 (예: 빨간색)

### 4단계: 머티리얼 적용
1. **하이어라키 뷰**에서 Box 선택
2. **에셋 뷰**의 머티리얼을 **인스팩터 뷰**의 **Materials**에 드래그

## 물리운동

### 1단계: 지면에 물리 적용
1. **하이어라키 뷰**에서 Plane 선택
2. **인스팩터 뷰**에서 **Add Component** → **Physics** → **Collision** → **Half Extents** 설정
3. **Add Component** → **Physics** → **Rigid Body**
4. **IMPORT AMMO** 클릭

### 2단계: Box에 물리 적용
1. **하이어라키 뷰**에서 Box 선택
2. **Add Component** → **Physics** → **Collision**
3. **Add Component** → **Physics** → **Rigid Body**
4. **Type**을 **Dynamic**으로 변경

### 3단계: 테스트
1. **뷰포트**에서 **Launch** 클릭
2. Box가 떨어져서 Plane에 멈추는 것 확인

## 템플릿

### 1단계: 템플릿 생성
1. **하이어라키 뷰**에서 Box 오른쪽 클릭
2. **Template** → **New Template** 클릭
3. 템플릿 이름 입력 (예: "MyBox")

### 2단계: 템플릿 사용
1. **에셋 뷰**에서 생성된 템플릿 확인
2. 템플릿을 **하이어라키 뷰**에 드래그하여 인스턴스 생성
3. 여러 개의 동일한 Box 생성

### 3단계: 인스턴스 수정
1. 하나의 인스턴스 선택
2. **Position** 또는 **Rotation** 변경
3. 다른 인스턴스들은 영향받지 않음 확인

## 스크립트 추가

### 1단계: 스크립트 생성
1. **에셋 뷰**에서 우클릭
2. **New Asset** → **Script** 선택
3. 스크립트 이름 입력 (예: "move-script")

### 2단계: 스크립트 편집
1. 생성된 스크립트 더블클릭
2. 기본 코드 확인:
```javascript
var MoveScript = pc.createScript('moveScript');

// initialize code called once per entity
MoveScript.prototype.initialize = function() {

};

// update code called every frame
MoveScript.prototype.update = function(dt) {

};
```

### 3단계: 간단한 움직임 구현
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

### 4단계: 스크립트 적용
1. **하이어라키 뷰**에서 Box 선택
2. **인스팩터 뷰**에서 **Add Component** → **Script**
3. **Add Script** 클릭
4. 생성한 스크립트 선택

### 5단계: 테스트
1. **뷰포트**에서 **Launch** 클릭
2. WASD 키로 Box 움직임 확인

<!-- ## 다음 단계

기본 기능들을 모두 학습했습니다. 이제 더 복잡한 프로젝트를 만들어보겠습니다:

- [공 굴리기 게임 만들기](../advanced/advanced-tutorial)  -->