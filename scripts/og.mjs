import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const template = join(here, 'og-template.html');

const varianti = [
  { file: 'og.png', h1: 'Infrastruttura cloud noiosa. E che costa la metà.', tag: 'consulenza cloud & devops' },
  { file: 'og-en.png', h1: 'Boring cloud infrastructure. At half the cost.', tag: 'cloud & devops consultancy' },
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
  await page.evaluate(({ h1, tag }) => {
    document.querySelector('h1').textContent = h1;
    document.querySelector('.tag').textContent = tag;
  }, v);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: out });
  console.log(`scritto ${out}`);
}

await browser.close();
