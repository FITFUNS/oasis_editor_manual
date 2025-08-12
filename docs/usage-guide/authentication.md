---
id: authentication
title: 인증
sidebar_label: 인증
---

# 인증

OasisW는 게스트 로그인 인증 방식을 지원합니다. 사용자 인증을 통해 개인화된 게임 경험과 데이터 저장이 가능합니다.

## 게스트 로그인 설정

- 별도 계정 없이 즉시 게임 시작
- 임시 사용자 ID 자동 생성
- 게임 진행 데이터 임시 저장

### 설정 절차

1. 하이어라키 뷰에서 **Add Entity(+)** 버튼 클릭 후 **Server Side → Authentication** 선택
    - 에셋 뷰에 **guestLogin.js** 파일 자동 생성
    - 하이어라키 뷰에 2D Screen 하위 계층으로 **Guest Login** 생성

![Authentication](/img/usage-guide/10_authentication.png)

2. **툴바**에서 **Launch** 클릭

3. **Guest Login** 버튼 클릭 시 게스트 로그인 완료

4. 리더보드에 **기록 등록 가능**
