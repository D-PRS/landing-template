import type { Metadata } from 'next'
import PageShell from '../components/shared/PageShell'

export const metadata: Metadata = {
  title: 'Mentions légales | Provisual',
  description: 'Mentions légales du site ProVisual — éditeur, hébergeur, propriété intellectuelle et données personnelles.',
}

export default function MentionsLegalesPage() {
  return (
    <PageShell>
      <section className="relative pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 max-lg:text-center">
            Mentions <span className="gradient-text">légales</span>
          </h1>
          <p className="text-white/50 text-sm mb-12 max-lg:text-center">Dernière mise à jour : juin 2026</p>

          <div className="space-y-10 text-white/65 leading-relaxed">
            <div>
              <h2 className="text-xl font-black text-white mb-3">1. Éditeur du site</h2>
              <p>
                Le présent site <strong className="text-white">provisual.fr</strong> est édité par <strong className="text-white">ProVisual</strong>, représentée par Dylan Parisi.
              </p>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li>Statut juridique : <span className="text-white/50">[à compléter — ex. micro-entreprise / EI]</span></li>
                <li>SIRET : <span className="text-white/50">[à compléter]</span></li>
                <li>Siège : <span className="text-white/50">[à compléter]</span></li>
                <li>N° TVA intracommunautaire : <span className="text-white/50">[à compléter ou « non assujetti à la TVA, art. 293 B du CGI »]</span></li>
                <li>E-mail : <a href="mailto:contact@provisual.fr" className="text-secondary hover:text-tertiary transition-colors">contact@provisual.fr</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">2. Directeur de la publication</h2>
              <p>Le directeur de la publication est <strong className="text-white">Dylan Parisi</strong>.</p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">3. Hébergeur</h2>
              <p>
                Le site est hébergé par <strong className="text-white">Vercel Inc.</strong>, 340 S Lemon Avenue #4133,
                Walnut, CA 91789, États-Unis — <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-tertiary transition-colors">vercel.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">4. Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble des contenus présents sur ce site (textes, images, logos, vidéos, graphismes, e-books et leur structure)
                est la propriété exclusive de ProVisual ou de ses partenaires, et est protégé par le droit de la propriété intellectuelle.
                Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable, est interdite.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">5. Données personnelles</h2>
              <p>
                Les informations transmises via les formulaires ou la prise de rendez-vous sont utilisées uniquement
                pour répondre à vos demandes et assurer le suivi de la relation commerciale. Conformément au RGPD et à la loi
                « Informatique et Libertés », vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;opposition et de
                suppression de vos données, exerçable par e-mail à <a href="mailto:contact@provisual.fr" className="text-secondary hover:text-tertiary transition-colors">contact@provisual.fr</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">6. Cookies</h2>
              <p>
                Ce site peut déposer des cookies de mesure d&apos;audience et de fonctionnement. Vous pouvez à tout moment
                configurer votre navigateur pour les refuser. Certaines fonctionnalités intégrées (vidéos YouTube, prise de
                rendez-vous Calendly) peuvent déposer leurs propres cookies, soumis à leurs politiques respectives.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">7. Responsabilité</h2>
              <p>
                ProVisual s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur ce site mais ne saurait être tenue
                responsable des erreurs, omissions ou indisponibilités. Les liens vers des sites tiers n&apos;engagent pas la responsabilité de ProVisual.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">8. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. Tout litige relatif à l&apos;utilisation du site
                relève de la compétence des tribunaux français.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
