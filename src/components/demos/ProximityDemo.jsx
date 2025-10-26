import React from 'react'
import { motion } from 'framer-motion'

export default function ProximityDemo() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 dark:text-slate-300">Items closer together are seen as a group. Observe the close vs spaced sets.</p>
      <div className="flex flex-col gap-4 items-center">
        <motion.div initial={{ scale: 0.98 }} whileHover={{ scale: 1.02 }} className="flex gap-1">
          <div className="w-8 h-8 bg-indigo-300 rounded-full" />
          <div className="w-8 h-8 bg-indigo-300 rounded-full" />
          <div className="w-8 h-8 bg-indigo-300 rounded-full" />
        </motion.div>
        <motion.div initial={{ scale: 0.98 }} whileHover={{ scale: 1.02 }} className="flex gap-8">
          <div className="w-8 h-8 bg-indigo-100 rounded-full" />
          <div className="w-8 h-8 bg-indigo-100 rounded-full" />
          <div className="w-8 h-8 bg-indigo-100 rounded-full" />
        </motion.div>
      </div>
    </div>
  )
}
