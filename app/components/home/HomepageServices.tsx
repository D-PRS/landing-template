'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Network, BarChart3, BookOpen, GraduationCap, CheckCircle2, TrendingUp, Users, Star } from 'lucide-react'

const CDN = 'https://cdn.prod.website-files.com/68ab2d1a568ed1d53d774d32'

/* ─── Visuels ─────────────────────────────────────────────────────────── */

function VisualMarketing() {
  return (
    <div className="relative h-full min-h-[320px] flex items-center justify-center overflow-hidden rounded-3xl"
      style={{ background: 'linear-gradient(135deg, rgba(0,32,96,0.6) 0%, rgba(5,221,225,0.08) 100%)' }}>
      <Image src="/bannieres/3.png" alt="" fill className="object-cover opacity-20" unoptimized />

      {/* Notifications flottantes */}
      <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-6 right-6 flex items-center gap-2 rounded-2xl border border-secondary/30 px-3 py-2 text-xs font-semibold text-white"
        style={{ backgroundColor: 'rgba(0,13,38,0.85)', backdropFilter: 'blur(10px)' }}>
        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
        +12 nouvelles connexions
      </motion.div>

      <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute bottom-8 left-6 flex items-center gap-2 rounded-2xl border border-white/15 px-3 py-2 text-xs text-white/80"
        style={{ backgroundColor: 'rgba(0,13,38,0.85)', backdropFilter: 'blur(10px)' }}>
        <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
        Profil dans le top 5% LinkedIn
      </motion.div>

      <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="absolute top-1/2 -translate-y-1/2 left-6 flex items-center gap-2 rounded-2xl border border-white/15 px-3 py-2 text-xs text-white/80"
        style={{ backgroundColor: 'rgba(0,13,38,0.85)', backdropFilter: 'blur(10px)' }}>
        <Users className="w-3.5 h-3.5 text-secondary" />
        +340 vues ce mois
      </motion.div>

      <div className="relative z-10 text-center">
        <Network className="w-14 h-14 text-secondary mx-auto mb-3 opacity-80" />
        <p className="text-white/50 text-xs uppercase tracking-widest">Marketing LinkedIn</p>
      </div>
    </div>
  )
}

function VisualHydra() {
  const bars = [55, 72, 48, 85, 63, 91, 70, 82]
  return (
    <div className="relative h-full min-h-[320px] flex flex-col justify-end items-stretch p-8 rounded-3xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgba(10,58,138,0.5) 0%, rgba(26,111,212,0.12) 100%)' }}>
      <div className="absolute top-6 left-8 right-8">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-secondary" />
          <p className="text-secondary text-xs font-semibold uppercase tracking-widest">Hydra — KPIs LinkedIn</p>
        </div>
        <div className="flex gap-6 mt-3">
          {[{ label: 'Impressions', val: '28.4K' }, { label: 'Taux engagement', val: '6.2%' }, { label: 'Leads générés', val: '47' }].map((kpi) => (
            <div key={kpi.label}>
              <p className="text-white font-black text-lg leading-none">{kpi.val}</p>
              <p className="text-white/40 text-[10px] mt-0.5">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Barres animées */}
      <div className="flex items-end gap-2 h-28">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-lg"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: 'easeOut' }}
            style={{ backgroundColor: `rgba(5,221,225,${0.25 + i * 0.08})` }}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-1">
        {['L','M','M','J','V','S','D','L'].map((d, i) => (
          <p key={i} className="flex-1 text-center text-[9px] text-white/25">{d}</p>
        ))}
      </div>
    </div>
  )
}

function VisualEbooks() {
  const covers = [
    `${CDN}/68c312c07965f332a429837b_1.png`,
    `${CDN}/68c31283c9c6ed064f402c66_2.png`,
    `${CDN}/68c31290481cb19d6699624d_3.png`,
  ]
  return (
    <div className="relative h-full min-h-[320px] flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, rgba(0,20,58,0.5) 0%, rgba(5,251,225,0.05) 100%)', borderRadius: '24px' }}>
      {covers.map((src, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -(4 + i * 2), 0] }}
          transition={{ duration: 2.8 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
          className="absolute rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          style={{
            width: 110 - i * 10,
            left: `${18 + i * 24}%`,
            zIndex: 3 - i,
            transform: `rotate(${-6 + i * 6}deg)`,
          }}
        >
          <Image src={src} alt={`E-book ${i + 1}`} width={110} height={155} className="w-full h-auto" unoptimized />
        </motion.div>
      ))}
    </div>
  )
}

function VisualFormation() {
  return (
    <div className="relative h-full min-h-[320px] rounded-3xl overflow-hidden">
      <Image src="/formation-physique/formation.jpg" alt="Formation LinkedIn en entreprise" fill className="object-cover" unoptimized />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,13,38,0.15), transparent)' }} />
    </div>
  )
}

