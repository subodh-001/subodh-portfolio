export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-terminal-green font-mono">root@subodh-ram:~#</span>
            <span className="text-terminal-white font-mono">cat /etc/certifications.d/*.cert</span>
          </div>
          <div className="h-px bg-terminal-green/30 mb-6" />
        </div>

        <div className="terminal-box p-6 max-w-3xl mx-auto hover:border-terminal-yellow/50 hover:shadow-[0_0_20px_rgba(0,255,0,0.15)] transition-all duration-300">
          <div className="font-mono">
            <div className="text-terminal-yellow text-sm mb-4 flex items-center gap-2">
              <span className="text-terminal-green">[VERIFIED]</span>
              ┌─────────────────────────────────────────────┐
            </div>
            <div className="pl-4 mb-4">
              <div className="text-terminal-green text-base font-bold mb-2 flex items-center gap-2">
                🎓 Data Analytics Certification
              </div>
              <div className="text-terminal-white text-sm mb-1">
                <span className="text-terminal-yellow">Issuer:</span> ExcelR
              </div>
              <div className="text-terminal-gray text-xs">
                <span className="text-terminal-yellow">Period:</span> Aug 2023 – Jan 2024
              </div>
              <div className="text-terminal-green text-xs mt-2">
                <span className="text-terminal-yellow">Status:</span> ✓ ACTIVE
              </div>
            </div>
            <div className="text-terminal-yellow text-sm flex items-center gap-2">
              <span className="text-terminal-green">[VERIFIED]</span>
              └─────────────────────────────────────────────┘
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
