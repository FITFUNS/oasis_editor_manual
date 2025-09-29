---
title: 스크롤바 (Scrollbar)
---

스크롤바 컴포넌트는 [스크롤뷰][1] 컴포넌트에 대한 스크롤 컨트롤을 정의합니다.

자세한 내용은 [사용자 인터페이스][2] 섹션을 참조하세요.

![Scrollbar Component](/img/user-manual/scenes/components/component-scrollbar.png)

## 컴포넌트 속성

| 속성    | 설명 |
|-------------|-------------|
| Orientation | 스크롤바가 수평 또는 수직으로 이동하는지 제어합니다. |
| Value       | 스크롤바의 현재 위치 값으로, 0에서 1 범위입니다. |
| Handle      | 스크롤바 핸들로 사용될 엔티티입니다. 이 엔티티는 스크롤바 컴포넌트를 가져야 합니다. |
| Handle Size | 트랙 크기에 대한 핸들의 상대 크기로, 0에서 1 범위입니다. 수직 스크롤바의 경우 값 1은 핸들이 트랙의 전체 높이를 차지함을 의미합니다. |

[1]: /user-manual/scenes/components/scrollview
[2]: /user-manual/user-interface
