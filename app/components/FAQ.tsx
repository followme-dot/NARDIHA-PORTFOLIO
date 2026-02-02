'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronRight, Plus } from 'lucide-react'

const faqItems = [
  {
    question: 'Why are you selling?',
    answer:
      'Strategic decision to focus on new ventures. The portfolio represents 6 years of development and is production-ready. These platforms are best positioned to scale with a resourced acquirer who can deploy enterprise sales teams and go-to-market operations. We\'re optimizing for the platforms\' success, not just holding them.',
  },
  {
    question: 'What does "90% complete" mean?',
    answer:
      'Core functionality is fully implemented and tested. The remaining 10% consists of: (1) UI/UX polish for specific enterprise customizations, (2) Additional blockchain integrations beyond the current 20+ chains, (3) Custom features requested by early enterprise pilots. All platforms have passed internal QA and third-party security audits.',
  },
  {
    question: 'Are smart contracts audited?',
    answer:
      'Yes. All smart contracts have been triple-audited by Quantstamp, CertiK, and Trail of Bits. Audit reports are available under NDA during due diligence. We\'ve also implemented continuous fuzzing with Echidna and formal verification for critical contracts.',
  },
  {
    question: 'Can I buy one platform only?',
    answer:
      'Yes. Individual platform purchases start at $6M (GLADIUS HUB, BB NFT) and go up to $60M (ASTRID). We offer flexible acquisition structures including: single platform, vertical bundles (DeFi, Gaming, Infrastructure, Enterprise), or the complete portfolio with a 15-20% discount.',
  },
  {
    question: 'What integration support do you provide?',
    answer:
      'Every acquisition includes: (1) 90-day technical handoff with our development team, (2) Complete documentation (API docs, architecture diagrams, runbooks), (3) 12-month founder advisory for strategic decisions, (4) Option for 6-month extended engineering support (negotiable). Integration timeline is typically 7-8 weeks to production.',
  },
  {
    question: 'Is financing available?',
    answer:
      'We\'re open to creative deal structures for qualified buyers. Options include: (1) Traditional all-cash (preferred), (2) 70/30 cash/equity combination, (3) Milestone-based earnouts tied to revenue targets, (4) Structured payments over 12-18 months with escrow. All structures require significant upfront commitment.',
  },
  {
    question: 'What\'s the revenue status of these platforms?',
    answer:
      'Most platforms are pre-revenue but production-ready with enterprise pilot agreements in negotiation. ASTRID has processed $2B in test transactions with 3 institutional clients ready for production launch. Revenue projections and pilot agreements are shared under NDA during due diligence.',
  },
  {
    question: 'How do you justify the valuation?',
    answer:
      'Valuation is based on: (1) Development cost replacement ($15M+ actual investment), (2) Time-to-market advantage (6 years compressed to 7-8 weeks), (3) Comparable M&A transactions in Web3/SaaS space, (4) Revenue potential from enterprise pilots, (5) Strategic value for market positioning. Detailed valuation methodology available in pitch deck.',
  },
  {
    question: 'What happens if I find issues during due diligence?',
    answer:
      'We\'re confident in our code quality, hence the triple-audit approach. However, we work collaboratively: (1) Technical issues can be remediated pre-close with adjusted timeline, (2) Material concerns may warrant valuation renegotiation, (3) Deal-breaker issues have a defined walk-away clause in LOI. We prefer transparency over adversarial negotiations.',
  },
  {
    question: 'Who owns the IP?',
    answer:
      'NARDIHA Holdings OÜ (Estonia) holds 100% IP rights to all platforms. Clean cap table, no prior investors with residual rights, no encumbrances. IP transfer is straightforward through standard asset purchase agreement. We can also structure as a stock sale if preferred for tax efficiency.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [showAll, setShowAll] = useState(false)

  const visibleItems = showAll ? faqItems : faqItems.slice(0, 6)

  return (
    <section className="relative bg-nardiha-dark section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="section-header">Common Questions</h2>
          <p className="section-subheader">
            Addressing key concerns from potential acquirers
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-0">
          {visibleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="accordion-item"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="accordion-header"
              >
                <span className="flex items-center gap-4">
                  <ChevronRight
                    className={`w-5 h-5 text-nardiha-lime transition-transform duration-300 ${
                      openIndex === index ? 'rotate-90' : ''
                    }`}
                  />
                  <span>{item.question}</span>
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="accordion-content">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && faqItems.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 text-nardiha-lime hover:text-white transition-colors duration-300"
            >
              <Plus className="w-5 h-5" />
              <span>View {faqItems.length - 6} more questions</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
