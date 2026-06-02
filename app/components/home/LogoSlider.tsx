'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const LOGOS = [
  '1', '2', '3', '42', '43', '44', '45', '46', '47', '48',
  '49', '50', '51', '52', '53', '54', '55', '56',
]

export default function LogoSlider() {
  const triple = [...LOGOS, ...LOGOS, ...LOGOS]

  return (
    <section
      className="py-8 border-y border-white/8 overflow-hidden"
      style={{ backgroundColor: 'rgba(5,221,225,0.03)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span
            className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest"
            style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}
          >
            Ils nous font confiance
          </span>
        </motion.div>
      </div>

      {/* Piste sans ombres sur les bords */}
      <div
        className="flex animate-marquee"
        style={{ width: 'max-content' }}
      >
        {triple.map((logo, i) => (
          <div
            key={`${logo}-${i}`}
            className="flex-shrink-0 mx-4 w-44 h-16 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] max-lg:bg-white/90 max-lg:border-white/20"
          >
            <Image
              src={`/logos-clients/${logo}.png`}
              alt={`Client ${logo}`}
              width={130}
              height={48}
              className="max-h-10 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity max-lg:opacity-100 max-lg:p-2"
              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  )
}
