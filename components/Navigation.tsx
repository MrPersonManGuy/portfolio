'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  return (
    <nav className="border-4 border-neutral-900 dark:border-neutral-100 p-4 bg-white dark:bg-neutral-950 flex gap-6 justify-center text-sm font-bold">
      <Link href="/" className={isActive('/') ? 'underline' : ''}>
        Home
      </Link>
      <Link href="/projects" className={isActive('/projects') ? 'underline' : ''}>
        Projects
      </Link>
      <Link href="/blog" className={isActive('/blog') ? 'underline' : ''}>
        Blog
      </Link>
    </nav>
  )
}
