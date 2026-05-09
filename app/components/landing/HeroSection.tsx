'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowRight, Zap, TrendingUp, Users, Star, GraduationCap, Briefcase, Trophy, Award } from 'lucide-react'
import { STATS } from '../../data/content'

const CLIENT_LOGOS = [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53, 54, 55]

const MOTS_ROTATIFS = [
  'de la Visibilité',
  "de l'Influence",
  'des Clients',
  "de l'Autorité",
  'des Opportunités',
  'de la Croissance',
  'des Résultats',
]

const SCREEN_W = 270
const SCREEN_H = Math.round(SCREEN_W * 1920 / 1080)

const POPUPS = [
  {
    Icon: GraduationCap,
    iconColor: 'text-secondary', iconBg: 'bg-secondary/20',
    titre: 'Certificat obtenu !',
    sous: 'Module complété',
    pos: 'top-[4%] left-[2%]',
    delay: 0.8, float: { y: [0, -10, 0] as number[], duration: 3.2 },
  },
  {
    Icon: TrendingUp,
    iconColor: '', iconBg: '',
    iconColorStyle: { color: '#9B6FEC' },
    iconBgStyle: { backgroundColor: 'rgba(40,18,89,0.7)' },
    titre: '+4 500% de reach',
    sous: 'En 6 semaines',
    pos: 'top-[28%] right-0',
    delay: 1.1, float: { y: [0, 9, 0] as number[], duration: 2.7 },
  },
  {
    Icon: Briefcase,
    iconColor: '', iconBg: '',
    iconColorStyle: { color: '#9B6FEC' },
    iconBgStyle: { backgroundColor: 'rgba(40,18,89,0.7)' },
    titre: '3 RDV qualifiés',
    sous: 'En une semaine',
    pos: 'top-[56%] left-0',
    delay: 1.4, float: { y: [0, -11, 0] as number[], duration: 4.0 },
  },
  {
    Icon: Trophy,
    iconColor: 'text-secondary', iconBg: 'bg-secondary/20',
    titre: '+25 ventes en 4j',
    sous: 'Social selling',
    pos: 'bottom-[6%] right-[4%]',
    delay: 1.7, float: { y: [0, 8, 0] as number[], duration: 3.6 },
  },
  {
    Icon: Award,
    iconColor: 'text-secondary', iconBg: 'bg-secondary/20',
    titre: 'CDI décroché',
    sous: 'En 3 mois',
    pos: 'top-0 left-[42%] -translate-x-1/2',
    delay: 2.0, float: { y: [0, -8, 0] as number[], duration: 2.5 },
  },
]

const FADE_UP = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

export default function HeroSection() {
  const [motIndex, setMotIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setMotIndex(prev => (prev + 1) % MOTS_ROTATIFS.length)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-white text-sm font-medium">Nouveau : Accès complet disponible</span>
              <Zap className="w-4 h-4 text-secondary" />
            </motion.div>

            <motion.h1
              variants={FADE_UP} initial="initial" animate="animate"
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6"
            >
              Atteignez vos objectifs{' '}
              <span className="text-secondary">en 2026</span>{' '}
              et devenez une référence dans votre secteur
            </motion.h1>

            <motion.div
              variants={FADE_UP} initial="initial" animate="animate"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/75 mb-8 leading-relaxed"
            >
              Générez{' '}
              <span className="relative inline-block w-44 h-8 align-bottom overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={motIndex}
                    initial={{ y: 28, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -28, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0 text-secondary font-bold whitespace-nowrap"
                  >
                    {MOTS_ROTATIFS[motIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>{' '}
              grâce à{' '}
              <span className="text-secondary font-semibold">4 formations complètes</span>{' '}
              pour seulement{' '}
              <span className="text-secondary font-semibold">9,99€/mois</span>
            </motion.div>

            <motion.div
              variants={FADE_UP} initial="initial" animate="animate"
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(5,221,225,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-8 py-4
                  rounded-2xl text-lg shadow-glow hover:bg-tertiary transition-all duration-200 w-full sm:w-auto justify-center"
              >
                Rejoindre l'Espace Pro — 9,99€/mois
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4
                  rounded-2xl text-lg hover:bg-white/10 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                Voir les formations
              </motion.button>
            </motion.div>

            <motion.div
              variants={FADE_UP} initial="initial" animate="animate"
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: <Users className="w-4 h-4" />, label: `${STATS.apprenants.toLocaleString('fr-FR')} apprenants` },
                { icon: <Star className="w-4 h-4 fill-current" />, label: `${STATS.note}/5 de moyenne` },
                { icon: <TrendingUp className="w-4 h-4" />, label: `${STATS.satisfaction}% satisfaits` },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2 text-white/70">
                  <span className="text-secondary">{stat.icon}</span>
                  <span className="text-sm font-medium">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 pb-12 pt-8">
        <p className="text-center text-white/40 text-sm mb-6 font-medium uppercase tracking-wider">
          Des professionnels de ces entreprises nous font confiance
        </p>
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            className="flex gap-12 items-center"
            style={{ width: 'max-content' }}
          >
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((n, i) => (
              <div key={i} className="w-32 h-16 relative flex-shrink-0">
                <Image src={`/logos-clients/${n}.png`} alt="logo entreprise" fill className="object-contain mix-blend-multiply" unoptimized />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="relative" style={{ width: '580px', height: '640px' }}>
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: '320px', height: '560px',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(5,221,225,0.2) 0%, transparent 70%)',
          filter: 'blur(32px)',
        }}
      />

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ rotate: '4deg' }}
        >
          <div className="relative bg-gray-900 rounded-[42px] shadow-2xl border-[3px] border-gray-800" style={{ padding: '11px' }}>
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-full z-10 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-700" />
            </div>
            <div className="absolute -right-[3px] top-16 w-[3px] h-9 bg-gray-700 rounded-r-sm" />
            <div className="absolute -left-[3px] top-12 w-[3px] h-7 bg-gray-700 rounded-l-sm" />
            <div className="absolute -left-[3px] top-24 w-[3px] h-7 bg-gray-700 rounded-l-sm" />
            <div className="overflow-hidden rounded-[32px]" style={{ width: `${SCREEN_W}px`, height: `${SCREEN_H}px` }}>
              <Image
                src="/images/animation-linkedin.png"
                alt="Profil"
                width={SCREEN_W}
                height={SCREEN_H}
                className="w-full h-full object-cover object-top"
                unoptimized
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {POPUPS.map((popup, i) => {
        const { Icon } = popup
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1, y: popup.float.y }}
            transition={{
              opacity: { delay: popup.delay, duration: 0.4 },
              scale: { delay: popup.delay, duration: 0.5, type: 'spring', stiffness: 180 },
              y: { delay: popup.delay + 0.5, duration: popup.float.duration, repeat: Infinity, ease: 'easeInOut' },
            }}
            className={`absolute ${popup.pos} bg-primary/80 backdrop-blur-md border rounded-2xl px-4 py-3 flex items-center gap-3 z-20 whitespace-nowrap ${popup.iconBgStyle ? 'border-purple-500/20' : 'border-white/10 shadow-glow'}`}
            style={popup.iconBgStyle ? { boxShadow: '0 0 30px rgba(155,111,236,0.35)' } : undefined}
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${popup.iconBg}`} style={popup.iconBgStyle}>
              <Icon className={`w-5 h-5 ${popup.iconColor}`} style={popup.iconColorStyle} />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">{popup.titre}</p>
              <p className="text-white/55 text-xs mt-0.5">{popup.sous}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
