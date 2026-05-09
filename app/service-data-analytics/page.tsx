import type { Metadata } from 'next'
import PageShell from '../components/shared/PageShell'
import ServiceDataContent from './Content'

export const metadata: Metadata = {
  title: 'Data & Analytics | Provisual',
  description: 'Tableaux de bord Power BI, Looker Studio, automatisation Power Platform. Provisual transforme vos données en décisions stratégiques pour les TPE et PME.',
}

export default function ServiceDataPage() {
  return (
    <PageShell>
      <ServiceDataContent />
    </PageShell>
  )
}
