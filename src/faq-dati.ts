export interface Voce {
  id: string;
  q: string;
  a: string;
}
export interface Gruppo {
  etichetta: string;
  voci: Voce[];
}

const it: Gruppo[] = [
  {
    etichetta: 'Costi e contratto',
    voci: [
      {
        id: 'costo',
        q: 'Quanto costa?',
        a: 'L’analisi iniziale è gratuita. Per il progetto ricevi un prezzo fisso, per iscritto, prima di cominciare: dipende da cosa c’è da fare, e possiamo dirtelo solo dopo aver guardato la tua situazione.',
      },
      {
        id: 'fisso',
        q: 'Perché un prezzo fisso e non una tariffa a giornata?',
        a: 'Con una tariffa a giornata ogni imprevisto allunga il progetto e la fattura. Con un prezzo fisso l’imprevisto è a carico nostro, e abbiamo lo stesso interesse che hai tu a finire nei tempi.',
      },
      {
        id: 'tempi',
        q: 'Quanto tempo ci vuole?',
        a: 'L’analisi richiede due settimane. Un progetto dura settimane, non mesi: il caso bancario che raccontiamo ne ha richieste tre. I tempi del tuo progetto sono scritti nel contratto insieme al prezzo.',
      },
      {
        id: 'rimborso',
        q: 'Cosa succede se il risultato non arriva?',
        a: 'Il risultato concordato è scritto nel contratto, con una clausola di rimborso. Se dall’analisi emerge che non c’è abbastanza da recuperare, te lo diciamo e ci fermiamo lì.',
      },
      {
        id: 'settanta',
        q: 'Risparmieremo anche noi il 70%?',
        a: 'Non possiamo saperlo prima di guardare. Quel risultato viene da una piattaforma che aveva molto margine. L’analisi serve a stimare il tuo, con le ipotesi messe per iscritto.',
      },
      {
        id: 'assumere',
        q: 'Non conviene assumere una persona?',
        a: 'Se hai lavoro costante per una persona a tempo pieno, sì, e te lo diciamo in chiamata. Noi serviamo a costruire in poche settimane una base che a una persona appena assunta richiederebbe il primo anno. Dopo, quella persona trova una piattaforma ordinata da gestire.',
      },
    ],
  },
  {
    etichetta: 'Il lavoro tecnico',
    voci: [
      {
        id: 'esistente',
        q: 'Abbiamo già un’infrastruttura. Va rifatta da capo?',
        a: 'No. Teniamo quello che funziona e sostituiamo, un pezzo alla volta, quello che crea problemi, partendo dai rischi maggiori e senza fermare i rilasci.',
      },
      {
        id: 'team',
        q: 'Il nostro team non conosce Kubernetes. Chi lo gestirà dopo?',
        a: 'Il tuo team. La consegna comprende formazione e documentazione, e usiamo componenti standard e diffusi, per i quali è facile trovare persone e risposte. Per i primi mesi puoi tenere un abbonamento di supporto.',
      },
      {
        id: 'accessi',
        q: 'Che accessi vi servono?',
        a: 'Per l’analisi, sola lettura su fatturazione e account. Per il progetto, ruoli dedicati con i permessi minimi necessari, tracciati e revocabili in qualsiasi momento. Ogni modifica passa da una richiesta nei tuoi repository e resta registrata.',
      },
      {
        id: 'cloud',
        q: 'Su quali cloud lavorate?',
        a: 'AWS, Google Cloud e Azure. Lavoriamo anche su Scaleway, per chi preferisce un fornitore europeo.',
      },
      {
        id: 'prodotto',
        q: 'Dovremo usare un vostro prodotto?',
        a: 'No. Usiamo strumenti standard e open source, installati nei tuoi account. Non c’è una nostra licenza da pagare, né un software da disinstallare quando il progetto finisce.',
      },
    ],
  },
  {
    etichetta: 'Lo studio',
    voci: [
      {
        id: 'quanti',
        q: 'Quanti siete?',
        a: 'Siamo uno studio piccolo, per scelta. Su ogni progetto lavorano pochi ingegneri esperti, gli stessi dall’inizio alla fine. Se un progetto richiede più persone, lo sai prima di firmare.',
      },
      {
        id: 'nda',
        q: 'Firmate un accordo di riservatezza?',
        a: 'Sì. È il motivo per cui il caso bancario che raccontiamo non riporta il nome del cliente.',
      },
      {
        id: 'regolato',
        q: 'Lavoriamo in un settore regolato. È un problema?',
        a: 'No, è un contesto che conosciamo. Accessi con i permessi minimi, registro di ogni modifica e infrastruttura descritta come codice sono le stesse cose che chiede un audit. Non rilasciamo certificazioni, ma ti aiutiamo ad arrivarci con la documentazione in ordine.',
      },
      {
        id: 'dopo',
        q: 'Cosa succede dopo la consegna?',
        a: 'La piattaforma è tua e la gestisce il tuo team. Se vuoi, puoi attivare un abbonamento di supporto mensile, senza vincoli di durata.',
      },
    ],
  },
];

