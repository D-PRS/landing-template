'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight, Calendar, BarChart3, LineChart,
  TrendingUp, Zap, Users, Search, MapPin,
  Globe, Clock, Target, ArrowLeftRight,
} from 'lucide-react'
import LinkedInGlobe from '../components/home/LinkedInGlobe'
import TemoignagesSection from '../components/landing/TemoignagesSection'

/* ─── Features data ──────────────────────────────────────────────────── */
const FEATURES = [
  {
    num: '01',
    icon: BarChart3,
    titre: 'Dashboard & Analytics',
    description: "Hydra vous donne une vision complète de votre présence LinkedIn. Suivez vos vues de profil, connexions, abonnés et la performance de vos posts en temps réel depuis un tableau de bord centralisé.",
    metrics: [
      { icon: Search, label: 'Vues de profil', value: '+312' },
      { icon: Users, label: 'Connexions', value: '+61' },
      { icon: TrendingUp, label: 'Abonnés', value: '+61' },
    ],
    accentRgb: '5,221,225',
    floatDuration: 3,
  },
  {
    num: '02',
    icon: Zap,
    titre: 'Extension Chrome',
    description: "Notre extension Chrome récupère vos données LinkedIn en toute sécurité. Connectez votre compte et synchronisez vos données analytiques en un seul clic — sans configuration complexe.",
    metrics: [
      { icon: Target, label: 'Installation', value: '1 clic' },
      { icon: Zap, label: 'Sync', value: 'Temps réel' },
      { icon: Target, label: 'Sécurité', value: '100%' },
    ],
    accentRgb: '26,111,212',
    floatDuration: 3.4,
  },
  {
    num: '03',
    icon: Globe,
    titre: 'Analytics Global',
    description: "Hydra vous offre une vue stratégique de votre performance sur LinkedIn en temps réel. Croissance de l'audience, interactions, localisation de votre communauté à l'international.",
    metrics: [
      { icon: MapPin, label: 'Pays couverts', value: 'Mondial' },
      { icon: Users, label: 'Audience', value: '+∞' },
      { icon: TrendingUp, label: 'Croissance', value: '↑ Live' },
    ],
    accentRgb: '5,251,225',
    floatDuration: 2.8,
  },
  {
    num: '04',
    icon: LineChart,
    titre: 'Analyse des Posts',
    description: "Hydra analyse vos publications en temps réel. Identifiez les pics d'audience, les moments clés d'engagement et comprenez précisément à quelle heure votre contenu génère le plus de performance.",
    metrics: [
      { icon: Clock, label: 'Meilleur moment', value: 'Auto' },
      { icon: Search, label: 'Impressions', value: '↑ Réel' },
      { icon: Target, label: 'Engagement', value: 'Tracé' },
    ],
    accentRgb: '5,221,225',
    floatDuration: 3.8,
  },
  {
    num: '05',
    icon: ArrowLeftRight,
    titre: 'Comparaison de Posts',
    description: "Comparez vos publications entre elles. Hydra analyse les données collectées et classe vos contenus dans un tableau comparatif clair. Identifiez instantanément les publications les plus performantes.",
    metrics: [
      { icon: ArrowLeftRight, label: 'Comparatif', value: 'Clair' },
      { icon: TrendingUp, label: 'Classement', value: 'Auto' },
      { icon: Target, label: 'Optimisation', value: 'Guidée' },
    ],
    accentRgb: '26,111,212',
    floatDuration: 3.2,
  },
]

