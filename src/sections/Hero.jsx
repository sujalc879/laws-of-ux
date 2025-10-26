import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold mb-4">
          Laws of UX
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-700 dark:text-slate-200 max-w-2xl mx-auto mb-8">
          A concise interactive guide to core psychological principles used in interface and product design. Learn by doing — try bite-sized demos for each law.
        </motion.p>

        <motion.div initial={{ scale: 0.98 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}>
          <div className="flex items-center justify-center gap-4">
            <Link to="/laws" className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:shadow-lg transition">Start Learning</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
