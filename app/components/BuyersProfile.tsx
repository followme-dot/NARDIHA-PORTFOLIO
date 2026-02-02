'use client'

import { motion } from 'framer-motion'
import { Building2, TrendingUp, Globe, Landmark } from 'lucide-react'

const buyerProfiles = [
  {
    icon: Building2,
    title: 'Crypto Exchanges',
    examples: 'Coinbase, Binance, Kraken, OKX',
    reasons: [
      'Instant institutional on-ramp (ASTRID $45-60M)',
      'Custody infrastructure (AUREUM VAULT $35-45M)',
      'DEX technology (NARDIUM DEX $30-35M)',
      'Payment processing (FERRUM PAY $15-20M)',
    ],
    targetPlatforms: 'ASTRID, AUREUM VAULT, NARDIUM DEX, FERRUM PAY, VERITAS ID',
    willingness: '$160M–$180M',
    borderClass: 'border-top-cyan',
  },
  {
    icon: TrendingUp,
    title: 'VCs / PE Firms',
    examples: 'a16z, Paradigm, Sequoia, Softbank',
    reasons: [
      'Diversified Web3 portfolio (19 platforms)',
      '$40M ARR Year 1 revenue potential',
      'Path to $200M ARR Year 3',
      'Buy vs build: 18 months faster to market',
    ],
    targetPlatforms: 'Full portfolio or strategic bundles',
    willingness: '$350M–$400M',
    borderClass: 'border-top-purple',
  },
  {
    icon: Globe,
    title: 'Enterprise Tech',
    examples: 'Microsoft, Stripe, Shopify, Square',
    reasons: [
      'AI Automation (AETHER HUB $25-35M)',
      'Enterprise identity (VERITAS ID $20-25M)',
      'Security AI (VIGIL AI $25-35M)',
      'Carbon credits (SÜSINIK $15-20M)',
    ],
    targetPlatforms: 'AETHER HUB, VERITAS ID, VIGIL AI, SÜSINIK, TRIBUTUM',
    willingness: '$95M–$130M',
    borderClass: 'border-top-lime',
  },
  {
    icon: Landmark,
    title: 'Traditional Finance',
    examples: 'JP Morgan, Goldman Sachs, Fidelity, BlackRock',
    reasons: [
      'Crypto custody for clients (AUREUM)',
      'Banking-crypto bridges (ASTRID)',
      'Tax compliance (TRIBUTUM $10-12M)',
      'Regulatory-ready infrastructure',
    ],
    targetPlatforms: 'ASTRID, AUREUM VAULT, SÜSINIK, TRIBUTUM, FERRUM PAY',
    willingness: '$120M–$160M',
    borderClass: 'border-top-amber',
  },
]

export default function BuyersProfile() {
  return (
    <section className="relative bg-nardiha-black section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="section-header">Ideal Acquirers</h2>
          <p className="section-subheader">
            Strategic buyers who can maximize portfolio value
          </p>
        </motion.div>

        {/* Buyers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {buyerProfiles.map((buyer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`bg-nardiha-dark border border-white/10 rounded-2xl p-8 md:p-10 ${buyer.borderClass}`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <buyer.icon className="w-8 h-8 text-nardiha-lime" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold">
                    {buyer.title}
                  </h3>
                  <p className="text-base text-white/60 mt-1">
                    {buyer.examples}
                  </p>
                </div>
              </div>

              {/* Why Acquire */}
              <div className="mb-6">
                <p className="text-sm font-mono uppercase text-nardiha-lime tracking-wider mb-3">
                  WHY ACQUIRE
                </p>
                <ul className="space-y-2">
                  {buyer.reasons.map((reason, rIndex) => (
                    <li
                      key={rIndex}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-nardiha-lime mt-2 flex-shrink-0" />
                      <span className="text-base">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Platforms */}
              <div className="mb-6">
                <p className="text-sm font-mono uppercase text-nardiha-lime tracking-wider mb-2">
                  TARGET PLATFORMS
                </p>
                <p className="text-base text-white/70">{buyer.targetPlatforms}</p>
              </div>

              {/* Willingness to Pay */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-white/50 mb-1">
                  Est. willingness to pay
                </p>
                <p className="text-2xl md:text-3xl font-mono text-nardiha-lime font-bold">
                  {buyer.willingness}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
