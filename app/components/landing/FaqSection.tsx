'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '../../data/content'

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="text-white/55 text-lg">Tout ce que vous devez savoir avant de commencer.</p>
        </motion.div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl overflow-hidden border border-white/10"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
              >
                <span className={`font-semibold text-sm md:text-base transition-colors ${open === i ? 'text-secondary' : 'text-white'}`}>
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex-shrink-0 transition-colors ${open === i ? 'text-secondary' : 'text-white/40'}`}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-sm text-white/55 leading-relaxed border-t border-white/8 pt-4">
                      {item.reponse}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center p-6 rounded-2xl border border-white/10"
          style={{ backgroundColor: 'rgba(5,221,225,0.05)' }}
        >
          <p className="text-white/60 mb-2 text-sm">Vous avez une autre question ?</p>
          <a
            href="https://provisual.fr/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary font-semibold hover:text-tertiary transition-colors text-sm"
          >
            Contactez-nous sur provisual.fr →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
