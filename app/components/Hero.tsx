'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-nardiha-black" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 opacity-5">
        <div className="bg-mesh animate-mesh-slow" />
      </div>

      {/* Header (Sticky) */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:p-8 bg-nardiha-black/80 backdrop-blur-md border-b border-white/5">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-nardiha-lime to-nardiha-cyan flex items-center justify-center">
            <span className="text-nardiha-black font-bold text-lg">N</span>
          </div>
          <span className="text-xl md:text-2xl font-display font-bold">
            NARDIHA
          </span>
        </Link>

        <a href="#contact" className="btn-secondary-small hidden sm:flex">
          Schedule Demo
          <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
        </a>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24">
        {/* Brand Name */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-nardiha-cyan text-base md:text-lg font-mono uppercase tracking-[0.2em] mb-8"
        >
          NARDIHA PORTFOLIO
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-display font-bold leading-[1.05] tracking-tight max-w-6xl mx-auto"
        >
          19 Enterprise-Grade
          <br />
          <span className="text-gradient">SaaS Platforms</span>
          <br />
          Ready for Acquisition
        </motion.h1>

        {/* Subheadline - Valuation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 md:mt-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-semibold text-nardiha-lime"
        >
          $375M–$425M Portfolio Valuation
        </motion.p>

        {/* Stats Bar */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 md:mt-8 text-base md:text-lg text-white/70"
        >
          400K+ LOC{' '}
          <span className="text-white/30 mx-2 md:mx-4">|</span> 90% Complete{' '}
          <span className="text-white/30 mx-2 md:mx-4">|</span> 7-Week
          Integration
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
        >
          <a href="#contact" className="btn-primary group w-full sm:w-auto">
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Download Pitch Deck
          </a>
          <a href="#contact" className="btn-secondary group w-full sm:w-auto">
            <Calendar className="w-5 h-5" />
            Schedule Demo Call
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 md:mt-24"
        >
          <p className="text-sm text-white/50 mb-4">Scroll to explore</p>
          <ArrowDown className="w-6 h-6 mx-auto text-nardiha-lime animate-bounce-slow" />
        </motion.div>
      </div>
    </section>
  )
}
