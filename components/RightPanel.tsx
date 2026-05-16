'use client'

import { useEffect, useState } from 'react'

function Clock() {
  const [time, setTime] = useState('')
  const [tz, setTz] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', {
        timeZone: 'America/Chicago',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }))
      setTz(now.toLocaleDateString('en-US', { timeZone: 'America/Chicago', timeZoneName: 'short' }).split(', ')[1] ?? 'CT')
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return <><span>{time || '—'}</span><span style={{ fontSize: '0.65rem', color: '#888', marginLeft: '4px' }}>{tz}</span></>
}

export default function RightPanel() {
  return (
    <aside>
      {/* Web badges */}
      <div className="retro-box">
        <div className="retro-box-title retro-box-title-green">Buttons</div>
        <div style={{ padding: '4px 8px 8px', display: 'flex', flexWrap: 'wrap', gap: '3px' }}>
          {[
            { label: 'HTML5', bg: '#e44d26', color: 'white' },
            { label: 'CSS3', bg: '#264de4', color: 'white' },
            { label: 'JS', bg: '#f7df1e', color: 'black' },
            { label: 'REACT', bg: '#61dafb', color: 'black' },
            { label: 'Python', bg: '#3776ab', color: 'white' },
            { label: 'Java', bg: '#007396', color: 'white' },
            { label: 'Node.js', bg: '#339933', color: 'white' },
            { label: 'Express', bg: '#000000', color: 'white' },
            { label: 'TypeScript', bg: '#3178c6', color: 'white' },
            { label: 'AWS', bg: '#ff9900', color: 'black' },
            { label: 'Docker', bg: '#2496ed', color: 'white' },
            { label: 'Git', bg: '#f1502f', color: 'white' },
            { label: 'PostgreSQL', bg: '#336791', color: 'white' },
            { label: 'MariaDB', bg: '#003545', color: 'white' },
            { label: 'MATLAB', bg: '#0076a8', color: 'white' },
            { label: 'PowerShell', bg: '#0078d4', color: 'white' },
            { label: 'C++', bg: '#00599c', color: 'white' },
            { label: 'SQL', bg: '#cc2927', color: 'white' },
          ].map(({ label, bg, color }) => (
            <div key={label} style={{
              background: bg,
              color,
              fontSize: '0.58rem',
              fontWeight: 'bold',
              padding: '2px 5px',
              fontFamily: 'monospace',
              border: '1px solid rgba(0,0,0,0.3)',
            }}>
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Clock */}
      <div className="retro-box">
        <div className="retro-box-title retro-box-title-purple">My time</div>
        <div style={{ padding: '4px 8px 8px', textAlign: 'center', fontSize: '0.8rem', fontFamily: 'monospace', fontWeight: 'bold' }}>
          <Clock />
        </div>
      </div>
    </aside>
  )
}
