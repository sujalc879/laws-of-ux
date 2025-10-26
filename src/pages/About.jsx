import React from 'react'

export default function About() {
  function handleOnclick() {
    window.location.href = "https://github.com/yashrajbharti"
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-4">About this guide</h2>
      <p className="text-slate-700 dark:text-slate-300 mb-4">This interactive mini-site is built to help learners quickly grasp key UX laws through short descriptions and hands-on demos. Use it as a study aid while preparing for projects like GSoC.</p>

      <h3 className="mt-6 font-semibold">Resources</h3>
      <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300">
        <li>Laws of UX — summary notes</li>
        <li className="cursor-pointer" onClick={handleOnclick}>Credits : https://github.com/yashrajbharti</li>
      </ul>
    </div>
  )
}
