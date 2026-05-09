import type { Metadata } from 'next'
import PageShell from '../components/shared/PageShell'
import ContactContent from './Content'

export const metadata: Metadata = {
  title: 'Contact | Provisual',
  description: 'Contactez Provisual pour vos projets Marketing LinkedIn et Data Analytics. Appel gratuit de 30 minutes disponible.',
}

export default function ContactPage() {
  return (
    <PageShell>
      <ContactContent />
    </PageShell>
  )
}
