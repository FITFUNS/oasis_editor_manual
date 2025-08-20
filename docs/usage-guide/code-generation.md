---
id: code-generation
title: 코드 생성
sidebar_label: 코드 생성
---

# 코드 생성

OasisW의 AI 코드 생성 기능을 활용하여 게임 로직과 스크립트를 자동으로 생성할 수 있습니다.

이 가이드를 통해 AI 코드 생성 과정을 단계별로 익혀보세요.

## 1. 스크립트 생성 후 API Key 발급받기

1. **에셋 뷰**에서 스크립트 파일 생성  

![Code](/img/usage-guide/13_1.png)

2. 생성한 js 파일 더블클릭하여 들어간 후 **API Key 생성**을 위해 Save 옆 아이콘 클릭

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/usage-guide/13_3.png" alt="Image" style={{maxWidth: '25%'}} />
  <img src="/img/usage-guide/13_4.png" alt="Image" style={{maxWidth: '65%'}} />
</div>
<br />

3. **Get API Key** 클릭 → [openRouter.ai](https://openrouter.ai/) 페이지 이동  

![Code](/img/usage-guide/13_5.png)

 
4. 로그인 및 회원가입을 위해 **Sign in** 클릭

![Code](/img/usage-guide/13_6.png)

5. 로그인 후 **프로필 → Keys** 클릭  

![Image](/img/usage-guide/13_7.png)

6. **Create API Key** 클릭

![Image](/img/usage-guide/13_8.png)

7. **키 이름 입력 → Create** 클릭  

![Image](/img/usage-guide/13_9.png)

8. 생성된 API Key 복사

![Image](/img/usage-guide/13_10.png)

## 2. 에디터에서 키 등록, 코드 생성하기

1. 에디터로 돌아와 **API Key** 입력 후 **Apply 버튼** 클릭

![Image](/img/usage-guide/13_11.png)

2. 키 적용 완료, **Yes 버튼** 클릭

![Image](/img/usage-guide/13_12.png)

3. 프롬프트 창에 구현을 원하는 명령어 입력  
   - 예: `"wasd 방향키로 움직임 구현"`  
4. **Send 버튼** 클릭   

![Image](/img/usage-guide/13_13.png)

만약 화면에 빨간색 **Retry 버튼**이 표시되면, 버튼을 눌러 다시 실행!

![Image](/img/usage-guide/13_14.png)

5. **Apply 버튼** 눌러서 코드 적용 후 저장, 코드 창 닫기

![Image](/img/usage-guide/13_15.png)

6. 적용하고자 하는 엔티티에 스크립트 적용

7. **뷰포트**의 **Launch**를 눌러서 동작시켜보면 방향키 움직임에 Box가 이동하는 것 확인 가능

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/usage-guide/13_16_1.png" alt="Image" style={{maxWidth: '45%'}} />
  <img src="/img/usage-guide/13_16_3.png" alt="Image" style={{maxWidth: '45%'}} />
</div>

<!-- ## 활용 팁

- 명확하고 구체적인 요구사항 작성
- 기존 코드와의 호환성 고려
- 단계적 기능 구현
- 코드 리뷰 및 테스트 수행  -->