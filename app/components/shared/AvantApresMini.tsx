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

/* Mini slider avant/après — identique à la page d'accueil (crossfade, sans clignotement) */
const AvantApresMini = memo(function AvantApresMini() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % AVANT_APRES.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <div>
      <div className="relative">
        {AVANT_APRES.map((pair, i) => (
          <div
            key={i}
            className={`grid grid-cols-2 gap-3 transition-opacity duration-700 ease-in-out ${i === index ? 'relative opacity-100' : 'absolute inset-0 opacity-0 pointer-events-none'}`}
          >
            <div className="relative rounded-xl overflow-hidden border border-white/10">
              <div className="absolute top-2 left-2 z-10 text-white text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: 'rgba(0,13,38,0.88)', border: '1px solid rgba(255,255,255,0.15)' }}>Avant</div>
              <Image src={pair.avant} alt="Avant" width={400} height={260} className="w-full h-auto" unoptimized />
            </div>
            <div className="relative rounded-xl overflow-hidden border" style={{ borderColor: 'rgba(5,221,225,0.35)', boxShadow: '0 0 14px rgba(5,221,225,0.1)' }}>
              <div className="absolute top-2 left-2 z-10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#05dde1' }}>Après</div>
              <Image src={pair.apres} alt="Après" width={400} height={260} className="w-full h-auto" unoptimized />
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
