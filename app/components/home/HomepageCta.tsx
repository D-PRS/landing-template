'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

export default function HomepageCta() {
  return (
    <section className="relative py-24 overflow-hidden">
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
            Prêt à accélérer{' '}
            <span className="gradient-text">votre croissance</span> ?
          </h2>

          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Réservez un appel gratuit de 30 minutes avec notre équipe pour définir
            votre stratégie LinkedIn et data analytics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(5,221,225,0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 bg-secondary text-primary font-black text-lg px-10 py-5 rounded-2xl shadow-glow hover:bg-tertiary transition-all duration-200"
            >
              <Calendar className="w-5 h-5" />
              Appel gratuit 30 min
            </motion.a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 border border-white/25 text-white font-bold text-lg px-10 py-5 rounded-2xl hover:bg-white/5 transition-all duration-200"
            >
              Nous contacter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
