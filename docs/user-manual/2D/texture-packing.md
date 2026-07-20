---
title: 텍스처 패커 사용 (Using Texture Packers)
---

## 텍스처 패킹이란?

게임에 쓰는 스프라이트나 UI 그림은 보통 **여러 장의 낱개 이미지**로 되어 있습니다. **텍스처 패킹**은 이 낱개 그림들을 **한 장의 [텍스처 아틀라스][texture-atlas]로 모아 붙이는** 작업입니다. 흩어진 사진들을 앨범 한 장에 정리해 붙인다고 생각하면 쉽습니다.

이렇게 하면 좋은 점이 있습니다.

- 그림을 한 장만 내려받으면 되니 **로딩이 빨라집니다.** (요청을 여러 번 보내는 대신 한 번만 보냄)
- 한 장의 텍스처라서 여러 스프라이트를 **한 번에 그릴 수 있어** 성능에 유리합니다.

## 도구

OasisW와 함께 쓸 수 있는 텍스처 패킹 도구를 소개합니다.

### TexturePacker Online (무료)

([웹사이트][texture-packer-online])

브라우저에서 바로 쓰는 무료 도구로, 텍스처 패킹의 기본을 할 수 있습니다.

![TexturePacker Online 단계](/img/user-manual/2D/texture-packer/texture-packer-online-steps.png)

1. 기본으로 들어 있는 텍스처 아틀라스를 **비웁니다.**
2. 내 **스프라이트/UI 그림**을 추가합니다.
3. 데이터 형식(Data format)을 **JSON 해시(JSON Hash)**로 둡니다. (중요)
4. 텍스처 아틀라스용 **`.png`**를 내려받습니다.
5. 프레임 정보가 담긴 **`.json`**을 내려받습니다.

### Texture Packer 도구

([웹사이트][texture-packer-tool])

설치해서 쓰는 **유료 도구**로, 배치를 더 세밀하게 조절하고 [9-슬라이싱][9-slicing]까지 설정하는 등 기능이 더 많습니다.

![TexturePacker 도구 단계](/img/user-manual/2D/texture-packer/texture-packer-tool-steps.png)

기본 순서는 이렇습니다.

1. **스프라이트/UI 그림**을 추가합니다.
2. **Output files → Framework**를 **OasisW**로 설정합니다.
3. **Publish sprite sheet**를 눌러 텍스처 아틀라스와 JSON 프레임 데이터를 만듭니다.

## 스프라이트 에디터에서 프레임 만들기

만든 텍스처 아틀라스 파일을 에디터에 올려 [텍스처 아틀라스 에셋][texture-atlas]을 만든 뒤, 스프라이트 에디터를 엽니다.

![OasisW 스프라이트 에디터](/img/user-manual/2D/texture-packer/oasis-sprite-editor.png)

**Upload Texture Packer JSON**을 누르고, 아까 내려받은 **JSON 프레임 데이터 파일**을 고릅니다. 그러면 아틀라스에 프레임이 자동으로 만들어져, 곧바로 스프라이트를 만들 수 있는 상태가 됩니다.

:::tip 나중에 그림을 업데이트할 때

개발 중에 아틀라스를 다시 만들어 새 JSON을 올릴 때, **스프라이트 파일 이름과 프레임 이름이 그대로 유지된다면** 다음과 같이 알아서 반영됩니다.

- 아틀라스에서 **빠진** 그림은 프레임이 삭제됩니다.
- 아틀라스에 **새로 추가된** 그림은 목록 끝에 프레임이 추가됩니다.
- **그대로 있는** 그림은 프레임 정보가 갱신됩니다.

:::

[texture-atlas]: /user-manual/assets/types/texture-atlas/
[texture-packer-online]: https://www.codeandweb.com/tp-online
[texture-packer-tool]: https://www.codeandweb.com/texturepacker
[9-slicing]: /user-manual/2D/slicing/
