document.documentElement.classList.add('has-js');
const translations = {
  el: {
    skip:'Μετάβαση στο περιεχόμενο',menuLabel:'Άνοιγμα μενού',navExperience:'Ο τόπος',navFlavours:'Γεύσεις',navGallery:'Εικόνες',navVisit:'Ελάτε κοντά μας',
    heroEyebrow:'ΑΓΙΟΣ ΙΩΑΝΝΗΣ · ΣΕΡΡΕΣ',heroLine1:'Η ΦΩΤΙΑ',heroLine2:'ΤΟ ΝΕΡΟ',heroLine3:'ΤΟ ΤΡΑΠΕΖΙ.',heroSub:'Σουβλάκι στη σχάρα. Δροσιά κάτω από τα πλατάνια. Όλα όσα κάνουν μια στιγμή να κρατήσει.',discover:'Ανακαλύψτε τον τόπο',heroPhotoLabel:'ΔΙΠΛΑ ΣΤΟ ΝΕΡΟ',visualNote:'Εικαστικές εικόνες · πραγματικές φωτογραφίες θα προστεθούν',
    experienceLabel:'Ο ΤΟΠΟΣ',introEyebrow:'ΣΤΟΝ ΑΓΙΟ ΙΩΑΝΝΗ',introTitle:'Ένα τραπέζι εκεί όπου κυλά το νερό.',introBody:'Στα νερά του Αγίου Ιωάννη, οι ξύλινες γέφυρες και τα πλατάνια δίνουν τον ρυθμό. Ο ήχος της σχάρας σε καλεί να καθίσεις. Και η παρέα σε κάνει να μείνεις.',
    flavoursLabel:'Η ΦΩΤΙΑ',fireEyebrow:'ΑΠΟ ΤΗ ΣΧΑΡΑ',fireTitle:'Η μυρωδιά σε βρίσκει πριν βρεις το τραπέζι.',fireBody:'Σουβλάκια πάνω στα κάρβουνα, λεμόνι και ζεστό ψωμί στη μέση. Η πιο ωραία αρχή είναι αυτή που μοιράζεται.',fireCaption:'Η στιγμή πάνω στη σχάρα',flavoursTitle:'Φτιαγμένο για την παρέα.',
    waterLabel:'ΤΟ ΝΕΡΟ',waterTitle:'Λίγα βήματα από το τραπέζι, ένας άλλος ρυθμός.',waterBody:'Μικροί καταρράκτες, ξύλινες γέφυρες, πάπιες στο νερό. Κάτω από τα πλατάνια, ο χρόνος κυλά λίγο πιο αργά.',exploreArea:'Η περιοχή στον χάρτη',
    tableLabel:'ΣΤΟ ΤΡΑΠΕΖΙ',tableTitle:'Καθίστε. Τα υπόλοιπα ας περιμένουν.',tableLead:'Μια ελληνική ταβέρνα είναι τα πιάτα στη μέση, οι φωνές γύρω από το τραπέζι και η τελευταία μπουκιά που κανείς δεν θέλει να πάρει.',foodOne:'Για την παρέα',foodTwo:'Σουτζουκάκια',foodThree:'Ντοματοσαλάτα',menuNote:'Η πραγματική κάρτα και οι τιμές θα προστεθούν όταν δοθούν από την ταβέρνα.',
    dishLabel:'ΓΕΥΣΕΙΣ ΓΙΑ ΜΟΙΡΑΣΜΑ',dishTitle:'Κάθε πιάτο, μια άλλη ιστορία.',dishLead:'Δροσερό, ζεστό, αλμυρό, γλυκό. Πατήστε ένα πιάτο και αφήστε την εικόνα να μιλήσει.',dishGroup:'Επιλογή πιάτου',dishImageAlt:'Εικαστική εικόνα:',dishFeta:'Σαλάτα με φέτα',dishFetaNote:'Φέτα, ντομάτα, ελαιόλαδο',dishTomato:'Ντοματοσαλάτα',dishTomatoNote:'Ώριμες ντομάτες, ρίγανη',dishSoutzoukakia:'Σουτζουκάκια',dishSoutzoukakiaNote:'Με σάλτσα ντομάτας',dishBougatsa:'Μπουγάτσα',dishBougatsaNote:'Τραγανό φύλλο, γλυκιά κρέμα',dishDisclosure:'Οι εικόνες είναι εικαστικές προτάσεις. Τα πραγματικά πιάτα και η κάρτα θα επιβεβαιωθούν από την ταβέρνα.',
    placeLabel:'Ο ΤΟΠΟΣ',placeTitle:'Σκιά από πλατάνια. Το νερό δίπλα σου. Η παρέα απέναντι.',placeBody:'Αυτό είναι το σκηνικό του Αγίου Ιωάννη Σερρών: μικρές γέφυρες, τρεχούμενο νερό και μια ανάσα πράσινο γύρω από το τραπέζι.',
    galleryLabel:'ΕΙΚΟΝΕΣ',galleryTitle:'Μια γεύση πριν φτάσετε.',galleryLead:'Είκοσι τέσσερις κινηματογραφικές στιγμές από τον τόπο, την κουζίνα και το τραπέζι.',galleryDisclosure:'Οι εικόνες είναι δημιουργημένες εικαστικές προσεγγίσεις και δεν απεικονίζουν πιστά τον πραγματικό χώρο ή τα πιάτα.',
    visitLabel:'Η ΠΡΟΣΚΛΗΣΗ',visitTitle:'Έχουμε κρατήσει μια θέση για εσάς.',visitBody:'Στον Άγιο Ιωάννη Σερρών, ανάμεσα στη φωτιά και το νερό. Ελάτε να μοιραστούμε μια όμορφη στιγμή.',mapButton:'Δείτε την περιοχή',visitNote:'Η ακριβής διεύθυνση, το τηλέφωνο και οι ώρες λειτουργίας θα προστεθούν σύντομα.',backTop:'Πάνω ↑',footerDisclosure:'Προσωρινή παρουσίαση. Εικαστικές εικόνες· πραγματικά στοιχεία και φωτογραφίες θα προστεθούν.',galleryAlt:'Εικαστική εικόνα ελληνικής ταβέρνας',close:'Κλείσιμο εικόνας',previous:'Προηγούμενη εικόνα',next:'Επόμενη εικόνα'
  },
  en: {
    skip:'Skip to content',menuLabel:'Open menu',navExperience:'The place',navFlavours:'The food',navGallery:'Gallery',navVisit:'Visit us',
    heroEyebrow:'AGIOS IOANNIS · SERRES',heroLine1:'THE FIRE',heroLine2:'THE WATER',heroLine3:'THE TABLE.',heroSub:'Souvlaki on the grill. Cool shade beneath the plane trees. The kind of moment you wish would last.',discover:'Discover the place',heroPhotoLabel:'BESIDE THE WATER',visualNote:'Concept imagery · real photographs to follow',
    experienceLabel:'THE PLACE',introEyebrow:'IN AGIOS IOANNIS',introTitle:'A table where the water flows.',introBody:'In Agios Ioannis, timber footbridges and plane trees set the pace. The sound of the grill invites you to sit. Good company makes you stay.',
    flavoursLabel:'THE FIRE',fireEyebrow:'FROM THE GRILL',fireTitle:'The aroma finds you before you find your table.',fireBody:'Souvlaki over charcoal, lemon and warm bread in the middle. The best beginning is one you share.',fireCaption:'The moment at the grill',flavoursTitle:'Made for sharing.',
    waterLabel:'THE WATER',waterTitle:'A few steps from the table, a different rhythm.',waterBody:'Small cascades, wooden bridges, ducks on the water. Beneath the plane trees, time moves a little more slowly.',exploreArea:'Explore the area',
    tableLabel:'AT THE TABLE',tableTitle:'Take a seat. Everything else can wait.',tableLead:'A Greek taverna is plates in the middle, voices around the table and the last bite nobody wants to take.',foodOne:'For the company',foodTwo:'Soutzoukakia',foodThree:'Tomato salad',menuNote:'The actual menu and prices will be added when supplied by the taverna.',
    dishLabel:'MADE TO SHARE',dishTitle:'Every dish has its own moment.',dishLead:'Cool, warm, savoury, sweet. Choose a dish and let the image tell its story.',dishGroup:'Choose a dish',dishImageAlt:'Concept image:',dishFeta:'Feta salad',dishFetaNote:'Feta, tomato, olive oil',dishTomato:'Tomato salad',dishTomatoNote:'Ripe tomatoes, oregano',dishSoutzoukakia:'Soutzoukakia',dishSoutzoukakiaNote:'In tomato sauce',dishBougatsa:'Bougatsa',dishBougatsaNote:'Crisp filo, sweet custard',dishDisclosure:'These images are visual concepts. The actual dishes and menu will be confirmed by the taverna.',
    placeLabel:'THE PLACE',placeTitle:'Shade from plane trees. Water beside you. Friends across the table.',placeBody:'This is the setting in Agios Ioannis near Serres: little bridges, running water and a breath of green around the table.',
    galleryLabel:'GALLERY',galleryTitle:'A taste before you arrive.',galleryLead:'Twenty-four cinematic glimpses of the place, the cooking and the table.',galleryDisclosure:'These are created concept images and do not faithfully show the actual venue or dishes.',
    visitLabel:'THE INVITATION',visitTitle:'There is a place for you here.',visitBody:'In Agios Ioannis near Serres, between fire and water. Come share a good moment with us.',mapButton:'Explore the area',visitNote:'The exact address, phone number and opening hours will be added soon.',backTop:'Back to top ↑',footerDisclosure:'Preview presentation. Concept imagery; real details and photographs will be added.',galleryAlt:'Concept image of a Greek taverna',close:'Close image',previous:'Previous image',next:'Next image'
  },
  de: {
    skip:'Zum Inhalt springen',menuLabel:'Menü öffnen',navExperience:'Der Ort',navFlavours:'Die Küche',navGallery:'Bilder',navVisit:'Besuch',
    heroEyebrow:'AGIOS IOANNIS · SERRES',heroLine1:'DAS FEUER',heroLine2:'DAS WASSER',heroLine3:'DER TISCH.',heroSub:'Souvlaki vom Grill. Kühle unter den Platanen. Ein Moment, der gerne länger dauern darf.',discover:'Den Ort entdecken',heroPhotoLabel:'DIREKT AM WASSER',visualNote:'Visualisierungen · echte Fotos folgen',
    experienceLabel:'DER ORT',introEyebrow:'IN AGIOS IOANNIS',introTitle:'Ein Tisch dort, wo das Wasser fließt.',introBody:'In Agios Ioannis geben Holzbrücken und Platanen den Rhythmus vor. Der Klang vom Grill lädt zum Hinsetzen ein. Die Gesellschaft lässt dich bleiben.',
    flavoursLabel:'DAS FEUER',fireEyebrow:'VOM GRILL',fireTitle:'Der Duft findet dich, bevor du deinen Tisch findest.',fireBody:'Souvlaki über Holzkohle, Zitrone und warmes Brot in der Mitte. Der schönste Anfang ist einer zum Teilen.',fireCaption:'Der Moment am Grill',flavoursTitle:'Für gemeinsame Stunden.',
    waterLabel:'DAS WASSER',waterTitle:'Ein paar Schritte vom Tisch entfernt beginnt ein anderer Rhythmus.',waterBody:'Kleine Wasserstufen, Holzbrücken und Enten im Bach. Unter den Platanen vergeht die Zeit ein wenig langsamer.',exploreArea:'Die Gegend auf der Karte',
    tableLabel:'AM TISCH',tableTitle:'Setz dich. Alles andere kann warten.',tableLead:'Eine griechische Taverne ist: Teller in der Mitte, Stimmen rund um den Tisch und der letzte Bissen, den keiner nehmen will.',foodOne:'Für die Runde',foodTwo:'Soutzoukakia',foodThree:'Tomatensalat',menuNote:'Die echte Speisekarte und Preise folgen, sobald sie von der Taverne vorliegen.',
    dishLabel:'ZUM TEILEN',dishTitle:'Jedes Gericht hat seinen Moment.',dishLead:'Frisch, warm, herzhaft, süß. Wähle ein Gericht und lass das Bild erzählen.',dishGroup:'Gericht auswählen',dishImageAlt:'Visualisierung:',dishFeta:'Schafskäsesalat',dishFetaNote:'Feta, Tomate, Olivenöl',dishTomato:'Tomatensalat',dishTomatoNote:'Reife Tomaten, Oregano',dishSoutzoukakia:'Soutzoukakia',dishSoutzoukakiaNote:'In Tomatensauce',dishBougatsa:'Bougatsa',dishBougatsaNote:'Knuspriger Filoteig, Creme',dishDisclosure:'Diese Bilder sind Visualisierungen. Die tatsächlichen Gerichte und die Speisekarte werden von der Taverne bestätigt.',
    placeLabel:'DER ORT',placeTitle:'Schatten von Platanen. Wasser neben dir. Freunde gegenüber.',placeBody:'Das ist die Kulisse von Agios Ioannis bei Serres: kleine Brücken, fließendes Wasser und viel Grün rund um den Tisch.',
    galleryLabel:'BILDER',galleryTitle:'Ein Vorgeschmack vor dem Besuch.',galleryLead:'Vierundzwanzig filmische Eindrücke von Ort, Küche und Tisch.',galleryDisclosure:'Diese Bilder sind gestaltete Visualisierungen. Sie zeigen den tatsächlichen Ort und die Gerichte nicht verlässlich.',
    visitLabel:'DIE EINLADUNG',visitTitle:'Ein Platz am Tisch wartet auf dich.',visitBody:'In Agios Ioannis bei Serres, zwischen Feuer und Wasser. Komm vorbei und teile einen schönen Moment mit uns.',mapButton:'Die Gegend ansehen',visitNote:'Die genaue Adresse, Telefonnummer und Öffnungszeiten folgen in Kürze.',backTop:'Nach oben ↑',footerDisclosure:'Vorläufige Präsentation. Visualisierungen; echte Angaben und Fotos werden ergänzt.',galleryAlt:'Visualisierung einer griechischen Taverne',close:'Bild schließen',previous:'Vorheriges Bild',next:'Nächstes Bild'
  }
};

