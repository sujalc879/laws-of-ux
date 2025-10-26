import React from 'react'
import { motion } from 'framer-motion'
import { laws } from '../data/laws'
import ZeigarnikDemo from './demos/ZeigarnikDemo'
import ProximityDemo from './demos/ProximityDemo'
import HicksDemo from './demos/HicksDemo'
import SerialDemo from './demos/SerialDemo'
import CommonRegionDemo from './demos/CommonRegionDemo'
import FittsDemo from './demos/FittsDemo'
import VonRestorffDemo from './demos/VonRestorffDemo'

export default function DemoModal({ lawId, onClose }) {
  if (!lawId) return null
  const law = laws.find(l => l.id === lawId)

  function demoComponent(id) {
    switch (id) {
      case 'zeigarnik': return <ZeigarnikDemo />
      case 'proximity': return <ProximityDemo />
      case 'hicks': return <HicksDemo />
      case 'serial': return <SerialDemo />
      case 'common-region': return <CommonRegionDemo />
      case 'fitts': return <FittsDemo />
      case 'von-restorff': return <VonRestorffDemo />
      default: return <div>Demo not found</div>
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose}></div>
      <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.18 }} className="relative z-10 max-w-3xl mx-4 bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold">{law.name} — Demo</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{law.details}</p>
          </div>
          <button onClick={onClose} className="text-slate-600 dark:text-slate-300">Close</button>
        </div>

        <div className="demo-scroll">
          {demoComponent(lawId)}
        </div>
      </motion.div>
    </div>
  )
}
