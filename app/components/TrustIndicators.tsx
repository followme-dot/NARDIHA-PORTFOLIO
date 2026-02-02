'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const indicators = [
  { text: '6 Years Web3 Development' },
  { text: '400K+ Lines Production Code' },
  { text: 'Triple Audited (Quantstamp, CertiK, Trail of Bits)' },
  { text: 'SOC 2 Type II Certified (Ernst & Young)' },
  { text: '$250M+ Insurance Coverage' },
  { text: '50+ Banking & Blockchain Integrations' },
]

export default function TrustIndicators() {
  return (
    <section className="relative bg-nardiha-dark py-16 md:py-20 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-center text-lg md:text-xl text-white/70 mb-12"
        >
          Trusted by world-class engineering standards
        </motion.p>

        {/* Indicators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {indicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.8 }}
              className="flex items-center gap-4 group cursor-default"
            >
              <CheckCircle2 className="w-6 h-6 text-nardiha-lime flex-shrink-0" />
              <span className="text-base md:text-lg text-white/90 group-hover:text-nardiha-lime transition-colors duration-300">
                {indicator.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
