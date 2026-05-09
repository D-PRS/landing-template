import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/landing/HeroSection'
import VideoSection from './components/landing/VideoSection'
import FeaturesSection from './components/landing/FeaturesSection'
import CardsSection from './components/landing/CardsSection'
import TemoignagesSection from './components/landing/TemoignagesSection'
import PricingSection from './components/landing/PricingSection'
import FaqSection from './components/landing/FaqSection'
import CtaFinalSection from './components/landing/CtaFinalSection'

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-primary via-[#001540] to-primary -z-10" />
      <div className="fixed inset-0 -z-10" style={{ background: 'linear-gradient(to right, rgba(5,221,225,0.10), rgba(5,251,225,0.05))' }} />
      <div className="fixed top-[10%] right-[8%] w-[600px] h-[600px] rounded-full blur-3xl -z-10 pointer-events-none" style={{ backgroundColor: 'rgba(5,221,225,0.08)' }} />
      <div className="fixed top-[48%] left-[3%] w-[500px] h-[500px] rounded-full blur-3xl -z-10 pointer-events-none" style={{ backgroundColor: 'rgba(5,221,225,0.06)' }} />
      <div className="fixed bottom-[15%] right-[18%] w-[400px] h-[400px] rounded-full blur-3xl -z-10 pointer-events-none" style={{ backgroundColor: 'rgba(5,221,225,0.05)' }} />

      <Navbar />
      <main>
        <HeroSection />
        <VideoSection />
        <FeaturesSection />
        <CardsSection />
        <TemoignagesSection />
        <PricingSection />
        <FaqSection />
        <CtaFinalSection />
      </main>
      <Footer />
    </div>
  )
}
