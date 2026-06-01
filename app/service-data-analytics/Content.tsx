'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, BarChart3, Globe2, LineChart, TrendingUp, Zap, CheckCircle2 } from 'lucide-react'
import LinkedInGlobe from '../components/home/LinkedInGlobe'
import TemoignagesSection from '../components/landing/TemoignagesSection'

/* ─── Composant feature section réutilisable ───────────────────────── */
interface FeatureProps {
  badge: string
  icon: React.ElementType
  titre: string
  description: string
  points: string[]
  imageSrc: string
  imageAlt: string
  imageRight: boolean
  index?: number
}

function FeatureSection({ badge, icon: Icon, titre, description, points, imageSrc, imageAlt, imageRight, index = 0 }: FeatureProps) {
  return (
    <section className={`py-20 border-t border-white/8 ${index % 2 === 1 ? '' : ''}`}
      style={{ backgroundColor: index % 2 === 1 ? 'rgba(5,221,225,0.02)' : 'transparent' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${imageRight ? '' : 'lg:[direction:rtl]'}`}>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: imageRight ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={!imageRight ? { direction: 'ltr' } : {}}
          >
            <span className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-widest"
              style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
              {badge}
            </span>

            <div className="flex items-center gap-3 mb-5">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center border border-secondary/20 flex-shrink-0"
                style={{ backgroundColor: 'rgba(5,221,225,0.1)' }}>
                <Icon className="w-6 h-6 text-secondary" />
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">{titre}</h2>
            </div>

            <p className="text-white/60 leading-relaxed mb-8 text-base">{description}</p>

            <ul className="space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: imageRight ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={!imageRight ? { direction: 'ltr' } : {}}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-3xl overflow-hidden border border-white/10"
              style={{ boxShadow: '0 0 50px rgba(5,221,225,0.1), 0 20px 60px rgba(0,0,0,0.4)' }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={560}
                className="w-full h-auto"
                unoptimized
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Page principale ──────────────────────────────────────────────── */
export default function ServiceDataContent() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden pt-24 pb-8">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-12"
          style={{ background: 'radial-gradient(circle, #05dde1, transparent)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* Texte */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 border border-secondary/30 rounded-full px-4 py-1.5 mb-8"
                style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
                <BarChart3 className="w-3.5 h-3.5 text-secondary" />
                <span className="text-secondary text-xs font-semibold uppercase tracking-widest">SAS LinkedIn</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
                Hydra{' '}
                <span className="gradient-text">Analytics</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/65 leading-relaxed mb-10 max-w-lg">
                Vision complète de votre présence LinkedIn. Suivez vos vues de profil, connexions, abonnés et la performance de vos posts en temps réel.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4">
                <motion.a href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit" target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(5,221,225,0.45)' }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-primary font-black px-8 py-4 rounded-2xl text-base shadow-glow hover:bg-tertiary transition-all duration-200">
                  <Calendar className="w-5 h-5" /> Demander une démo
                </motion.a>
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl text-base hover:bg-white/5 transition-all duration-200">
                  Nous écrire <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>

            {/* Globe 3D */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <LinkedInGlobe />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ VIDÉO DÉMO ══ */}
      <section className="py-16 border-t border-white/8" style={{ backgroundColor: 'rgba(5,221,225,0.02)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-10">
            <span className="inline-block border border-secondary/30 text-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest"
              style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
              Démonstration
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Naviguez dans <span className="gradient-text">Hydra en direct</span>
            </h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">
              Découvrez l&apos;interface complète du SAS — tableau de bord, analyse de posts, comparaison et carte mondiale.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl overflow-hidden border border-secondary/20"
            style={{ boxShadow: '0 0 60px rgba(5,221,225,0.15), 0 30px 80px rgba(0,0,0,0.5)' }}>
            <video
              src="/videos/hydra.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto block"
            />
          </motion.div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <FeatureSection
        badge="Dashboard"
        icon={BarChart3}
        titre="Dashboard & Analytics"
        description="Hydra vous donne une vision complète de votre présence LinkedIn. Suivez vos vues de profil, connexions, abonnés et la performance de vos posts en temps réel depuis un tableau de bord centralisé."
        points={[
          'Vue d\'ensemble de votre présence LinkedIn',
          'Suivi des vues de profil en temps réel',
          'Évolution de vos connexions et abonnés',
          'Performance globale de vos publications',
        ]}
        imageSrc="/hydra/dashboard-ui.png"
        imageAlt="Hydra Dashboard & Analytics"
        imageRight={true}
        index={0}
      />

      <FeatureSection
        badge="Extension Chrome"
        icon={Zap}
        titre="Extension Chrome"
        description="Notre extension Chrome récupère vos données LinkedIn en toute sécurité. Connectez votre compte et synchronisez vos données analytiques en un seul clic — sans configuration complexe."
        points={[
          'Installation en un clic depuis Chrome',
          'Connexion sécurisée à votre compte LinkedIn',
          'Synchronisation automatique des données',
          'Mise à jour en temps réel',
        ]}
        imageSrc="/hydra/extension-ui.png"
        imageAlt="Hydra Extension Chrome"
        imageRight={false}
        index={1}
      />

      <FeatureSection
        badge="Analytics Global"
        icon={Globe2}
        titre="Analytics Global"
        description="Hydra vous offre une vue stratégique de votre performance sur LinkedIn en temps réel. Croissance de l'audience, interactions, activité du profil, localisation de votre communauté à l'international."
        points={[
          'Carte de géolocalisation de votre audience',
          'Croissance de l\'audience dans le temps',
          'Interactions et activité du profil',
          'Données claires pour de meilleures décisions',
        ]}
        imageSrc="/hydra/globe-ui.png"
        imageAlt="Hydra Analytics Global"
        imageRight={true}
        index={2}
      />

      <FeatureSection
        badge="Analyse des Posts"
        icon={LineChart}
        titre="Analyse des Posts"
        description="Hydra analyse vos publications en temps réel. Identifiez les pics d'audience, les moments clés d'engagement et comprenez précisément à quelle heure votre contenu génère le plus de performance."
        points={[
          'Performance détaillée de chaque publication',
          'Identification des pics d\'audience',
          'Meilleurs moments pour publier',
          'Pilotage automatique pour optimiser',
        ]}
        imageSrc="/hydra/posts-ui.png"
        imageAlt="Hydra Analyse des Posts"
        imageRight={false}
        index={3}
      />

      <FeatureSection
        badge="Comparaison"
        icon={TrendingUp}
        titre="Comparaison de Posts"
        description="Comparez vos publications entre elles. Hydra analyse les données collectées et classe vos contenus dans un tableau comparatif clair. Identifiez instantanément les publications les plus performantes."
        points={[
          'Tableau comparatif de vos publications',
          'Classement par performance',
          'Évolution temporelle des métriques',
          'Comprenez ce qui fonctionne vraiment',
        ]}
        imageSrc="/hydra/comparaison-ui.png"
        imageAlt="Hydra Comparaison de Posts"
        imageRight={true}
        index={4}
      />

      {/* ══ TÉMOIGNAGES ══ */}
      <TemoignagesSection />

      {/* ══ CTA FINAL ══ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #05dde1 0%, #002060 50%, transparent 80%)' }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Prêt à piloter votre{' '}
              <span className="gradient-text">LinkedIn avec la data ?</span>
            </h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              Demandez une démonstration gratuite et découvrez tout ce que Hydra peut faire pour vous.
            </p>
            <a href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-secondary text-primary font-black text-lg px-10 py-5 rounded-2xl shadow-glow hover:bg-tertiary transition-all duration-200">
              <Calendar className="w-5 h-5" /> Demander une démo gratuite
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
