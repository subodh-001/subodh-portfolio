const experiences = [
  {
    company: 'Aivariant',
    role: 'Data Analyst Intern',
    period: 'Aug 2023 – Jan 2024',
    duration: '6 months',
    location: 'Remote',
    type: 'Internship',
    responsibilities: [
      'Analyzed large datasets (100K+ records) to identify trends and patterns',
      'Created 15+ interactive dashboards using Power BI and Tableau',
      'Collaborated with cross-functional teams to deliver actionable insights',
      'Automated data processing workflows using Python, reducing processing time by 40%',
      'Conducted A/B testing and statistical analysis for business decisions',
      'Presented findings to stakeholders through comprehensive reports'
    ],
    achievements: [
      'Improved data processing efficiency by 40%',
      'Delivered 15+ analytical dashboards',
      'Recognized for outstanding performance'
    ]
  },
  {
    company: 'Freelance',
    role: 'IT Support Specialist',
    period: '2022 – Present',
    duration: '2+ years',
    location: 'Remote',
    type: 'Freelance',
    responsibilities: [
      'Provided technical support for network configuration and troubleshooting',
      'Configured and maintained routers, switches, and firewalls',
      'Implemented security measures including VPN, SSL/TLS, and access controls',
      'Performed system diagnostics and resolved hardware/software issues',
      'Maintained comprehensive system documentation and user guides',
      'Conducted network performance monitoring and optimization'
    ],
    achievements: [
      '50+ successful network deployments',
      '99.5% client satisfaction rate',
      'Zero security breaches'
    ]
  },
  {
    company: 'Academic Projects',
    role: 'Full Stack Developer',
    period: '2023 – Present',
    duration: '1+ year',
    location: 'NMIMS University',
    type: 'Academic',
    responsibilities: [
      'Developed 4+ full-stack applications using MERN stack',
      'Implemented RESTful APIs and microservices architecture',
      'Integrated third-party services (Firebase, Payment Gateways)',
      'Conducted code reviews and maintained version control with Git',
      'Optimized application performance and database queries',
      'Deployed applications on cloud platforms'
    ],
    achievements: [
      '4+ production-ready applications',
      '10K+ lines of code written',
      'Best project award recipient'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-terminal-green font-mono">root@subodh-ram:~#</span>
            <span className="text-terminal-white font-mono">netstat -tupln | grep ESTABLISHED</span>
          </div>
          <div className="h-px bg-terminal-green/30 mb-6" />
        </div>

        <div className="terminal-box p-6">
          <div className="font-mono text-terminal-white text-xs mb-4">
            <div className="mb-2 text-terminal-yellow flex items-center gap-2">
              <span className="text-terminal-green">[ACTIVE]</span> Professional Connections
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="terminal-box p-4 hover:border-terminal-yellow/50 hover:shadow-[0_0_15px_rgba(0,255,0,0.1)] transition-all duration-300"
              >
                <div className="font-mono">
                  <div className="mb-3">
                    <div className="text-terminal-green text-sm font-bold mb-1 flex items-center gap-2">
                      <span className="text-terminal-yellow">►</span>
                      {exp.company} - {exp.role}
                    </div>
                    <div className="text-terminal-gray text-xs flex flex-wrap gap-3">
                      <span>⏱ {exp.period}</span>
                      <span>│</span>
                      <span>⌛ {exp.duration}</span>
                      <span>│</span>
                      <span>📍 {exp.location}</span>
                      <span>│</span>
                      <span className="text-terminal-yellow">{exp.type}</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-terminal-green/30 pl-4 hover:border-terminal-yellow/50 transition-colors mb-3">
                    <div className="text-terminal-yellow text-xs mb-2">[RESPONSIBILITIES]</div>
                    <div className="space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <div key={i} className="text-terminal-white text-xs flex items-start gap-2">
                          <span className="text-terminal-green">✓</span>
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {exp.achievements && (
                    <div className="border-l-2 border-terminal-yellow/30 pl-4">
                      <div className="text-terminal-yellow text-xs mb-2">[KEY ACHIEVEMENTS]</div>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="bg-terminal-yellow/10 border border-terminal-yellow/30 px-2 py-1 rounded text-xs text-terminal-white">
                            🏆 {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
