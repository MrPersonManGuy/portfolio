export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-24">
      <div className="max-w-3xl mx-auto px-6 py-8 text-sm text-neutral-600 dark:text-neutral-400">
        <p>© {year} Thomas Farrell. All rights reserved.</p>
      </div>
    </footer>
  )
}
