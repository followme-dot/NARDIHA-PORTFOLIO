'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail, Linkedin, MapPin } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative bg-nardiha-black py-32 md:py-40 px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cta-gradient" />
      <div className="absolute inset-0 opacity-5">
        <div className="bg-mesh animate-mesh-slow" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight"
        >
          Ready to Discuss
          <br />
          <span className="text-gradient">Acquisition?</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
        >
          Limited availability. Portfolio will be sold within 6 months.{' '}
          <span className="text-nardiha-lime font-medium">
            Serious buyers only.
          </span>
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12"
        >
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-nardiha-lime to-nardiha-cyan text-nardiha-black font-bold text-xl rounded-full transition-all duration-300 hover:scale-105 shadow-[0_30px_80px_rgba(0,255,157,0.6)] hover:shadow-[0_40px_100px_rgba(0,255,157,0.8)] animate-glow-pulse group"
          >
            Schedule 30-Minute Demo Call
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Secondary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8"
        >
          <p className="text-white/60 mb-4">
            Or download our detailed pitch deck:
          </p>
          <a
            href="/pitch-deck.pdf"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 border-2 border-nardiha-lime text-nardiha-lime font-semibold text-lg rounded-full hover:bg-nardiha-lime hover:text-nardiha-black transition-all duration-300 group"
          >
            <Download className="w-5 h-5" />
            Download PDF
            <span className="text-sm text-white/40 group-hover:text-nardiha-black/60">
              (email required)
            </span>
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <a
            href="mailto:info@ffollowme.com"
            className="flex items-center gap-3 text-lg text-white/80 hover:text-nardiha-lime transition-colors duration-300"
          >
            <Mail className="w-5 h-5 text-nardiha-lime" />
            info@ffollowme.com
          </a>
          <a
            href="https://linkedin.com/in/rafaelbaena"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-white/80 hover:text-nardiha-lime transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5 text-nardiha-lime" />
            linkedin.com/in/rafaelbaena
          </a>
          <div className="flex items-center gap-3 text-lg text-white/60">
            <MapPin className="w-5 h-5 text-nardiha-lime" />
            Estonia | Panama | Delaware
          </div>
        </motion.div>
      </div>
    </section>
  )
}
