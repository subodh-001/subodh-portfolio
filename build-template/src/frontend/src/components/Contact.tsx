import { Mail, Phone, Github } from 'lucide-react';
import { SiLinkedin } from 'react-icons/si';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '9076314255',
    href: 'tel:9076314255',
    protocol: 'TEL'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'subodhram3350@gmail.com',
    href: 'mailto:subodhram3350@gmail.com',
    protocol: 'SMTP'
  },
  {
    icon: SiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/subodhram',
    href: 'https://linkedin.com/in/subodhram',
    protocol: 'HTTPS'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/subodh-001',
    href: 'https://github.com/subodh-001',
    protocol: 'HTTPS'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-1 sm:gap-2 mb-4 text-[10px] sm:text-xs overflow-x-auto">
            <span className="text-terminal-green font-mono whitespace-nowrap">root@subodh-ram:~#</span>
            <span className="text-terminal-white font-mono whitespace-nowrap">nmap -sV localhost --open</span>
          </div>
          <div className="h-px bg-terminal-green/30 mb-4 sm:mb-6" />
        </div>

        <div className="terminal-box p-3 sm:p-6 mb-4 sm:mb-6">
          <div className="font-mono text-terminal-white text-xs sm:text-sm mb-4 sm:mb-6">
            <div className="text-terminal-yellow mb-2 flex items-center gap-2">
              <span className="text-terminal-green animate-pulse">●</span>
              Scanning contact endpoints...
            </div>
            <div className="text-terminal-gray text-[10px] sm:text-xs mb-4 break-words">
              <span className="text-terminal-green">[INFO]</span> Looking for opportunities in Network Engineering, IT Support, and IT Infrastructure roles.
            </div>
          </div>

          <div className="font-mono text-[10px] sm:text-xs mb-4 overflow-x-auto">
            <div className="hidden sm:grid grid-cols-[100px_150px_1fr_80px] gap-4 pb-2 border-b border-terminal-green/30">
              <div className="text-terminal-yellow">Protocol</div>
              <div className="text-terminal-yellow">Service</div>
              <div className="text-terminal-yellow">Address</div>
              <div className="text-terminal-yellow">Status</div>
            </div>
          </div>

          <div className="space-y-3">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block terminal-box p-3 sm:p-4 hover:border-terminal-yellow/50 hover:shadow-[0_0_15px_rgba(0,255,0,0.1)] transition-all duration-300 group"
                >
                  <div className="font-mono text-[10px] sm:text-xs">
                    {/* Mobile: Stacked layout */}
                    <div className="block sm:hidden space-y-1">
                      <div className="text-terminal-green flex items-center gap-2 group-hover:text-terminal-yellow transition-colors">
                        <Icon className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span>{contact.protocol}</span>
                        <span className="text-terminal-green flex items-center gap-1 ml-auto">
                          <span className="animate-pulse">●</span> OPEN
                        </span>
                      </div>
                      <div className="text-terminal-white pl-5">{contact.label}</div>
                      <div className="text-terminal-gray break-all group-hover:text-terminal-white transition-colors pl-5">{contact.value}</div>
                    </div>

                    {/* Desktop: Grid layout */}
                    <div className="hidden sm:grid grid-cols-[100px_150px_1fr_80px] gap-4 items-center">
                      <div className="text-terminal-green flex items-center gap-2 group-hover:text-terminal-yellow transition-colors">
                        <Icon className="h-4 w-4 flex-shrink-0" />
                        <span>{contact.protocol}</span>
                      </div>
                      <div className="text-terminal-white">{contact.label}</div>
                      <div className="text-terminal-gray break-all group-hover:text-terminal-white transition-colors">{contact.value}</div>
                      <div className="text-terminal-green flex items-center gap-1">
                        <span className="animate-pulse">●</span> OPEN
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="font-mono text-terminal-gray text-[10px] sm:text-xs mt-4">
            <div className="flex items-center gap-2 break-words">
              <span className="text-terminal-green flex-shrink-0">[OK]</span>
              <span>Scan complete: 4 services detected, 4 open ports, 0% packet loss</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
