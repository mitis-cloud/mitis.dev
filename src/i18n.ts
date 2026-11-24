export type Lingua = 'it' | 'en';

export const rotte: Record<string, string> = {
  '/': '/en/',
  '/kubernetes': '/en/kubernetes',
  '/finops': '/en/finops',
  '/devops': '/en/devops',
  '/risultati': '/en/results',
  '/open-source': '/en/open-source',
  '/metodo': '/en/method',
  '/servizi': '/en/services',
  '/chi-siamo': '/en/about',
  '/contatti': '/en/contact',
  '/faq': '/en/faq',
  '/privacy': '/en/privacy',
  '/cookie': '/en/cookie',
};

const rotteInverse = Object.fromEntries(Object.entries(rotte).map(([it, en]) => [en, it]));

export function linguaDi(pathname: string): Lingua {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'it';
}

export function via(l: Lingua, percorsoIt: string): string {
  return l === 'en' ? (rotte[percorsoIt] ?? percorsoIt) : percorsoIt;
}

export function alternati(pathname: string): { it: string; en: string } | undefined {
  const pulito = pathname.replace(/\/$/, '') || '/';
  if (linguaDi(pulito) === 'en') {
    const chiave = pulito === '/en' ? '/en/' : pulito;
    const it = rotteInverse[chiave];
    return it ? { it, en: chiave } : undefined;
  }
  const en = rotte[pulito];
  return en ? { it: pulito, en } : undefined;
}
