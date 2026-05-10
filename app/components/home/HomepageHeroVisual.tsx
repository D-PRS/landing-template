'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CDN = 'https://cdn.prod.website-files.com/68ab2d1a568ed1d53d774d32'

const AVATARS = [
  { src: `${CDN}/68b605c0f0599c67093cc3aa_Pierrick.png`, name: 'Pierrick', top: '6%',    left: '4%',   dur: 3.2, delay: 0    },
  { src: `${CDN}/68b608ed49588bd5aca23903_Maylis.png`,   name: 'Maylis',   top: '1%',    left: '43%',  dur: 2.7, delay: 0.5  },
  { src: `${CDN}/68b5ff2ba9b3ff9512d8ba74_Gaetant.png`,  name: 'Gaëtan',  top: '6%',    right: '3%',  dur: 3.5, delay: 0.9  },
  { src: `${CDN}/68b608168ed5a22c8350a930_Nicolas.png`,  name: 'Nicolas',  top: '42%',   right: '2%',  dur: 2.9, delay: 0.3  },
  { src: `${CDN}/68b6068d0a093a8838989158_Issam.png`,    name: 'Issam',    bottom: '6%', right: '5%',  dur: 3.3, delay: 0.8  },
  { src: `${CDN}/68b6047bcfb9e1572d172217_Adam.png`,     name: 'Adam',     bottom: '4%', left: '8%',   dur: 3.0, delay: 0.4  },
  { src: `${CDN}/68b60782e4726f65ef3755b8_Theo.png`,     name: 'Théo',     top: '43%',   left: '3%',   dur: 3.4, delay: 0.7  },
]

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

function ImpressionsLive() {
  const [count, setCount] = useState(12_847)
  useEffect(() => {
    const t = setInterval(() => setCount(n => n + Math.floor(Math.random() * 4) + 1), 1500)
    return () => clearInterval(t)
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="absolute flex items-center gap-3 px-4 py-2.5 rounded-2xl z-20"
      style={{
        top: '50%', left: '50%',
        transform: 'translate(-50%, -540%)',
        backgroundColor: 'rgba(10,4,28,0.92)',
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

function NotifCard({ msgSet, style, animDir }: { msgSet: number; style: React.CSSProperties; animDir: 'left' | 'right' }) {
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
        className="absolute flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl z-20"
        style={{
          ...style,
          backgroundColor: 'rgba(10,4,28,0.92)',
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

export default function HomepageHeroVisual() {
  return (
    <div className="relative w-full" style={{ height: 520 }}>

      {/* Live impressions counter — above phone center */}
      <ImpressionsLive />

      {/* Notification cards */}
      <NotifCard msgSet={0} animDir="right" style={{ top: '8%', right: '2%' }} />
      <NotifCard msgSet={1} animDir="left"  style={{ top: '55%', left: '1%' }} />
      <NotifCard msgSet={2} animDir="right" style={{ bottom: '8%', right: '2%' }} />

      {/* Floating client avatars */}
      {AVATARS.map((av, i) => (
        <motion.div
          key={av.name}
          className="absolute z-10"
          style={{ top: av.top, left: av.left, right: av.right, bottom: av.bottom } as React.CSSProperties}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -13, 0] }}
          transition={{
            opacity: { delay: 0.6 + i * 0.1, duration: 0.4 },
            scale: { delay: 0.6 + i * 0.1, duration: 0.4, type: 'spring' },
            y: { duration: av.dur, repeat: Infinity, ease: 'easeInOut', delay: av.delay, repeatType: 'loop' },
          }}
        >
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-xl"
              style={{ border: '2.5px solid rgba(5,221,225,0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.4), 0 0 12px rgba(5,221,225,0.15)' }}>
              <Image src={av.src} alt={av.name} width={48} height={48} className="w-full h-full object-cover" unoptimized />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0d0620]" />
          </div>
        </motion.div>
      ))}

      {/* Phone mockup — centered */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute z-15"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) perspective(900px) rotateY(-7deg) rotateX(3deg)',
        }}
      >
        {/* Phone shell */}
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
          gap: 0,
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* Shine */}
          <div style={{
            position: 'absolute', top: 0, left: '10%', right: '30%', height: '40%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)',
            pointerEvents: 'none', borderRadius: '0 0 50% 50%',
          }} />
          {/* Dynamic island */}
          <div style={{ width: 74, height: 24, borderRadius: 12, background: '#000', margin: '0 auto 8px', flexShrink: 0 }} />
          {/* Screen */}
          <div style={{ flex: 1, borderRadius: 28, overflow: 'hidden', position: 'relative' }}>
            <Image
              src="/linkedin-profile.png"
              alt="Profil LinkedIn Dylan Parisi"
              fill
              className="object-cover object-top"
              unoptimized
            />
          </div>
          {/* Home bar */}
          <div style={{ width: 90, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.25)', margin: '8px auto 0', flexShrink: 0 }} />
        </div>

        {/* Reflection below phone */}
        <div style={{
          position: 'absolute',
          top: '100%',
          left: '10%',
          right: '10%',
          height: 60,
          background: 'linear-gradient(180deg, rgba(5,221,225,0.06) 0%, transparent 100%)',
          filter: 'blur(8px)',
          transform: 'scaleY(-0.4)',
          transformOrigin: 'top',
          opacity: 0.5,
        }} />
      </motion.div>
    </div>
  )
}
