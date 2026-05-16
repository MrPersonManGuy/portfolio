'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800 sticky top-0 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm z-50">
      <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-lg hover:text-neutral-600 dark:hover:text-neutral-400">
            tf
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/projects" className="hover:text-neutral-600 dark:hover:text-neutral-400">
              Projects
            </Link>
            <Link href="/blog" className="hover:text-neutral-600 dark:hover:text-neutral-400">
              Blog
            </Link>
          </div>
        </div>

        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        )}
      </nav>
    </header>
  )
}
