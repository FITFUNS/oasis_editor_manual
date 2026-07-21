---
title: 화면 (Screen)
---

화면 컴포넌트는 사용자 인터페이스가 놓일 영역과 그리는 방식을 정합니다. 화면 컴포넌트 아래에 넣는 자식은 모두 요소 컴포넌트를 가지고 있어야 합니다

더 자세한 내용은 [사용자 인터페이스][0] 섹션을 참고하세요.

![Screen Component](/img/user-manual/scenes/components/component-screen.png)

## 컴포넌트 속성

| 속성             | 설명 |
|----------------------|-------------|
| Screen Space         | 켜면 화면의 내용이 캔버스 위에 얹히는 2D 오버레이로 그려집니다. |
| Resolution           | Screen Space가 false일 때 쓰입니다. 화면 좌표의 해상도입니다. 화면 좌표는 오른쪽과 위로 갈수록 커집니다. Screen Space 컴포넌트일 때는 해상도가 언제나 캔버스 해상도를 따라 정해집니다. |
| Reference Resolution | Scale Mode가 Blend일 때 쓰입니다. 스케일 배율을 계산하는 데 쓰는 기준 해상도입니다. |
| Scale Mode           | 창 크기가 화면 크기와 다를 때 사용자 인터페이스가 어떻게 조정되는지 정합니다. 다음 중 하나를 고를 수 있습니다: <ul><li>None: 아무것도 크기가 바뀌지 않습니다.</li><li>Blend: 화면 내용이 기준 해상도와 실제 해상도의 비율에 맞춰 크기가 조정됩니다. Scale Blend 속성으로 가로 해상도와 세로 해상도 중 어느 쪽을 더 많이 반영할지 그 비중을 조절합니다.</li></ul> |
| Scale Blend          | 가로(Scale Blend = 0)와 세로(Scale Blend = 1) 중 어느 쪽에 더 무게를 둘지 정하는 값입니다. |
| Priority             | 같은 레이어에 있는 화면 컴포넌트를 그리는 순서를 정합니다(우선순위가 높을수록 위에 그려집니다). 0에서 255 사이의 정수여야 합니다. |

[0]: /user-manual/user-interface
