'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Clock, Play } from 'lucide-react'
import type { ChapitreFormation } from '../../data/formations'

export default function AccordionProgramme({ chapitres }: { chapitres: ChapitreFormation[] }) {
  const [open, setOpen] = useState<Set<string>>(new Set([chapitres[0]?.id]))

  const toggle = (id: string) => {
    setOpen(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const totalModules = chapitres.reduce((s, ch) => s + ch.modules.length, 0)
  const totalMinutes = chapitres.reduce(
    (s, ch) => s + ch.modules.reduce((ms, m) => ms + m.duree_minutes, 0),
    0,
  )
  const heures = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  return (
    <div>
      <div className="flex items-center gap-4 text-sm text-white/40 mb-4">
        <span>{chapitres.length} chapitre{chapitres.length > 1 ? 's' : ''}</span>
        <span>·</span>
        <span>{totalModules} modules</span>
        <span>·</span>
        <span>{heures}h{minutes > 0 ? `${minutes}min` : ''} de contenu</span>
      </div>

      <div className="space-y-2">
        {chapitres.map((ch, idx) => {
          const isOpen = open.has(ch.id)
          const chapMinutes = ch.modules.reduce((s, m) => s + m.duree_minutes, 0)
          const chH = Math.floor(chapMinutes / 60)
          const chM = chapMinutes % 60

          return (
            <div
              key={ch.id}
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <button
                onClick={() => toggle(ch.id)}
                className="w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-white/5"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="w-6 h-6 rounded-full text-primary text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: '#05dde1' }}
                  >
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-white text-sm">{ch.titre}</h4>
                    <p className="text-white/40 text-xs mt-0.5">
                      {ch.modules.length} modules · {chH > 0 ? `${chH}h` : ''}{chM > 0 ? `${chM}min` : ''}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-white/40 flex-shrink-0"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                      {ch.modules.map(mod => (
                        <div key={mod.id} className="flex items-center gap-3 px-4 py-3">
                          <Play className="w-3.5 h-3.5 text-white/20 flex-shrink-0" />
                          <span className="text-sm text-white/60 flex-1">{mod.titre}</span>
                          <div className="flex items-center gap-1 text-white/30 flex-shrink-0">
                            <Clock className="w-3 h-3" />
                            <span className="text-xs">{mod.duree_minutes} min</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
