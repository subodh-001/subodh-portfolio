import { useEffect, useRef, useCallback } from 'react';

// Sound configuration for EPOMAKER Aula F75 Gasket Mechanical Keyboard
// This keyboard is known for its deep, thocky sound with gasket mount dampening
const KEYBOARD_SOUNDS = {
  enabled: true,
  volume: 0.3,
  // Frequency ranges for different key types (Hz)
  frequencies: {
    regular: { min: 80, max: 120 },    // Deep thocky sound
    space: { min: 60, max: 80 },       // Even deeper for spacebar
    modifier: { min: 90, max: 110 },   // Slightly higher for modifiers
    enter: { min: 70, max: 90 },       // Deep satisfying thock
  },
  // Duration in seconds
  duration: {
    attack: 0.005,
    decay: 0.08,
    sustain: 0.02,
    release: 0.12,
  }
};

export const useKeyboardSound = (enabled: boolean = true) => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const isEnabledRef = useRef(enabled);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    isEnabledRef.current = enabled;
  }, [enabled]);

  // Initialize AudioContext
  const initAudioContext = useCallback(() => {
    if (!audioContextRef.current && !isInitializedRef.current) {
      try {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        isInitializedRef.current = true;
        console.log('🎹 Keyboard sound initialized!');
      } catch (error) {
        console.error('Failed to initialize AudioContext:', error);
      }
    }
  }, []);

  const playKeySound = useCallback((key: string) => {
    // Initialize on first key press if not already initialized
    if (!audioContextRef.current) {
      initAudioContext();
    }

    if (!isEnabledRef.current || !audioContextRef.current) return;

    try {
      const ctx = audioContextRef.current;
      
      // Resume context if suspended (browser autoplay policy)
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;

      // Determine key type for appropriate sound
      let freqRange = KEYBOARD_SOUNDS.frequencies.regular;
      if (key === ' ') {
        freqRange = KEYBOARD_SOUNDS.frequencies.space;
      } else if (['Shift', 'Control', 'Alt', 'Meta', 'Tab', 'CapsLock'].includes(key)) {
        freqRange = KEYBOARD_SOUNDS.frequencies.modifier;
      } else if (key === 'Enter') {
        freqRange = KEYBOARD_SOUNDS.frequencies.enter;
      }

      // Add slight randomization for natural variation
      const baseFreq = freqRange.min + Math.random() * (freqRange.max - freqRange.min);
      const variation = 0.95 + Math.random() * 0.1; // ±5% variation
      const frequency = baseFreq * variation;

      // Create oscillator for the main "thock" sound
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      const filterNode = ctx.createBiquadFilter();

      // Gasket mount creates a dampened, muted sound
      oscillator.type = 'triangle'; // Warmer than sine, less harsh than square
      oscillator.frequency.setValueAtTime(frequency, now);
      
      // Low-pass filter for that muted gasket sound
      filterNode.type = 'lowpass';
      filterNode.frequency.setValueAtTime(800, now);
      filterNode.Q.setValueAtTime(1, now);

      // ADSR envelope for realistic key press
      const { attack, decay, sustain, release } = KEYBOARD_SOUNDS.duration;
      const peakVolume = KEYBOARD_SOUNDS.volume * (0.8 + Math.random() * 0.4); // Variation
      
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(peakVolume, now + attack);
      gainNode.gain.linearRampToValueAtTime(peakVolume * 0.6, now + attack + decay);
      gainNode.gain.setValueAtTime(peakVolume * 0.6, now + attack + decay + sustain);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + attack + decay + sustain + release);

      // Add subtle noise for texture (simulates plastic/keycap sound)
      const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.1, ctx.sampleRate);
      const noiseData = noiseBuffer.getChannelData(0);
      for (let i = 0; i < noiseData.length; i++) {
        noiseData[i] = (Math.random() * 2 - 1) * 0.1;
      }
      
      const noiseSource = ctx.createBufferSource();
      const noiseGain = ctx.createGain();
      const noiseFilter = ctx.createBiquadFilter();
      
      noiseSource.buffer = noiseBuffer;
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(2000, now);
      noiseFilter.Q.setValueAtTime(2, now);
      
      noiseGain.gain.setValueAtTime(0, now);
      noiseGain.gain.linearRampToValueAtTime(0.15, now + 0.002);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

      // Connect nodes
      oscillator.connect(filterNode);
      filterNode.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      noiseSource.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      // Start and stop
      oscillator.start(now);
      noiseSource.start(now);
      
      const totalDuration = attack + decay + sustain + release;
      oscillator.stop(now + totalDuration);
      noiseSource.stop(now + 0.03);

    } catch (error) {
      console.error('Error playing key sound:', error);
    }
  }, [initAudioContext]);

  // Attach global keyboard listener
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't play sound for repeated keys (holding down)
      if (e.repeat) return;
      
      playKeySound(e.key);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled, playKeySound]);

  return { playKeySound };
};
