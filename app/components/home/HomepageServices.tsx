'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef, memo } from 'react'
import {
  ArrowRight, Calendar, Lock, Network, BarChart3, GraduationCap,
  CheckCircle2, Search, Users, Award,
} from 'lucide-react'
import LinkedInGlobe from './LinkedInGlobe'

const BANNIERES_RING = ['1','2','3','4','5','6','7','8']
const RING_RADIUS = 280

const AVANT_APRES = [
  { avant: '/avant-apres/15.png',  apres: '/avant-apres/15bis.png' },
  { avant: '/avant-apres/18.png',  apres: '/avant-apres/18bis.png' },
  { avant: '/avant-apres/21.png',  apres: '/avant-apres/21bis.png' },
  { avant: '/avant-apres/24.png',  apres: '/avant-apres/24bis.png' },
  { avant: '/avant-apres/27.png',  apres: '/avant-apres/27bis.png' },
]

/* Mini slider avant/après — CSS opacity pur, sans AnimatePresence pour ne pas propager de re-render */
const BeforeAfterMini = memo(function BeforeAfterMini() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % AVANT_APRES.length)
        setVisible(true)
      }, 350)
    }, 3000)
    return () => clearInterval(t)
  }, [])

  const pair = AVANT_APRES[index]

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.35s ease' }}>
      <div className="grid grid-cols-2 gap-3">
        <div className="relative rounded-xl overflow-hidden border border-white/10">
          <div className="absolute top-2 left-2 z-10 text-white text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: 'rgba(0,13,38,0.88)', border: '1px solid rgba(255,255,255,0.15)' }}>Avant</div>
          <Image src={pair.avant} alt="Avant" width={400} height={260} className="w-full h-auto" unoptimized />
        </div>
        <div className="relative rounded-xl overflow-hidden border" style={{ borderColor: 'rgba(5,221,225,0.35)', boxShadow: '0 0 14px rgba(5,221,225,0.1)' }}>
          <div className="absolute top-2 left-2 z-10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#05dde1' }}>Après</div>
          <Image src={pair.apres} alt="Après" width={400} height={260} className="w-full h-auto" unoptimized />
        </div>
      </div>
      <div className="flex justify-center gap-1.5 mt-3">
        {AVANT_APRES.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)}
            className="rounded-full transition-all duration-300"
            style={{ width: i === index ? 18 : 5, height: 5, backgroundColor: i === index ? '#05dde1' : 'rgba(255,255,255,0.2)' }} />
        ))}
      </div>
    </div>
  )
})

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 1 — MARKETING LINKEDIN
   Gauche : anneau 3D (haut) + avant/après (bas collé)
   Droite : texte, description, bullet points, CTA
═══════════════════════════════════════════════════════════════════════ */
function SectionMarketing() {
  return (
    <section className="py-20 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Gauche : anneau 3D + avant/après */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Anneau 3D de bannières */}
            <div className="flex items-center justify-center" style={{ height: '300px', perspective: '1000px' }}>
              <div className="animate-spin-ring relative" style={{ width: '200px', height: '50px' }}>
                {BANNIERES_RING.map((b, i) => {
                  const angle = (360 / BANNIERES_RING.length) * i
                  return (
                    <div
                      key={b}
                      className="absolute inset-0 rounded-lg overflow-hidden border border-white/25 shadow-2xl flex items-center justify-center p-[5px]"
                      style={{
                        transform: `rotateY(${angle}deg) translateZ(${RING_RADIUS}px)`,
                        backfaceVisibility: 'hidden',
                        backgroundColor: '#001340',
                      }}
                    >
                      <Image src={`/bannieres/${b}.png`} alt="" width={400} height={100} className="w-full h-full object-cover rounded-sm" unoptimized />
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Avant/après remonté, presque collé à l'anneau */}
            <div className="-mt-14">
              <p className="text-white/35 text-[10px] uppercase tracking-widest mb-2 text-center">Résultats réels — avant / après optimisation</p>
              <BeforeAfterMini />
            </div>
          </motion.div>

          {/* Droite : texte */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:sticky lg:top-28"
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

            <p className="text-white/60 leading-relaxed mb-8 text-base">
              Gestion complète de votre présence LinkedIn : optimisation de profil, création de contenu percutant, prospection et ghostwriting. Je m&apos;occupe de tout pour que vous vous concentriez sur votre cœur de métier.
            </p>

            <ul className="space-y-3 mb-10">
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
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 2 — HYDRA ANALYTICS
   Texte gauche / globe 3D droit + vidéo pleine largeur en dessous
═══════════════════════════════════════════════════════════════════════ */
const SectionHydra = memo(function SectionHydra() {
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
})

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
