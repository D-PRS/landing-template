import { PRIX_FORMATIONS, STATS_ACADEMY } from './academy'

// Catalogue des e-books, repris de ProVisual Academy (src/data/formations.ts et src/data/structure.ts).
// Les prix viennent de ./academy.ts, les chapitres et parties du squelette public de la plateforme.

export type NiveauFormation = 'debutant' | 'intermediaire' | 'avance'

export type ModuleFormation = {
  id: string
  titre: string
  duree_minutes: number
}

export type ChapitreFormation = {
  id: string
  titre: string
  /** L'introduction n'est pas numérotée dans le programme. */
  est_introduction?: boolean
  modules: ModuleFormation[]
}

export type Formation = {
  id: string
  titre: string
  slug: string
  description: string
  description_courte: string
  image_cover_url: string
  video_presentation_url: string
  prix: number
  est_gratuite: boolean
  niveau: NiveauFormation
  duree_estimee_heures: number
  nombre_chapitres: number
  nombre_apprenants: number
  chapitres: ChapitreFormation[]
}

export const CE_QUE_VOUS_APPRENDREZ: Record<string, string[]> = {
  'les-bases-de-linkedin': [
    "Vous repérer sur LinkedIn : fil, réseau, recherche, notifications, messagerie",
    "Régler un profil lisible en dix secondes, quel que soit votre objectif",
    "Comprendre les degrés de relation et envoyer une invitation qui est acceptée",
    "Comprendre comment l'algorithme 360Brew choisit ce qu'il montre en 2026",
    "Reconnaître les signaux d'engagement qui comptent vraiment",
    "Choisir un format et structurer un post qui se lit jusqu'au bout",
    "Publier au bon moment, au bon rythme, sans cannibaliser vos posts",
    "Adopter la routine quotidienne qui nourrit votre visibilité",
    "Oublier les dix idées reçues qui freinent la plupart des comptes",
    "Suivre un plan des 30 premiers jours adapté à votre objectif",
  ],
  'vendre-linkedin-2026': [
    "Identifier et cibler vos prospects idéaux sur LinkedIn",
    "Créer des messages de prospection avec 60%+ de taux de réponse",
    "Maîtriser le social selling pour des ventes sans pitch agressif",
    "Construire un pipeline de prospects qualifiés en continu",
    "Utiliser LinkedIn Sales Navigator efficacement",
    "Rédiger des profils orientés vente pour vos prospects",
    "Gérer les objections dans les messages LinkedIn",
    "Créer du contenu qui génère des leads organiquement",
    "Passer du message LinkedIn au rendez-vous qualifié",
    "Mesurer et optimiser votre taux de conversion LinkedIn",
  ],
  'trouver-emploi-linkedin-2026': [
    "Optimiser votre profil pour apparaître dans les recherches des recruteurs",
    "Rédiger un titre LinkedIn qui attire les bonnes opportunités",
    "Identifier et contacter les recruteurs avec les bons messages",
    "Activer votre réseau pour décrocher des entretiens via la cooptation",
    "Créer du contenu qui vous rend visible auprès de votre secteur cible",
    "Utiliser LinkedIn Premium Career pour accélérer votre recherche",
    "Interagir sur LinkedIn pour améliorer votre référencement passif",
    "Construire un CRM de candidature pour suivre chaque piste",
    "Naviguer dans les offres LinkedIn pour ne manquer aucune opportunité",
    "Mesurer vos résultats et ajuster votre stratégie",
  ],
  'devenir-influent-linkedin-2026': [
    "Définir votre territoire d'influence et votre angle différenciant",
    "Construire une ligne éditoriale cohérente et distinctive",
    "Maîtriser les formats de contenu qui génèrent de l'autorité",
    "Écrire des posts qui se lisent jusqu'au bout grâce au storytelling",
    "Développer votre personal branding et votre identité visuelle",
    "Utiliser Favikon pour analyser votre influence et progresser",
    "Créer des carrousels PDF qui génèrent des centaines de sauvegardes",
    "Planifier votre contenu avec un calendrier glissant",
    "Déclencher les bons signaux algorithmiques avec vos CTA",
    "Monétiser votre influence et attirer des collaborations de marques",
  ],
}

