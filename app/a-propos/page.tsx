import type { Metadata } from 'next'
import PageShell from '../components/shared/PageShell'
import AProposContent from './Content'

export const metadata: Metadata = {
  title: 'À propos | Provisual',
  description: 'Découvrez Provisual, l\'agence fondée par Dylan Parisi spécialisée en Marketing LinkedIn et Data Analytics pour les TPE, PME et indépendants.',
}

export default function AProposPage() {
  return (
    <PageShell>
      <AProposContent />
    </PageShell>
  )
}
