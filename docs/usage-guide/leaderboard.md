---
id: leaderboard
title: 리더보드
sidebar_label: 리더보드
---

# 리더보드

OasisW의 리더보드 시스템을 학습합니다.

:::warning 주의사항
**서버 엔티티가 생성되어 있어야 사용 가능한 기능입니다.**
:::

### 오아시스 스튜디오 리더보드 생성 절차

1. [OasisW Studio](https://oasisserver.link/)에 접속합니다.

2. **Leaderboard**를 클릭한 후 새 리더보드 만들기를 클릭합니다.

![Server](/img/usage-guide/12_6.png)

3. 리더보드 목록에 새로 생성된 리더보드를 확인할 수 있습니다.

![Server](/img/usage-guide/12_7.png)

### 에디터 리더보드 설정 절차

1. **하이어라키 뷰**에서 **Add Entity(+)** 버튼 클릭 → **Server Side → Leaderboard**를 선택합니다.
    - 에셋 뷰에 관련 템플릿과 **leaderboard.js** 파일을 자동 생성합니다.
    - 하이어라키 뷰에 2D Screen 하위 계층으로 **Leaderboard**를 생성합니다.

![Server](/img/usage-guide/12_leaderboard.png)

2. **Leaderboard** 클릭 → **인스팩터 뷰** → **script**에서 사용할 leaderboard를 선택합니다.

![Server](/img/usage-guide/12_8.png)

### 실행 절차 

1. **툴바**에서 **Launch**를 클릭합니다.

2. **리더보드** 버튼을 클릭하여 확인할 수 있습니다.

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/usage-guide/12_1.png" alt="Image" style={{maxWidth: '45%'}} />
  <img src="/img/usage-guide/12_2.png" alt="Image" style={{maxWidth: '45%'}} />
</div>
<br />

3. **스코어 추가** 시 로그인 된 게스트 계정으로 점수가 등록됩니다.

![Server](/img/usage-guide/12_3.png)

### 스코어 적용 방법

1. 엔티티에 스코어 등록 함수가 들어있는 스크립트를 적용합니다.

```javascript
pc.app.fire("leaderboardRecord:write", {score: 1000})
```

2. 엔터키를 눌렀을 때 점수가 등록되는 코드입니다.

```javascript
var ScoreSubmit = pc.createScript('scoreSubmit');

// initialize code called once per entity
ScoreSubmit.prototype.initialize = function() {
    // 예: 엔터키를 누르면 점수를 등록하도록 설정
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
};

// 점수 등록 이벤트
ScoreSubmit.prototype.submitScore = function(score) {
    // 리더보드에 점수 기록 요청
    this.app.fire("leaderboardRecord:write", { score: score });
    console.log("점수 등록 요청:", score);
};

// 키 입력 감지 예시
ScoreSubmit.prototype.onKeyDown = function (event) {
    if (event.key === pc.KEY_ENTER) {
        // 엔터 키를 누르면 1000점 등록
        this.submitScore(1000);
    }
};
```

엔터키를 누르면 변경 된 점수를 확인할 수 있습니다.

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/usage-guide/12_4.png" alt="Image" style={{maxWidth: '45%'}} />
  <img src="/img/usage-guide/12_5.png" alt="Image" style={{maxWidth: '45%'}} />
</div>