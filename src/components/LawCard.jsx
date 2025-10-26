import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function LawCard({ law, onDemo }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow hover:shadow-lg border transition">
      <h3 className="font-semibold text-lg mb-2">{law.name}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{law.short}</p>
      <div className="flex gap-2">
        <button onClick={onDemo} className="text-sm px-3 py-2 rounded bg-indigo-50 text-indigo-700">Try Demo</button>
        <Link to={`/laws/${law.id}`} className="text-sm px-3 py-2 rounded border">Read</Link>
      </div>
    </motion.div>
  )
}
