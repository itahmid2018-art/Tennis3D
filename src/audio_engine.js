export const LYRIA_TRACKS = {
  menu_theme: {
    id: "menu_theme",
    title: "Argon Club Plaza Breeze (Lyria 3)",
    subtitle: "Title & Club Select Theme",
    src: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/menu_theme.mp3",
    loop: true,
    baseVolume: 0.42
  },
  court_intro: {
    id: "court_intro",
    title: "Center Court Flyover (Lyria 3)",
    subtitle: "Stadium Intro Fanfare",
    src: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/court_intro.mp3",
    loop: false,
    baseVolume: 0.48
  },
  match_rally: {
    id: "match_rally",
    title: "Sunny Baseline Rally (Lyria 3)",
    subtitle: "Active Match Atmosphere",
    src: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/match_rally.mp3",
    loop: true,
    baseVolume: 0.34
  },
  victory_fanfare: {
    id: "victory_fanfare",
    title: "Grand Slam Trophy (Lyria 3)",
    subtitle: "Match Victory Celebration",
    src: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/victory_fanfare.mp3",
    loop: false,
    baseVolume: 0.5
  }
};

const STATE_TRACK_MAP = {
  title: "menu_theme",
  menu: "menu_theme",
  select: "menu_theme",
  intro: "court_intro",
  court_intro: "court_intro",
  flyover: "court_intro",
  start: "court_intro",
  serve: "match_rally",
  serve_wait: "match_rally",
  serve_toss: "match_rally",
  rally: "match_rally",
  playing: "match_rally",
  match: "match_rally",
  point: "match_rally",
  gamepoint: "match_rally",
  replay: "match_rally",
  victory: "victory_fanfare",
  win: "victory_fanfare",
  game_won: "victory_fanfare",
  match_over: "victory_fanfare",
  celebration: "victory_fanfare",
  menu_theme: "menu_theme",
  match_rally: "match_rally",
  victory_fanfare: "victory_fanfare"
};

export const GEMINI_TTS_CLIPS = {
  start: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/match_start.mp3",
  match_start: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/match_start.mp3",
  "game point": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/game_point.mp3",
  game_point: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/game_point.mp3",
  "break point": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/break_point.mp3",
  break_point: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/break_point.mp3",
  "match point": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/match_point.mp3",
  match_point: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/match_point.mp3",
  game: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/game_won.mp3",
  "game!": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/game_won.mp3",
  game_won: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/game_won.mp3",
  "game set and match": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/game_set_match.mp3",
  game_set_match: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/game_set_match.mp3",
  out: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/call_out.mp3",
  call_out: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/call_out.mp3",
  net: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/call_net.mp3",
  call_net: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/call_net.mp3",
  "nice shot!": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/call_nice_shot.mp3",
  "nice shot": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/call_nice_shot.mp3",
  call_nice_shot: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/call_nice_shot.mp3",
  "power serve": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/call_power_serve.mp3",
  "power serve!": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/call_power_serve.mp3",
  call_power_serve: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/call_power_serve.mp3",
  smash: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/call_power_smash.mp3",
  call_power_smash: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/call_power_smash.mp3",
  replay: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/call_replay.mp3",
  call_replay: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/call_replay.mp3",
  "15 - 00": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/score_15_00.mp3",
  "30 - 00": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/score_30_00.mp3",
  "40 - 00": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/score_40_00.mp3",
  "00 - 15": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/score_00_15.mp3",
  "00 - 30": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/score_00_30.mp3",
  "00 - 40": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/score_00_40.mp3",
  "15 - 15": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/score_15_15.mp3",
  "30 - 15": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/score_30_15.mp3",
  "40 - 15": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/score_40_15.mp3",
  "15 - 30": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/score_15_30.mp3",
  "30 - 30": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/score_30_30.mp3",
  "40 - 30": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/score_40_30.mp3",
  "15 - 40": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/score_15_40.mp3",
  "30 - 40": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/score_30_40.mp3",
  deuce: "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/score_deuce.mp3",
  "ad in": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/score_ad_in.mp3",
  "ad out": "https://www.gstatic.com/aistudio/starter-apps/tennis/audio/tts/score_ad_out.mp3"
};

