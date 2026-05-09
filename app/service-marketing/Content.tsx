'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, CheckCircle2, Network, Users, PenSquare, Target, Sparkles } from 'lucide-react'
import TemoignagesSection from '../components/landing/TemoignagesSection'

const SERVICES = [
  {
    icon: Target,
    titre: 'Optimisation de profil',
    description: 'Nous optimisons chaque section de votre profil LinkedIn pour capter l\'attention, renforcer votre crédibilité et attirer naturellement les bonnes opportunités.',
    points: ['Photo et bannière professionnelles', 'Titre accrocheur et section À propos', 'Mots-clés stratégiques pour la recherche'],
  },
  {
    icon: PenSquare,
    titre: 'Création de contenu',
    description: 'Une ligne éditoriale cohérente et des publications percutantes pour développer votre audience et asseoir votre expertise sur LinkedIn.',
    points: ['Calendrier éditorial mensuel', 'Rédaction et publication de posts', 'Carrousels, vidéos et articles'],
  },
  {
    icon: Users,
    titre: 'Animation de réseau',
    description: 'Nous développons votre réseau de manière ciblée et qualitative pour générer des connexions qui comptent vraiment pour votre activité.',
    points: ['Stratégie de connexion ciblée', 'Engagement actif sur les publications', 'Gestion des messages et relances'],
  },
  {
    icon: Network,
    titre: 'Coaching LinkedIn',
    description: 'Des sessions individuelles pour vous accompagner dans votre montée en compétences sur LinkedIn et définir votre stratégie personnelle.',
    points: ['Audit de votre profil existant', 'Sessions de coaching individuelles', 'Suivi et ajustements mensuels'],
  },
  {
    icon: Sparkles,
    titre: 'Ghostwriting',
    description: 'Nous rédigeons vos publications à votre voix pour que vous puissiez vous concentrer sur votre cœur de métier tout en restant visible.',
    points: ['Publications sur mesure à votre ton', 'Stratégie de contenu définie ensemble', 'Révisions illimitées incluses'],
  },
]

const PROCESS = [
  { step: '01', titre: 'Audit & Stratégie', desc: 'Analyse de votre profil actuel, de votre audience cible et de vos objectifs pour construire une stratégie sur mesure.' },
  { step: '02', titre: 'Mise en place', desc: 'Optimisation complète de votre profil, définition de la ligne éditoriale et calendrier de contenu.' },
  { step: '03', titre: 'Exécution', desc: 'Publication régulière, animation de réseau, gestion des interactions et suivi des performances.' },
  { step: '04', titre: 'Reporting', desc: 'Rapport mensuel avec vos KPIs clés, analyse des résultats et recommandations pour le mois suivant.' },
]

export default function ServiceMarketingContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden pt-24 pb-16">
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
            <Network className="w-3.5 h-3.5 text-secondary" />
            <span className="text-secondary text-xs font-semibold uppercase tracking-widest">Service phare</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 max-w-3xl"
          >
            Marketing{' '}
            <span className="gradient-text">LinkedIn</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/65 leading-relaxed mb-10 max-w-2xl"
          >
            Nous transformons votre présence LinkedIn en un outil de croissance business puissant.
            Profil, contenu, réseau — nous gérons tout pour que vous puissiez vous concentrer sur votre cœur de métier.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(5,221,225,0.45)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-secondary text-primary font-black px-8 py-4 rounded-2xl text-base shadow-glow hover:bg-tertiary transition-all duration-200"
            >
              <Calendar className="w-5 h-5" />
              Appel gratuit 30 min
            </motion.a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl text-base hover:bg-white/5 transition-all duration-200"
            >
              Nous écrire
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest"
              style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
              Ce que nous faisons
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              Nos <span className="gradient-text">prestations</span>
            </h2>
            <p className="text-lg text-white/55 max-w-2xl mx-auto">
              Un accompagnement sur mesure pour chaque étape de votre présence LinkedIn.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.titre}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                >
                  <div className="rounded-3xl p-6 border border-white/10 h-full"
                    style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border border-secondary/20"
                      style={{ backgroundColor: 'rgba(5,221,225,0.1)' }}>
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-black text-white mb-3">{service.titre}</h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-5">{service.description}</p>
                    <ul className="space-y-2">
                      {service.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-white/70">
                          <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-y border-white/8" style={{ backgroundColor: 'rgba(5,221,225,0.03)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              Comment ça <span className="gradient-text">fonctionne</span> ?
            </h2>
            <p className="text-lg text-white/55 max-w-xl mx-auto">
              Un processus clair en 4 étapes pour des résultats mesurables.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-black mb-4 gradient-text opacity-30">{p.step}</div>
                <h3 className="text-lg font-black text-white mb-2">{p.titre}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TemoignagesSection />

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #05dde1 0%, #0848aa 50%, transparent 80%)' }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Prêt à transformer votre{' '}
              <span className="gradient-text">LinkedIn</span> ?
            </h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              Réservez un appel gratuit de 30 min et discutons de votre projet ensemble.
            </p>
            <a
              href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-secondary text-primary font-black text-lg px-10 py-5 rounded-2xl shadow-glow hover:bg-tertiary transition-all duration-200"
            >
              <Calendar className="w-5 h-5" />
              Réserver mon appel gratuit
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
