const technicalSkills = [
  {
    category: 'Programming',
    command: 'ls -la /usr/bin/ | grep -E "python|java"',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++']
  },
  {
    category: 'Web Development',
    command: 'npm list -g --depth=0',
    skills: ['React', 'Node.js', 'Express.js', 'Next.js', 'Vite', 'Tailwind CSS']
  },
  {
    category: 'Databases',
    command: 'systemctl status mongodb mysql postgresql',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Redis']
  },
  {
    category: 'Data Analytics',
    command: 'dpkg -l | grep analytics',
    skills: ['Power BI', 'Tableau', 'Excel', 'Data Visualization', 'Statistical Analysis']
  },
  {
    category: 'Networking Protocols',
    command: 'cat /etc/protocols',
    skills: ['TCP/IP', 'UDP', 'HTTP/HTTPS', 'DNS', 'DHCP', 'FTP', 'SSH', 'SMTP', 'SNMP']
  },
  {
    category: 'Network Configuration',
    command: 'ifconfig -a && netstat -rn',
    skills: ['Subnetting', 'VLAN Configuration', 'Routing & Switching', 'NAT', 'Port Forwarding']
  },
  {
    category: 'Network Security',
    command: 'iptables -L -n -v',
    skills: ['Firewall Configuration', 'VPN Setup', 'SSL/TLS', 'Network Segmentation', 'IDS/IPS']
  },
  {
    category: 'Network Tools',
    command: 'nmap --version && wireshark --version',
    skills: ['Nmap', 'Wireshark', 'Netcat', 'tcpdump', 'Traceroute', 'Ping', 'Netstat']
  },
  {
    category: 'IT Infrastructure',
    command: 'systemctl list-units --type=service',
    skills: ['System Administration', 'Server Management', 'Backup & Recovery', 'Virtualization']
  },
  {
    category: 'Security & Access',
    command: 'cat /etc/passwd | grep user',
    skills: ['User Access Management', 'Active Directory', 'Authentication', 'Authorization', 'Encryption']
  },
  {
    category: 'Cloud & DevOps',
    command: 'docker ps && kubectl get pods',
    skills: ['Docker', 'Git', 'CI/CD', 'Linux Administration', 'Shell Scripting']
  }
];

const softSkills = [
  'Problem-Solving',
  'Team Collaboration',
  'Effective Communication',
  'Time Management'
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-1 sm:gap-2 mb-4 text-[10px] sm:text-xs overflow-x-auto">
            <span className="text-terminal-green font-mono whitespace-nowrap">root@subodh-ram:~#</span>
            <span className="text-terminal-white font-mono whitespace-nowrap">cat /etc/skills.conf</span>
          </div>
          <div className="h-px bg-terminal-green/30 mb-4 sm:mb-6" />
        </div>

        {/* Technical Skills */}
        <div className="mb-8 sm:mb-12">
          <div className="terminal-box p-3 sm:p-6">
            <div className="font-mono text-terminal-yellow text-[10px] sm:text-sm mb-4 sm:mb-6 flex items-center gap-2">
              <span className="text-terminal-green">[SYSTEM]</span> Technical Skills Configuration
            </div>

            <div className="space-y-4 sm:space-y-6">
              {technicalSkills.map((category, index) => (
                <div key={index} className="border-l-2 border-terminal-green/30 pl-3 sm:pl-4 hover:border-terminal-yellow/50 transition-colors">
                  <div className="font-mono mb-2 sm:mb-3">
                    <div className="text-terminal-gray text-[10px] sm:text-xs mb-1 overflow-x-auto">
                      <span className="whitespace-nowrap">$ {category.command}</span>
                    </div>
                    <div className="text-terminal-green text-xs sm:text-sm font-bold mb-2">
                      [{category.category.toUpperCase()}]
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] sm:text-xs px-2 py-1 sm:px-3 bg-terminal-green/10 text-terminal-white border border-terminal-green/30 hover:border-terminal-green hover:bg-terminal-green/20 hover:shadow-[0_0_10px_rgba(0,255,0,0.2)] transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <div className="mb-4">
            <div className="flex items-center gap-1 sm:gap-2 mb-4 text-[10px] sm:text-xs overflow-x-auto">
              <span className="text-terminal-green font-mono whitespace-nowrap">root@subodh-ram:~#</span>
              <span className="text-terminal-white font-mono whitespace-nowrap">cat /proc/soft_skills</span>
            </div>
          </div>

          <div className="terminal-box p-3 sm:p-6">
            <div className="font-mono">
              {softSkills.map((skill, index) => (
                <div key={index} className="text-terminal-white text-xs sm:text-sm mb-2 flex items-center gap-2 hover:text-terminal-yellow transition-colors">
                  <span className="text-terminal-green flex-shrink-0">✓</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
