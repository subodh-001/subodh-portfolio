import { useState, useEffect } from 'react';

interface UseTypingEffectOptions {
  text: string;
  speed?: number;
  startDelay?: number;
}

export function useTypingEffect({ text, speed = 80, startDelay = 0 }: UseTypingEffectOptions) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
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
  }, [text, speed, startDelay]);

  return { displayedText, isComplete };
}