const images = [
  '01-taverna-waterfall','02-souvlaki-grill','03-waterfall','04-table-feast',
  '05-souvlaki-plate','06-chicken-skewers','07-grill-fire','08-taverna-terrace',
  '09-table-gathering','10-water-stone','11-waterfall-wide','12-plane-trees',
  '13-pita-table','14-greek-salad','15-grilled-vegetables','16-lemon-potatoes',
  '17-kitchen-hands','18-dusk-terrace','19-drink-detail','20-last-light',
  '21-feta-salad','22-tomato-salad','23-soutzoukakia','24-bougatsa'
];

const gallery = document.querySelector('#gallery-rail');
const count = document.querySelector('#gallery-count');
const dialog = document.querySelector('#lightbox');
const dialogImage = document.querySelector('#lightbox-image');
const dialogCaption = document.querySelector('#lightbox-caption');
let language = 'el';
let activeImage = 0;
let activeDish = 0;
let dishRequest = 0;
const dishKeys = ['dishFeta','dishTomato','dishSoutzoukakia','dishBougatsa'];
const dishImage = document.querySelector('#dish-image');
const dishCaption = document.querySelector('#dish-caption');
const dishCounter = document.querySelector('#dish-counter');
const imagePath = index => `assets/images/${images[index]}.jpg`;
const imageDescription = index => index >= 20 ? `${translations[language].dishImageAlt} ${translations[language][dishKeys[index - 20]]}` : `${translations[language].galleryAlt} ${index + 1}`;

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
  dishCaption.textContent = translations[next][dishKeys[activeDish]];
  dishImage.alt = `${translations[next].dishImageAlt} ${dishCaption.textContent}`;
  if (dialog.open) showImage(activeImage);
  try { localStorage.setItem('taverna-language', next); } catch {}
}

