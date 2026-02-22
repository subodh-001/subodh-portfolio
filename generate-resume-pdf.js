#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Paths
const htmlPath = path.join(__dirname, 'build-template/src/frontend/public/assets/resume.html');
const pdfPath = path.join(__dirname, 'build-template/src/frontend/public/assets/resume.pdf');

console.log('📄 Generating terminal-style resume PDF...');

// Check if HTML file exists
if (!fs.existsSync(htmlPath)) {
    console.error('❌ Resume HTML file not found!');
    process.exit(1);
}

// Create a terminal-style PDF with CMD formatting
const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R 7 0 R] /Count 2 >>
endobj
3 0 obj
<<
/Type /Page
/Parent 2 0 R
/Resources << /Font << /F1 4 0 R /F2 5 0 R >> >>
/MediaBox [0 0 612 792]
/Contents 6 0 R
>>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Courier-Bold >>
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>
endobj
6 0 obj
<< /Length 4200 >>
stream
BT
/F2 8 Tf
50 770 Td
(================================================================================) Tj
0 -12 Td
(  C:\\Users\\SubodhRam> type resume.txt) Tj
0 -12 Td
(================================================================================) Tj

0 -25 Td
/F1 20 Tf
(SUBODH RAM) Tj
0 -20 Td
/F2 10 Tf
(Master of Computer Applications Student) Tj
0 -12 Td
(Full Stack Developer & Network Engineer) Tj

0 -30 Td
/F1 12 Tf
(> CONTACT INFORMATION) Tj
0 -15 Td
/F2 9 Tf
(C:\\Users\\SubodhRam> ipconfig /all) Tj
0 -15 Td
(  Email:    subodhram3350@gmail.com) Tj
0 -12 Td
(  Phone:    +91 9076314255) Tj
0 -12 Td
(  LinkedIn: linkedin.com/in/subodhram) Tj
0 -12 Td
(  GitHub:   github.com/subodh-001) Tj
0 -12 Td
(  DOB:      28 April 2003) Tj
0 -12 Td
(  Status:   [ONLINE]) Tj

0 -25 Td
/F1 12 Tf
(> PROFESSIONAL SUMMARY) Tj
0 -15 Td
/F2 9 Tf
(C:\\Users\\SubodhRam> cat summary.log) Tj
0 -15 Td
(  Master of Computer Applications student specializing in Networking & IT) Tj
0 -12 Td
(  Infrastructure. Experienced in data analysis, system security, and full-stack) Tj
0 -12 Td
(  development with strong analytical and problem-solving capabilities.) Tj

0 -25 Td
/F1 12 Tf
(> EDUCATION) Tj
0 -15 Td
/F2 9 Tf
(C:\\Users\\SubodhRam> dir C:\\Education\\) Tj
0 -15 Td
/F1 10 Tf
(  Master of Computer Applications \(MCA\)) Tj
0 -12 Td
/F2 9 Tf
(  MPSTME, NMIMS University | 2024-2026 | CGPA: 7.38/10) Tj
0 -12 Td
(  Specialization: Networking & IT Infrastructure) Tj

0 -15 Td
/F1 10 Tf
(  Bachelor of Science in Information Technology) Tj
0 -12 Td
/F2 9 Tf
(  Tolani College of Commerce | 2020-2023 | CGPA: 8.28/10) Tj

0 -15 Td
/F1 10 Tf
(  Higher Secondary Certificate \(HSC\)) Tj
0 -12 Td
/F2 9 Tf
(  Chandrabhan Sharma College | 2018-2020 | 74.77%) Tj

0 -15 Td
/F1 10 Tf
(  Secondary School Certificate \(SSC\)) Tj
0 -12 Td
/F2 9 Tf
(  S.A Public School | 2018 | 66.20%) Tj

0 -25 Td
/F1 12 Tf
(> TECHNICAL SKILLS) Tj
0 -15 Td
/F2 9 Tf
(C:\\Users\\SubodhRam> systeminfo | findstr /C:"Skills") Tj
0 -15 Td
(  Programming:  Java, Python, JavaScript, TypeScript, C++) Tj
0 -12 Td
(  Web Dev:      React, Node.js, Express.js, Next.js, Tailwind CSS) Tj
0 -12 Td
(  Databases:    MongoDB, MySQL, PostgreSQL, Firebase, Redis) Tj
0 -12 Td
(  Networking:   TCP/IP, DNS, DHCP, VPN, Firewall, Nmap, Wireshark) Tj
0 -12 Td
(  Tools:        Power BI, Tableau, Git, Docker, Linux Administration) Tj

0 -25 Td
/F1 12 Tf
(> PROFESSIONAL EXPERIENCE) Tj
0 -15 Td
/F2 9 Tf
(C:\\Users\\SubodhRam> tasklist | findstr "experience") Tj

0 -15 Td
/F1 10 Tf
(  Data Analyst Intern - Aivariant) Tj
0 -12 Td
/F2 9 Tf
(  Aug 2023 - Jan 2024 | Remote) Tj
0 -12 Td
(  * Analyzed large datasets \(100K+ records\) to identify trends) Tj
0 -12 Td
(  * Created 15+ interactive dashboards using Power BI and Tableau) Tj
0 -12 Td
(  * Automated data processing workflows, reducing time by 40%) Tj
0 -12 Td
(  * Conducted A/B testing and statistical analysis) Tj

