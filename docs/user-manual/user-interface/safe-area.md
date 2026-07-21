---
title: 안전 영역 (Safe Area)
---

요즘 모바일 장치가 화면을 꽉 채우는 쪽으로 가면서, 통화 스피커와 전면 카메라 자리를 마련하려고 화면에 노치나 컷아웃을 넣습니다 (아래 iPhone X 참고).

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/iphone-notch.png" />

(이미지 원본: Rafael Fernandez, 수정 버전: OasisW, [CC BY-SA 4.0][cc-by-sa-40], Wikimedia Commons를 통해)

개발할 때는 노치에 가려질 수 있는 자리에 사용자에게 꼭 필요한 정보를 두지 않도록 조심해야 합니다.

예를 들어 아래 스크린샷은 데스크톱 개발자 도구의 모바일 보기에서는 괜찮아 보입니다.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/desktop-view.png" width="500" />

하지만 iPhone X 같은 실제 모바일 장치에서 열면 'Left' 글자가 노치 아래에, 'Bottom' 글자가 내비게이션 바 아래에 그려져 가려집니다.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/mobile-view-render-under-notch.png" width="500" />

## 안전 영역 (Safe Area)

이런 문제를 돕기 위해, 이런 장치의 브라우저는 CSS의 [환경 변수][env-mdn]를 지원합니다. 이 값을 쓰면 노치나 내비게이션 바가 차지하는 영역을 피해 요소를 배치할 수 있습니다. 이렇게 안전하게 쓸 수 있는 공간을 '안전 영역'이라고 부릅니다.

우리는 이 CSS 값을 읽어와 여백 크기를 조절하는 방식으로 UI 그룹 요소 엔티티에 적용해 주는, 다시 쓸 수 있는 스크립트가 들어 있는 프로젝트를 제공합니다.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/mobile-view-safe-area.png" width="500" />

이 프로젝트의 UI 설정에는 'Safe Area'라는 전체 화면 그룹 요소를 가진 엔티티가 있습니다. 여기에는 장치의 안전 영역 안쪽에 요소를 맞춰 주는 로직이 담긴 'mobileSafeArea' 스크립트가 연결되어 있습니다.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/hierarchy-layout.png" width="420" />

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/safe-area-entity-setup.png" width="420" />

꼭 필요한 UI 요소들은 안전 영역 엔티티의 자식으로 넣으면, 안전 영역 엔티티를 기준으로 앵커링되어 안전한 자리에 놓입니다.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/hierarchy-essential-elements.png" width="420" />

개발을 돕기 위해, 안전 영역을 흉내 내는 디버그 설정을 켤 수도 있습니다. 이걸 켜면 실제 장치가 없어도 UI 레이아웃이 어떻게 보일지 미리 확인할 수 있습니다.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/debug-config.png" width="600" />

이 디버그 설정은 런치 탭에서 실시간으로 값을 바꿔 가며 편집할 수도 있습니다.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/debug-config-runtime.gif" width="500" />

[env-mdn]: https://developer.mozilla.org/en-US/docs/Web/CSS/env()
<!-- [safe-area-project]: https://playcanvas.com/project/828118/overview/mobile-ui-safe-areas -->
[cc-by-sa-40]: https://creativecommons.org/licenses/by-sa/4.0
