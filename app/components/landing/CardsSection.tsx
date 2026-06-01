'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, BookOpen, Users, ChevronRight, Lock, Unlock, ArrowRight } from 'lucide-react'
import { FORMATIONS, getNiveauLabel, getNiveauColor, formatApprenants } from '../../data/formations'

const CARD_COLORS = ['#002060', '#003580', '#05dde1', '#05fbe1']

export default function EbooksSection() {
  return (
    <section id="ebooks" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest"
            style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}
          >
            4 E-books
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Nos <span className="gradient-text">E-books</span> LinkedIn
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto">
            Des formations complètes, concrètes et actionnables pour performer sur LinkedIn,
            que vous soyez indépendant, dirigeant ou en recherche d&apos;emploi.
          </p>
        </motion.div>

        {/* Grid 2×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {FORMATIONS.map((formation, i) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(5,221,225,0.1)' }}
                transition={{ duration: 0.2 }}
                className="group rounded-2xl border overflow-hidden h-full flex flex-col"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  borderColor: 'rgba(255,255,255,0.08)',
                }}
              >
                {/* Cover */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={formation.image_cover_url}
                    alt={formation.titre}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: CARD_COLORS[i], mixBlendMode: 'color', opacity: 0.65 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute top-3 left-3 z-10">
                    {formation.est_gratuite ? (
                      <span className="inline-flex items-center gap-1 bg-secondary text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                        <Unlock className="w-3 h-3" /> Gratuit
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-secondary text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                        <Lock className="w-3 h-3" /> 27€
                      </span>
                    )}
                  </div>
                  <div className="absolute top-3 right-3 z-10">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getNiveauColor(formation.niveau)}`}>
                      {getNiveauLabel(formation.niveau)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-black text-white text-xl mb-2 leading-tight">{formation.titre}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">
                    {formation.description_courte}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-white/40 mb-5">
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{formation.nombre_chapitres} chap.</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{formation.duree_estimee_heures}h</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      <span>{formatApprenants(formation.nombre_apprenants)} apprenants</span>
                    </div>
                  </div>

                  <Link href={`/formations/${formation.slug}`}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2 text-secondary font-semibold text-sm hover:text-white transition-colors cursor-pointer"
                    >
                      {formation.est_gratuite ? 'Voir la formation' : 'Découvrir la formation'}
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-secondary/20"
          style={{ background: 'linear-gradient(135deg, rgba(0,32,96,0.35) 0%, rgba(5,221,225,0.1) 100%)' }}
        >
          <div>
            <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-2">ProVisual Academy</p>
            <h3 className="text-2xl font-black text-white mb-1">
              Accédez aux 4 formations avec l&apos;Espace Classe
            </h3>
            <p className="text-white/60 text-sm">
              Pour 9,99€/mois — communauté, mises à jour permanentes et certificats inclus.
            </p>
          </div>
          <a
            href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-secondary text-primary font-black px-7 py-3.5 rounded-xl text-sm shadow-glow hover:bg-tertiary transition-colors whitespace-nowrap"
          >
            En savoir plus
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
