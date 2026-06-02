'use client'

import { useState, useEffect, memo } from 'react'

const AVANT_APRES = [
  { avant: '/avant-apres/15.png', apres: '/avant-apres/15bis.png' },
  { avant: '/avant-apres/18.png', apres: '/avant-apres/18bis.png' },
  { avant: '/avant-apres/21.png', apres: '/avant-apres/21bis.png' },
  { avant: '/avant-apres/24.png', apres: '/avant-apres/24bis.png' },
  { avant: '/avant-apres/27.png', apres: '/avant-apres/27bis.png' },
]

/* Avant/après — version simple : <img> standard, une paire à la fois (affichage garanti) */
const AvantApresMini = memo(function AvantApresMini() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % AVANT_APRES.length), 3500)
    return () => clearInterval(t)
  }, [])

  const pair = AVANT_APRES[index]
  const cell: React.CSSProperties = { position: 'relative', borderRadius: 12, overflow: 'hidden' }
  const img: React.CSSProperties = { width: '100%', height: 150, objectFit: 'cover', display: 'block' }
  const badge: React.CSSProperties = { position: 'absolute', top: 8, left: 8, zIndex: 2, fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 999 }

  return (
    <div style={{ maxWidth: 460, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 10 }}>
        <div style={{ ...cell, border: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ ...badge, color: '#fff', backgroundColor: 'rgba(0,13,38,0.88)', border: '1px solid rgba(255,255,255,0.15)' }}>Avant</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={pair.avant} alt="Avant" style={img} />
        </div>
        <div style={{ ...cell, border: '1px solid rgba(5,221,225,0.35)', boxShadow: '0 0 14px rgba(5,221,225,0.1)' }}>
          <span style={{ ...badge, color: '#002060', backgroundColor: '#05dde1' }}>Après</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={pair.apres} alt="Après" style={img} />
        </div>
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
// rebuild 1780401939
