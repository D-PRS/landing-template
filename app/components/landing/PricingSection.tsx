'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { PLANS } from '../../data/content'

const COMPARE_ROWS = [
  { feature: 'Formations accessibles', free: '1', pro: '4', unite: '1' },
  { feature: 'Accès communauté', free: 'Non', pro: 'Oui', unite: 'Non' },
  { feature: 'Certificats', free: 'Non', pro: '4', unite: '1' },
  { feature: 'Mises à jour', free: 'Non', pro: 'Permanentes', unite: 'Non' },
  { feature: 'Prix', free: '0€', pro: '9,99€/mois', unite: '27€' },
  { feature: "Durée d'accès", free: 'Illimité', pro: "Pendant l'abonnement", unite: 'Illimité' },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Un accès simple et transparent
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Pas de frais cachés, pas de piège. Choisissez la formule qui correspond à vos besoins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.nom}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 hover:ring-2 hover:ring-secondary hover:shadow-glow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {plan.badge && (
                <div className="absolute top-0 left-0 right-0 bg-secondary text-primary text-xs font-black text-center py-2 uppercase tracking-wider z-10">
                  {plan.badge}
                </div>
              )}

              <div className={`p-8 ${plan.badge ? 'pt-12' : ''} bg-white/5 backdrop-blur-sm group-hover:bg-primary transition-colors duration-300`}>
                <h3 className="font-black text-xl mb-1 text-white">{plan.nom}</h3>
                <p className="text-sm mb-6 text-white/50 group-hover:text-white/60 transition-colors duration-300">{plan.description}</p>

                <div className="flex items-end gap-1 mb-8">
                  <span className="text-5xl font-black text-white">{plan.prix}€</span>
                  {'periode' in plan && plan.periode && (
                    <span className="text-lg mb-1 text-white/50 group-hover:text-white/60 transition-colors duration-300">{plan.periode}</span>
                  )}
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3.5 rounded-2xl font-bold text-base transition-all duration-300 border-2 border-white/30 text-white bg-transparent group-hover:bg-secondary group-hover:text-primary group-hover:border-transparent"
                >
                  {plan.cta}
                </motion.button>
              </div>

              <div className="px-8 pb-8 space-y-3 bg-white/5 group-hover:bg-primary/95 transition-colors duration-300">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    {f.included
                      ? <Check className="w-4 h-4 flex-shrink-0 text-secondary transition-colors duration-300" />
                      : <X className="w-4 h-4 flex-shrink-0 text-white/20" />
                    }
                    <span className={`text-sm transition-colors duration-300 ${f.included ? 'text-white/80 group-hover:text-white/90' : 'text-white/25 line-through'}`}>
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center uppercase tracking-wider">Comparatif détaillé</h3>
          <div className="overflow-x-auto rounded-2xl ring-2 ring-secondary/40 shadow-glow-lg">
            <table className="w-full border-collapse bg-primary">
              <thead>
                <tr className="bg-primary">
                  <th className="text-left px-6 py-5 font-semibold text-sm text-white/80 rounded-tl-2xl border-b border-white/10">Fonctionnalité</th>
                  <th className="text-center px-6 py-5 font-semibold text-sm text-white/70 border-b border-white/10">Gratuit</th>
                  <th className="text-center px-6 py-5 font-black text-sm bg-secondary text-primary border-b border-secondary">Espace Pro</th>
                  <th className="text-center px-6 py-5 font-semibold text-sm text-white/70 rounded-tr-2xl border-b border-white/10">À l'unité</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-primary' : 'bg-white/[0.03]'}>
                    <td className="px-6 py-4 text-sm font-semibold text-white border-b border-white/[0.07]">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-sm text-white/80 border-b border-white/[0.07]">{row.free}</td>
                    <td className="px-6 py-4 text-center text-sm font-bold text-secondary bg-secondary/10 border-b border-secondary/15">{row.pro}</td>
                    <td className="px-6 py-4 text-center text-sm text-white/80 border-b border-white/[0.07]">{row.unite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
