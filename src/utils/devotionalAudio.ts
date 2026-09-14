// Pure Web Audio synthesizer for temple brass bell harmonic resonance
export function playTempleBell() {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();

    const now = ctx.currentTime;
    const duration = 2.8;

    // Harmonic frequencies of an Indian temple brass bell
    const frequencies = [587.33, 880, 1174.66, 1760, 2349.32]; // D5 and higher harmonics
    const gains = [0.4, 0.25, 0.15, 0.1, 0.05];

    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Rapid initial attack, long exponential resonant decay
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(gains[idx], now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    });
  } catch {
    // AudioContext blocked or not supported
  }
}
