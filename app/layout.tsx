import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nardiha-portfolio.com'),
  title: 'NARDIHA PORTFOLIO | $375M Enterprise SaaS Acquisition',
  description:
    '19 production-ready SaaS platforms. 400K+ LOC. 90% complete. DeFi, Gaming, Infrastructure, Enterprise. $375M-$425M valuation. Serious buyers only.',
  keywords: [
    'SaaS acquisition',
    'enterprise software for sale',
    'NARDIHA portfolio',
    'DeFi platform acquisition',
    'crypto software portfolio',
    '$375M software acquisition',
    'institutional crypto custody',
    'Web3 platform sale',
  ],
  authors: [{ name: 'NARDIHA Holdings OÜ' }],
  creator: 'NARDIHA Holdings OÜ',
  publisher: 'NARDIHA Holdings OÜ',
  openGraph: {
    title: 'NARDIHA PORTFOLIO | 19 Enterprise SaaS Platforms',
    description: '$375M-$425M portfolio. Ready for strategic acquisition.',
    url: 'https://nardiha-portfolio.com',
    siteName: 'NARDIHA PORTFOLIO',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NARDIHA Portfolio Overview',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NARDIHA PORTFOLIO | $375M SaaS Acquisition',
    description: '19 platforms. 400K+ LOC. 6 years Web3 development.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased">
        {/* Grain texture overlay */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
