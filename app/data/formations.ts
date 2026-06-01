export type NiveauFormation = 'debutant' | 'intermediaire' | 'avance'

export type ModuleFormation = {
  id: string
  titre: string
  duree_minutes: number
}

export type ChapitreFormation = {
  id: string
  titre: string
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
  'algorithme-linkedin-2026': [
    "Comprendre les mécanismes précis de l'algorithme LinkedIn en 2026",
    "Créer des accroches qui stoppent le scroll et génèrent du clic",
    "Structurer vos posts pour maximiser le temps de lecture",
    "Identifier les meilleurs créneaux horaires pour votre audience",
    "Construire un calendrier éditorial sustainable",
    "Optimiser votre profil LinkedIn pour le SEO interne",
    "Analyser vos statistiques et itérer sur votre stratégie",
    "Développer votre réseau stratégiquement pour amplifier votre reach",
    "Éviter les erreurs qui pénalisent algorithmiquement votre compte",
    "Créer un plan d'action 30 jours pour décoller sur LinkedIn",
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
    "Optimiser votre profil pour apparaître dans les recherches recruteurs",
    "Rédiger un titre LinkedIn qui attire les bonnes opportunités",
    "Identifier et contacter les recruteurs avec les bons messages",
    "Activer votre réseau pour décrocher des entretiens via la cooptation",
    "Créer du contenu qui vous rend visible auprès de votre secteur cible",
    "Utiliser LinkedIn Premium Career pour accélérer votre recherche",
    "Construire un CRM de candidature efficace avec Notion",
    "Gérer les relances sans paraître insistant",
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
  titre: 'Expert LinkedIn & Stratégie Digitale',
  bio: "Fondateur de ProVisual, Dylan accompagne les entrepreneurs, dirigeants et commerciaux à bâtir une présence LinkedIn qui génère des résultats mesurables. Certifié officellement par LinkedIn, il figure dans le TOP 50 de la stratégie marketing en France. Ses méthodes ont été testées sur plus de 200 clients et donnent des résultats concrets en quelques semaines.",
  apprenants: 2847,
  formations: 4,
  note: 4.9,
  avatar: '/images/animation-linkedin.png',
}

export const FORMATIONS: Formation[] = [
  {
    id: 'form-1',
    titre: "L'Algorithme LinkedIn 2026",
    slug: 'algorithme-linkedin-2026',
    description:
      "Maîtrisez les mécanismes précis de l'algorithme LinkedIn en 2026 et créez une présence organique puissante sans dépenser un centime en publicité. Cette formation décode les règles non-écrites de la plateforme pour vous donner un avantage compétitif durable.",
    description_courte:
      "Décryptez l'algorithme LinkedIn 2026 et multipliez votre visibilité organiquement.",
    image_cover_url: '/images/formations/cover-algorithme.jpg',
    video_presentation_url: 'https://www.youtube.com/embed/_rTvjLHyuEY?rel=0',
    prix: 0,
    est_gratuite: true,
    niveau: 'debutant',
    duree_estimee_heures: 3,
    nombre_chapitres: 1,
    nombre_apprenants: 2847,
    chapitres: [
      {
        id: 'algo-ch-1',
        titre: "L'Algorithme LinkedIn 2026",
        modules: [
          { id: 'algo-intro', titre: 'Introduction', duree_minutes: 5 },
          { id: 'algo-p1', titre: "Comprendre l'algorithme LinkedIn 2026", duree_minutes: 20 },
          { id: 'algo-p2', titre: "Les leviers d'engagement qui boostent votre visibilité", duree_minutes: 18 },
          { id: 'algo-p3', titre: 'Optimiser son contenu pour l\'algorithme', duree_minutes: 22 },
          { id: 'algo-p4', titre: 'Le timing stratégique des publications', duree_minutes: 15 },
          { id: 'algo-p5', titre: 'Le comportement invisible qui booste votre reach', duree_minutes: 16 },
          { id: 'algo-p6', titre: 'Les mythes à oublier sur l\'algorithme', duree_minutes: 12 },
          { id: 'algo-p7', titre: 'Synthèse finale et plan d\'action', duree_minutes: 10 },
          { id: 'algo-conclu', titre: 'Conclusion', duree_minutes: 4 },
        ],
      },
    ],
  },
  {
    id: 'form-2',
    titre: 'Vendre sur LinkedIn 2026',
    slug: 'vendre-linkedin-2026',
    description:
      "Transformez LinkedIn en machine à générer des opportunités business. De la prospection douce à la conclusion de ventes, cette formation vous donne un système reproductible pour trouver et convertir des clients directement depuis LinkedIn.",
    description_courte:
      'Générez des leads qualifiés et signez des clients directement depuis LinkedIn.',
    image_cover_url: '/images/formations/cover-vendre.jpg',
    video_presentation_url: 'https://www.youtube.com/embed/XZb2u4WgpzM?rel=0',
    prix: 27,
    est_gratuite: false,
    niveau: 'intermediaire',
    duree_estimee_heures: 5,
    nombre_chapitres: 2,
    nombre_apprenants: 1243,
    chapitres: [
      {
        id: 'vente-ch-1',
        titre: "Les fondations d'une présence qui vend",
        modules: [
          { id: 'vente-intro', titre: 'Introduction', duree_minutes: 5 },
          { id: 'vente-1-1', titre: "Poser les fondations d'une présence qui vend", duree_minutes: 22 },
          { id: 'vente-1-2', titre: 'Trouver son bon positionnement commercial sur LinkedIn', duree_minutes: 18 },
          { id: 'vente-1-3', titre: "Développer un réseau qui travaille pour vous", duree_minutes: 16 },
          { id: 'vente-1-4', titre: "Créer du contenu qui attire vos prospects", duree_minutes: 20 },
          { id: 'vente-1-5', titre: 'Templates de leads magnets', duree_minutes: 14 },
          { id: 'vente-1-6', titre: 'Mesurer ses résultats et ajuster', duree_minutes: 10 },
        ],
      },
      {
        id: 'vente-ch-2',
        titre: 'Prospecter et convertir sur LinkedIn',
        modules: [
          { id: 'vente-2-1', titre: 'Préparer sa prospection LinkedIn', duree_minutes: 15 },
          { id: 'vente-2-2', titre: 'Naviguer efficacement dans LinkedIn pour prospecter', duree_minutes: 12 },
          { id: 'vente-2-3', titre: 'Rédiger des messages de prospection percutants', duree_minutes: 22 },
          { id: 'vente-2-4', titre: 'Utiliser le message vocal LinkedIn pour se démarquer', duree_minutes: 14 },
          { id: 'vente-2-5', titre: 'Gérer les objections avec maîtrise', duree_minutes: 16 },
          { id: 'vente-2-6', titre: 'Atteindre le bon interlocuteur sur LinkedIn', duree_minutes: 12 },
          { id: 'vente-2-7', titre: 'Créer une relation commerciale durable', duree_minutes: 18 },
          { id: 'vente-2-8', titre: 'Outils et CRM pour piloter sa prospection', duree_minutes: 14 },
          { id: 'vente-conclu', titre: 'Synthèse finale et plan d\'action', duree_minutes: 8 },
        ],
      },
    ],
  },
  {
    id: 'form-3',
    titre: 'Trouver un emploi sur LinkedIn 2026',
    slug: 'trouver-emploi-linkedin-2026',
    description:
      "Décrochez l'emploi de vos rêves en utilisant LinkedIn comme levier stratégique. Optimisation de profil pour les recruteurs, réseau actif, messages qui obtiennent des réponses — tout ce qu'il faut pour accélérer votre recherche d'emploi.",
    description_courte:
      "Optimisez votre recherche d'emploi et décrochez des entretiens via LinkedIn.",
    image_cover_url: '/images/formations/cover-emploi.jpg',
    video_presentation_url: 'https://www.youtube.com/embed/HYGeitYOjOE?rel=0',
    prix: 27,
    est_gratuite: false,
    niveau: 'debutant',
    duree_estimee_heures: 4,
    nombre_chapitres: 2,
    nombre_apprenants: 876,
    chapitres: [
      {
        id: 'emploi-ch-1',
        titre: 'Fondations & Stratégie de présence',
        modules: [
          { id: 'emploi-intro', titre: "Introduction — LinkedIn 2026 : le nouveau terrain de jeu pour trouver un emploi", duree_minutes: 6 },
          { id: 'emploi-1-1', titre: "Poser les fondations d'une présence qui attire les recruteurs", duree_minutes: 20 },
          { id: 'emploi-1-2', titre: 'Trouver son bon positionnement pour attirer les recruteurs', duree_minutes: 15 },
          { id: 'emploi-1-3', titre: "Développer un réseau qui travaille pour vous", duree_minutes: 16 },
          { id: 'emploi-1-4', titre: 'Créer du contenu qui attire les recruteurs', duree_minutes: 18 },
          { id: 'emploi-1-5', titre: 'Mesurer ses résultats et ajuster sa stratégie', duree_minutes: 12 },
        ],
      },
      {
        id: 'emploi-ch-2',
        titre: 'Trouver et décrocher',
        modules: [
          { id: 'emploi-2-1', titre: "Comprendre les logiques de recherche des recruteurs sur LinkedIn", duree_minutes: 18 },
          { id: 'emploi-2-2', titre: 'Définir une stratégie de mots-clés et spécialisation sectorielle', duree_minutes: 14 },
          { id: 'emploi-2-3', titre: 'Naviguer efficacement sur LinkedIn pour chercher un emploi', duree_minutes: 12 },
          { id: 'emploi-2-4', titre: "LinkedIn Premium Career : l'investissement qui accélère votre recherche", duree_minutes: 10 },
          { id: 'emploi-2-5', titre: "Adapter sa candidature à chaque offre d'emploi", duree_minutes: 15 },
          { id: 'emploi-2-6', titre: 'Construire un réseau RH actif et ciblé', duree_minutes: 18 },
          { id: 'emploi-2-7', titre: 'Contacter les recruteurs avec un message impactant', duree_minutes: 16 },
          { id: 'emploi-2-8', titre: 'Créer un CRM de candidature', duree_minutes: 14 },
          { id: 'emploi-conclu', titre: 'Conclusion', duree_minutes: 5 },
        ],
      },
    ],
  },
  {
    id: 'form-4',
    titre: 'Devenir influent sur LinkedIn 2026',
    slug: 'devenir-influent-linkedin-2026',
    description:
      "Construisez une audience engagée de plusieurs milliers d'abonnés et devenez une référence incontournable dans votre domaine. Stratégie de contenu, personal branding, storytelling — la méthode complète pour les créateurs qui veulent scaler.",
    description_courte:
      'Construisez une audience engagée et devenez une référence dans votre secteur.',
    image_cover_url: '/images/formations/cover-influence.jpg',
    video_presentation_url: 'https://www.youtube.com/embed/bwytjUwls3Q?rel=0',
    prix: 27,
    est_gratuite: false,
    niveau: 'avance',
    duree_estimee_heures: 6,
    nombre_chapitres: 3,
    nombre_apprenants: 654,
    chapitres: [
      {
        id: 'influence-ch-1',
        titre: "Construire votre fondation d'influence",
        modules: [
          { id: 'influence-intro', titre: 'Introduction', duree_minutes: 5 },
          { id: 'influence-1-1', titre: "Construire un profil qui inspire l'autorité", duree_minutes: 22 },
          { id: 'influence-1-2', titre: "Trouver son positionnement d'influence", duree_minutes: 20 },
          { id: 'influence-1-3', titre: 'Développer sa visibilité et son rayonnement', duree_minutes: 18 },
          { id: 'influence-1-4', titre: 'Favikon : comprendre les classements et viser le Top 100', duree_minutes: 16 },
        ],
      },
      {
        id: 'influence-ch-2',
        titre: "L'art du contenu d'autorité",
        modules: [
          { id: 'influence-2-1', titre: "Pourquoi créer du contenu est le cœur de votre influence", duree_minutes: 12 },
          { id: 'influence-2-2', titre: "Les piliers d'un contenu qui crée de l'autorité", duree_minutes: 20 },
          { id: 'influence-2-3', titre: 'Les formats qui font autorité sur LinkedIn en 2026', duree_minutes: 18 },
          { id: 'influence-2-4', titre: "Structurer un post qui se lit jusqu'au bout", duree_minutes: 16 },
          { id: 'influence-2-5', titre: "Les appels à l'action qui déclenchent les bons signaux", duree_minutes: 14 },
          { id: 'influence-2-6', titre: 'Construire une identité de marque personnelle reconnaissable', duree_minutes: 20 },
          { id: 'influence-2-7', titre: "Définir sa ligne éditoriale d'influence", duree_minutes: 18 },
          { id: 'influence-2-8', titre: 'Planifier et piloter son contenu avec le calendrier glissant', duree_minutes: 16 },
        ],
      },
      {
        id: 'influence-ch-3',
        titre: 'Écrire et publier avec impact',
        modules: [
          { id: 'influence-3-1', titre: "L'attention sur LinkedIn : comprendre avant d'écrire", duree_minutes: 12 },
          { id: 'influence-3-2', titre: "Les fondamentaux d'un post qui fonctionne", duree_minutes: 16 },
          { id: 'influence-3-3', titre: '12 formats de publication à fort impact', duree_minutes: 24 },
          { id: 'influence-3-4', titre: "L'art de l'accroche", duree_minutes: 18 },
          { id: 'influence-3-5', titre: 'Rythme, lisibilité et mise en forme', duree_minutes: 14 },
          { id: 'influence-3-6', titre: 'Les principes psychologiques appliqués au copywriting', duree_minutes: 18 },
          { id: 'influence-conclu', titre: 'Conclusion', duree_minutes: 5 },
        ],
      },
    ],
  },
]

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
