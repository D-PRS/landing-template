'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Users, TrendingUp } from 'lucide-react'

const CDN = 'https://cdn.prod.website-files.com/68ab2d1a568ed1d53d774d32'

const EBOOK_COVERS = [
  `${CDN}/68c312c07965f332a429837b_1.png`,
  `${CDN}/68c31283c9c6ed064f402c66_2.png`,
  `${CDN}/68c31290481cb19d6699624d_3.png`,
  `${CDN}/68c07ab9939042c046999908_4.png`,
]

const BADGES = [
  { icon: BookOpen, text: '7 guides complets', color: 'text-secondary' },
  { icon: Users, text: '20+ entreprises accompagnées', color: 'text-secondary' },
  { icon: TrendingUp, text: '100K€ générés pour nos clients', color: 'text-secondary' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #05dde1, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, #0848aa, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-secondary/30 rounded-full px-4 py-1.5 mb-8"
              style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-secondary text-xs font-semibold uppercase tracking-widest">Nouvelle collection disponible</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
            >
              Maîtrisez{' '}
              <span className="gradient-text">LinkedIn</span>
              <br />
              avec nos{' '}
              <span className="gradient-text-reverse">e-books</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/65 leading-relaxed mb-10 max-w-lg"
            >
              Prospection, contenu, copywriting, profil, algorithme…
              Chaque guide a été conçu par l&apos;agence Provisual pour vous aider à
              passer à l&apos;action et obtenir des résultats concrets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
                href="#ebooks"
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(5,221,225,0.45)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-secondary text-primary font-black px-8 py-4 rounded-2xl text-base shadow-glow hover:bg-tertiary transition-all duration-200"
              >
                Découvrir les e-books
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl text-base hover:bg-white/8 transition-all duration-200"
              >
                Appel gratuit 30 min
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col gap-3"
            >
              {BADGES.map((badge, i) => {
                const Icon = badge.icon
                return (
                  <div key={i} className="flex items-center gap-2.5 text-white/55">
                    <Icon className={`w-4 h-4 ${badge.color} flex-shrink-0`} />
                    <span className="text-sm">{badge.text}</span>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Right — Ebook stack preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center min-w-0 overflow-hidden"
          >
            <div className="relative" style={{ width: '520px', height: '420px' }}>
              {/* Glow */}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, #05dde1 0%, #0848aa 50%, transparent 80%)' }} />

              {/* Stacked ebook covers */}
              {EBOOK_COVERS.slice().reverse().map((src, idx) => {
                const realIdx = EBOOK_COVERS.length - 1 - idx
                const offsets = [
                  { x: 48, y: 36, rotate: 8, z: 1 },
                  { x: 24, y: 18, rotate: 4, z: 2 },
                  { x: 0, y: 0, rotate: -2, z: 3 },
                  { x: -20, y: -16, rotate: -6, z: 4 },
                ]
                const o = offsets[realIdx]
                return (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + realIdx * 0.1 }}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="absolute"
                    style={{
                      width: '260px',
                      top: '50%',
                      left: '50%',
                      transform: `translate(calc(-50% + ${o.x}px), calc(-50% + ${o.y}px)) rotate(${o.rotate}deg)`,
                      zIndex: o.z,
                    }}
                  >
                    <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                      <Image
                        src={src}
                        alt="E-book Provisual"
                        width={260}
                        height={340}
                        className="w-full object-cover"
                        unoptimized
                      />
                    </div>
                  </motion.div>
                )
              })}

              {/* Count badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
                className="absolute bottom-4 right-4 z-20 bg-secondary text-primary font-black text-sm px-4 py-2 rounded-full shadow-glow"
              >
                7 guides
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
