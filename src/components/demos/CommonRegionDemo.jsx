import React from 'react'

export default function CommonRegionDemo() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 dark:text-slate-300">Items enclosed in a region are perceived as related.</p>
      <div className="flex gap-6">
        <div className="p-4 rounded-lg border bg-white dark:bg-slate-800">
          <div className="w-40 h-12 bg-indigo-100 dark:bg-indigo-900 rounded mb-2" />
          <div className="w-40 h-12 bg-indigo-100 dark:bg-indigo-900 rounded" />
        </div>
        <div className="p-4 rounded-lg border bg-white/80 dark:bg-slate-900">
          <div className="w-40 h-12 bg-indigo-50 dark:bg-indigo-950 rounded mb-2" />
          <div className="w-40 h-12 bg-indigo-50 dark:bg-indigo-950 rounded" />
        </div>
      </div>
    </div>
  )
}
