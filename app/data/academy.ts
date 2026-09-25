// Source unique, côté site, de ce qui vient de ProVisual Academy : adresse de la plateforme,
// tarifs et chiffres publics. À garder alignée sur src/data/tarifs.ts et src/data/temoignages.ts
// du dépôt academy.

export const ACADEMY_URL = 'https://www.provisual-academy.com'

export const ESPACE_CLASSE = {
  prixMensuel: 19.99,
  /** L'abonnement est ancré au 1er du mois ; le mois d'inscription est facturé au prorata. */
  jourPrelevement: 1,
  /** Mensualités pleines dues après le mois d'inscription. */
  engagementMensualites: 2,
} as const

/** Prix à l'unité : paiement unique, accès à vie. */
export const PRIX_FORMATIONS: Record<string, number> = {
  'trouver-emploi-linkedin-2026': 29,
  'devenir-influent-linkedin-2026': 39,
  'vendre-linkedin-2026': 49,
}

/** « 29€ », « 19,99€ » : même style d'affichage que sur la plateforme, sans espace avant le symbole. */
export function euros(montant: number): string {
  const texte = Number.isInteger(montant) ? String(montant) : montant.toFixed(2).replace('.', ',')
  return `${texte}€`
}

export const CLASSE_PRIX_TEXTE = euros(ESPACE_CLASSE.prixMensuel)
export const CLASSE_MENSUEL_TEXTE = `${CLASSE_PRIX_TEXTE}/mois`
export const CLASSE_ENGAGEMENT_TEXTE = `Engagement de ${ESPACE_CLASSE.engagementMensualites} mois, puis résiliable à tout moment`

const prixTries = Object.values(PRIX_FORMATIONS).sort((a, b) => a - b)
export const PRIX_UNITE_MIN = prixTries[0]
export const PRIX_UNITE_MAX = prixTries[prixTries.length - 1]
/** Ce que coûteraient les e-books payants achetés un à un. */
export const TOTAL_UNITES = prixTries.reduce((somme, prix) => somme + prix, 0)

/** Chiffres publics de la plateforme (STATS_PLATEFORME côté academy). */
export const STATS_ACADEMY = {
  apprenants_total: 340,
  note_moyenne: 4.9,
  taux_satisfaction: 99,
  formations: 4,
} as const

export const ACADEMY_TARIFS_URL = `${ACADEMY_URL}/tarifs`
export const ACADEMY_CLASSE_URL = `${ACADEMY_URL}/checkout/classe`

export function academyFormationUrl(slug: string): string {
  return `${ACADEMY_URL}/formations/${slug}`
}

export function academyCheckoutUrl(slug: string): string {
  return `${ACADEMY_URL}/checkout/${slug}`
}
