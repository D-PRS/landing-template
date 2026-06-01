'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import HomepageHeroVisual from './HomepageHeroVisual'

// Photos issues du dossier "tete client" tel que configuré par Dylan
const AVATARS = [
  '/tetes-clients/1.png',
  '/tetes-clients/7.png',
  '/tetes-clients/8.png',
  '/tetes-clients/9.png',
  '/tetes-clients/10.png',
  '/tetes-clients/11.png',
  '/tetes-clients/12.png',
  '/tetes-clients/13.png',
  '/tetes-clients/14.png',
  '/tetes-clients/15.png',
  '/tetes-clients/16.png',
  '/tetes-clients/17.png',
]


export default function HomepageHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, #002060, transparent)' }} />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #05dde1, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
              <span className="text-secondary text-xs font-semibold uppercase tracking-widest">Agence Marketing Digital</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
            >
              Votre présence<br />
              LinkedIn,{' '}
              <span className="gradient-text">clé en main</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/65 leading-relaxed mb-10 max-w-lg"
            >
              Une expertise complète, un seul objectif :{' '}
              <strong className="text-white font-bold">votre réussite</strong>.
              ProVisual accompagne dirigeants, commerciaux et chercheurs d&apos;emploi à transformer
              leur présence LinkedIn en véritable levier d&apos;opportunités.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
                href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(5,221,225,0.45)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-secondary text-primary font-black px-8 py-4 rounded-2xl text-base shadow-glow hover:bg-tertiary transition-all duration-200"
              >
                <Calendar className="w-5 h-5" />
                Appel gratuit 30 min
              </motion.a>
              <Link
                href="/service-marketing"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl text-base hover:bg-white/5 transition-all duration-200"
              >
                Nos services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-4">
                {AVATARS.map((src, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 overflow-hidden flex-shrink-0"
                    style={{ borderColor: '#001a4d' }}>
                    <Image src={src} alt="" width={32} height={32} className="w-full h-full object-cover" unoptimized />
                  </div>
                ))}
              </div>
              <p className="text-white/55 text-sm">
                <span className="text-white font-semibold">20+ entreprises</span> nous font confiance
              </p>
              <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse ml-1" />
            </motion.div>
          </div>

          {/* Right — LinkedIn 3D Globe */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative min-w-0"
          >
            <HomepageHeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
