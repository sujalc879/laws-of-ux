import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero({ onStart }) {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-indigo-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Laws of UX
        </motion.h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          A concise interactive guide to core psychological principles used in interface and product design.
          Learn by doing — try bite-sized demos for each law.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onStart}
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:shadow-lg"
          >
            Start Learning
          </button>
          <Link to="/laws" className="px-6 py-3 rounded-lg border border-indigo-200 text-indigo-700">View All Laws</Link>
        </div>
      </div>
    </section>
  );
}
