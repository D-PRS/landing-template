'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  ArrowRight, Calendar, ChevronLeft, ChevronRight,
  Target, PenSquare, Users, GraduationCap,
  Search, UserPlus, MessageSquare, TrendingUp,
  Lock, CheckCircle2, Zap, Award,
} from 'lucide-react'
import TemoignagesSection from '../components/landing/TemoignagesSection'

/* ─── Données ─────────────────────────────────────────────────────────── */
const AVANT_APRES = [
  { avant: '/avant-apres/15.png', apres: '/avant-apres/15bis.png' },
  { avant: '/avant-apres/18.png', apres: '/avant-apres/18bis.png' },
  { avant: '/avant-apres/21.png', apres: '/avant-apres/21bis.png' },
  { avant: '/avant-apres/24.png', apres: '/avant-apres/24bis.png' },
  { avant: '/avant-apres/27.png', apres: '/avant-apres/27bis.png' },
]

const BANNIERES = ['1','2','3','4','5','6','7','8','9','10','11','12','13']

// Publication 36 retirée — 9 publications au total
const PUBLICATIONS = ['33','34','35','37','38','39','40','41','42']

const CALENDLY_NOTIFS = [
  { nom: 'Marie D.', action: 'vient de réserver un appel', ago: 'il y a 2 min' },
  { nom: 'Thomas R.', action: 'vient de prendre rendez-vous', ago: 'il y a 5 min' },
  { nom: 'Sophie L.', action: 'vient de réserver un appel', ago: 'il y a 8 min' },
  { nom: 'Julien B.', action: 'vient de prendre rendez-vous', ago: 'il y a 12 min' },
]

/* ─── Slider avant / après — auto + manuel ───────────────────────────── */
function BeforeAfterSlider() {
  const [index, setIndex] = useState(0)

  // Cycle automatique toutes les 3 secondes
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % AVANT_APRES.length)
    }, 3000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + AVANT_APRES.length) % AVANT_APRES.length)
  const next = () => setIndex((i) => (i + 1) % AVANT_APRES.length)
  const pair = AVANT_APRES[index]

  return (
    <AnimatePresence mode="wait">
      <div className="relative">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-4"
        >
          {/* Avant */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
            <div
              className="absolute top-3 left-3 z-10 text-white text-xs font-bold px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(0,13,38,0.88)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              Avant
            </div>
            <Image
              src={pair.avant}
              alt="Profil avant optimisation"
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Après */}
          <div
            className="relative rounded-2xl overflow-hidden border aspect-[4/3]"
            style={{ borderColor: 'rgba(5,221,225,0.3)', boxShadow: '0 0 20px rgba(5,221,225,0.08)' }}
          >
            <div
              className="absolute top-3 left-3 z-10 text-primary text-xs font-bold px-3 py-1 rounded-full"
              style={{ backgroundColor: '#05dde1' }}
            >
              Après
            </div>
            <Image
              src={pair.apres}
              alt="Profil après optimisation"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </motion.div>

        {/* Nav */}
        <div className="flex items-center justify-center gap-4 mt-5">
          <button onClick={prev}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 hover:border-secondary/50 hover:bg-white/5 transition-all">
            <ChevronLeft className="w-4 h-4 text-white/70" />
          </button>
          <div className="flex gap-1.5">
            {AVANT_APRES.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === index ? 20 : 6,
                  height: 6,
                  backgroundColor: i === index ? '#05dde1' : 'rgba(255,255,255,0.2)',
                }} />
            ))}
          </div>
          <button onClick={next}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 hover:border-secondary/50 hover:bg-white/5 transition-all">
            <ChevronRight className="w-4 h-4 text-white/70" />
          </button>
        </div>
      </div>
    </AnimatePresence>
  )
}

