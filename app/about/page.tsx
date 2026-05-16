export default function About() {
  return (
    <div>
      {/* Bio section */}
      <div className="retro-box">
        <div className="retro-box-title retro-box-title-orange">About</div>
        <div style={{ padding: '12px 14px', fontSize: '0.85rem', lineHeight: 1.7 }}>
          <p style={{ marginBottom: '10px' }}>
            I&apos;m graduating from the University of Arkansas with a B.S. in Computer Science and a minor in Mathematics. I design and deploy backend systems, cloud infrastructure, and real-time data pipelines that solve complex engineering challenges.
          </p>
          <p style={{ marginBottom: '10px' }}>
            My experience spans environmental monitoring systems (real-time sensor data at scale), enterprise automation (PowerShell-based data extraction pipelines), signal processing research (Voyager 2 heliospheric turbulence analysis), and VR applications (behavioral data capture for neurodevelopmental assessment). I&apos;m passionate about distributed systems, data engineering, and leveraging automation for tangible real-world impact.
          </p>
          <p>
            Actively seeking full-time Software Engineer and Data Science roles. Based in Fayetteville, AR.
          </p>
        </div>
      </div>

      {/* Experience */}
      <div className="retro-box" style={{ marginTop: '8px' }}>
        <div className="retro-box-title retro-box-title-blue">Recent Work</div>
        <div style={{ padding: '12px 14px', fontSize: '0.8rem', lineHeight: 1.6 }}>
          <div style={{ marginBottom: '12px' }}>
            <strong>Backend Developer — CGI Capstone</strong>
            <div style={{ color: '#666', fontSize: '0.75rem' }}>Aug 2025 – May 2026</div>
            <p style={{ marginTop: '4px', color: '#555' }}>
              Real-time environmental monitoring system for data center. MariaDB, Node.js/Express, AWS EC2, Docker, MQTT, LoRa 915MHz hardware integration.
            </p>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <strong>Software Engineer Intern — Fort Smith Public Schools</strong>
            <div style={{ color: '#666', fontSize: '0.75rem' }}>Jun 2025 – Aug 2025</div>
            <p style={{ marginTop: '4px', color: '#555' }}>
              Modernized 15+ PowerShell automation scripts for Cognos data extraction &amp; SFTP delivery. Centralized logging module, structured error handling, automated alerts.
            </p>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <strong>Research Intern — RIPP Program (UAH)</strong>
            <div style={{ color: '#666', fontSize: '0.75rem' }}>May 2024 – Jul 2024</div>
            <p style={{ marginTop: '4px', color: '#555' }}>
              MATLAB signal processing pipeline (Basis Pursuit Denoise) for Voyager 2 solar wind data reconstruction. Part of NSF EPSCoR-funded program.
            </p>
          </div>
          <div>
            <strong>Research Assistant — University of Arkansas</strong>
            <div style={{ color: '#666', fontSize: '0.75rem' }}>Aug 2022 – May 2023</div>
            <p style={{ marginTop: '4px', color: '#555' }}>
              Meta SDK–Unity integration for VR-based autism screening tool. Real-time behavioral data capture from headset sensors.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="retro-box" style={{ marginTop: '8px' }}>
        <div className="retro-box-title retro-box-title-pink">Skills</div>
        <div style={{ padding: '12px 14px', fontSize: '0.8rem', lineHeight: 1.7 }}>
          <div style={{ marginBottom: '8px' }}>
            <strong>Languages:</strong> Python, Java, C/C++, JavaScript, TypeScript, SQL, PowerShell, MATLAB, Bash
          </div>
          <div style={{ marginBottom: '8px' }}>
            <strong>Frameworks & Tools:</strong> React, Node.js, Express, REST APIs, Docker, Git
          </div>
          <div style={{ marginBottom: '8px' }}>
            <strong>Cloud & Databases:</strong> AWS (EC2, S3), MariaDB, PostgreSQL, MQTT
          </div>
          <div>
            <strong>Data & Analysis:</strong> pandas, NumPy, matplotlib, MATLAB signal processing
          </div>
        </div>
      </div>

      {/* Education & orgs */}
      <div className="retro-box" style={{ marginTop: '8px' }}>
        <div className="retro-box-title retro-box-title-blue">Education & Organizations</div>
        <div style={{ padding: '12px 14px', fontSize: '0.8rem', lineHeight: 1.8 }}>
          <div style={{ marginBottom: '10px' }}>
            <strong>B.S. Computer Science</strong><br/>
            <span style={{ color: '#666' }}>University of Arkansas | Minor in Mathematics | Aug 2022 – May 2026</span>
          </div>
          <div style={{ marginBottom: '6px' }}>
            <strong>Professional Memberships:</strong> ACM (2022–present), SIAM (2024–present)
          </div>
          <div>
            <strong>Eagle Scout</strong> — Scouts of America (2013–2022)
          </div>
        </div>
      </div>
    </div>
  )
}
