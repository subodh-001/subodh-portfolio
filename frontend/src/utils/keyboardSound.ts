// Redragon Kumara K552 Style Mechanical Keyboard Sound Player
// This keyboard uses Blue switches (clicky and tactile)
class KeyboardSound {
  private enabled: boolean = true;
  private audioContext: AudioContext | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      } catch (e) {
        console.warn('Web Audio API not supported');
      }
    }
  }

  // Generate realistic mechanical keyboard click sound
  private generateClickSound() {
    if (!this.audioContext) return;

    const now = this.audioContext.currentTime;
    
    // Create multiple oscillators for richer sound
    const oscillator1 = this.audioContext.createOscillator();
    const oscillator2 = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();
    
    oscillator1.connect(filter);
    oscillator2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    // Blue switch characteristics: crisp, clicky sound
    oscillator1.type = 'square';
    oscillator1.frequency.setValueAtTime(1200, now);
    oscillator1.frequency.exponentialRampToValueAtTime(200, now + 0.02);
    
    oscillator2.type = 'sine';
    oscillator2.frequency.setValueAtTime(2400, now);
    oscillator2.frequency.exponentialRampToValueAtTime(400, now + 0.015);
    
    // High-pass filter for crisp sound
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(300, now);
    
    // Volume envelope for mechanical click
    gainNode.gain.setValueAtTime(0.2, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.04);
    
    oscillator1.start(now);
    oscillator1.stop(now + 0.04);
    oscillator2.start(now);
    oscillator2.stop(now + 0.04);
  }

  // Play mechanical keyboard sound (Blue switch style)
  playKeyPress() {
    if (!this.enabled) return;

    try {
      this.generateClickSound();
    } catch (error) {
      // Ignore errors
    }
  }

  // Play spacebar sound (slightly deeper)
  playSpacebarPress() {
    if (!this.enabled || !this.audioContext) return;

    try {
      const now = this.audioContext.currentTime;
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(600, now);
      oscillator.frequency.exponentialRampToValueAtTime(150, now + 0.03);
      
      gainNode.gain.setValueAtTime(0.25, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
      
      oscillator.start(now);
      oscillator.stop(now + 0.05);
    } catch (error) {
      // Ignore errors
    }
  }

  // Play enter key sound (more pronounced)
  playEnterPress() {
    if (!this.enabled || !this.audioContext) return;

    try {
      const now = this.audioContext.currentTime;
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(1500, now);
      oscillator.frequency.exponentialRampToValueAtTime(250, now + 0.04);
      
      gainNode.gain.setValueAtTime(0.3, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.06);
      
      oscillator.start(now);
      oscillator.stop(now + 0.06);
    } catch (error) {
      // Ignore errors
    }
  }

  // Play typing sound for multiple characters
  playTyping(text: string, interval: number = 50) {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        const char = text[index];
        if (char === ' ') {
          this.playSpacebarPress();
        } else if (char === '\n') {
          this.playEnterPress();
        } else {
          this.playKeyPress();
        }
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, interval);
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  isEnabled() {
    return this.enabled;
  }
}

export const keyboardSound = new KeyboardSound();
