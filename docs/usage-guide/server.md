---
id: server
title: 서버
sidebar_label: 서버
---

# 서버

OasisW의 서버 기능과 도구들을 알아보겠습니다.

## 서버 생성

프로젝트에서 서버 기능을 사용하려면 먼저 서버를 생성해야 합니다. 

### 생성 절차

1. [OasisW 서버 사이트](https://oasisserver.link/)에 접속하여 로그인

![Server](/img/usage-guide/9_server.png)

2. 에디터 페이지의 하이어라키 뷰에서 **Add Entity(+)** 버튼 클릭 후 **Server Side → Server** 선택
    - 에셋 뷰에 server.js 파일 자동 생성

![Server](/img/usage-guide/9_1_server.png)

3. Server 클릭 → 인스팩터 뷰 → Script → 생성된 server 선택 

![Server](/img/usage-guide/9_2_server.png)

## 주의사항

### 2D Screen 내 엔티티 배치 순서
서버 관련 엔티티를 추가할 경우 2D Screen 안에 생성됩니다. 2D Screen은 계층 구조에서 위에 있는 엔티티가 먼저 렌더링되므로, **먼저 보이고 싶은 엔티티를 하단에 배치**해야 합니다. UI 요소의 표시 순서를 고려하여 배치하세요.

## 주요 서버 기능

### [1. 인증](./authentication)
사용자 로그인, 회원가입, 계정 관리 등 인증 시스템에 대한 상세한 설명을 확인할 수 있습니다.

### [2. 채팅](./chat)
실시간 멀티플레이어 채팅 시스템의 설정과 사용 방법에 대한 상세한 가이드입니다.

### [3. 리더보드](./leaderboard)
게임 점수 및 순위 관리 시스템의 구성과 운영 방법에 대한 상세한 설명을 확인할 수 있습니다.
