'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'
import { EBOOKS } from '../../data/content'

export default function HomepageEbooks() {
  const featured = EBOOKS.slice(0, 4)

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest"
              style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
              Ressources
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Nos <span className="gradient-text">e-books</span> LinkedIn
            </h2>
            <p className="text-white/55 text-lg mt-4 max-w-lg">
              7 guides complets pour maîtriser LinkedIn de A à Z.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link
              href="/e-books"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-white/5 hover:text-secondary transition-all duration-200"
            >
              Voir tous les guides
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featured.map((ebook, i) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(5,221,225,0.12)' }}
                transition={{ duration: 0.2 }}
                className="group rounded-2xl overflow-hidden border border-white/8 h-full flex flex-col"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <Image
                    src={ebook.image}
                    alt={ebook.titre}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${ebook.tagColor}`}>
                      {ebook.tag}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-black text-white text-sm leading-tight mb-2">{ebook.titre}</h3>
                  <p className="text-white/45 text-xs leading-relaxed flex-1">{ebook.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-secondary/20"
          style={{ background: 'linear-gradient(135deg, rgba(8,72,170,0.3) 0%, rgba(5,221,225,0.1) 100%)' }}
        >
          <div>
            <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-2">7 guides disponibles</p>
            <h3 className="text-2xl font-black text-white mb-1">Accédez à toute la collection</h3>
            <p className="text-white/60 text-sm">Prospection, contenu, copywriting, algorithme, profil…</p>
          </div>
          <Link
            href="/e-books"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-secondary text-primary font-black px-7 py-3.5 rounded-xl text-sm shadow-glow hover:bg-tertiary transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            Voir tous les e-books
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
