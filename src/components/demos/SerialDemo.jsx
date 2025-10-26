import React from 'react'

export default function SerialDemo() {
  const items = ['First', 'Second', 'Third', 'Fourth', 'Fifth']
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 dark:text-slate-300">Remember first and last items best — notice emphasis.</p>
      <ol className="list-decimal pl-6 space-y-1">
        {items.map((it, i) => (
          <li key={it} className={`${i === 0 || i === items.length - 1 ? 'font-semibold text-indigo-700 dark:text-indigo-300' : 'text-slate-700 dark:text-slate-300'}`}>{it}</li>
        ))}
      </ol>
    </div>
  )
}
