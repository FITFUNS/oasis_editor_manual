---
title: 단위 (Units)
---

OasisW 씬은 일반적으로 1 유닛을 1미터로 처리합니다.

OasisW를 위한 아트워크를 작성할 때는 원하는 스케일로 작업하는 것이 중요합니다. 이를 위해 선택한 모델링 애플리케이션에서 씬의 작업 단위를 확인해야 합니다. 원하는 작업 단위를 선택할 수 있지만, 이를 준수하는지 확인하세요. 예를 들어, 1미터 크기의 큐브를 만들려면 작업 단위를 미터로 설정하고 1x1x1 큐브를 만들 수 있습니다. 또는 작업 단위를 센티미터로 설정하고 100x100x100 큐브를 만들 수도 있습니다. 두 씬 모두 FBX로 내보내고 OasisW로 가져오면 1x1x1인 큐브가 됩니다.

### Blender

Blender에서 단위가 올바르게 내보내지도록 하려면 Scene Properties의 단위 시스템이 metric으로 설정되고 스케일이 1.0으로 설정되어 있는지 확인하세요:

![Blender units](/img/user-manual/assets/models/units/blender-units.png)

또한 FBX 형식으로 내보낼 때 "Apply Scaling"이 "FBX All"로 설정되어 있는지 확인하세요:

![Blender FBX Export](/img/user-manual/assets/models/units/blender-fbx-export.png)

### Autodesk 3D Studio Max

3D Studio Max에서 작업 단위를 확인하거나 설정하려면 Units Setup 대화상자를 열고 System Unit Setup 버튼을 클릭하세요:

![3DS Max units](/img/user-manual/assets/models/units/max-units.png)

### Autodesk Maya

Maya에서 작업 단위를 확인하거나 설정하려면 Preferences 대화상자를 열세요:

![Maya units](/img/user-manual/assets/models/units/maya-units.png)
