// Redragon Kumara K552 Style Mechanical Keyboard Sound Player
// This keyboard uses Blue switches (clicky and tactile)
class KeyboardSound {
  private enabled: boolean = true;
  private sounds: HTMLAudioElement[] = [];
  private currentIndex: number = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initSounds();
    }
  }

  // Initialize audio elements with Blue switch mechanical keyboard sound
  private initSounds() {
    // Using multiple sound sources for Blue switch keyboards
    // These sound like Redragon Kumara K552 (Blue switches)
    const soundUrls = [
      'https://www.myinstants.com/media/sounds/cherry-mx-blue.mp3',
      'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
      'https://freesound.org/data/previews/387/387186_7255534-lq.mp3'
    ];
    
    // Create multiple audio elements for smooth rapid typing
    for (let i = 0; i < 30; i++) {
      const audio = new Audio(soundUrls[i % soundUrls.length]);
      audio.volume = 0.3; // Slightly louder for Blue switches
      audio.preload = 'auto';
      this.sounds.push(audio);
    }
  }

  // Play mechanical keyboard sound (Blue switch style)
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
