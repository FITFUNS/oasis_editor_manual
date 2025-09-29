---
title: 텍스처 아틀라스 (Texture Atlas)
---

![Texture Atlas](/img/user-manual/assets/texture-atlas/texture-atlas.jpg)

텍스처 아틀라스 에셋은 텍스처 내부의 '프레임'을 설명하는 추가 데이터가 있는 텍스처 에셋입니다. 프레임은 텍스처에서 직사각형으로 정의된 영역으로, 프레임의 위치 및 회전 중심을 설정하는 '피벗' 포인트를 가집니다.

텍스처 아틀라스는 일반 텍스처 에셋을 우클릭하고 **아틀라스 생성**을 선택하여 생성됩니다. 또는 기본 에셋 설정을 변경하여 아틀라스 생성을 활성화할 수 있습니다.

텍스처 아틀라스는 [스프라이트 에셋][4]과 함께 사용되어 2D 그래픽을 렌더링합니다.

## 속성

### 프레임

텍스처 아틀라스의 프레임은 고유한 값(보통 정수 문자열)으로 키가 지정됩니다. 프레임의 형식은 다음과 같습니다:

```javascript
{
    rect: [0, 0, 0, 0],  // u,v,width,height - 픽셀 단위의 너비와 높이
    pivot: [0, 0],       // x,y - 0-1 비율로 표현
    border: [0, 0, 0, 0] // left, bottom, right, top - 픽셀 단위
}
```

### 텍스처 속성

프레임 데이터 외에도 텍스처 아틀라스는 [텍스처 에셋][2]의 속성을 포함합니다.

[2]: /user-manual/assets/types/texture
[4]: /user-manual/assets/types/sprite
