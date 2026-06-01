import type { Metadata } from 'next'
import PageShell from '../components/shared/PageShell'
import HeroSection from '../components/landing/HeroSection'
import StatsSection from '../components/landing/VideoSection'
import EbooksSection from '../components/landing/CardsSection'
import TemoignagesSection from '../components/landing/TemoignagesSection'
import FaqSection from '../components/landing/FaqSection'
import CtaFinalSection from '../components/landing/CtaFinalSection'

export const metadata: Metadata = {
  title: 'E-books LinkedIn | Provisual',
  description: 'Nos 7 e-books LinkedIn pour maîtriser la prospection, le contenu, le copywriting, l\'algorithme et optimiser votre profil.',
}

export default function EbooksPage() {
  return (
    <PageShell>
      <HeroSection />
      <StatsSection />
      <EbooksSection />
      <TemoignagesSection />
      <FaqSection />
      <CtaFinalSection />
    </PageShell>
  )
}