images.forEach((name, index) => {
  const button = document.createElement('button');
  button.className = 'gallery-item';
  button.type = 'button';
  button.setAttribute('aria-label', imageDescription(index));
  const img = document.createElement('img');
  img.src = imagePath(index);
  img.alt = imageDescription(index);
  img.loading = 'lazy';
  img.width = 1672;
  img.height = 941;
  const label = document.createElement('span');
  label.textContent = `${String(index + 1).padStart(2, '0')} / ${images.length}`;
  button.append(img, label);
  button.addEventListener('click', () => { showImage(index); dialog.showModal(); document.body.classList.add('lightbox-open'); });
  gallery.append(button);
});

async function selectDish(index) {
  const request = ++dishRequest;
  if (index === activeDish || index < 0 || index >= dishKeys.length) return;
  const preview = new Image();
  preview.src = imagePath(20 + index);
  try { await preview.decode(); } catch { return; }
  if (request !== dishRequest) return;
  activeDish = index;
  dishImage.src = preview.src;
  dishCaption.textContent = translations[language][dishKeys[index]];
  dishImage.alt = `${translations[language].dishImageAlt} ${dishCaption.textContent}`;
  dishCounter.textContent = `${String(index + 1).padStart(2, '0')} / 04`;
  document.querySelectorAll('.dish-choice').forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  dishImage.getAnimations().forEach(animation => animation.cancel());
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) dishImage.animate([{opacity:.3,transform:'scale(1.06)'},{opacity:1,transform:'scale(1)'}],{duration:520,easing:'cubic-bezier(.2,.8,.2,1)'});
}
document.querySelectorAll('.dish-choice').forEach(button => button.addEventListener('click', () => selectDish(Number(button.dataset.dish))));

