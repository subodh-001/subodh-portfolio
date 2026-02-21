import { useEffect, useState, useRef } from 'react';
import { keyboardSound } from '../utils/keyboardSound';

interface BootSequenceProps {
  onBootComplete: () => void;
}

const nothingLogo = `
███╗   ██╗ ██████╗ ████████╗██╗  ██╗██╗███╗   ██╗ ██████╗ 
████╗  ██║██╔═══██╗╚══██╔══╝██║  ██║██║████╗  ██║██╔════╝ 
██╔██╗ ██║██║   ██║   ██║   ███████║██║██╔██╗ ██║██║  ███╗
██║╚██╗██║██║   ██║   ██║   ██╔══██║██║██║╚██╗██║██║   ██║
██║ ╚████║╚██████╔╝   ██║   ██║  ██║██║██║ ╚████║╚██████╔╝
╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝ 
`;

const bootMessages = [
  { text: '', delay: 100 },
  { text: '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓', delay: 50, color: 'cyan' },
  { text: '', delay: 100 },
  { text: nothingLogo, delay: 500, color: 'logo', multiline: true },
  { text: '', delay: 200 },
  { text: '                    NOTHING OS - Portfolio Edition v2.0', delay: 150, color: 'cyan' },
  { text: '                    Powered by Subodh Ram Technologies', delay: 150, color: 'gray' },
  { text: '', delay: 100 },
  { text: '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓', delay: 50, color: 'cyan' },
  { text: '', delay: 300 },
  { text: '[    0.000000] Initializing NOTHING Portfolio System...', delay: 100 },
  { text: '[    0.000123] CPU: Intel Core i9-13900K @ 5.8GHz (24 cores)', delay: 80, color: 'green' },
  { text: '[    0.000234] Memory: 64GB DDR5-6000 CL30', delay: 80, color: 'green' },
  { text: '[    0.000345] GPU: NVIDIA RTX 4090 24GB', delay: 80, color: 'green' },
  { text: '[    0.000456] Storage: 4TB NVMe Gen5 SSD', delay: 80, color: 'green' },
  { text: '[    0.123456] Loading NOTHING kernel modules...', delay: 120 },
  { text: '[  OK  ] Loaded kernel module: nothing_core.ko', delay: 100, color: 'green' },
  { text: '[  OK  ] Loaded kernel module: portfolio_engine.ko', delay: 100, color: 'green' },
  { text: '[  OK  ] Loaded kernel module: networking_stack.ko', delay: 100, color: 'green' },
  { text: '[  OK  ] Loaded kernel module: security_framework.ko', delay: 100, color: 'green' },
  { text: '[    0.234567] Starting systemd v256.4-nothing-edition', delay: 100 },
  { text: '[    0.345678] Mounted /sys/kernel/security', delay: 60 },
  { text: '[    0.456789] Mounted /sys/fs/cgroup', delay: 60 },
  { text: '[    0.567890] Mounted /sys/fs/fuse/connections', delay: 60 },
  { text: '[    0.678901] Mounted /dev/shm (tmpfs)', delay: 60 },
  { text: '[    0.789012] Starting Journal Service...', delay: 100 },
  { text: '[  OK  ] Started Journal Service', delay: 100, color: 'green' },
  { text: '[    0.890123] Detecting hardware configuration...', delay: 120, color: 'yellow' },
  { text: '[  OK  ] Detected Network Interface: eth0 (1Gbps)', delay: 100, color: 'green' },
  { text: '[  OK  ] Detected Network Interface: wlan0 (WiFi 6E)', delay: 100, color: 'green' },
  { text: '[    1.001234] Starting Load Kernel Modules...', delay: 100 },
  { text: '[  OK  ] Finished Load Kernel Modules', delay: 100, color: 'green' },
  { text: '[    1.112345] Starting Apply Kernel Variables...', delay: 100 },
  { text: '[  OK  ] Finished Apply Kernel Variables', delay: 100, color: 'green' },
  { text: '[    1.223456] Initializing AI/ML Framework...', delay: 150, color: 'yellow' },
  { text: '[  OK  ] TensorFlow 2.15.0 initialized', delay: 100, color: 'green' },
  { text: '[  OK  ] PyTorch 2.1.0 initialized', delay: 100, color: 'green' },
  { text: '[    1.334567] Starting Create System Users...', delay: 100 },
  { text: '[  OK  ] Created user: subodh-ram (uid=1000)', delay: 100, color: 'green' },
  { text: '[  OK  ] Created group: developers (gid=1000)', delay: 100, color: 'green' },
  { text: '[    1.445678] Starting Create Static Device Nodes...', delay: 100 },
  { text: '[  OK  ] Finished Create Static Device Nodes', delay: 100, color: 'green' },
  { text: '[    1.556789] Starting Rule-based Manager for Device Events...', delay: 100 },
  { text: '[  OK  ] Started Rule-based Manager for Device Events', delay: 100, color: 'green' },
  { text: '[    1.667890] Configuring Network Stack...', delay: 150, color: 'yellow' },
  { text: '[  OK  ] Configured TCP/IP Stack', delay: 100, color: 'green' },
  { text: '[  OK  ] Configured DNS Resolution (8.8.8.8, 1.1.1.1)', delay: 100, color: 'green' },
  { text: '[  OK  ] Configured DHCP Client', delay: 100, color: 'green' },
  { text: '[  OK  ] Configured Firewall Rules (iptables)', delay: 100, color: 'green' },
  { text: '[    1.778901] Starting Network Services...', delay: 150 },
  { text: '[  OK  ] Started Network Configuration', delay: 100, color: 'green' },
  { text: '[  OK  ] Started Network Name Resolution', delay: 100, color: 'green' },
  { text: '[  OK  ] Started SSH Daemon (Port 22)', delay: 100, color: 'green' },
  { text: '[    1.889012] Mounting Portfolio Filesystems...', delay: 150 },
  { text: '[  OK  ] Mounted /home/subodh-ram/portfolio', delay: 100, color: 'green' },
  { text: '[  OK  ] Mounted /var/www/projects', delay: 100, color: 'green' },
  { text: '[  OK  ] Mounted /opt/development', delay: 100, color: 'green' },
  { text: '[    2.000123] Starting Database Services...', delay: 150, color: 'yellow' },
  { text: '[  OK  ] Started MongoDB v7.0.5 (Port 27017)', delay: 100, color: 'green' },
  { text: '[  OK  ] Started PostgreSQL v16.1 (Port 5432)', delay: 100, color: 'green' },
  { text: '[  OK  ] Started Redis v7.2.4 (Port 6379)', delay: 100, color: 'green' },
  { text: '[    2.111234] Starting Portfolio Services...', delay: 150, color: 'yellow' },
  { text: '[  OK  ] Started Portfolio Frontend Service (React + Vite)', delay: 100, color: 'green' },
  { text: '[  OK  ] Started Portfolio Backend Service (Node.js + Express)', delay: 100, color: 'green' },
  { text: '[  OK  ] Started Portfolio API Gateway (Port 3000)', delay: 100, color: 'green' },
  { text: '[  OK  ] Started WebSocket Server (Port 8080)', delay: 100, color: 'green' },
  { text: '[    2.222345] Starting Security Services...', delay: 150, color: 'yellow' },
  { text: '[  OK  ] Started Firewall Service', delay: 100, color: 'green' },
  { text: '[  OK  ] Started Intrusion Detection System', delay: 100, color: 'green' },
  { text: '[  OK  ] Started SSL/TLS Certificate Manager', delay: 100, color: 'green' },
  { text: '[    2.333456] Starting Development Tools...', delay: 150, color: 'yellow' },
  { text: '[  OK  ] Started Docker Engine v24.0.7', delay: 100, color: 'green' },
  { text: '[  OK  ] Started Git Service v2.43.0', delay: 100, color: 'green' },
  { text: '[  OK  ] Started VS Code Server', delay: 100, color: 'green' },
  { text: '[    2.444567] Starting Display Manager...', delay: 150 },
  { text: '[  OK  ] Started Display Manager (Wayland)', delay: 100, color: 'green' },
  { text: '[  OK  ] Started Window Manager (Hyprland)', delay: 100, color: 'green' },
  { text: '[    2.555678] Reached target Multi-User System', delay: 150, color: 'cyan' },
  { text: '[    2.666789] Reached target Graphical Interface', delay: 150, color: 'cyan' },
  { text: '', delay: 300 },
  { text: '╔════════════════════════════════════════════════════════════════════╗', delay: 100, color: 'cyan' },
  { text: '║                    NOTHING OS - SYSTEM READY                      ║', delay: 100, color: 'cyan' },
  { text: '╚════════════════════════════════════════════════════════════════════╝', delay: 100, color: 'cyan' },
  { text: '', delay: 200 },
  { text: 'NOTHING GNU/Linux 6.2 subodh-portfolio tty1', delay: 150, color: 'white' },
  { text: '', delay: 100 },
  { text: 'subodh-portfolio login: subodh-ram', delay: 200, color: 'cyan' },
  { text: 'Password: ●●●●●●●●', delay: 300, color: 'cyan' },
  { text: '', delay: 200 },
  { text: 'Last login: ' + new Date().toLocaleString(), delay: 150, color: 'gray' },
  { text: '', delay: 100 },
  { text: '╔════════════════════════════════════════════════════════════════════╗', delay: 100, color: 'green' },
  { text: '║  Welcome to NOTHING OS - Portfolio Edition                        ║', delay: 100, color: 'green' },
  { text: '║  Developer: Subodh Ram                                            ║', delay: 100, color: 'green' },
  { text: '║  Specialization: Full Stack Development & Network Engineering     ║', delay: 100, color: 'green' },
  { text: '║  Education: Master of Computer Applications (MCA)                 ║', delay: 100, color: 'green' },
  { text: '╚════════════════════════════════════════════════════════════════════╝', delay: 100, color: 'green' },
  { text: '', delay: 200 },
  { text: '[subodh-ram@nothing-portfolio ~]$ neofetch', delay: 300, color: 'yellow' },
  { text: '', delay: 200 },
  { text: '       ██████╗                    OS: NOTHING Linux x86_64', delay: 100, color: 'cyan' },
  { text: '      ██╔════╝                    Host: Portfolio System v2.0', delay: 100, color: 'cyan' },
  { text: '      ██║                         Kernel: 6.6.10-nothing', delay: 100, color: 'cyan' },
  { text: '      ██║                         Uptime: 2 mins', delay: 100, color: 'cyan' },
  { text: '      ╚██████╗                    Shell: zsh 5.9', delay: 100, color: 'cyan' },
  { text: '       ╚═════╝                    Terminal: alacritty', delay: 100, color: 'cyan' },
  { text: '                                  CPU: Intel i9-13900K (24) @ 5.8GHz', delay: 100, color: 'cyan' },
  { text: '                                  GPU: NVIDIA RTX 4090', delay: 100, color: 'cyan' },
  { text: '                                  Memory: 2048MiB / 65536MiB', delay: 100, color: 'cyan' },
  { text: '', delay: 200 },
  { text: '[subodh-ram@nothing-portfolio ~]$ startx', delay: 300, color: 'yellow' },
  { text: '', delay: 200 },
  { text: '⚡ Starting X Server...', delay: 200, color: 'yellow' },
  { text: '⚡ Loading Wayland compositor...', delay: 200, color: 'yellow' },
  { text: '⚡ Initializing GPU acceleration...', delay: 200, color: 'yellow' },
  { text: '⚡ Loading portfolio interface...', delay: 300, color: 'yellow' },
  { text: '⚡ Applying custom themes...', delay: 200, color: 'yellow' },
  { text: '⚡ Starting animation engine...', delay: 200, color: 'yellow' },
  { text: '', delay: 300 },
  { text: '✓ Portfolio System Ready!', delay: 500, color: 'green' },
  { text: '', delay: 500 },
];

