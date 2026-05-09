'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { EBOOKS } from '../../data/content'

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
          <span className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest"
            style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
            Collection complète
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Nos <span className="gradient-text">e-books</span> LinkedIn
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto">
            Des e-books clairs, concrets et actionnables pour performer sur LinkedIn.
            Que vous soyez indépendant, dirigeant ou en transition.
          </p>
        </motion.div>

        {/* Grid 3 columns on large, 2 on medium, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {EBOOKS.map((ebook, i) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            >
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(5,221,225,0.12)' }}
                transition={{ duration: 0.2 }}
                className="group rounded-2xl overflow-hidden border border-white/8 cursor-pointer h-full flex flex-col"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                {/* Cover image */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <Image
                    src={ebook.image}
                    alt={ebook.titre}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Tag */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${ebook.tagColor}`}>
                      {ebook.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-black text-white text-base leading-tight mb-2">
                    {ebook.titre}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1 mb-4">
                    {ebook.description}
                  </p>
                  <motion.a
                    href="https://provisual.fr/e-books"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-1.5 text-secondary text-sm font-semibold hover:text-tertiary transition-colors"
                  >
                    Obtenir ce guide
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
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
          className="mt-12 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-secondary/20"
          style={{ background: 'linear-gradient(135deg, rgba(8,72,170,0.3) 0%, rgba(5,221,225,0.1) 100%)' }}
        >
          <div>
            <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-2">Collection complète</p>
            <h3 className="text-2xl font-black text-white mb-1">
              Découvrez tous nos guides sur provisual.fr
            </h3>
            <p className="text-white/60 text-sm">
              Des guides clairs, éprouvés, directement applicables pour performer sur LinkedIn.
            </p>
          </div>
          <motion.a
            href="https://provisual.fr/e-books"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-secondary text-primary font-black px-7 py-3.5 rounded-xl text-sm shadow-glow hover:bg-tertiary transition-colors"
          >
            Voir la boutique complète
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
