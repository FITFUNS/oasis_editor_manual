---
id: physics-movement
title: 물리운동 설정하기
sidebar_label: 물리운동 설정하기
---

# 물리운동 설정하기

OasisW에서 물리 엔진을 사용하여 객체의 움직임과 상호작용을 구현하는 방법을 배워보겠습니다.

## 지면에 물리 적용하기

### 1단계: Collision 컴포넌트 추가

1. **하이어라키 뷰**에서 Plane 클릭 → **인스팩터 뷰**에서 **Add Component** 클릭
2. **Physics** → **Collision** 추가

![physics](/img/tutorial/4_1.png)

### 2단계: Half Extents 설정

**Half Extents**로 충돌 범위를 설정

![physics](/img/tutorial/4_2.png)

### 3단계: Rigid Body 컴포넌트 추가

1. **인스팩터 뷰**에서 **Add Component** 클릭
2. **Physics** → **Rigid Body** 추가

![physics](/img/tutorial/4_3.png)

### 4단계: AMMO.js 가져오기

**IMPORT AMMO** 버튼을 클릭 → **에셋 뷰**에 ammo.js 폴더 생성 확인

![physics](/img/tutorial/4_5.png)

## 움직이는 오브젝트에 물리 적용하기

### 1단계: Collision과 Rigid Body 추가

움직이는 오브젝트에도 동일하게 **Collision**과 **Rigid Body**를 추가

### 2단계: Rigid Body Type 설정

**Rigid Body**의 **Type**을 **Dynamic**으로 변경

![physics](/img/tutorial/4_6.png)

### 3단계: 결과 확인

**뷰포트**의 **Launch**를 눌러서 동작시켜보면 Box 오브젝트가 아래로 떨어지고 Plane 오브젝트에 닿아 멈추는 것 확인 가능

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/tutorial/4_7.png" alt="Image" style={{maxWidth: '45%'}} />
  <img src="/img/tutorial/4_8.png" alt="Image" style={{maxWidth: '45%'}} />
</div>
<br />
