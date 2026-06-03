import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://provisual.fr'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Provisual | Marketing LinkedIn & Data Analytics',
    template: '%s',
  },
  description:
    'Provisual, agence spécialisée en Marketing LinkedIn et Data Analytics pour TPE, PME et indépendants. Optimisation de profil, création de contenu, prospection et tableaux de bord data.',
  applicationName: 'Provisual',
  authors: [{ name: 'Dylan Parisi' }],
  creator: 'Provisual',
  publisher: 'Provisual',
  keywords: [
    'Marketing LinkedIn', 'agence LinkedIn', 'prospection LinkedIn', 'création de contenu LinkedIn',
    'optimisation profil LinkedIn', 'data analytics', 'tableaux de bord', 'Provisual', 'Dylan Parisi',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'Provisual',
    title: 'Provisual | Marketing LinkedIn & Data Analytics',
    description:
      'Des stratégies LinkedIn et data concrètes pour transformer votre présence en levier d\'opportunités.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Provisual — Marketing LinkedIn & Data Analytics' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Provisual | Marketing LinkedIn & Data Analytics',
    description:
      'Des stratégies LinkedIn et data concrètes pour transformer votre présence en levier d\'opportunités.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#organization`,
      name: 'Provisual',
      url: SITE_URL,
      image: `${SITE_URL}/og.png`,
      logo: `${SITE_URL}/og.png`,
      description:
        'Agence spécialisée en Marketing LinkedIn et Data Analytics pour TPE, PME et indépendants.',
      email: 'contact@provisual.fr',
      telephone: '+33632301115',
      founder: { '@type': 'Person', name: 'Dylan Parisi' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5 bis Rue des Allobroges',
        addressLocality: 'Grenoble',
        addressCountry: 'FR',
      },
      areaServed: 'FR',
      sameAs: ['https://www.linkedin.com/company/provisual'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Provisual',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'fr-FR',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
