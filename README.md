# mitis.dev

Sito di mitis — consulenza Cloud & DevOps. Astro 7 + Tailwind 4, output statico,
JS quasi nullo (trigger delle animazioni e reveal, inline).

## Struttura

Home compatta (hero + clienti + problema + tre pilastri + velocità + man mitis + CTA)
e pagine di dettaglio: `/finops`, `/kubernetes`, `/devops`, `/metodo`
(metodo+velocità+deliverable+percorso+per-chi), `/servizi` (servizi+FAQ), più
`/privacy` e `/cookie`. Sitemap generata da `@astrojs/sitemap`.

## Comandi

| comando           | effetto                                      |
| ----------------- | -------------------------------------------- |
| `npm install`     | dipendenze                                   |
| `npm run dev`     | dev server su `localhost:4321`               |
| `npm run build`   | build statica in `dist/`                     |
| `npm run preview` | serve `dist/` in locale                      |
| `npm run og`      | rigenera `public/og.png` (richiede playwright) |

## Segnaposto da riempire

Tutti i valori `{{...}}` visibili in pagina vivono in **`src/dati.ts`**: contatti
(email, calendario) e dati commerciali (prezzi, durate, SLA, P.IVA, URL privacy e
cookie policy, dettagli del caso FinOps). Sostituirli lì e ricompilare.

Nota: la citazione nella sezione FinOps promette l'esito dell'assessment "in due
settimane" — se `{{DURATA_ASSESSMENT}}` diventa un'altra durata, allineare anche
quella frase (`src/components/FinOps.astro`).

## Deploy

Push su `main` → `.github/workflows/deploy.yml` builda e pubblica su GitHub Pages
(`public/CNAME` punta a `mitis.dev`). Da fare una tantum sul repo GitHub:
Settings → Pages → Source: GitHub Actions, più il DNS di `mitis.dev`
(CNAME/ALIAS verso GitHub Pages).

## Design system

Tema scuro. Palette (in `src/styles/global.css`, blocco `@theme`): `sfondo
#0d120f` (pagina), `quadro #141b16` (card), `schermo #090d0b` (terminali),
`carta #f2f1ec` (testo), `felce #166b4a`, `lichene #53c287`, `ruggine #a63b2a`
+ `salmone #d29284` — il rosso è solo semantico (diff `-`, spreco), il verde è
apply/risparmio. La card FinOps è l'unica superficie chiara (un "referto"
stampato, `inchiostro` su `carta`). Font self-hosted in `public/fonts/` (tutti
OFL): Schibsted Grotesk (display), Instrument Sans (testo), JetBrains Mono
(terminale, etichette, dati).

Animazioni: sequenza Understudy nel terminale hero, pipeline CI/CD nella sezione
DevOps (loop mentre è visibile), contatore e barre del −70%, reveal allo scroll.
Tutte con fallback statico per `prefers-reduced-motion` e senza JS esterni.

I numeri in pagina (benchmark di Understudy, caso −70%) sono gli unici claim
quantitativi ammessi e vanno tenuti identici alle fonti: il benchmark viene dal
README di [Understudy](https://github.com/kylan11/understudy) e non va
arrotondato né estrapolato.
