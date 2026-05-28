'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Network, BarChart3, BookOpen, GraduationCap } from 'lucide-react'

const SERVICES = [
  {
    icon: Network,
    titre: 'Marketing LinkedIn',
    badge: 'Service phare',
    badgeColor: 'bg-secondary/20 text-secondary border-secondary/30',
    description: "Gestion complète de votre présence LinkedIn : optimisation de profil, création de contenu, prospection et ghostwriting. Je m'occupe de tout.",
    points: ['Optimisation profil perso & entreprise', 'Création & publication de contenu', 'Prospection manuelle & automatisée'],
    href: '/service-marketing',
    accentColor: '#05dde1',
    accentRgb: '5,221,225',
    floatDelay: 0,
    floatDuration: 3,
    gradient: 'from-secondary/10 to-transparent',
    bgGlow: 'rgba(5,221,225,0.06)',
  },
  {
    icon: BarChart3,
    titre: 'Hydra Analytics',
    badge: 'SAS LinkedIn',
    badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    description: 'Analyse approfondie de vos performances LinkedIn. Tableaux de bord, KPIs, insights actionnables pour piloter votre stratégie avec la data.',
    points: ['Tableau de bord KPIs LinkedIn', 'Analyse concurrentielle', 'Reporting mensuel détaillé'],
    href: '/service-data-analytics',
    accentColor: '#7c3aed',
    accentRgb: '124,58,237',
    floatDelay: 0.5,
    floatDuration: 3.8,
    gradient: 'from-violet-500/10 to-transparent',
    bgGlow: 'rgba(124,58,237,0.06)',
  },
  {
    icon: BookOpen,
    titre: 'Nos E-books',
    badge: '7 guides LinkedIn',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    description: 'Des guides pratiques et actionnables pour maîtriser LinkedIn à votre rythme : prospection, contenu, copywriting, algorithme et plus encore.',
    points: ['De débutant à expert LinkedIn', 'Méthodes testées sur le terrain', 'Mises à jour régulières incluses'],
    href: '/e-books',
    accentColor: '#f59e0b',
    accentRgb: '245,158,11',
    floatDelay: 1,
    floatDuration: 2.8,
    gradient: 'from-amber-500/10 to-transparent',
    bgGlow: 'rgba(245,158,11,0.06)',
  },
  {
    icon: GraduationCap,
    titre: 'Formations en entreprise',
    badge: 'Présentiel',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    description: 'Ateliers LinkedIn en présentiel pour former vos équipes. Demi-journée sur mesure, pratique guidée, attestation de formation délivrée.',
    points: ['Ateliers demi-journée en entreprise', 'Pratique guidée & cas concrets', 'Attestation de formation délivrée'],
    href: '/service-marketing#formations-entreprise',
    accentColor: '#10b981',
    accentRgb: '16,185,129',
    floatDelay: 1.5,
    floatDuration: 4.2,
    gradient: 'from-emerald-500/10 to-transparent',
    bgGlow: 'rgba(16,185,129,0.06)',
  },
]

export default function HomepageServices() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-5"
          style={{ background: 'radial-gradient(circle, #05dde1, transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest"
            style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
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

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.titre}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="relative rounded-3xl p-8 border border-white/10 h-full overflow-hidden group cursor-pointer"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    boxShadow: `0 0 0 1px rgba(${service.accentRgb},0.08)`,
                  }}
                >
                  {/* Glow BG au hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${service.bgGlow} 0%, transparent 70%)` }} />

                  {/* Gradient top-left */}
                  <div className={`absolute top-0 left-0 w-48 h-48 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl opacity-60 pointer-events-none`} />

                  {/* Bordure animée au hover */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: `0 0 0 1.5px ${service.accentColor}40, 0 0 30px ${service.accentColor}18` }}
                  />

                  <div className="relative z-10">
                    {/* Badge */}
                    <span className={`inline-block border text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider ${service.badgeColor}`}>
                      {service.badge}
                    </span>

                    {/* Icône flottante */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: service.floatDuration,
                        delay: service.floatDelay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border"
                      style={{
                        backgroundColor: `rgba(${service.accentRgb}, 0.1)`,
                        borderColor: `rgba(${service.accentRgb}, 0.2)`,
                        boxShadow: `0 0 20px rgba(${service.accentRgb}, 0.15)`,
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: service.accentColor }} />
                    </motion.div>

                    <h3 className="text-2xl font-black text-white mb-3">{service.titre}</h3>
                    <p className="text-white/60 leading-relaxed mb-6 text-sm">{service.description}</p>

                    {/* Points */}
                    <ul className="space-y-2 mb-8">
                      {service.points.map((p) => (
                        <li key={p} className="flex items-center gap-2.5 text-sm text-white/70">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: service.accentColor }} />
                          {p}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 font-semibold text-sm transition-colors group/link"
                      style={{ color: service.accentColor }}
                    >
                      Découvrir
                      <motion.span
                        className="inline-flex"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
