---
title: 화면 (Screens)
---

[화면 컴포넌트][1]는 사용자 인터페이스가 구축되는 영역을 정의합니다. 주요 책임은 화면의 내용(요소 컴포넌트가 있는 자식 엔티티)이 어떻게 렌더링되는지 결정하는 것입니다.

## 화면 공간 또는 월드 공간

화면의 렌더 모드에서 주요 선택은 화면 공간에서 렌더링되는지 월드 공간에서 렌더링되는지입니다.

![Screen space](/img/user-manual/user-interface/screens/screen-space-viewport.png)

화면 공간인 화면 컴포넌트는 일반적인 변환 계층을 따르지 않습니다. 대신 카메라의 오버레이로 렌더링됩니다. 이는 2D 인터페이스, HUD 또는 기타 게임 인터페이스를 만드는 데 유용합니다. 메뉴에서 *2D 화면*을 추가하여 화면 공간 화면을 만드는 옵션이 있습니다.

![World Space](/img/user-manual/user-interface/screens/world-space-viewport.png)

화면 공간 옵션이 비활성화되면 화면은 대신 일반적인 변환 계층을 사용하여 렌더링됩니다. 요소는 여전히 화면의 좌표계를 기준으로 위치하지만, 화면은 3D 세계에 나타납니다. 메뉴에서 *3D 화면*을 추가하여 월드 공간 화면을 만드는 옵션이 있습니다.

## 해상도 및 스케일링

OasisW 애플리케이션은 많은 기기와 다양한 해상도에서 볼 수 있습니다. 화면 공간 컴포넌트의 경우 다양한 화면 크기에서 사용자 인터페이스가 어떻게 보일지 생각하는 것이 중요합니다.

요소를 렌더링하는 가장 간단한 방법은 스케일링 없이 하는 것입니다.

![iPad No Scaling](/img/user-manual/user-interface/screens/ipad-no-scaling.png)

이 경우 사용자 인터페이스는 iPad 해상도에서 잘 작동합니다. 하지만 iPhone에서 같은 씬을 볼 때는 어떻게 될까요.

![iPhone No Scaling](/img/user-manual/user-interface/screens/iphone-no-scaling.png)

폰의 더 작은 해상도 때문에 사용자 인터페이스가 화면 가장자리에서 벗어나 사용할 수 없게 됩니다.

화면 컴포넌트는 화면 공간 컴포넌트에서 사용할 수 있는 스케일링 모드 속성을 제공합니다. 이를 *Blend*로 설정하면 화면이 표시되는 화면의 해상도에 맞게 인터페이스를 스케일링합니다. iPad에서 블렌드 스케일링을 사용한 동일한 인터페이스는 다음과 같습니다:

![iPad Scaling](/img/user-manual/user-interface/screens/ipad-scaling.png)

그리고 iPhone에서

![iPhone Scaling](/img/user-manual/user-interface/screens/iphone-scaling.png)

사용자 인터페이스가 이제 두 해상도 모두에서 작동하는 것을 볼 수 있습니다.

### 스케일 팩터는 어떻게 계산되나요?

화면 컴포넌트의 *참조 해상도* 속성을 "이상적인" 해상도로 사용합니다. 애플리케이션이 참조보다 큰 해상도에서 표시되면 확대되고, 참조보다 작은 해상도에서 표시되면 축소됩니다. 애플리케이션이 가로 또는 세로 변경에 다르게 반응해야 할 수 있기 때문에 사용할 축을 결정하는 스케일 블렌드 속성도 노출합니다. 스케일 블렌드 0은 가로 해상도만 사용하고, 스케일 블렌드 1은 세로 해상도만 사용하며, 스케일 블렌드 0.5는 두 해상도를 동등하게 사용합니다.

이 예제에서 스케일 블렌드 속성을 변경하는 것이 세로에서 가로로 회전할 때 인터페이스가 어떻게 반응하는지에 영향을 미치는 것을 볼 수 있습니다.

![Scale Blend 0](/img/user-manual/user-interface/screens/scale-blend-0.png)
값이 0일 때 가로 해상도의 증가로 인해 버튼이 너무 커집니다.

![Scale Blend 1](/img/user-manual/user-interface/screens/scale-blend-1.png)
값이 1일 때 세로 해상도의 감소로 인해 버튼이 너무 작아집니다.

![Scale Blend 0.5](/img/user-manual/user-interface/screens/scale-blend-0.5.png)
값이 0.5일 때 두 변경사항이 균형을 이루고 버튼이 같은 크기를 유지합니다.

[1]: /user-manual/scenes/components/screen
