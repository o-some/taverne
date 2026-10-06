import { readFileSync, statSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const html = readFileSync('index.html', 'utf8');
const script = readFileSync('script.js', 'utf8');
const translationsSource = script.split('const translations = ')[1]?.split('\n\nconst gallery = ')[0];
if (!translationsSource) throw Error('Translations missing');
const translations = runInNewContext(`(${translationsSource.replace(/;\s*$/, '')})`);
const keys = [...html.matchAll(/data-i18n(?:-aria|-alt)?="([^"]+)"/g)].map(match => match[1]);
for (const lang of ['el','en','de']) for (const key of keys) if (!translations[lang][key]) throw Error(`Missing ${lang} translation: ${key}`);
for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) if (!html.includes(`id="${anchor}"`)) throw Error(`Missing anchor: ${anchor}`);
if (!html.includes('Η ΛΙΜΝΗ') || html.includes('noindex')) throw Error('Brand or indexability is incorrect');
if ([...html.matchAll(/data-gallery="(\d+)"/g)].map(match => Number(match[1])).join(',') !== '0,1,2') throw Error('Expected three gallery scenes');
for (const [, image] of html.matchAll(/(?:src|href)="(assets\/limni\/[^\"]+)"/g)) statSync(image);
for (const image of ['hero-pond.webp','hero-pond-960.webp','terrace-no-person.webp','ducks.webp','fountain.webp','keftedakia.webp','keftedakia-800.webp','menu-cover.webp']) if (statSync(`assets/limni/${image}`).size < 20_000) throw Error(`Missing or small image: ${image}`);
const data = JSON.parse(html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)?.[1] || '{}');
if (data.name !== 'Η ΛΙΜΝΗ' || data['@type'] !== 'Restaurant') throw Error('Restaurant structured data missing');
console.log('Η ΛΙΜΝΗ: assets, gallery, structured data and EL/EN/DE content OK');
