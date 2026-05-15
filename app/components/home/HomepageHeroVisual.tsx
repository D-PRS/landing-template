'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// 4 sets — one per card position
const NOTIF_SETS = [
  [
    { title: '+1 247 impressions', sub: 'sur votre dernier post' },
    { title: '+3 400 vues profil', sub: 'cette semaine' },
    { title: '+500 impressions', sub: 'en 24 heures' },
  ],
  [
    { title: '1 RDV confirmé', sub: 'via votre profil LinkedIn' },
    { title: '5 messages prospects', sub: 'reçus cette semaine' },
    { title: '3 propositions', sub: 'de collaboration' },
  ],
  [
    { title: '+47 nouveaux abonnés', sub: 'cette semaine' },
    { title: 'Pierrick P. a accepté', sub: 'votre invitation' },
    { title: '+12 connexions', sub: 'qualifiées en 3 jours' },
  ],
  [
    { title: 'CDI décroché', sub: 'en 2 semaines' },
    { title: '+25 ventes en 4 jours', sub: 'via social selling' },
    { title: '×10 de visibilité', sub: 'en 30 jours' },
  ],
]

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="9" width="4" height="13" fill="#05dde1" />
      <circle cx="4" cy="4" r="2.5" fill="#05dde1" />
      <path d="M13.5 9C11.6 9 10 10.6 10 12.5V22h4v-9a1.5 1.5 0 013 0v9h4v-9.5C21 10.6 19.4 9 17.5 9H13.5z" fill="#05dde1" />
    </svg>
  )
}

// Live impressions — repositioned to lower-right
function ImpressionsLive() {
  const [count, setCount] = useState(12_847)
  useEffect(() => {
    const t = setInterval(() => setCount(n => n + Math.floor(Math.random() * 4) + 1), 1500)
    return () => clearInterval(t)
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.5 }}
      className="absolute flex items-center gap-3 px-4 py-2.5 rounded-2xl"
      style={{
        top: '50%', right: 'calc(50% - 240px)',
        zIndex: 20,
        backgroundColor: 'rgba(0,10,32,0.92)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(5,221,225,0.25)',
        boxShadow: '0 0 30px rgba(5,221,225,0.22), 0 8px 32px rgba(0,0,0,0.45)',
        whiteSpace: 'nowrap',
      }}
    >
      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(5,221,225,0.12)', border: '1px solid rgba(5,221,225,0.3)' }}>
        <LinkedInIcon size={13} />
      </div>
      <div>
        <div className="text-secondary font-black text-sm leading-none">
          {count.toLocaleString('fr-FR')}
        </div>
        <div className="text-white/40 text-xs mt-0.5">impressions en direct</div>
      </div>
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
    </motion.div>
  )
}

function NotifCard({
  msgSet, style, animDir,
}: { msgSet: number; style: React.CSSProperties; animDir: 'left' | 'right' }) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % NOTIF_SETS[msgSet].length), 3000 + msgSet * 400)
    return () => clearInterval(t)
  }, [msgSet])
  const msg = NOTIF_SETS[msgSet][idx]
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 0.85, x: animDir === 'right' ? 20 : -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.85, x: animDir === 'right' ? 10 : -10 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        className="absolute flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl"
        style={{
          ...style,
          zIndex: 20,
          backgroundColor: 'rgba(0,10,32,0.92)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: '0 0 28px rgba(5,221,225,0.2), 0 8px 28px rgba(0,0,0,0.5)',
          pointerEvents: 'none',
          minWidth: 175,
          maxWidth: 215,
        }}
      >
        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(5,221,225,0.12)', border: '1px solid rgba(5,221,225,0.3)' }}>
          <LinkedInIcon size={13} />
        </div>
        <div className="min-w-0">
          <div className="text-white font-bold text-xs leading-tight truncate">{msg.title}</div>
          <div className="text-white/40 text-xs mt-0.5 truncate">{msg.sub}</div>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse flex-shrink-0 ml-auto" />
      </motion.div>
    </AnimatePresence>
  )
}

// Stat card — cropped to show only numbers (top ~38% of image)
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

      {/* ── 4 notification cards positioned like the reference ── */}

      {/* Haut-gauche — au-dessus du téléphone côté gauche */}
      <NotifCard msgSet={0} animDir="right" style={{ top: '2%',  left: 'calc(50% - 195px)' }} />

      {/* Haut-droit — au-dessus du téléphone côté droit */}
      <NotifCard msgSet={3} animDir="left"  style={{ top: '2%',  right: 'calc(50% - 195px)' }} />

      {/* Droite-centre — flanc droit du téléphone */}
      <NotifCard msgSet={1} animDir="left"  style={{ top: '40%', right: 'calc(50% - 240px)' }} />

      {/* Gauche-centre isolée — flanc gauche, mi-hauteur */}
      <NotifCard msgSet={2} animDir="right" style={{ top: '32%', left: 'calc(50% - 240px)' }} />

      {/* Lower-right — live counter */}
      <ImpressionsLive />

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
        {/* Phone shell */}
        <div style={{
          width: 204,
          height: 432,
          borderRadius: 40,
          background: 'linear-gradient(160deg, #001a4d 0%, #000d26 100%)',
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

        {/* Reflection */}
        <div style={{
          position: 'absolute', top: '100%', left: '10%', right: '10%', height: 60,
          background: 'linear-gradient(180deg, rgba(5,221,225,0.06) 0%, transparent 100%)',
          filter: 'blur(8px)', transform: 'scaleY(-0.4)', transformOrigin: 'top', opacity: 0.5,
        }} />
      </motion.div>

      {/* ── Stat cards — chevauchent les bords bas du téléphone ── */}
      <div style={{ position: 'absolute', top: '63%', left: 'calc(50% - 215px)', zIndex: 25 }}>
        <StatCard src="/stat-abonnes.png" label="Abonnés" delay={1.3} floatDy={6} />
      </div>
      <div style={{ position: 'absolute', top: '70%', right: 'calc(50% - 215px)', zIndex: 25 }}>
        <StatCard src="/stat-impressions.png" label="Impressions" delay={2.0} floatDy={8} />
      </div>

    </div>
  )
}
