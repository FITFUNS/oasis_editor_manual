---
title: 에셋 유형
---

에셋 패널은 프로젝트의 에셋을 관리합니다. 여러 가지 다른 유형의 에셋이 있습니다.

| 유형                             | 가져오기 소스                    | 리소스 확장자              | 설명                        |
| -------------------------------- | -------------------------------- | -------------------------------- | ---------------------------------- |
| [`animation`](/user-manual/assets/types/animation.md)         | `.glb`, `.fbx`                   | `.glb`                           | 애니메이션 키프레임 데이터            |
| [`audio`](/user-manual/assets/types/audio.md)                 | `.mp3`, `.wav`, `.ogg`           | `.mp3`, `.wav`, `.ogg`           | 사운드 데이터                         |
| `binary`                         | `.bin`                           | `.bin`                           | 바이너리 데이터                        |
| [`css`](/user-manual/assets/types/css.md)                     | `.css`                           | `.css`                           | HTML용 스타일시트               |
| [`cubemap`](/user-manual/assets/types/cubemap.md)             | `.png`, `.jpg`, `.webp`, `.avif` | `.png`, `.jpg`, `.webp`, `.avif` | 환경 조명 데이터          |
| [`font`](/user-manual/assets/types/font.md)                   | `.ttf`, `.woff`                  | `.json`, `.png`                  | 텍스트 렌더링용 폰트 데이터       |
| [`html`](/user-manual/assets/types/html.md)                   | `.html`                          | `.html`                          | HTML 문서                     |
| [`json`](/user-manual/assets/types/json.md)                   | `.json`                          | `.json`                          | JSON 문서                     |
| [`material`](/user-manual/assets/types/material.md)           | `.glb`, `.fbx`                   | 없음                             | 3D 모델용 재질 정의 |
| [`render`](/user-manual/assets/types/render.md)               | `.glb`, `.fbx`                   | `.glb`                           | 3D 메시 데이터                       |
| [`script`](/user-manual/scripting/index.md) | `.js`                | `.js`                    | 스크립트                            |
| [`shader`](/user-manual/assets/types/shader.md)               | `.glsl`, `.vert`, `.frag`        | `.glsl`, `.vert`, `.frag`        | 렌더링용 커스텀 셰이더       |
| [`sprite`](/user-manual/assets/types/sprite.md)               | 에디터에서 생성            | 없음                             | UI 또는 텍스처용 2D 이미지      |
| [`template`](/user-manual/assets/types/template.md)           | `.glb`                           | 없음                             | 엔티티 계층 구조용 템플릿     |
| [`text`](/user-manual/assets/types/text.md)                   | `.txt`                           | `.txt`                           | 텍스트 문서                     |
| [`texture-atlas`](/user-manual/assets/types/texture-atlas.md) | `.png`, `.jpg`, `.webp`, `.avif` | `.png`, `.jpg`, `.webp`, `.avif` | 스프라이트 시트 이미지 데이터            |
| [`texture`](/user-manual/assets/types/texture.md)             | `.png`, `.jpg`, `.webp`, `.avif` | `.png`, `.jpg`, `.webp`, `.avif` | 3D 모델 또는 UI용 이미지 데이터    |
| [`wasm`](/user-manual/assets/types/wasm.md)                   | `.wasm`                          | `.wasm`                          | WebAssembly 모듈                |
<!-- | `bundle`                         | 에디터에서 생성            | `.tar`                           | 번들된 에셋                     | -->
<!-- | [`gsplat`](gsplat.md)               | `.ply`                           | `.ply`                           | 3D 가우시안 스플랫 데이터             | -->
