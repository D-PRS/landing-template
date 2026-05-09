'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, RefreshCw, Award, Sparkles, Headphones } from 'lucide-react'

const FEATURES = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    titre: '4 Formations complètes',
    desc: 'Des centaines de modules avec du contenu pratique et actionnable pour progresser rapidement.',
    customStyle: { backgroundColor: 'rgba(40,18,89,0.7)', color: '#9B6FEC' },
    delay: 0,
  },
  {
    icon: <Users className="w-6 h-6" />,
    titre: 'Accès à la communauté d\'apprenants',
    desc: 'Rejoignez 340+ professionnels actifs. Posez vos questions, partagez vos résultats, progressez ensemble.',
    color: 'bg-teal-400/20 text-teal-400',
    delay: 0.1,
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    titre: 'Mises à jour des formations incluses',
    desc: 'Le secteur évolue constamment. Vos formations sont mises à jour automatiquement à chaque changement.',
    customStyle: { backgroundColor: 'rgba(40,18,89,0.7)', color: '#9B6FEC' },
    delay: 0.2,
  },
  {
    icon: <Award className="w-6 h-6" />,
    titre: 'Quiz et certificats de complétion',
    desc: 'Validez vos acquis avec des quiz et obtenez un certificat professionnel à afficher sur votre profil.',
    color: 'bg-cyan-400/20 text-cyan-400',
    delay: 0.3,
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    titre: 'Nouveaux contenus en avant-première',
    desc: 'Soyez les premiers à accéder aux nouveaux modules, webinaires et ressources bonus.',
    customStyle: { backgroundColor: 'rgba(40,18,89,0.7)', color: '#9B6FEC' },
    delay: 0.4,
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    titre: 'Support et entraide communautaire',
    desc: 'Notre équipe et la communauté répondent à vos questions. Vous n\'êtes jamais seul dans votre apprentissage.',
    color: 'bg-sky-400/15 text-sky-400',
    delay: 0.5,
  },
]

export default function FeaturesSection() {
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
          <span className="inline-block bg-secondary/20 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Tout inclus
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Tout ce qui est inclus dans votre abonnement
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Pour 9,99€/mois, vous accédez à une plateforme complète conçue pour vous faire progresser rapidement et durablement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.titre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
            >
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(5,221,225,0.1)' }}
                transition={{ duration: 0.2 }}
                className="bg-white/5 rounded-2xl p-6 h-full border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${feature.color || ''}`}
                  style={feature.customStyle}
                >
                  {feature.icon}
                </div>
                <h3 className="font-bold text-white text-base mb-2 leading-snug">{feature.titre}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 text-lg">
            Tout ça pour{' '}
            <span className="font-black text-secondary text-2xl">9,99€/mois</span>
            {' '}— moins d'un café par semaine.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