export default function BootSequence({ onBootComplete }: BootSequenceProps) {
  const [messages, setMessages] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom (only for messages, not logo)
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    // Show logo first
    if (currentIndex === 0) {
      setShowLogo(true);
    }

    if (currentIndex >= bootMessages.length) {
      setIsComplete(true);
      setTimeout(() => {
        onBootComplete();
      }, 1000);
      return;
    }

    const timer = setTimeout(() => {
      const message = bootMessages[currentIndex];
      
      // Skip multiline logo in messages (it's shown separately)
      if (message.multiline) {
        setCurrentIndex(prev => prev + 1);
        return;
      }
      
      setMessages(prev => [...prev, message.text]);
      setColors(prev => [...prev, message.color || 'white']);
      setCurrentIndex(prev => prev + 1);
      
      // Play keyboard sound for non-empty messages
      if (message.text.trim()) {
        keyboardSound.playKeyPress();
      }
    }, bootMessages[currentIndex].delay);

    return () => clearTimeout(timer);
  }, [currentIndex, onBootComplete]);

  const getColorClass = (color: string) => {
    switch (color) {
      case 'green': return 'text-green-500';
      case 'yellow': return 'text-yellow-500';
      case 'red': return 'text-red-500';
      case 'cyan': return 'text-cyan-400';
      case 'gray': return 'text-gray-500';
      case 'white': return 'text-white';
      default: return 'text-gray-300';
    }
  };

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden flex flex-col">
      {/* Fixed NOTHING Logo at top */}
      {showLogo && (
        <div className="flex-shrink-0 p-4 border-b border-gray-800">
          <div className="text-cyan-400 text-[10px] leading-none mb-2">
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
          </div>
          <pre className="text-green-400 font-bold text-xs sm:text-sm leading-tight">
{nothingLogo}
          </pre>
          <div className="text-cyan-400 text-[10px] text-center mt-1">
            NOTHING OS - Portfolio Edition v2.0
          </div>
          <div className="text-gray-500 text-[8px] text-center">
            Powered by Subodh Ram Technologies
          </div>
          <div className="text-cyan-400 text-[10px] leading-none mt-2">
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
          </div>
        </div>
      )}
      
      {/* Scrollable boot messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 font-mono"
        style={{ scrollBehavior: 'smooth' }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-0.5 ${getColorClass(colors[index])} text-[9px] sm:text-[10px] whitespace-pre`}
          >
            {message || '\u00A0'}
          </div>
        ))}
        {!isComplete && (
          <span className="inline-block w-1.5 h-3 bg-green-500 animate-pulse ml-1"></span>
        )}
      </div>
    </div>
  );
}
