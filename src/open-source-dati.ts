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
];

export const registro = (nome: string) =>
  `https://registry.terraform.io/modules/mitis-cloud/${nome}/scaleway`;

export const sorgente = (repo: string) => `https://github.com/mitis-cloud/${repo}`;
