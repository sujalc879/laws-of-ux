import React, { useState } from 'react'
import { laws } from '../data/laws'
import LawCard from '../components/LawCard'
import DemoModal from '../components/DemoModal'
import { motion } from 'framer-motion'

export default function Laws() {
  const [activeDemo, setActiveDemo] = useState(null)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">All Laws</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Interactive demos help internalize concepts.</p>
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
        hidden: {},
        visible: {}
      }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {laws.map((l, i) => (
          <motion.div key={l.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
            <LawCard law={l} onDemo={() => setActiveDemo(l.id)} />
          </motion.div>
        ))}
      </motion.div>

      <DemoModal lawId={activeDemo} onClose={() => setActiveDemo(null)} />
    </div>
  )
}
