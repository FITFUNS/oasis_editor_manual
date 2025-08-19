---
id: authentication
title: 인증
sidebar_label: 인증
---

# 인증

OasisW는 게스트 로그인 인증 방식을 지원합니다. 사용자 인증을 통해 개인화된 게임 경험과 데이터 저장이 가능합니다.

:::warning 주의사항
**서버 엔티티가 생성되어 있어야 사용 가능한 기능입니다.**
:::

## 게스트 로그인 설정

- 랜덤 사용자 ID 자동 생성

### 설정 절차

- 하이어라키 뷰에서 **Add Entity(+)** 버튼 클릭 후 **Server Side → Authentication** 선택
    - 에셋 뷰에 **guestLogin.js** 파일 자동 생성
    - 하이어라키 뷰에 2D Screen 하위 계층으로 **Guest Login** 생성

![Authentication](/img/usage-guide/10_authentication.png)

### 실행 절차

1. **툴바**에서 **Launch** 클릭

2. **Guest Login** 버튼 클릭 시 게스트 로그인 완료

![Authentication](/img/usage-guide/10_1.png)

3. 리더보드에 **기록 등록 가능**
