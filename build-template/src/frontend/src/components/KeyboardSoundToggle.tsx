import { useState, useEffect } from 'react';

interface KeyboardSoundToggleProps {
  onToggle: (enabled: boolean) => void;
  initialEnabled?: boolean;
}

const KeyboardSoundToggle = ({ onToggle, initialEnabled = true }: KeyboardSoundToggleProps) => {
  const [enabled, setEnabled] = useState(initialEnabled);

  useEffect(() => {
    // Load saved preference from localStorage
    const saved = localStorage.getItem('keyboardSoundEnabled');
    if (saved !== null) {
      const isEnabled = saved === 'true';
      setEnabled(isEnabled);
      onToggle(isEnabled);
    }
  }, [onToggle]);

  const handleToggle = () => {
    const newState = !enabled;
    setEnabled(newState);
    onToggle(newState);
    localStorage.setItem('keyboardSoundEnabled', String(newState));
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={handleToggle}
        className="flex items-center gap-2 px-4 py-2 bg-terminal-black/80 border border-terminal-green/30 rounded-md hover:border-terminal-green/60 transition-all backdrop-blur-sm group"
        title={enabled ? 'Disable keyboard sounds' : 'Enable keyboard sounds'}
      >
        <span className="text-terminal-green text-sm font-mono">
          {enabled ? '🔊' : '🔇'}
        </span>
        <span className="text-terminal-green/80 text-xs font-mono group-hover:text-terminal-green">
          KEYBOARD
        </span>
        <div className={`w-10 h-5 rounded-full transition-colors ${
          enabled ? 'bg-terminal-green/30' : 'bg-terminal-green/10'
        } relative`}>
          <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-terminal-green transition-transform ${
            enabled ? 'translate-x-5' : 'translate-x-0.5'
          }`} />
        </div>
      </button>
    </div>
  );
};

export default KeyboardSoundToggle;