/* ─── Page ───────────────────────────────────────────────────────────── */
export default function ServiceDataContent() {
  return (
    <>
      {/* ══ HERO — Titre centré ══ */}
      <section className="relative pt-28 pb-8 overflow-hidden text-center">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none opacity-12"
          style={{ background: 'radial-gradient(circle, #05dde1, transparent)' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-secondary/30 rounded-full px-4 py-1.5 mb-8"
            style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
            <BarChart3 className="w-3.5 h-3.5 text-secondary" />
            <span className="text-secondary text-xs font-semibold uppercase tracking-widest">SAS LinkedIn</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
            Hydra{' '}
            <span className="gradient-text">Analytics</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/65 leading-relaxed mb-10 max-w-2xl mx-auto">
            Vision complète de votre présence LinkedIn. Suivez vos vues de profil, connexions, abonnés et la performance de vos posts en temps réel.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(5,221,225,0.45)' }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-secondary text-primary font-black px-8 py-4 rounded-2xl text-base shadow-glow hover:bg-tertiary transition-all duration-200">
              <Calendar className="w-5 h-5" /> Demander une démo
            </motion.a>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl text-base hover:bg-white/5 transition-all duration-200">
              Nous écrire <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══ GLOBE centré ══ */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <LinkedInGlobe messages={[
              '15 likes à 11H02',
              'Visite de profil à 10H55',
              '+8 abonnés aujourd\'hui',
              '3 commentaires à 14H30',
              'Pic d\'audience à 9H00',
              '+124 impressions ce post',
              'Nouveau record de vues',
            ]} />
          </motion.div>
        </div>
      </section>

      {/* ══ VIDÉO — petite, côté, coming soon ══ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Texte gauche */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-widest"
                style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
                Accès anticipé
              </span>
              <h2 className="text-4xl font-black text-white mb-5 leading-tight">
                Hydra arrive{' '}
                <span className="gradient-text">bientôt</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 text-lg">
                Le SAS Hydra est actuellement en développement. Rejoignez la file d&apos;attente pour être parmi les premiers à accéder à la plateforme et bénéficier d&apos;un tarif préférentiel.
              </p>
              <motion.a
                href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit"
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(5,221,225,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-secondary text-primary font-black px-7 py-3.5 rounded-2xl text-sm shadow-glow hover:bg-tertiary transition-all duration-200">
                <Users className="w-4 h-4" /> Rejoindre la file d&apos;attente
              </motion.a>
            </motion.div>

            {/* Vidéo droite — petite + overlay coming soon */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
              className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 max-w-md mx-auto"
                style={{ boxShadow: '0 0 40px rgba(0,0,0,0.5)' }}>
                {/* Vidéo grisée */}
                <video src="/videos/hydra.mp4" autoPlay muted loop playsInline className="w-full h-auto block"
                  style={{ filter: 'grayscale(80%) brightness(0.5)', pointerEvents: 'none' }} />

                {/* Overlay "Bientôt disponible" */}
                <div className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ background: 'rgba(0,13,38,0.55)', backdropFilter: 'blur(2px)' }}>
                  <motion.div
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-center px-6">
                    <div className="inline-flex items-center gap-2 border border-secondary/40 rounded-full px-5 py-2.5 mb-4"
                      style={{ backgroundColor: 'rgba(5,221,225,0.12)' }}>
                      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      <span className="text-secondary font-bold text-sm uppercase tracking-wider">Bientôt disponible</span>
                    </div>
                    <p className="text-white/60 text-xs">Accès anticipé en cours de déploiement</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ FEATURES — sans images, bento-style ══ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <span className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest"
              style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
              Fonctionnalités
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              Tout ce que <span className="gradient-text">Hydra fait pour vous</span>
            </h2>
            <p className="text-lg text-white/55 max-w-2xl mx-auto">
              Un SAS complet pour analyser, comprendre et optimiser votre stratégie LinkedIn avec la data.
            </p>
          </motion.div>

          <div className="space-y-4">
            {FEATURES.map((feat, i) => {
              const Icon = feat.icon
              return (
                <motion.div
                  key={feat.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group rounded-3xl border border-white/8 overflow-hidden"
                  style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{ boxShadow: `0 0 0 1.5px rgba(${feat.accentRgb},0.3), 0 0 40px rgba(${feat.accentRgb},0.06)` }} />

                  <div className="relative p-8 lg:p-10">
                    <div className="grid lg:grid-cols-[auto_1fr_auto] gap-8 items-center">

                      {/* Numéro + icône */}
                      <div className="flex items-center gap-5">
                        <span className="text-5xl font-black opacity-20 gradient-text tabular-nums leading-none">{feat.num}</span>
                        <motion.div
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: feat.floatDuration, repeat: Infinity, ease: 'easeInOut' }}
                          className="w-16 h-16 rounded-2xl flex items-center justify-center border flex-shrink-0"
                          style={{
                            backgroundColor: `rgba(${feat.accentRgb}, 0.1)`,
                            borderColor: `rgba(${feat.accentRgb}, 0.25)`,
                            boxShadow: `0 0 24px rgba(${feat.accentRgb}, 0.15)`,
                          }}>
                          <Icon className="w-7 h-7" style={{ color: `rgb(${feat.accentRgb})` }} />
                        </motion.div>
                      </div>

                      {/* Texte */}
                      <div>
                        <h3 className="text-2xl font-black text-white mb-2">{feat.titre}</h3>
                        <p className="text-white/55 leading-relaxed text-sm max-w-xl">{feat.description}</p>
                      </div>

                      {/* Métriques flottantes */}
                      <div className="hidden lg:flex flex-col gap-2 flex-shrink-0">
                        {feat.metrics.map((m, mi) => {
                          const MIcon = m.icon
                          return (
                            <motion.div
                              key={m.label}
                              animate={{ y: [0, -(3 + mi * 2), 0] }}
                              transition={{ duration: 2.2 + mi * 0.4, repeat: Infinity, ease: 'easeInOut', delay: mi * 0.3 }}
                              className="flex items-center gap-2.5 rounded-xl px-4 py-2.5 border border-white/8"
                              style={{ backgroundColor: `rgba(${feat.accentRgb}, 0.06)` }}>
                              <MIcon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: `rgb(${feat.accentRgb})` }} />
                              <span className="text-white/50 text-xs">{m.label}</span>
                              <span className="text-white font-bold text-xs ml-auto pl-3" style={{ color: `rgb(${feat.accentRgb})` }}>{m.value}</span>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ TÉMOIGNAGES ══ */}
      <TemoignagesSection />

      {/* ══ CTA FINAL ══ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #05dde1 0%, #002060 50%, transparent 80%)' }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Prêt à piloter votre{' '}
              <span className="gradient-text">LinkedIn avec la data ?</span>
            </h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              Rejoignez la liste d&apos;attente et soyez parmi les premiers à accéder à Hydra Analytics.
            </p>
            <motion.a href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-secondary text-primary font-black text-lg px-10 py-5 rounded-2xl shadow-glow hover:bg-tertiary transition-all duration-200">
              <Users className="w-5 h-5" /> Rejoindre la file d&apos;attente
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
