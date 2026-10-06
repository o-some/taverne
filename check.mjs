import { readFileSync, statSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const html = readFileSync('index.html', 'utf8');
const script = readFileSync('script.js', 'utf8');
const translationsSource = script.split('const translations = ')[1]?.split('\n\nconst images = ')[0];
const imagesSource = script.split('const images = ')[1]?.split('\n\nconst gallery = ')[0];
if (!translationsSource || !imagesSource) throw Error('Site data is missing');
const translations = runInNewContext(`(${translationsSource.replace(/;\s*$/, '')})`);
const images = runInNewContext(imagesSource.replace(/;\s*$/, ''));
if (images.length !== 24 || new Set(images).size !== 24) throw Error('Expected 24 unique images');
if ([...html.matchAll(/data-story-step="(\d+)"/g)].map(match => Number(match[1])).join(',') !== '0,1,2') throw Error('Expected three place-story chapters');
if ([...html.matchAll(/data-dish="(\d+)"/g)].map(match => Number(match[1])).join(',') !== '0,1,2,3') throw Error('Expected four selectable dishes');
for (const image of images) if (statSync(`assets/images/${image}.jpg`).size < 50_000) throw Error(`Missing or small image: ${image}`);
for (const [, image] of html.matchAll(/src="assets\/images\/([^\"]+)"/g)) statSync(`assets/images/${image}`);
const keys = [...html.matchAll(/data-i18n(?:-aria)?="([^\"]+)"/g)].map(match => match[1]);
for (const lang of ['el', 'en', 'de']) for (const key of keys) if (!translations[lang][key]) throw Error(`Missing ${lang} translation: ${key}`);
console.log('24 images, HTML image paths, and EL/EN/DE content: OK');
