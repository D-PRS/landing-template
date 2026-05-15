'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { GraduationCap, Award, TrendingUp, Briefcase, Trophy } from 'lucide-react'

// Phone is 204px wide, centered at 50%.
// Cards use calc(50% - 270px) for left / right edges so they always
// overlap the phone by ~52px regardless of container width.
// zIndex: cards(20) > phone(15) so cards appear in front.

type Card = {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  iconColor: string
  iconBg: string
  title: string
  sub: string
  pos: React.CSSProperties
  delay: number
  floatY: number
}

const CARDS: Card[] = [
  {
    icon: GraduationCap,
    iconColor: '#05dde1',
    iconBg: 'rgba(5,221,225,0.18)',
    title: 'Certificat obtenu !',
    sub: 'Algorithme LinkedIn',
    pos: { top: 24, left: 'calc(50% - 270px)' },
    delay: 0.5,
    floatY: 8,
  },
  {
    icon: Award,
    iconColor: '#05dde1',
    iconBg: 'rgba(5,221,225,0.18)',
    title: 'CDI décroché',
    sub: 'En 3 mois',
    pos: { top: 14, right: 'calc(50% - 270px)' },
    delay: 0.7,
    floatY: 10,
  },
  {
    icon: TrendingUp,
    iconColor: '#a855f7',
    iconBg: 'rgba(168,85,247,0.22)',
    title: '+4 500% de reach',
    sub: 'En 6 semaines',
    pos: { top: 185, right: 'calc(50% - 270px)' },
    delay: 0.9,
    floatY: 6,
  },
  {
    icon: Briefcase,
    iconColor: '#05dde1',
    iconBg: 'rgba(5,221,225,0.18)',
    title: '3 RDV qualifiés',
    sub: 'En une semaine',
    pos: { top: 295, left: 'calc(50% - 270px)' },
    delay: 1.1,
    floatY: 7,
  },
  {
    icon: Trophy,
    iconColor: '#05dde1',
    iconBg: 'rgba(5,221,225,0.18)',
    title: '+25 ventes en 4j',
    sub: 'Social selling',
    pos: { top: 385, right: 'calc(50% - 270px)' },
    delay: 1.3,
    floatY: 9,
  },
]

function AchievementCard({
  icon: Icon,
  iconColor,
  iconBg,
  title,
  sub,
  pos,
  delay,
  floatY,
}: Card) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -floatY, 0],
      }}
      transition={{
        opacity: { delay, duration: 0.45 },
        scale: { delay, duration: 0.45, type: 'spring', stiffness: 210, damping: 22 },
        y: {
          delay: delay + 0.6,
          duration: 3.5 + delay * 0.4,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'loop',
        },
      }}
      className="absolute flex items-center gap-3 px-4 py-3 rounded-2xl"
      style={{
        ...pos,
        zIndex: 20,
        width: 220,
        backgroundColor: '#0d1e47',
        border: '1px solid rgba(255,255,255,0.10)',
        boxShadow: '0 10px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: iconBg }}
      >
        <Icon className="w-5 h-5" style={{ color: iconColor }} />
      </div>
      <div>
        <div className="text-white font-black text-sm leading-snug">{title}</div>
        <div className="text-white/45 text-xs mt-0.5">{sub}</div>
      </div>
    </motion.div>
  )
}

export default function HomepageHeroVisual() {
  return (
    <div className="relative w-full" style={{ height: 520 }}>
      {CARDS.map((card, i) => (
        <AchievementCard key={i} {...card} />
      ))}

      {/* Phone — centered at 50%/50% */}
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
        {/* Shell */}
        <div
          style={{
            width: 204,
            height: 432,
            borderRadius: 40,
            background: 'linear-gradient(160deg, #001a4d 0%, #000d26 100%)',
            border: '2px solid rgba(255,255,255,0.14)',
            boxShadow:
              '0 40px 90px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1px rgba(0,0,0,0.5), 0 0 60px rgba(5,221,225,0.07)',
            padding: '14px 6px 10px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Inner shine */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '10%',
              right: '30%',
              height: '40%',
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)',
              pointerEvents: 'none',
              borderRadius: '0 0 50% 50%',
            }}
          />
          {/* Notch */}
          <div
            style={{
              width: 74,
              height: 24,
              borderRadius: 12,
              background: '#000',
              margin: '0 auto 8px',
              flexShrink: 0,
            }}
          />
          {/* Screen */}
          <div
            style={{
              flex: 1,
              borderRadius: 28,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Image
              src="/linkedin-profile.png"
              alt="Profil LinkedIn"
              fill
              className="object-cover object-top"
              unoptimized
            />
          </div>
          {/* Home bar */}
          <div
            style={{
              width: 90,
              height: 4,
              borderRadius: 2,
              background: 'rgba(255,255,255,0.25)',
              margin: '8px auto 0',
              flexShrink: 0,
            }}
          />
        </div>

        {/* Floor glow */}
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '10%',
            right: '10%',
            height: 60,
            background:
              'linear-gradient(180deg, rgba(5,221,225,0.06) 0%, transparent 100%)',
            filter: 'blur(8px)',
            transform: 'scaleY(-0.4)',
            transformOrigin: 'top',
            opacity: 0.5,
          }}
        />
      </motion.div>
    </div>
  )
}
