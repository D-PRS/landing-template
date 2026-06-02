import type { Metadata } from 'next'
import PageShell from '../components/shared/PageShell'

export const metadata: Metadata = {
  title: "Conditions d'utilisation | Provisual",
  description: "Conditions générales d'utilisation du site et des services ProVisual.",
}

export default function CguPage() {
  return (
    <PageShell>
      <section className="relative pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 max-lg:text-center">
            Conditions <span className="gradient-text">d&apos;utilisation</span>
          </h1>
          <p className="text-white/50 text-sm mb-12 max-lg:text-center">Dernière mise à jour : juin 2026</p>

          <div className="space-y-10 text-white/65 leading-relaxed">
            <div>
              <h2 className="text-xl font-black text-white mb-3">1. Objet</h2>
              <p>
                Les présentes conditions générales d&apos;utilisation (CGU) ont pour objet de définir les modalités d&apos;accès et
                d&apos;utilisation du site <strong className="text-white">provisual.fr</strong> et des contenus qu&apos;il propose
                (pages de services, e-books, formations et prises de rendez-vous). En accédant au site, l&apos;utilisateur accepte sans réserve les présentes CGU.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">2. Accès au site</h2>
              <p>
                Le site est accessible gratuitement à tout utilisateur disposant d&apos;un accès à Internet. Les frais de connexion
                et de matériel restent à la charge de l&apos;utilisateur. ProVisual met tout en œuvre pour assurer la disponibilité du
                site mais ne peut garantir un accès ininterrompu, notamment en cas de maintenance ou de force majeure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">3. Services et e-books</h2>
              <p>
                Le site présente les prestations de ProVisual (Marketing LinkedIn, Data Analytics) ainsi que des e-books et formations.
                Les informations relatives aux prix et au contenu sont fournies à titre indicatif et peuvent évoluer. Toute prestation
                fait l&apos;objet d&apos;un accord spécifique entre ProVisual et le client avant son exécution.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">4. Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble des éléments du site (textes, visuels, logos, vidéos, e-books) est protégé par le droit de la propriété
                intellectuelle et demeure la propriété de ProVisual. L&apos;utilisateur s&apos;interdit toute reproduction ou diffusion sans
                autorisation écrite préalable. Les e-books acquis sont réservés à un usage strictement personnel.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">5. Responsabilité de l&apos;utilisateur</h2>
              <p>
                L&apos;utilisateur s&apos;engage à utiliser le site conformément à sa destination et à ne pas porter atteinte à son bon
                fonctionnement, à sa sécurité ou aux droits de tiers. Tout usage frauduleux ou contraire aux présentes CGU pourra
                entraîner la suspension de l&apos;accès.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">6. Limitation de responsabilité</h2>
              <p>
                Les contenus et conseils diffusés sur le site et dans les e-books ont une visée informative et ne constituent pas une
                garantie de résultat. ProVisual ne saurait être tenue responsable des décisions prises par l&apos;utilisateur sur la base
                de ces contenus, ni des dommages indirects liés à l&apos;utilisation du site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">7. Liens et services tiers</h2>
              <p>
                Le site intègre des services tiers (YouTube, Calendly, LinkedIn). L&apos;utilisation de ces services est soumise à leurs
                propres conditions et politiques de confidentialité, sur lesquelles ProVisual n&apos;a aucun contrôle.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">8. Données personnelles</h2>
              <p>
                Le traitement des données personnelles est détaillé dans les <a href="/mentions-legales" className="text-secondary hover:text-tertiary transition-colors">mentions légales</a>.
                L&apos;utilisateur dispose d&apos;un droit d&apos;accès, de rectification et de suppression de ses données via <a href="mailto:contact@provisual.fr" className="text-secondary hover:text-tertiary transition-colors">contact@provisual.fr</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">9. Modification des CGU</h2>
              <p>
                ProVisual se réserve le droit de modifier les présentes CGU à tout moment. La version applicable est celle en vigueur
                à la date de consultation du site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">10. Droit applicable</h2>
              <p>
                Les présentes CGU sont régies par le droit français. À défaut de résolution amiable, tout litige relève de la
                compétence des tribunaux français. Pour toute question : <a href="mailto:contact@provisual.fr" className="text-secondary hover:text-tertiary transition-colors">contact@provisual.fr</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
