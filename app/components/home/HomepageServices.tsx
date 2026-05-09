'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Network } from 'lucide-react'

const SERVICES = [
  {
    icon: Network,
    titre: 'Marketing LinkedIn',
    description: 'Optimisation de profil, création de contenu percutant, animation de réseau. Nous transformons votre visibilité LinkedIn en opportunités business concrètes.',
    cta: 'Découvrir nos services LinkedIn',
    href: '/service-marketing',
    badge: 'Service phare',
  },
  {
    icon: BarChart3,
    titre: 'Data & Analytics',
    description: 'Tableaux de bord Power BI, Looker Studio, automatisation Power Platform. Vos données transformées en décisions claires pour les TPE/PME.',
    cta: 'Découvrir nos services Data',
    href: '/service-data-analytics',
    badge: '',
  },
]

export default function HomepageServices() {
  return (
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
            Nos expertises
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Deux expertises,{' '}
            <span className="gradient-text">un seul objectif</span>
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto">
            Votre croissance. Nous accompagnons votre entreprise sur deux piliers distincts
            pour maximiser votre impact digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.titre}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="relative rounded-3xl p-8 border border-white/10 h-full overflow-hidden group"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                    style={{ background: 'linear-gradient(135deg, rgba(8,72,170,0.15) 0%, rgba(5,221,225,0.08) 100%)' }} />

                  <div className="relative z-10">
                    {service.badge && (
                      <span className="inline-block bg-secondary/20 text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
                        {service.badge}
                      </span>
                    )}
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-secondary/20"
                      style={{ backgroundColor: 'rgba(5,221,225,0.1)' }}>
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">{service.titre}</h3>
                    <p className="text-white/60 leading-relaxed mb-8">{service.description}</p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:text-tertiary transition-colors group/link"
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
