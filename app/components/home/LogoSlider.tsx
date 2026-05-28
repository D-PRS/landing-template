'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const LOGOS = [
  '1', '2', '3', '42', '43', '44', '45', '46', '47', '48',
  '49', '50', '51', '52', '53', '54', '55', '56',
]

function LogoTrack({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...LOGOS, ...LOGOS]
  return (
    <div className="overflow-hidden relative">
      <div className={reverse ? 'animate-marquee-reverse' : 'animate-marquee'} style={{ display: 'flex', width: 'max-content' }}>
        {doubled.map((logo, i) => (
          <div
            key={`${logo}-${i}`}
            className="flex-shrink-0 mx-4 w-28 h-14 flex items-center justify-center rounded-xl border border-white/6"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
          >
            <Image
              src={`/logos-clients/${logo}.png`}
              alt={`Logo client ${logo}`}
              width={88}
              height={44}
              className="object-contain max-h-10 max-w-[80px] opacity-70 hover:opacity-100 transition-opacity duration-300"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function LogoSlider() {
  return (
    <section className="py-16 border-y border-white/8 overflow-hidden" style={{ backgroundColor: 'rgba(5,221,225,0.04)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest"
            style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
            Ils nous font confiance
          </span>
        </motion.div>
      </div>

      <div className="space-y-4">
        <LogoTrack reverse={false} />
        <LogoTrack reverse={true} />
      </div>
    </section>
  )
}
