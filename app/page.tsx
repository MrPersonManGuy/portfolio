import FeaturedWork from '@/components/FeaturedWork'
import Changelog from '@/components/Changelog'

export default function Home() {
  return (
    <div>
      {/* Welcome box */}
      <div className="retro-box">
        <div className="retro-box-title retro-box-title-orange">Welcome to my site!</div>
        <div style={{ padding: '12px 14px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
          {/* Photo + social links */}
          <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <img
              src="/IMG_3195.jpeg"
              alt="Profile photo"
              style={{ width: '140px', height: '140px', objectFit: 'cover', objectPosition: 'center 20%', border: '3px inset #aaa', borderRadius: '4px' }}
            />
            <div style={{ fontSize: '0.6rem', color: '#999', fontStyle: 'italic', textAlign: 'center' }}>(replacement image coming soon)</div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <a href="https://github.com/MrPersonManGuy" target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/thomasfarrell2003/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="mailto:tfarrellworks@gmail.com" style={{ color: '#c00' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 7 10-7" />
                </svg>
              </a>
            </div>
          </div>
          {/* Bio + education & interests side by side */}
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '10px' }}>
              I graduated from UArk with a B.S. in Computer Science. I build backend systems, cloud infrastructure, and data pipelines.
            </p>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '12px' }}>
              Recent work: real-time sensor monitoring on AWS, enterprise automation in PowerShell, and signal processing research on spacecraft data.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#888', marginBottom: '4px' }}>Education</div>
                <ul style={{ fontSize: '0.78rem', color: '#444', lineHeight: 1.8, paddingLeft: '14px', margin: 0 }}>
                  <li>B.S. Computer Science, University of Arkansas (2026)</li>
                  <li>Minor in Mathematics</li>
                </ul>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#888', marginBottom: '4px' }}>Interests</div>
                <ul style={{ fontSize: '0.78rem', color: '#444', lineHeight: 1.8, paddingLeft: '14px', margin: 0 }}>
                  <li>Distributed systems</li>
                  <li>Data engineering · ML</li>
                  <li>Space · HCI · Signal processing</li>
                </ul>
              </div>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#666', fontStyle: 'italic', marginTop: '10px' }}>
              <span className="blink">▌</span> last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      <FeaturedWork />
      <Changelog />
    </div>
  )
}
