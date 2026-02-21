import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NetworkLines from './components/NetworkLines';
import ScanlineOverlay from './components/ScanlineOverlay';
import NetworkStats from './components/NetworkStats';
import BootSequence from './components/BootSequence';
import ShutdownSequence from './components/ShutdownSequence';
import PowerOffScreen from './components/PowerOffScreen';
import KeyboardSoundToggle from './components/KeyboardSoundToggle';
import { useKeyboardSound } from './hooks/useKeyboardSound';

type SystemState = 'booting' | 'running' | 'shutting-down' | 'powered-off';

function App() {
  const [systemState, setSystemState] = useState<SystemState>('booting');
  const [keyboardSoundEnabled, setKeyboardSoundEnabled] = useState(true);
  
  // Initialize keyboard sound hook
  useKeyboardSound(keyboardSoundEnabled);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleBootComplete = () => {
    setSystemState('running');
  };

  const handleShutdown = () => {
    setSystemState('shutting-down');
  };

  const handleShutdownComplete = () => {
    setSystemState('powered-off');
  };

  const handlePowerOn = () => {
    setSystemState('booting');
  };

  // Show boot sequence on first load
  if (systemState === 'booting') {
    return <BootSequence onBootComplete={handleBootComplete} />;
  }

  // Show shutdown sequence
  if (systemState === 'shutting-down') {
    return <ShutdownSequence onShutdownComplete={handleShutdownComplete} />;
  }

  // Show power off screen
  if (systemState === 'powered-off') {
    return <PowerOffScreen onPowerOn={handlePowerOn} />;
  }

  // Show main portfolio
  return (
    <div className="relative min-h-screen bg-terminal-black text-terminal-white overflow-x-hidden">
      {/* Matrix-style falling characters background */}
      <NetworkLines />
      
      {/* Scanline overlay for CRT effect */}
      <ScanlineOverlay />
      
      {/* Keyboard Sound Toggle */}
      <KeyboardSoundToggle 
        onToggle={setKeyboardSoundEnabled}
        initialEnabled={keyboardSoundEnabled}
      />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <NetworkStats />
        <PersonalInfo />
        <Education />
        <Projects />
        <Experience />
        <Certifications />
        <Skills />
        <Achievements />
        <Contact />
        <Footer onShutdown={handleShutdown} />
      </div>
    </div>
  );
}

export default App;
