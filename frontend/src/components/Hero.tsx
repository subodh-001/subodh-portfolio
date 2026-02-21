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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Sound Toggle Button */}
      <button
        onClick={handleSoundToggle}
        className="fixed top-4 right-4 z-50 bg-terminal-green/10 border border-terminal-green/30 text-terminal-green hover:bg-terminal-green/20 px-4 py-2 rounded font-mono text-xs transition-all"
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
            <span className="terminal-title">root@subodh-ram:~# ./portfolio.sh</span>
          </div>
          
          <div className="terminal-body p-8">
            {/* System Boot Sequence */}
            <div className="mb-6 text-xs font-mono text-terminal-gray">
              <div className="mb-1">[<span className="text-terminal-green">OK</span>] Starting Portfolio System...</div>
              <div className="mb-1">[<span className="text-terminal-green">OK</span>] Loading user credentials...</div>
              <div className="mb-3">[<span className="text-terminal-green">OK</span>] System ready. Access granted.</div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-terminal-green">root@subodh-ram:~#</span>
                <span className="text-terminal-white">whoami</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-mono">
                <span className="text-terminal-green">
                  {name.displayedText}
                  {!name.isComplete && <span className="cursor-blink">█</span>}
                </span>
              </h1>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-terminal-green">root@subodh-ram:~#</span>
                <span className="text-terminal-white">cat /etc/education.conf</span>
              </div>
              <h2 className="text-lg sm:text-xl font-mono text-terminal-white">
                {title.displayedText}
                {!title.isComplete && name.isComplete && <span className="cursor-blink">█</span>}
              </h2>
              {title.isComplete && (
                <p className="text-md text-terminal-gray font-mono mt-1">
                  <span className="text-terminal-yellow">Duration:</span> 2024–2026
                </p>
              )}
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-terminal-green">root@subodh-ram:~#</span>
                <span className="text-terminal-white">cat /proc/specialization</span>
              </div>
              <p className="text-lg sm:text-xl font-mono text-terminal-yellow">
                <span className="text-terminal-green">&gt;&gt;</span> {tagline.displayedText}
                {!tagline.isComplete && title.isComplete && <span className="cursor-blink">█</span>}
              </p>
            </div>

            {tagline.isComplete && (
              <div className="mt-8 animate-fade-in">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-terminal-green">root@subodh-ram:~#</span>
                  <span className="text-terminal-white">wget https://subodh-ram.dev/resume.pdf</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="bg-transparent border-2 border-terminal-green text-terminal-green hover:bg-terminal-green/20 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] font-mono px-6 py-3 text-base transition-all duration-300 group"
                    asChild
                  >
                    <a href="/assets/resume.pdf" download="Subodh_Ram_Resume.pdf" className="flex items-center gap-2">
                      <Download className="h-5 w-5 group-hover:animate-bounce" />
                      <span>DOWNLOAD_RESUME.pdf</span>
                      <span className="opacity-0 group-hover:opacity-100 cursor-blink transition-opacity">█</span>
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    className="bg-transparent border-2 border-terminal-yellow text-terminal-yellow hover:bg-terminal-yellow/20 hover:shadow-[0_0_20px_rgba(255,255,0,0.3)] font-mono px-6 py-3 text-base transition-all duration-300 group"
                    asChild
                  >
                    <a href="/assets/resume.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <span>👁</span>
                      <span>VIEW_RESUME</span>
                      <span className="opacity-0 group-hover:opacity-100 cursor-blink transition-opacity">█</span>
                    </a>
                  </Button>
                </div>
                <div className="mt-2 text-xs font-mono text-terminal-gray">
                  <span className="text-terminal-green">--{new Date().toISOString().split('T')[0]}</span> Connecting to server...
                  <div className="mt-1">
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
