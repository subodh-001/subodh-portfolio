export default function Achievements() {
  return (
    <section id="achievements" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-1 sm:gap-2 mb-4 text-[10px] sm:text-xs overflow-x-auto">
            <span className="text-terminal-green font-mono whitespace-nowrap">root@subodh-ram:~#</span>
            <span className="text-terminal-white font-mono whitespace-nowrap">tail -f /var/log/achievements.log</span>
          </div>
          <div className="h-px bg-terminal-green/30 mb-4 sm:mb-6" />
        </div>

        <div className="terminal-box p-3 sm:p-6 max-w-3xl mx-auto hover:border-terminal-yellow/50 hover:shadow-[0_0_20px_rgba(0,255,0,0.15)] transition-all duration-300">
          <div className="font-mono">
            <div className="text-terminal-yellow text-[10px] sm:text-xs mb-3 flex items-center gap-2 break-words">
              <span className="text-terminal-green animate-pulse flex-shrink-0">●</span>
              <span>[SUCCESS] Achievement Logged - {new Date().toISOString().split('T')[0]}</span>
            </div>
            <div className="border-l-2 border-terminal-green/50 pl-3 sm:pl-4 hover:border-terminal-yellow/50 transition-colors">
              <div className="text-terminal-white text-xs sm:text-sm leading-relaxed break-words">
                Led end-to-end data analysis projects converting raw data into meaningful insights, 
                demonstrating strong analytical capabilities and technical expertise in data-driven decision making.
              </div>
            </div>
            <div className="text-terminal-gray text-[10px] sm:text-xs mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-terminal-green whitespace-nowrap">Status: COMPLETED</span>
              <span className="hidden sm:inline">│</span>
              <span className="text-terminal-yellow whitespace-nowrap">Priority: HIGH</span>
              <span className="hidden sm:inline">│</span>
              <span className="text-terminal-green whitespace-nowrap">✓ VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
