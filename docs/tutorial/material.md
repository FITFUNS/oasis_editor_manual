---
id: material
title: 머티리얼 적용하기
sidebar_label: 머티리얼 적용하기
---

# 머티리얼 적용하기

OasisW에서 머티리얼을 적용하여 객체의 시각적 특성을 정의하는 방법을 배워보겠습니다.

## 머티리얼이란?

머티리얼은 객체의 표면이 어떻게 보이고 반응하는지를 정의합니다:
- 색상과 텍스처
- 반사율과 투명도
- 거칠기와 광택
- 물리적 특성

## 기본 머티리얼

### 1단계: Box 오브젝트 생성

1. **Hierarchy 뷰**에서 **Add Entity** → **3D** → **Box** 선택
2. **Position** 항목의 Y값을 직접 입력하거나 이동 툴을 사용해 Plane 오브젝트 위에 배치

### 2단계: 머티리얼 생성

1. **Assets 뷰**에서 오른쪽 클릭
2. **New Asset** → **Material** 클릭

![머티리얼 생성](https://via.placeholder.com/600x400/87CEEB/000000?text=New+Asset+→+Material)

### 3단계: 머티리얼 이름 변경

생성된 머티리얼의 이름을 원하는 이름으로 변경합니다:

![머티리얼 이름 변경](https://via.placeholder.com/600x400/87CEEB/000000?text=이름+변경)

### 4단계: 색상 변경

1. **Assets 뷰**에서 생성된 머티리얼 클릭
2. **Inspector 뷰**에서 **Material** → **Diffuse** 클릭
3. **Color** 변경

![색상 변경](https://via.placeholder.com/600x400/87CEEB/000000?text=Diffuse+색상+변경)

### 5단계: 이미지 추가

1. 원하는 이미지를 **Assets 뷰**에 드래그 앤드 드롭

![이미지 추가](https://via.placeholder.com/600x400/87CEEB/000000?text=이미지+드래그+앤드+드롭)

2. **Diffuse**에 이미지를 드래그 앤드 드롭

![Diffuse에 이미지 적용](https://via.placeholder.com/600x400/87CEEB/000000?text=Diffuse+이미지+적용)

### 6단계: Box 오브젝트에 머티리얼 적용

1. **Hierarchy 뷰**에서 Box 오브젝트 선택
2. **Assets 뷰**의 머티리얼을 **Inspector 뷰**의 **Materials**에 드래그 앤드 드롭

![머티리얼 적용](https://via.placeholder.com/600x400/87CEEB/000000?text=Materials+드래그+앤드+드롭)

### 7단계: 결과 확인

**Viewport**의 **Launch**를 눌러서 동작시켜보면 이미지가 추가된 것을 확인할 수 있습니다:

![결과 확인](https://via.placeholder.com/600x400/87CEEB/000000?text=Launch+결과+확인)

