import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../theme/ThemeProvider'

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const loc = useLocation()

  return (
    <header className="sticky top-0 z-50">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="nav-glass border-b"
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-bold text-lg">
            Laws of UX
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-4 text-sm">
              <Link to="/" className={`px-2 ${loc.pathname === '/' ? 'font-medium' : 'opacity-80'}`}>Home</Link>
              <Link to="/laws" className={`px-2 ${loc.pathname.startsWith('/laws') ? 'font-medium' : 'opacity-80'}`}>Laws</Link>
              <Link to="/about" className={`px-2 ${loc.pathname === '/about' ? 'font-medium' : 'opacity-80'}`}>About</Link>
            </nav>

            {/* Dark toggle */}
            {/* <button
              onClick={toggle}
              aria-label="Toggle theme"
              title="Toggle dark mode"
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button> */}
          </div>
        </div>
      </motion.nav>
    </header>
  )
}
