export const gruppi = [
  {
    etichetta: 'prezzo e ingaggio',
    voci: [
      {
        q: 'Perché prezzo fisso e non a giornata?',
        a: 'Perché allinea gli incentivi. A giornata, ogni imprevisto allunga il progetto e la fattura; a prezzo fisso, l’imprevisto è un problema nostro. L’ambito si definisce per iscritto prima di iniziare, e se l’esito concordato non arriva c’è una clausola di rimborso.',
      },
      {
        q: 'Quanto costa?',
        a: 'Dipende dall’ambito, e non te lo nascondiamo dietro un form: dopo l’assessment gratuito ricevi un prezzo fisso, per iscritto, prima di iniziare. Niente tariffe a giornata, niente contatori che girano.',
      },
      {
        q: 'Quanto tempo ci vuole?',
        a: 'Settimane, non mesi. Non partiamo da zero: lo stack è già collaudato e si adatta al tuo contesto, non si reinventa. I tempi esatti si fissano con l’ambito, dopo l’assessment, e sono scritti nel contratto insieme al prezzo.',
      },
      {
        q: 'Chi deve esserci alla prima chiamata?',
        a: 'Chi conosce la bolletta e chi conosce il codice: tipicamente CTO o VP Engineering, più chi mette le mani sull’infrastruttura ogni giorno. Niente slide da preparare: bastano le domande che ti tieni da mesi.',
      },
      {
        q: 'E se poi non lavoriamo insieme, cosa ci portiamo a casa?',
        a: 'Un parere onesto, come minimo: dalla prima chiamata esci con una lettura del tuo contesto e dei margini realistici. E se hai fatto l’assessment, il report con le stime è tuo comunque: puoi usarlo con il tuo team, o con un altro fornitore.',
      },
      {
        q: 'Il 70% vale anche per me?',
        a: 'Non lo sappiamo, ed è il motivo per cui non lo promettiamo. Quel risultato viene da una piattaforma multi-tenant con anni di stratificazioni: più margine di così è raro. L’assessment serve esattamente a questo: dirti prima quanto puoi recuperare tu, con quali interventi e in quanto tempo.',
      },
      {
        q: 'E se il risparmio non arriva?',
        a: 'L’assessment produce stime con ipotesi esplicite, non numeri da brochure. Sugli ingaggi a scope fisso l’esito è scritto nel contratto, con clausola di rimborso. E se dall’analisi emerge che non c’è abbastanza da recuperare, te lo diciamo e ci fermiamo lì.',
      },
      {
        q: 'Perché non assumere un DevOps engineer, invece?',
        a: 'Se hai carico costante per una persona a tempo pieno, assumila: te lo diremmo anche in chiamata. L’acceleratore serve ad altro: comprimere in settimane la costruzione della piattaforma, invece di occupare il primo anno di un assunto. Dopo, con una piattaforma ordinata, anche quell’assunzione diventa più facile da fare e da giustificare.',
      },
    ],
  },
  {
    etichetta: 'piattaforma e tecnica',
    voci: [
      {
        q: 'È l’ennesima piattaforma da adottare?',
        a: 'No: è la tua. Usiamo strumenti standard — Terraform, Kubernetes, ArgoCD — nei tuoi account e nei tuoi repository. Non installiamo agenti né pannelli nostri: non c’è niente da adottare, e niente da disinstallare quando finisce.',
      },
      {
        q: 'Abbiamo già dell’infrastruttura in piedi: si butta via tutto?',
        a: 'No. Si parte da quello che c’è: quello che è sano si integra, quello che nessuno osa più toccare si sostituisce, un pezzo alla volta e in ordine di rischio, senza fermare le release.',
      },
      {
        q: 'Sostituite il nostro Terraform?',
        a: 'Solo dove conviene. Il codice sano si tiene e si integra; quello che nessuno osa più toccare si migra verso moduli standard e documentati, con un piano scritto e in ordine di rischio. Nessun big bang.',
      },
      {
        q: 'Il mio team non ha mai gestito Kubernetes: poi chi la mantiene?',
        a: 'Il tuo team, ed è il punto. La piattaforma usa componenti standard e documentati, l’handover include formazione e runbook, e per i primi mesi c’è l’abbonamento di supporto. Se il tuo team sa fare review a una pull request, può operare la piattaforma.',
      },
      {
        q: 'Se l’open source è gratis, cosa stiamo pagando?',
        a: 'L’architettura che tiene insieme i pezzi, la sua implementazione nei tuoi account, e la garanzia sull’esito. I moduli sono pubblici e restano pubblici: paghi il sistema che ne esce, non il permesso di usarli.',
      },
      {
        q: 'Lavorate anche su Azure?',
        a: 'Sì. AWS e GCP sono i cloud dove abbiamo più chilometri, ma lavoriamo anche su Azure: stesso metodo, stessi strumenti — Terraform, AKS, GitOps con ArgoCD. Quello che non cambia mai è la regola: tutto nei tuoi account e nei tuoi repository.',
      },
      {
        q: 'Che accessi vi servono?',
        a: 'Per l’assessment, sola lettura su billing e account. Per l’implementazione, il minimo necessario: ruoli dedicati, tracciati e revocabili, mai credenziali personali o condivise. E ogni modifica passa da una pull request nei tuoi repository, quindi resta scritta.',
      },
    ],
  },
  {
    etichetta: 'noi, e dopo',
    voci: [
      {
        q: 'Siete una persona sola o un team?',
        a: 'Una struttura volutamente piccola e senior: chi firma il preventivo è chi scrive il Terraform. Quando un progetto richiede più mani, lo diciamo prima, non lo fatturiamo dopo.',
      },
      {
        q: 'Firmate un NDA?',
        a: 'Sì, senza drammi. È anche il motivo per cui il caso −70% che citiamo è anonimizzato: i numeri sono veri, il nome resta fuori.',
      },
      {
        q: 'Siamo in un settore regolato: GDPR, NIS2, DORA, ACN…',
        a: 'È il contesto in cui una piattaforma fatta bene rende di più: least privilege di default, audit trail nativo, e l’infrastruttura come codice è essa stessa l’evidenza che l’auditor chiede. Non ti certifichiamo noi, ma all’audit arrivi con le carte in ordine.',
      },
      {
        q: 'Cosa succede dopo l’handover?',
        a: 'La piattaforma è tua e la opera il tuo team: l’ingaggio finisce lì, per progetto. Se vuoi, resta l’abbonamento di supporto — evoluzioni, reperibilità, un secondo paio d’occhi — disdicibile quando vuoi, senza penali.',
      },
    ],
  },
];
