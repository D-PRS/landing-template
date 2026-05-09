'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md border-b border-white/[0.08]' : 'bg-transparent'
      }`}
      style={scrolled ? { backgroundColor: 'rgba(0,21,64,0.70)' } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <Image src="/logo.png" alt="Logo" width={36} height={36} className="rounded-lg" />
            <span className="font-black text-lg text-white">
              Mon<span className="text-secondary"> Site</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {[
              { label: 'Accueil', href: '#' },
              { label: 'Formations', href: '#formations' },
              { label: 'Tarifs', href: '#pricing' },
            ].map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Connexion
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-tertiary transition-all duration-200"
            >
              Commencer gratuitement
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-white transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              <a href="#" onClick={() => setMobileOpen(false)}
                className="w-full py-2.5 px-4 text-center border-2 border-gray-200 text-primary font-semibold rounded-xl text-sm">
                Connexion
              </a>
              <a href="#" onClick={() => setMobileOpen(false)}
                className="w-full py-2.5 px-4 text-center bg-secondary text-primary font-bold rounded-xl text-sm">
                Commencer gratuitement
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
