# Effects Inventory & Reverse-Engineering Analysis

Detailed technical breakdown and visual architecture of the three award-winning reference sites:
1. [get-daffed.com](https://www.get-daffed.com/)
2. [skhiladze.com](https://skhiladze.com/)
3. [dennypratama.com](https://dennypratama.com/)

---

## 1. get-daffed.com — The Polished Chrome 3D Coin

### Visual Effect Anatomy
- **The Hero 3D Object:** A double-beveled coin rotating in real-time WebGL with hyper-realistic mirror chrome reflections.
- **Mouse Dynamics:** 6-DOF spring-damped tracking following cursor tilt; spring mass causes subtle scale pulse (~5%) on hover.
- **Click Interaction:** Clicking triggers a full 360° elastic spin (`targetRotationY += Math.PI * 2`) with settling bounce and synthesized procedural audio chime.
- **Scroll Behavior:** Tilts on the Z-axis and drifts downward on scroll.

### Technical Implementation
- **3D Engine:** **Three.js r186** (`<canvas data-engine="three.js r186">`).
- **Mesh Construction:** Procedural **ExtrudeGeometry** generated at runtime using **Three.js SVGLoader** from raw SVG path data.
  - `depth: 0.12`, `bevelEnabled: true`, `bevelSegments: 5`, `bevelSize: 0.03`, `bevelThickness: 0.02`, `curveSegments: 24`.
- **Material:** `THREE.MeshPhysicalMaterial`:
  - `metalness: 1.0`, `roughness: 0.048`, `clearcoat: 1.0`, `clearcoatRoughness: 0.04`, `iridescence: 0.3`, `iridescenceIOR: 1.3`, `iridescenceThicknessRange: [180, 420]` (produces subtle chromatic rainbow fringes along grazing angles).
- **Environment & Reflections:** Virtual studio environment rendered via an offscreen `WebGLRenderTarget` with `PMREMGenerator`, using custom GLSL shaders to project high-contrast softbox rectangles (overhead keylight with smoothstep boundaries, side kickers, ambient gradient) without loading heavy external `.hdr` files.
- **Audio:** Web Audio API (`AudioContext`) generating procedural acoustic resonance and metallic pings.
- **Accessibility:** `<picture class="coin-gl__fallback">` static image fallback when WebGL is unsupported or `prefers-reduced-motion` is active.

---

## 2. skhiladze.com — Showreel Corridor & Motion Switch

### Visual Effect Anatomy
- **Showreel Gateway:** Central video player framed in a 3D perspective corridor (`.vault-corridor`) flanked by canvas-rendered perspective video strips.
- **Sound Gate:** Initial modal asking `"Enter, with sound"` vs `"Enter without sound"` to unlock HTML5 audio permissions cleanly.
- **Showreel Expand:** Clicking the preview card animates a full-viewport modal theater expansion with spatial sound and timeline controls.
- **Motion Toggle:** Dedicated `.motion-sw` toggle featuring an oscillating pendulum arm icon.

### Technical Implementation
- **Smooth Scroll:** **Lenis v1.3.27** (`smoothWheel: true`).
- **Motion Toggle Behavior:**
  - Persisted in `localStorage.getItem("skh-motion")` and URL query `?still`.
  - When switched to OFF: Adds `.still` to `<html>`, destroys/pauses Lenis, freezes HTML5 `<video>` loops, stops continuous canvas RAF loops, and pins pendulum icon to a static 90° position.
- **Canvas Rendering:** 8 separate canvas elements executing interactive spline physics, perspective distortion, and circular dial sector masks.

---

## 3. dennypratama.com — The 23.6° Geometric Dive & Blueprint Reveal

### Visual Effect Anatomy
- **The Signature Angle:** A consistent **23.6° angle** (and its trigonometric complements 66.4° / 113.6°) applied to every slash, mask, divider, and layout element.
- **Scroll "Dive" Tunnel:** The hero monogram rotates while a live degree counter sweeps from `000°` to `180°`. Continuing to scroll pushes the virtual camera straight through the diagonal opening of the geometry into an infinite wireframe raymarched architectural tunnel.
- **Blueprint-to-Live Wipe:** Compares CAD blueprint linework against the live production UI using an angled diagonal slash (`clip-path: polygon(...)`) at 23.6° driven by scroll progress and pointer drag.

### Technical Implementation
- **3D Engine:** **Raw WebGL2 (`gl.getContext('webgl2')`) Raymarching Shader** (no Three.js/OGL). Renders a Signed Distance Field (SDF) of the geometric monogram on a single full-screen triangle.
- **Animation & Synchronization:** **GSAP Core + GSAP ScrollTrigger** tightly coupled to **Lenis** smooth scroll via `gsap.ticker`.
- **Pixel-Accurate Blueprint:** Vector blueprint paths (`pathLength="1"`) traced directly from the production DOM coordinates at 1440px viewport.

---

## 4. Re-creation Matrix for Umer Khan Portfolio

| Reference Effect Class | Target Technique for Umer Khan Portfolio | Content Alignment |
| :--- | :--- | :--- |
| **A. Hero 3D Object** (Dafne Chrome Coin) | Three.js procedural `ExtrudeGeometry` with `MeshPhysicalMaterial` (chrome, iridescence, studio softbox envMap), mouse spring parallax, click-to-spin, and contact shadow. | Custom **UK Monogram & Audio Forensics Badge** with engraved waveform striations. |
| **B. Scroll Sequence** (Denny "Dive" & Counter) | 4-Phase scroll sequence with live digital dB/SNR counter (`-18.4 dB → +42.0 dB`) and angled polygon clip-path reveals. | **"NOISE → SIGNAL"** thesis tracking raw audio chaos resolving into clean production signal. |
| **C. Blueprint-to-Live Reveal** (Denny "Both Sides of the Line") | Dual-layer SVG technical schematic vs live production HUD with an interactive diagonal wipe scrubbed by scroll or drag. | **VoiceGuard Biometric Audio Forensics HUD** (16kHz PCM WebSocket, Wav2Vec2 latents, DSP phase metrics). |
| **D. Showreel Video Moment** (Luka Showreel) | Video/canvas showcase frame with sound toggle and full-screen theater overlay modal. | Live screen recordings/demonstrations of **VoiceGuard**, **MedInsight**, and **Face Attendance**. |
| **E. Motion On/Off Switch** (Luka Motion Toggle) | Persistent global motion toggle that halts WebGL loops, stops Lenis smoothing, and switches to calm static typography. | Native `[MOTION: ON/OFF]` in navigation. |
| **F. Signature Angle & Motif** | Fixed geometric angle applied across hairline dividers, index brackets, and button hover slashes. | Signature **45° waveform cut** repeated through all components. |
