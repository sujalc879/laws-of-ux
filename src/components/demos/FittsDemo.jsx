import React, { useState } from 'react'

export default function FittsDemo() {
  const [count, setCount] = useState(0)
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 dark:text-slate-300">Bigger, closer buttons are faster and easier to click. Click the big target!</p>
      <div className="flex items-center gap-6">
        <button onClick={() => setCount(c => c + 1)} className="px-6 py-3 rounded bg-indigo-600 text-white text-lg">Big Target</button>
        <div className="flex flex-col items-start gap-2">
          <button onClick={() => setCount(c => c + 1)} className="px-2 py-1 rounded border text-sm">Small</button>
          <button onClick={() => setCount(c => c + 1)} className="px-2 py-1 rounded border text-sm">Small</button>
        </div>
      </div>
      <p className="text-sm text-slate-700 dark:text-slate-300">Clicks: {count}</p>
    </div>
  )
}
