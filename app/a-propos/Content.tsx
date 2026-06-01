'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Heart, Target, Zap, Award } from 'lucide-react'
import { TEMOIGNAGES } from '../data/content'

const VALUES = [
  {
    icon: Target,
    titre: 'Résultats mesurables',
    desc: 'Chaque action que nous mettons en place est trackée et optimisée. Nous ne croyons pas aux promesses vagues — vous voyez les résultats.',
  },
  {
    icon: Heart,
    titre: 'Relation de confiance',
    desc: 'Nous travaillons en partenariat avec nos clients, pas en sous-traitance. Votre succès est le nôtre, et ça se ressent dans chaque échange.',
  },
  {
    icon: Zap,
    titre: 'Réactivité & Qualité',
    desc: 'Rapidité d\'exécution sans compromis sur la qualité. Nos clients le disent : nous répondons vite et nous livrons bien.',
  },
]

export default function AProposContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle, #002060, transparent)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-secondary/30 rounded-full px-4 py-1.5 mb-8"
            style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-secondary text-xs font-semibold uppercase tracking-widest">Notre histoire</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 max-w-3xl"
          >
            À propos de{' '}
            <span className="gradient-text">Provisual</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/65 leading-relaxed max-w-2xl"
          >
            Provisual est une agence spécialisée en Marketing LinkedIn et Data Analytics,
            créée pour accompagner les TPE, PME et indépendants dans leur croissance digitale.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest"
                style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
                Le fondateur
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Dylan Parisi,<br />
                <span className="gradient-text">fondateur de Provisual</span>
              </h2>
              <div className="space-y-4 text-white/65 leading-relaxed">
                <p>
                  Après plusieurs années à travailler dans le marketing digital et la data,
                  j&apos;ai fondé Provisual avec un constat simple : beaucoup de TPE et PME
                  ont un potentiel énorme sur LinkedIn mais ne savent pas comment l&apos;exploiter.
                </p>
                <p>
                  Ma mission est de les aider à transformer leur présence digitale en un
                  véritable moteur de croissance — avec des stratégies concrètes, mesurables
                  et adaptées à leur réalité.
                </p>
                <p>
                  Provisual c&apos;est aujourd&apos;hui une expertise double : le marketing LinkedIn
                  pour vous rendre visible auprès des bonnes personnes, et la data analytics
                  pour prendre les meilleures décisions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              {/* Halo derrière la photo */}
              <div className="absolute w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none opacity-25"
                style={{ background: 'radial-gradient(circle, #05dde1, transparent 70%)' }} />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-full max-w-md"
              >
                <Image
                  src="/about/dylan.png"
                  alt="Dylan Parisi, fondateur de Provisual"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                  priority
                  unoptimized
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-y border-white/8" style={{ backgroundColor: 'rgba(5,221,225,0.03)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              Nos <span className="gradient-text">valeurs</span>
            </h2>
            <p className="text-lg text-white/55 max-w-xl mx-auto">
              Ce qui guide notre façon de travailler au quotidien.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.titre}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-3xl p-8 border border-white/10 text-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-secondary/20"
                    style={{ backgroundColor: 'rgba(5,221,225,0.1)' }}>
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{v.titre}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Texte */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest"
                style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
                Certification officielle
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">
                Certifié par{' '}
                <span className="gradient-text">LinkedIn Marketing Labs</span>
              </h2>
              <p className="text-white/65 leading-relaxed mb-6">
                J&apos;ai obtenu la certification officielle <strong className="text-white">LinkedIn Marketing Strategy</strong>,
                délivrée par les <strong className="text-white">LinkedIn Marketing Labs</strong>. Une reconnaissance directe
                de la plateforme qui valide mon expertise en stratégie marketing sur LinkedIn.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Certification délivrée directement par LinkedIn',
                  'Certified Professional — Marketing Strategy',
                  'Valide de novembre 2025 à novembre 2027',
                ].map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-white/70">
                    <Award className="w-4 h-4 text-secondary flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="https://verify.skilljar.com/c/s44t8cbtwan8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary font-bold text-sm hover:text-tertiary transition-colors"
              >
                Vérifier la certification
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Certificat */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl blur-2xl pointer-events-none opacity-25"
                style={{ background: 'radial-gradient(circle, #05dde1, transparent 70%)' }} />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-2xl overflow-hidden border border-white/15"
                style={{ boxShadow: '0 0 50px rgba(5,221,225,0.12), 0 20px 60px rgba(0,0,0,0.45)' }}
              >
                <Image
                  src="/about/certificat.png"
                  alt="Certification LinkedIn Marketing Strategy de Dylan Parisi"
                  width={1188}
                  height={918}
                  className="w-full h-auto"
                  unoptimized
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials highlight */}
      <section className="py-24 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              Ce que disent <span className="gradient-text">nos clients</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEMOIGNAGES.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="rounded-2xl p-6 border border-white/10"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.note }).map((_, si) => (
                    <svg key={si} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed italic mb-5">&ldquo;{t.texte}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-secondary/20 flex-shrink-0">
                    <Image src={t.avatar_url} alt={`${t.prenom} ${t.nom}`} width={40} height={40} className="w-full h-full object-cover" unoptimized />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{t.prenom} {t.nom}</p>
                    <p className="text-white/40 text-xs">{t.poste} · {t.entreprise}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #05dde1 0%, #002060 50%, transparent 80%)' }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Travaillons <span className="gradient-text">ensemble</span>
            </h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              Un appel de 30 minutes suffit pour voir si on est faits pour travailler ensemble.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-secondary text-primary font-black text-lg px-10 py-5 rounded-2xl shadow-glow hover:bg-tertiary transition-all duration-200"
              >
                <Calendar className="w-5 h-5" />
                Prendre rendez-vous
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border border-white/25 text-white font-bold text-lg px-10 py-5 rounded-2xl hover:bg-white/5 transition-all duration-200"
              >
                Nous écrire
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
