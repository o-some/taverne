document.documentElement.classList.add('has-js');
const translations = {
  el: {
    skip:'Μετάβαση στο περιεχόμενο',menuLabel:'Άνοιγμα μενού',navExperience:'Η εμπειρία',navFlavours:'Οι γεύσεις',navGallery:'Εικόνες',navVisit:'Ελάτε κοντά μας',heroEyebrow:'ΑΓΙΟΣ ΙΩΑΝΝΗΣ · ΣΕΡΡΕΣ',heroTitle:'Εκεί που η φωτιά συναντά το νερό.',heroSub:'Ελάτε για τη γεύση. Μείνετε για τη στιγμή.',discover:'Ανακαλύψτε',visualNote:'Εικαστικές εικόνες · πραγματικές φωτογραφίες θα προστεθούν',experienceLabel:'Η ΕΜΠΕΙΡΙΑ',introEyebrow:'ΚΑΛΩΣ ΗΡΘΑΤΕ',introTitle:'Μια θέση στο τραπέζι, μια ανάσα δροσιάς.',introBody:'Στον Άγιο Ιωάννη Σερρών, το νερό και τα πλατάνια δίνουν τον ρυθμό. Η φωτιά του ψησίματος φέρνει την παρέα γύρω από το τραπέζι. Εδώ, η απόλαυση δεν βιάζεται.',fireTitle:'Η φωτιά έχει τον δικό της τρόπο.',fireBody:'Σουβλάκια πάνω στα κάρβουνα. Η μυρωδιά που σου ανοίγει την όρεξη πριν καθίσεις.',waterTitle:'Το νερό κρατά τη στιγμή ζωντανή.',waterBody:'Μια βόλτα στις ξύλινες γέφυρες, οι χαμηλοί καταρράκτες και οι πάπιες στο νερό. Σκιά κάτω από τα πλατάνια και χρόνος για κουβέντα.',quote:'Το καλύτερο τραπέζι είναι εκείνο που δεν θέλεις να τελειώσει.',flavoursLabel:'ΟΙ ΓΕΥΣΕΙΣ',flavoursTitle:'Η όρεξη αρχίζει στη φωτιά.',flavoursLead:'Καπνός από τα κάρβουνα, λεμόνι στο τραπέζι, πιάτα για τη μέση. Η ελληνική ταβέρνα όπως πρέπει να τη νιώθεις.',foodOne:'Για την παρέα',foodTwo:'Σουβλάκι & φωτιά',foodThree:'Η στιγμή του ψησίματος',menuNote:'Η πραγματική κάρτα και οι τιμές θα προστεθούν όταν δοθούν από την ταβέρνα.',placeLabel:'Ο ΤΟΠΟΣ',placeTitle:'Λίγο έξω από τις Σέρρες. Ακριβώς εκεί που θέλεις να είσαι.',placeBody:'Ο Άγιος Ιωάννης είναι γνωστός για τα τρεχούμενα νερά, τους μικρούς καταρράκτες και την πράσινη σκιά του. Μια μικρή απόδραση που γίνεται μεγάλη ανάμνηση.',exploreArea:'Δείτε την περιοχή στον χάρτη',galleryLabel:'ΕΙΚΟΝΕΣ',galleryTitle:'Μια γεύση πριν φτάσετε.',galleryLead:'Είκοσι κινηματογραφικές εικόνες για την ατμόσφαιρα, τις γεύσεις και τον τόπο.',galleryDisclosure:'Οι εικόνες είναι δημιουργημένες εικαστικές προσεγγίσεις και δεν απεικονίζουν πιστά τον πραγματικό χώρο ή τα πιάτα.',visitLabel:'Η ΠΡΟΣΚΛΗΣΗ',visitTitle:'Το τραπέζι σάς περιμένει.',visitBody:'Στον Άγιο Ιωάννη Σερρών, ανάμεσα στη φωτιά και το νερό. Ελάτε να μοιραστούμε μια όμορφη στιγμή.',mapButton:'Δείτε την περιοχή',visitNote:'Η ακριβής διεύθυνση, το τηλέφωνο και οι ώρες λειτουργίας θα προστεθούν σύντομα.',backTop:'Πάνω ↑',footerDisclosure:'Προσωρινή παρουσίαση. Εικαστικές εικόνες· πραγματικά στοιχεία και φωτογραφίες θα προστεθούν.',galleryAlt:'Εικαστική εικόνα ελληνικής ταβέρνας',close:'Κλείσιμο εικόνας',previous:'Προηγούμενη εικόνα',next:'Επόμενη εικόνα'
  },
  en: {
    skip:'Skip to content',menuLabel:'Open menu',navExperience:'The experience',navFlavours:'The flavours',navGallery:'Gallery',navVisit:'Visit us',heroEyebrow:'AGIOS IOANNIS · SERRES',heroTitle:'Where fire meets water.',heroSub:'Come for the flavour. Stay for the moment.',discover:'Discover',visualNote:'Concept imagery · real photographs to follow',experienceLabel:'THE EXPERIENCE',introEyebrow:'WELCOME',introTitle:'A place at the table. A breath of fresh air.',introBody:'In Agios Ioannis near Serres, running water and plane trees set the pace. The warmth of the grill brings everyone around the table. Here, good moments take their time.',fireTitle:'The fire has its own way.',fireBody:'Souvlaki over glowing charcoal. The aroma that makes you hungry before you even sit down.',waterTitle:'Water keeps the moment alive.',waterBody:'A walk past the wooden footbridges, ducks on the water and the low cascades. Shade beneath the plane trees and time for conversation.',quote:'The best table is the one you never want to leave.',flavoursLabel:'THE FLAVOURS',flavoursTitle:'Appetite begins at the grill.',flavoursLead:'Charcoal smoke, lemon on the table, plates made for sharing. A Greek taverna as you want to feel it.',foodOne:'Made for sharing',foodTwo:'Souvlaki & fire',foodThree:'The moment at the grill',menuNote:'The real menu and prices will be added when supplied by the taverna.',placeLabel:'THE PLACE',placeTitle:'Just outside Serres. Exactly where you want to be.',placeBody:'Agios Ioannis is known for its running water, small cascades and leafy shade. A short escape that stays with you.',exploreArea:'Explore the area on the map',galleryLabel:'GALLERY',galleryTitle:'A taste before you arrive.',galleryLead:'Twenty cinematic images of atmosphere, food and place.',galleryDisclosure:'These are created concept images and do not faithfully show the actual venue or dishes.',visitLabel:'THE INVITATION',visitTitle:'There is a place for you at the table.',visitBody:'In Agios Ioannis near Serres, between fire and water. Come share a good moment with us.',mapButton:'Explore the area',visitNote:'The exact address, phone number and opening hours will be added soon.',backTop:'Back to top ↑',footerDisclosure:'Preview presentation. Concept imagery; real details and photographs will be added.',galleryAlt:'Concept image of a Greek taverna',close:'Close image',previous:'Previous image',next:'Next image'
  },
  de: {
    skip:'Zum Inhalt springen',menuLabel:'Menü öffnen',navExperience:'Das Erlebnis',navFlavours:'Die Küche',navGallery:'Bilder',navVisit:'Besuch',heroEyebrow:'AGIOS IOANNIS · SERRES',heroTitle:'Wo Feuer auf Wasser trifft.',heroSub:'Komm für den Geschmack. Bleib für den Moment.',discover:'Entdecken',visualNote:'Visualisierungen · echte Fotos folgen',experienceLabel:'DAS ERLEBNIS',introEyebrow:'WILLKOMMEN',introTitle:'Ein Platz am Tisch. Eine Brise Frische.',introBody:'In Agios Ioannis bei Serres geben fließendes Wasser und Platanen den Rhythmus vor. Die Wärme vom Grill bringt alle an einen Tisch. Hier darf ein guter Moment dauern.',fireTitle:'Das Feuer hat seinen eigenen Rhythmus.',fireBody:'Souvlaki über glühender Holzkohle. Ein Duft, der Appetit macht, noch bevor du Platz nimmst.',waterTitle:'Das Wasser hält den Moment lebendig.',waterBody:'Ein Spaziergang über die Holzbrücken, Enten im Wasser und niedrige Wasserstufen. Dazu Schatten unter Platanen und Zeit für ein gutes Gespräch.',quote:'Der schönste Tisch ist der, den man nicht verlassen möchte.',flavoursLabel:'DIE KÜCHE',flavoursTitle:'Appetit beginnt am Grill.',flavoursLead:'Holzkohleduft, Zitrone auf dem Tisch und Teller zum Teilen. Eine griechische Taverne, wie sie sich anfühlen soll.',foodOne:'Für die gemeinsame Zeit',foodTwo:'Souvlaki & Feuer',foodThree:'Der Moment am Grill',menuNote:'Die echte Speisekarte und Preise folgen, sobald sie von der Taverne vorliegen.',placeLabel:'DER ORT',placeTitle:'Ganz nah bei Serres. Genau da, wo du sein möchtest.',placeBody:'Agios Ioannis ist bekannt für fließendes Wasser, kleine Wasserfälle und grüne Schattenplätze. Ein kurzer Ausflug, der lange bleibt.',exploreArea:'Die Gegend auf der Karte ansehen',galleryLabel:'BILDER',galleryTitle:'Ein Vorgeschmack vor dem Besuch.',galleryLead:'Zwanzig filmische Bilder von Atmosphäre, Essen und Ort.',galleryDisclosure:'Diese Bilder wurden als Gestaltungsidee erstellt. Sie zeigen weder den echten Gastraum noch die Gerichte verlässlich.',visitLabel:'DIE EINLADUNG',visitTitle:'Ein Platz am Tisch wartet.',visitBody:'In Agios Ioannis bei Serres, zwischen Feuer und Wasser. Komm vorbei und teile einen schönen Moment mit uns.',mapButton:'Die Gegend ansehen',visitNote:'Die genaue Adresse, Telefonnummer und Öffnungszeiten folgen in Kürze.',backTop:'Nach oben ↑',footerDisclosure:'Vorläufige Präsentation. Visualisierungen; echte Angaben und Fotos werden ergänzt.',galleryAlt:'Visualisierung einer griechischen Taverne',close:'Bild schließen',previous:'Vorheriges Bild',next:'Nächstes Bild'
  }
};

