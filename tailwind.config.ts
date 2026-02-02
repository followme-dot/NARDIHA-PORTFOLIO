import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nardiha-black': '#0a0a0a',
        'nardiha-dark': '#1a1a1a',
        'nardiha-lime': '#00ff9d',
        'nardiha-cyan': '#00d9ff',
        'nardiha-purple': '#b066ff',
      },
      fontFamily: {
        display: ['var(--font-cabinet)', 'var(--font-space-grotesk)', 'Inter', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'Courier New', 'monospace'],
        body: ['var(--font-inter)', 'Inter', '-apple-system', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'mesh-slow': 'mesh 20s ease infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 5s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'line-draw': 'line-draw 2s ease forwards',
      },
      keyframes: {
        mesh: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 157, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 255, 157, 0.8)' },
        },
        'gradient-shift': {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.25' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'line-draw': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse 80% 50% at 50% -20%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
    },
  },
  plugins: [],
}

export default config
