---
title: 안전 영역 (Safe Area)
---

모바일 장치가 전체 화면을 갖는 추세에 따라, 이어피스 스피커와 전면 카메라를 위한 공간을 만들기 위해 디스플레이에 노치나 컷아웃이 사용됩니다 (아래 iPhone X 참조).

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/iphone-notch.png" />

(이미지 원본: Rafael Fernandez, 수정 버전: OasisW, [CC BY-SA 4.0][cc-by-sa-40], Wikimedia Commons를 통해)

개발자들은 개발 중에 노치에 의해 숨겨질 수 있는 사용자에게 필요한 필수 정보에 대해 주의해야 합니다.

예를 들어, 아래 스크린샷은 데스크톱의 개발자 도구 모바일 보기에서는 괜찮아 보입니다.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/desktop-view.png" width="500" />

하지만 iPhone X와 같은 모바일 장치에서 열면 'Left' 텍스트가 노치 아래에 렌더링되고 'Bottom' 텍스트가 내비게이션 바 아래에 렌더링됩니다.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/mobile-view-render-under-notch.png" width="500" />

## 안전 영역 (Safe Area)

개발자를 돕기 위해, 이러한 장치의 브라우저는 노치나 내비게이션 바가 차지하는 영역 내에서 요소를 배치하기 위한 값을 반환하는 CSS의 [환경 변수][env-mdn]를 지원합니다. 이를 '안전 영역'이라고 합니다.

우리는 이러한 CSS 값을 가져와서 여백 크기 조정을 통해 UI 그룹 요소 엔티티에 적용하는 재사용 가능한 스크립트가 있는 프로젝트를 가지고 있습니다.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/mobile-view-safe-area.png" width="500" />

프로젝트의 UI 설정에는 'Safe Area'라는 전체 화면 그룹 요소가 있는 엔티티가 있습니다. 여기에는 장치의 안전 영역 내에서 요소를 맞추는 로직을 포함하는 'mobileSafeArea' 스크립트가 연결되어 있습니다.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/hierarchy-layout.png" width="420" />

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/safe-area-entity-setup.png" width="420" />

모든 필수 UI 요소는 안전 영역 엔티티를 기준으로 앵커링되도록 안전 영역 엔티티의 자식으로 배치할 수 있습니다.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/hierarchy-essential-elements.png" width="420" />

개발을 돕기 위해, 장치가 없이도 UI 레이아웃이 어떻게 보일지 미리 볼 수 있도록 안전 영역을 시뮬레이션하는 디버그 설정을 활성화할 수 있습니다.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/debug-config.png" width="600" />

디버그 설정은 런치 탭에서도 실시간 업데이트로 편집할 수 있습니다.

<img loading="lazy" src="/img/user-manual/user-interface/safe-area/debug-config-runtime.gif" width="500" />

[env-mdn]: https://developer.mozilla.org/en-US/docs/Web/CSS/env()
<!-- [safe-area-project]: https://playcanvas.com/project/828118/overview/mobile-ui-safe-areas -->
[cc-by-sa-40]: https://creativecommons.org/licenses/by-sa/4.0
