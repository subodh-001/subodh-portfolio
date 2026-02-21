const educationData = [
  {
    institution: 'MPSTME, NMIMS University',
    degree: 'Master of Computer Applications (MCA)',
    period: '2024–2026',
    grade: 'CGPA: 7.38/10'
  },
  {
    institution: 'Tolani College of Commerce',
    degree: 'Bachelor of Science in Information Technology (BSc IT)',
    period: '2020–2023',
    grade: 'CGPA: 8.28/10'
  },
  {
    institution: 'Chandrabhan Sharma College',
    degree: 'Higher Secondary Certificate (HSC)',
    period: '2018–2020',
    grade: '74.77%'
  },
  {
    institution: 'S.A Public School',
    degree: 'Secondary School Certificate (SSC)',
    period: '2018',
    grade: '66.20%'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-terminal-green font-mono">root@subodh-ram:~#</span>
            <span className="text-terminal-white font-mono">ls -lah ~/Education/</span>
          </div>
          <div className="h-px bg-terminal-green/30 mb-6" />
        </div>

        <div className="terminal-box p-6 mb-6">
          <div className="font-mono text-terminal-white text-sm mb-4">
            <div className="mb-2 text-terminal-yellow">total {educationData.length} items</div>
            <div className="mb-4 text-terminal-gray">drwxr-xr-x 2 subodh-ram subodh-ram 4096 Feb 22 2026 .</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="terminal-box p-4 hover:border-terminal-yellow/50 hover:shadow-[0_0_15px_rgba(0,255,0,0.1)] transition-all duration-300 group"
              >
                <div className="font-mono">
                  <div className="text-terminal-green text-sm mb-2 group-hover:text-terminal-yellow transition-colors">
                    ┌─ {edu.institution}
                  </div>
                  <div className="text-terminal-white text-sm mb-1 pl-3">
                    │ {edu.degree}
                  </div>
                  <div className="text-terminal-gray text-xs pl-3 mb-1">
                    │ 📅 {edu.period}
                  </div>
                  <div className="text-terminal-yellow text-sm pl-3">
                    └─ 🎯 {edu.grade}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="font-mono text-terminal-gray text-sm mt-4">
            <div className="flex items-center gap-2">
              <span className="text-terminal-green">[OK]</span>
              {educationData.length} File(s) loaded successfully
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
