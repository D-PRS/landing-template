import {
  CLASSE_MENSUEL_TEXTE, ESPACE_CLASSE, PRIX_FORMATIONS, STATS_ACADEMY, euros,
} from './academy'

const CDN = 'https://cdn.prod.website-files.com/68ab2d1a568ed1d53d774d32'

export const EBOOKS = [
  {
    id: 1,
    titre: 'E-book Prospection LinkedIn',
    description: 'Posez des bases solides sur LinkedIn : profil, posture, premiers contenus et réseau, tout pour bien démarrer avec les bons réflexes.',
    image: `${CDN}/68c312c07965f332a429837b_1.png`,
    tag: 'Débutant',
    tagColor: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    id: 2,
    titre: 'E-book Création de contenu',
    description: 'Structurez une ligne éditoriale cohérente, trouvez des idées percutantes et publiez régulièrement pour développer votre visibilité.',
    image: `${CDN}/68c31283c9c6ed064f402c66_2.png`,
    tag: 'Intermédiaire',
    tagColor: 'bg-amber-500/20 text-amber-400',
  },
  {
    id: 3,
    titre: 'E-book Copywriting LinkedIn',
    description: 'Maîtrisez l\'art d\'écrire des publications qui captent l\'attention, suscitent l\'engagement et renforcent votre crédibilité.',
    image: `${CDN}/68c31290481cb19d6699624d_3.png`,
    tag: 'Intermédiaire',
    tagColor: 'bg-amber-500/20 text-amber-400',
  },
  {
    id: 4,
    titre: 'E-book Démarrage LinkedIn',
    description: 'Apprenez à cibler, approcher et convertir efficacement vos prospects grâce à une méthode claire, structurée et testée sur le terrain.',
    image: `${CDN}/68c07ab9939042c046999908_4.png`,
    tag: 'Débutant',
    tagColor: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    id: 5,
    titre: 'E-book Optimisation de profil',
    description: 'Optimisez chaque section de votre profil pour gagner en clarté, en crédibilité et attirer naturellement les bonnes opportunités.',
    image: `${CDN}/68c312d1d8c1c4984dc3fa92_5.png`,
    tag: 'Essentiel',
    tagColor: 'bg-sky-500/20 text-sky-400',
  },
  {
    id: 6,
    titre: 'E-book Recherche d\'emploi',
    description: 'Utilisez LinkedIn comme levier stratégique pour vous rendre visible, activer votre réseau et décrocher des opportunités concrètes.',
    image: `${CDN}/68c312dec54a40f288dd69d1_6.png`,
    tag: 'Carrière',
    tagColor: 'bg-violet-500/20 text-violet-400',
  },
  {
    id: 7,
    titre: 'E-book Algorithme LinkedIn',
    description: 'Comprenez le fonctionnement de LinkedIn pour maximiser la portée de vos publications et renforcer votre présence dans le fil.',
    image: `${CDN}/68c312ebfde9e2161e6a6642_7.png`,
    tag: 'Avancé',
    tagColor: 'bg-rose-500/20 text-rose-400',
  },
]

// Chiffres de la page E-books : ceux de ProVisual Academy, une seule source (./academy.ts).
export const STATS = [
  { value: String(STATS_ACADEMY.apprenants_total), label: 'Apprenants formés sur ProVisual Academy' },
  { value: String(STATS_ACADEMY.formations), label: 'E-books LinkedIn, dont un gratuit' },
  { value: `${STATS_ACADEMY.note_moyenne}/5`, label: 'Note moyenne des apprenants' },
  { value: `${STATS_ACADEMY.taux_satisfaction} %`, label: 'Apprenants satisfaits' },
]

