import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function HicksDemo() {
  const [choices, setChoices] = useState(3)
  const options = Array.from({ length: choices }, (_, i) => `Option ${i + 1}`)
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 dark:text-slate-300">Increase choices and observe decision friction. Use the slider to change number of options.</p>
      <input type="range" min={1} max={9} value={choices} onChange={e => setChoices(Number(e.target.value))} />
      <div className="flex flex-wrap gap-3">
        {options.map((o, idx) => (
          <motion.button key={o} whileTap={{ scale: 0.98 }} className="px-4 py-2 rounded border" transition={{ delay: idx * 0.02 }}>{o}</motion.button>
        ))}
      </div>
    </div>
  )
}
