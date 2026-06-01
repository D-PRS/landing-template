'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight, Calendar, Lock, Network, BarChart3, GraduationCap,
  CheckCircle2, Search, Users, Award, Star, TrendingUp,
} from 'lucide-react'
import LinkedInGlobe from './LinkedInGlobe'

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 1 — MARKETING LINKEDIN
   Texte gauche / collage publications + bannières + notifications droit
═══════════════════════════════════════════════════════════════════════ */
function SectionMarketing() {
  return (
    <section className="py-20 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-widest"
              style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
              Service phare
            </span>

            <div className="flex items-center gap-3 mb-5">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center border border-secondary/20 flex-shrink-0"
                style={{ backgroundColor: 'rgba(5,221,225,0.1)' }}>
                <Network className="w-6 h-6 text-secondary" />
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                Marketing <span className="gradient-text">LinkedIn</span>
              </h2>
            </div>

            <p className="text-white/60 leading-relaxed mb-6 text-base">
              Gestion complète de votre présence LinkedIn : optimisation de profil, création de contenu percutant, prospection et ghostwriting. Je m&apos;occupe de tout pour que vous vous concentriez sur votre cœur de métier.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Optimisation profil perso & entreprise',
                'Création & publication de contenu',
                'Prospection manuelle & automatisée',
                'Ghostwriting à votre voix',
              ].map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            <Link href="/service-marketing"
              className="inline-flex items-center gap-2 text-secondary font-bold text-sm">
              Découvrir la prestation
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>

          {/* Collage visuel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative h-[480px]"
          >
            {/* Bannière fond */}
            <div className="absolute top-0 left-0 right-0 h-32 rounded-2xl overflow-hidden">
              <Image src="/bannieres/3.png" alt="" fill className="object-cover opacity-60" unoptimized />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, #000d26)' }} />
            </div>

            {/* Publications flottantes */}
            {[
              { src: '/publications/33.png', style: { top: '80px', left: '0%', width: '42%', rotate: '-3deg', zIndex: 3 }, delay: 0 },
              { src: '/publications/37.png', style: { top: '60px', left: '32%', width: '40%', rotate: '2deg', zIndex: 4 }, delay: 0.5 },
              { src: '/publications/40.png', style: { top: '90px', right: '0%', width: '38%', rotate: '-1deg', zIndex: 3 }, delay: 0.9 },
              { src: '/publications/42.png', style: { bottom: '20px', left: '5%', width: '36%', rotate: '3deg', zIndex: 2 }, delay: 0.3 },
              { src: '/publications/38.png', style: { bottom: '10px', right: '5%', width: '38%', rotate: '-2deg', zIndex: 2 }, delay: 0.7 },
            ].map((pub, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -(4 + i * 2), 0] }}
                transition={{ duration: 2.8 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: pub.delay }}
                className="absolute rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                style={{ ...pub.style as React.CSSProperties }}
              >
                <Image src={pub.src} alt="" width={200} height={250} className="w-full h-auto" unoptimized />
              </motion.div>
            ))}

            {/* Notification flottante */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-2xl border border-secondary/30 px-3 py-2 text-xs font-semibold text-white"
              style={{ backgroundColor: 'rgba(0,13,38,0.9)', backdropFilter: 'blur(12px)' }}>
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              +340 vues ce mois
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-2xl border border-white/15 px-3 py-2 text-xs text-white/80"
              style={{ backgroundColor: 'rgba(0,13,38,0.9)', backdropFilter: 'blur(12px)' }}>
              <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
              Top 5% des profils LinkedIn
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 2 — HYDRA ANALYTICS
   Texte gauche / globe 3D droit (réutilise LinkedInGlobe)
═══════════════════════════════════════════════════════════════════════ */
function SectionHydra() {
  return (
    <section className="py-20 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-16 items-center">

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block border text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-widest"
              style={{ backgroundColor: 'rgba(26,111,212,0.12)', color: '#1a6fd4', borderColor: 'rgba(26,111,212,0.3)' }}>
              SAS LinkedIn
            </span>

            <div className="flex items-center gap-3 mb-5">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center border flex-shrink-0"
                style={{ backgroundColor: 'rgba(26,111,212,0.1)', borderColor: 'rgba(26,111,212,0.2)' }}>
                <BarChart3 className="w-6 h-6" style={{ color: '#1a6fd4' }} />
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                Hydra{' '}
                <span style={{ background: 'linear-gradient(135deg, #1a6fd4, #05dde1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Analytics
                </span>
              </h2>
            </div>

            <p className="text-white/60 leading-relaxed mb-6 text-base">
              Analyse approfondie de vos performances LinkedIn. Tableaux de bord sur mesure, KPIs clés et insights actionnables pour piloter votre stratégie avec la data.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Tableau de bord KPIs LinkedIn',
                'Analyse concurrentielle',
                'Reporting mensuel détaillé',
                'Recommandations stratégiques',
              ].map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: '#1a6fd4' }} />
                  {p}
                </li>
              ))}
            </ul>

            <Link href="/service-data-analytics"
              className="inline-flex items-center gap-2 font-bold text-sm"
              style={{ color: '#1a6fd4' }}>
              Découvrir Hydra
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>

          {/* Globe 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <LinkedInGlobe />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 3 — FORMATIONS EN ENTREPRISE
   Photo + popup gauche / texte + timeline droite
═══════════════════════════════════════════════════════════════════════ */
function SectionFormation() {
  const timeline = [
    { icon: Search, titre: 'Audit des besoins', desc: 'Analyse de vos objectifs et du niveau de vos équipes' },
    { icon: GraduationCap, titre: 'Atelier en présentiel', desc: 'Formation demi-journée dans vos locaux, 100% pratique' },
    { icon: Users, titre: 'Pratique guidée', desc: 'Exercices sur vos vrais profils LinkedIn' },
    { icon: Award, titre: 'Attestation délivrée', desc: 'Remise à chaque participant en fin de session' },
  ]

  return (
    <section className="py-20 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo + popup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-secondary/20">
              <Image
                src="/formation-physique/formation.jpg"
                alt="Formation LinkedIn en entreprise"
                width={800} height={600}
                className="w-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Popup financement flottant */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -right-4 rounded-2xl border border-secondary/30 p-4 shadow-xl"
              style={{ backgroundColor: 'rgba(0,13,38,0.95)', backdropFilter: 'blur(12px)', maxWidth: '200px' }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Lock className="w-3.5 h-3.5 text-secondary" />
                <span className="text-secondary text-xs font-bold">Bientôt</span>
              </div>
              <p className="text-white text-xs font-semibold leading-snug">Finançable OPCO & CPF</p>
              <div className="flex items-center gap-1 mt-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <p className="text-white/50 text-[10px]">Certification Kaliopé en cours</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Texte + timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="inline-block border border-secondary/25 text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-widest"
              style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
              Présentiel
            </span>

            <div className="flex items-center gap-3 mb-5">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center border border-secondary/20 flex-shrink-0"
                style={{ backgroundColor: 'rgba(5,221,225,0.1)' }}>
                <GraduationCap className="w-6 h-6 text-secondary" />
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                Formations <span className="gradient-text">en entreprise</span>
              </h2>
            </div>

            <p className="text-white/60 leading-relaxed mb-2 text-base">
              J&apos;interviens directement dans vos locaux pour former vos équipes à LinkedIn. Des ateliers pratiques en demi-journée, sur mesure.
            </p>
            <p className="text-white/35 text-sm italic mb-7">
              ≠ Provisual Academy — indépendant de nos e-learnings en ligne.
            </p>

            <div className="space-y-4 mb-8">
              {timeline.map((step, i) => {
                const Icon = step.icon
                return (
                  <motion.div key={step.titre}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center border border-secondary/20"
                      style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
                      <Icon className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{step.titre}</p>
                      <p className="text-white/45 text-xs mt-0.5">{step.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.a
              href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-secondary text-primary font-black px-6 py-3 rounded-2xl text-sm shadow-glow hover:bg-tertiary transition-all duration-200">
              <Calendar className="w-4 h-4" />
              Discutons de votre projet
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   EXPORT PRINCIPAL
═══════════════════════════════════════════════════════════════════════ */
export default function HomepageServices() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest"
            style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
            Mes offres
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Une expertise,{' '}
            <span className="gradient-text">3 offres LinkedIn</span>
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto">
            Du LinkedIn sous toutes ses formes — pour les indépendants, TPE et PME qui veulent vraiment performer.
          </p>
        </motion.div>
      </div>

      <SectionMarketing />
      <SectionHydra />
      <SectionFormation />
    </div>
  )
}