export class AudioEngine {
  constructor(opts = {}) {
    this.ctx = null;
    this.masterGain = null;
    this.sfxGain = null;
    this.musicGain = null;
    this.reverbSend = null;

    // Bifurcated controls
    this.masterMuted = !!(opts.muted ?? false);
    this.musicMuted = !!(opts.musicMuted ?? false);
    this.sfxMuted = !!(opts.sfxMuted ?? false);

    this.musicVolume = Number(opts.musicVolume ?? 0.65);
    this.sfxVolume = Number(opts.sfxVolume ?? 0.85);

    // Court surface audio preference: "grass", "clay", or "hard"
    this.courtSurface = String(opts.courtSurface || "grass").toLowerCase();

    this.audioElements = new Map();
    this.ttsAudioElements = new Map();
    this._activeVoiceAudio = null;
    this._voiceTimers = [];
    this.currentTrackId = null;
    this.desiredTrackId = "menu_theme";
    this.unlocked = false;
    this.onTrackChange = typeof opts.onTrackChange === "function" ? opts.onTrackChange : null;
    this.onAudioStateChange = typeof opts.onAudioStateChange === "function" ? opts.onAudioStateChange : null;

    this._noiseBuffer = null;
    this._pinkNoiseBuffer = null;
    this._fadeTimers = new Map();

    this._preloadTracks();
    this._preloadTtsClips();
    this._attachAutoplayUnlock();
  }

  // Backward compatibility property getter
  get muted() {
    return this.masterMuted;
  }
  set muted(val) {
    this.setMasterMuted(val);
  }

  _preloadTracks() {
    for (const [key, track] of Object.entries(LYRIA_TRACKS)) {
      const audio = new Audio();
      audio.src = track.src;
      audio.loop = track.loop;
      audio.preload = "auto";
      audio.volume = 0;
      audio.crossOrigin = "anonymous";
      if (key === "court_intro") {
        audio.addEventListener("ended", () => {
          if (this.currentTrackId === "court_intro") {
            this.playMusicForState("rally");
          }
        });
      }
      this.audioElements.set(key, audio);
    }
  }

  _preloadTtsClips() {
    const unique = new Set(Object.values(GEMINI_TTS_CLIPS));
    for (const src of unique) {
      const audio = new Audio();
      audio.src = src;
      audio.preload = "auto";
      audio.volume = Math.min(1, this.sfxVolume);
      this.ttsAudioElements.set(src, audio);
    }
  }

  _attachAutoplayUnlock() {
    const unlockFn = () => {
      this.unlock();
    };
    window.addEventListener("pointerdown", unlockFn, { passive: true });
    window.addEventListener("keydown", unlockFn, { passive: true });
    window.addEventListener("touchstart", unlockFn, { passive: true });
  }

  _ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.masterMuted ? 0 : 1;
      this.masterGain.connect(this.ctx.destination);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.value = this.sfxMuted || this.masterMuted ? 0 : this.sfxVolume;
      this.sfxGain.connect(this.masterGain);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.value = this.musicMuted || this.masterMuted ? 0 : this.musicVolume;
      this.musicGain.connect(this.masterGain);

      const delay = this.ctx.createDelay(0.5);
      delay.delayTime.value = 0.095;
      const feedback = this.ctx.createGain();
      feedback.gain.value = 0.24;
      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 3200;

      this.reverbSend = this.ctx.createGain();
      this.reverbSend.gain.value = 0.22;
      this.reverbSend.connect(delay);
      delay.connect(filter);
      filter.connect(feedback);
      feedback.connect(delay);
      filter.connect(this.masterGain);

      this._buildNoiseBuffers();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  _buildNoiseBuffers() {
    if (!this.ctx) return;
    const rate = this.ctx.sampleRate;
    const len = rate * 2;

    this._noiseBuffer = this.ctx.createBuffer(1, len, rate);
    const whiteData = this._noiseBuffer.getChannelData(0);
    for (let i = 0; i < len; i++) {
      whiteData[i] = Math.random() * 2 - 1;
    }

    this._pinkNoiseBuffer = this.ctx.createBuffer(1, len, rate);
    const pinkData = this._pinkNoiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.969 * b2 + white * 0.153852;
      b3 = 0.8665 * b3 + white * 0.3104856;
      b4 = 0.55 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.016898;
      pinkData[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.045;
      b6 = white * 0.115926;
    }
  }

  unlock() {
    this._ensureContext();
    this.unlocked = true;
    if (this.desiredTrackId && !this.masterMuted && !this.musicMuted) {
      const track = this.audioElements.get(this.currentTrackId || this.desiredTrackId);
      if (!track || track.paused) {
        this._crossfadeToTrack(this.desiredTrackId);
      }
    }
  }

