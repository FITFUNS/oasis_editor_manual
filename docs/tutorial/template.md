---
id: template
title: 템플릿 활용하기
sidebar_label: 템플릿 활용하기
---

# 템플릿 활용하기

OasisW에서 템플릿을 사용하여 동일한 게임 오브젝트를 재사용하는 방법을 배워보겠습니다.

## 템플릿이란?

템플릿은 다음과 같은 장점을 제공합니다:
- 동일한 오브젝트의 반복 생성 방지
- 일관된 설정과 속성 유지
- 빠른 프로젝트 개발
- 효율적인 에셋 관리

## 템플릿 생성하기

### 1단계: 템플릿으로 만들 오브젝트 선택

1. **Hierarchy 뷰**에서 템플릿으로 만들 오브젝트 선택
2. **Template** → **New Template** 클릭

![템플릿 생성](https://via.placeholder.com/600x400/87CEEB/000000?text=Template+→+New+Template)

### 2단계: 템플릿 확인

**Hierarchy 뷰**와 **Assets 뷰**에 템플릿으로 만들어진 오브젝트가 생성됩니다:

![Hierarchy 뷰 템플릿](https://via.placeholder.com/600x400/87CEEB/000000?text=Hierarchy+템플릿+확인)

![Assets 뷰 템플릿](https://via.placeholder.com/600x400/87CEEB/000000?text=Assets+템플릿+확인)

## 템플릿 사용하기

### 1단계: 템플릿 인스턴스 생성

**Assets 뷰**의 템플릿 에셋을 **Hierarchy 뷰**에 드래그 앤드 드롭하여 게임 오브젝트의 인스턴스로 씬에 배치할 수 있습니다:

![템플릿 인스턴스 생성](https://via.placeholder.com/600x400/87CEEB/000000?text=템플릿+드래그+앤드+드롭)

### 2단계: 결과 확인

**Viewport**의 **Launch**를 눌러서 확인합니다:

![템플릿 결과 확인](https://via.placeholder.com/600x400/87CEEB/000000?text=Launch+결과+확인)

## 템플릿 인스턴스 관리

### 개별 인스턴스 수정

여러 개의 템플릿 인스턴스 중 하나를 골라 속성값(Position, Rotation)을 변경하더라도 다른 인스턴스에는 영향을 주지 않습니다:

![개별 인스턴스 수정](https://via.placeholder.com/600x400/87CEEB/000000?text=개별+인스턴스+수정)

### 템플릿 인스턴스 옵션

템플릿 인스턴스는 **Inspector 뷰**의 윗부분에 **Template Instance**가 있고, 하나의 오브젝트에 변화가 생기면 **VIEW DIFF**, **REVERT ALL**, **APPLY ALL** 버튼이 생성됩니다:

![템플릿 인스턴스 옵션](https://via.placeholder.com/600x400/87CEEB/000000?text=Template+Instance+옵션)

#### VIEW DIFF
**VIEW DIFF** → **Apply to Box** 클릭 시 해당 인스턴스에만 적용됩니다:

![VIEW DIFF 적용](https://via.placeholder.com/600x400/87CEEB/000000?text=VIEW+DIFF+적용)

![개별 적용 결과](https://via.placeholder.com/600x400/87CEEB/000000?text=개별+적용+결과)

![개별 적용 확인](https://via.placeholder.com/600x400/87CEEB/000000?text=개별+적용+확인)

#### REVERT ALL
**REVERT ALL** 클릭 시 인스턴스의 변경 사항을 취소하고 원본 템플릿과 같은 상태로 되돌립니다:

![REVERT ALL](https://via.placeholder.com/600x400/87CEEB/000000?text=REVERT+ALL)

#### APPLY ALL
**APPLY ALL** 클릭 시 원본 템플릿으로 만든 다른 인스턴스에도 모두 변경 사항이 반영됩니다:

![APPLY ALL](https://via.placeholder.com/600x400/87CEEB/000000?text=APPLY+ALL)

![전체 적용 결과](https://via.placeholder.com/600x400/87CEEB/000000?text=전체+적용+결과)