0 -15 Td
/F1 10 Tf
(  IT Support Specialist - Freelance) Tj
0 -12 Td
/F2 9 Tf
(  2022 - Present | Remote) Tj
0 -12 Td
(  * Provided technical support for network configuration) Tj
0 -12 Td
(  * Configured routers, switches, and firewalls) Tj
0 -12 Td
(  * Implemented security measures \(VPN, SSL/TLS\)) Tj
0 -12 Td
(  * Performed system diagnostics and troubleshooting) Tj

0 -15 Td
/F1 10 Tf
(  Full Stack Developer - Academic Projects) Tj
0 -12 Td
/F2 9 Tf
(  2023 - Present | NMIMS University) Tj
0 -12 Td
(  * Developed 4+ full-stack applications using MERN stack) Tj
0 -12 Td
(  * Implemented RESTful APIs and microservices) Tj
0 -12 Td
(  * Integrated third-party services and payment gateways) Tj

ET
endstream
endobj
7 0 obj
<<
/Type /Page
/Parent 2 0 R
/Resources << /Font << /F1 4 0 R /F2 5 0 R >> >>
/MediaBox [0 0 612 792]
/Contents 8 0 R
>>
endobj
8 0 obj
<< /Length 2800 >>
stream
BT
/F1 12 Tf
50 770 Td
(> FEATURED PROJECTS) Tj
0 -15 Td
/F2 9 Tf
(C:\\Users\\SubodhRam> dir C:\\Projects\\ /s) Tj

0 -15 Td
/F1 10 Tf
(  Smart Parking System \(2025\)) Tj
0 -12 Td
/F2 9 Tf
(  Tech: Java, Spring Boot, JSP, Oracle DB, Firebase, REST API) Tj
0 -12 Td
(  * Real-time parking discovery and availability tracking) Tj
0 -12 Td
(  * Dynamic pricing engine with demand-based algorithms) Tj
0 -12 Td
(  * OpenStreetMap integration for GPS navigation) Tj
0 -12 Td
(  * QR-based secure access control and payment gateway) Tj

0 -15 Td
/F1 10 Tf
(  Property Price Prediction Platform \(2025\)) Tj
0 -12 Td
/F2 9 Tf
(  Tech: React, Node.js, Python, MongoDB, TensorFlow, ML) Tj
0 -12 Td
(  * AI-based price prediction using ML models \(94% accuracy\)) Tj
0 -12 Td
(  * Interactive dashboards with real-time analytics) Tj
0 -12 Td
(  * Market trend analysis with historical data) Tj
0 -12 Td
(  * RESTful API for third-party integrations) Tj

0 -15 Td
/F1 10 Tf
(  SmartTech Connect \(2025\)) Tj
0 -12 Td
/F2 9 Tf
(  Tech: React, Node.js, MongoDB, Firebase, Socket.io, WebRTC) Tj
0 -12 Td
(  * Technician booking and scheduling system) Tj
0 -12 Td
(  * Real-time chat with WebSocket support) Tj
0 -12 Td
(  * Community forum with threaded discussions) Tj
0 -12 Td
(  * AI-powered service recommendations) Tj

0 -15 Td
/F1 10 Tf
(  Network Monitor Dashboard \(2024\)) Tj
0 -12 Td
/F2 9 Tf
(  Tech: Python, Flask, React, InfluxDB, Grafana, SNMP) Tj
0 -12 Td
(  * Real-time network traffic monitoring) Tj
0 -12 Td
(  * Bandwidth usage analytics and alerts) Tj
0 -12 Td
(  * Device discovery and topology mapping) Tj
0 -12 Td
(  * Multi-protocol support \(SNMP, NetFlow, sFlow\)) Tj

0 -25 Td
/F1 12 Tf
(> CERTIFICATIONS) Tj
0 -15 Td
/F2 9 Tf
(C:\\Users\\SubodhRam> certutil -verify certificates.dat) Tj
0 -15 Td
/F1 10 Tf
(  Data Analytics Certification) Tj
0 -12 Td
/F2 9 Tf
(  ExcelR | Aug 2023 - Jan 2024) Tj
0 -12 Td
(  Status: [VERIFIED]) Tj

0 -30 Td
/F2 8 Tf
(================================================================================) Tj
0 -12 Td
(  C:\\Users\\SubodhRam> echo "End of Resume") Tj
0 -12 Td
(  System Status: [READY]) Tj
0 -12 Td
(================================================================================) Tj

0 -20 Td
/F2 7 Tf
(  For interactive terminal-style resume, visit:) Tj
0 -10 Td
(  https://subodh-ram-portfolio.vercel.app/assets/resume.html) Tj

ET
endstream
endobj
xref
0 9
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000122 00000 n
0000000269 00000 n
0000000349 00000 n
0000000424 00000 n
0000004674 00000 n
0000004821 00000 n
trailer
<< /Size 9 /Root 1 0 R >>
startxref
7671
%%EOF`;

// Write the PDF file
fs.writeFileSync(pdfPath, pdfContent);

console.log('✅ Terminal-style resume PDF generated successfully!');
console.log(`📍 Location: ${pdfPath}`);
console.log('💡 Tip: For best interactive experience, view the HTML version');
console.log('🎨 Design: CMD/Terminal style with Courier font');

