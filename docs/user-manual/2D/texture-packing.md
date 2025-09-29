---
title: 텍스처 패커 사용 (Using Texture Packers)
---

## 텍스처 패킹이란?

스프라이트나 UI 이미지가 별도의 이미지로 묶여 있는 것을 자주 볼 수 있습니다. 텍스처 패킹은 이러한 별도의 이미지들을 단일 [텍스처 아틀라스][texture-atlas]로 결합하는 것입니다.

여러 가지 장점이 있습니다:

- 많은 네트워크 요청 대신 단일 네트워크 요청이므로 더 빠른 로딩 시간
- 단일 텍스처이므로 스프라이트를 단일 드로우 콜로 배치할 수 있음

## 도구

OasisW와 호환되는 텍스처 패킹 도구들이 있습니다.

### TexturePacker Online (무료)

([웹사이트][texture-packer-online])

텍스처 패킹의 기본을 수행할 수 있는 무료 브라우저 도구입니다.

![](/img/user-manual/2D/texture-packer/texture-packer-online-steps.png)

1. 텍스처 아틀라스를 지웁니다.
2. 스프라이트/UI 이미지를 추가합니다.
3. 데이터 형식을 JSON 해시로 유지해야 합니다.
4. 텍스처 아틀라스용 .png를 다운로드합니다.
5. 프레임 데이터용 .json을 다운로드합니다.

### Texture Packer 도구

([웹사이트][texture-packer-tool])

TexturePacker는 다운로드용 유료 도구로, 텍스처 아틀라스를 만드는 데 더 많은 기능과 옵션을 가지고 있습니다. 여기에는 스프라이트/UI 이미지의 레이아웃에 대한 더 많은 제어와 [9 슬라이싱][9-slicing] 설정 기능이 포함됩니다.

![](/img/user-manual/2D/texture-packer/texture-packer-tool-steps.png)

기본 단계:

1. 스프라이트/UI 이미지를 추가합니다.
2. Output files -> Framework를 OasisW로 설정합니다.
3. Publish sprite sheet를 클릭하여 텍스처 아틀라스와 JSON 프레임 데이터를 만듭니다.

## 스프라이트 에디터에서 프레임 생성

텍스처 아틀라스 파일을 에디터에 업로드하고 [텍스처 아틀라스 에셋][texture-atlas]을 만든 후, 스프라이트 에디터를 엽니다.

![](/img/user-manual/2D/texture-packer/oasis-sprite-editor.png)

'Upload Texture Packer JSON'을 클릭하고 업로드할 JSON 프레임 데이터 파일을 선택합니다.

이렇게 하면 스프라이트 에셋을 만들 수 있는 텍스처 아틀라스에 프레임이 생성됩니다.

개발 중에 나중에 텍스처 아틀라스를 업데이트할 때, 스프라이트 파일명과 프레임명이 동일하게 유지되는 한, 새 프레임 데이터를 업로드할 때 다음과 같은 일이 발생합니다:

- 아틀라스에서 제거된 스프라이트는 프레임이 제거됩니다.
- 아틀라스에 추가된 스프라이트는 목록 끝에 새 프레임이 추가됩니다.
- 기존 스프라이트는 프레임이 업데이트됩니다.

[texture-atlas]: /user-manual/assets/types/texture-atlas/
[texture-packer-online]: https://www.codeandweb.com/tp-online
[texture-packer-tool]: https://www.codeandweb.com/texturepacker
[9-slicing]: /user-manual/2D/slicing/
