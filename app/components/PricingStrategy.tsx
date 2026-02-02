'use client'

import { motion } from 'framer-motion'
import { Check, X, ArrowRight, Star, Diamond } from 'lucide-react'

const pricingOptions = [
  {
    title: 'Individual Platform',
    subtitle: 'À la carte selection',
    price: '$6M – $60M',
    description: 'Per platform pricing',
    features: [
      { text: 'Choose specific platforms', included: true },
      { text: 'Pay-as-you-acquire', included: true },
      { text: 'Full technical documentation', included: true },
      { text: '90-day technical handoff', included: true },
      { text: 'Bundle discount', included: false },
    ],
    cta: 'View Platform Pricing',
    badge: null,
    highlighted: false,
  },
  {
    title: 'Bundle Packages',
    subtitle: 'Strategic verticals',
    price: '$51M – $110M',
    description: 'Per bundle pricing',
    features: [
      { text: 'DeFi Suite: $95M (5 platforms, 15% off)', included: true },
      { text: 'Enterprise Suite: $110M (5 platforms, 12% off)', included: true },
      { text: 'Infrastructure: $95M (5 platforms, 10% off)', included: true },
      { text: 'Gaming Suite: $51M (4 platforms)', included: true },
      { text: 'Faster integration + strategic synergy', included: true },
    ],
    cta: 'Explore Bundles',
    badge: 'RECOMMENDED',
    badgeIcon: Star,
    highlighted: true,
  },
  {
    title: 'Complete Portfolio',
    subtitle: 'Full acquisition',
    price: '$350M – $400M',
    description: 'All 19 platforms',
    features: [
      { text: '15% portfolio discount (vs individual)', included: true },
      { text: 'Exclusive 6-month negotiation window', included: true },
      { text: '12-month founder advisory included', included: true },
      { text: 'Extended engineering support option', included: true },
      { text: 'Priority due diligence process', included: true },
    ],
    cta: 'Schedule Strategic Discussion',
    badge: 'BEST VALUE',
    badgeIcon: Diamond,
    highlighted: false,
  },
]

export default function PricingStrategy() {
  return (
    <section className="relative bg-nardiha-dark section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="section-header">Acquisition Pricing</h2>
          <p className="section-subheader">
            Portfolio value: $375M–$425M
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              className={`relative bg-nardiha-black border rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-300 ${
                option.highlighted
                  ? 'border-nardiha-lime shadow-[0_30px_60px_rgba(0,255,157,0.2)]'
                  : 'border-white/10 hover:border-nardiha-lime hover:shadow-[0_30px_60px_rgba(0,255,157,0.15)]'
              }`}
            >
              {/* Badge */}
              {option.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-nardiha-lime to-nardiha-cyan text-nardiha-black text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_8px_24px_rgba(0,255,157,0.4)]">
                    {option.badgeIcon && (
                      <option.badgeIcon className="w-4 h-4" />
                    )}
                    {option.badge}
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8 pt-4">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                  {option.title}
                </h3>
                <p className="text-base text-white/60">{option.subtitle}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-3xl md:text-4xl font-mono text-nardiha-lime font-bold">
                  {option.price}
                </p>
                <p className="text-sm text-white/50 mt-2">{option.description}</p>
              </div>

              {/* Features */}
              <div className="flex-grow mb-8">
                <ul className="space-y-4">
                  {option.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-start gap-3 text-white/80"
                    >
                      {feature.included ? (
                        <Check className="w-5 h-5 text-nardiha-lime mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-white/30 mt-0.5 flex-shrink-0" />
                      )}
                      <span
                        className={`text-base ${
                          !feature.included && 'text-white/40'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 group ${
                  option.highlighted
                    ? 'bg-gradient-to-r from-nardiha-lime to-nardiha-cyan text-nardiha-black hover:shadow-[0_20px_40px_rgba(0,255,157,0.5)]'
                    : 'border-2 border-nardiha-lime text-nardiha-lime hover:bg-nardiha-lime hover:text-nardiha-black'
                }`}
              >
                {option.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
