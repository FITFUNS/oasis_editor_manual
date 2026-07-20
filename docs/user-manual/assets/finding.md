---
title: 서드파티 에셋 사이트 (Third-party Asset Sites)
---

직접 만든 에셋을 쓰는 것이 가장 좋을 때도 있지만, 모든 것을 처음부터 만들면 비용과 시간이 너무 많이 듭니다. 무료 또는 유료로 에셋을 구할 수 있는 곳을 모아 두었습니다.

## 에셋 마켓플레이스

에셋 마켓플레이스는 내려받아 게임에 바로 넣을 수 있는 콘텐츠를 모아 둔 온라인 라이브러리입니다.

| 제공업체 | 2D 아트 | 3D 아트 | 오디오 |
|---|:---:|:---:|:---:|
| [3D Models Textures](https://www.3dmodels-textures.com/) |  | ✓ | ✓ |
| [BlendSwap](https://www.blendswap.com/) |  | ✓ |  |
| [CGTrader](https://www.cgtrader.com/) |  | ✓ |  |
| [Game Dev Market](https://www.gamedevmarket.net?ally=O0I9alFp) | ✓ | ✓ | ✓ |
| [GameSounds.xyz](https://gamesounds.xyz/) |  |  | ✓ |
| [Kenney](https://kenney.nl/) | ✓ | ✓ | ✓ |
| [Mixamo](https://www.mixamo.com/) |  | ✓ |  |
| [PlayOnLoop](https://www.playonloop.com/music-loops-category/videogame/) |  |  | ✓ |
| [Open Game Art](https://opengameart.org/) | ✓ | ✓ | ✓ |
| [Sound Bible](https://soundbible.com/) |  |  | ✓ |
| [Turbosquid](https://www.turbosquid.com/) | ✓ | ✓ | ✓ |

:::tip 처음이라면

[Kenney](https://kenney.nl/)는 2D·3D·오디오를 모두 다루면서 대부분 제약이 거의 없는 라이선스로 배포합니다. [Mixamo](https://www.mixamo.com/)는 사람 캐릭터에 걷기·달리기 같은 애니메이션을 붙여 받을 수 있어, 캐릭터가 필요한 첫 프로젝트에 특히 편합니다.

:::

## OasisW에 넣기 좋은 형식

내려받을 때 형식을 고를 수 있다면 다음을 기준으로 삼으십시오.

| 종류 | 권장 형식 | 이유 |
|---|---|---|
| 3D 모델 | `.glb` | 메시·재질·텍스처가 한 파일에 들어 있어 텍스처가 빠지는 사고가 없습니다. |
| 이미지 · 텍스처 | `.png` · `.jpg` | 투명이 필요하면 PNG, 사진처럼 큰 이미지는 JPG가 가볍습니다. |
| 효과음 | `.mp3` · `.ogg` | 용량이 작아 로딩이 빠릅니다. |
| 글꼴 | `.ttf` | 업로드하면 폰트 에셋으로 변환됩니다. |

FBX나 OBJ만 받을 수 있다면 [Blender](https://www.blender.org/)에서 열어 GLB로 다시 내보내는 방법이 있습니다. 자세한 내용은 [3D 모델 가져오기](/user-manual/assets/models)를 참고하십시오.

## 절차적 생성 도구

에셋을 검색하는 대신 **그 자리에서 만들어 주는** 도구도 있습니다.

- [사운드 FX 생성기 (Bfxr)](https://www.bfxr.net/) — 점프·발사·획득 같은 게임 효과음을 버튼 몇 번으로 만듭니다.
- [Spacescape 스카이박스 생성기](http://alexcpeterson.com/spacescape) — 우주 배경 큐브맵을 만듭니다. [큐브맵](/user-manual/assets/types/cubemap) 에셋으로 쓸 수 있습니다.
- [Sloyd 3D 모델 생성기](https://sloyd.ai) — 간단한 3D 모델을 생성해 GLB로 내려받습니다.

## 라이선스를 반드시 확인하십시오

:::warning 주의하시기 바랍니다

'무료'라고 적혀 있어도 조건이 붙는 경우가 많습니다. 내려받기 전에 다음을 확인하시기 바랍니다.

- **상업적 이용**이 가능한지 — 게임을 공개하거나 수익을 낼 계획이라면 반드시 확인해야 합니다.
- **출처 표기(attribution)**가 필요한지 — 필요하다면 게임 안 크레딧 화면에 제작자를 적어야 합니다.
- **재배포·수정**이 허용되는지 — 모델을 고쳐서 쓸 계획이라면 확인이 필요합니다.

CC0(퍼블릭 도메인)로 표시된 에셋이 조건이 가장 느슨합니다. 어떤 에셋을 어디서 어떤 라이선스로 받았는지 **따로 목록을 만들어 기록해 두면** 나중에 훨씬 편합니다.

:::

## 다음으로

- [3D 모델 가져오기](/user-manual/assets/models) — 받은 모델을 프로젝트에 올립니다.
- [사전 로드 및 스트리밍](/user-manual/assets/preloading-and-streaming) — 에셋이 늘어난 만큼 로딩 시간을 관리합니다.
