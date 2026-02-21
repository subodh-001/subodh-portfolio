import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Smart Parking System',
    name: 'Smart_Parking_System',
    year: '2025',
    pid: 'PID_1024',
    status: 'Production',
    uptime: '99.9%',
    technologies: ['Java', 'Spring Boot', 'JSP', 'Oracle DB', 'Firebase', 'REST API'],
    features: [
      'Real-time parking discovery and availability tracking',
      'Dynamic pricing engine with demand-based algorithms',
      'OpenStreetMap integration for GPS navigation',
      'QR-based secure access control and payment gateway',
      'Admin dashboard with analytics and reporting',
      'Mobile-responsive design with PWA support'
    ],
    metrics: {
      users: '5000+',
      response: '<200ms',
      availability: '99.9%'
    }
  },
  {
    title: 'Property Price Prediction',
    name: 'Property_Price_Prediction',
    year: '2025',
    pid: 'PID_2048',
    status: 'Production',
    uptime: '99.7%',
    technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'TensorFlow', 'ML'],
    features: [
      'AI-based property price prediction using ML models',
      'Interactive dashboards with real-time analytics',
      'Market trend analysis with historical data',
      'Comprehensive data visualization with charts',
      'RESTful API for third-party integrations',
      'Automated data scraping and processing pipeline'
    ],
    metrics: {
      accuracy: '94%',
      predictions: '10K+',
      datasets: '50K+'
    }
  },
  {
    title: 'SmartTech Connect',
    name: 'SmartTech_Connect',
    year: '2025',
    pid: 'PID_4096',
    status: 'Production',
    uptime: '99.8%',
    technologies: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Socket.io', 'WebRTC'],
    features: [
      'Technician booking and scheduling system',
      'Real-time chat with WebSocket support',
      'Community forum with threaded discussions',
      'AI-powered service recommendations',
      'Rating and review system with sentiment analysis',
      'Push notifications and email alerts'
    ],
    metrics: {
      technicians: '500+',
      bookings: '2K+',
      satisfaction: '4.8/5'
    }
  },
  {
    title: 'Network Monitor Dashboard',
    name: 'Network_Monitor_Dashboard',
    year: '2024',
    pid: 'PID_8192',
    status: 'Active',
    uptime: '99.5%',
    technologies: ['Python', 'Flask', 'React', 'InfluxDB', 'Grafana', 'SNMP'],
    features: [
      'Real-time network traffic monitoring',
      'Bandwidth usage analytics and alerts',
      'Device discovery and topology mapping',
      'Performance metrics with historical trends',
      'Automated incident detection and reporting',
      'Multi-protocol support (SNMP, NetFlow, sFlow)'
    ],
    metrics: {
      devices: '100+',
      uptime: '99.5%',
      alerts: '24/7'
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-terminal-green font-mono">root@subodh-ram:~#</span>
            <span className="text-terminal-white font-mono">ps aux | grep "project" | grep -v grep</span>
          </div>
          <div className="h-px bg-terminal-green/30 mb-6" />
        </div>

        <div className="terminal-box p-6 mb-6">
          <div className="font-mono text-terminal-white text-xs mb-4 overflow-x-auto">
            <div className="grid grid-cols-[200px_80px_100px_80px_80px] gap-4 pb-2 border-b border-terminal-green/30">
              <div className="text-terminal-yellow">Image Name</div>
              <div className="text-terminal-yellow">PID</div>
              <div className="text-terminal-yellow">Status</div>
              <div className="text-terminal-yellow">Uptime</div>
              <div className="text-terminal-yellow">Year</div>
            </div>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="terminal-box p-4 hover:border-terminal-yellow/50 transition-all duration-300 group"
              >
                <div className="font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-[200px_80px_100px_80px_80px] gap-2 sm:gap-4 mb-4 text-xs">
                    <div className="text-terminal-green group-hover:text-terminal-yellow transition-colors">
                      {project.name}<span className="text-terminal-gray">.exe</span>
                    </div>
                    <div className="text-terminal-white">{project.pid}</div>
                    <div className="text-terminal-green flex items-center gap-1">
                      <span className="animate-pulse">●</span> {project.status}
                    </div>
                    <div className="text-terminal-yellow">{project.uptime}</div>
                    <div className="text-terminal-gray">{project.year}</div>
                  </div>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="mb-3 flex flex-wrap gap-3 text-xs">
                      {Object.entries(project.metrics).map(([key, value], i) => (
                        <div key={i} className="bg-terminal-green/10 border border-terminal-green/30 px-3 py-1 rounded">
                          <span className="text-terminal-yellow">{key}:</span>{' '}
                          <span className="text-terminal-white">{value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mb-3">
                    <div className="text-terminal-yellow text-xs mb-2">Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="font-mono text-xs bg-transparent border border-terminal-green/30 text-terminal-white hover:border-terminal-green hover:bg-terminal-green/10 transition-all"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-terminal-yellow text-xs mb-2">Features:</div>
                    <div className="space-y-1">
                      {project.features.map((feature, i) => (
                        <div key={i} className="text-terminal-white text-xs flex items-start gap-2">
                          <span className="text-terminal-green">•</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
