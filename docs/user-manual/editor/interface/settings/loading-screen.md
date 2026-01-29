---
title: 로딩 화면
---

새로 생성된 모든 OasisW 프로젝트는 기본 로딩 화면을 사용합니다:

![Default Loading Screen](/img/user-manual/editor/launch-page/loading-screen/loading-screen-default.webp)

이 로딩 화면은 실행 페이지와 실제로 배포된 애플리케이션 모두에서 표시됩니다.

## 로딩 화면 커스터마이징

커스텀 로딩 화면을 만들고 싶다면, [툴바](../toolbar) 또는 [뷰포트](../viewport)에 있는 톱니바퀴 아이콘을 클릭하여 [인스펙터](../inspector)에 설정을 불러옵니다.

![Settings](/img/user-manual/editor/toolbar/settings.png)

그다음 `LOADING SCREEN` 섹션으로 이동합니다:

![Loading Screen Settings](/img/user-manual/editor/launch-page/loading-screen/loading-screen-settings.png)

두 가지 선택지가 있습니다:

1. **CREATE DEFAULT** - 기본 로딩 화면의 전체 코드가 포함된 새 로딩 화면 스크립트를 [에셋 패널](../assets)에 생성합니다. 이 스크립트를 원하는 방식으로 자유롭게 수정할 수 있습니다.
2. **SELECT EXISTING** - 에셋 패널에 이미 존재하는 커스텀 로딩 화면 스크립트를 선택합니다.

여기서는 기존 스크립트가 없다고 가정하고, 기본 로딩 화면 스크립트를 생성해 보겠습니다.  
단색 배경만 표시하는 매우 단순한 로딩 화면은 다음과 같습니다:

```javascript
pc.script.createLoadingScreen((app) => {
    // 메인 로딩 화면 div 생성
    const div = document.createElement('div');
    div.style.backgroundColor = "#232323"; // 진한 회색 배경
    div.style.position = "absolute";
    div.style.top = "0";
    div.style.left = "0";
    div.style.height = "100%";
    div.style.width = "100%";
    document.body.appendChild(div);

    // 앱이 시작되면 로딩 화면 제거
    app.once('start', () => {
        document.body.removeChild(div);
    });
});
```

하지만 로딩 바 같은 시각적 피드백을 제공하면 사용자 경험이 훨씬 좋아집니다.
이제 로딩 바를 추가해 스크립트를 업데이트해 보겠습니다:

```javascript
pc.script.createLoadingScreen((app) => {
    // 메인 로딩 화면 div 생성
    const div = document.createElement('div');
    div.style.backgroundColor = "#232323"; // 진한 회색 배경
    div.style.position = "absolute";
    div.style.top = "0";
    div.style.left = "0";
    div.style.height = "100%";
    div.style.width = "100%";
    document.body.appendChild(div);

    // 화면 중앙에 표시될 로딩 바 컨테이너 생성
    const progressBar = document.createElement('div');
    progressBar.style.position = "absolute";
    progressBar.style.top = "50%";
    progressBar.style.left = "25%";
    progressBar.style.transform = "translateY(-50%)";
    progressBar.style.width = "50%";
    progressBar.style.height = "20px";
    progressBar.style.backgroundColor = "#d3d3d3"; // 로딩 바 배경(연한 회색)
    div.appendChild(progressBar);

    // 로딩 진행도를 표시할 내부 바 생성
    const progressFiller = document.createElement('div');
    progressFiller.style.height = "100%";
    progressFiller.style.backgroundColor = "#4caf50"; // 진행 상태를 나타내는 초록색
    progressFiller.style.width = "0%";
    progressBar.appendChild(progressFiller);

    // 프리로드 진행 상황에 따라 로딩 바 업데이트
    app.on('preload:progress', (value) => {
        progressFiller.style.width = (value * 100) + '%';
    });
    app.once('preload:end', () => {
        app.off('preload:progress');
    });

    // 앱이 시작되면 로딩 화면 제거
    app.once('start', () => {
        document.body.removeChild(div);
    });
});
```

원하는 HTML과 CSS를 자유롭게 사용해, 여러분만의 멋진 로딩 화면을 만들어 보세요!