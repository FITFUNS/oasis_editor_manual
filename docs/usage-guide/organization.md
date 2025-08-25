---
id: organization
title: 조직 설정
sidebar_label: 조직 설정
---

# 조직 설정

OasisW Studio 조직 설정 기능에 대한 가이드입니다.

## 접속 방법

- 로그인 되어 있는 [OasisW Studio](https://oasisserver.link/)의 왼쪽 상단 **조직** 클릭

![Organization](/img/usage-guide/14_1.png)

## 조직 설정 상세 설명

### 1. 기본 정보 확인
- 자신의 **이름**, **이메일**, **권한(멤버/관리자)** 을 확인할 수 있음

### 2. 조직명 변경
- 조직 설정 옆 **수정 아이콘** 클릭하여 조직명을 변경할 수 있음

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/usage-guide/14_7.png" alt="Image" style={{maxWidth: '35%'}} />
  <img src="/img/usage-guide/14_6.png" alt="Image" style={{maxWidth: '55%'}} />
</div>
<br />

### 3. 사용자 초대
- `멤버 초대` 버튼을 클릭하여 이메일을 통해 조직에 새로운 사용자를 초대할 수 있음
- 초대 시 권한을 **관리자** 또는 **멤버**로 설정 가능

![Organization](/img/usage-guide/14_2.png)
![Organization](/img/usage-guide/14_3.png)

### 4. 권한 및 제약
- **관리자**: 멤버 권한을 가진 사용자를 **내보내기**할 수 있음  
- **멤버**: 스스로 조직을 **나갈 수 없음**

![Organization](/img/usage-guide/14_4.png)

### 5. 접근 권한
- 같은 조직에 속한 사용자들은 조직을 선택하여 해당 조직의 **서버 제어** 및 **프로젝트 접근**이 가능함

![Organization](/img/usage-guide/14_5.png)

---

:::warning 주의사항
 
- 사용자 **A**가 사용자 **B**의 조직에 초대된 경우 → A는 **B의 모든 프로젝트에 접근 가능**
- 그러나 **B**는 A의 조직 프로젝트에는 접근할 수 없음 → B가 A의 조직에 **초대되어야 함**

- 여러 조직에 속해 있는 경우, 스튜디오에서 **어떤 조직으로 선택했느냐**에 따라  
  프로젝트 생성 시 **프로젝트의 소속 조직**이 결정됨  
  - 예: A가 B의 조직에 속해 있고, 스튜디오에서 B 조직으로 선택한 상태에서 프로젝트를 생성하면  
    → 해당 프로젝트는 **B 조직 소속**
:::