---
title: 카메라 (Cameras)
---

카메라는 씬을 화면에 그려 주는 역할을 합니다. 그래서 무언가를 보려면 씬에 카메라가 적어도 하나는 있어야 합니다. OasisW에서 새 씬을 만들면 카메라 하나가 방향성 조명과 함께 자동으로 들어갑니다.

## 카메라 생성

에디터의 3D 뷰에서 선택하지 않은 카메라는 아래 아이콘으로 보입니다:

![Camera icon](/img/user-manual/graphics/cameras/camera_icon.png)

카메라를 새로 만들려면 엔티티를 하나 만들고 거기에 카메라 컴포넌트를 추가하면 됩니다. 더 간편하게는, 에디터 메뉴에 이 두 과정을 한 번에 해 주는 항목이 있습니다:

![Camera creation](/img/user-manual/graphics/cameras/camera_create.png)

## 직교 투영 vs 원근 투영

카메라는 두 가지 투영 방식 중 하나를 쓸 수 있습니다: 직교(orthographic) 또는 원근(perspective). 직교 카메라는 물체를 평행하게 비추기 때문에 멀고 가까움에 따라 크기가 달라지지 않으며, 2D나 아이소메트릭 게임에서 자주 씁니다.

![Orthographic camera](/img/user-manual/graphics/cameras/camera_orthographic.png)

더 흔히 쓰는 것은 원근 투영입니다. 우리 눈이나 실제 카메라처럼 멀리 있는 것은 작게, 가까이 있는 것은 크게 보이도록 그려 줍니다.

![Perspective camera](/img/user-manual/graphics/cameras/camera_perspective.png)

## 뷰포트 제어

기본적으로 카메라는 렌더 타겟 전체를 꽉 채워 그립니다. 하지만 이걸 바꾸고 싶을 때가 있습니다. 예를 들어 한 화면을 나눠 각 플레이어의 시점을 보여 주는 스플릿 스크린이 필요한 로컬 멀티플레이어 게임을 만든다고 해 봅시다.

두 명이 위아래로 화면을 나누는 경우, 카메라를 두 개 만들고 뷰포트를 아래처럼 맞춥니다:

![Horizontal splitscreen](/img/user-manual/graphics/cameras/camera_horizontal_splitscreen.png)

화면을 좌우로 나누는 경우에는 뷰포트를 아래처럼 맞춥니다:

![Vertical splitscreen](/img/user-manual/graphics/cameras/camera_vertical_splitscreen.png)
