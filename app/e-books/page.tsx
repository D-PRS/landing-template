import type { Metadata } from 'next'
import PageShell from '../components/shared/PageShell'
import HeroSection from '../components/landing/HeroSection'
import StatsSection from '../components/landing/VideoSection'
import EbooksSection from '../components/landing/CardsSection'
import TemoignagesSection from '../components/landing/TemoignagesSection'
import FaqSection from '../components/landing/FaqSection'
import CtaFinalSection from '../components/landing/CtaFinalSection'
import { CLASSE_MENSUEL_TEXTE, PRIX_UNITE_MAX, PRIX_UNITE_MIN, STATS_ACADEMY, euros } from '../data/academy'

export const metadata: Metadata = {
  title: 'E-books LinkedIn | Provisual',
  description: `4 e-books LinkedIn à lire en ligne sur ProVisual Academy : Les bases de LinkedIn (gratuit), Vendre, Trouver un emploi et Devenir influent. À l'unité de ${euros(PRIX_UNITE_MIN)} à ${euros(PRIX_UNITE_MAX)}, ou tout inclus avec l'Espace Classe à ${CLASSE_MENSUEL_TEXTE}.`,
  alternates: { canonical: '/e-books' },
}

const SOUS_TITRE_TEMOIGNAGES = `Note moyenne de ${STATS_ACADEMY.note_moyenne}/5 et ${STATS_ACADEMY.taux_satisfaction} % d'apprenants satisfaits. Voici ce que disent nos clients.`

export default function EbooksPage() {
  return (
    <PageShell>
      <HeroSection />
      <StatsSection />
      <EbooksSection />
      <TemoignagesSection sousTitre={SOUS_TITRE_TEMOIGNAGES} />
      <FaqSection />
      <CtaFinalSection />
    </PageShell>
  )
}
