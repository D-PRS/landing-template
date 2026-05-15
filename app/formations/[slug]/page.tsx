import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  Clock, BookOpen, Users, Star, Check, ArrowRight,
  Shield, Briefcase, Rocket, Target, Calendar,
} from 'lucide-react'
import {
  FORMATIONS, CE_QUE_VOUS_APPRENDREZ, FORMATEUR,
  getNiveauLabel, getNiveauColor, formatApprenants,
  type Formation,
} from '../../data/formations'
import AccordionProgramme from './AccordionProgramme'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return FORMATIONS.map(f => ({ slug: f.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const formation = FORMATIONS.find(f => f.slug === slug)
  if (!formation) return {}
  return {
    title: `${formation.titre} — ProVisual`,
    description: formation.description,
  }
}

export default async function FormationPage({ params }: Props) {
  const { slug } = await params
  const formation = FORMATIONS.find(f => f.slug === slug)
  if (!formation) notFound()

  const apprendres = CE_QUE_VOUS_APPRENDREZ[slug] ?? CE_QUE_VOUS_APPRENDREZ['algorithme-linkedin-2026']

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#000d26' }}>

      {/* ── Hero ── */}
      <div className="relative pt-24 pb-14" style={{ background: 'linear-gradient(135deg, #000d26 0%, #001a4d 60%, #002060 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src={formation.image_cover_url}
            alt={formation.titre}
            fill
            className="object-cover opacity-8"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000d26]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors mb-8"
          >
            ← Retour à l&apos;accueil
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getNiveauColor(formation.niveau)}`}>
                {getNiveauLabel(formation.niveau)}
              </span>
              {formation.est_gratuite ? (
                <span className="bg-secondary text-primary text-xs font-bold px-2.5 py-1 rounded-full">Gratuit</span>
              ) : (
                <span className="border border-secondary/30 text-secondary text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(5,221,225,0.08)' }}>
                  ProVisual Academy
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              {formation.titre}
            </h1>
            <p className="text-xl text-white/75 mb-6 leading-relaxed">
              {formation.description_courte}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-white font-semibold">4.9</span>
                <span>({formatApprenants(formation.nombre_apprenants)} avis)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                <span>{formatApprenants(formation.nombre_apprenants)} apprenants</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{formation.duree_estimee_heures}h de contenu</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>{formation.nombre_chapitres} chapitre{formation.nombre_chapitres > 1 ? 's' : ''}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* ── Colonne principale ── */}
          <div className="lg:col-span-2 space-y-12">

            {/* Vidéo */}
            <div>
              <h2 className="text-2xl font-black text-white mb-4">Présentation de la formation</h2>
              <div
                className="rounded-2xl overflow-hidden border"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    src={formation.video_presentation_url}
                    title={`Présentation ${formation.titre}`}
                    frameBorder="0"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Ce que vous apprendrez */}
            <div>
              <h2 className="text-2xl font-black text-white mb-6">Ce que vous allez apprendre</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {apprendres.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: 'rgba(5,221,225,0.15)' }}
                    >
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-white/70 text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA mobile */}
            <div className="lg:hidden">
              <CtaCard formation={formation} />
            </div>

            {/* Programme */}
            <div>
              <h2 className="text-2xl font-black text-white mb-6">Programme de la formation</h2>
              <AccordionProgramme chapitres={formation.chapitres} />
            </div>

            {/* Pour qui */}
            <div>
              <h2 className="text-2xl font-black text-white mb-6">Pour qui est cette formation ?</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: <Briefcase className="w-7 h-7 text-secondary" />,
                    titre: 'Professionnels en entreprise',
                    desc: 'Qui veulent booster leur personal brand et visibilité professionnelle',
                  },
                  {
                    icon: <Rocket className="w-7 h-7 text-secondary" />,
                    titre: 'Freelances & Consultants',
                    desc: 'Qui cherchent à générer des leads et clients via LinkedIn',
                  },
                  {
                    icon: <Target className="w-7 h-7 text-secondary" />,
                    titre: 'Dirigeants & Managers',
                    desc: 'Qui souhaitent renforcer leur leadership et influence dans leur secteur',
                  },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-5 text-center border"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      borderColor: 'rgba(255,255,255,0.08)',
                    }}
                  >
                    <div className="flex justify-center mb-3">{p.icon}</div>
                    <h4 className="font-bold text-white text-sm mb-2">{p.titre}</h4>
                    <p className="text-white/45 text-xs">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Formateur */}
            <div>
              <h2 className="text-2xl font-black text-white mb-6">Votre formateur</h2>
              <div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl border items-start"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  borderColor: 'rgba(255,255,255,0.08)',
                }}
              >
                <Image
                  src={FORMATEUR.avatar}
                  alt={`${FORMATEUR.prenom} ${FORMATEUR.nom}`}
                  width={80}
                  height={80}
                  className="rounded-2xl flex-shrink-0 object-cover w-20 h-20"
                  unoptimized
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-black text-white text-lg sm:text-xl">
                    {FORMATEUR.prenom} {FORMATEUR.nom}
                  </h3>
                  <p className="text-secondary text-sm mb-3">{FORMATEUR.titre}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-white/45 mb-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {FORMATEUR.note}/5
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {FORMATEUR.apprenants.toLocaleString('fr-FR')} apprenants
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      {FORMATEUR.formations} formations
                    </span>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">{FORMATEUR.bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Sticky CTA (desktop) ── */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <CtaCard formation={formation} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CtaCard({ formation }: { formation: Formation }) {
  return (
    <div
      className="rounded-3xl overflow-hidden border"
      style={{
        backgroundColor: '#0d1e47',
        borderColor: 'rgba(255,255,255,0.10)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
      }}
    >
      {/* Preview */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={formation.image_cover_url}
          alt={formation.titre}
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="p-6">
        {/* Prix */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl font-black text-white">
            {formation.est_gratuite ? 'Gratuit' : `${formation.prix}€`}
          </span>
          {!formation.est_gratuite && (
            <span className="text-white/35 text-sm line-through">81€</span>
          )}
        </div>

        {/* CTA */}
        <a
          href="https://calendly.com/pro-visual/30-min-de-call-100-gratuit"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-secondary text-primary font-black text-base px-6 py-4 rounded-2xl shadow-glow hover:bg-tertiary transition-colors mb-3"
        >
          <Calendar className="w-4 h-4" />
          {formation.est_gratuite ? 'Commencer gratuitement' : 'Accéder à la formation'}
        </a>
        {!formation.est_gratuite && (
          <p className="text-center text-xs text-white/35 mb-4">
            Ou tout inclus avec l'Espace Classe à 9,99€/mois
          </p>
        )}

        {/* Includes */}
        <div className="space-y-2 mb-5">
          {[
            { icon: <BookOpen className="w-4 h-4" />, text: `${formation.nombre_chapitres} chapitre${formation.nombre_chapitres > 1 ? 's' : ''} complet${formation.nombre_chapitres > 1 ? 's' : ''}` },
            { icon: <Clock className="w-4 h-4" />, text: `${formation.duree_estimee_heures}h de contenu` },
            { icon: <Users className="w-4 h-4" />, text: `${formatApprenants(formation.nombre_apprenants)} apprenants` },
            { icon: <Check className="w-4 h-4" />, text: 'Quiz de validation inclus' },
            { icon: <Check className="w-4 h-4" />, text: 'Certificat de complétion' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-white/55">
              <span className="text-secondary">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

        {/* Garantie */}
        <div
          className="p-4 rounded-2xl border flex items-start gap-3"
          style={{
            backgroundColor: 'rgba(5,221,225,0.06)',
            borderColor: 'rgba(5,221,225,0.15)',
          }}
        >
          <Shield className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-white text-sm">Garantie 30 jours</p>
            <p className="text-white/45 text-xs mt-0.5">
              Pas satisfait ? Remboursé intégralement, sans question.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
