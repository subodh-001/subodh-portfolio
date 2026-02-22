export default function Certifications() {
  return (
    <section id="certifications" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-1 sm:gap-2 mb-4 text-[10px] sm:text-xs overflow-x-auto">
            <span className="text-terminal-green font-mono whitespace-nowrap">root@subodh-ram:~#</span>
            <span className="text-terminal-white font-mono whitespace-nowrap">cat /etc/certifications.d/*.cert</span>
          </div>
          <div className="h-px bg-terminal-green/30 mb-4 sm:mb-6" />
        </div>

        <div className="terminal-box p-3 sm:p-6 max-w-3xl mx-auto hover:border-terminal-yellow/50 hover:shadow-[0_0_20px_rgba(0,255,0,0.15)] transition-all duration-300">
          <div className="font-mono">
            <div className="text-terminal-yellow text-xs sm:text-sm mb-4 flex items-start gap-2 overflow-x-auto">
              <span className="text-terminal-green whitespace-nowrap">[VERIFIED]</span>
              <span className="whitespace-nowrap">┌─────────────────────────────────────────────┐</span>
            </div>
            <div className="pl-3 sm:pl-4 mb-4">
              <div className="text-terminal-green text-sm sm:text-base font-bold mb-2 flex items-center gap-2 break-words">
                🎓 Data Analytics Certification
              </div>
              <div className="text-terminal-white text-xs sm:text-sm mb-1">
                <span className="text-terminal-yellow">Issuer:</span> ExcelR
              </div>
              <div className="text-terminal-gray text-[10px] sm:text-xs">
                <span className="text-terminal-yellow">Period:</span> Aug 2023 – Jan 2024
              </div>
              <div className="text-terminal-green text-[10px] sm:text-xs mt-2">
                <span className="text-terminal-yellow">Status:</span> ✓ ACTIVE
              </div>
            </div>
            <div className="text-terminal-yellow text-xs sm:text-sm flex items-start gap-2 overflow-x-auto">
              <span className="text-terminal-green whitespace-nowrap">[VERIFIED]</span>
              <span className="whitespace-nowrap">└─────────────────────────────────────────────┘</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
