# Consolidated roadmap

Active feature requests and bug reports, finalized and ready for implementation. Move items to `completed.md` when done.

---

## Know Issues

- **Slow export** - Currently exporting takes very long especially for longer audio files and high export settings like 60fsp/4k resolution. The rendering process is complex by its nature especially if there are lots of visual effects and visualizers playing simultaneously. However I'm working on optimizing the render pipeline and making it faster in future updates. Please be aware with me, I'm trying my best.

- **Export breaks on 100%** - Some of you reported to me that export fails towards the end (100%) and the video is lost. The common reason is because your device storage is full. Try removing some media files from Photos app and cleaning the trash making more space for Vibely videos.

---

## Bug reports

- [ ] **Export delay** - Amazing app, but the export always delays anything with dynamic sound or the waveform visualiser - video and sound never line up so need to edit this in a different app after exporting.
- [ ] **White line on background video** — A visible white line/artifact appears when using a video as background. Reproduce with video background and fix rendering or compositing.
- [ ] **4K export at 60 fps** — 4K resolution with 60 fps export fails, is unavailable, or produces incorrect output. Verify and fix 4K + 60 fps export path.
- [ ] **4K export produces mirrored output** — Exporting at 4K results in mirrored (flipped) footage; same heat/settings previously worked. Fix orientation or transform in 4K export pipeline.
- [ ] **Gradient color picker dismisses too quickly** — The color picker for gradient background closes before users can comfortably adjust sliders, type hex codes, or use options other than the color grid. Improve dismiss behavior or keep picker open until explicit dismiss.
- [ ] **Crashes with large audio files** — App crashes when loading or processing very large audio files. Add size checks, streaming, or chunked processing and graceful handling to avoid crash.
