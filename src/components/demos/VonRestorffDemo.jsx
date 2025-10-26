import React from 'react'

export default function VonRestorffDemo() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 dark:text-slate-300">Make the important item stand out — it will be remembered.</p>
      <div className="flex gap-3">
        <div className="p-4 rounded border bg-white dark:bg-slate-800">A</div>
        <div className="p-4 rounded border bg-white dark:bg-slate-800">B</div>
        <div className="p-4 rounded border bg-amber-300 dark:bg-amber-500">C (highlight)</div>
        <div className="p-4 rounded border bg-white dark:bg-slate-800">D</div>
      </div>
    </div>
  )
}
