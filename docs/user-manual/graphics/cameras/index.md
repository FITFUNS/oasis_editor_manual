---
title: 카메라 (Cameras)
---

카메라는 씬을 화면에 렌더링하는 역할을 담당합니다. 무엇이든 보려면 씬에 최소 하나의 카메라가 필요합니다. OasisW에서 새 씬을 생성하면 자동으로 단일 카메라(방향성 조명과 함께)가 포함됩니다.

## 카메라 생성

에디터의 3D 뷰에서 선택되지 않은 카메라는 다음 아이콘으로 표시됩니다:

![Camera icon](/img/user-manual/graphics/cameras/camera_icon.png)

새 카메라를 생성하려면 새 엔티티를 만들고 카메라 컴포넌트를 추가하면 됩니다. 편의를 위해 에디터 메뉴에는 이를 한 번에 수행하는 항목이 있습니다:

![Camera creation](/img/user-manual/graphics/cameras/camera_create.png)

## 직교 투영 vs 원근 투영

카메라는 두 가지 투영 타입 중 하나를 가질 수 있습니다: 직교(orthographic) 또는 원근(perspective). 직교 카메라는 평행 투영을 정의하며 2D 또는 아이소메트릭 게임에 자주 사용됩니다.

![Orthographic camera](/img/user-manual/graphics/cameras/camera_orthographic.png)

더 일반적으로 사용되는 것은 원근 투영입니다. 이는 우리의 눈이나 카메라가 작동하는 방식을 더 밀접하게 모방합니다.

![Perspective camera](/img/user-manual/graphics/cameras/camera_perspective.png)

## 뷰포트 제어

기본적으로 카메라는 렌더 타겟의 전체 너비와 높이로 렌더링됩니다. 하지만 이 동작을 변경하고 싶은 상황이 있을 수 있습니다. 예를 들어, 각 플레이어의 시점을 보여주기 위해 스플릿 스크린 렌더링이 필요한 로컬 멀티플레이어 모드가 있는 게임을 작성하고 있을 수 있습니다.

2인용 수평 스플릿 스크린의 경우, 두 개의 카메라를 생성하고 뷰포트를 다음과 같이 구성합니다:

![Horizontal splitscreen](/img/user-manual/graphics/cameras/camera_horizontal_splitscreen.png)

그리고 수직 스플릿 스크린의 경우, 뷰포트를 다음과 같이 구성합니다:

![Vertical splitscreen](/img/user-manual/graphics/cameras/camera_vertical_splitscreen.png)
