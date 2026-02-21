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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-terminal-green font-mono">root@subodh-ram:~#</span>
            <span className="text-terminal-white font-mono">nmap -sV localhost --open</span>
          </div>
          <div className="h-px bg-terminal-green/30 mb-6" />
        </div>

        <div className="terminal-box p-6 mb-6">
          <div className="font-mono text-terminal-white text-sm mb-6">
            <div className="text-terminal-yellow mb-2 flex items-center gap-2">
              <span className="text-terminal-green animate-pulse">●</span>
              Scanning contact endpoints...
            </div>
            <div className="text-terminal-gray text-xs mb-4">
              <span className="text-terminal-green">[INFO]</span> Looking for opportunities in Network Engineering, IT Support, and IT Infrastructure roles.
            </div>
          </div>

          <div className="font-mono text-xs mb-4 overflow-x-auto">
            <div className="grid grid-cols-[100px_150px_1fr_80px] gap-4 pb-2 border-b border-terminal-green/30 min-w-[600px]">
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
                  className="block terminal-box p-4 hover:border-terminal-yellow/50 hover:shadow-[0_0_15px_rgba(0,255,0,0.1)] transition-all duration-300 group"
                >
                  <div className="font-mono text-xs grid grid-cols-1 sm:grid-cols-[100px_150px_1fr_80px] gap-2 sm:gap-4 items-center min-w-[600px] sm:min-w-0">
                    <div className="text-terminal-green flex items-center gap-2 group-hover:text-terminal-yellow transition-colors">
                      <Icon className="h-4 w-4" />
                      <span>{contact.protocol}</span>
                    </div>
                    <div className="text-terminal-white">{contact.label}</div>
                    <div className="text-terminal-gray break-all group-hover:text-terminal-white transition-colors">{contact.value}</div>
                    <div className="text-terminal-green flex items-center gap-1">
                      <span className="animate-pulse">●</span> OPEN
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="font-mono text-terminal-gray text-xs mt-4">
            <div className="flex items-center gap-2">
              <span className="text-terminal-green">[OK]</span>
              Scan complete: 4 services detected, 4 open ports, 0% packet loss
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
