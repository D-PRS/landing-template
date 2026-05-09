import Image from 'next/image'
import { Share2, Play, Globe, Camera } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Logo" width={32} height={32} className="rounded-lg" />
              <span className="font-black text-lg">
                Mon<span className="text-secondary"> Site</span>
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              La plateforme de référence pour atteindre vos objectifs et développer votre présence professionnelle.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: <Share2 className="w-4 h-4" /> },
                { icon: <Play className="w-4 h-4" /> },
                { icon: <Globe className="w-4 h-4" /> },
                { icon: <Camera className="w-4 h-4" /> },
              ].map((social, i) => (
                <a key={i} href="#"
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-secondary mb-4">Formations</h4>
            <ul className="space-y-2">
              {['Module Découverte — Gratuit', 'Module Vente & Prospection', 'Module Emploi & Carrière', 'Module Influence & Autorité'].map((label) => (
                <li key={label}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-secondary mb-4">Plateforme</h4>
            <ul className="space-y-2">
              {['Tarifs', 'Espace Pro', 'Communauté', 'Blog', 'Contact'].map((label) => (
                <li key={label}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-secondary mb-4">Légal</h4>
            <ul className="space-y-2">
              {['Mentions légales', 'Politique de confidentialité', "Conditions d'utilisation", 'Politique de remboursement'].map((label) => (
                <li key={label}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© 2026 Mon Site. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-sm">Fait avec ❤️ en France</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/40 text-xs">Tous systèmes opérationnels</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
