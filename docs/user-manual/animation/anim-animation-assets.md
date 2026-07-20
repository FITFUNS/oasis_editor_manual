---
title: 애니메이션 에셋 (Animation Assets)
---

![Animation Assets](/img/user-manual/anim/animation_assets.png)

**애니메이션 에셋**은 모델을 실제로 움직이게 하는 **동작 데이터(키프레임)**입니다. 걷기, 점프처럼 "이 뼈가 이 시간에 이렇게 움직인다"는 정보가 담겨 있는 조각이라고 생각하면 됩니다.

애니메이션 에셋은 혼자서는 재생되지 않습니다. 엔티티의 [애님 컴포넌트](/user-manual/scenes/components/anim/)를 통해 [애님 상태 그래프](/user-manual/animation/anim-state-graph-assets/)의 각 상태에 **끼워 넣어야** 비로소 재생됩니다.

<!-- 애님 컴포넌트는 현재 `Convert to GLB` 에셋 작업 설정 옵션을 사용하여 .FBX 파일에서 OasisW 프로젝트로 가져온 애니메이션 에셋을 지원합니다.

![Asset Tasks](/img/user-manual/anim/asset_tasks.png) -->
