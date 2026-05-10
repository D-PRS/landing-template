'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Award, TrendingUp, Briefcase, Trophy } from 'lucide-react'

// 5 achievement cards matching the reference layout
// Each cycles through 3 related results at its position
const CARDS = [
  {
    icon: GraduationCap,
    iconBg: 'rgba(5,221,225,0.18)',
    iconColor: '#05dde1',
    messages: [
      { title: 'Certificat obtenu !', sub: 'Algorithme LinkedIn' },
      { title: 'Expert LinkedIn', sub: 'certifié officiellement' },
      { title: 'Profil TOP 1%', sub: 'certifié par LinkedIn' },
    ],
    style: { top: '4%', left: '2%' } as React.CSSProperties,
    animDir: 'right' as const,
  },
  {
    icon: Award,
    iconBg: 'rgba(5,221,225,0.18)',
    iconColor: '#05dde1',
    messages: [
      { title: 'CDI décroché', sub: 'en 3 mois' },
      { title: 'Poste signé', sub: 'via LinkedIn en 2 semaines' },
      { title: 'Mission décrochée', sub: 'en 10 jours' },
    ],
    style: { top: '3%', right: '15%' } as React.CSSProperties,
    animDir: 'left' as const,
  },
  {
    icon: TrendingUp,
    iconBg: 'rgba(139,92,246,0.22)',
    iconColor: '#a78bfa',
    messages: [
      { title: '+4 500% de reach', sub: 'en 6 semaines' },
      { title: '+170% impressions', sub: 'en 37 jours' },
      { title: '×10 de visibilité', sub: 'en 30 jours' },
    ],
    style: { top: '46%', right: '1%' } as React.CSSProperties,
    animDir: 'left' as const,
  },
  {
    icon: Briefcase,
    iconBg: 'rgba(139,92,246,0.22)',
    iconColor: '#a78bfa',
    messages: [
      { title: '3 RDV qualifiés', sub: 'en une semaine' },
      { title: '5 leads entrants', sub: 'en 5 jours' },
      { title: '7 prospects', sub: 'contactés en 48h' },
    ],
    style: { top: '67%', left: '1%' } as React.CSSProperties,
    animDir: 'right' as const,
  },
  {
    icon: Trophy,
    iconBg: 'rgba(5,221,225,0.18)',
    iconColor: '#05dde1',
    messages: [
      { title: '+25 ventes en 4j', sub: 'social selling' },
      { title: '3 ventes en 4 jours', sub: 'via LinkedIn' },
      { title: '10 clients signés', sub: 'en 30 jours' },
    ],
    style: { bottom: '6%', right: '2%' } as React.CSSProperties,
    animDir: 'left' as const,
  },
]

function AchievementCard({
  card, delay,
}: { card: typeof CARDS[0]; delay: number }) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % card.messages.length), 3200 + delay * 200)
    return () => clearInterval(t)
  }, [card.messages.length, delay])

  const msg = card.messages[idx]
  const Icon = card.icon

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 0.88, x: card.animDir === 'right' ? 18 : -18 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.88, x: card.animDir === 'right' ? 10 : -10 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        className="absolute flex items-center gap-3 px-4 py-3 rounded-2xl"
        style={{
          ...card.style,
          zIndex: 20,
          backgroundColor: 'rgba(8,6,32,0.88)',
          backdropFilter: 'blur(18px)',
          border: '1px solid rgba(255,255,255,0.09)',
          boxShadow: '0 4px 32px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)',
          pointerEvents: 'none',
          minWidth: 190,
          maxWidth: 240,
        }}
      >
        {/* Icon box */}
        <div
          className="flex items-center justify-center rounded-xl flex-shrink-0"
          style={{
            width: 38,
            height: 38,
            background: card.iconBg,
            border: `1px solid ${card.iconColor}40`,
          }}
        >
          <Icon size={18} color={card.iconColor} strokeWidth={2} />
        </div>

        {/* Text */}
        <div className="min-w-0">
          <div className="text-white font-bold text-sm leading-tight truncate">{msg.title}</div>
          <div className="text-white/45 text-xs mt-0.5 truncate">{msg.sub}</div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

// Stat card — cropped to show only the numbers (top ~38% of image)
function StatCard({
  src, label, delay, floatDy,
}: { src: string; label: string; delay: number; floatDy: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.78, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: [0, -floatDy, 0] }}
      transition={{
        opacity: { delay, duration: 0.45 },
        scale:   { delay, duration: 0.45, type: 'spring', stiffness: 220, damping: 22 },
        y:       { delay: delay + 0.55, duration: 4, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop' },
      }}
      style={{
        width: 198,
        height: 76,
        borderRadius: 14,
        overflow: 'hidden',
        position: 'relative',
        background: '#fff',
        border: '1.5px solid rgba(5,221,225,0.55)',
        boxShadow: '0 10px 50px rgba(0,0,0,0.6), 0 0 32px rgba(5,221,225,0.25)',
      }}
    >
      <Image src={src} alt={label} fill style={{ objectFit: 'cover', objectPosition: 'top' }} unoptimized />
    </motion.div>
  )
}

export default function HomepageHeroVisual() {
  return (
    <div className="relative w-full" style={{ height: 520 }}>

      {/* ── 5 achievement cards — positions matching reference ── */}
      {CARDS.map((card, i) => (
        <AchievementCard key={i} card={card} delay={i} />
      ))}

      {/* ── Phone mockup — centered with 3-D tilt ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) perspective(900px) rotateY(-7deg) rotateX(3deg)',
          zIndex: 15,
        }}
      >
        <div style={{
          width: 204,
          height: 432,
          borderRadius: 40,
          background: 'linear-gradient(160deg, #1c1c2e 0%, #0d0620 100%)',
          border: '2px solid rgba(255,255,255,0.14)',
          boxShadow: '0 40px 90px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1px rgba(0,0,0,0.5), 0 0 60px rgba(5,221,225,0.07)',
          padding: '14px 6px 10px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: '10%', right: '30%', height: '40%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)',
            pointerEvents: 'none', borderRadius: '0 0 50% 50%',
          }} />
          <div style={{ width: 74, height: 24, borderRadius: 12, background: '#000', margin: '0 auto 8px', flexShrink: 0 }} />
          <div style={{ flex: 1, borderRadius: 28, overflow: 'hidden', position: 'relative' }}>
            <Image
              src="/linkedin-profile.png"
              alt="Profil LinkedIn Dylan Parisi"
              fill
              className="object-cover object-top"
              unoptimized
            />
          </div>
          <div style={{ width: 90, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.25)', margin: '8px auto 0', flexShrink: 0 }} />
        </div>

        <div style={{
          position: 'absolute', top: '100%', left: '10%', right: '10%', height: 60,
          background: 'linear-gradient(180deg, rgba(5,221,225,0.06) 0%, transparent 100%)',
          filter: 'blur(8px)', transform: 'scaleY(-0.4)', transformOrigin: 'top', opacity: 0.5,
        }} />
      </motion.div>

      {/* ── Stat cards — lower area overlapping phone ── */}
      <div style={{ position: 'absolute', top: '63%', left: '22%', zIndex: 25 }}>
        <StatCard src="/stat-abonnes.png" label="Abonnés" delay={1.3} floatDy={6} />
      </div>
      <div style={{ position: 'absolute', top: '71%', right: '21%', zIndex: 25 }}>
        <StatCard src="/stat-impressions.png" label="Impressions" delay={2.0} floatDy={8} />
      </div>

    </div>
  )
}
