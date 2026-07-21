---
title: 화면 (Screens)
---

[화면 컴포넌트][1]는 사용자 인터페이스가 놓이는 영역을 정합니다. 화면이 하는 가장 중요한 일은, 그 안의 내용(요소 컴포넌트를 가진 자식 엔티티들)을 어떻게 그릴지를 정하는 것입니다.

## 화면 공간 또는 월드 공간

화면의 렌더 모드에서 가장 먼저 정할 것은, 화면을 화면 공간에서 그릴지 월드 공간에서 그릴지입니다.

![Screen space](/img/user-manual/user-interface/screens/screen-space-viewport.png)

화면 공간으로 설정한 화면 컴포넌트는 보통의 변환 계층을 따르지 않습니다. 대신 카메라 위에 덧씌워지는 오버레이처럼 그려집니다. 그래서 2D 인터페이스, HUD, 그 밖의 게임 인터페이스를 만들 때 유용합니다. 메뉴에서 *2D 화면*을 추가하면 화면 공간 화면을 만들 수 있습니다.

![World Space](/img/user-manual/user-interface/screens/world-space-viewport.png)

화면 공간 옵션을 끄면, 화면은 대신 보통의 변환 계층을 따라 그려집니다. 이때도 요소는 여전히 화면의 좌표계를 기준으로 놓이지만, 화면 자체가 3D 세계 안에 나타납니다. 메뉴에서 *3D 화면*을 추가하면 월드 공간 화면을 만들 수 있습니다.

## 해상도 및 스케일링

OasisW 애플리케이션은 여러 기기에서, 그리고 다양한 해상도로 표시됩니다. 특히 화면 공간 컴포넌트라면, 화면 크기가 달라질 때 인터페이스가 어떻게 보일지 미리 생각해 두는 것이 중요합니다.

요소를 그리는 가장 간단한 방법은 아무 스케일링도 하지 않는 것입니다.

![iPad No Scaling](/img/user-manual/user-interface/screens/ipad-no-scaling.png)

이 경우 인터페이스는 iPad 해상도에서는 잘 보입니다. 하지만 같은 씬을 iPhone에서 보면 어떻게 될까요.

![iPhone No Scaling](/img/user-manual/user-interface/screens/iphone-no-scaling.png)

폰의 해상도가 더 작기 때문에, 인터페이스가 화면 가장자리 밖으로 밀려나 제대로 쓸 수 없게 됩니다.

화면 컴포넌트에는 화면 공간 컴포넌트에서 쓸 수 있는 스케일링 모드 속성이 있습니다. 이를 *Blend*로 설정하면, 인터페이스가 표시되는 화면의 해상도에 맞게 크기를 자동으로 조절합니다. 다음은 iPad에서 블렌드 스케일링을 적용한 같은 인터페이스입니다:

![iPad Scaling](/img/user-manual/user-interface/screens/ipad-scaling.png)

그리고 iPhone에서는

![iPhone Scaling](/img/user-manual/user-interface/screens/iphone-scaling.png)

이제 인터페이스가 두 해상도 모두에서 잘 보이는 것을 확인할 수 있습니다.

### 스케일 팩터는 어떻게 계산되나요?

화면 컴포넌트의 *참조 해상도* 속성을 "이상적인" 해상도로 삼습니다. 애플리케이션이 참조 해상도보다 큰 화면에 표시되면 인터페이스가 확대되고, 참조 해상도보다 작은 화면에 표시되면 축소됩니다. 애플리케이션이 가로냐 세로냐에 따라 다르게 반응해야 할 수도 있기 때문에, 어느 축을 기준으로 삼을지 정하는 스케일 블렌드 속성도 함께 제공됩니다. 스케일 블렌드가 0이면 가로 해상도만, 1이면 세로 해상도만 쓰고, 0.5이면 두 해상도를 똑같이 반영합니다.

이 예제에서는 스케일 블렌드 속성을 바꿀 때, 세로에서 가로로 돌릴 경우 인터페이스가 어떻게 반응하는지 볼 수 있습니다.

![Scale Blend 0](/img/user-manual/user-interface/screens/scale-blend-0.png)
값이 0이면 가로 해상도가 커지면서 버튼이 너무 커집니다.

![Scale Blend 1](/img/user-manual/user-interface/screens/scale-blend-1.png)
값이 1이면 세로 해상도가 작아지면서 버튼이 너무 작아집니다.

![Scale Blend 0.5](/img/user-manual/user-interface/screens/scale-blend-0.5.png)
값이 0.5이면 두 변화가 서로 균형을 이뤄 버튼이 같은 크기를 유지합니다.

[1]: /user-manual/scenes/components/screen
