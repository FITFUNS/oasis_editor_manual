---
id: physics-movement
title: 물리운동 설정하기
sidebar_label: 물리운동 설정하기
---

# 물리운동 설정하기

OasisW에서 물리 엔진을 사용하여 객체의 움직임과 상호작용을 구현하는 방법을 배워보겠습니다.

## 물리 엔진이란?

물리 엔진은 다음과 같은 기능을 제공합니다:
- 중력과 충돌 감지
- 힘과 토크 적용
- 제약 조건과 조인트
- 실시간 물리 시뮬레이션

## 지면에 물리 적용하기

### 1단계: Collision 컴포넌트 추가

1. **Inspector 뷰**에서 **Add Component** 클릭
2. **Physics** → **Collision** 추가

![Collision 추가](https://via.placeholder.com/600x400/87CEEB/000000?text=Add+Component+→+Physics+→+Collision)

### 2단계: Half Extents 설정

**Half Extents**로 충돌 범위를 설정합니다:

![Half Extents 설정](https://via.placeholder.com/600x400/87CEEB/000000?text=Half+Extents+범위+설정)

### 3단계: Rigid Body 컴포넌트 추가

1. **Inspector 뷰**에서 **Add Component** 클릭
2. **Physics** → **Rigid Body** 추가

![Rigid Body 추가](https://via.placeholder.com/600x400/87CEEB/000000?text=Add+Component+→+Physics+→+Rigid+Body)

### 4단계: AMMO.js 가져오기

**IMPORT AMMO** 버튼을 클릭하여 물리 엔진을 활성화합니다:

![AMMO 가져오기](https://via.placeholder.com/600x400/87CEEB/000000?text=IMPORT+AMMO+클릭)

## 움직이는 오브젝트에 물리 적용하기

### 1단계: Collision과 Rigid Body 추가

움직이는 오브젝트에도 동일하게 **Collision**과 **Rigid Body**를 추가합니다.

### 2단계: Rigid Body Type 설정

**Rigid Body**의 **Type**을 **Dynamic**으로 변경합니다:

![Dynamic 설정](https://via.placeholder.com/600x400/87CEEB/000000?text=Type+Dynamic+변경)

### 3단계: 결과 확인

**Viewport**의 **Launch**를 눌러서 동작시켜보면 Box 오브젝트가 아래로 떨어지고 Plane 오브젝트에 닿아 멈추는 것을 확인할 수 있습니다:

![떨어지는 박스](https://via.placeholder.com/600x400/87CEEB/000000?text=박스+떨어지는+모습)

![지면에 멈춘 박스](https://via.placeholder.com/600x400/87CEEB/000000?text=지면에+멈춘+박스)

