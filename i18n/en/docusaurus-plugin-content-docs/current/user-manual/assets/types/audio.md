---
title: Audio
---

An Audio asset is a sound file that can be played with the [Sound component](/user-manual/scenes/components/sound). Background music, footsteps, button clicks — every sound you hear in a game is an Audio asset.

**Every audio format supported by web browsers is also supported in OasisW.** No special processing is applied to audio files on import, so the file you upload is used as-is.

## Choosing a Format

That said, **not every browser supports every format.** The most widely supported format today is [MP3](https://caniuse.com/mp3).

| Format | Recommendation | Notes |
| --- | --- | --- |
| `.mp3` | Safest choice | Plays in almost every browser. Use MP3 unless you have a specific reason not to. |
| `.ogg` | Usable | Smaller for the same quality, but does not play in some browsers. |
| `.wav` | Use with care | Lossless, but several times larger. Use it only for short sound effects. |

:::tip Tip

Uploading the same sound as both `.mp3` and `.ogg` lets the browser pick whichever it can play. Keep in mind this doubles the size, so weigh it carefully for large files such as background music.

:::

## Importing

1. Drag a sound file into the Assets Panel, or upload it with **+ › Upload Files**.
2. An asset of type `Audio` is created.
3. Add a **Sound component** to the entity that should emit the sound, and assign this asset to the slot.

## Reducing File Size

- Sound effects are often fine in **mono**. Stereo doubles the size.
- Lowering the bitrate to around 128 kbps is hard to notice on game sound effects.
- For background music, turning off [preloading](/user-manual/assets/preloading-and-streaming) and loading it on demand is better for the initial load.
- Trim the silence at the start and end. It can also be the reason a sound effect plays late.

## Related Pages

- [Sound component](/user-manual/scenes/components/sound) — actually plays the sound.
- [Third-party asset sites](/user-manual/assets/finding) — where to find free sound effects and music.
