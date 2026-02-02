import Hero from './components/Hero'
import TrustIndicators from './components/TrustIndicators'
import PlatformCategories from './components/PlatformCategories'
import FlagshipShowcase from './components/FlagshipShowcase'
import TechnicalSpecs from './components/TechnicalSpecs'
import BuyersProfile from './components/BuyersProfile'
import PricingStrategy from './components/PricingStrategy'
import Timeline from './components/Timeline'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <main className="bg-nardiha-black text-white overflow-x-hidden">
      <Hero />
      <TrustIndicators />
      <PlatformCategories />
      <FlagshipShowcase />
      <TechnicalSpecs />
      <BuyersProfile />
      <PricingStrategy />
      <Timeline />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
