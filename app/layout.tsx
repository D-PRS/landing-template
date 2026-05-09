import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Provisual | E-books LinkedIn — Guides pratiques pour performer',
  description: 'Téléchargez nos e-books LinkedIn : prospection, contenu, copywriting, optimisation de profil et algorithme. Des guides clairs et actionnables pour booster vos résultats.',
  openGraph: {
    title: 'Provisual | E-books LinkedIn',
    description: 'Des guides clairs, éprouvés, directement applicables pour performer sur LinkedIn.',
    images: ['https://cdn.prod.website-files.com/68ab2d1a568ed1d53d774d32/68b81133a875173eed46a60b_Open%20graph.png'],
  },
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