/* ─── Données ─────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    icon: Network,
    titre: 'Marketing LinkedIn',
    badge: 'Service phare',
    badgeStyle: { backgroundColor: 'rgba(5,221,225,0.15)', color: '#05dde1', borderColor: 'rgba(5,221,225,0.3)' },
    description: "Gestion complète de votre présence LinkedIn : optimisation de profil, création de contenu, prospection et ghostwriting. Je m'occupe de tout, vous vous concentrez sur votre cœur de métier.",
    points: ['Optimisation profil perso & entreprise', 'Création & publication de contenu', 'Prospection manuelle & automatisée'],
    href: '/service-marketing',
    accentColor: '#05dde1',
    accentRgb: '5,221,225',
    Visual: VisualMarketing,
    visualRight: true,
  },
  {
    icon: BarChart3,
    titre: 'Hydra Analytics',
    badge: 'SAS LinkedIn',
    badgeStyle: { backgroundColor: 'rgba(26,111,212,0.15)', color: '#1a6fd4', borderColor: 'rgba(26,111,212,0.3)' },
    description: 'Analyse approfondie de vos performances LinkedIn. Tableaux de bord sur mesure, KPIs clés et insights actionnables pour piloter votre stratégie avec la data.',
    points: ['Tableau de bord KPIs LinkedIn', 'Analyse concurrentielle', 'Reporting mensuel détaillé'],
    href: '/service-data-analytics',
    accentColor: '#1a6fd4',
    accentRgb: '26,111,212',
    Visual: VisualHydra,
    visualRight: false,
  },
  {
    icon: BookOpen,
    titre: 'Nos E-books LinkedIn',
    badge: '7 guides',
    badgeStyle: { backgroundColor: 'rgba(5,251,225,0.12)', color: '#05fbe1', borderColor: 'rgba(5,251,225,0.3)' },
    description: "Des guides pratiques et actionnables pour maîtriser LinkedIn à votre rythme. Prospection, contenu, copywriting, algorithme — des méthodes testées sur le terrain, applicables dès la première lecture.",
    points: ['De débutant à expert LinkedIn', 'Méthodes testées sur le terrain', 'Mises à jour régulières incluses'],
    href: '/e-books',
    accentColor: '#05fbe1',
    accentRgb: '5,251,225',
    Visual: VisualEbooks,
    visualRight: true,
  },
  {
    icon: GraduationCap,
    titre: 'Formations en entreprise',
    badge: 'Présentiel',
    badgeStyle: { backgroundColor: 'rgba(5,221,225,0.1)', color: '#05dde1', borderColor: 'rgba(5,221,225,0.25)' },
    description: "J'interviens directement dans vos locaux pour former vos équipes à LinkedIn. Ateliers pratiques en demi-journée, sur mesure, attestation de formation délivrée.",
    points: ['Ateliers demi-journée en présentiel', 'Pratique guidée sur vos profils', 'Attestation de formation délivrée'],
    href: '/service-marketing#formations-entreprise',
    accentColor: '#05dde1',
    accentRgb: '5,221,225',
    Visual: VisualFormation,
    visualRight: false,
  },
]

/* ─── Composant ───────────────────────────────────────────────────────── */
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

        <div className="space-y-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            const { Visual } = service
            return (
              <motion.div
                key={service.titre}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="group relative rounded-3xl border border-white/8 overflow-hidden"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)', boxShadow: `0 0 0 1px rgba(${service.accentRgb},0.07)` }}
              >
                {/* Glow hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{ boxShadow: `0 0 0 1.5px rgba(${service.accentRgb},0.3), 0 0 40px rgba(${service.accentRgb},0.08)` }} />

                <div className={`grid lg:grid-cols-2 ${service.visualRight ? '' : 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'}`}>
                  {/* Texte */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <span className="inline-block border text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider w-fit"
                      style={service.badgeStyle}>
                      {service.badge}
                    </span>

                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-12 h-12 rounded-2xl flex items-center justify-center border flex-shrink-0"
                        style={{ backgroundColor: `rgba(${service.accentRgb}, 0.1)`, borderColor: `rgba(${service.accentRgb}, 0.2)` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: service.accentColor }} />
                      </motion.div>
                      <h3 className="text-2xl lg:text-3xl font-black text-white">{service.titre}</h3>
                    </div>

                    <p className="text-white/60 leading-relaxed mb-6 text-sm lg:text-base">{service.description}</p>

                    <ul className="space-y-2 mb-8">
                      {service.points.map((p) => (
                        <li key={p} className="flex items-center gap-2.5 text-sm text-white/70">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: service.accentColor }} />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <Link href={service.href}
                      className="inline-flex items-center gap-2 font-bold text-sm w-fit"
                      style={{ color: service.accentColor }}>
                      Découvrir
                      <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </Link>
                  </div>

                  {/* Visuel */}
                  <div className="p-4 lg:p-6">
                    <Visual />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
