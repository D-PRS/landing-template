'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, ArrowLeft, ArrowRight, Tag } from 'lucide-react'
import { EBOOKS } from '../../data/content'

export default function HomepageFormations() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1)
    setCurrent((next + EBOOKS.length) % EBOOKS.length)
  }

  const ebook = EBOOKS[current]

  return (
    <section id="ebooks" className="py-24 overflow-hidden">
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
              Des guides pratiques et actionnables pour maîtriser LinkedIn à votre rythme.
            </p>
          </motion.div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => go(current - 1)}
              className="w-11 h-11 rounded-full border flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            >
              <ArrowLeft className="w-4 h-4 text-white/70" />
            </button>
            <span className="text-white/40 text-sm tabular-nums">{current + 1} / {EBOOKS.length}</span>
            <button
              onClick={() => go(current + 1)}
              className="w-11 h-11 rounded-full border flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            >
              <ArrowRight className="w-4 h-4 text-white/70" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden" style={{ minHeight: 400 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border"
              style={{
                borderColor: 'rgba(255,255,255,0.08)',
                backgroundColor: 'rgba(255,255,255,0.04)',
              }}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[380px] overflow-hidden bg-primary-900">
                <Image
                  src={ebook.image}
                  alt={ebook.titre}
                  fill
                  className="object-contain p-8"
                  unoptimized
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:block hidden" />
                <div className="absolute top-4 left-4 z-10">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${ebook.tagColor}`}>
                    {ebook.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4 text-secondary" />
                    <span className="text-secondary text-xs font-semibold uppercase tracking-wider">E-book LinkedIn</span>
                  </div>
                  <h3 className="font-black text-white text-2xl lg:text-3xl mb-4 leading-tight">
                    {ebook.titre}
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed mb-8">
                    {ebook.description}
                  </p>
                </div>

                <div>
                  <Link href="/e-books">
                    <motion.div
                      whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(5,221,225,0.4)' }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center justify-center gap-2 bg-secondary text-primary font-black px-7 py-3.5 rounded-xl text-sm shadow-glow hover:bg-tertiary transition-colors cursor-pointer"
                    >
                      Voir cet e-book
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {EBOOKS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="transition-all duration-200 rounded-full"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                backgroundColor: i === current ? '#05dde1' : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-secondary/20"
          style={{ background: 'linear-gradient(135deg, rgba(0,32,96,0.35) 0%, rgba(5,221,225,0.1) 100%)' }}
        >
          <div>
            <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-2">
              Bibliothèque LinkedIn
            </p>
            <h3 className="text-2xl font-black text-white mb-1">
              Accédez aux 7 e-books LinkedIn
            </h3>
            <p className="text-white/60 text-sm">
              Des méthodes testées sur le terrain, applicables immédiatement.
            </p>
          </div>
          <Link
            href="/e-books"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-secondary text-primary font-black px-7 py-3.5 rounded-xl text-sm shadow-glow hover:bg-tertiary transition-colors whitespace-nowrap"
          >
            Voir tous les e-books
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
