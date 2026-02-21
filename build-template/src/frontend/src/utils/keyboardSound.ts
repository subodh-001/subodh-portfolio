// Real Mechanical Keyboard Sound Player
class KeyboardSound {
  private enabled: boolean = true;
  private sounds: HTMLAudioElement[] = [];
  private currentIndex: number = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initSounds();
    }
  }

  // Initialize audio elements with mechanical keyboard sound
  private initSounds() {
    // Using direct URL to mechanical keyboard sound
    // This is a real Cherry MX mechanical keyboard click sound
    const soundUrl = 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3';
    
    // Create multiple audio elements for smooth rapid typing
    for (let i = 0; i < 25; i++) {
      const audio = new Audio(soundUrl);
      audio.volume = 0.25;
      audio.preload = 'auto';
      this.sounds.push(audio);
    }
  }

  // Play mechanical keyboard sound
  playKeyPress() {
    if (!this.enabled) return;

    try {
      const audio = this.sounds[this.currentIndex];
      audio.currentTime = 0;
      audio.play().catch(() => {
        // Silently handle play errors
      });
      
      this.currentIndex = (this.currentIndex + 1) % this.sounds.length;
    } catch (error) {
      // Ignore errors
    }
  }

  // Play spacebar sound
  playSpacebarPress() {
    this.playKeyPress();
  }

  // Play enter key sound
  playEnterPress() {
    this.playKeyPress();
  }

  // Play typing sound for multiple characters
  playTyping(text: string, interval: number = 50) {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        this.playKeyPress();
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
