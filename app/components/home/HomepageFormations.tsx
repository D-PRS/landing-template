'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, BookOpen, Users, ChevronRight, Lock, Unlock, ArrowLeft, ArrowRight } from 'lucide-react'
import { FORMATIONS, getNiveauLabel, getNiveauColor, formatApprenants } from '../../data/formations'

const CARD_COLORS = ['#002060', '#003580', '#05dde1', '#05fbe1']

export default function HomepageFormations() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1)
    setCurrent((next + FORMATIONS.length) % FORMATIONS.length)
  }

  const formation = FORMATIONS[current]

  return (
    <section id="formations" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest"
              style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}
            >
              7 e-books
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Nos <span className="gradient-text">e-books</span> LinkedIn
            </h2>
            <p className="text-white/55 text-lg mt-4 max-w-lg">
              Maîtrisez LinkedIn de A à Z avec des guides pratiques conçus pour donner des résultats concrets.
            </p>
          </motion.div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button onClick={() => go(current - 1)}
              className="w-11 h-11 rounded-full border flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
              <ArrowLeft className="w-4 h-4 text-white/70" />
            </button>
            <span className="text-white/40 text-sm tabular-nums">{current + 1} / {FORMATIONS.length}</span>
            <button onClick={() => go(current + 1)}
              className="w-11 h-11 rounded-full border flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
              <ArrowRight className="w-4 h-4 text-white/70" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden" style={{ minHeight: 440 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border"
              style={{ borderColor: 'rgba(255,255,255,0.08)', backgroundColor: 'rgba(255,255,255,0.04)' }}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
                <Image src={formation.image_cover_url} alt={formation.titre} fill className="object-cover" unoptimized priority />
                <div className="absolute inset-0" style={{ backgroundColor: CARD_COLORS[current], mixBlendMode: 'color', opacity: 0.6 }} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                  {formation.est_gratuite ? (
                    <span className="inline-flex items-center gap-1 bg-secondary text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                      <Unlock className="w-3 h-3" /> Gratuit
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 bg-secondary text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                      <Lock className="w-3 h-3" /> ProVisual Academy
                    </span>
                  )}
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getNiveauColor(formation.niveau)}`}>
                    {getNiveauLabel(formation.niveau)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-white text-2xl lg:text-3xl mb-4 leading-tight">{formation.titre}</h3>
                  <p className="text-white/60 text-base leading-relaxed mb-6">{formation.description}</p>
                  <div className="flex flex-wrap items-center gap-5 text-sm text-white/45 mb-8">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-secondary" />
                      <span>{formation.nombre_chapitres} chapitre{formation.nombre_chapitres > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span>{formation.duree_estimee_heures}h de contenu</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-secondary" />
                      <span>{formatApprenants(formation.nombre_apprenants)} apprenants</span>
                    </div>
                  </div>
                </div>
                <Link href={`/formations/${formation.slug}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(5,221,225,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 bg-secondary text-primary font-black px-7 py-3.5 rounded-xl text-sm shadow-glow hover:bg-tertiary transition-colors cursor-pointer">
                    {formation.est_gratuite ? 'Voir la formation' : 'Découvrir la formation'}
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {FORMATIONS.map((_, i) => (
            <button key={i} onClick={() => go(i)}
              className="transition-all duration-200 rounded-full"
              style={{ width: i === current ? 24 : 8, height: 8, backgroundColor: i === current ? '#05dde1' : 'rgba(255,255,255,0.2)' }} />
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-secondary/20"
          style={{ background: 'linear-gradient(135deg, rgba(0,32,96,0.35) 0%, rgba(5,221,225,0.1) 100%)' }}
        >
          <div>
            <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-2">ProVisual Academy</p>
            <h3 className="text-2xl font-black text-white mb-1">Accédez aux 4 formations sur l&apos;Academy</h3>
            <p className="text-white/60 text-sm">Pour 9,99€/mois — communauté, mises à jour permanentes et certificats inclus.</p>
          </div>
          <a href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit" target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-secondary text-primary font-black px-7 py-3.5 rounded-xl text-sm shadow-glow hover:bg-tertiary transition-colors whitespace-nowrap">
            En savoir plus <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
