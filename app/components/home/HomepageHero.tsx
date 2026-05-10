'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import HomepageHeroVisual from './HomepageHeroVisual'

const CDN = 'https://cdn.prod.website-files.com/68ab2d1a568ed1d53d774d32'

const AVATARS = [
  `${CDN}/68b605c0f0599c67093cc3aa_Pierrick.png`,
  `${CDN}/68b608ed49588bd5aca23903_Maylis.png`,
  `${CDN}/68b5ff2ba9b3ff9512d8ba74_Gaetant.png`,
  `${CDN}/68b608168ed5a22c8350a930_Nicolas.png`,
  `${CDN}/68b6068d0a093a8838989158_Issam.png`,
]


export default function HomepageHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, #0848aa, transparent)' }} />
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
              <span className="gradient-text">Marketing</span>{' '}
              LinkedIn<br />&amp;{' '}
              <span className="gradient-text-reverse">Data</span> Analytics
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/65 leading-relaxed mb-10 max-w-lg"
            >
              Deux expertises, un seul objectif :{' '}
              <strong className="text-white font-bold">votre croissance</strong>.
              Provisual accompagne les TPE, PME et indépendants pour transformer
              leur visibilité LinkedIn en opportunités business concrètes.
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
              <div className="flex -space-x-3">
                {AVATARS.map((src, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 overflow-hidden flex-shrink-0"
                    style={{ borderColor: '#0d0620' }}>
                    <Image src={src} alt="" width={36} height={36} className="w-full h-full object-cover" unoptimized />
                  </div>
                ))}
              </div>
              <p className="text-white/55 text-sm">
                <span className="text-white font-semibold">20+ entreprises</span> nous font confiance
              </p>
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
