'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #05dde1, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, #002060, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div className="min-w-0 max-lg:text-center">
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
              className="text-lg text-white/65 leading-relaxed mb-10 max-w-lg max-lg:mx-auto"
            >
              Trouver un emploi, vendre, devenir influent, maîtriser l&apos;algorithme…
              Chaque guide a été conçu pour vous faire passer à l&apos;action et obtenir des résultats concrets.
            </motion.p>

            {/* Vidéo YouTube — mobile uniquement (la version desktop est dans la colonne de droite) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="lg:hidden mb-10"
            >
              <div
                className="relative rounded-[2rem] overflow-hidden ring-2 mx-auto"
                style={{
                  width: '100%',
                  maxWidth: 260,
                  boxShadow: '0 0 0 2px rgba(5,221,225,0.4), 0 20px 50px rgba(0,0,0,0.5)',
                  background: '#000',
                }}
              >
                <div style={{ position: 'relative', paddingBottom: '177.78%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/RTr9QRcWynw?rel=0&modestbranding=1"
                    title="ProVisual Academy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 max-lg:items-center"
            >
              <motion.a
                href="https://www.provisual-academy.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(5,221,225,0.45)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-secondary text-primary font-black px-8 py-4 rounded-2xl text-base shadow-glow hover:bg-tertiary transition-all duration-200"
              >
                Découvrir les e-books
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.provisual-academy.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl text-base hover:bg-white/8 transition-all duration-200"
              >
                Débloquer votre E-book gratuit
              </motion.a>
            </motion.div>

          </div>

          {/* Right — Video 9:16 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center min-w-0"
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-6 rounded-[3rem] blur-2xl pointer-events-none opacity-40"
                style={{ background: 'radial-gradient(ellipse, rgba(5,221,225,0.5) 0%, transparent 70%)' }} />
              {/* Border glow ring */}
              <div className="absolute -inset-1 rounded-[2.5rem] blur-md pointer-events-none opacity-60"
                style={{ background: 'linear-gradient(135deg, rgba(5,221,225,0.4), rgba(5,221,225,0.1))' }} />
              {/* Video container — phone-like */}
              <div
                className="relative rounded-[2rem] overflow-hidden ring-2"
                style={{
                  width: 340,
                  boxShadow: '0 0 0 2px rgba(5,221,225,0.4), 0 30px 80px rgba(0,0,0,0.6)',
                  background: '#000',
                }}
              >
                <div style={{ position: 'relative', paddingBottom: '177.78%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/RTr9QRcWynw?rel=0&modestbranding=1"
                    title="ProVisual Academy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
