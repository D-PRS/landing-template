'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// Shuffled order — mixes top/bottom clients across the layout
const CLIENT_PHOTOS = [8, 14, 2, 17, 5, 11, 1, 16, 7, 3, 13, 6, 18, 9, 4, 15, 12, 10].map(
  n => `/clients/${n}.png`
)

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

// Organic positions — NOT aligned in rows/columns
// Phone is 224×480 centered in ~600×740 container
// Rule: each avatar must be outside the phone rectangle (x<27% | x>73% | y<14% | y>86%)
const POSITIONS: React.CSSProperties[] = [
  { top: '3%',    left: '4%'   },  //  0 — top-left corner
  { top: '7%',    left: '26%'  },  //  1 — upper-left (y=11% < 14% → above phone ✓)
  { top: '2%',    left: '48%'  },  //  2 — top-center (above phone ✓)
  { top: '6%',    right: '20%' },  //  3 — upper-right (y=10% < 14% ✓)
  { top: '1%',    right: '3%'  },  //  4 — top-right corner
  { top: '20%',   left: '5%'   },  //  5 — left, high (x=9% < 27% ✓)
  { top: '36%',   left: '13%'  },  //  6 — left, varied x (x=17% < 27% ✓)
  { top: '51%',   left: '3%'   },  //  7 — left, center
  { top: '66%',   left: '11%'  },  //  8 — left, low (x=15% < 27% ✓)
  { top: '80%',   left: '4%'   },  //  9 — left, bottom
  { top: '16%',   right: '3%'  },  // 10 — right, high (x=93% > 73% ✓)
  { top: '30%',   right: '11%' },  // 11 — right, varied x (x=85% > 73% ✓)
  { top: '46%',   right: '3%'  },  // 12 — right, center
  { top: '62%',   right: '10%' },  // 13 — right, low (x=86% > 73% ✓)
  { top: '77%',   right: '4%'  },  // 14 — right, bottom
  { bottom: '4%', left: '7%'   },  // 15 — bottom-left
  { bottom: '2%', left: '44%'  },  // 16 — bottom-center (y=96% > 86% ✓)
  { bottom: '4%', right: '6%'  },  // 17 — bottom-right
]

function StatCard({
  src, label, delay, floatDy,
}: { src: string; label: string; delay: number; floatDy: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.72, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: [0, -floatDy, 0] }}
      transition={{
        opacity: { delay, duration: 0.45 },
        scale:   { delay, duration: 0.45, type: 'spring', stiffness: 220, damping: 22 },
        y:       { delay: delay + 0.55, duration: 4, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop' },
      }}
    >
      <div style={{
        width: 172,
        height: 172,
        borderRadius: 18,
        overflow: 'hidden',
        background: '#ffffff',
        border: '1.5px solid rgba(5,221,225,0.6)',
        boxShadow: '0 20px 70px rgba(0,0,0,0.7), 0 0 40px rgba(5,221,225,0.3)',
        position: 'relative',
      }}>
        <Image src={src} alt={label} fill className="object-contain" unoptimized />
      </div>
    </motion.div>
  )
}

export default function HomepageHeroVisual() {
  return (
    <div className="relative w-full" style={{ height: 740 }}>

      {/* ── Floating client avatars ── */}
      {CLIENT_PHOTOS.map((src, i) => {
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
              className="relative w-12 h-12 rounded-full overflow-hidden"
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

      {/* ── Phone + stat cards (positioned together so cards align with phone) ── */}
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
        {/* Phone shell */}
        <div style={{
          width: 224,
          height: 480,
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
          {/* Shine overlay */}
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
              className="object-cover object-top"
              unoptimized
            />
          </div>
          {/* Home bar */}
          <div style={{ width: 90, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.25)', margin: '10px auto 0', flexShrink: 0 }} />
        </div>

        {/* Stat: abonnés — overlaps phone from the left */}
        <div style={{ position: 'absolute', bottom: 55, left: -130, zIndex: 25 }}>
          <StatCard src="/31.png" label="Abonnés" delay={1.3} floatDy={7} />
        </div>

        {/* Stat: impressions — overlaps phone from the right */}
        <div style={{ position: 'absolute', bottom: 12, right: -130, zIndex: 25 }}>
          <StatCard src="/30.png" label="Impressions" delay={2.0} floatDy={9} />
        </div>
      </motion.div>

    </div>
  )
}
