'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: '400K+', label: 'Lines of Code' },
  { value: '19', label: 'Platforms' },
  { value: '$15M', label: 'Development Cost' },
  { value: '90%', label: 'Complete' },
  { value: '7-8', label: 'Weeks to Deploy' },
  { value: '20+', label: 'Chains Supported' },
]

const techStack = [
  'Solidity',
  'Rust',
  'Python',
  'TypeScript',
  'Go',
  'Next.js',
  'React',
  'PostgreSQL',
  'Redis',
  'Kafka',
  'AWS',
  'Kubernetes',
  'Docker',
  'Terraform',
  'GitHub Actions',
  'Claude 3.5',
  'PyTorch',
  'LayerZero',
  'Chainlink',
  'Fireblocks',
]

function AnimatedNumber({ value, inView }: { value: string; inView: boolean }) {
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

export default function TechnicalSpecs() {
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true, amount: 0.3 })

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
          <h2 className="section-header">By The Numbers</h2>
          <p className="section-subheader">
            Technical overview for engineering teams
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="stat-card"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-mono text-nardiha-lime font-semibold">
                <AnimatedNumber value={stat.value} inView={isInView} />
              </p>
              <p className="text-base md:text-lg text-white/60 mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">
            Tech Stack Highlights
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true, amount: 0.3 }}
                className="tech-badge"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