const images = [
  '01-taverna-waterfall','02-souvlaki-grill','03-waterfall','04-table-feast',
  '05-souvlaki-plate','06-chicken-skewers','07-grill-fire','08-taverna-terrace',
  '09-table-gathering','10-water-stone','11-waterfall-wide','12-plane-trees',
  '13-pita-table','14-greek-salad','15-grilled-vegetables','16-lemon-potatoes',
  '17-kitchen-hands','18-dusk-terrace','19-drink-detail','20-last-light'
];

const gallery = document.querySelector('#gallery-rail');
const count = document.querySelector('#gallery-count');
const dialog = document.querySelector('#lightbox');
const dialogImage = document.querySelector('#lightbox-image');
const dialogCaption = document.querySelector('#lightbox-caption');
let language = 'el';
let activeImage = 0;

function imagePath(index) { return `assets/images/${images[index]}.jpg`; }
function imageDescription(index) { return `${translations[language].galleryAlt} ${index + 1}`; }
function setLanguage(next) {
  if (!translations[next]) return;
  language = next;
  document.documentElement.lang = next;
  document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = translations[next][node.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-aria]').forEach(node => { node.setAttribute('aria-label', translations[next][node.dataset.i18nAria]); });
  document.querySelectorAll('[data-lang]').forEach(node => { node.setAttribute('aria-pressed', String(node.dataset.lang === next)); });
  document.querySelectorAll('.gallery-item').forEach((button, index) => { button.setAttribute('aria-label', imageDescription(index)); button.querySelector('img').alt = imageDescription(index); });
  document.querySelector('.lightbox-close').setAttribute('aria-label', translations[next].close);
  document.querySelectorAll('.lightbox-arrow')[0].setAttribute('aria-label', translations[next].previous);
  document.querySelectorAll('.lightbox-arrow')[1].setAttribute('aria-label', translations[next].next);
  if (dialog.open) showImage(activeImage);
  try { localStorage.setItem('taverna-language', next); } catch { /* Storage may be disabled. */ }
}

