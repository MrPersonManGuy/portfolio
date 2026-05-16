import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

export const metadata: Metadata = {
  title: 'Thomas Farrell',
  description: 'Portfolio and projects',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <div style={{ background: '#fff', borderBottom: '1px solid #e0e0e0', padding: '14px 20px', display: 'flex', alignItems: 'baseline', gap: '10px' }}>
          <span style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '-0.02em' }}>Thomas Farrell</span>
          <span style={{ fontSize: '0.75rem', color: '#aaa' }}>Software Engineer &amp; Data Scientist</span>
        </div>

        {/* 3-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '170px 1fr 170px', gap: '8px', padding: '8px', maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ border: '2px solid #a8d8ea', borderRadius: '8px', padding: '4px' }}>
            <Sidebar />
          </div>
          <main style={{ border: '2px solid #f9c784', borderRadius: '8px', padding: '8px' }}>{children}</main>
          <div style={{ border: '2px solid #c3b1e1', borderRadius: '8px', padding: '4px' }}>
            <RightPanel />
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', padding: '0 8px 8px', maxWidth: '1060px', margin: '0 auto' }}>
          {/* Links & contact */}
          <div className="retro-box">
            <div className="retro-box-title retro-box-title-blue">Links &amp; Contact</div>
            <div style={{ padding: '6px 10px 10px', fontSize: '0.72rem', lineHeight: 2 }}>
              <div><a href="https://github.com/MrPersonManGuy" target="_blank" rel="noopener noreferrer">GitHub</a></div>
              <div><a href="https://www.linkedin.com/in/thomasfarrell2003/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
              <div><a href="mailto:tfarrellworks@gmail.com">tfarrellworks@gmail.com</a></div>
            </div>
          </div>

          {/* Mission statement */}
          <div className="retro-box">
            <div className="retro-box-title retro-box-title-orange">Why The Site?</div>
            <div style={{ padding: '6px 10px 10px', fontSize: '0.72rem', lineHeight: 1.7, color: '#444' }}>
              I just wanted a place to share stuff that didn't fit on one page. Everything's a work in progress.
            </div>
          </div>

          {/* Disclaimer */}
          <div className="retro-box">
            <div className="retro-box-title retro-box-title-pink">Disclaimer</div>
            <div style={{ padding: '6px 10px 10px', fontSize: '0.68rem', lineHeight: 1.7, color: '#666' }}>
              Opinions are my own. Work shown may be in progress.
              Nothing here constitutes professional advice.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ borderTop: '1px solid #e0e0e0', padding: '10px 20px', fontSize: '0.7rem', color: '#bbb', textAlign: 'center', marginTop: '4px' }}>
          © {new Date().getFullYear()} Thomas Farrell
        </div>
      </body>
    </html>
  )
}
