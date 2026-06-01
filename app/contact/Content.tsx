'use client'

import { motion } from 'framer-motion'
import { Calendar, Mail, MessageSquare } from 'lucide-react'

export default function ContactContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle, #002060, transparent)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-secondary/30 rounded-full px-4 py-1.5 mb-8"
            style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}
          >
            <MessageSquare className="w-3.5 h-3.5 text-secondary" />
            <span className="text-secondary text-xs font-semibold uppercase tracking-widest">Parlons-nous</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 max-w-2xl"
          >
            Contactez{' '}
            <span className="gradient-text">Provisual</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/65 leading-relaxed max-w-xl"
          >
            Une question, un projet, une idée ? On vous répond rapidement.
            Ou réservez directement un appel gratuit de 30 minutes.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Calendly — prise de rendez-vous */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="rounded-3xl p-4 sm:p-6 border border-white/10"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                <h2 className="text-2xl font-black text-white mb-2 px-2">Réservez un appel</h2>
                <p className="text-white/55 text-sm mb-5 px-2">
                  Choisissez le créneau qui vous convient — 30 minutes, sans engagement.
                </p>
                <div className="rounded-2xl overflow-hidden bg-white">
                  <iframe
                    src="https://calendly.com/contact-provisual/30min?hide_gdpr_banner=1&background_color=ffffff&primary_color=05dde1"
                    title="Réserver un appel avec Provisual"
                    className="w-full"
                    style={{ height: 700, border: 0 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Contact info + Calendly */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Calendly CTA */}
              <div className="rounded-3xl p-8 border border-secondary/20 overflow-hidden relative"
                style={{ background: 'linear-gradient(135deg, rgba(0,32,96,0.4) 0%, rgba(5,221,225,0.12) 100%)' }}>
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #05dde1, transparent)' }} />
                <div className="relative z-10">
                  <Calendar className="w-10 h-10 text-secondary mb-5" />
                  <h3 className="text-2xl font-black text-white mb-3">Appel gratuit 30 min</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Réservez directement un créneau dans notre agenda.
                    Aucun engagement — juste une conversation pour voir si on peut vous aider.
                  </p>
                  <motion.a
                    href="https://calendly.com/contact-provisual/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 bg-secondary text-primary font-black px-7 py-3.5 rounded-xl text-sm shadow-glow hover:bg-tertiary transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    Réserver mon appel
                  </motion.a>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-3xl p-6 border border-white/10"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-secondary/20"
                    style={{ backgroundColor: 'rgba(5,221,225,0.1)' }}>
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-black text-white mb-1">Email</h4>
                    <a href="mailto:contact@provisual.fr"
                      className="text-secondary text-sm hover:text-tertiary transition-colors">
                      contact@provisual.fr
                    </a>
                    <p className="text-white/40 text-xs mt-1">Réponse sous 1H en jours ouvrés</p>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="rounded-2xl p-5 border border-white/8"
                style={{ backgroundColor: 'rgba(5,221,225,0.05)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-semibold">Disponible</span>
                </div>
                <p className="text-white/55 text-sm">
                  Notre équipe répond généralement sous <strong className="text-white">1 heure</strong> en jours ouvrés.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