images.forEach((name, index) => {
  const button = document.createElement('button');
  button.className = 'gallery-item';
  button.type = 'button';
  button.setAttribute('aria-label', `${translations[language].galleryAlt} ${index + 1}`);
  button.innerHTML = `<img src="${imagePath(index)}" alt="" loading="lazy" width="1672" height="941"><span>${String(index + 1).padStart(2, '0')} / 20</span>`;
  button.addEventListener('click', () => { showImage(index); dialog.showModal(); document.body.classList.add('lightbox-open'); });
  gallery.append(button);
});

function showImage(index) {
  activeImage = (index + images.length) % images.length;
  dialogImage.src = imagePath(activeImage);
  dialogImage.alt = imageDescription(activeImage);
  dialogCaption.textContent = `${String(activeImage + 1).padStart(2, '0')} / 20`;
}

function updateGalleryCount() {
  const items = [...gallery.children];
  const mid = gallery.scrollLeft + gallery.clientWidth / 2;
  const closest = items.reduce((best, item, index) => Math.abs(item.offsetLeft + item.clientWidth / 2 - mid) < Math.abs(items[best].offsetLeft + items[best].clientWidth / 2 - mid) ? index : best, 0);
  count.textContent = `${String(closest + 1).padStart(2, '0')} / 20`;
}

