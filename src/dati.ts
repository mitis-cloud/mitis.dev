const oggetto = (s: string) => 'mailto:info@mitis.dev?subject=' + encodeURIComponent(s);

export const contatti = {
  email: 'info@mitis.dev',
  chiamata: oggetto('Prenota una chiamata tecnica'),
  chiamataEn: oggetto('Book a technical call'),
  assessment: oggetto('Assessment gratuito'),
  assessmentEn: oggetto('Free assessment'),
  // Link a un calendario (Cal.com, Calendly): se valorizzato sostituisce il mailto della chiamata.
  prenotazione: '',
  github: 'https://github.com/mitis-cloud',
  understudy: 'https://github.com/mitis-cloud/understudy',
  charts: 'https://github.com/mitis-cloud/charts',
};

export const azienda = {
  pIva: '10611521211',
  urlPrivacy: '/privacy',
  urlCookie: '/cookie',
};

// Le persone dello studio. Vuoto: la pagina "Chi siamo" presenta lo studio senza schede personali.
export const persone: { nome: string; ruolo: { it: string; en: string }; foto?: string; link?: string }[] = [];

export const casoFinOps = {
  it: { settore: 'bancario', spesa: '30k € / mese', periodo: '3 settimane' },
  en: { settore: 'banking', spesa: '€30k / month', periodo: '3 weeks' },
};

// Numeri identici alla tabella "Results" del README di Understudy: non arrotondare.
export const risultatiUnderstudy = [
  { it: 'Nessuna interruzione (riferimento)', en: 'No interruption (baseline)', falliti: 0, totale: 120 },
  { it: 'Macchina svuotata a mano', en: 'Machine drained by hand', falliti: 1, totale: 350 },
  { it: 'Macchina spenta in automatico per risparmiare', en: 'Machine switched off automatically to save money', falliti: 1, totale: 189 },
  {
    it: 'Macchina scontata ripresa da AWS',
    en: 'Discounted machine taken back by AWS',
    falliti: 1,
    totale: 764,
    evidenza: true,
  },
  {
    it: 'Normale aggiornamento dell’applicazione, senza Understudy',
    en: 'Ordinary application update, without Understudy',
    falliti: 2,
    totale: 38,
    controllo: true,
  },
];
