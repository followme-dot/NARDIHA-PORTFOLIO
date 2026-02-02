'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ArrowRight, Zap, Shield, Globe, Brain, Link2 } from 'lucide-react'

const flagshipPlatforms = [
  {
    icon: '🎯',
    name: 'ASTRID',
    tagline: 'Enterprise Banking to Crypto Bridge',
    valuation: '$45M–$60M',
    valueProp: 'Wire $5M → Crypto Wallet in <10 Minutes',
    features: [
      'AI Invoice Processing (Claude 3.5 Sonnet) — 100% accuracy',
      '50+ Bank Integrations (ISO 20022, SWIFT)',
      '$120M Insurance (Lloyd\'s + Nexus Mutual)',
      'SOC 2 Type II Certified (Ernst & Young)',
      'Multi-Sig Custody (Fireblocks + CloudHSM)',
      '99.95% Success Rate ($2B Volume Year 1)',
    ],
    stats: [
      { value: '100K', label: 'Lines Code' },
      { value: '$2B', label: 'Volume Y1' },
    ],
    gradientClass: 'gradient-astrid',
    IconComponent: Link2,
    devCost: '$14M',
    marketComparable: 'Fireblocks ($8B), Prime Trust ($500M)',
  },
  {
    icon: '⚡',
    name: 'NARDIUM DEX',
    tagline: 'Multi-Chain Decentralized Exchange',
    valuation: '$30M–$35M',
    valueProp: 'Trade Across 20+ Chains with Zero Slippage',
    features: [
      'LayerZero Cross-Chain Messaging',
      'MEV Protection (Flashbots Integration)',
      'Concentrated Liquidity (Uniswap V3 Model)',
      'Gasless Trading (ERC-2771 Meta-Transactions)',
      'Real-Time Arbitrage Detection',
      'Institutional Order Types (TWAP, Iceberg)',
    ],
    stats: [
      { value: '120K', label: 'Lines Code' },
      { value: '20+', label: 'Chains' },
    ],
    gradientClass: 'gradient-nardium',
    IconComponent: Zap,
    devCost: '$14.4M',
    marketComparable: 'SushiSwap ($500M), Trader Joe ($300M)',
  },
  {
    icon: '🏦',
    name: 'AUREUM VAULT',
    tagline: 'Institutional-Grade Crypto Custody',
    valuation: '$35M–$45M',
    valueProp: 'Bank-Level Security for Digital Assets',
    features: [
      'HSM-Backed MPC (Threshold Signatures)',
      '$100M Insurance (Lloyd\'s + Nexus Mutual)',
      'SOC 2 Type II + ISO 27001 Certified',
      'Multi-Party Governance (3-of-5 Quorum)',
      'Real-Time Reserve Proof (Chainlink PoR)',
      'Regulatory Compliance (MiCA, FATF Ready)',
    ],
    stats: [
      { value: '70K', label: 'Lines Code' },
      { value: '$100M', label: 'Insurance' },
    ],
    gradientClass: 'gradient-aureum',
    IconComponent: Shield,
    devCost: '$10M',
    marketComparable: 'BitGo ($700M acquisition)',
  },
  {
    icon: '🔍',
    name: 'VIGIL AI',
    tagline: 'AI-Powered Fraud & AML Detection',
    valuation: '$25M–$35M',
    valueProp: '99.7% Fraud Detection Rate in Real-Time',
    features: [
      'Graph Neural Networks (Transaction Analysis)',
      'Real-Time Wallet Screening (OFAC, EU Lists)',
      'Behavioral Biometrics (Device Fingerprinting)',
      'Custom ML Models (PyTorch + Claude Integration)',
      'FATF Travel Rule Compliance',
      '< 100ms Detection Latency',
    ],
    stats: [
      { value: '95K', label: 'Lines Code' },
      { value: '99.7%', label: 'Detection' },
    ],
    gradientClass: 'gradient-vigil',
    IconComponent: Brain,
    devCost: '$12.35M',
    marketComparable: 'CertiK ($2B), PeckShield ($100M)',
  },
  {
    icon: '🌐',
    name: 'AETHER HUB',
    tagline: 'Multi-Agent AI Automation Platform',
    valuation: '$25M–$35M',
    valueProp: 'Enterprise AI Automation with 500+ Integrations',
    features: [
      '10+ AI Agents (Claude 3.5 Sonnet Integration)',
      '500+ App Integrations (Enterprise-Ready)',
      'White-Label Multi-Tenancy (Row + Schema)',
      'Usage-Based Billing (Stripe Connect)',
      'SSO/SAML Enterprise Auth (Okta, Azure AD)',
      'Auto-Scaling Infrastructure (K8s + Terraform)',
    ],
    stats: [
      { value: '75K', label: 'Lines Code' },
      { value: '500+', label: 'Integrations' },
    ],
    gradientClass: 'gradient-aether',
    IconComponent: Globe,
    devCost: '$8.6M',
    marketComparable: 'Zapier ($5B), Make.com ($1B)',
  },
]

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState(value)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!inView || hasAnimated) return

    const numericMatch = value.match(/^(\$)?([\d.]+)(.*)$/)
    if (!numericMatch) {
      setDisplayValue(value)
      return
    }

    setHasAnimated(true)
    const prefix = numericMatch[1] || ''
    const targetNum = parseFloat(numericMatch[2])
    const suffix = numericMatch[3] || ''
    const duration = 1500
    const steps = 60
    const increment = targetNum / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetNum) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        if (targetNum >= 100) {
          setDisplayValue(prefix + Math.floor(current) + suffix)
        } else if (targetNum >= 10) {
          setDisplayValue(prefix + current.toFixed(0) + suffix)
        } else {
          setDisplayValue(prefix + current.toFixed(1) + suffix)
        }
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, value, hasAnimated])

  return <span>{displayValue}</span>
}

