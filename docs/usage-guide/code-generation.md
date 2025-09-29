---
id: code-generation
title: 코드 생성
sidebar_label: 코드 생성
---

# 코드 생성

OasisW의 AI 코드 생성 기능을 활용하여 게임 로직과 스크립트를 자동으로 생성하는 방법을 학습합니다.

## 1. 스크립트 생성 및 기능 설명

1. **에셋 뷰**에서 스크립트 에셋을 생성합니다.

![Code](/img/usage-guide/13_1.png)

2. 생성한 스크립트 에셋을 더블클릭하여 코드 에디터를 엽니다.

![Code](/img/usage-guide/13_2.png)

### 1. Settings

에디터의 테마를 변경할 수 있습니다.

![Code](/img/usage-guide/13_12.png)

### 2. History

AI로 생성한 코드의 히스토리를 확인하고 관리할 수 있습니다.

![Code](/img/usage-guide/13_3.png)

* **Restore** : 적용 전 상태로 되돌립니다.
![Code](/img/usage-guide/13_10.png)

* **Delete** : 히스토리를 삭제합니다.
![Code](/img/usage-guide/13_4.png)

### 3. Add File

참조할 스크립트 파일을 추가할 수 있습니다.

![Code](/img/usage-guide/13_5.png)

### 4. Add Entity

참조할 엔티티를 추가할 수 있습니다.

![Code](/img/usage-guide/13_6.png)

## 2. 코드 생성하기

1. 프롬프트 창에 구현을 원하는 명령어를 입력하고 **Send 버튼**을 클릭합니다.  
   - 예: `"wasd 키로 움직임 구현"`  

![Image](/img/usage-guide/13_7.png)

2. **Apply Current Code**를 클릭합니다.

![Image](/img/usage-guide/13_8.png)

3. **Accept All/Revert 버튼**을 활용하여 코드를 업데이트합니다.

![Image](/img/usage-guide/13_9.png)

* **1. Save** : 히스토리에 저장하지 않고 코드를 적용합니다.
* **2. Revert** : 생성된 코드가 아닌 기존 코드로 되돌립니다.
![Image](/img/usage-guide/13_11.png)
* **3. Accept All** : 히스토리에 저장하며 생성된 코드를 적용합니다.