/* ─── Bannières scrolling (plus grandes) ──────────────────────────────── */
function BanniereScroll() {
  const triple = [...BANNIERES, ...BANNIERES, ...BANNIERES]
  return (
    <div className="overflow-hidden relative mt-8">
      <div className="animate-marquee-bannieres" style={{ display: 'flex', width: 'max-content', gap: '12px' }}>
        {triple.map((b, i) => (
          <div key={`${b}-${i}`} className="flex-shrink-0 rounded-xl overflow-hidden border border-white/8 w-80 h-28">
            <Image
              src={`/bannieres/${b}.png`}
              alt={`Bannière ${b}`}
              width={320}
              height={112}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Grille publications (9 images, layout propre) ──────────────────── */
function PublicationsGrid() {
  // Hauteurs alternées pour l'effet désordre maîtrisé
  const heights = ['h-52', 'h-64', 'h-48', 'h-60', 'h-56', 'h-44', 'h-64', 'h-52', 'h-48']
  return (
    <div className="columns-2 md:columns-3 gap-3">
      {PUBLICATIONS.map((p, i) => (
        <motion.div
          key={p}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
          whileHover={{ scale: 1.02 }}
          className="break-inside-avoid mb-3 rounded-2xl overflow-hidden border border-white/8 group"
          style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
        >
          <Image
            src={`/publications/${p}.png`}
            alt={`Publication LinkedIn ${p}`}
            width={400}
            height={500}
            className={`w-full ${heights[i] || 'h-52'} object-cover object-top`}
            unoptimized
          />
        </motion.div>
      ))}
    </div>
  )
}

/* ─── Popup Calendly ──────────────────────────────────────────────────── */
function CalendlyPopup() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false)
      setTimeout(() => { setIdx((i) => (i + 1) % CALENDLY_NOTIFS.length); setVisible(true) }, 450)
    }, 4000)
    return () => clearInterval(t)
  }, [])

  const notif = CALENDLY_NOTIFS[idx]

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.96 }}
          transition={{ duration: 0.35 }}
          className="flex items-start gap-3 rounded-2xl border border-secondary/30 p-4 max-w-xs"
          style={{ backgroundColor: 'rgba(5,221,225,0.06)', backdropFilter: 'blur(12px)' }}
        >
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border border-secondary/30"
            style={{ backgroundColor: 'rgba(5,221,225,0.15)' }}>
            <Calendar className="w-4 h-4 text-secondary" />
          </div>
          <div>
            <p className="text-white text-sm font-semibold">{notif.nom}</p>
            <p className="text-white/60 text-xs">{notif.action}</p>
            <p className="text-secondary/70 text-xs mt-0.5">{notif.ago}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ─── Page ────────────────────────────────────────────────────────────── */
