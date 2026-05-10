'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const CLIENTS = Array.from({ length: 18 }, (_, i) => `/clients/${i + 1}.png`)

// Float params — varied per avatar for organic feel
const FLOATS = [
  { dur: 3.2, delay: 0.0, dy: 11 },
  { dur: 2.7, delay: 0.5, dy: 9  },
  { dur: 3.5, delay: 0.9, dy: 13 },
  { dur: 2.9, delay: 0.3, dy: 10 },
  { dur: 3.3, delay: 0.8, dy: 12 },
  { dur: 3.0, delay: 0.4, dy: 10 },
  { dur: 3.4, delay: 0.7, dy: 11 },
  { dur: 2.8, delay: 0.2, dy: 9  },
  { dur: 3.1, delay: 0.6, dy: 12 },
  { dur: 2.6, delay: 0.1, dy: 9  },
  { dur: 3.6, delay: 1.0, dy: 13 },
  { dur: 2.9, delay: 0.4, dy: 10 },
  { dur: 3.3, delay: 0.8, dy: 11 },
  { dur: 3.0, delay: 0.3, dy: 10 },
  { dur: 2.7, delay: 0.6, dy: 9  },
  { dur: 3.4, delay: 0.2, dy: 12 },
  { dur: 3.1, delay: 0.9, dy: 11 },
  { dur: 2.8, delay: 0.5, dy: 10 },
]

// 18 positions spread homogeneously around the centered phone
// Phone is 220×470px centered in a ~600×680 container
// Safe zones: top<15%, bottom>85%, left<28%, right<28%
const POSITIONS: React.CSSProperties[] = [
  // Top row (5) — above phone top edge (~15%)
  { top: '3%',    left: '2%'   },
  { top: '2%',    left: '20%'  },
  { top: '1%',    left: '42%'  },
  { top: '2%',    left: '63%'  },
  { top: '3%',    right: '2%'  },
  // Left column (4) — left of phone left edge (~31%)
  { top: '20%',   left: '2%'   },
  { top: '38%',   left: '1%'   },
  { top: '56%',   left: '2%'   },
  { top: '74%',   left: '1%'   },
  // Right column (4) — right of phone right edge (~69%)
  { top: '18%',   right: '2%'  },
  { top: '36%',   right: '1%'  },
  { top: '54%',   right: '2%'  },
  { top: '72%',   right: '1%'  },
  // Bottom row (5) — below phone bottom edge (~85%)
  { bottom: '3%', left: '2%'   },
  { bottom: '2%', left: '20%'  },
  { bottom: '1%', left: '42%'  },
  { bottom: '2%', left: '63%'  },
  { bottom: '3%', right: '2%'  },
]

function StatCard({ src, delay, floatDy }: { src: string; delay: number; floatDy: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: [0, -floatDy, 0] }}
      transition={{
        opacity: { delay, duration: 0.45 },
        scale: { delay, duration: 0.45, type: 'spring', stiffness: 220, damping: 20 },
        y: { delay: delay + 0.5, duration: 3.8, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop' },
      }}
      style={{
        width: 170,
        height: 170,
        borderRadius: 18,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 12px 50px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.12), 0 0 30px rgba(5,221,225,0.12)',
      }}
    >
      <Image src={src} alt="" fill className="object-cover object-top" unoptimized />
    </motion.div>
  )
}

export default function HomepageHeroVisual() {
  return (
    <div className="relative w-full" style={{ height: 680 }}>

      {/* Floating client avatars — 18 spread around phone */}
      {CLIENTS.map((src, i) => {
        const f = FLOATS[i]
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{ ...POSITIONS[i], zIndex: 10 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, y: [0, -f.dy, 0] }}
            transition={{
              opacity: { delay: 0.4 + i * 0.07, duration: 0.4 },
              scale:   { delay: 0.4 + i * 0.07, duration: 0.4, type: 'spring' },
              y:       { duration: f.dur, repeat: Infinity, ease: 'easeInOut', delay: f.delay, repeatType: 'loop' },
            }}
          >
            <div
              className="w-12 h-12 rounded-full overflow-hidden relative"
              style={{
                border: '2.5px solid rgba(5,221,225,0.4)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4), 0 0 12px rgba(5,221,225,0.15)',
              }}
            >
              <Image src={src} alt="" fill className="object-cover" unoptimized />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0d0620]" />
          </motion.div>
        )
      })}

      {/* Phone mockup — perfectly centered */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 15,
        }}
      >
        <div style={{
          width: 220,
          height: 470,
          borderRadius: 44,
          background: 'linear-gradient(160deg, #1c1c2e 0%, #0d0620 100%)',
          border: '2px solid rgba(255,255,255,0.14)',
          boxShadow: '0 40px 90px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1px rgba(0,0,0,0.5)',
          padding: '14px 7px 12px',
          display: 'flex',
          flexDirection: 'column',
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
          <div style={{ width: 80, height: 26, borderRadius: 13, background: '#000', margin: '0 auto 10px', flexShrink: 0 }} />
          {/* Screen */}
          <div style={{ flex: 1, borderRadius: 30, overflow: 'hidden', position: 'relative', backgroundColor: '#EEF3F8' }}>
            <Image
              src="/linkedin-profile.png"
              alt="Profil LinkedIn Dylan Parisi"
              fill
              className="object-contain object-top"
              unoptimized
            />
          </div>
          {/* Home bar */}
          <div style={{ width: 90, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.25)', margin: '10px auto 0', flexShrink: 0 }} />
        </div>
      </motion.div>

      {/* Stat card — abonnés (31.png) — appears first, left-bottom of phone */}
      <div style={{ position: 'absolute', top: '62%', left: '22%', zIndex: 25 }}>
        <StatCard src="/31.png" delay={1.4} floatDy={7} />
      </div>

      {/* Stat card — impressions (30.png) — appears second, right-bottom of phone */}
      <div style={{ position: 'absolute', top: '70%', right: '21%', zIndex: 25 }}>
        <StatCard src="/30.png" delay={2.1} floatDy={9} />
      </div>
    </div>
  )
}
