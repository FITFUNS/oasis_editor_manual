---
title: 컴포넌트 (Components)
---

컴포넌트는 엔티티에 추가하거나 제거할 수 있는 기능을 캡슐화합니다. 예를 들어, 컴포넌트는 엔티티가 사운드를 재생하거나, 3D 모델을 렌더링하거나, 스크립트를 실행할 수 있게 할 수 있습니다.

OasisW 에디터나 엔진 API를 사용하여 엔티티에 컴포넌트를 추가할 수 있습니다. 컴포넌트가 노출하는 속성은 엔티티를 선택할 때 인스펙터에 나열됩니다.

## 컴포넌트 타입

OasisW 엔진에는 다양한 컴포넌트가 정의되어 있습니다:

| 컴포넌트                         | 설명                                                                   |
| --------------------------------- | ----------------------------------------------------------------------------- |
| [Anim](/user-manual/scenes/components/anim)                      | 엔티티 계층 구조에서 실행할 수 있는 상태 그래프와 애니메이션을 지정합니다. |
| [Audio Listener](/user-manual/scenes/components/audiolistener)   | 3D 오디오 재생을 위한 리스너의 위치를 지정합니다.                 |
| [Button](/user-manual/scenes/components/button)                  | 사용자 인터페이스 버튼을 생성합니다.                                              |
| [Camera](/user-manual/scenes/components/camera)                  | 엔티티의 위치에서 씬을 렌더링합니다.                            |
| [Collision](/user-manual/scenes/components/collision)            | 엔티티에 충돌 볼륨을 할당합니다.                                     |
| [Element](/user-manual/scenes/components/element)                | 사용자 인터페이스 텍스트 또는 이미지 요소를 정의합니다.                               |
| [Layout Child](/user-manual/scenes/components/layout-child)      | 하나의 요소에 대해 기본 레이아웃 그룹 속성을 재정의합니다.                    |
| [Layout Group](/user-manual/scenes/components/layout-group)      | 자식 사용자 인터페이스 요소의 위치와 스케일을 자동으로 설정합니다.       |
| [Light](/user-manual/scenes/components/light)                    | 엔티티에 동적 광원을 연결합니다.                                |
| [Particle System](/user-manual/scenes/components/particlesystem) | 엔티티에 파티클 시스템을 연결합니다.                                     |
| [Rigid Body](/user-manual/scenes/components/rigidbody)           | 엔티티를 씬의 물리 시뮬레이션에 추가합니다.                           |
| [Render](/user-manual/scenes/components/render)                  | 그래픽 프리미티브 또는 렌더 에셋을 렌더링합니다.                              |
| [Screen](/user-manual/scenes/components/screen)                  | 사용자 인터페이스의 영역과 렌더링을 정의합니다.                           |
| [Script](/user-manual/scenes/components/script)                  | 엔티티가 사용자 정의 동작을 구현하기 위해 JavaScript 조각을 실행할 수 있게 합니다.   |
| [Scrollbar](/user-manual/scenes/components/scrollbar)            | Scrollview 컴포넌트에 대한 스크롤 컨트롤을 정의합니다.                       |
| [Scroll View](/user-manual/scenes/components/scrollview)         | 사용자 인터페이스에서 스크롤 가능한 영역을 정의합니다.                                |
| [Sound](/user-manual/scenes/components/sound)                    | 오디오 에셋을 재생합니다.                                                           |
| [Sprite](/user-manual/scenes/components/sprite)                  | 엔티티의 위치에서 2D 그래픽을 렌더링합니다.                            |
<!-- | [GSplat](/user-manual/scenes/components/gsplat)                  | Renders a 3D Gaussian Splat at the location of the entity.                    | -->

### 사용 중단된 컴포넌트

OasisW는 여전히 일부 사용 중단된 컴포넌트를 제공합니다. 이러한 컴포넌트는 새 프로젝트에서 사용하지 않는 것이 좋습니다.

| 컴포넌트              | 설명                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------- |
| [Animation](/user-manual/scenes/components/animation) | 엔티티의 모델 컴포넌트로 지정된 모델에서 실행할 수 있는 애니메이션을 지정합니다. |
| [Model](/user-manual/scenes/components/model)         | 엔티티의 위치에서 3D 모델을 렌더링합니다.                                             |
