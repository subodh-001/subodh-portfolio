import { useState, useEffect } from 'react';
import { keyboardSound } from '../utils/keyboardSound';

interface UseTypingEffectOptions {
  text: string;
  speed?: number;
  startDelay?: number;
  enableSound?: boolean;
}

export function useTypingEffect({ text, speed = 80, startDelay = 0, enableSound = true }: UseTypingEffectOptions) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let currentIndex = 0;

    const startTyping = () => {
      if (currentIndex < text.length) {
        const char = text[currentIndex];
        setDisplayedText(text.slice(0, currentIndex + 1));
        
        // Play sound based on character type
        if (enableSound && keyboardSound.isEnabled()) {
          if (char === ' ') {
            keyboardSound.playSpacebarPress();
          } else if (char === '\n') {
            keyboardSound.playEnterPress();
          } else {
            keyboardSound.playKeyPress();
          }
        }
        
        currentIndex++;
        timeout = setTimeout(startTyping, speed);
      } else {
        setIsComplete(true);
      }
    };

    timeout = setTimeout(startTyping, startDelay);

    return () => {
      clearTimeout(timeout);
    };
  }, [text, speed, startDelay, enableSound]);

  return { displayedText, isComplete };
}
