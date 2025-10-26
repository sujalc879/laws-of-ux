import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { laws } from '../data/laws'
import DemoModal from '../components/DemoModal'

export default function LawDetail() {
  const { id } = useParams()
  const law = laws.find(l => l.id === id)
  const [demoOpen, setDemoOpen] = useState(false)

  if (!law) return <div className="p-6">Law not found</div>

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-2">{law.name}</h2>
      <p className="text-slate-600 dark:text-slate-300 mb-6">{law.details}</p>
      <div className="mb-6">
        <button onClick={() => setDemoOpen(true)} className="px-4 py-2 rounded bg-indigo-600 text-white">Open Demo</button>
      </div>

      <div className="prose max-w-none dark:prose-invert">
        <h3>How to use it</h3>
        <p>Short guidance on applying the law to UI components.</p>
      </div>

      <DemoModal lawId={demoOpen ? id : null} onClose={() => setDemoOpen(false)} />
    </div>
  )
}
