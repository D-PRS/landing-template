'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Clock, Zap } from 'lucide-react'

export default function CtaFinalSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-secondary/20 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Commencez maintenant
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">
            Prêt à devenir une<br />
            <span className="text-secondary">référence dans votre domaine</span> ?
          </h2>

          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Rejoignez 340 professionnels qui ont transformé leur présence grâce à notre méthode.
            Votre première formation est entièrement gratuite.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(5,221,225,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-secondary text-primary font-black text-xl px-10 py-5 rounded-2xl shadow-glow hover:bg-tertiary transition-all duration-200 mb-6"
          >
            Rejoindre l'Espace Pro maintenant
            <ArrowRight className="w-6 h-6" />
          </motion.button>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-secondary" />
              Sans engagement
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" />
              Annulation à tout moment
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-secondary" />
              Accès immédiat
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            <div className="flex -space-x-3">
              {[
                'https://randomuser.me/api/portraits/women/44.jpg',
                'https://randomuser.me/api/portraits/men/32.jpg',
                'https://randomuser.me/api/portraits/women/17.jpg',
                'https://randomuser.me/api/portraits/men/55.jpg',
                'https://randomuser.me/api/portraits/women/68.jpg',
              ].map((src, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-white/60 text-sm">
              <span className="text-white font-semibold">+340 apprenants</span> nous font confiance
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
