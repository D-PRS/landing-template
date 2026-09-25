'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// Même capsule que l'accueil de ProVisual Academy (HeroSection) : logos recalibrés au même poids
// visuel dans public/logos-clients/cal (canevas 480 x 240, contenu centré, boîte d'environ 22 500 px²).
const CLIENT_LOGOS = [
  { fichier: 'erac', nom: 'ERAC Human Services' },
  { fichier: 'infinity-views', nom: 'Infinity Views' },
  { fichier: 'wallswiss', nom: 'WallSwiss' },
  { fichier: 'infastor', nom: 'Infastor' },
  { fichier: 'all-in', nom: 'ALL-IN Mental Coaching' },
  { fichier: 'maison', nom: 'Client ProVisual' },
  { fichier: 'ruban-a', nom: 'Client ProVisual' },
  { fichier: 'omnia', nom: 'Omnia' },
  { fichier: 'swisssafecomply', nom: 'SwissSafeComply' },
  { fichier: 'sn-clean-auto', nom: 'SN Clean Auto' },
  { fichier: 'zendeo', nom: 'Zendeo' },
  { fichier: 'pnc-conseil', nom: 'PnC Conseil' },
  { fichier: 'swoosh-c', nom: 'Client ProVisual' },
  { fichier: 'data-major', nom: 'Data Major' },
  { fichier: 'actionpro', nom: 'ActionPro' },
  { fichier: 'linkxp', nom: 'LinkXP' },
]

export default function LogoSlider() {
  return (
    <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <p className="text-center text-white/55 text-xs sm:text-sm mb-6 font-semibold uppercase tracking-[0.2em]">
        Des professionnels de ces entreprises nous font confiance
      </p>

      {/* Capsule blanche flottante, légèrement inclinée, fondue sur les bords */}
      <div className="relative max-w-6xl mx-auto -rotate-[1.5deg]">
        <div
          aria-hidden
          className="absolute -inset-x-6 -inset-y-4 rounded-[40px] blur-2xl opacity-60 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(5,221,225,0.35), transparent 70%)' }}
        />
        <div className="relative rounded-[28px] bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/60 overflow-hidden">
          <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/70 to-transparent" />
          <div
            className="py-5 sm:py-6"
            style={{
              WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
              maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
            }}
          >
            {/* La piste est doublée et remplie d'un écart final : un tour = exactement une liste, sans saut. */}
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
              className="flex gap-10 sm:gap-14 pr-10 sm:pr-14 items-center rotate-[1.5deg]"
              style={{ width: 'max-content' }}
            >
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
                <div key={`${logo.fichier}-${i}`} className="w-28 h-14 sm:w-36 sm:h-[72px] relative flex-shrink-0">
                  <Image
                    src={`/logos-clients/cal/${logo.fichier}.png`}
                    alt={logo.nom}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
