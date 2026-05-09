'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, CheckCircle2, BarChart3, Database, Zap, BookOpen, LineChart } from 'lucide-react'
import TemoignagesSection from '../components/landing/TemoignagesSection'

const SERVICES = [
  {
    icon: BarChart3,
    titre: 'Tableaux de bord Power BI',
    description: 'Visualisez vos données business en temps réel avec des dashboards Power BI clairs, interactifs et adaptés à votre activité.',
    points: ['Connexion à vos sources de données', 'Dashboards interactifs sur mesure', 'Formation à la prise en main'],
  },
  {
    icon: LineChart,
    titre: 'Looker Studio',
    description: 'Des rapports web accessibles depuis n\'importe quel navigateur, connectés à Google Analytics, Ads, Sheets et bien plus encore.',
    points: ['Rapports Google Data Studio', 'Connecteurs Google Ads / Analytics', 'Partage et collaboration en équipe'],
  },
  {
    icon: Zap,
    titre: 'Automatisation Power Platform',
    description: 'Automatisez vos processus métiers répétitifs avec Power Automate pour gagner du temps et réduire les erreurs humaines.',
    points: ['Automatisation de flux de travail', 'Intégration Microsoft 365', 'Alertes et notifications intelligentes'],
  },
  {
    icon: Database,
    titre: 'Conseil stratégique data',
    description: 'Identifiez les indicateurs clés de votre activité et construisez une culture data qui guide vos décisions stratégiques.',
    points: ['Audit de votre maturité data', 'Définition de vos KPIs business', 'Feuille de route data personnalisée'],
  },
  {
    icon: BookOpen,
    titre: 'Formation des équipes',
    description: 'Montez en compétences avec des formations sur mesure pour votre équipe sur Power BI, Power Automate et les fondamentaux data.',
    points: ['Formation Power BI débutant / avancé', 'Ateliers pratiques sur vos données réelles', 'Support et suivi post-formation'],
  },
]

const PROCESS = [
  { step: '01', titre: 'Audit data', desc: 'Analyse de vos sources de données actuelles, vos processus et vos besoins en reporting.' },
  { step: '02', titre: 'Conception', desc: 'Définition des KPIs, architecture des tableaux de bord et maquettes validées avec vous.' },
  { step: '03', titre: 'Développement', desc: 'Création des dashboards, connexion aux sources de données et tests de fiabilité.' },
  { step: '04', titre: 'Livraison & Formation', desc: 'Livraison du projet, formation à la prise en main et support continu.' },
]

export default function ServiceDataContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle, #05dde1, transparent)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-secondary/30 rounded-full px-4 py-1.5 mb-8"
            style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}
          >
            <BarChart3 className="w-3.5 h-3.5 text-secondary" />
            <span className="text-secondary text-xs font-semibold uppercase tracking-widest">Data & Analytics</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 max-w-3xl"
          >
            Data &amp;{' '}
            <span className="gradient-text">Analytics</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/65 leading-relaxed mb-10 max-w-2xl"
          >
            Tableaux de bord Power BI, Looker Studio, automatisation Power Platform.
            Nous transformons vos données brutes en décisions claires pour piloter votre croissance.
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
              Nos <span className="gradient-text">prestations</span> data
            </h2>
            <p className="text-lg text-white/55 max-w-2xl mx-auto">
              Des solutions adaptées aux TPE et PME pour exploiter pleinement leurs données.
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
              Un processus structuré pour des livrables clairs et des résultats mesurables.
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
              Vos données méritent mieux qu&apos;un{' '}
              <span className="gradient-text">tableur Excel</span>
            </h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              Parlons de votre projet data. Appel gratuit de 30 minutes, sans engagement.
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