document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
document.querySelector('#gallery-prev').addEventListener('click', () => gallery.scrollBy({left: -gallery.clientWidth * .75, behavior:'smooth'}));
document.querySelector('#gallery-next').addEventListener('click', () => gallery.scrollBy({left: gallery.clientWidth * .75, behavior:'smooth'}));
gallery.addEventListener('scroll', updateGalleryCount, {passive:true});
document.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
document.querySelector('.lightbox-arrow.prev').addEventListener('click', () => showImage(activeImage - 1));
document.querySelector('.lightbox-arrow.next').addEventListener('click', () => showImage(activeImage + 1));
dialog.addEventListener('close', () => document.body.classList.remove('lightbox-open'));
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('keydown', event => { if (event.key === 'ArrowLeft') showImage(activeImage - 1); if (event.key === 'ArrowRight') showImage(activeImage + 1); });

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const reveals = document.querySelectorAll('.reveal');
if (reduceMotion.matches || !('IntersectionObserver' in window)) reveals.forEach(item => item.classList.add('is-visible'));
else {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), {threshold:.09, rootMargin:'0px 0px -40px 0px'});
  reveals.forEach(item => observer.observe(item));
}

const sceneObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('scene-visible'); sceneObserver.unobserve(entry.target); } }), {threshold:.12});
if (!reduceMotion.matches) document.querySelectorAll('.duality-panel').forEach(panel => sceneObserver.observe(panel));

const progress = document.querySelector('.scroll-line');
let scheduled = false;
window.addEventListener('scroll', () => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => { const end = document.documentElement.scrollHeight - innerHeight; progress.style.transform = `scaleX(${end > 0 ? scrollY / end : 0})`; if (!reduceMotion.matches && innerWidth > 760) { const hero = document.querySelector('.hero-image'); const visit = document.querySelector('.visit-background img'); hero.style.transform = `translateY(${Math.min(scrollY * .12, 110)}px) scale(1.04)`; const rect = document.querySelector('.visit-section').getBoundingClientRect(); if (rect.top < innerHeight && rect.bottom > 0) visit.style.transform = `translateY(${(rect.top - innerHeight / 2) * -.06}px) scale(1.07)`; } scheduled = false; });
}, {passive:true});
document.querySelector('#year').textContent = new Date().getFullYear();
try { setLanguage(localStorage.getItem('taverna-language') || 'el'); } catch { setLanguage('el'); }