export const FORMATEUR = {
  prenom: 'Dylan',
  nom: 'Parisi',
  titre: 'Fondateur de ProVisual · Expert LinkedIn',
  bio: "Fondateur de l'agence ProVisual, Dylan accompagne depuis 2023 les entrepreneurs, dirigeants et acteurs de la finance dans la construction d'une présence LinkedIn qui génère de vrais résultats. Certifié officiellement par LinkedIn et classé 76e en France dans la stratégie marketing, il a accompagné plus de 200 clients en France, en Suisse, au Luxembourg et en Belgique. ProVisual Academy rassemble les méthodes qu'il applique chaque jour pour ses clients.",
  apprenants: STATS_ACADEMY.apprenants_total,
  formations: STATS_ACADEMY.formations,
  note: STATS_ACADEMY.note_moyenne,
  avatar: '/about/dylan.png',
  linkedin: 'https://www.linkedin.com/in/dylan-parisi/',
}

export const FORMATIONS: Formation[] = [
  {
    id: 'form-1',
    titre: 'Les bases de LinkedIn',
    slug: 'les-bases-de-linkedin',
    description:
      "Le socle gratuit pour bien démarrer sur LinkedIn, quel que soit votre objectif : trouver un poste, décrocher des clients ou construire une audience. Vous apprenez à vous repérer sur la plateforme, à régler votre profil et votre réseau, à comprendre comment l'algorithme 360Brew choisit ce qu'il montre, puis à publier et interagir avec méthode.",
    description_courte:
      'Repères, profil, réseau, algorithme et premières publications : les bases pour tout profil.',
    image_cover_url: '/images/formations/base-linkedin.jpg',
    video_presentation_url: 'https://www.youtube.com/embed/_rTvjLHyuEY?rel=0',
    prix: 0,
    est_gratuite: true,
    niveau: 'debutant',
    duree_estimee_heures: 1.5,
    nombre_chapitres: 3,
    nombre_apprenants: 112,
    chapitres: [
      {
        id: 'bases-ch-0',
        titre: 'Introduction',
        est_introduction: true,
        modules: [
          { id: 'bases-intro', titre: 'Pour qui, pourquoi, et ce qui a changé en 2026', duree_minutes: 6 },
        ],
      },
      {
        id: 'bases-ch-1',
        titre: 'Se repérer et poser ses bases',
        modules: [
          { id: 'bases-1-1', titre: 'Se repérer sur LinkedIn', duree_minutes: 8 },
          { id: 'bases-1-2', titre: 'Un profil et un réseau qui travaillent pour vous', duree_minutes: 10 },
        ],
      },
      {
        id: 'bases-ch-2',
        titre: "Comprendre l'algorithme",
        modules: [
          { id: 'bases-2-1', titre: "Comment LinkedIn choisit ce qu'il montre", duree_minutes: 9 },
          { id: 'bases-2-2', titre: "Les signaux d'engagement qui comptent", duree_minutes: 9 },
        ],
      },
      {
        id: 'bases-ch-3',
        titre: 'Publier et tenir dans la durée',
        modules: [
          { id: 'bases-3-1', titre: "Publier : formats et structure d'un post", duree_minutes: 9 },
          { id: 'bases-3-2', titre: 'Quand publier et à quel rythme', duree_minutes: 8 },
          { id: 'bases-3-3', titre: 'Interagir chaque jour et lire vos chiffres', duree_minutes: 8 },
          { id: 'bases-3-4', titre: 'Dix idées reçues à oublier', duree_minutes: 6 },
          { id: 'bases-3-5', titre: 'Vos trente premiers jours', duree_minutes: 6 },
          { id: 'bases-conclu', titre: 'Conclusion', duree_minutes: 4 },
        ],
      },
    ],
  },
  {
    id: 'form-2',
    titre: 'Vendre sur LinkedIn',
    slug: 'vendre-linkedin-2026',
    description:
      "Transformez LinkedIn en machine à générer des opportunités business. De la prospection douce à la conclusion de ventes, cette formation vous donne un système reproductible pour trouver et convertir des clients directement depuis LinkedIn.",
    description_courte:
      'Générez des leads qualifiés et signez des clients directement depuis LinkedIn.',
    image_cover_url: '/images/formations/cover-vendre.jpg',
    video_presentation_url: 'https://www.youtube.com/embed/XZb2u4WgpzM?rel=0',
    prix: PRIX_FORMATIONS['vendre-linkedin-2026'],
    est_gratuite: false,
    niveau: 'intermediaire',
    duree_estimee_heures: 5,
    nombre_chapitres: 4,
    nombre_apprenants: 86,
    chapitres: [
      {
        id: 'vente-ch-0',
        titre: 'Introduction',
        est_introduction: true,
        modules: [
          { id: 'vente-intro', titre: 'Bienvenue dans la formation Vendre sur LinkedIn', duree_minutes: 5 },
        ],
      },
      {
        id: 'vente-ch-1',
        titre: "Les fondations d'une présence qui vend",
        modules: [
          { id: 'vente-1-1', titre: "Poser les fondations d'une présence qui vend", duree_minutes: 12 },
          { id: 'vente-1-2', titre: 'Trouver son bon positionnement commercial sur LinkedIn', duree_minutes: 8 },
          { id: 'vente-1-3', titre: 'Développer un réseau qui travaille pour vous', duree_minutes: 8 },
          { id: 'vente-1-4', titre: 'Créer du contenu qui attire vos prospects', duree_minutes: 12 },
          { id: 'vente-1-5', titre: 'Templates de leads magnets', duree_minutes: 8 },
          { id: 'vente-1-6', titre: 'Mesurer ses résultats et ajuster', duree_minutes: 6 },
        ],
      },
      {
        id: 'vente-ch-2',
        titre: 'Prospecter et convertir sur LinkedIn',
        modules: [
          { id: 'vente-2-1', titre: 'Préparer sa prospection LinkedIn', duree_minutes: 6 },
          { id: 'vente-2-2', titre: 'Naviguer efficacement dans LinkedIn pour prospecter', duree_minutes: 7 },
          { id: 'vente-2-3', titre: 'Rédiger des messages de prospection percutants', duree_minutes: 8 },
          { id: 'vente-2-4', titre: 'Utiliser le message vocal LinkedIn pour se démarquer', duree_minutes: 7 },
          { id: 'vente-2-5', titre: 'Gérer les objections avec maîtrise', duree_minutes: 7 },
          { id: 'vente-2-6', titre: 'Atteindre le bon interlocuteur sur LinkedIn', duree_minutes: 6 },
          { id: 'vente-2-7', titre: 'Créer une relation commerciale durable sur LinkedIn', duree_minutes: 7 },
          { id: 'vente-2-8', titre: 'Construire une séquence de prospection cohérente', duree_minutes: 6 },
          { id: 'vente-2-9', titre: 'Outils et CRM pour piloter sa prospection', duree_minutes: 9 },
          { id: 'vente-2-10', titre: 'Tableaux et ressources pratiques', duree_minutes: 4 },
          { id: 'vente-2-11', titre: "Synthèse finale et plan d'action", duree_minutes: 5 },
          { id: 'vente-conclu', titre: 'Conclusion', duree_minutes: 5 },
        ],
      },
    ],
  },
  {
    id: 'form-3',
    titre: 'Trouver un emploi sur LinkedIn',
    slug: 'trouver-emploi-linkedin-2026',
    description:
      "Décrochez l'emploi de vos rêves en utilisant LinkedIn comme levier stratégique. Optimisation de profil pour les recruteurs, réseau actif, messages qui obtiennent des réponses : tout ce qu'il faut pour accélérer votre recherche d'emploi.",
    description_courte:
      "Optimisez votre recherche d'emploi et décrochez des entretiens via LinkedIn.",
    image_cover_url: '/images/formations/cover-emploi.jpg',
    video_presentation_url: 'https://www.youtube.com/embed/HYGeitYOjOE?rel=0',
    prix: PRIX_FORMATIONS['trouver-emploi-linkedin-2026'],
    est_gratuite: false,
    niveau: 'debutant',
    duree_estimee_heures: 4,
    nombre_chapitres: 4,
    nombre_apprenants: 79,
    chapitres: [
      {
        id: 'emploi-ch-1',
        titre: 'Fondations & Stratégie de présence',
        modules: [
          { id: 'emploi-intro', titre: 'Introduction : LinkedIn 2026, le nouveau terrain de jeu pour trouver un emploi', duree_minutes: 8 },
          { id: 'emploi-1-1', titre: "Poser les fondations d'une présence qui attire les recruteurs", duree_minutes: 12 },
          { id: 'emploi-1-2', titre: 'Trouver son bon positionnement pour attirer les recruteurs', duree_minutes: 10 },
          { id: 'emploi-1-3', titre: 'Développer un réseau qui travaille pour vous', duree_minutes: 10 },
          { id: 'emploi-1-4', titre: 'Créer du contenu qui attire les recruteurs', duree_minutes: 10 },
          { id: 'emploi-1-5', titre: 'Mesurer ses résultats et ajuster sa stratégie', duree_minutes: 8 },
        ],
      },
      {
        id: 'emploi-ch-2',
        titre: 'Trouver et décrocher',
        modules: [
          { id: 'emploi-2-1', titre: 'Comprendre les logiques de recherche des recruteurs sur LinkedIn', duree_minutes: 10 },
          { id: 'emploi-2-2', titre: 'Définir une stratégie de mots-clés et spécialisation sectorielle', duree_minutes: 10 },
          { id: 'emploi-2-3', titre: 'Naviguer efficacement sur LinkedIn pour chercher un emploi', duree_minutes: 12 },
          { id: 'emploi-2-4', titre: "LinkedIn Premium Career : l'investissement qui accélère votre recherche", duree_minutes: 12 },
          { id: 'emploi-2-5', titre: "Adapter sa candidature à chaque offre d'emploi", duree_minutes: 12 },
          { id: 'emploi-2-6', titre: 'Construire un réseau RH actif et ciblé', duree_minutes: 12 },
          { id: 'emploi-2-7', titre: 'Contacter les recruteurs avec un message impactant', duree_minutes: 12 },
          { id: 'emploi-2-8', titre: 'Interagir sur LinkedIn pour améliorer son référencement passif', duree_minutes: 10 },
          { id: 'emploi-2-9', titre: 'Créer un CRM de candidature', duree_minutes: 12 },
          { id: 'emploi-conclu', titre: 'Conclusion', duree_minutes: 5 },
        ],
      },
    ],
  },
  {
    id: 'form-4',
    titre: 'Devenir influent sur LinkedIn',
    slug: 'devenir-influent-linkedin-2026',
    description:
      "Construisez une audience engagée de plusieurs milliers d'abonnés et devenez une référence incontournable dans votre domaine. Stratégie de contenu, personal branding, storytelling : la méthode complète pour les créateurs qui veulent scaler.",
    description_courte:
      'Construisez une audience engagée et devenez une référence dans votre secteur.',
    image_cover_url: '/images/formations/cover-influence.jpg',
    video_presentation_url: 'https://www.youtube.com/embed/bwytjUwls3Q?rel=0',
    prix: PRIX_FORMATIONS['devenir-influent-linkedin-2026'],
    est_gratuite: false,
    niveau: 'avance',
    duree_estimee_heures: 6,
    nombre_chapitres: 4,
    nombre_apprenants: 63,
    chapitres: [
      {
        id: 'influence-ch-0',
        titre: 'Introduction',
        est_introduction: true,
        modules: [
          { id: 'influence-intro', titre: 'Bienvenue dans la formation la plus complète du catalogue', duree_minutes: 5 },
        ],
      },
      {
        id: 'influence-ch-1',
        titre: "Construire votre fondation d'influence",
        modules: [
          { id: 'influence-1-1', titre: "Construire un profil qui inspire l'autorité", duree_minutes: 10 },
          { id: 'influence-1-2', titre: "Trouver son positionnement d'influence", duree_minutes: 8 },
          { id: 'influence-1-3', titre: 'Développer sa visibilité et son rayonnement', duree_minutes: 8 },
          { id: 'influence-1-4', titre: 'Favikon : comprendre les classements et viser le Top 100', duree_minutes: 12 },
        ],
      },
      {
        id: 'influence-ch-2',
        titre: "L'art du contenu d'autorité",
        modules: [
          { id: 'influence-2-1', titre: 'Pourquoi créer du contenu est le cœur de votre influence', duree_minutes: 8 },
          { id: 'influence-2-2', titre: "Les piliers d'un contenu qui crée de l'autorité", duree_minutes: 8 },
          { id: 'influence-2-3', titre: 'Les formats qui font autorité sur LinkedIn en 2026', duree_minutes: 10 },
          { id: 'influence-2-4', titre: "Structurer un post qui se lit jusqu'au bout", duree_minutes: 8 },
          { id: 'influence-2-5', titre: "Les appels à l'action qui déclenchent les bons signaux", duree_minutes: 8 },
          { id: 'influence-2-6', titre: 'Construire une identité de marque personnelle reconnaissable', duree_minutes: 7 },
          { id: 'influence-2-7', titre: "Définir sa ligne éditoriale d'influence", duree_minutes: 8 },
          { id: 'influence-2-8', titre: 'Planifier et piloter son contenu avec le calendrier glissant', duree_minutes: 8 },
          { id: 'influence-2-9', titre: 'Analyser et décrypter les posts qui performent', duree_minutes: 8 },
        ],
      },
      {
        id: 'influence-ch-3',
        titre: 'Écrire et publier avec impact',
        modules: [
          { id: 'influence-3-1', titre: "L'attention sur LinkedIn : comprendre avant d'écrire", duree_minutes: 5 },
          { id: 'influence-3-2', titre: "Les fondamentaux d'un post qui fonctionne", duree_minutes: 7 },
          { id: 'influence-3-3', titre: '12 formats de publication à fort impact', duree_minutes: 10 },
          { id: 'influence-3-4', titre: "L'art de l'accroche", duree_minutes: 8 },
          { id: 'influence-3-5', titre: 'Rythme, lisibilité et mise en forme', duree_minutes: 7 },
          { id: 'influence-3-6', titre: 'Les principes psychologiques appliqués au copywriting', duree_minutes: 8 },
          { id: 'influence-3-7', titre: 'Développer une écriture qui vous ressemble', duree_minutes: 8 },
          { id: 'influence-3-8', titre: 'Les erreurs classiques à éviter', duree_minutes: 7 },
          { id: 'influence-3-9', titre: 'Études de cas et exemples commentés', duree_minutes: 8 },
          { id: 'influence-3-10', titre: 'Checklist complète avant publication', duree_minutes: 7 },
          { id: 'influence-conclu', titre: 'Conclusion', duree_minutes: 5 },
        ],
      },
    ],
  },
]

/** L'e-book gratuit, point d'entrée de la collection. */
export const FORMATION_GRATUITE: Formation = FORMATIONS.find(f => f.est_gratuite) ?? FORMATIONS[0]

export function getNiveauLabel(niveau: NiveauFormation): string {
  return { debutant: 'Débutant', intermediaire: 'Intermédiaire', avance: 'Avancé' }[niveau]
}

export function getNiveauColor(niveau: NiveauFormation): string {
  return {
    debutant: 'bg-[#05dde1]/15 text-[#05dde1]',
    intermediaire: 'bg-[#1a6fd4]/20 text-[#6ba5ec]',
    avance: 'bg-[#6681bd]/25 text-[#aec4ee]',
  }[niveau]
}

export function formatApprenants(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(1).replace('.', ',')}k` : String(n)
}

/** « 1h30 », « 5h » : durée estimée d'un e-book. */
export function formatHeures(heures: number): string {
  const h = Math.floor(heures)
  const m = Math.round((heures - h) * 60)
  return m > 0 ? `${h}h${String(m).padStart(2, '0')}` : `${h}h`
}
