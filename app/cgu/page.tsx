import type { Metadata } from 'next'
import PageShell from '../components/shared/PageShell'

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation | Provisual",
  description: "Conditions générales d'utilisation (CGU) du site et des services Provisual.",
}

export default function CguPage() {
  return (
    <PageShell>
      <section className="relative pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 max-lg:text-center">
            Conditions générales <span className="gradient-text">d&apos;utilisation</span>
          </h1>
          <p className="text-white/50 text-sm mb-12 max-lg:text-center">En vigueur au 02/09/25</p>

          <div className="space-y-8 text-white/65 leading-relaxed">
            <p>
              Les présentes conditions générales d&apos;utilisation (dites «&nbsp;CGU&nbsp;») ont pour objet l&apos;encadrement
              juridique des modalités de mise à disposition du site et des services par Provisual et de définir les conditions
              d&apos;accès et d&apos;utilisation des services par «&nbsp;l&apos;Utilisateur&nbsp;».
            </p>
            <p>
              Les présentes CGU sont accessibles sur le site à la rubrique «&nbsp;CGU&nbsp;».
            </p>

            <div>
              <h2 className="text-xl font-black text-white mb-3">Article 1 : Accès au site</h2>
              <p>
                Le site <a href="https://www.provisual.fr" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-tertiary transition-colors">https://www.provisual.fr</a> permet
                à l&apos;Utilisateur un accès gratuit aux services suivants : présentation des activités de Provisual dans les
                domaines du marketing digital et de la data &amp; analytics, mise en avant des e-books proposés par l&apos;entreprise
                et formulaire de contact.
              </p>
              <p className="mt-3">
                Le site est accessible gratuitement à tout Utilisateur disposant d&apos;un accès Internet. Tous les frais
                nécessaires à cet accès sont à la charge de l&apos;Utilisateur.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">Article 2 : Collecte des données</h2>
              <p>
                Le site assure à l&apos;Utilisateur une collecte et un traitement des informations personnelles dans le respect
                de la vie privée conformément à la loi n°78-17 du 6 janvier 1978.
              </p>
              <p className="mt-3">
                L&apos;Utilisateur dispose d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition de
                ses données via un formulaire de contact.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">Article 3 : Propriété intellectuelle</h2>
              <p>
                Les marques, logos, signes et tous les contenus du site (textes, images, sons, etc.) sont protégés par le Code
                de la propriété intellectuelle. Toute reproduction, publication ou copie non autorisée est interdite.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">Article 4 : Responsabilité</h2>
              <p>
                Les informations disponibles sur le site sont fournies à titre indicatif. Provisual ne peut être tenu
                responsable des éventuelles erreurs, omissions ou dommages liés à l&apos;utilisation du site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">Article 5 : Liens hypertextes</h2>
              <p>
                Le site peut contenir des liens externes. Provisual n&apos;exerce aucun contrôle sur ces sites et décline toute
                responsabilité quant à leur contenu.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">Article 6 : Cookies</h2>
              <p>
                Lors de la navigation, un cookie peut s&apos;installer automatiquement sur le logiciel de navigation de
                l&apos;Utilisateur. L&apos;Utilisateur peut désactiver les cookies via les paramètres de son navigateur.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">Article 7 : Publication par l&apos;Utilisateur</h2>
              <p>
                Le site permet aux membres de publier des articles, sous réserve du respect des règles légales et de la
                Netiquette. Tout contenu publié reste sous la responsabilité de l&apos;Utilisateur.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-white mb-3">Article 8 : Droit applicable et juridiction compétente</h2>
              <p>
                La législation française s&apos;applique. En cas de litige, seuls les tribunaux français seront compétents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
