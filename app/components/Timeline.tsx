'use client'

import { motion } from 'framer-motion'

const timelineSteps = [
  {
    number: '1',
    title: 'Initial Discussion',
    timeline: 'Week 1-2',
    bullets: ['NDA signed', 'Platform demos', 'Technical Q&A', 'Strategic fit assessment'],
  },
  {
    number: '2',
    title: 'Due Diligence',
    timeline: 'Week 3-4',
    bullets: ['Full code review', 'Financials & metrics', 'Legal review', 'Technical audit'],
  },
  {
    number: '3',
    title: 'Term Sheet',
    timeline: 'Week 5-6',
    bullets: ['LOI signed', 'Valuation finalized', 'Deal structure', 'Escrow setup'],
  },
  {
    number: '4',
    title: 'Close & Transfer',
    timeline: 'Week 7-12',
    bullets: ['Definitive agreement', 'IP transfer', 'Wire transfer', 'Integration support'],
  },
]

export default function Timeline() {
  return (
    <section className="relative bg-nardiha-black section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="section-header">Acquisition Process</h2>
          <p className="section-subheader">
            From first call to wire transfer
          </p>
        </motion.div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-nardiha-lime/50 to-transparent" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="absolute top-16 left-[10%] right-[10%] h-0.5 bg-nardiha-lime origin-left"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, #00ff9d 0, #00ff9d 10px, transparent 10px, transparent 20px)',
            }}
          />

          {/* Steps */}
          <div className="grid grid-cols-4 gap-8">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center"
              >
                {/* Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.3,
                    type: 'spring',
                  }}
                  viewport={{ once: true }}
                  className="w-16 h-16 rounded-full border-3 border-nardiha-lime bg-nardiha-black flex items-center justify-center z-10"
                  style={{ borderWidth: '3px' }}
                >
                  <span className="text-2xl font-mono text-nardiha-lime font-bold">
                    {step.number}
                  </span>
                </motion.div>

                {/* Card */}
                <div className="mt-8 bg-nardiha-dark border border-white/10 rounded-xl p-6 w-full">
                  <h3 className="text-xl font-display font-bold text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm font-mono text-nardiha-lime text-center mb-4">
                    {step.timeline}
                  </p>
                  <ul className="space-y-2">
                    {step.bullets.map((bullet, bIndex) => (
                      <li
                        key={bIndex}
                        className="flex items-center gap-2 text-sm text-white/70"
                      >
                        <span className="w-1 h-1 rounded-full bg-nardiha-lime flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden space-y-8">
          {timelineSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex gap-6"
            >
              {/* Node */}
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full border-2 border-nardiha-lime bg-nardiha-black flex items-center justify-center flex-shrink-0"
                >
                  <span className="text-lg font-mono text-nardiha-lime font-bold">
                    {step.number}
                  </span>
                </div>
                {index < timelineSteps.length - 1 && (
                  <div className="w-0.5 flex-grow bg-nardiha-lime/30 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-grow pb-8">
                <div className="bg-nardiha-dark border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-display font-bold">
                      {step.title}
                    </h3>
                    <p className="text-sm font-mono text-nardiha-lime">
                      {step.timeline}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {step.bullets.map((bullet, bIndex) => (
                      <li
                        key={bIndex}
                        className="flex items-center gap-2 text-sm text-white/70"
                      >
                        <span className="w-1 h-1 rounded-full bg-nardiha-lime flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
