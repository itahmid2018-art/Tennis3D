# Argon Tennis 🎾

**Argon Tennis** is a Wii Sports-inspired 3D arcade tennis game featuring frantic racket kinematics, expressive Mii characters, webcam & phone motion controls, and dynamic procedural audio.

---

## ✨ Features

- 🎾 **3D Stadium & Kinematics**: Immersive WebGL tennis gameplay built with Three.js, featuring topspin, slice, lob, power serves, and realistic ball physics.
- 👦 **Expressive Mii Avatars**: Custom procedural Mii avatars with dynamic facial expressions, limb animations, and swing VFX.
- 📱 **Phone Motion Controller ("Pocket Racket")**: Turn your smartphone into a motion-sensing tennis racket by scanning a QR code (`/companion.html`). Uses real-time accelerometer and gyroscope sensors!
- 📷 **Webcam Motion Controls**: Track swing motions directly through your computer camera.
- 🏆 **Game Modes & Match Setup**:
  - Casual AI (Club AI)
  - Pro AI
  - 1v1 Local / Companion Match
  - Match length customization (1 Game, Best of 3, Best of 5)
- 📊 **Wii-Style HUD & Analytics**:
  - Live Scoreboard & Game Bubbles
  - Swing Timing Gauge (Sweet Spot, Early, Late)
  - Instant Replay System
  - Post-match Club Skill Rating Graph & Stats

---

## 🚀 Quick Start & Local Setup

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: v18.0.0 or higher (or **Bun** v1.0+)
- **npm** (comes with Node.js) or **bun**

### Installation

1. **Clone or Download the Repository**:
   ```bash
   git clone <repository-url>
   cd argon-tennis
   ```

2. **Install Dependencies**:
   Using `npm`:
   ```bash
   npm install
   ```
   Or using `bun`:
   ```bash
   bun install
   ```

3. **Start the Development Server**:
   Using `npm`:
   ```bash
   npm run dev
   ```
   Or using `bun`:
   ```bash
   bun run dev
   ```

4. **Access the Game**:
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```
   *Note: To connect mobile controllers on your local Wi-Fi, open the server's network URL (e.g., `http://192.168.x.x:3000`).*

---

## 🎮 How to Play

### Controls & Input Modes

1. **Standard Controls (Mouse / Touch / Keyboard)**:
   - **Swing / Hit**: Click or tap when the ball approaches.
   - **Timing**: Time your swing when the indicator reaches the green **SWEET SPOT** on the bottom-right gauge.
   - **Camera Angle (`C`)**: Cycle between Rally, Follow, and Overhead camera modes.
   - **Replay (`R`)**: Toggle instant replay.

2. **Phone Racket Motion Controller 📱**:
   - Click **"Pocket Racket"** in the game HUD or open the companion modal.
   - Scan the QR code with your mobile device or navigate to `http://<YOUR_IP>:3000/companion.html`.
   - Grant motion sensor permissions on your phone.
   - Swing your phone like a tennis racket to hit shots!

3. **Webcam Motion Controls 📷**:
   - Click **"Webcam Motion"** on the HUD and allow camera access.
   - Swing your hand across the camera view to trigger rackets swings automatically based on optical movement.

---

## 📜 Available NPM Scripts

| Script | Command | Description |
|---|---|---|
| `npm run dev` | `vite --port=3000 --host=0.0.0.0` | Launches the local dev server on port 3000 accessible across network devices. |
| `npm run build` | `node scripts/download-assets.mjs && vite build` | Downloads required assets and compiles the app for production. |
| `npm run preview` | `vite preview --port=3000 --host=0.0.0.0` | Serves the production build locally for testing. |
| `npm run lint` | `tsc --noEmit` | Runs TypeScript type checking across the project. |

---

## 🛠️ Tech Stack

- **Graphics & 3D**: [Three.js](https://threejs.org/) (WebGL)
- **UI & Frontend**: HTML5 Canvas, Tailwind-inspired Wii CSS design, React
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Sensors & Remote Sync**: HTML5 `DeviceMotionEvent` / `DeviceOrientationEvent` with Vite endpoint sync.
- **Language**: JavaScript / TypeScript

---

## 📄 License

MIT License. Have fun playing Argon Tennis! 🎾
