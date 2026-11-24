import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const template = join(here, 'og-template.html');

const varianti = [
  {
    file: 'og.png',
    a: 'Riduciamo la spesa cloud',
    b: 'e sistemiamo l’infrastruttura',
    c: 'su cui gira il tuo software.',
    s: 'Studio di consulenza cloud · mitis.dev',
  },
  {
    file: 'og-en.png',
    a: 'We cut cloud spend',
    b: 'and fix the infrastructure',
    c: 'your software runs on.',
    s: 'Cloud consulting studio · mitis.dev',
  },
];

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.error(
    'playwright non trovato: `npm i -D playwright && npx playwright install chromium`, poi rilancia `node scripts/og.mjs`',
  );
  process.exit(1);
}

const browser = await chromium.launch(
  process.env.OG_CHROMIUM ? { executablePath: process.env.OG_CHROMIUM } : {},
);
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});

for (const v of varianti) {
  const out = join(here, '..', 'public', v.file);
  await page.goto(`file://${template}`);
  await page.evaluate((v) => {
    for (const id of ['a', 'b', 'c', 's']) document.getElementById(id).textContent = v[id];
  }, v);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: out });
  console.log(`scritto ${out}`);
}

await browser.close();
