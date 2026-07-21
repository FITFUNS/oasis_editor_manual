---
title: 컴포넌트 (Components)
---

컴포넌트는 엔티티에 붙이거나 뗄 수 있는 하나하나의 기능 조각입니다. 예를 들어 어떤 컴포넌트를 붙이면 엔티티가 소리를 낼 수 있고, 어떤 것은 3D 모델을 화면에 그려 주며, 어떤 것은 스크립트를 실행하게 해 줍니다.

컴포넌트는 OasisW 에디터에서 붙일 수도 있고 엔진 API로 붙일 수도 있습니다. 엔티티를 선택하면 그 엔티티에 붙은 컴포넌트가 가진 속성들이 인스펙터에 나열됩니다.

## 컴포넌트 타입

OasisW 엔진에는 여러 종류의 컴포넌트가 준비되어 있습니다:

| 컴포넌트                         | 설명                                                                   |
| --------------------------------- | ----------------------------------------------------------------------------- |
| [Anim](/user-manual/scenes/components/anim)                      | 엔티티 계층 구조에서 재생할 상태 그래프와 애니메이션을 지정합니다. |
| [Audio Listener](/user-manual/scenes/components/audiolistener)   | 3D 오디오를 들을 귀, 즉 리스너의 위치를 지정합니다.                 |
| [Button](/user-manual/scenes/components/button)                  | 사용자 인터페이스용 버튼을 만듭니다.                                              |
| [Camera](/user-manual/scenes/components/camera)                  | 엔티티가 있는 위치에서 씬을 화면에 그립니다.                            |
| [Collision](/user-manual/scenes/components/collision)            | 엔티티에 충돌을 감지하는 영역(볼륨)을 붙입니다.                                     |
| [Element](/user-manual/scenes/components/element)                | 사용자 인터페이스의 텍스트나 이미지 요소를 정의합니다.                               |
| [Layout Child](/user-manual/scenes/components/layout-child)      | 한 요소에 대해 레이아웃 그룹의 기본 속성을 개별적으로 덮어씁니다.                    |
| [Layout Group](/user-manual/scenes/components/layout-group)      | 자식 UI 요소들의 위치와 크기를 자동으로 맞춰 줍니다.       |
| [Light](/user-manual/scenes/components/light)                    | 엔티티에 동적으로 작동하는 광원을 붙입니다.                                |
| [Particle System](/user-manual/scenes/components/particlesystem) | 엔티티에 파티클 시스템을 붙입니다.                                     |
| [Rigid Body](/user-manual/scenes/components/rigidbody)           | 엔티티가 씬의 물리 시뮬레이션의 영향을 받도록 추가합니다.                           |
| [Render](/user-manual/scenes/components/render)                  | 기본 도형이나 렌더 에셋을 화면에 그립니다.                              |
| [Screen](/user-manual/scenes/components/screen)                  | 사용자 인터페이스가 그려질 영역과 방식을 정의합니다.                           |
| [Script](/user-manual/scenes/components/script)                  | 엔티티가 직접 만든 동작을 구현하도록 JavaScript 코드를 실행할 수 있게 합니다.   |
| [Scrollbar](/user-manual/scenes/components/scrollbar)            | Scrollview 컴포넌트에서 화면을 넘길 스크롤 컨트롤을 정의합니다.                       |
| [Scroll View](/user-manual/scenes/components/scrollview)         | 사용자 인터페이스에서 스크롤할 수 있는 영역을 정의합니다.                                |
| [Sound](/user-manual/scenes/components/sound)                    | 오디오 에셋을 재생합니다.                                                           |
| [Sprite](/user-manual/scenes/components/sprite)                  | 엔티티가 있는 위치에서 2D 그래픽을 화면에 그립니다.                            |
<!-- | [GSplat](/user-manual/scenes/components/gsplat)                  | Renders a 3D Gaussian Splat at the location of the entity.                    | -->

### 사용 중단된 컴포넌트

OasisW에는 아직 남아 있긴 하지만 더 이상 권장되지 않는 컴포넌트도 있습니다. 새 프로젝트에서는 이런 컴포넌트를 쓰지 않는 것이 좋습니다.

| 컴포넌트              | 설명                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------- |
| [Animation](/user-manual/scenes/components/animation) | 엔티티의 모델 컴포넌트로 지정한 모델에서 재생할 애니메이션을 지정합니다. |
| [Model](/user-manual/scenes/components/model)         | 엔티티가 있는 위치에서 3D 모델을 화면에 그립니다.                                             |
