import type { Metadata } from 'next'
import PageShell from './components/shared/PageShell'
import HomepageHero from './components/home/HomepageHero'
import HomepageStats from './components/home/HomepageStats'
import HomepageServices from './components/home/HomepageServices'
import HomepageFormations from './components/home/HomepageFormations'
import TemoignagesSection from './components/landing/TemoignagesSection'
import HomepageCta from './components/home/HomepageCta'

export const metadata: Metadata = {
  title: 'Provisual | Marketing LinkedIn & Data Analytics',
  description: 'Boostez votre croissance avec Provisual : optimisation LinkedIn, stratégie marketing digital et data analytics pour PME et startups.',
}

export default function HomePage() {
  return (
    <PageShell>
      <HomepageHero />
      <HomepageStats />
      <HomepageServices />
      <HomepageFormations />
      <TemoignagesSection />
      <HomepageCta />
    </PageShell>
  )
}
