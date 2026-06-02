'use client'

import Image from 'next/image'
import { useState, useEffect, memo } from 'react'

const AVANT_APRES = [
  { avant: '/avant-apres/15.png', apres: '/avant-apres/15bis.png' },
  { avant: '/avant-apres/18.png', apres: '/avant-apres/18bis.png' },
  { avant: '/avant-apres/21.png', apres: '/avant-apres/21bis.png' },
  { avant: '/avant-apres/24.png', apres: '/avant-apres/24bis.png' },
  { avant: '/avant-apres/27.png', apres: '/avant-apres/27bis.png' },
]

const CELL_H = 150 // hauteur fixe d'une carte (px)

/* Avant/après — conteneur à hauteur fixe, paires en crossfade absolu (taille garantie, sans clignotement) */
const AvantApresMini = memo(function AvantApresMini() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % AVANT_APRES.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ maxWidth: 460, margin: '0 auto' }}>
      <div style={{ position: 'relative', height: CELL_H }}>
        {AVANT_APRES.map((pair, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 10,
              opacity: i === index ? 1 : 0,
              transition: 'opacity 0.7s ease-in-out',
              pointerEvents: i === index ? 'auto' : 'none',
            }}
          >
            {/* Avant */}
            <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', height: CELL_H }}>
              <span style={{ position: 'absolute', top: 8, left: 8, zIndex: 10, color: '#fff', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 999, backgroundColor: 'rgba(0,13,38,0.88)', border: '1px solid rgba(255,255,255,0.15)' }}>Avant</span>
              <Image src={pair.avant} alt="Avant" width={400} height={300}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} unoptimized />
            </div>
            {/* Après */}
            <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(5,221,225,0.35)', boxShadow: '0 0 14px rgba(5,221,225,0.1)', height: CELL_H }}>
              <span style={{ position: 'absolute', top: 8, left: 8, zIndex: 10, color: '#002060', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 999, backgroundColor: '#05dde1' }}>Après</span>
              <Image src={pair.apres} alt="Après" width={400} height={300}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} unoptimized />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-1.5 mt-3">
        {AVANT_APRES.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)}
            className="rounded-full transition-all duration-300"
            style={{ width: i === index ? 18 : 5, height: 5, backgroundColor: i === index ? '#05dde1' : 'rgba(255,255,255,0.2)' }} />
        ))}
      </div>
    </div>
  )
})

export default AvantApresMini
