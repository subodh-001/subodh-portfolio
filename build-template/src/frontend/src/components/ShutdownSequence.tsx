import { useEffect, useState, useRef } from 'react';
import { keyboardSound } from '../utils/keyboardSound';

interface ShutdownSequenceProps {
  onShutdownComplete: () => void;
}

const shutdownMessages = [
  { text: '[subodh-ram@portfolio ~]$ sudo shutdown now', delay: 200 },
  { text: '', delay: 300 },
  { text: 'Broadcast message from root@subodh-portfolio', delay: 150 },
  { text: '        (/dev/pts/0) at ' + new Date().toLocaleTimeString(), delay: 150 },
  { text: '', delay: 200 },
  { text: 'The system is going down for poweroff NOW!', delay: 200 },
  { text: '', delay: 300 },
  { text: '[    0.000000] Stopping Portfolio Services...', delay: 150 },
  { text: '[  OK  ] Stopped Portfolio Frontend Service', delay: 100 },
  { text: '[  OK  ] Stopped Portfolio Backend Service', delay: 100 },
  { text: '[  OK  ] Stopped Portfolio Database Service', delay: 100 },
  { text: '[    0.123456] Stopping Display Manager...', delay: 150 },
  { text: '[  OK  ] Stopped Display Manager', delay: 100 },
  { text: '[    0.234567] Stopping Network Services...', delay: 150 },
  { text: '[  OK  ] Stopped Network Name Resolution', delay: 100 },
  { text: '[  OK  ] Stopped Network Configuration', delay: 100 },
  { text: '[    0.345678] Unmounting filesystems...', delay: 150 },
  { text: '[  OK  ] Unmounted /home/subodh-ram/portfolio', delay: 100 },
  { text: '[  OK  ] Unmounted /sys/fs/cgroup', delay: 80 },
  { text: '[  OK  ] Unmounted /sys/kernel/security', delay: 80 },
  { text: '[    0.456789] Stopping Journal Service...', delay: 120 },
  { text: '[  OK  ] Stopped Journal Service', delay: 100 },
  { text: '[    0.567890] Reached target Shutdown', delay: 150 },
  { text: '[    0.678901] Deactivating swap...', delay: 100 },
  { text: '[  OK  ] Deactivated swap', delay: 100 },
  { text: '[    0.789012] All filesystems unmounted', delay: 150 },
  { text: '[    0.890123] All swaps deactivated', delay: 100 },
  { text: '[    1.001234] Detaching DM devices', delay: 150 },
  { text: '[    1.112345] Detaching loop devices', delay: 100 },
  { text: '[    1.223456] System halted', delay: 200 },
  { text: '', delay: 500 },
];

export default function ShutdownSequence({ onShutdownComplete }: ShutdownSequenceProps) {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (currentIndex >= shutdownMessages.length) {
      setIsComplete(true);
      setTimeout(() => {
        onShutdownComplete();
      }, 1000);
      return;
    }

    const timer = setTimeout(() => {
      const message = shutdownMessages[currentIndex];
      setMessages(prev => [...prev, message.text]);
      setCurrentIndex(prev => prev + 1);
      
      if (message.text.trim()) {
        keyboardSound.playKeyPress();
      }
    }, shutdownMessages[currentIndex].delay);

    return () => clearTimeout(timer);
  }, [currentIndex, onShutdownComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden">
      <div 
        ref={scrollRef}
        className="h-full overflow-y-auto p-4 font-mono text-[10px] sm:text-xs"
        style={{ scrollBehavior: 'smooth' }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-1 ${
              message.includes('[  OK  ]')
                ? 'text-green-500'
                : message.includes('Stopping') || message.includes('Unmounting')
                ? 'text-yellow-500'
                : message.includes('halted') || message.includes('poweroff')
                ? 'text-red-500'
                : message.includes('Broadcast')
                ? 'text-cyan-400'
                : 'text-gray-300'
            }`}
          >
            {message || '\u00A0'}
          </div>
        ))}
        {!isComplete && (
          <span className="inline-block w-2 h-4 bg-red-500 animate-pulse ml-1"></span>
        )}
      </div>
    </div>
  );
}
