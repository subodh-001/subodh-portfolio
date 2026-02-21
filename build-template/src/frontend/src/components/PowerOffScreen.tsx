import { useEffect, useState } from 'react';

interface PowerOffScreenProps {
  onPowerOn: () => void;
}

const nothingLogoSmall = `
███╗   ██╗ ██████╗ ████████╗██╗  ██╗██╗███╗   ██╗ ██████╗ 
████╗  ██║██╔═══██╗╚══██╔══╝██║  ██║██║████╗  ██║██╔════╝ 
██╔██╗ ██║██║   ██║   ██║   ███████║██║██╔██╗ ██║██║  ███╗
██║╚██╗██║██║   ██║   ██║   ██╔══██║██║██║╚██╗██║██║   ██║
██║ ╚████║╚██████╔╝   ██║   ██║  ██║██║██║ ╚████║╚██████╔╝
╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝ 
`;

export default function PowerOffScreen({ onPowerOn }: PowerOffScreenProps) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (showMessage) {
        onPowerOn();
      }
    };

    const handleClick = () => {
      if (showMessage) {
        onPowerOn();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('click', handleClick);
    };
  }, [showMessage, onPowerOn]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {showMessage && (
        <div className="text-center font-mono animate-fade-in">
          {/* NOTHING Logo */}
          <div className="mb-8">
            <pre className="text-gray-700 text-[8px] sm:text-xs leading-tight">
              {nothingLogoSmall}
            </pre>
          </div>

          <div className="mb-8">
            <div className="text-4xl sm:text-6xl mb-4 text-gray-800">⚡</div>
            <div className="text-xl sm:text-2xl text-gray-600 mb-2 font-bold">
              System Powered Off
            </div>
            <div className="text-xs sm:text-sm text-gray-700">
              {new Date().toLocaleString()}
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="text-green-600 text-base sm:text-lg animate-pulse">
              Press any key to power on...
            </div>
            <div className="text-gray-700 text-xs">
              or click anywhere on the screen
            </div>
          </div>

          <div className="mt-12 text-gray-800 text-xs">
            <div className="mb-2">NOTHING OS - Portfolio Edition v2.0</div>
            <div>© 2026 Subodh Ram Technologies</div>
          </div>
        </div>
      )}
    </div>
  );
}
