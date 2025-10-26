import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ZeigarnikDemo() {
  const [progress, setProgress] = useState(36)
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 dark:text-slate-300">An interrupted progress encourages return. Drag to adjust progress or click "Complete".</p>
      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-4 overflow-hidden">
        <motion.div className="h-4 rounded-full bg-indigo-500" style={{ width: `${progress}%` }} layout transition={{ type: 'spring', stiffness: 120 }} />
      </div>
      <input type="range" min={0} max={100} value={progress} onChange={e => setProgress(Number(e.target.value))} />
      <div className="flex gap-3">
        <button onClick={() => setProgress(100)} className="px-4 py-2 rounded bg-green-600 text-white">Complete</button>
        <button onClick={() => setProgress(36)} className="px-4 py-2 rounded border">Interrupt</button>
      </div>
    </div>
  )
}
