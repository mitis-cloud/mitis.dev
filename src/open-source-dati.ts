export const moduli = [
  {
    nome: 'vpc',
    repo: 'terraform-scaleway-vpc',
    it: 'Crea una VPC Scaleway e le sue private network.',
    en: 'Creates a Scaleway VPC and its private networks.',
  },
  {
    nome: 'public-gateway',
    repo: 'terraform-scaleway-public-gateway',
    it: 'Crea un Public Gateway, il suo IP flessibile e gli attacchi alle private network.',
    en: 'Creates a Public Gateway, its flexible IP, and its attachments to private networks.',
  },
  {
    nome: 'kapsule-cluster',
    repo: 'terraform-scaleway-kapsule-cluster',
    it: 'Crea un cluster Kubernetes Kapsule.',
    en: 'Creates a Scaleway Kubernetes Kapsule cluster.',
  },
  {
    nome: 'kapsule-pool',
    repo: 'terraform-scaleway-kapsule-pool',
    it: 'Crea un node pool per un cluster Kapsule.',
    en: 'Creates a node pool for a Kapsule cluster.',
  },
  {
    nome: 'kapsule-acl',
    repo: 'terraform-scaleway-kapsule-acl',
    it: 'Limita gli indirizzi che possono raggiungere l’API server del cluster.',
    en: 'Restricts which addresses may reach the cluster API server.',
  },
  {
    nome: 'openvpn',
    soloSorgente: true,
    repo: 'terraform-scaleway-openvpn',
    it: 'OpenVPN split-tunnel dichiarativo su Scaleway, con profili per utente in Object Storage.',
    en: 'Declarative split-tunnel OpenVPN on Scaleway with per-user profiles in Object Storage.',
  },
];

export const chart = [
  {
    nome: 'service',
    it: 'Un servizio continuo con i suoi input, storage, helper e job.',
    en: 'A continuous service with its inputs, storage, helpers and jobs.',
  },
  {
    nome: 'service-library',
    it: 'I template del chart service come libreria, per comporre più servizi in un’applicazione.',
    en: 'The service chart’s templates as a library, for composing several services into one application.',
  },
  {
    nome: 'delivery',
    it: 'Applicazioni Argo CD e unità di promozione Kargo indipendenti, su ambienti espliciti.',
    en: 'Argo CD applications and independent Kargo promotion units across explicit environments.',
  },
  {
    nome: 'environment',
    it: 'Namespace, profili di esposizione, isolamento e manutenzione di un ambiente, composti da Crossplane.',
    en: 'One environment’s namespace, exposure profiles, isolation and maintenance switch, composed by Crossplane.',
  },
];

export const progetti = [
  {
    nome: 'Understudy',
    repo: 'understudy',
    tipo: { it: 'Operator Kubernetes · Go', en: 'Kubernetes operator · Go' },
    it: 'Alta disponibilità best-effort con una sola replica: drain, upgrade, consolidamenti e spot reclaim senza una seconda replica sempre accesa.',
    en: 'Best-effort high availability with one replica: drains, upgrades, consolidation and spot reclaims without a standing second replica.',
  },
  {
    nome: 'mitis charts',
    repo: 'charts',
    tipo: { it: 'Chart Helm · Crossplane', en: 'Helm charts · Crossplane' },
    it: 'Descrivi un servizio, non una pila di manifest: chart piccoli e tipizzati per eseguire servizi e promuoverli tra ambienti.',
    en: 'Describe a service, not a pile of manifests: small, typed charts for running services and promoting them across environments.',
  },
  {
    nome: 'terraform-scaleway-*',
    repo: '',
    tipo: { it: 'Sei moduli Terraform', en: 'Six Terraform modules' },
    it: 'Rete, gateway, VPN e Kubernetes Kapsule su Scaleway, pubblicati sul Terraform Registry.',
    en: 'Networking, gateway, VPN and Kubernetes Kapsule on Scaleway, published on the Terraform Registry.',
  },
  {
    nome: 'dbeaver-aws-sso',
    repo: 'dbeaver-aws-sso',
    tipo: { it: 'Plugin DBeaver · Java', en: 'DBeaver plugin · Java' },
    it: 'Accesso ai database RDS da DBeaver con AWS IAM Identity Center: login nel browser, nessuna password di database.',
    en: 'RDS database access from DBeaver with AWS IAM Identity Center: browser sign-in, no database passwords.',
  },
];

export const registro = (nome: string) =>
  `https://registry.terraform.io/modules/mitis-cloud/${nome}/scaleway`;

export const sorgente = (repo: string) => `https://github.com/mitis-cloud/${repo}`;
