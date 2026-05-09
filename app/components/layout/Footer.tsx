import Image from 'next/image'
import { Link2, Mail, Phone } from 'lucide-react'

const CDN = 'https://cdn.prod.website-files.com/68ab2d1a568ed1d53d774d32'
const LOGO_URL = `${CDN}/68b5b4981ac3dc1f534fcdaa_Logo%20Provisual.png`

const LINKS = {
  'E-books': [
    { label: 'E-book Prospection', href: 'https://provisual.fr/e-books' },
    { label: 'E-book Création de contenu', href: 'https://provisual.fr/e-books' },
    { label: 'E-book Copywriting', href: 'https://provisual.fr/e-books' },
    { label: 'E-book Algorithme', href: 'https://provisual.fr/e-books' },
  ],
  'Services': [
    { label: 'Marketing LinkedIn', href: 'https://provisual.fr/service-marketing' },
    { label: 'Data & Analytics', href: 'https://provisual.fr/service-data-analytics' },
    { label: 'À propos', href: 'https://provisual.fr/a-propos' },
    { label: 'Contact', href: 'https://provisual.fr/contact' },
  ],
  'Légal': [
    { label: 'Mentions légales', href: 'https://provisual.fr/mentions-legales' },
    { label: "Conditions d'utilisation", href: 'https://provisual.fr/cgu' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="https://provisual.fr" target="_blank" rel="noopener noreferrer" className="inline-flex mb-5">
              <Image src={LOGO_URL} alt="Provisual" width={120} height={40} className="object-contain" unoptimized />
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Agence spécialisée en marketing LinkedIn et Data Analytics pour les TPE, PME et indépendants.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/provisual"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center text-white/60 hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-200"
              >
                <Link2 className="w-4 h-4" />
              </a>
              <a
                href="https://provisual.fr/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center text-white/60 hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center text-white/60 hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([section, items]) => (
            <div key={section}>
              <h4 className="font-bold text-xs uppercase tracking-widest text-secondary mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-secondary text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-sm">© 2025 Provisual. Tous droits réservés.</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/35 text-xs">Tous systèmes opérationnels</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
