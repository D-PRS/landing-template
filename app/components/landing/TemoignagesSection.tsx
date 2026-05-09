'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TEMOIGNAGES } from '../../data/content'

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < n ? 'text-amber-400' : 'text-white/20'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TemoignagesSection() {
  const [current, setCurrent] = useState(0)
  const [auto, setAuto] = useState(true)
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined)

  useEffect(() => {
    if (auto) {
      timer.current = setInterval(() => setCurrent(p => (p + 1) % TEMOIGNAGES.length), 4500)
    }
    return () => clearInterval(timer.current)
  }, [auto, current])

  const go = (idx: number) => {
    setCurrent(idx)
    setAuto(false)
    setTimeout(() => setAuto(true), 10000)
  }

  const t = TEMOIGNAGES[current]

  return (
    <section id="avis" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest"
            style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
            Ils nous font confiance
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            La satisfaction client est{' '}
            <span className="gradient-text">notre priorité</span>
          </h2>
          <p className="text-lg text-white/55 max-w-xl mx-auto">
            95% de clients satisfaits. Voici ce qu&apos;ils disent.
          </p>
        </motion.div>

        {/* Testimonial card */}
        <div
          className="relative max-w-3xl mx-auto mb-10"
          onMouseEnter={() => setAuto(false)}
          onMouseLeave={() => setAuto(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl p-8 md:p-10 border border-white/10 relative overflow-hidden"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-secondary/15" />

              <Stars n={t.note} />

              <p className="text-white/80 text-lg leading-relaxed italic mb-8">
                &ldquo;{t.texte}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-secondary/30 flex-shrink-0">
                  <Image
                    src={t.avatar_url}
                    alt={`${t.prenom} ${t.nom}`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-bold text-white text-base">{t.prenom} {t.nom}</p>
                  <p className="text-white/45 text-sm">{t.poste} · {t.entreprise}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <button
            onClick={() => go((current - 1 + TEMOIGNAGES.length) % TEMOIGNAGES.length)}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-secondary hover:text-primary hover:border-secondary transition-colors"
            style={{ backgroundColor: 'rgba(13,6,32,0.8)' }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => go((current + 1) % TEMOIGNAGES.length)}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-secondary hover:text-primary hover:border-secondary transition-colors"
            style={{ backgroundColor: 'rgba(13,6,32,0.8)' }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots + avatars */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {TEMOIGNAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-2 bg-secondary' : 'w-2 h-2 bg-white/25 hover:bg-white/40'}`}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 flex-wrap">
          {TEMOIGNAGES.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => go(i)}
              whileHover={{ scale: 1.15 }}
              className={`relative transition-all duration-200 ${i === current ? 'ring-2 ring-secondary ring-offset-2 ring-offset-transparent rounded-full' : 'opacity-40 hover:opacity-70'}`}
            >
              <Image
                src={t.avatar_url}
                alt={`${t.prenom} ${t.nom}`}
                width={40}
                height={40}
                className="rounded-full w-10 h-10 object-cover"
                unoptimized
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
