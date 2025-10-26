import React from 'react'
import Hero from '../sections/Hero'

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Why these laws matter</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Each law explains a predictable aspect of human perception or behaviour — apply them to design faster, clearer, and more memorable interfaces.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border shadow-sm bg-white dark:bg-slate-900">
            <h3 className="font-semibold mb-2">Practical</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Directly applicable patterns for layouts and interactions.</p>
          </div>
          <div className="p-6 rounded-xl border shadow-sm bg-white dark:bg-slate-900">
            <h3 className="font-semibold mb-2">Interactive</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Demos you can try to internalize each law.</p>
          </div>
          <div className="p-6 rounded-xl border shadow-sm bg-white dark:bg-slate-900">
            <h3 className="font-semibold mb-2">Lightweight</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Small focused examples — perfect for study and rapid prototyping.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
