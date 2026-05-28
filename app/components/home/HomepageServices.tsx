'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Network, BarChart3, BookOpen, GraduationCap, CheckCircle2, TrendingUp, Target, PenSquare } from 'lucide-react'

const CDN = 'https://cdn.prod.website-files.com/68ab2d1a568ed1d53d774d32'

const SERVICES = [
  {
    icon: Network,
    titre: 'Marketing LinkedIn',
    badge: 'Service phare',
    description: "Gestion complète de votre présence LinkedIn : optimisation de profil, création de contenu percutant, prospection et ghostwriting. Je m'occupe de tout pour que vous vous concentriez sur votre cœur de métier.",
    points: [
      'Optimisation profil personnel & entreprise',
      'Création & publication de contenu',
      'Prospection manuelle & automatisée',
      'Ghostwriting à votre voix',
    ],
    href: '/service-marketing',
    ctaLabel: 'Découvrir la prestation',
    accentColor: '#05dde1',
    accentRgb: '5,221,225',
    image: { src: '/avant-apres/15bis.png', alt: 'Profil LinkedIn optimisé par Provisual', unoptimized: true },
    imageRight: false,
  },
  {
    icon: BarChart3,
    titre: 'Hydra Analytics',
    badge: 'SAS LinkedIn',
    description: "Analyse approfondie de vos performances LinkedIn. Tableaux de bord sur mesure, KPIs clés et insights actionnables pour piloter votre stratégie avec la data et prendre des décisions éclairées.",
    points: [
      'Tableau de bord KPIs LinkedIn',
      'Analyse concurrentielle',
      'Reporting mensuel détaillé',
      'Recommandations stratégiques',
    ],
    href: '/service-data-analytics',
    ctaLabel: 'Découvrir Hydra',
    accentColor: '#3357a7',
    accentRgb: '51,87,167',
    image: { src: `${CDN}/68c312c07965f332a429837b_1.png`, alt: 'Hydra Analytics LinkedIn', unoptimized: true },
    imageRight: true,
    imageFallback: true,
  },
  {
    icon: BookOpen,
    titre: 'Nos E-books',
    badge: '7 guides LinkedIn',
    description: "Des guides pratiques et actionnables pour maîtriser LinkedIn à votre rythme. Prospection, contenu, copywriting, algorithme — des méthodes testées sur le terrain, applicables dès la première lecture.",
    points: [
      'De débutant à expert LinkedIn',
      'Méthodes testées sur le terrain',
      'Mises à jour régulières incluses',
      'Applicables dès la première lecture',
    ],
    href: '/e-books',
    ctaLabel: 'Voir les e-books',
    accentColor: '#05fbe1',
    accentRgb: '5,251,225',
    image: { src: `${CDN}/68c312c07965f332a429837b_1.png`, alt: 'E-books LinkedIn Provisual', unoptimized: true },
    imageRight: false,
  },
  {
    icon: GraduationCap,
    titre: 'Formations en entreprise',
    badge: 'Présentiel',
    description: "J'interviens directement dans vos locaux pour former vos équipes à LinkedIn. Des ateliers pratiques en demi-journée, sur mesure, avec attestation de formation délivrée.",
    points: [
      'Ateliers demi-journée en présentiel',
      'Pratique guidée sur vos vrais profils',
      'Attestation de formation délivrée',
      'Bientôt finançable OPCO & CPF',
    ],
    href: '/service-marketing#formations-entreprise',
    ctaLabel: 'En savoir plus',
    accentColor: '#05dde1',
    accentRgb: '5,221,225',
    image: { src: '/formation-physique/formation.jpg', alt: 'Formation LinkedIn en entreprise', unoptimized: true },
    imageRight: true,
  },
]

export default function HomepageServices() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span
            className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest"
            style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}
          >
            Mes offres
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Une expertise,{' '}
            <span className="gradient-text">4 offres LinkedIn</span>
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto">
            Du LinkedIn sous toutes ses formes — pour les indépendants, TPE et PME qui veulent vraiment performer.
          </p>
        </motion.div>

        <div className="space-y-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            const imgLeft = !service.imageRight
            return (
              <motion.div
                key={service.titre}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/8"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                {/* Image */}
                <div className={`relative aspect-[16/9] lg:aspect-auto lg:min-h-[380px] overflow-hidden ${imgLeft ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    className="object-cover object-top"
                    unoptimized={service.image.unoptimized}
                  />
                  {/* Overlay couleur marque */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, rgba(0,32,96,0.55) 0%, rgba(${service.accentRgb},0.12) 100%)`,
                    }}
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border"
                      style={{
                        backgroundColor: `rgba(${service.accentRgb}, 0.15)`,
                        borderColor: `rgba(${service.accentRgb}, 0.4)`,
                        color: service.accentColor,
                      }}
                    >
                      <Icon className="w-3 h-3" />
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Texte */}
                <div className={`p-8 lg:p-10 flex flex-col justify-center ${imgLeft ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border"
                    style={{
                      backgroundColor: `rgba(${service.accentRgb}, 0.1)`,
                      borderColor: `rgba(${service.accentRgb}, 0.2)`,
                    }}
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Icon className="w-6 h-6" style={{ color: service.accentColor }} />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 leading-tight">
                    {service.titre}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6 text-sm lg:text-base">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {service.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: service.accentColor }} />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 font-bold text-sm transition-colors group/link w-fit"
                    style={{ color: service.accentColor }}
                  >
                    {service.ctaLabel}
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
