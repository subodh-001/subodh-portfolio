import { useEffect, useState } from 'react';

interface NetworkStat {
  label: string;
  value: string;
  status: 'active' | 'warning' | 'success';
  icon: string;
}

export default function NetworkStats() {
  const [stats, setStats] = useState<NetworkStat[]>([
    { label: 'Uptime', value: '99.9%', status: 'success', icon: '⚡' },
    { label: 'Latency', value: '<50ms', status: 'success', icon: '📡' },
    { label: 'Bandwidth', value: '1Gbps', status: 'active', icon: '🌐' },
    { label: 'Packets', value: '0 lost', status: 'success', icon: '📦' },
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-terminal-green';
      case 'warning': return 'text-terminal-yellow';
      case 'active': return 'text-terminal-white';
      default: return 'text-terminal-gray';
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-terminal-green/20">
      <div className="max-w-6xl mx-auto">
        <div className="terminal-box p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="font-mono">
              <div className="text-terminal-green text-xs mb-1">
                root@subodh-ram:~# systemctl status portfolio.service
              </div>
              <div className="text-terminal-yellow text-sm flex items-center gap-2">
                <span className="animate-pulse">●</span>
                System Status: OPERATIONAL
              </div>
            </div>
            <div className="font-mono text-terminal-gray text-xs">
              {currentTime.toLocaleTimeString()}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="terminal-box p-4 hover:border-terminal-green/50 transition-all duration-300"
              >
                <div className="font-mono text-center">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-terminal-gray text-xs mb-1">{stat.label}</div>
                  <div className={`text-lg font-bold ${getStatusColor(stat.status)}`}>
                    {stat.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 font-mono text-xs text-terminal-gray">
            <div className="flex items-center gap-2">
              <span className="text-terminal-green">[OK]</span>
              All systems operational | Last check: {currentTime.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
