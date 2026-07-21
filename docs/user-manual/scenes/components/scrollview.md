---
title: 스크롤뷰 (Scrollview)
---

스크롤뷰 컴포넌트는 사용자 인터페이스에서 스크롤할 수 있는 영역을 만듭니다. 이 영역은 [스크롤바][1] 컴포넌트를 이용해 스크롤합니다.

더 자세한 내용은 [사용자 인터페이스][2] 섹션을 참고하세요.

![Scrollview Component](/img/user-manual/scenes/components/component-scrollview.png)

## 컴포넌트 속성

| 속성                | 설명 |
|-------------------------|-------------|
| Scroll Mode             | 내용의 끝을 넘어서 스크롤했을 때 스크롤 뷰가 어떻게 반응할지 정합니다. 모드는 다음과 같습니다: <ul><li>Clamp: 내용이 경계 밖으로는 스크롤되지 않습니다.</li><li>Bounce: 내용이 경계를 잠깐 넘어갔다가 부드럽게 제자리로 돌아옵니다.</li><li>Infinite: 내용을 끝없이 계속 스크롤할 수 있습니다.</li></ul> |
| Bounce                  | 내용이 제자리로 돌아오기 전에 경계를 얼마나 넘어갈 수 있는지 정합니다. |
| Friction                | 내용을 튕겼을 때(휴대폰에서 손가락으로 밀거나 마우스 휠을 빠르게 굴렸을 때) 얼마나 잘 미끄러지는지 정합니다. 값이 1이면 내용이 곧바로 멈추고, 0이면 계속 움직입니다(또는 스크롤 모드에 따라 내용의 경계에 닿을 때까지 움직입니다). |
| Use Mouse Wheel         | 마우스가 영역 안에 있을 때 마우스 휠로 스크롤할 수 있게 할지 정합니다. |
| Mouse Wheel Sensitivity | 마우스 휠의 가로·세로 감도입니다. *Use Mouse Wheel*이 켜져 있을 때만 적용됩니다. 어느 방향의 값을 0으로 두면 그 방향으로는 휠 스크롤이 되지 않습니다. 1은 무난한 기본 감도이며, 더 빠르거나 느리게 하려면 1보다 크거나 작게 조절하면 됩니다. 기본값은 [1, 1]입니다. |
| Viewport                | 내용을 보여줄 창(마스크된 영역)으로 쓸 엔티티입니다. 이 엔티티에는 ElementGroup 컴포넌트가 있어야 합니다. |
| Content                 | 실제로 스크롤되는 내용을 담은 엔티티입니다. 이 엔티티에는 Element 컴포넌트가 있어야 합니다. |
| Horizontal              | 가로 스크롤을 켤지 정합니다. |
| Scrollbar (horizontal)  | 가로 스크롤바로 쓸 엔티티입니다. 이 엔티티에는 Scrollbar 컴포넌트가 있어야 합니다. |
| Visibility (horizontal) | 가로 스크롤바를 항상 보여줄지, 아니면 내용이 창보다 클 때만 보여줄지 정합니다. |
| Vertical                | 세로 스크롤을 켤지 정합니다. |
| Scrollbar (vertical)    | 세로 스크롤바로 쓸 엔티티입니다. 이 엔티티에는 Scrollbar 컴포넌트가 있어야 합니다. |
| Visibility (vertical)   | 세로 스크롤바를 항상 보여줄지, 아니면 내용이 창보다 클 때만 보여줄지 정합니다. |

[1]: /user-manual/scenes/components/scrollbar
[2]: /user-manual/user-interface
