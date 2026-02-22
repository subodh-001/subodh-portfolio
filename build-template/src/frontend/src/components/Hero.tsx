import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { useEffect, useState } from 'react';
import { keyboardSound } from '../utils/keyboardSound';

export default function Hero() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  const name = useTypingEffect({ text: 'SUBODH RAM', speed: 100, startDelay: 500 });
  const title = useTypingEffect({ text: 'Master of Computer Applications Student', speed: 50, startDelay: 2000 });
  const tagline = useTypingEffect({ text: 'Full Stack Developer & Network Engineer', speed: 50, startDelay: 4500 });

  // Enable keyboard sound by default
  useEffect(() => {
    keyboardSound.setEnabled(soundEnabled);
  }, [soundEnabled]);

  // Play sound on keypress
  useEffect(() => {
    const handleKeyPress = () => {
      if (soundEnabled) {
        keyboardSound.playKeyPress();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [soundEnabled]);

  const handleSoundToggle = () => {
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    keyboardSound.setEnabled(newState);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-6 lg:px-8 py-8">
      {/* Sound Toggle Button */}
      <button
        onClick={handleSoundToggle}
        className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50 bg-terminal-green/10 border border-terminal-green/30 text-terminal-green hover:bg-terminal-green/20 px-2 py-1 sm:px-4 sm:py-2 rounded font-mono text-[10px] sm:text-xs transition-all"
        title={soundEnabled ? 'Disable keyboard sound' : 'Enable keyboard sound'}
      >
        🔊 {soundEnabled ? 'ON' : 'OFF'}
      </button>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-button"></span>
              <span className="terminal-button"></span>
              <span className="terminal-button"></span>
            </div>
            <span className="terminal-title text-[10px] sm:text-sm truncate">root@subodh-ram:~# ./portfolio.sh</span>
          </div>
          
          <div className="terminal-body p-4 sm:p-6 lg:p-8">
            {/* System Boot Sequence */}
            <div className="mb-4 sm:mb-6 text-[10px] sm:text-xs font-mono text-terminal-gray overflow-x-auto">
              <div className="mb-1 whitespace-nowrap">[<span className="text-terminal-green">OK</span>] Starting Portfolio System...</div>
              <div className="mb-1 whitespace-nowrap">[<span className="text-terminal-green">OK</span>] Loading user credentials...</div>
              <div className="mb-2 sm:mb-3 whitespace-nowrap">[<span className="text-terminal-green">OK</span>] System ready. Access granted.</div>
            </div>

            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-1 sm:gap-2 mb-2 text-[10px] sm:text-xs overflow-x-auto">
                <span className="text-terminal-green whitespace-nowrap">root@subodh-ram:~#</span>
                <span className="text-terminal-white whitespace-nowrap">whoami</span>
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-mono break-words">
                <span className="text-terminal-green">
                  {name.displayedText}
                  {!name.isComplete && <span className="cursor-blink">█</span>}
                </span>
              </h1>
            </div>

            <div className="mb-4 sm:mb-6">
              <div className="flex items-center gap-1 sm:gap-2 mb-2 text-[10px] sm:text-xs overflow-x-auto">
                <span className="text-terminal-green whitespace-nowrap">root@subodh-ram:~#</span>
                <span className="text-terminal-white whitespace-nowrap">cat /etc/education.conf</span>
              </div>
              <h2 className="text-sm sm:text-lg md:text-xl font-mono text-terminal-white break-words">
                {title.displayedText}
                {!title.isComplete && name.isComplete && <span className="cursor-blink">█</span>}
              </h2>
              {title.isComplete && (
                <p className="text-xs sm:text-md text-terminal-gray font-mono mt-1">
                  <span className="text-terminal-yellow">Duration:</span> 2024–2026
                </p>
              )}
            </div>

            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-1 sm:gap-2 mb-2 text-[10px] sm:text-xs overflow-x-auto">
                <span className="text-terminal-green whitespace-nowrap">root@subodh-ram:~#</span>
                <span className="text-terminal-white whitespace-nowrap">cat /proc/specialization</span>
              </div>
              <p className="text-sm sm:text-lg md:text-xl font-mono text-terminal-yellow break-words">
                <span className="text-terminal-green">&gt;&gt;</span> {tagline.displayedText}
                {!tagline.isComplete && title.isComplete && <span className="cursor-blink">█</span>}
              </p>
            </div>

            {tagline.isComplete && (
              <div className="mt-6 sm:mt-8 animate-fade-in">
                <div className="flex items-center gap-1 sm:gap-2 mb-3 text-[10px] sm:text-xs overflow-x-auto">
                  <span className="text-terminal-green whitespace-nowrap">root@subodh-ram:~#</span>
                  <span className="text-terminal-white whitespace-nowrap">wget https://subodh-ram.dev/resume.pdf</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button
                    size="lg"
                    className="bg-transparent border-2 border-terminal-green text-terminal-green hover:bg-terminal-green/20 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] font-mono px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-base transition-all duration-300 group w-full sm:w-auto"
                    asChild
                  >
                    <a href="/assets/resume.pdf" download="Subodh_Ram_Resume.pdf" className="flex items-center justify-center gap-2">
                      <Download className="h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce flex-shrink-0" />
                      <span className="truncate">DOWNLOAD_RESUME.pdf</span>
                      <span className="opacity-0 group-hover:opacity-100 cursor-blink transition-opacity hidden sm:inline">█</span>
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    className="bg-transparent border-2 border-terminal-yellow text-terminal-yellow hover:bg-terminal-yellow/20 hover:shadow-[0_0_20px_rgba(255,255,0,0.3)] font-mono px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-base transition-all duration-300 group w-full sm:w-auto"
                    asChild
                  >
                    <a href="/assets/resume.html" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <span>👁</span>
                      <span className="truncate">VIEW_RESUME</span>
                      <span className="opacity-0 group-hover:opacity-100 cursor-blink transition-opacity hidden sm:inline">█</span>
                    </a>
                  </Button>
                </div>
                <div className="mt-2 text-[10px] sm:text-xs font-mono text-terminal-gray overflow-x-auto">
                  <div className="whitespace-nowrap">
                    <span className="text-terminal-green">--{new Date().toISOString().split('T')[0]}</span> Connecting to server...
                  </div>
                  <div className="mt-1 whitespace-nowrap">
                    <span className="text-terminal-green">[OK]</span> Resume ready for download
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