export const TEMOIGNAGES = [
  {
    id: '1',
    prenom: 'Pierrick',
    nom: 'Pereira',
    poste: 'CEO',
    entreprise: 'WallSwiss',
    avatar_url: `${CDN}/68b605c0f0599c67093cc3aa_Pierrick.png`,
    note: 5,
    texte: 'Merci à Dylan pour son travail exemplaire. Une rigueur de travail, des idées innovantes ! Il ne compte pas les heures pour donner le meilleur pour ses clients.',
  },
  {
    id: '2',
    prenom: 'Maylis',
    nom: 'Perret',
    poste: 'CEO',
    entreprise: 'PNC Conseil',
    avatar_url: `${CDN}/68b608ed49588bd5aca23903_Maylis.png`,
    note: 5,
    texte: 'Je recommande Dylan : réactivité et rapidité de mise en œuvre hors pair !',
  },
  {
    id: '3',
    prenom: 'Gaëtan',
    nom: 'Constantin',
    poste: 'Fondateur',
    entreprise: 'ALL-IN',
    avatar_url: `${CDN}/68b5ff2ba9b3ff9512d8ba74_Gaetant.png`,
    note: 5,
    texte: 'Faites appel à Dylan Parisi et à son agence LinkedIn pour optimiser votre profil. Professionnel, à l\'écoute et disponible, je vous le recommande vivement. Sa rapidité d\'exécution mérite une mention particulière !',
  },
  {
    id: '4',
    prenom: 'Nicolas',
    nom: 'Sapin',
    poste: 'Directeur',
    entreprise: 'BSK Immobilier',
    avatar_url: `${CDN}/68b608168ed5a22c8350a930_Nicolas.png`,
    note: 5,
    texte: 'Dylan est très réactif et compétent. Je recommanderai Dylan à mes connaissances !',
  },
  {
    id: '5',
    prenom: 'Issam',
    nom: 'Amadah',
    poste: 'CEO',
    entreprise: 'ERAC Human Services',
    avatar_url: `${CDN}/68b6068d0a093a8838989158_Issam.png`,
    note: 5,
    texte: 'Merci à Dylan pour cette collaboration, très pro et connait son sujet, je ne peux que recommander.',
  },
  {
    id: '6',
    prenom: 'Adam',
    nom: 'Bensiradj',
    poste: 'CEO',
    entreprise: 'Infinity Views',
    avatar_url: `${CDN}/68b6047bcfb9e1572d172217_Adam.png`,
    note: 5,
    texte: 'J\'ai suivi l\'accompagnement mensuel de Dylan, les résultats commencent déjà à arriver je vous recommande fortement cet accompagnement.',
  },
  {
    id: '7',
    prenom: 'Théo',
    nom: 'Scannella',
    poste: 'CEO',
    entreprise: 'S.N CleanAuto',
    avatar_url: `${CDN}/68b60782e4726f65ef3755b8_Theo.png`,
    note: 5,
    texte: 'Je ne connaissais pas du tout LinkedIn, Dylan a su développer mon image et celle de mon entreprise sur cette plateforme afin que je développe mon business. Merci beaucoup !',
  },
  {
    id: '8',
    prenom: 'Jesse',
    nom: 'Bele',
    poste: 'Responsable développement réseau',
    entreprise: 'WallSwiss',
    avatar_url: '/tetes-clients/jesse.png',
    note: 5,
    texte: "Ravi de l'accompagnement. Cela fait maintenant plusieurs mois que Dylan s'occupe de mes réseaux LinkedIn. Il est réellement de bon conseil et m'a permis d'avoir une évolution statistique plus que satisfaisante en quelques mois. Je recommande vivement son travail !!!",
  },
  {
    id: '9',
    prenom: 'Gauthier',
    nom: 'Blin',
    poste: 'Senior Business Manager',
    entreprise: 'AVISIA',
    avatar_url: '/tetes-clients/gauthier.png',
    note: 5,
    texte: "J'ai eu l'occasion de travailler avec Dylan pour mieux comprendre les rouages de l'optimisation LinkedIn. Dylan a été très à l'écoute de ma demande pour me proposer une solution sur-mesure et précise. Je recommande Dylan qui est précis, pro et pragmatique.",
  },
  {
    id: '10',
    prenom: 'Alexandre',
    nom: 'Normand',
    poste: 'Expert PHP/JS & E-commerce',
    entreprise: 'Consultant indépendant',
    avatar_url: '/tetes-clients/alexandre.png',
    note: 5,
    texte: "Dylan est passionné par la communication, il est impliqué dans ses missions et à l'écoute. C'est facile de travailler avec lui. J'apprécie particulièrement sa force de proposition et sa réactivité.",
  },
  {
    id: '11',
    prenom: 'Josué',
    nom: 'Djossou',
    poste: 'Ingénieur IA embarquée',
    entreprise: 'Développement C++ & Python',
    avatar_url: '/tetes-clients/josue.png',
    note: 5,
    texte: 'Je recommande vivement ce service à toute personne souhaitant valoriser son parcours et booster sa présence en ligne sur LinkedIn. Je suis très satisfait de la prestation de Dylan.',
  },
  {
    id: '12',
    prenom: 'Grégory',
    nom: 'Tordjman',
    poste: 'Fondateur',
    entreprise: 'Reboutement et Massage',
    avatar_url: '/tetes-clients/gregory.png',
    note: 5,
    texte: "Dylan est un super entrepreneur, dynamique, réactif et adaptable qui fait des recherches pour vous proposer un service super personnalisé et cohérent par rapport à votre domaine d'activité. Il m'a refait ma page LinkedIn au top, cela a déclenché plus de visibilité et renforcé le côté professionnel de mon activité. En plus, ils travaillent rapidement et vous accompagnent même après le service.",
  },
  {
    id: '13',
    prenom: 'Evan',
    nom: 'Fremin',
    poste: 'Entrepreneur & Coach LinkedIn',
    entreprise: 'Automatisation commerciale',
    avatar_url: '/tetes-clients/evan.png',
    note: 5,
    texte: "J'ai eu le plaisir de bénéficier de deux heures de coaching avec Dylan. Je ne peux que vous le recommander. À l'écoute et très talentueux, il m'a accompagné dans l'élaboration de ma stratégie LinkedIn ainsi que dans l'optimisation de mon profil. Aujourd'hui, grâce aux conseils de Dylan, je génère désormais plusieurs rendez-vous qualifiés chaque mois.",
  },
]