  setCourtSurface(surface = "grass") {
    const s = String(surface || "grass").toLowerCase();
    this.courtSurface = ["grass", "clay", "hard"].includes(s) ? s : "grass";
    this._notifyStateChange();
    return this.courtSurface;
  }

  // Bifurcated Mute Controls
  setMasterMuted(muted) {
    this.masterMuted = !!muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.masterMuted ? 0 : 1, this.ctx.currentTime);
    }
    this._updateTrackVolumes();
    this._notifyStateChange();
    return this.masterMuted;
  }

  toggleMasterMute() {
    return this.setMasterMuted(!this.masterMuted);
  }

  setMusicMuted(muted) {
    this.musicMuted = !!muted;
    if (this.musicGain && this.ctx) {
      this.musicGain.gain.setValueAtTime(this.musicMuted || this.masterMuted ? 0 : this.musicVolume, this.ctx.currentTime);
    }
    this._updateTrackVolumes();
    this._notifyStateChange();
    return this.musicMuted;
  }

  toggleMusicMute() {
    return this.setMusicMuted(!this.musicMuted);
  }

  setSfxMuted(muted) {
    this.sfxMuted = !!muted;
    if (this.sfxGain && this.ctx) {
      this.sfxGain.gain.setValueAtTime(this.sfxMuted || this.masterMuted ? 0 : this.sfxVolume, this.ctx.currentTime);
    }
    this._notifyStateChange();
    return this.sfxMuted;
  }

  toggleSfxMute() {
    return this.setSfxMuted(!this.sfxMuted);
  }

  setMuted(muted) {
    return this.setMasterMuted(muted);
  }

  toggleMute() {
    return this.toggleMasterMute();
  }

  setMusicVolume(vol) {
    this.musicVolume = Math.max(0, Math.min(1, Number(vol)));
    if (this.musicGain && this.ctx) {
      this.musicGain.gain.setValueAtTime(this.musicMuted || this.masterMuted ? 0 : this.musicVolume, this.ctx.currentTime);
    }
    this._updateTrackVolumes();
    this._notifyStateChange();
  }

  setSfxVolume(vol) {
    this.sfxVolume = Math.max(0, Math.min(1, Number(vol)));
    if (this.sfxGain && this.ctx) {
      this.sfxGain.gain.setValueAtTime(this.sfxMuted || this.masterMuted ? 0 : this.sfxVolume, this.ctx.currentTime);
    }
    this._notifyStateChange();
  }

  _updateTrackVolumes() {
    const curId = this.currentTrackId || this.desiredTrackId;
    const track = this.audioElements.get(curId);
    const meta = LYRIA_TRACKS[curId];
    if (track && meta) {
      if (this.masterMuted || this.musicMuted) {
        track.volume = 0;
      } else {
        track.volume = Math.min(1, meta.baseVolume * this.musicVolume);
        if (track.paused && this.unlocked) {
          track.play().catch(() => {});
        }
      }
    }
  }

  _notifyStateChange() {
    const info = this.getCurrentTrackInfo();
    this._updateHudMusicBadge(info);
    if (typeof this.onAudioStateChange === "function") {
      this.onAudioStateChange(this.getAudioState());
    }
  }

  getAudioState() {
    return {
      masterMuted: this.masterMuted,
      musicMuted: this.musicMuted,
      sfxMuted: this.sfxMuted,
      musicVolume: this.musicVolume,
      sfxVolume: this.sfxVolume,
      courtSurface: this.courtSurface,
      trackInfo: this.getCurrentTrackInfo()
    };
  }

  playMusicForState(stateName) {
    const normState = String(stateName || "rally").toLowerCase().trim();
    const trackId = STATE_TRACK_MAP[normState] || "match_rally";
    this.desiredTrackId = trackId;

    if (this.currentTrackId === trackId) {
      const elem = this.audioElements.get(trackId);
      if (elem && elem.paused && !this.masterMuted && !this.musicMuted) {
        elem.play().catch(() => {});
      }
      return this.getCurrentTrackInfo();
    }
    this._crossfadeToTrack(trackId);
    return this.getCurrentTrackInfo();
  }

  _crossfadeToTrack(trackId) {
    const prevTrackId = this.currentTrackId;
    this.currentTrackId = trackId;

    if (prevTrackId && prevTrackId !== trackId) {
      const prevAudio = this.audioElements.get(prevTrackId);
      if (prevAudio) this._fadeAudio(prevAudio, 0, 420, true);
    }

    const nextAudio = this.audioElements.get(trackId);
    const meta = LYRIA_TRACKS[trackId];
    if (nextAudio && meta) {
      const targetVol = (this.masterMuted || this.musicMuted) ? 0 : Math.min(1, meta.baseVolume * this.musicVolume);
      if (!meta.loop) {
        try { nextAudio.currentTime = 0; } catch {}
      }
      nextAudio.play().then(() => {
        this._fadeAudio(nextAudio, targetVol, 480, false);
      }).catch(() => {});
    }

    const info = this.getCurrentTrackInfo();
    this._updateHudMusicBadge(info);
    if (typeof this.onTrackChange === "function") {
      this.onTrackChange(info);
    }
  }

  _fadeAudio(audio, targetVol, durationMs, pauseOnEnd = false) {
    if (this._fadeTimers.has(audio)) {
      clearInterval(this._fadeTimers.get(audio));
    }
    const steps = 12;
    const intervalMs = Math.max(16, Math.floor(durationMs / steps));
    const startVol = audio.volume;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      audio.volume = Math.max(0, Math.min(1, startVol + (targetVol - startVol) * progress));
      if (step >= steps) {
        clearInterval(timer);
        this._fadeTimers.delete(audio);
        audio.volume = Math.max(0, Math.min(1, targetVol));
        if (pauseOnEnd && targetVol <= 0.001) {
          audio.pause();
        }
      }
    }, intervalMs);

    this._fadeTimers.set(audio, timer);
  }

  getCurrentTrackInfo() {
    const curId = this.currentTrackId || this.desiredTrackId || "menu_theme";
    return {
      ...(LYRIA_TRACKS[curId] || LYRIA_TRACKS.menu_theme),
      muted: this.masterMuted || this.musicMuted,
      masterMuted: this.masterMuted,
      musicMuted: this.musicMuted,
      sfxMuted: this.sfxMuted,
      musicVolume: this.musicVolume,
      courtSurface: this.courtSurface
    };
  }

  _updateHudMusicBadge(info) {
    const el = document.getElementById("hud-music-title") || document.getElementById("audio-track-label");
    if (el && info) {
      const statusIcon = (this.masterMuted || this.musicMuted) ? "🔇" : "♪";
      el.textContent = `${statusIcon} ${info.title}`;
    }
  }

  // --- COURT SURFACE SPECIFIC SOUND EFFECTS ---

  /**
   * Play surface-specific ball bounce sound
   * @param {number} speed - Impact velocity scaling (0.4 to 1.5)
   * @param {string} surface - "grass", "clay", or "hard"
   */
  playBallBounce(speed = 1, surface = this.courtSurface) {
    if (this.masterMuted || this.sfxMuted) return;
    const ctx = this._ensureContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const scale = Math.max(0.4, Math.min(1.5, Number(speed || 1)));
    const surf = String(surface || this.courtSurface || "grass").toLowerCase();

    if (surf === "clay") {
      // CLAY SURFACE: Deep earthy thud with dry, crunchy sand/grit noise skid
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(130 * scale, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.12);

      oscGain.gain.setValueAtTime(0.001, now);
      oscGain.gain.linearRampToValueAtTime(0.14 * scale, now + 0.006);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.125);

      osc.connect(oscGain).connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.13);

      // Crunchy clay grit noise
      if (this._noiseBuffer) {
        const noiseSrc = ctx.createBufferSource();
        noiseSrc.buffer = this._noiseBuffer;

        const bandFilter = ctx.createBiquadFilter();
        bandFilter.type = "bandpass";
        bandFilter.frequency.setValueAtTime(850, now);
        bandFilter.Q.setValueAtTime(2.2, now);

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.001, now);
        noiseGain.gain.linearRampToValueAtTime(0.085 * scale, now + 0.008);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.075);

        noiseSrc.connect(bandFilter).connect(noiseGain).connect(this.sfxGain);
        noiseSrc.start(now, Math.random() * 0.4, 0.08);
      }
    } else if (surf === "hard") {
      // HARD COURT: Crisp, punchy pop with tight high frequencies
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(165 * scale, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.085);

      oscGain.gain.setValueAtTime(0.001, now);
      oscGain.gain.linearRampToValueAtTime(0.12 * scale, now + 0.004);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(oscGain).connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.095);

      if (this._pinkNoiseBuffer) {
        const noiseSrc = ctx.createBufferSource();
        noiseSrc.buffer = this._pinkNoiseBuffer;
        const lowFilter = ctx.createBiquadFilter();
        lowFilter.type = "lowpass";
        lowFilter.frequency.setValueAtTime(1400, now);
        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.001, now);
        noiseGain.gain.linearRampToValueAtTime(0.05 * scale, now + 0.004);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);
        noiseSrc.connect(lowFilter).connect(noiseGain).connect(this.sfxGain);
        noiseSrc.start(now, Math.random() * 0.4, 0.05);
      }
    } else {
      // GRASS SURFACE: Soft, cushioned, dampened turf thud with subtle leafy plush rustle
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(108 * scale, now);
      osc.frequency.exponentialRampToValueAtTime(42, now + 0.11);

      oscGain.gain.setValueAtTime(0.001, now);
      oscGain.gain.linearRampToValueAtTime(0.095 * scale, now + 0.006);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.115);

      osc.connect(oscGain).connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.12);

      // Soft grass turf plush rustle
      if (this._pinkNoiseBuffer) {
        const noiseSrc = ctx.createBufferSource();
        noiseSrc.buffer = this._pinkNoiseBuffer;
        const lowFilter = ctx.createBiquadFilter();
        lowFilter.type = "lowpass";
        lowFilter.frequency.setValueAtTime(620, now);
        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.001, now);
        noiseGain.gain.linearRampToValueAtTime(0.04 * scale, now + 0.005);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        noiseSrc.connect(lowFilter).connect(noiseGain).connect(this.sfxGain);
        noiseSrc.start(now, Math.random() * 0.4, 0.065);
      }
    }
  }

  /**
   * Play surface-specific footstep audio effect
   * @param {string} surface - "grass", "clay", or "hard"
   * @param {number} intensity - Step force / stride speed (0.3 to 1.5)
   */
  playFootstep(surface = this.courtSurface, intensity = 1) {
    if (this.masterMuted || this.sfxMuted) return;
    const ctx = this._ensureContext();
    if (!ctx || !this._pinkNoiseBuffer) return;

    const now = ctx.currentTime;
    const scale = Math.max(0.3, Math.min(1.5, Number(intensity || 1)));
    const surf = String(surface || this.courtSurface || "grass").toLowerCase();

    if (surf === "clay") {
      // CLAY FOOTSTEP: Crunchy, gravelly clay slide and grit friction scrape
      const noiseSrc = ctx.createBufferSource();
      noiseSrc.buffer = this._noiseBuffer || this._pinkNoiseBuffer;

      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1950, now);
      filter.Q.setValueAtTime(1.8, now);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.075 * scale, now + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.085);

      noiseSrc.connect(filter).connect(gain).connect(this.sfxGain);
      noiseSrc.start(now, Math.random() * 0.5, 0.09);

      // Low earth thud
      const thud = ctx.createOscillator();
      const thudGain = ctx.createGain();
      thud.type = "triangle";
      thud.frequency.setValueAtTime(95, now);
      thud.frequency.exponentialRampToValueAtTime(38, now + 0.06);
      thudGain.gain.setValueAtTime(0.001, now);
      thudGain.gain.linearRampToValueAtTime(0.045 * scale, now + 0.004);
      thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.065);
      thud.connect(thudGain).connect(this.sfxGain);
      thud.start(now);
      thud.stop(now + 0.07);
    } else if (surf === "hard") {
      // HARD COURT FOOTSTEP: Quick rubber shoe friction squeak & step click
      const squeak = ctx.createOscillator();
      const squeakGain = ctx.createGain();
      squeak.type = "sine";
      squeak.frequency.setValueAtTime(1600 * scale, now);
      squeak.frequency.exponentialRampToValueAtTime(2200 * scale, now + 0.035);

      squeakGain.gain.setValueAtTime(0.001, now);
      squeakGain.gain.linearRampToValueAtTime(0.035 * scale, now + 0.005);
      squeakGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      squeak.connect(squeakGain).connect(this.sfxGain);
      squeak.start(now);
      squeak.stop(now + 0.045);
    } else {
      // GRASS FOOTSTEP: Soft turf scuff, quiet muffled grassy swish
      const noiseSrc = ctx.createBufferSource();
      noiseSrc.buffer = this._pinkNoiseBuffer;

      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1150, now);
      filter.Q.setValueAtTime(1.4, now);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.05 * scale, now + 0.006);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);

      noiseSrc.connect(filter).connect(gain).connect(this.sfxGain);
      noiseSrc.start(now, Math.random() * 0.5, 0.06);
    }
  }

  playSwingWhoosh(speed = 1) {
    if (this.masterMuted || this.sfxMuted) return;
    const ctx = this._ensureContext();
    if (!ctx || !this._pinkNoiseBuffer) return;

    const now = ctx.currentTime;
    const scale = Math.max(0.6, Math.min(1.8, Number(speed || 1)));
    const dur = 0.16;

    const noiseSrc = ctx.createBufferSource();
    noiseSrc.buffer = this._pinkNoiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.Q.setValueAtTime(1.6, now);
    filter.frequency.setValueAtTime(320 * scale, now);
    filter.frequency.exponentialRampToValueAtTime(1380 * scale, now + dur * 0.55);
    filter.frequency.exponentialRampToValueAtTime(420, now + dur);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.001, now);
    noiseGain.gain.linearRampToValueAtTime(0.11 * Math.min(1.2, scale), now + 0.025);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    noiseSrc.connect(filter).connect(noiseGain).connect(this.sfxGain);
    noiseSrc.start(now, Math.random() * 0.5, dur + 0.02);

    const toneOsc = ctx.createOscillator();
    const toneGain = ctx.createGain();
    toneOsc.type = "sine";
    toneOsc.frequency.setValueAtTime(175 * scale, now);
    toneOsc.frequency.exponentialRampToValueAtTime(92, now + dur);
    toneGain.gain.setValueAtTime(0.001, now);
    toneGain.gain.linearRampToValueAtTime(0.055, now + 0.02);
    toneGain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    toneOsc.connect(toneGain).connect(this.sfxGain);
    toneOsc.start(now);
    toneOsc.stop(now + dur + 0.01);
  }

  playRacketHit(shotType = "topspin", timing = "good") {
    if (this.masterMuted || this.sfxMuted) return;
    const ctx = this._ensureContext();
    if (!ctx || !this._noiseBuffer) return;

    const now = ctx.currentTime;
    const type = String(shotType || "topspin").toLowerCase();
    const isSmash = type === "smash" || type === "power_smash";
    const isPerfect = timing === "perfect" || timing === "sweet_spot" || isSmash;

    const noiseSrc = ctx.createBufferSource();
    noiseSrc.buffer = this._noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(type === "slice" ? 3600 : 2450, now);
    filter.Q.setValueAtTime(1.75, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.001, now);
    noiseGain.gain.linearRampToValueAtTime(isSmash ? 0.14 : 0.1, now + 0.004);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.028);

    noiseSrc.connect(filter).connect(noiseGain).connect(this.sfxGain);
    noiseSrc.start(now, Math.random() * 0.5, 0.035);

    let startFreq = 320, endFreq = 132, dur = 0.14;
    if (type === "slice") {
      startFreq = 460; endFreq = 185; dur = 0.16;
    } else if (type === "lob") {
      startFreq = 250; endFreq = 165; dur = 0.19;
    } else if (isSmash) {
      startFreq = 395; endFreq = 98; dur = 0.21;
    }

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    osc1.type = "triangle";
    osc2.type = "sine";
    osc2.detune.setValueAtTime(12, now);
    osc1.frequency.setValueAtTime(startFreq, now);
    osc1.frequency.exponentialRampToValueAtTime(endFreq, now + dur);
    osc2.frequency.setValueAtTime(startFreq * 1.5, now);
    osc2.frequency.exponentialRampToValueAtTime(endFreq, now + dur * 0.85);

    const hitGain = ctx.createGain();
    hitGain.gain.setValueAtTime(0.001, now);
    hitGain.gain.linearRampToValueAtTime(isSmash ? 0.13 : 0.095, now + 0.006);
    hitGain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    osc1.connect(hitGain);
    osc2.connect(hitGain);
    hitGain.connect(this.sfxGain);
    if (this.reverbSend) hitGain.connect(this.reverbSend);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + dur + 0.01);
    osc2.stop(now + dur + 0.01);

    if (isPerfect) {
      const chords = [523.25, 659.25, 783.99, 1046.5];
      chords.forEach((freq, idx) => {
        const chordTime = now + idx * 0.026;
        const c1 = ctx.createOscillator();
        const c2 = ctx.createOscillator();
        c1.type = "sine";
        c2.type = "triangle";
        c2.detune.setValueAtTime(10, chordTime);
        c1.frequency.setValueAtTime(freq, chordTime);
        c2.frequency.setValueAtTime(freq, chordTime);

        const chordGain = ctx.createGain();
        chordGain.gain.setValueAtTime(0.001, chordTime);
        chordGain.gain.linearRampToValueAtTime(0.048, chordTime + 0.006);
        chordGain.gain.exponentialRampToValueAtTime(0.0008, chordTime + 0.24);

        c1.connect(chordGain);
        c2.connect(chordGain);
        chordGain.connect(this.sfxGain);
        if (this.reverbSend) chordGain.connect(this.reverbSend);

        c1.start(chordTime);
        c2.start(chordTime);
        c1.stop(chordTime + 0.25);
        c2.stop(chordTime + 0.25);
      });
    }
  }

  playNetCord() {
    if (this.masterMuted || this.sfxMuted) return;
    const ctx = this._ensureContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(98, now);
    osc.frequency.exponentialRampToValueAtTime(42, now + 0.13);

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(360, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.11, now + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

    osc.connect(filter).connect(gain).connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.15);

    if (this._noiseBuffer) {
      const noiseSrc = ctx.createBufferSource();
      noiseSrc.buffer = this._noiseBuffer;
      const band = ctx.createBiquadFilter();
      band.type = "bandpass";
      band.frequency.setValueAtTime(620, now);
      band.Q.setValueAtTime(2.2, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.001, now);
      noiseGain.gain.linearRampToValueAtTime(0.065, now + 0.005);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.075);

      noiseSrc.connect(band).connect(noiseGain).connect(this.sfxGain);
      noiseSrc.start(now, 0.1, 0.085);
    }
  }

  playServeToss() {
    if (this.masterMuted || this.sfxMuted) return;
    const ctx = this._ensureContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const dur = 0.22;
    const o1 = ctx.createOscillator();
    const o2 = ctx.createOscillator();
    o1.type = "sine";
    o2.type = "sine";
    o2.detune.setValueAtTime(9, now);

    o1.frequency.setValueAtTime(290, now);
    o1.frequency.exponentialRampToValueAtTime(680, now + dur);
    o2.frequency.setValueAtTime(290, now);
    o2.frequency.exponentialRampToValueAtTime(680, now + dur);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.075, now + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    o1.connect(gain);
    o2.connect(gain);
    gain.connect(this.sfxGain);

    o1.start(now);
    o2.start(now);
    o1.stop(now + dur + 0.01);
    o2.stop(now + dur + 0.01);
  }

  playCrowdReaction(type = "cheer") {
    if (this.masterMuted || this.sfxMuted) return;
    const ctx = this._ensureContext();
    if (!ctx || !this._pinkNoiseBuffer) return;

    const now = ctx.currentTime;
    const normType = String(type || "cheer").toLowerCase();

    if (normType === "gasp" || normType === "ooh") {
      const src = ctx.createBufferSource();
      src.buffer = this._pinkNoiseBuffer;
      const band = ctx.createBiquadFilter();
      band.type = "bandpass";
      band.Q.setValueAtTime(2.4, now);
      band.frequency.setValueAtTime(720, now);
      band.frequency.exponentialRampToValueAtTime(410, now + 0.55);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.09, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

      src.connect(band).connect(gain).connect(this.sfxGain);
      if (this.reverbSend) gain.connect(this.reverbSend);
      src.start(now, 0, 0.6);
      return;
    }

    const dur = normType === "polite_clap" ? 0.85 : 1.35;
    const src = ctx.createBufferSource();
    src.buffer = this._pinkNoiseBuffer;

    const band = ctx.createBiquadFilter();
    band.type = "bandpass";
    band.Q.setValueAtTime(1.1, now);
    band.frequency.setValueAtTime(650, now);
    band.frequency.exponentialRampToValueAtTime(1250, now + dur * 0.35);
    band.frequency.exponentialRampToValueAtTime(780, now + dur);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(normType === "polite_clap" ? 0.075 : 0.115, now + 0.14);
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    src.connect(band).connect(gain).connect(this.sfxGain);
    if (this.reverbSend) gain.connect(this.reverbSend);
    src.start(now, 0, dur + 0.05);

    const claps = normType === "polite_clap" ? 10 : 18;
    for (let i = 0; i < claps; i++) {
      const clapTime = now + 0.03 + (i / claps) * (dur * 0.78) + Math.random() * 0.035;
      const clapSrc = ctx.createBufferSource();
      clapSrc.buffer = this._noiseBuffer;

      const clapBand = ctx.createBiquadFilter();
      clapBand.type = "bandpass";
      clapBand.frequency.setValueAtTime(1400 + Math.random() * 900, clapTime);
      clapBand.Q.setValueAtTime(1.9, clapTime);

      const clapGain = ctx.createGain();
      clapGain.gain.setValueAtTime(0.001, clapTime);
      clapGain.gain.linearRampToValueAtTime(0.038, clapTime + 0.003);
      clapGain.gain.exponentialRampToValueAtTime(0.001, clapTime + 0.026);

      clapSrc.connect(clapBand).connect(clapGain).connect(this.sfxGain);
      clapSrc.start(clapTime, Math.random() * 0.8, 0.03);
    }

    if (normType === "cheer") {
      const chord = [261.63, 329.63, 392];
      chord.forEach((freq, idx) => {
        const c = ctx.createOscillator();
        c.type = "triangle";
        c.detune.setValueAtTime((idx - 1) * 11, now);
        c.frequency.setValueAtTime(freq, now);

        const g = ctx.createGain();
        g.gain.setValueAtTime(0.001, now);
        g.gain.linearRampToValueAtTime(0.025, now + 0.12);
        g.gain.exponentialRampToValueAtTime(0.0008, now + 0.75);

        c.connect(g).connect(this.sfxGain);
        if (this.reverbSend) g.connect(this.reverbSend);

        c.start(now);
        c.stop(now + 0.78);
      });
    }
  }

  announceScore(text, { delayMs = 0, playChime = true } = {}) {
    if (this.masterMuted || this.sfxMuted || !text) return;
    const str = String(text).trim();
    const ctx = this._ensureContext();

    if (ctx && playChime) {
      const chimeTime = ctx.currentTime + delayMs / 1000;
      const notes = (/game|match|deuce|win|nice|power|smash/i.test(str)) ? [587.33, 739.99, 880] : [523.25, 659.25];
      notes.forEach((freq, idx) => {
        const t = chimeTime + idx * 0.065;
        const o1 = ctx.createOscillator();
        const o2 = ctx.createOscillator();
        o1.type = "sine";
        o2.type = "triangle";
        o2.detune.setValueAtTime(10, t);
        o1.frequency.setValueAtTime(freq, t);
        o2.frequency.setValueAtTime(freq, t);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.001, t);
        gain.gain.linearRampToValueAtTime(0.055, t + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.0008, t + 0.24);

        o1.connect(gain);
        o2.connect(gain);
        gain.connect(this.sfxGain);
        if (this.reverbSend) gain.connect(this.reverbSend);

        o1.start(t);
        o2.start(t);
        o1.stop(t + 0.26);
        o2.stop(t + 0.26);
      });
    }

    this.playVoiceCallout(str, { delayMs, clearQueue: delayMs === 0 });
  }

  playVoiceCallout(text, { delayMs = 0, clearQueue = false } = {}) {
    if (this.masterMuted || this.sfxMuted || !text) return;
    const key = String(text).trim().toLowerCase();
    const src = GEMINI_TTS_CLIPS[key];

    if (clearQueue && this._voiceTimers.length > 0) {
      this._voiceTimers.forEach(t => clearTimeout(t));
      this._voiceTimers = [];
    }

    const exec = () => {
      if (this.masterMuted || this.sfxMuted) return;
      if (src) {
        try {
          if (this._activeVoiceAudio && !this._activeVoiceAudio.paused) {
            this._activeVoiceAudio.pause();
            this._activeVoiceAudio.currentTime = 0;
          }
          let audio = this.ttsAudioElements.get(src);
          if (!audio) {
            audio = new Audio(src);
            this.ttsAudioElements.set(src, audio);
          }
          audio.currentTime = 0;
          audio.volume = Math.min(1, this.sfxVolume * 0.98);
          this._activeVoiceAudio = audio;
          audio.play().catch(() => {});
          return;
        } catch {}
      }
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        try {
          window.speechSynthesis.cancel();
          const cleanText = String(text).replace(/\b00\b/g, "Love").replace(/\s*-\s*/g, " ").replace(/!/g, "");
          const utter = new SpeechSynthesisUtterance(cleanText);
          utter.rate = 1.06;
          utter.pitch = 1.04;
          utter.volume = Math.min(1, this.sfxVolume * 0.9);
          window.speechSynthesis.speak(utter);
        } catch {}
      }
    };

    if (delayMs > 0) {
      const timer = setTimeout(exec, delayMs);
      this._voiceTimers.push(timer);
    } else {
      exec();
    }
  }

  playUiClick() {
    if (this.masterMuted || this.sfxMuted) return;
    const ctx = this._ensureContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(660, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.045);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.05, now + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain).connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.055);
  }
}

export default AudioEngine;
