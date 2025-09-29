---
title: 2D
---

OasisW 엔진은 3D 게임과 애플리케이션을 빠르고 간단하게 만드는 것을 목적으로 설계되었습니다. 하지만 2D 게임을 만들기 위한 여러 훌륭한 기능도 지원합니다. OasisW의 2D 기능을 사용하면 강력한 3D 엔진의 모든 이점을 2D 게임에서도 얻을 수 있습니다.

## 기본 기능

### 스프라이트

![Sprite](/img/user-manual/2D/sprite.jpg)

2D 그래픽은 종종 **스프라이트**라고 불립니다. OasisW에서는 [스프라이트 에셋][0]과 [스프라이트 컴포넌트][1]를 만들 수 있습니다. 스프라이트 컴포넌트는 씬에서 2D 그래픽을 표시하기 위해 엔티티에 연결됩니다. OasisW의 스프라이트 에셋은 텍스처 아틀라스의 여러 이미지 프레임을 순서대로 저장합니다. 따라서 스프라이트 에셋을 사용하여 게임에서 플립북 스타일의 애니메이션 그래픽을 만들 수 있습니다.

### 텍스처 아틀라스

![Texture Atlas](/img/user-manual/2D/texture-atlas.jpg)

[텍스처 아틀라스][2]는 표준 [텍스처][3] 에셋의 향상된 버전입니다. 일반적인 텍스처 기능 외에도 텍스처 아틀라스는 "프레임" 세트의 정의를 포함합니다. 각 프레임은 스프라이트 에셋에서 참조할 수 있는 텍스처의 영역입니다.

### 스프라이트 에디터

![Sprite Editor](/img/user-manual/2D/sprite-editor.jpg)

[스프라이트 에디터][4]는 텍스처 아틀라스 프레임과 스프라이트 에셋을 생성하는 데 사용되는 도구입니다. 텍스처 아틀라스나 스프라이트 에셋을 더블클릭하여 스프라이트 에디터를 열 수 있습니다. [자세히 보기][4].

<!-- *Artwork created by [PixelBoy](https://twitter.com/2pblog1)* -->

[0]: /user-manual/assets/types/sprite
[1]: /user-manual/scenes/components/sprite
[2]: /user-manual/assets/types/texture-atlas
[3]: /user-manual/assets/types/texture
[4]: /user-manual/2D/sprite-editor
