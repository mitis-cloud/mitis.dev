import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const template = join(here, 'og-template.html');
const out = join(here, '..', 'public', 'og.png');

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.error(
    'playwright non trovato: `npm i -D playwright && npx playwright install chromium`, poi rilancia `node scripts/og.mjs`',
  );
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
await page.goto(`file://${template}`);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: out });
await browser.close();
console.log(`scritto ${out}`);
