---
title: 화면 (Screen)
---

화면 컴포넌트는 사용자 인터페이스의 영역과 렌더링을 정의합니다. 화면 컴포넌트에 추가된 자식은 모두 요소 컴포넌트를 가져야 합니다

자세한 내용은 [사용자 인터페이스][0] 섹션을 참조하세요.

![Screen Component](/img/user-manual/scenes/components/component-screen.png)

## 컴포넌트 속성

| 속성             | 설명 |
|----------------------|-------------|
| Screen Space         | 활성화되면 화면의 내용이 캔버스에 오버레이로 2D로 렌더링됩니다. |
| Resolution           | Screen Space가 false일 때. 화면 좌표의 해상도입니다. 화면 좌표는 오른쪽과 위로 이동할 때 증가합니다. Screen Space 컴포넌트의 경우 해상도는 항상 캔버스의 해상도에서 결정됩니다. |
| Reference Resolution | Scale Mode가 Blend일 때. 스케일 팩터를 계산하는 데 사용되는 해상도입니다. |
| Scale Mode           | 창 크기가 화면 크기와 일치하지 않을 때 사용자 인터페이스가 어떻게 변경되는지 결정합니다. 다음 중 하나일 수 있습니다: <ul><li>None: 아무것도 스케일되지 않습니다.</li><li>Blend: 화면 내용이 기준 해상도와 실제 해상도의 비율로 스케일됩니다. Scale Blend 속성을 사용하여 수평 및 수직 해상도 사용 간의 스케일 가중치를 조정합니다.</li></ul> |
| Scale Blend          | 수평(Scale Blend = 0)과 수직(Scale Blend = 1) 간의 스케일링 가중치입니다. |
| Priority             | 같은 레이어의 화면 컴포넌트가 렌더링되는 순서를 결정합니다(높은 우선순위가 위에 렌더링됨). 숫자는 0과 255 사이의 정수여야 합니다. |

[0]: /user-manual/user-interface
