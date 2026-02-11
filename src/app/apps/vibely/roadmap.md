# Consolidated roadmap

Active feature requests and bug reports, finalized and ready for implementation. Move items to `completed.md` when done.

---

## Know Issues

- **Projects lost after an update** - Some users have reported that after updating the app, their previously saved projects were no longer available. I'm truly sorry if this happened to you. I can understand how frustrating and disruptive data loss can be. The fix will be available with the next update v3.8.5 so that you will have an access to your previous projects. Thank you for your patience and understanding.

- **Video aspect ratio is 9:16** - Some users have reported that changing the aspect ratio doesn't work while exporting. I'm working on the fix right now.

- **Video freezes** - Sometimes video playback gets stuck. This is known issue introduced by iOS 26 and many developers reported this weird behaviour of AVPlayerLooper. Hopefully, Apple developers will fix this issue soon. As a workaround try adjusting the player progress bar, reloading the music or setting other background options to fix it. After doing this the player loads the correct state and you can keep creating audio visualizations.

- **Slow export** - Currently exporting takes very long especially for longer audio files and high export settings like 60fsp/4k resolution. The rendering process is complex by its nature especially if there are lots of visual effects and visualizers playing simultaneously. However I'm working on optimizing the render pipeline and making it faster in future updates. Please be aware with me, I'm trying my best.

- **Export breaks on 100%** - Some of you reported to me that export fails towards the end (100%) and the video is lost. The common reason is because your device storage is full. Try removing some media files from Photos app and cleaning the trash making more space for Vibely videos.

- **SoundCloud import truncates to ~30 seconds** — Importing songs from SoundCloud API only provides the first ~30 seconds of audio. It's an API limitation that I can't change anyhow.

---

## Feature requests

- [ ] **Share projects** — Allow users to export/import or share project files (e.g. via AirDrop, Files, or link) so others can open and edit the same project.
- [ ] **App themes** — Support multiple app-wide themes (e.g. light, dark, or custom accent themes) for the editor and UI.
- [ ] **App icons** — Support alternate app icons (iOS allows this) so users can choose a preferred icon from the Settings or app configuration.
- [ ] **NCS-style circular spectrum** — Add a circular/radial spectrum visualizer in the style of NoCopyrightSounds (single ring around the center). Consolidates requests for “NCS spectrum”, “circle spectrum like NCS”, and “NCS Circle spectrum”.
- [ ] **Rotation direction** — Add a control to choose clockwise vs counterclockwise for rotating visualizers
- [ ] **Waveform layer rotation** — Add a rotation (and optionally position) control to the Waveform layer so users can orient and place it accurately as an overlay in photos or other compositions. (Other layers already have rotate; Waveform currently does not.)
- [ ] **Blend modes** - Add support for blend modes like overlay, screen, lighter, darker
- [ ] **Faster export / export performance** — Improve export speed for long, high-resolution renders (e.g. 4K 30 fps, 6 min currently taking ~1:45 on iPhone 11). Maintain backward compatibility with older devices where possible.
- [ ] **Extended scale/amplitude range for spectrum** — Increase the maximum of the Scale (or amplitude) slider for bar/line/dot spectrum graphs beyond 100% (e.g. up to 1000%) so that mid and high frequencies (roughly 400 Hz–20 kHz) are visible and not dominated by bass.
- [x] **Select folder for exports on macOS** — User can choose the destination folder when exporting on macOS.
- [x] **3D perspective** — 3D perspective support for visuals.
- [x] **Radial spectrum** — Radial spectrum visualizer added.
- [x] **Mirror text** — Text layer mirroring option.

---

## Bug reports

- [ ] **White line on background video** — A visible white line/artifact appears when using a video as background. Reproduce with video background and fix rendering or compositing.
- [ ] **4K export at 60 fps** — 4K resolution with 60 fps export fails, is unavailable, or produces incorrect output. Verify and fix 4K + 60 fps export path.
- [ ] **4K export produces mirrored output** — Exporting at 4K results in mirrored (flipped) footage; same heat/settings previously worked. Fix orientation or transform in 4K export pipeline.
- [ ] **Gradient color picker dismisses too quickly** — The color picker for gradient background closes before users can comfortably adjust sliders, type hex codes, or use options other than the color grid. Improve dismiss behavior or keep picker open until explicit dismiss.
- [ ] **Crashes with large audio files** — App crashes when loading or processing very large audio files. Add size checks, streaming, or chunked processing and graceful handling to avoid crash.
- [x] **Opacity issues with spectrum (hue) and timer layers** — Fixed opacity behavior for spectrum (hue) and timer layers.