function showImage(index) {
  activeImage = (index + images.length) % images.length;
  dialogImage.src = imagePath(activeImage);
  dialogImage.alt = imageDescription(activeImage);
  dialogCaption.textContent = `${String(activeImage + 1).padStart(2, '0')} / ${images.length}`;
}
function updateGalleryCount() {
  const items = [...gallery.children];
  const middle = gallery.scrollLeft + gallery.clientWidth / 2;
  const nearest = items.reduce((best, item, index) => Math.abs(item.offsetLeft + item.clientWidth / 2 - middle) < Math.abs(items[best].offsetLeft + items[best].clientWidth / 2 - middle) ? index : best, 0);
  count.textContent = `${String(nearest + 1).padStart(2, '0')} / ${images.length}`;
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
document.querySelector('#gallery-prev').addEventListener('click', () => gallery.scrollBy({left: -gallery.clientWidth * .8, behavior:'smooth'}));
document.querySelector('#gallery-next').addEventListener('click', () => gallery.scrollBy({left: gallery.clientWidth * .8, behavior:'smooth'}));
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
const reveals = document.querySelectorAll('.reveal,.reveal-image');
if (reduceMotion.matches || !('IntersectionObserver' in window)) reveals.forEach(item => item.classList.add('is-visible'));
else {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), {threshold:.06,rootMargin:'0px 0px -30px 0px'});
  reveals.forEach(item => observer.observe(item));
}
const progress = document.querySelector('.scroll-line');
let scheduled = false;
window.addEventListener('scroll', () => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    const end = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${end > 0 ? scrollY / end : 0})`;
    scheduled = false;
  });
}, {passive:true});
document.querySelector('#year').textContent = new Date().getFullYear();
try { setLanguage(localStorage.getItem('taverna-language') || 'el'); } catch { setLanguage('el'); }
