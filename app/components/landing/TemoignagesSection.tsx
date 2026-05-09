'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TEMOIGNAGES, STATS } from '../../data/content'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TemoignagesSection() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined)

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrent(prev => (prev + 1) % TEMOIGNAGES.length)
      }, 4000)
    }
    return () => clearInterval(intervalRef.current)
  }, [isAutoPlaying])

  const goTo = (index: number) => {
    setCurrent(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const prev = () => goTo((current - 1 + TEMOIGNAGES.length) % TEMOIGNAGES.length)
  const next = () => goTo((current + 1) % TEMOIGNAGES.length)
  const temoignage = TEMOIGNAGES[current]

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-secondary/20 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {STATS.note}/5 de note moyenne
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ils ont transformé leur présence
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {STATS.apprenants} professionnels nous font confiance. Voici ce qu'ils disent.
          </p>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto mb-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-card-xl relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-secondary/20" />
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg">
                    <Image src={temoignage.avatar_url} alt={`${temoignage.prenom} ${temoignage.nom}`} fill className="object-cover" unoptimized />
                  </div>
                </div>
                <div className="flex-1">
                  <StarRating rating={temoignage.note} />
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic mt-3">
                    "{temoignage.texte}"
                  </p>
                  <div>
                    <p className="font-bold text-primary text-base">{temoignage.prenom} {temoignage.nom}</p>
                    <p className="text-gray-500 text-sm">{temoignage.poste} · {temoignage.entreprise}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors border border-white/20">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors border border-white/20">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mb-12">
          {TEMOIGNAGES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-2.5 bg-secondary' : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/50'}`}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          {TEMOIGNAGES.map((t, i) => (
            <motion.button key={i} onClick={() => goTo(i)} whileHover={{ scale: 1.15 }}
              className={`relative transition-all duration-200 ${i === current ? 'ring-2 ring-secondary ring-offset-2 ring-offset-transparent rounded-full' : 'opacity-50 hover:opacity-75'}`}>
              <Image src={t.avatar_url} alt={`${t.prenom} ${t.nom}`} width={40} height={40} className="rounded-full w-10 h-10 object-cover" unoptimized />
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: `${STATS.apprenants}`, label: 'Apprenants formés' },
            { value: `${STATS.note}/5`, label: 'Note moyenne' },
            { value: `${STATS.satisfaction}%`, label: 'Taux de satisfaction' },
            { value: '4', label: 'Formations complètes' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-secondary mb-1">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
