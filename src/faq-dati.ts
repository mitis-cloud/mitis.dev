const it = [
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
        q: 'Lavorate su cloud europei?',
        a: 'Sì. Oltre ad AWS, GCP e Azure lavoriamo su Scaleway, e i moduli Terraform per la sua parte Kubernetes li manteniamo noi: pubblici, Apache 2.0, sul Terraform Registry. Se tenere i dati in Europa è un tuo vincolo, è una strada che percorriamo con codice nostro invece che con promesse. Il metodo non cambia: cambia il provider Terraform, non il modo di lavorare.',
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

const en = [
  {
    etichetta: 'price and engagement',
    voci: [
      {
        q: 'Why a fixed price and not a day rate?',
        a: 'Because it aligns incentives. On a day rate, every surprise stretches the project and the invoice; at a fixed price, the surprise is our problem. The scope is defined in writing before we start, and if the agreed outcome doesn’t arrive there’s a refund clause.',
      },
      {
        q: 'How much does it cost?',
        a: 'It depends on the scope, and we don’t hide it behind a form: after the free assessment you receive a fixed price, in writing, before we begin. No day rates, no running meters.',
      },
      {
        q: 'How long does it take?',
        a: 'Weeks, not months. We don’t start from zero: the stack is already proven and gets adapted to your context, not reinvented. The exact timeline is fixed together with the scope, after the assessment, and written into the contract along with the price.',
      },
      {
        q: 'Who should be on the first call?',
        a: 'Whoever knows the bill and whoever knows the code: typically the CTO or VP Engineering, plus whoever touches the infrastructure every day. No slides to prepare: the questions you’ve been sitting on for months are enough.',
      },
      {
        q: 'And if we end up not working together, what do we walk away with?',
        a: 'An honest opinion, at minimum: from the first call you leave with a read of your context and the realistic margins. And if you’ve done the assessment, the report with the estimates is yours regardless: you can use it with your own team, or with another vendor.',
      },
      {
        q: 'Does the 70% apply to me too?',
        a: 'We don’t know, and that’s why we don’t promise it. That result came from a multi-tenant platform with years of accumulated layers: more headroom than that is rare. The assessment exists precisely for this: to tell you beforehand how much you can recover, with which interventions and in how much time.',
      },
      {
        q: 'And if the savings don’t materialize?',
        a: 'The assessment produces estimates with explicit assumptions, not brochure numbers. On fixed-scope engagements the outcome is written into the contract, with a refund clause. And if the analysis shows there isn’t enough to recover, we tell you and stop there.',
      },
      {
        q: 'Why not hire a DevOps engineer instead?',
        a: 'If you have steady workload for a full-time person, hire one: we’d tell you the same on the call. The accelerator is for something else: compressing the platform build into weeks, instead of consuming a new hire’s first year. Afterwards, with a tidy platform, that hire also becomes easier to make and to justify.',
      },
    ],
  },
  {
    etichetta: 'platform and technology',
    voci: [
      {
        q: 'Is this yet another platform to adopt?',
        a: 'No: it’s yours. We use standard tools — Terraform, Kubernetes, ArgoCD — in your accounts and your repositories. We install no agents and no dashboards of our own: there’s nothing to adopt, and nothing to uninstall when it ends.',
      },
      {
        q: 'We already have infrastructure running: does everything get thrown away?',
        a: 'No. We start from what’s there: what’s healthy gets integrated, what nobody dares touch anymore gets replaced, one piece at a time and in order of risk, without stopping your releases.',
      },
      {
        q: 'Do you replace our Terraform?',
        a: 'Only where it pays off. Healthy code is kept and integrated; what nobody dares touch anymore is migrated to standard, documented modules, with a written plan and in order of risk. No big bang.',
      },
      {
        q: 'My team has never run Kubernetes: who maintains it afterwards?',
        a: 'Your team, and that’s the point. The platform uses standard, documented components, the handover includes training and runbooks, and for the first months there’s the support subscription. If your team can review a pull request, it can operate the platform.',
      },
      {
        q: 'If the open source is free, what are we paying for?',
        a: 'The architecture that holds the pieces together, its implementation in your accounts, and the guarantee on the outcome. The modules are public and stay public: you pay for the system that comes out of them, not for permission to use them.',
      },
      {
        q: 'Do you work on Azure too?',
        a: 'Yes. AWS and GCP are the clouds where we have the most mileage, but we work on Azure as well: same method, same tools — Terraform, AKS, GitOps with ArgoCD. What never changes is the rule: everything in your accounts and your repositories.',
      },
      {
        q: 'Do you work on European clouds?',
        a: 'Yes. Alongside AWS, GCP and Azure we work on Scaleway, and we maintain the Terraform modules for its Kubernetes side ourselves: public, Apache 2.0, on the Terraform Registry. If keeping data in Europe is a constraint for you, it is a road we walk with our own code rather than with promises. The method does not change: the Terraform provider changes, not how we work.',
      },
      {
        q: 'What access do you need?',
        a: 'For the assessment, read-only on billing and accounts. For the implementation, the minimum necessary: dedicated roles, tracked and revocable, never personal or shared credentials. And every change goes through a pull request in your repositories, so it stays on record.',
      },
    ],
  },
  {
    etichetta: 'us, and afterwards',
    voci: [
      {
        q: 'Are you one person or a team?',
        a: 'A deliberately small, senior structure: the person who signs the quote is the person who writes the Terraform. When a project needs more hands, we say so beforehand — we don’t invoice it afterwards.',
      },
      {
        q: 'Will you sign an NDA?',
        a: 'Yes, no drama. It’s also why the −70% case we cite is anonymized: the numbers are real, the name stays out.',
      },
      {
        q: 'We’re in a regulated sector: GDPR, NIS2, DORA, ACN…',
        a: 'That’s the context where a well-built platform pays off most: least privilege by default, native audit trail, and infrastructure as code is itself the evidence the auditor asks for. We don’t certify you, but you arrive at the audit with your papers in order.',
      },
      {
        q: 'What happens after the handover?',
        a: 'The platform is yours and your team operates it: the engagement ends there, per project. If you want, the support subscription remains — evolutions, on-call, a second pair of eyes — cancellable any time, no penalties.',
      },
    ],
  },
];

export const gruppiPerLingua = { it, en };
export const gruppi = it;
