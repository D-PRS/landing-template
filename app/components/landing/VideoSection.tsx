'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, RefreshCw, Zap } from 'lucide-react'

const POINTS_CLES = [
  { Icon: BookOpen, customStyle: { backgroundColor: 'rgba(40,18,89,0.7)', color: '#9B6FEC' }, titre: '4 formations complètes', desc: 'Des centaines de modules pratiques et actionnables.' },
  { Icon: Users, color: 'text-teal-400 bg-teal-400/20', titre: 'Communauté active', desc: '+340 apprenants qui s\'entraident au quotidien.' },
  { Icon: RefreshCw, color: 'text-sky-400 bg-sky-400/15', titre: 'Mises à jour permanentes', desc: 'Contenu actualisé à chaque évolution du secteur.' },
]

export default function VideoSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Découvrez la plateforme en 3 minutes
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Comprenez pourquoi 340 professionnels ont fait confiance à notre méthode pour transformer leur présence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] blur-2xl pointer-events-none" style={{ backgroundColor: 'rgba(5,221,225,0.3)' }} />
              <div className="absolute -inset-1 rounded-3xl blur-lg pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(5,221,225,0.4), rgba(5,221,225,0.2), rgba(5,221,225,0.4))' }} />
              <div className="relative rounded-3xl overflow-hidden ring-2 ring-secondary/50 shadow-glow-lg bg-gray-900">
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/A1_Un2LtmGM?rel=0&modestbranding=1"
                    title="Présentation"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 pointer-events-none">
                  <div>
                    <p className="text-white/70 text-sm mb-1">Présentation officielle</p>
                    <h3 className="text-white font-bold text-lg">La plateforme complète</h3>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {POINTS_CLES.map((point, i) => {
              const { Icon } = point
              return (
                <motion.div
                  key={point.titre}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${point.color || ''}`}
                    style={point.customStyle}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">{point.titre}</h4>
                    <p className="text-white/60 text-sm mt-0.5">{point.desc}</p>
                  </div>
                </motion.div>
              )
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-5 rounded-2xl backdrop-blur-sm border border-purple-500/20"
              style={{ backgroundColor: 'rgba(40,18,89,0.45)', boxShadow: '0 0 24px rgba(155,111,236,0.2)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(40,18,89,0.7)' }}>
                  <Zap className="w-5 h-5" style={{ color: '#9B6FEC' }} />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Accès immédiat</p>
                  <p className="text-white/50 text-xs">Dès votre inscription</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Commencez le module découverte gratuitement dès maintenant, sans carte bancaire.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