export const SERVICES = [
  {
    titre: 'Marketing LinkedIn',
    description: 'Optimisation de profil, création de contenu percutant, animation de réseau. Nous transformons votre visibilité LinkedIn en opportunités business concrètes.',
    cta: 'Voir nos services LinkedIn',
    href: 'https://provisual.fr/service-marketing',
    color: 'from-secondary/20 to-accent/10',
    badge: 'Phare',
  },
  {
    titre: 'Hydra Analytics',
    description: 'Analyse approfondie de vos performances LinkedIn. Tableaux de bord, KPIs, insights actionnables pour piloter votre stratégie avec la data.',
    cta: 'Voir Hydra Analytics',
    href: 'https://provisual.fr/service-data-analytics',
    color: 'from-accent/20 to-secondary/10',
    badge: '',
  },
]

// FAQ de la page E-books : même registre formel et mêmes réponses détaillées que sur ProVisual Academy.
export const FAQ_ITEMS = [
  {
    question: "Par où commencer lorsque l'on débute sur LinkedIn ?",
    reponse: "L'e-book Les bases de LinkedIn constitue le point de départ recommandé. Il est entièrement gratuit et accessible dès la création d'un compte sur ProVisual Academy, sans aucun moyen de paiement. En trois chapitres et environ une heure et demie de lecture, il pose les repères indispensables : comprendre la plateforme, régler son profil et son réseau, saisir le fonctionnement de l'algorithme et publier avec méthode. Une fois ces bases acquises, chacun s'oriente vers l'e-book qui correspond à son objectif : Trouver un emploi sur LinkedIn (niveau débutant, environ 4 heures), Vendre sur LinkedIn (niveau intermédiaire, environ 5 heures) ou Devenir influent sur LinkedIn (niveau avancé, environ 6 heures). Chaque page présente le programme détaillé, la durée estimée, le niveau requis et une vidéo de présentation, afin de choisir en connaissance de cause.",
  },
  {
    question: 'Que contiennent concrètement ces e-books ?',
    reponse: "Chaque e-book se lit en ligne sur la plateforme ProVisual Academy, depuis un navigateur, sur ordinateur comme sur téléphone, sans aucune installation ni téléchargement. Il est organisé en chapitres, eux-mêmes découpés en parties courtes à lire à son propre rythme. Le contenu est principalement écrit et structuré, ce qui permet de revenir facilement sur un point précis, et il est complété par des écrans LinkedIn recréés et des schémas interactifs qui se dévoilent au clic, pour voir la plateforme en situation réelle. Les e-books payants comptent quatre chapitres chacun, soit quatre à six heures de travail selon le sujet, avec des exemples concrets, des ressources prêtes à l'emploi (modèles de messages, listes de vérification, scripts), un quiz de validation en fin de parcours et un certificat de complétion. La progression est enregistrée automatiquement et reste visible dans le tableau de bord.",
  },
  {
    question: 'Combien coûtent les e-books ?',
    reponse: `L'e-book Les bases de LinkedIn est gratuit. Les trois autres peuvent être achetés à l'unité, en un seul paiement, avec un accès sans limite de durée : Trouver un emploi sur LinkedIn au prix de ${euros(PRIX_FORMATIONS['trouver-emploi-linkedin-2026'])}, Devenir influent sur LinkedIn au prix de ${euros(PRIX_FORMATIONS['devenir-influent-linkedin-2026'])} et Vendre sur LinkedIn au prix de ${euros(PRIX_FORMATIONS['vendre-linkedin-2026'])}. L'Espace Classe, proposé à ${CLASSE_MENSUEL_TEXTE}, donne accès à l'ensemble des quatre e-books, à la communauté, aux mises à jour permanentes et aux nouveaux contenus. Tous les prix sont indiqués toutes taxes comprises et ne comportent aucun frais supplémentaire. Le règlement s'effectue par carte bancaire sur la plateforme ProVisual Academy, et un code promotionnel éventuel se saisit directement sur la page de paiement.`,
  },
  {
    question: "E-book à l'unité ou Espace Classe : quelle formule choisir ?",
    reponse: "Le choix dépend du nombre d'e-books visés et de l'intérêt porté à la communauté. Pour un objectif unique et précis, l'achat à l'unité est le plus adapté : l'e-book est acquis définitivement, sans aucun prélèvement ultérieur. Dès lors que deux e-books présentent un intérêt, ou que l'accès à la communauté et aux mises à jour compte, l'Espace Classe devient plus avantageux : sur la durée de l'engagement, il coûte à peu près le prix d'un seul e-book à l'unité tout en ouvrant les quatre. Il est également possible de commencer par un achat à l'unité et de rejoindre l'Espace Classe plus tard. L'e-book acheté reste alors acquis à vie, indépendamment de l'abonnement. Son prix n'est toutefois pas déduit du montant de l'abonnement.",
  },
  {
    question: "Comment fonctionne l'abonnement Espace Classe ?",
    reponse: `Le jour de la souscription, seuls les jours restants du mois en cours sont facturés, au prorata, et le montant exact est affiché avant le paiement. L'accès aux quatre e-books et à la communauté est ouvert immédiatement. Ensuite, la mensualité de ${CLASSE_MENSUEL_TEXTE} est prélevée le ${ESPACE_CLASSE.jourPrelevement}er de chaque mois, et un reçu est envoyé par e-mail après chaque prélèvement. L'engagement porte sur les ${ESPACE_CLASSE.engagementMensualites} premières mensualités pleines qui suivent le mois de souscription. À titre d'exemple, pour une souscription le 20 septembre, le mois de septembre est facturé au prorata, les mensualités d'octobre et de novembre sont dues, et l'engagement prend fin le 30 novembre. Au-delà de cette période, l'abonnement se résilie à tout moment, en ligne, depuis la page Facturation de l'espace personnel : un écran de confirmation indique la date exacte de fin d'accès avant toute validation, puis un e-mail confirme l'opération. Après la résiliation, le compte, la progression enregistrée, les certificats obtenus et l'e-book gratuit restent accessibles.`,
  },
  {
    question: 'Un remboursement est-il possible ?',
    reponse: "Les e-books sont des contenus numériques fournis immédiatement après le paiement. Conformément à l'article L221-28 13° du Code de la consommation, l'acheteur demande expressément cet accès immédiat au moment du paiement et renonce à son droit de rétractation de quatorze jours, ce qu'une case à cocher rappelle avant toute validation. Les achats à l'unité et les mensualités déjà prélevées ne sont donc pas remboursables, ni en totalité ni au prorata. Un remboursement est en revanche accordé en cas d'erreur imputable à ProVisual Academy : double prélèvement, prélèvement intervenu après la date d'effet d'une résiliation, ou impossibilité durable d'accéder au contenu acheté non résolue dans un délai raisonnable après signalement. La demande s'adresse à contact@provisual.fr, en précisant l'adresse e-mail du compte, la date du paiement et le motif. Une réponse est apportée sous sept jours ouvrés et tout remboursement accepté est effectué sur le moyen de paiement d'origine dans un délai de quatorze jours. L'e-book gratuit permet d'évaluer la qualité du contenu et la méthode avant tout achat.",
  },
  {
    question: 'Le paiement est-il sécurisé ?',
    reponse: "Les paiements sont confiés à Stripe, prestataire de paiement de référence soumis aux normes bancaires les plus strictes. Les données de carte sont saisies sur une page sécurisée hébergée par Stripe : elles ne transitent jamais par les serveurs de ProVisual et n'y sont jamais conservées. Selon la banque, une validation supplémentaire de type 3-D Secure peut être demandée au moment du paiement. Pour l'Espace Classe, la carte est conservée par Stripe afin d'assurer les prélèvements mensuels, et elle peut être modifiée à tout moment depuis la page Facturation. Les factures de chaque paiement sont téléchargeables depuis ce même espace.",
  },
  {
    question: 'Les certificats sont-ils reconnus ?',
    reponse: "Un certificat de complétion est délivré lorsque toutes les parties d'un e-book ont été terminées et que le quiz final a été réussi, avec au moins huit bonnes réponses sur dix. Chaque certificat porte un numéro unique, vérifiable publiquement en ligne, ce qui permet à un recruteur ou à un client de s'assurer de son authenticité. Il peut être ajouté au profil LinkedIn dans la rubrique « Licences et certifications », en indiquant ProVisual Academy comme organisme émetteur et le numéro du certificat. Par souci de transparence, il convient de préciser ce que ce certificat n'est pas : il ne s'agit ni d'une certification officielle délivrée par LinkedIn Corporation, ni d'une certification professionnelle enregistrée au RNCP, et ProVisual ne bénéficie pas de la certification Qualiopi. Les e-books ne sont par conséquent pas finançables par le compte personnel de formation (CPF).",
  },
  {
    question: 'Les e-books sont-ils mis à jour lorsque LinkedIn évolue ?',
    reponse: "LinkedIn modifie son algorithme, ses fonctionnalités et ses règles plusieurs fois par an. Les e-books sont relus et réécrits à chaque évolution significative, afin que les méthodes enseignées correspondent au fonctionnement réel de la plateforme et non à une version dépassée. Pour les membres de l'Espace Classe, ces mises à jour sont incluses sans frais supplémentaires et les nouveaux contenus sont mis à disposition en avant-première. Un achat à l'unité donne accès à l'e-book dans sa version au moment de l'achat, sans limite de durée.",
  },
  {
    question: "Peut-on bénéficier d'un accompagnement personnalisé en complément des e-books ?",
    reponse: "Oui. Les e-books transmettent la méthode. Pour les personnes qui souhaitent la faire appliquer ou être accompagnées dans la durée, l'agence ProVisual propose des prestations sur mesure : optimisation de profil, création de contenu, prospection et animation de réseau. Ces prestations sont indépendantes des e-books et de la plateforme ProVisual Academy. Un premier échange de trente minutes, entièrement gratuit, permet de définir la stratégie la plus adaptée. Il se réserve depuis la page Contact ou via le bouton Prendre rendez-vous.",
  },
]
