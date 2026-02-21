export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-terminal-green font-mono">root@subodh-ram:~#</span>
            <span className="text-terminal-white font-mono">tail -f /var/log/achievements.log</span>
          </div>
          <div className="h-px bg-terminal-green/30 mb-6" />
        </div>

        <div className="terminal-box p-6 max-w-3xl mx-auto hover:border-terminal-yellow/50 hover:shadow-[0_0_20px_rgba(0,255,0,0.15)] transition-all duration-300">
          <div className="font-mono">
            <div className="text-terminal-yellow text-xs mb-3 flex items-center gap-2">
              <span className="text-terminal-green animate-pulse">●</span>
              [SUCCESS] Achievement Logged - {new Date().toISOString().split('T')[0]}
            </div>
            <div className="border-l-2 border-terminal-green/50 pl-4 hover:border-terminal-yellow/50 transition-colors">
              <div className="text-terminal-white text-sm leading-relaxed">
                Led end-to-end data analysis projects converting raw data into meaningful insights, 
                demonstrating strong analytical capabilities and technical expertise in data-driven decision making.
              </div>
            </div>
            <div className="text-terminal-gray text-xs mt-3 flex items-center gap-3">
              <span className="text-terminal-green">Status: COMPLETED</span>
              <span>│</span>
              <span className="text-terminal-yellow">Priority: HIGH</span>
              <span>│</span>
              <span className="text-terminal-green">✓ VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
