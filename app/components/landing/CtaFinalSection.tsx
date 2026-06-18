'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, BookOpen } from 'lucide-react'

const CDN = 'https://cdn.prod.website-files.com/68ab2d1a568ed1d53d774d32'

const AVATARS = [
  `${CDN}/68b605c0f0599c67093cc3aa_Pierrick.png`,
  `${CDN}/68b608ed49588bd5aca23903_Maylis.png`,
  `${CDN}/68b5ff2ba9b3ff9512d8ba74_Gaetant.png`,
  `${CDN}/68b608168ed5a22c8350a930_Nicolas.png`,
  `${CDN}/68b6068d0a093a8838989158_Issam.png`,
]

export default function CtaFinalSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #05dde1 0%, #002060 50%, transparent 80%)' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest"
            style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
            Passez à l&apos;action
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.05]">
            Prêt à devenir une{' '}
            <span className="gradient-text">référence</span>
            <br />
            sur LinkedIn ?
          </h2>

          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Téléchargez nos e-books ou réservez un appel gratuit de 30 minutes
            avec notre équipe pour définir votre stratégie LinkedIn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="https://www.provisual-academy.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(5,221,225,0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 bg-secondary text-primary font-black text-lg px-10 py-5 rounded-2xl shadow-glow hover:bg-tertiary transition-all duration-200"
            >
              <BookOpen className="w-5 h-5" />
              Voir les e-books
            </motion.a>
            <motion.a
              href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 border border-white/25 text-white font-bold text-lg px-10 py-5 rounded-2xl hover:bg-white/8 transition-all duration-200"
            >
              <Calendar className="w-5 h-5 text-secondary" />
              Appel gratuit 30 min
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="flex -space-x-3">
              {AVATARS.map((src, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 overflow-hidden flex-shrink-0"
                  style={{ borderColor: '#001a4d' }}>
                  <Image src={src} alt="" width={40} height={40} className="w-full h-full object-cover" unoptimized />
                </div>
              ))}
            </div>
            <p className="text-white/55 text-sm">
              <span className="text-white font-semibold">20+ entreprises</span> nous font confiance
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