const en: Gruppo[] = [
  {
    etichetta: 'Cost and contract',
    voci: [
      {
        id: 'costo',
        q: 'How much does it cost?',
        a: 'The initial analysis is free. For the project you get a fixed price, in writing, before we start: it depends on what there is to do, and we can only tell you after looking at your situation.',
      },
      {
        id: 'fisso',
        q: 'Why a fixed price and not a day rate?',
        a: 'On a day rate, every surprise stretches the project and the invoice. At a fixed price the surprise is on us, and we have the same interest you have in finishing on time.',
      },
      {
        id: 'tempi',
        q: 'How long does it take?',
        a: 'The analysis takes two weeks. A project lasts weeks, not months: the banking case we describe took three. The timeline of your project is written in the contract together with the price.',
      },
      {
        id: 'rimborso',
        q: 'What happens if the result does not arrive?',
        a: 'The agreed result is written in the contract, with a refund clause. If the analysis shows there is not enough to recover, we tell you and stop there.',
      },
      {
        id: 'settanta',
        q: 'Will we save 70% too?',
        a: 'We cannot know before looking. That result comes from a platform that had a lot of margin. The analysis is there to estimate yours, with the assumptions written down.',
      },
      {
        id: 'assumere',
        q: 'Wouldn’t it be better to hire someone?',
        a: 'If you have steady work for a full-time person, yes, and we will say so on the call. We are useful for building in a few weeks a foundation that would take a new hire their first year. Afterwards, that person finds a tidy platform to run.',
      },
    ],
  },
  {
    etichetta: 'The technical work',
    voci: [
      {
        id: 'esistente',
        q: 'We already have infrastructure. Does it have to be redone?',
        a: 'No. We keep what works and replace, one piece at a time, what causes problems, starting from the biggest risks and without stopping releases.',
      },
      {
        id: 'team',
        q: 'Our team does not know Kubernetes. Who will run it afterwards?',
        a: 'Your team. The handover includes training and documentation, and we use standard, widespread components, for which people and answers are easy to find. For the first months you can keep a support subscription.',
      },
      {
        id: 'accessi',
        q: 'What access do you need?',
        a: 'For the analysis, read-only on billing and accounts. For the project, dedicated roles with the minimum permissions needed, audited and revocable at any time. Every change goes through a request in your repositories and stays on record.',
      },
      {
        id: 'cloud',
        q: 'Which clouds do you work on?',
        a: 'AWS, Google Cloud and Azure. We also work on Scaleway, for those who prefer a European provider.',
      },
      {
        id: 'prodotto',
        q: 'Will we have to use a product of yours?',
        a: 'No. We use standard, open source tools, installed in your accounts. There is no license of ours to pay, and no software to uninstall when the project ends.',
      },
    ],
  },
  {
    etichetta: 'The studio',
    voci: [
      {
        id: 'quanti',
        q: 'How many of you are there?',
        a: 'We are a small studio, by choice. A few experienced engineers work on each project, the same ones from start to finish. If a project needs more people, you know before you sign.',
      },
      {
        id: 'nda',
        q: 'Do you sign a confidentiality agreement?',
        a: 'Yes. It is why the banking case we describe does not name the client.',
      },
      {
        id: 'regolato',
        q: 'We work in a regulated sector. Is that a problem?',
        a: 'No, it is a context we know. Minimum-permission access, a record of every change and infrastructure described as code are the same things an audit asks for. We do not issue certifications, but we help you get there with the paperwork in order.',
      },
      {
        id: 'dopo',
        q: 'What happens after the handover?',
        a: 'The platform is yours and your team runs it. If you want, you can start a monthly support subscription, with no minimum term.',
      },
    ],
  },
];

export const gruppiPerLingua = { it, en };
