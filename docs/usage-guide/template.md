---
id: template
title: 템플릿 활용하기
sidebar_label: 템플릿 활용하기
---

# 템플릿 활용하기

OasisW에서 템플릿을 사용하여 동일한 게임 오브젝트를 재사용하는 방법을 학습합니다.

## 템플릿이란?

- 동일한 오브젝트의 반복 생성을 방지합니다.
- 일관된 설정과 속성을 유지합니다.
- 빠른 프로젝트 개발을 가능하게 합니다.
- 효율적인 에셋 관리를 제공합니다.

## 템플릿 생성하기

### 1단계: 템플릿으로 만들 오브젝트 선택

1. **하이어라키 뷰**에서 템플릿으로 만들 오브젝트 선택합니다.
2. **Template** → **New Template** 클릭합니다.

![template](/img/tutorial/5_1.png)

### 2단계: 템플릿 확인

**하이어라키 뷰**와 **에셋 뷰**에 템플릿으로 만들어진 오브젝트 생성합니다.

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/tutorial/5_2.png" alt="Image" style={{maxWidth: '25%'}} />
  <img src="/img/tutorial/5_3.png" alt="Image" style={{maxWidth: '70%'}} />
</div>
<br />

## 템플릿 사용하기

### 1단계: 템플릿 인스턴스 생성

**에셋 뷰**의 템플릿 에셋을 **하이어라키 뷰**나 **뷰포트**에 드래그 앤드 드롭하여 오브젝트의 인스턴스로 씬에 배치 가능합니다.

![template](/img/tutorial/5_4.png)

### 2단계: 결과 확인

**뷰포트**의 **Launch**를 클릭하여 결과를 확인합니다.

![template](/img/tutorial/5_5.png)

## 템플릿 인스턴스 관리

### 개별 인스턴스 수정

여러 개의 템플릿 인스턴스 중 하나를 골라 속성값(Position, Rotation)을 변경하더라도 다른 인스턴스에는 영향을 주지 않습니다.

![template](/img/tutorial/5_6.png)

### 템플릿 인스턴스 옵션

템플릿 인스턴스는 **인스팩터 뷰**의 윗부분에 **Template Instance**가 있고, 하나의 오브젝트에 변화가 생기면 **VIEW DIFF**, **REVERT ALL**, **APPLY ALL** 버튼이 생성됩니다.

![template](/img/tutorial/5_7.png)

#### VIEW DIFF
**VIEW DIFF** → **Apply to Box** 클릭 시 해당 인스턴스에만 적용됩니다.

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/tutorial/5_8.png" alt="Image" style={{maxWidth: '55%'}} />
  <img src="/img/tutorial/5_9.png" alt="Image" style={{maxWidth: '35%'}} />
</div>

#### REVERT ALL
**REVERT ALL** 클릭 시 인스턴스의 변경 사항을 취소하고 원본 템플릿과 같은 상태로 되돌립니다.

![template](/img/tutorial/5_10.png)

#### APPLY ALL
**APPLY ALL** 클릭 시 원본 템플릿으로 만든 다른 인스턴스에도 모두 변경 사항이 반영됩니다.

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/tutorial/5_11.png" alt="Image" style={{maxWidth: '45%'}} />
  <img src="/img/tutorial/5_12.png" alt="Image" style={{maxWidth: '45%'}} />
</div>

