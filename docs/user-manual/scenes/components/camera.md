---
title: 카메라 (Camera)
---

카메라 컴포넌트를 쓰면 엔티티가 특정 시점에서 씬을 화면에 그려 낼 수 있습니다.

컴포넌트 패널 오른쪽 위에 있는 토글로 이 컴포넌트를 켜거나 끌 수 있습니다. 켜면 카메라가 매 프레임마다 씬을 그립니다.

![Camera component](/img/user-manual/scenes/components/component-camera.png)

## 속성

| 속성        | 설명 |
|-----------------|-------------|
| Clear Buffers   | 프레임을 새로 그리기 전에 카메라의 렌더 타겟을 어떻게 지울지 정합니다. 카메라는 두 종류의 버퍼를 가집니다. 화면에 보이는 이미지를 담는 컬러 버퍼와, 각 픽셀이 카메라에서 얼마나 떨어져 있는지를 담는 깊이 버퍼입니다. 두 버퍼는 따로따로 지울 수 있습니다: <ul><li>Color: 켜면 씬을 그리기 전에 렌더 타겟을 지정한 클리어 색으로 지웁니다.</li><li>Depth: 켜면 씬을 그리기 전에 렌더 타겟의 깊이 버퍼를 지웁니다.</li></ul> |
| Clear Color     | 카메라의 렌더 타겟을 지울 때 쓰는 색입니다. 이 속성은 'Clear Color Buffer'가 켜져 있을 때만 나타납니다. |
| Depth Grabpass     | 켜면 카메라가 장면의 깊이 맵(Depth Map)을 담은 텍스처를 만들도록 요청합니다. |
| Color Grabpass     | 켜면 카메라가 장면의 컬러 맵(Color Map)을 담은 텍스처를 만들도록 요청합니다. |
| Projection      | 카메라가 장면을 화면에 투영하는 방식입니다. 다음 중에서 고릅니다: <ul><li>Perspective</li><li>Orthographic</li></ul> |
| Frustum Culling | 켜면 카메라의 시야 범위(뷰 프러스텀) 안에 들어오는 메시만 그립니다. 꺼 두면 보이든 안 보이든 씬 전체를 그립니다. |
| Field of View   | 원근(Perspective) 카메라에서 위아래 클립 평면 사이의 각도입니다. 이 속성은 'Projection'이 'Perspective'일 때만 나타납니다. |
| Ortho Height    | 직교(Orthographic) 카메라에서 위아래 클립 평면 사이의 월드 단위 거리입니다. 이 속성은 'Projection'이 'Orthographic'일 때만 나타납니다. |
| Near Clip       | 카메라 공간에서 카메라 시점부터 근거리 클립 평면까지의 거리입니다. 이보다 가까운 것은 그리지 않습니다. |
| Far Clip        | 카메라 공간에서 카메라 시점부터 원거리 클립 평면까지의 거리입니다. 이보다 먼 것은 그리지 않습니다. |
| Priority        | 엔진이 여러 카메라 뷰를 그리는 순서를 정하는 숫자입니다. 숫자가 작을수록 먼저 그려집니다. |
| Viewport        | 카메라가 연결된 렌더 타겟 위에서 어느 영역에 그릴지 정하는 사각형입니다. 이를 이용하면 분할 화면이나 화면 속 화면 같은 것을 만들 수 있습니다. 아래 형식의 정규화된 좌표(0에서 1)로 지정합니다: <ul><li>x: 왼쪽 아래 x 좌표</li><li>y: 왼쪽 아래 y 좌표</li><li>w: 사각형의 너비</li><li>h: 사각형의 높이</li></ul> |
| Layers        | 이 카메라가 그릴 레이어들입니다. |

## 스크립팅 인터페이스

[스크립트 컴포넌트][2]를 이용하면 카메라 컴포넌트의 속성을 코드로 조절할 수 있습니다. 카메라 컴포넌트의 스크립팅 인터페이스는 [여기][3]에서 확인할 수 있습니다.

[2]: /user-manual/scenes/components/script
[3]: https://manual.oasisserver.link/engine/classes/CameraComponent.html
