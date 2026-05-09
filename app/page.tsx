import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/landing/HeroSection'
import StatsSection from './components/landing/VideoSection'
import EbooksSection from './components/landing/CardsSection'
import ServicesSection from './components/landing/FeaturesSection'
import TemoignagesSection from './components/landing/TemoignagesSection'
import FaqSection from './components/landing/FaqSection'
import CtaFinalSection from './components/landing/CtaFinalSection'

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Dark purple-navy gradient background */}
      <div className="fixed inset-0 -z-10" style={{ background: 'linear-gradient(160deg, #0d0620 0%, #0a0416 40%, #050210 100%)' }} />

      {/* Subtle ambient glows */}
      <div className="fixed top-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl -z-10 pointer-events-none opacity-12"
        style={{ background: 'radial-gradient(circle, #0848aa, transparent 70%)' }} />
      <div className="fixed bottom-1/3 left-0 w-[500px] h-[500px] rounded-full blur-3xl -z-10 pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #05dde1, transparent 70%)' }} />

      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <EbooksSection />
        <ServicesSection />
        <TemoignagesSection />
        <FaqSection />
        <CtaFinalSection />
      </main>
      <Footer />
    </div>
  )
}
