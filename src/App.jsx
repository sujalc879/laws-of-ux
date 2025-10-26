import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Laws from './pages/Laws'
import LawDetail from './pages/LawDetail'
import About from './pages/About'
import { ThemeProvider } from './theme/ThemeProvider'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#04060b] text-slate-900 dark:text-slate-200 transition-colors">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/laws" element={<Laws />} />
          <Route path="/laws/:id" element={<LawDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <footer className="border-t mt-12 py-6 bg-white/60 dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-500 dark:text-slate-400">
            Built for learning — adapt and expand for your project.
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
