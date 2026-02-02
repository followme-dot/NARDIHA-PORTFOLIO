# NARDIHA PORTFOLIO

Premium landing page for NARDIHA Holdings' $375M Enterprise SaaS Portfolio.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 11
- **Icons:** Lucide React

## Project Structure

```
/app
├── page.tsx                 # Main landing page
├── layout.tsx               # Root layout with SEO
├── globals.css              # Global styles
└── /components
    ├── Hero.tsx             # Hero section
    ├── TrustIndicators.tsx  # Trust badges
    ├── PlatformCategories.tsx # 4 vertical categories
    ├── FlagshipShowcase.tsx # Top 5 platforms
    ├── TechnicalSpecs.tsx   # Stats & tech stack
    ├── BuyersProfile.tsx    # Ideal acquirers
    ├── PricingStrategy.tsx  # Pricing options
    ├── Timeline.tsx         # Acquisition process
    ├── FAQ.tsx              # Common questions
    ├── FinalCTA.tsx         # Contact section
    └── Footer.tsx           # Footer
```

## Assets Needed

Add to `/public`:
- `og-image.png` (1200x630) - Social sharing image
- `favicon.ico` - Site favicon
- `pitch-deck.pdf` - Downloadable pitch deck

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/nardiha-portfolio)

## License

Proprietary - NARDIHA Holdings OÜ
