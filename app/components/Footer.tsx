'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-nardiha-dark py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo & Name */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-nardiha-lime to-nardiha-cyan flex items-center justify-center">
              <span className="text-nardiha-black font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-display font-bold">
              NARDIHA PORTFOLIO
            </span>
          </Link>

          {/* Tagline */}
          <p className="text-sm text-white/50">
            Enterprise SaaS Acquisition Opportunities
          </p>

          {/* Company Info */}
          <div className="text-sm text-white/40 space-y-1">
            <p>NARDIHA Holdings OÜ | Estonia Registration: 16785919</p>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm text-white/50">
            <a
              href="/privacy"
              className="hover:text-nardiha-lime hover:underline transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span className="text-white/20">&middot;</span>
            <a
              href="/terms"
              className="hover:text-nardiha-lime hover:underline transition-colors duration-200"
            >
              Terms of Service
            </a>
            <span className="text-white/20">&middot;</span>
            <a
              href="/cookies"
              className="hover:text-nardiha-lime hover:underline transition-colors duration-200"
            >
              Cookie Policy
            </a>
          </div>

          {/* Tech Badge */}
          <p className="text-xs font-mono text-white/30 mt-4">
            Built with Next.js 15 & Tailwind CSS • Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
