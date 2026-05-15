'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const CDN = 'https://cdn.prod.website-files.com/68ab2d1a568ed1d53d774d32'
const LOGO_URL = `${CDN}/68b5b4981ac3dc1f534fcdaa_Logo%20Provisual.png`

const NAV = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Services',
    children: [
      { label: 'Marketing LinkedIn', href: '/service-marketing' },
      { label: 'Data & Analytics', href: '/service-data-analytics' },
    ],
  },
  { label: 'E-books', href: '/e-books' },
  { label: 'À propos', href: '/a-propos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}
      style={scrolled ? { backgroundColor: 'rgba(0,13,38,0.88)' } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link href="/" className="flex items-center">
            <Image src={LOGO_URL} alt="Provisual" width={110} height={36} className="object-contain" unoptimized />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-white/70 hover:text-secondary transition-colors">
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-52 rounded-2xl border border-white/10 shadow-xl overflow-hidden"
                        style={{ backgroundColor: 'rgba(0,13,38,0.95)', backdropFilter: 'blur(16px)' }}
                      >
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href}
                            className="block px-5 py-3 text-sm text-white/70 hover:text-secondary hover:bg-white/5 transition-colors">
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={item.href} href={item.href!}
                  className="text-sm font-medium text-white/70 hover:text-secondary transition-colors">
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Contact
            </Link>
            <a href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-tertiary transition-all duration-200 shadow-glow">
              Prendre rendez-vous
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-white">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10"
            style={{ backgroundColor: 'rgba(0,13,38,0.97)' }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <p className="py-2 text-xs text-white/40 font-semibold uppercase tracking-widest">{item.label}</p>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 pl-3 text-white/70 text-sm hover:text-secondary transition-colors">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link key={item.href} href={item.href!}
                    onClick={() => setMobileOpen(false)}
                    className="py-2.5 text-white/80 font-medium text-sm hover:text-secondary transition-colors">
                    {item.label}
                  </Link>
                )
              )}
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                className="py-2.5 text-white/80 font-medium text-sm hover:text-secondary transition-colors">
                Contact
              </Link>
              <a href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit"
                target="_blank" rel="noopener noreferrer"
                className="mt-2 w-full py-3 text-center bg-secondary text-primary font-bold rounded-xl text-sm">
                Prendre rendez-vous
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
