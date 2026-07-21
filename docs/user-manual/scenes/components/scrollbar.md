---
title: 스크롤바 (Scrollbar)
---

스크롤바 컴포넌트는 [스크롤뷰][1] 컴포넌트를 스크롤하는 방식을 설정합니다.

더 자세한 내용은 [사용자 인터페이스][2] 섹션을 참고하세요.

![Scrollbar Component](/img/user-manual/scenes/components/component-scrollbar.png)

## 컴포넌트 속성

| 속성    | 설명 |
|-------------|-------------|
| Orientation | 스크롤바가 가로로 움직일지 세로로 움직일지 정합니다. |
| Value       | 스크롤바가 현재 놓인 위치 값으로, 0에서 1 사이의 값을 가집니다. |
| Handle      | 스크롤바의 손잡이로 쓸 엔티티입니다. 이 엔티티에는 스크롤바 컴포넌트가 있어야 합니다. |
| Handle Size | 트랙 전체 크기에 대한 손잡이의 상대적인 크기로, 0에서 1 사이의 값입니다. 세로 스크롤바에서 값이 1이면 손잡이가 트랙 높이를 꽉 채웁니다. |

[1]: /user-manual/scenes/components/scrollview
[2]: /user-manual/user-interface
