import { Calendar } from 'lucide-react';

export default function PersonalInfo() {
  return (
    <section id="personal-info" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-1 sm:gap-2 mb-4 text-[10px] sm:text-xs overflow-x-auto">
            <span className="text-terminal-green font-mono whitespace-nowrap">root@subodh-ram:~#</span>
            <span className="text-terminal-white font-mono whitespace-nowrap">cat /proc/userinfo | grep "DOB"</span>
          </div>
          <div className="h-px bg-terminal-green/30 mb-4 sm:mb-6" />
        </div>

        <div className="terminal-box p-3 sm:p-6 hover:border-terminal-yellow/50 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 font-mono">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-terminal-green flex-shrink-0" />
            <span className="text-terminal-yellow text-xs sm:text-base">Date_of_Birth:</span>
            <span className="text-terminal-white text-xs sm:text-base">28/04/2003</span>
            <span className="text-terminal-gray text-[10px] sm:text-xs sm:ml-auto">[VERIFIED]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
