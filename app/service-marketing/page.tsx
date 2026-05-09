import type { Metadata } from 'next'
import PageShell from '../components/shared/PageShell'
import ServiceMarketingContent from './Content'

export const metadata: Metadata = {
  title: 'Marketing LinkedIn | Provisual',
  description: 'Optimisation de profil, création de contenu, animation de réseau. Provisual développe votre visibilité LinkedIn et génère des opportunités business concrètes.',
}

export default function ServiceMarketingPage() {
  return (
    <PageShell>
      <ServiceMarketingContent />
    </PageShell>
  )
}
