'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/projects', label: 'projects' },
  { href: '/contact', label: 'contact' },
]

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && !href.startsWith('mailto') && pathname.startsWith(href)) return true
    return false
  }

  return (
    <aside>
      <div className="retro-box">
        <div className="retro-box-title retro-box-title-blue">Navigation</div>
        <nav style={{ padding: '4px 8px 8px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link${isActive(href) ? ' active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="retro-box">
        <div className="retro-box-title retro-box-title-green">Links</div>
        <div style={{ padding: '4px 8px 8px', display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '0.78rem' }}>
          <a href="https://github.com/MrPersonManGuy" target="_blank" rel="noopener noreferrer">github</a>
          <a href="https://www.linkedin.com/in/thomasfarrell2003/" target="_blank" rel="noopener noreferrer">linkedin</a>
        </div>
      </div>
    </aside>
  )
}
