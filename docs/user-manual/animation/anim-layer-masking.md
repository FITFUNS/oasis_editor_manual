---
title: 애님 레이어 마스크 (Anim Layer Masks)
---

게임 오브젝트에 대한 복잡한 애니메이션 동작을 만들 때, 특정 애니메이션의 재생을 각 오브젝트 모델의 특정 뼈에 격리하는 것이 종종 필요합니다. 이는 동시에 여러 동작을 수행해야 하는 캐릭터를 애니메이션화할 때 특히 유용합니다. 이는 OasisW에서 애님 컴포넌트의 주어진 [애니메이션 레이어](/user-manual/animation/anim-state-graph-assets/#layers)에 대한 마스크를 생성하여 달성할 수 있습니다.

### 마스크 생성

애님 상태 그래프 에셋을 생성하고 애님 컴포넌트에 연결한 후, 그래프에 포함된 레이어 목록이 표시됩니다. 각 레이어 패널 아래의 **Create Mask** 버튼을 클릭하여 이러한 레이어 중 하나에 대한 마스크를 생성할 수 있습니다:

![Anim Component Create Mask](/img/user-manual/anim/anim_component_create_mask.png)

이렇게 하면 아래에 표시된 해당 레이어에 대한 마스크 인스펙터가 열립니다:

![Mask Inspector](/img/user-manual/anim/anim_mask_inspector.png)

마스크 인스펙터는 애님 컴포넌트에서 지정된 `root bone`에서 시작하여 애님 컴포넌트가 구동하는 전체 계층 구조를 표시합니다. 계층 구조의 각 뼈는 마스크에 포함되도록 선택할 수 있습니다. 특정 뼈를 우클릭하여 계층 구조의 전체 섹션을 포함하거나 제외할 수도 있습니다. 이 마스크에서 선택되지 않은 모든 뼈는 이 마스크의 레이어에서 재생되는 애니메이션에 의해 구동되지 않습니다.

마스크를 생성한 후 [레이어 블렌딩](/user-manual/animation/anim-state-graph-assets/#layer-blending)을 사용하여 여러 레이어의 마스크된 애니메이션을 부드럽게 블렌딩할 수 있습니다.
