'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, BookOpen, Users, ChevronRight, Lock, Unlock } from 'lucide-react'
import { CARDS_DATA } from '../../data/content'

const CARD_COLORS = ['#281259', '#482290', '#05DDE1', '#05FBE1']

function getNiveauLabel(niveau: string) {
  const labels: Record<string, string> = { debutant: 'Débutant', intermediaire: 'Intermédiaire', avance: 'Avancé' }
  return labels[niveau] || niveau
}

function getNiveauColor(niveau: string) {
  const colors: Record<string, string> = {
    debutant: 'bg-emerald-500/20 text-emerald-400',
    intermediaire: 'bg-amber-500/20 text-amber-400',
    avance: 'bg-rose-500/20 text-rose-400',
  }
  return colors[niveau] || 'bg-white/20 text-white'
}

export default function CardsSection() {
  return (
    <section id="formations" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-secondary/20 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            4 formations
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            4 formations pour maîtriser votre domaine de A à Z
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Chaque formation est conçue pour vous donner des résultats concrets et mesurables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CARDS_DATA.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden group relative hover:bg-white/10 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.image_cover_url}
                    alt={card.titre}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0" style={{ backgroundColor: CARD_COLORS[i], mixBlendMode: 'color', opacity: 0.7 }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {!card.est_gratuite && (
                    <>
                      <div className="absolute inset-0 bg-primary/40" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-primary/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10">
                          <Lock className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="absolute top-3 left-3 z-10">
                    {card.est_gratuite ? (
                      <span className="inline-flex items-center gap-1 bg-secondary text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                        <Unlock className="w-3 h-3" /> Gratuit
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-secondary text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                        <Lock className="w-3 h-3" /> Inclus Espace Pro
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 z-10">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getNiveauColor(card.niveau)}`}>
                      {getNiveauLabel(card.niveau)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-black text-white text-xl mb-2 leading-tight">{card.titre}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{card.description_courte}</p>

                  <div className="flex items-center gap-4 text-sm text-white/40 mb-5">
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4" />
                      <span>{card.nombre_chapitres} chapitres</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{card.duree_estimee_heures}h de contenu</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      <span>{card.nombre_apprenants.toLocaleString('fr-FR')} apprenants</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-secondary font-semibold text-sm hover:text-white transition-colors"
                  >
                    {card.est_gratuite ? 'Voir la formation' : 'Découvrir la formation'}
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 p-8 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-secondary/30 ring-1 ring-secondary/20"
          style={{ background: 'linear-gradient(to right, #002060, #0a3a8a)' }}
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">L'offre intelligente</span>
            </div>
            <h3 className="text-2xl font-black mb-1">Accédez aux 4 formations avec l'Espace Pro</h3>
            <p className="text-white/70">
              Pour 9,99€/mois, c'est 4x moins cher que d'acheter les formations à l'unité + communauté + mises à jour.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-secondary text-primary font-bold px-6 py-2.5 rounded-xl text-sm whitespace-nowrap shadow-glow hover:bg-tertiary transition-colors"
          >
            Rejoindre l'Espace Pro — 9,99€/mois
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
