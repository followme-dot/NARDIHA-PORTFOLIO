'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Gamepad2, Server, Building2 } from 'lucide-react'

const categories = [
  {
    icon: TrendingUp,
    name: 'DeFi & Trading',
    count: '5 platforms',
    valuation: '$92M–$108M',
    platforms: [
      { name: 'BITBOOTS', price: '$15M–$18M' },
      { name: 'NARDIUM DEX', price: '$30M–$35M' },
      { name: 'ARGENTUM BRIDGE', price: '$22M–$28M' },
      { name: 'AUREUM VAULT', price: '$35M–$45M' },
      { name: 'TRADE MAD', price: '$10M–$12M' },
    ],
    gradient: 'from-nardiha-lime/20 to-nardiha-cyan/20',
  },
  {
    icon: Gamepad2,
    name: 'Gaming & Metaverse',
    count: '4 platforms',
    valuation: '$51M–$66M',
    platforms: [
      { name: 'TEMPLUM DAO', price: '$22M–$28M' },
      { name: 'SSEUM GAMES', price: '$15M–$20M' },
      { name: 'BB NFT', price: '$6M–$8M' },
      { name: 'GLADIUS HUB', price: '$8M–$10M' },
    ],
    gradient: 'from-nardiha-purple/20 to-pink-500/20',
  },
  {
    icon: Server,
    name: 'Infrastructure & Identity',
    count: '5 platforms',
    valuation: '$100M–$135M',
    platforms: [
      { name: 'VERITAS ID', price: '$20M–$25M' },
      { name: 'VIGIL AI', price: '$25M–$35M' },
      { name: 'ORACULUM', price: '$22M–$30M' },
      { name: 'FERRUM PAY', price: '$15M–$20M' },
      { name: 'NEXUS GRID', price: '$18M–$25M' },
    ],
    gradient: 'from-nardiha-cyan/20 to-blue-500/20',
  },
  {
    icon: Building2,
    name: 'Enterprise & Compliance',
    count: '5 platforms',
    valuation: '$110M–$147M',
    platforms: [
      { name: 'SÜSINIK', price: '$15M–$20M' },
      { name: 'TRIBUTUM', price: '$10M–$12M' },
      { name: 'AETHER HUB', price: '$25M–$35M' },
      { name: 'AGORA SOCIAL', price: '$15M–$22M' },
      { name: 'ASTRID', price: '$45M–$60M' },
    ],
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
]

export default function PlatformCategories() {
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
          <h2 className="section-header">Portfolio Overview</h2>
          <p className="section-subheader">
            4 verticals. 19 platforms. $375M value.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className={`relative bg-nardiha-dark border border-white/10 rounded-2xl p-8 md:p-12 min-h-[420px] flex flex-col transition-all duration-300 hover:border-nardiha-lime hover:shadow-[0_30px_80px_rgba(0,255,157,0.2)] overflow-hidden`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-50`}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <category.icon className="w-7 h-7 text-nardiha-lime" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold">
                        {category.name}
                      </h3>
                      <p className="text-sm font-mono text-white/60 mt-1">
                        {category.count}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Valuation */}
                <p className="text-2xl md:text-3xl font-mono text-nardiha-lime font-semibold mb-6">
                  {category.valuation}
                </p>

                {/* Platform List */}
                <div className="flex-grow">
                  <ul className="space-y-3">
                    {category.platforms.map((platform, pIndex) => (
                      <li
                        key={pIndex}
                        className="flex items-center justify-between text-white/80"
                      >
                        <span className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-nardiha-lime flex-shrink-0" />
                          <span className="text-base">{platform.name}</span>
                        </span>
                        <span className="text-sm font-mono text-white/50">{platform.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="#platforms"
                  className="inline-flex items-center gap-2 text-nardiha-lime font-medium mt-8 group"
                >
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