export default function ServiceMarketingContent() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle, #002060, transparent)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-secondary/30 rounded-full px-4 py-1.5 mb-8"
            style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-secondary text-xs font-semibold uppercase tracking-widest">Service phare</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 max-w-3xl">
            Marketing <span className="gradient-text">LinkedIn</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/65 leading-relaxed mb-10 max-w-2xl">
            Je transforme votre présence LinkedIn en un outil de croissance business puissant.
            4 prestations, une seule expertise : <strong className="text-white font-bold">LinkedIn à 100%.</strong>
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4">
            <motion.a href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(5,221,225,0.45)' }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-secondary text-primary font-black px-8 py-4 rounded-2xl text-base shadow-glow hover:bg-tertiary transition-all duration-200">
              <Calendar className="w-5 h-5" /> Appel gratuit 30 min
            </motion.a>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl text-base hover:bg-white/5 transition-all duration-200">
              Nous écrire <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══ 1. OPTIMISATION PROFIL ══ */}
      <section id="optimisation-profil" className="pt-24 pb-10 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Texte */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-secondary/20"
                  style={{ backgroundColor: 'rgba(5,221,225,0.1)' }}>
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-secondary/70 text-xs font-bold uppercase tracking-widest">Prestation 01</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
                Optimisation de <span className="gradient-text">profil</span>
              </h2>
              <p className="text-white/65 leading-relaxed mb-8 text-lg">
                Un profil LinkedIn optimisé, c&apos;est votre première impression digitale. J&apos;optimise chaque section pour capter l&apos;attention et attirer naturellement les bonnes opportunités.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { titre: 'Profil personnel', points: ['Photo & bannière pro', 'Titre et accroche percutants', 'Section À propos optimisée', 'Mots-clés SEO LinkedIn'] },
                  { titre: 'Page entreprise', points: ['Branding visuel cohérent', 'Description & slogan', 'Bannière de marque', "Call-to-action optimisé"] },
                ].map((bloc) => (
                  <div key={bloc.titre} className="rounded-2xl p-5 border border-white/8"
                    style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                    <p className="text-white font-bold text-sm mb-3">{bloc.titre}</p>
                    <ul className="space-y-2">
                      {bloc.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs text-white/60">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0 mt-0.5" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Avant/après */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Résultats réels de mes clients</p>
              <BeforeAfterSlider />
            </motion.div>
          </div>

        </div>
        {/* Bannières — pleine largeur viewport */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-16">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3 text-center">Exemples de bannières réalisées</p>
          <BanniereScroll />
        </motion.div>
      </section>

      {/* ══ 2. CRÉATION DE CONTENU ══ */}
      <section id="creation-contenu" className="py-24 border-t border-white/8"
        style={{ backgroundColor: 'rgba(5,221,225,0.02)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Publications */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="order-2 lg:order-1">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4 text-center lg:text-left">Publications publiées pour mes clients</p>
              <PublicationsGrid />
            </motion.div>

            {/* Texte */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
              className="order-1 lg:order-2 flex flex-col justify-center self-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-secondary/20"
                  style={{ backgroundColor: 'rgba(5,221,225,0.1)' }}>
                  <PenSquare className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-secondary/70 text-xs font-bold uppercase tracking-widest">Prestation 02</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
                Création de <span className="gradient-text">contenu</span>
              </h2>
              <p className="text-white/65 leading-relaxed mb-8 text-lg">
                Délégation <strong className="text-white font-bold">100% de votre création de contenu</strong> LinkedIn. Publications, carrousels, articles — je m&apos;occupe de tout, à votre voix.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Calendrier éditorial mensuel',
                  'Rédaction & publication de posts',
                  'Carrousels, vidéos et articles',
                  'Page entreprise + profil personnel',
                  'Analyse des performances incluse',
                ].map((p) => (
                  <li key={p} className="flex items-center gap-3 text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 3. PROSPECTION LINKEDIN ══ */}
      <section id="prospection" className="py-24 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-secondary/20"
                style={{ backgroundColor: 'rgba(5,221,225,0.1)' }}>
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <span className="text-secondary/70 text-xs font-bold uppercase tracking-widest">Prestation 03</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              Prospection <span className="gradient-text">LinkedIn</span>
            </h2>
            <p className="text-lg text-white/55 max-w-2xl mx-auto">
              Délégation 100% de votre prospection. Je vais chercher vos prospects, les ajoute à votre réseau et envoie des messages personnalisés — manuellement ou automatiquement.
            </p>
          </motion.div>

          {/* Flow animé */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { icon: Search, label: 'Ciblage', desc: 'Identification des prospects selon vos critères' },
              { icon: UserPlus, label: 'Ajout réseau', desc: "Invitation avec taux d'acceptation élevé" },
              { icon: MessageSquare, label: 'Message', desc: 'Messages 100% personnalisés, jamais copiés' },
              { icon: TrendingUp, label: 'Conversion', desc: "Suivi et relances jusqu'au rendez-vous qualifié" },
            ].map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div key={step.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="relative text-center">
                  {i < 3 && <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px border-t border-dashed border-white/15 z-0" />}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative z-10 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center border border-secondary/20 mb-4"
                    style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
                    <Icon className="w-7 h-7 text-secondary" />
                  </motion.div>
                  <p className="text-white font-bold text-sm mb-1">{step.label}</p>
                  <p className="text-white/45 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Manuelle + Automatisée + Calendly */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Manuelle */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="rounded-3xl p-7 border border-white/10" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-lg">🤝</span>
                <h3 className="text-white font-black text-lg">Prospection manuelle</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                J&apos;envoie moi-même les invitations et messages depuis votre compte LinkedIn. Chaque message est rédigé sur mesure — résultat : un taux de conversion exceptionnel.
              </p>
              <ul className="space-y-2">
                {['Fichier prospect dans vos relations', 'Messages 100% personnalisés', "Taux d'acceptation élevé", 'Suivi humain et réactif'].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs text-white/65">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Automatisée */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl p-7 border border-white/10" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
              <div className="flex items-center gap-2 mb-5">
                <Zap className="w-5 h-5 text-secondary" />
                <h3 className="text-white font-black text-lg">Prospection automatisée</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Pour scaler votre prospection, j&apos;utilise les meilleurs outils du marché avec des séquences précises et personnalisées.
              </p>
              <div className="flex gap-3 mb-5">
                {[
                  { nom: 'Waalaxy', accentRgb: '26,111,212' },
                  { nom: 'Lemlist', accentRgb: '5,221,225' },
                ].map((outil) => (
                  <motion.div key={outil.nom} animate={{ y: [0, -4, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex-1 rounded-xl border border-white/10 px-3 py-2.5 text-center"
                    style={{ backgroundColor: `rgba(${outil.accentRgb}, 0.1)`, borderColor: `rgba(${outil.accentRgb}, 0.25)` }}>
                    <p className="text-white font-bold text-sm">{outil.nom}</p>
                  </motion.div>
                ))}
              </div>
              <ul className="space-y-2">
                {['Séquences multi-étapes', 'A/B testing de messages', 'Reporting détaillé'].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs text-white/65">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Calendly */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl p-7 border border-secondary/20 flex flex-col justify-between"
              style={{ backgroundColor: 'rgba(5,221,225,0.04)' }}>
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <h3 className="text-white font-black text-lg">Résultat : des rendez-vous</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  L&apos;objectif final : remplir votre agenda de prospects qualifiés prêts à vous rencontrer.
                </p>
                <CalendlyPopup />
              </div>
              <motion.a href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="mt-6 w-full py-3 text-center bg-secondary text-primary font-black rounded-2xl text-sm shadow-glow hover:bg-tertiary transition-all duration-200 flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" /> Réserver un appel
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 4. FORMATIONS EN ENTREPRISE ══ */}
      <section id="formations-entreprise" className="py-24 border-t border-white/8"
        style={{ backgroundColor: 'rgba(5,221,225,0.02)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-secondary/20">
                <Image src="/formation-physique/formation.jpg" alt="Formation LinkedIn en entreprise" width={800} height={600} className="w-full object-cover" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 rounded-2xl border border-secondary/30 p-4 shadow-xl max-w-[190px]"
                style={{ backgroundColor: 'rgba(0,13,38,0.95)', backdropFilter: 'blur(12px)' }}>
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

            {/* Texte */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-secondary/20"
                  style={{ backgroundColor: 'rgba(5,221,225,0.1)' }}>
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-secondary/70 text-xs font-bold uppercase tracking-widest">Prestation 04</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
                Formation LinkedIn <span className="gradient-text">en entreprise</span>
              </h2>
              <p className="text-white/65 leading-relaxed mb-3 text-lg">
                J&apos;interviens directement dans vos locaux pour former vos équipes à LinkedIn. Des ateliers pratiques, sur mesure, en demi-journée.
              </p>
              <p className="text-white/40 text-sm mb-8 italic">
                ≠ Provisual Academy — ces formations sont indépendantes de nos e-learnings en ligne.
              </p>

              {/* Timeline */}
              <div className="space-y-5 mb-8">
                {[
                  { icon: Search, titre: 'Audit des besoins', desc: 'Analyse de vos objectifs et du niveau de vos équipes' },
                  { icon: GraduationCap, titre: 'Atelier en présentiel', desc: 'Formation demi-journée dans vos locaux, 100% pratique' },
                  { icon: Users, titre: 'Pratique guidée', desc: 'Exercices sur vos vrais profils LinkedIn' },
                  { icon: Award, titre: 'Attestation de formation', desc: 'Délivrée à chaque participant en fin de session' },
                ].map((step, i) => {
                  const Icon = step.icon
                  return (
                    <motion.div key={step.titre} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center border border-secondary/20"
                        style={{ backgroundColor: 'rgba(5,221,225,0.1)' }}>
                        <Icon className="w-4 h-4 text-secondary" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{step.titre}</p>
                        <p className="text-white/50 text-xs mt-0.5">{step.desc}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <motion.a href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-secondary text-primary font-black px-7 py-3.5 rounded-2xl text-sm shadow-glow hover:bg-tertiary transition-all duration-200">
                <Calendar className="w-4 h-4" /> Discutons de votre projet
              </motion.a>
            </motion.div>
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
              Prêt à transformer votre <span className="gradient-text">LinkedIn</span> ?
            </h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              Réservez un appel gratuit de 30 min et discutons de votre projet ensemble.
            </p>
            <a href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-secondary text-primary font-black text-lg px-10 py-5 rounded-2xl shadow-glow hover:bg-tertiary transition-all duration-200">
              <Calendar className="w-5 h-5" /> Réserver mon appel gratuit
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
