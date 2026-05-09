'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react'

export default function ContactContent() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Opens mailto as a simple contact method
    const mailto = `mailto:dylan@provisual.fr?subject=${encodeURIComponent(form.sujet || 'Contact depuis provisual')}&body=${encodeURIComponent(`Nom: ${form.nom}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle, #0848aa, transparent)' }} />

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

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="rounded-3xl p-8 border border-white/10"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                <h2 className="text-2xl font-black text-white mb-6">Envoyez-nous un message</h2>

                {sent ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle2 className="w-16 h-16 text-secondary mb-4" />
                    <h3 className="text-xl font-black text-white mb-2">Message envoyé !</h3>
                    <p className="text-white/55">Votre client mail devrait s&apos;ouvrir. On vous répond très vite.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Nom *</label>
                        <input
                          type="text"
                          required
                          value={form.nom}
                          onChange={(e) => setForm({ ...form, nom: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-secondary/50 transition-colors"
                          style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-secondary/50 transition-colors"
                          style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Sujet</label>
                      <input
                        type="text"
                        value={form.sujet}
                        onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-secondary/50 transition-colors"
                        style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                        placeholder="En quoi pouvons-nous vous aider ?"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-secondary/50 transition-colors resize-none"
                        style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                        placeholder="Décrivez votre projet ou votre question…"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(5,221,225,0.4)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-primary font-black px-8 py-4 rounded-xl text-base shadow-glow hover:bg-tertiary transition-all duration-200"
                    >
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </motion.button>
                  </form>
                )}
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
                style={{ background: 'linear-gradient(135deg, rgba(8,72,170,0.35) 0%, rgba(5,221,225,0.12) 100%)' }}>
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
                    href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit"
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
                    <a href="mailto:dylan@provisual.fr"
                      className="text-secondary text-sm hover:text-tertiary transition-colors">
                      dylan@provisual.fr
                    </a>
                    <p className="text-white/40 text-xs mt-1">Réponse sous 24h en jours ouvrés</p>
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
                  Notre équipe répond généralement sous <strong className="text-white">24 heures</strong> en jours ouvrés.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
