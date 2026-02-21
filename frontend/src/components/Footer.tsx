import { Heart } from 'lucide-react';

interface FooterProps {
  onShutdown?: () => void;
}

export default function Footer({ onShutdown }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 border-t border-terminal-green/20">
      <div className="max-w-6xl mx-auto">
        <div className="terminal-box p-6 hover:border-terminal-yellow/30 transition-all duration-300">
          <div className="font-mono text-center">
            <div className="text-terminal-gray text-xs mb-2">
              root@subodh-ram:~# echo $COPYRIGHT
            </div>
            <p className="text-sm text-terminal-white mb-3">
              © {currentYear} Subodh Ram. All rights reserved.
            </p>
            <div className="text-terminal-gray text-xs mb-2">
              root@subodh-ram:~# cat /etc/credits
            </div>
            <p className="text-sm text-terminal-white flex items-center justify-center gap-2 flex-wrap mb-4">
              Built with <Heart className="h-4 w-4 text-terminal-green fill-terminal-green animate-pulse" /> and passion
            </p>
            
            {onShutdown && (
              <div className="mt-4 pt-4 border-t border-terminal-green/20">
                <button
                  onClick={onShutdown}
                  className="bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500/20 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] font-mono px-6 py-2 text-sm transition-all duration-300 group"
                >
                  <span className="flex items-center gap-2">
                    <span>⚡</span>
                    <span>sudo shutdown now</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">█</span>
                  </span>
                </button>
                <div className="text-terminal-gray text-xs mt-2">
                  Click to shutdown the system
                </div>
              </div>
            )}
            
            <div className="text-terminal-gray text-xs mt-3">
              <span className="text-terminal-green">[OK]</span> System running smoothly
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