export default function FlagshipShowcase() {
  return (
    <section id="platforms" className="relative bg-nardiha-black section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="section-header">Flagship Products</h2>
          <p className="section-subheader">
            The crown jewels of the portfolio
          </p>
        </motion.div>

        {/* Platform Cards */}
        <div className="space-y-12">
          {flagshipPlatforms.map((platform, index) => {
            const ref = useRef(null)
            const isInView = useInView(ref, { once: true, amount: 0.2 })

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                className={`relative ${platform.gradientClass} border-2 border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden`}
              >
                {/* Card Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{platform.icon}</span>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-display font-bold">
                        {platform.name}
                      </h3>
                      <p className="text-lg text-white/70 mt-1">
                        {platform.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-2xl md:text-3xl font-mono text-nardiha-lime font-semibold">
                    {platform.valuation}
                  </p>
                </div>

                {/* Value Proposition */}
                <p className="text-xl md:text-2xl font-semibold text-white mb-8 max-w-3xl">
                  {platform.valueProp}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <p className="text-sm font-mono uppercase text-nardiha-lime tracking-wider mb-4">
                    KEY FEATURES
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {platform.features.map((feature, fIndex) => (
                      <div
                        key={fIndex}
                        className="flex items-start gap-3 text-white/85"
                      >
                        <span className="w-2 h-2 rounded-full bg-nardiha-lime mt-2 flex-shrink-0" />
                        <span className="text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  {platform.stats.map((stat, sIndex) => (
                    <div
                      key={sIndex}
                      className="bg-white/5 border border-white/20 rounded-xl px-6 py-4"
                    >
                      <p className="text-3xl md:text-4xl font-mono text-nardiha-lime font-semibold">
                        <AnimatedCounter value={stat.value} inView={isInView} />
                      </p>
                      <p className="text-sm text-white/60 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-nardiha-lime text-nardiha-lime font-semibold rounded-full hover:bg-nardiha-lime hover:text-nardiha-black transition-all duration-300 group"
                >
                  View Detailed Specs
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
