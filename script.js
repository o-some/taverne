document.documentElement.classList.add('has-js');

const translations = {
  el: {
    pageTitle:'Η ΛΙΜΝΗ · Ταβέρνα στον Άι Γιάννη Σερρών',pageDescription:'Η ΛΙΜΝΗ — ταβέρνα δίπλα στο νερό στον Άι Γιάννη Σερρών. Ένας τόπος για φαγητό, σκιά και λίγη περισσότερη ώρα μαζί.',
    skip:'Μετάβαση στο περιεχόμενο',brandLabel:'Η ΛΙΜΝΗ — αρχή',brandSub:'ΤΑΒΕΡΝΑ · ΣΕΡΡΕΣ',navLabel:'Κύρια πλοήγηση',navPlace:'Ο ΤΟΠΟΣ',navTaverna:'Η ΤΑΒΕΡΝΑ',navFood:'Η ΓΕΥΣΗ',navJournal:'ΣΤΙΓΜΕΣ',navVisit:'ΕΠΙΣΚΕΨΗ',languageLabel:'Γλώσσα',menuLabel:'Άνοιγμα μενού',
    heroPlace:'ΑΪ ΓΙΑΝΝΗΣ / ΣΕΡΡΕΣ / ΕΛΛΑΔΑ',heroPretitle:'ΜΙΑ ΤΑΒΕΡΝΑ, ΕΝΑΣ ΤΟΠΟΣ.',heroSubtitle:'Δίπλα στο νερό, κάτω από τα δέντρα. Έλα όπως είσαι. Μείνε όσο θέλεις.',discoverLabel:'Ανακαλύψτε τον τόπο',heroImageNote:'Εικόνα βασισμένη σε φωτογραφίες της ταβέρνας',scrollCue:'ΚΥΛΗΣΕ ΓΙΑ ΝΑ ΑΝΑΚΑΛΥΨΕΙΣ',
    chapterPlace:'Ο ΤΟΠΟΣ',prologueEyebrow:'ΣΤΟΝ ΑΪ ΓΙΑΝΝΗ ΣΕΡΡΩΝ',prologueTitle:'Ένας τόπος που αρχίζει από το νερό.',prologueBody:'Λίγα λεπτά από τις Σέρρες, η ταβέρνα Η Λίμνη κοιτάζει το ήσυχο νερό. Ξύλινα κάγκελα, πάπιες και σκιά από τα δέντρα γίνονται μέρος του τραπεζιού.',prologueAside:'Εδώ δεν χρειάζεται βιασύνη. Μόνο μια καλή θέση δίπλα στο νερό.',
    waterAlt:'Ρηχό ρέμα με δύο μικρά σκαλοπάτια νερού και ξύλινη γέφυρα στον Άι Γιάννη Σερρών',waterTitle:'Η φύση κάθεται μαζί μας.',waterBody:'Ο Άι Γιάννης έχει και μια άλλη όψη του νερού: το ρέμα, τις χαμηλές πτώσεις και την ξύλινη γέφυρα κάτω από τα δέντρα.',waterFact:'Ο Άι Γιάννης βρίσκεται περίπου δύο χιλιόμετρα από την πόλη των Σερρών. Τα πλατάνια και τα τρεχούμενα νερά της περιοχής σχηματίζουν μικρούς καταρράκτες.',sourceLink:'ΠΗΓΗ: ΔΗΜΟΣ ΣΕΡΡΩΝ ↗',
    chapterTaverna:'Η ΤΑΒΕΡΝΑ',tavernaEyebrow:'Ο ΧΑΡΑΚΤΗΡΑΣ ΤΟΥ ΤΟΠΟΥ',tavernaTitle:'Ξύλο. Σκιά. Ένα τραπέζι.',tavernaBody:'Η ταβέρνα έχει τον δικό της τρόπο να σε καλωσορίζει: απλά τραπέζια, το παλιό ξύλινο κάγκελο και το νερό ακριβώς δίπλα.',terraceAlt:'Η παραλίμνια βεράντα της ταβέρνας με ξύλινο κάγκελο και πάπιες',terraceCaption:'Η βεράντα δίπλα στο νερό',ducksAlt:'Πάπιες στο ρηχό νερό μπροστά από την ταβέρνα',tavernaNote:'Δεν είναι σκηνικό. Είναι οι μικρές λεπτομέρειες που θυμάσαι όταν φύγεις.',interludeLabel:'Η λίμνη',interludeText:'ΤΟ ΝΕΡΟ · Η ΣΚΙΑ · Η ΠΑΡΕΑ',
    chapterFood:'Η ΓΕΥΣΗ',foodEyebrow:'ΑΠΟ ΤΗΝ ΚΟΥΖΙΝΑ ΤΗΣ ΛΙΜΝΗΣ',foodTitle:'Απλό φαγητό. Καλή παρέα.',foodBody:'Δύο πιάτα από την ίδια την ταβέρνα: κεφτεδάκια της σχάρας με κρεμμύδι, ντομάτα, λεμόνι, σαλάτα και πατάτες. Η φωτογραφία κρατά τον αληθινό χαρακτήρα της κουζίνας.',dishName:'ΚΕΦΤΕΔΑΚΙΑ',dishCaption:'Από φωτογραφία της ταβέρνας',foodAlt:'Δύο πιάτα με κεφτεδάκια της ταβέρνας, κρεμμύδι, ντομάτα, λεμόνι, σαλάτα και πατάτες',menuThread:'Ασπρόμαυρα δέντρα στο εξώφυλλο της κάρτας. Ένας απλός τρόπος να πεις τι είναι η ταβέρνα Η Λίμνη: φαγητό μέσα στη φύση.',menuAlt:'Το εξώφυλλο της ασπρόμαυρης κάρτας Η ΛΙΜΝΗ με δέντρα',menuCaption:'Το εξώφυλλο της κάρτας',
    chapterJournal:'ΣΤΙΓΜΕΣ',journalTitle:'Μικρές εικόνες από έναν αληθινό τόπο.',journalBody:'Λίμνη, πάπιες, νερό, βεράντα. Οι λεπτομέρειες που κάνουν αυτόν τον τόπο ξεχωριστό.',fountainAlt:'Μικρό συντριβάνι και πάπιες στη λίμνη',acrossAlt:'Η ταβέρνα και δύο πάπιες ιδωμένες από την απέναντι όχθη',bankAlt:'Θέα από το ξύλινο κιγκλίδωμα προς την απέναντι πλευρά της λίμνης',journalOne:'ΤΟ ΝΕΡΟ',journalTwo:'Η ΟΧΘΗ',journalThree:'Η ΘΕΑ ΑΠΟ ΤΟ ΤΡΑΠΕΖΙ',
    visitEyebrow:'05 / ΕΛΑ ΝΑ ΜΑΣ ΒΡΕΙΣ',visitTitle:'Το τραπέζι είναι δίπλα στο νερό.',visitBody:'Η Λίμνη βρίσκεται στον Άι Γιάννη Σερρών. Έλα για το φαγητό, κάθισε για τη θέα και άφησε τη μέρα να πάει λίγο πιο αργά.',mapLink:'ΔΕΙΤΕ ΤΗΝ ΠΕΡΙΟΧΗ ΣΤΟΝ ΧΑΡΤΗ',backTop:'ΠΙΣΩ ΣΤΗΝ ΑΡΧΗ ↑',imageDisclosure:'Εικόνες βασισμένες σε φωτογραφίες του πελάτη· ορισμένα τμήματα έχουν ψηφιακά ανασυντεθεί.',areaSource:'ΠΛΗΡΟΦΟΡΙΕΣ ΓΙΑ ΤΟΝ ΤΟΠΟ ↗',lightboxLabel:'Προβολή εικόνας',close:'Κλείσιμο εικόνας',previous:'Προηγούμενη εικόνα',next:'Επόμενη εικόνα'
  },
  en: {
    pageTitle:'Η ΛΙΜΝΗ · Taverna by the water in Serres',pageDescription:'Η ΛΙΜΝΗ is a Greek taverna beside the water in Ai Giannis, Serres. A place for food, shade and time together.',
    skip:'Skip to content',brandLabel:'Η ΛΙΜΝΗ — home',brandSub:'TAVERNA · SERRES',navLabel:'Main navigation',navPlace:'THE PLACE',navTaverna:'THE TAVERNA',navFood:'THE FOOD',navJournal:'MOMENTS',navVisit:'VISIT',languageLabel:'Language',menuLabel:'Open menu',
    heroPlace:'AI GIANNIS / SERRES / GREECE',heroPretitle:'A TAVERNA. A PLACE.',heroSubtitle:'Beside the water, beneath the trees. Come as you are. Stay as long as you like.',discoverLabel:'Discover the place',heroImageNote:'Image based on photographs of the taverna',scrollCue:'SCROLL TO EXPLORE',
    chapterPlace:'THE PLACE',prologueEyebrow:'IN AI GIANNIS, SERRES',prologueTitle:'A place that begins with water.',prologueBody:'Minutes from Serres, Η ΛΙΜΝΗ looks out over still water. Timber rails, ducks and shade from the trees become part of the table.',prologueAside:'There is no need to hurry here. Just find a good seat beside the water.',
    waterAlt:'Shallow stream with two low cascades and a timber footbridge in Ai Giannis, Serres',waterTitle:'Nature joins the table.',waterBody:'Ai Giannis has another side to its water: the stream, low cascades and a timber bridge beneath the trees.',waterFact:'Ai Giannis is about two kilometres from the city of Serres. Plane trees and running water in the area form small waterfalls.',sourceLink:'SOURCE: MUNICIPALITY OF SERRES ↗',
    chapterTaverna:'THE TAVERNA',tavernaEyebrow:'THE CHARACTER OF THE PLACE',tavernaTitle:'Timber. Shade. A table.',tavernaBody:'The taverna has its own way of welcoming you: simple tables, weathered timber rails and the water right beside them.',terraceAlt:'The waterside taverna terrace with timber rails and ducks',terraceCaption:'The terrace beside the water',ducksAlt:'Ducks in shallow water beside the taverna',tavernaNote:'It is the small details you remember after you leave.',interludeLabel:'The lake',interludeText:'WATER · SHADE · COMPANY',
    chapterFood:'THE FOOD',foodEyebrow:'FROM THE KITCHEN AT Η ΛΙΜΝΗ',foodTitle:'Simple food. Good company.',foodBody:'Two plates from the taverna itself: grilled keftedakia with onion, tomato, lemon, salad and fries. The photograph keeps the honest character of this kitchen.',dishName:'KEFTEDAKIA',dishCaption:'From a photograph of the taverna',foodAlt:'Two plates of the taverna’s keftedakia with onion, tomato, lemon, salad and fries',menuThread:'Black-and-white trees on the menu cover. A simple way to describe Η ΛΙΜΝΗ: food among nature.',menuAlt:'The real black-and-white Η ΛΙΜΝΗ menu cover with trees',menuCaption:'The menu cover',
    chapterJournal:'MOMENTS',journalTitle:'Small scenes from a real place.',journalBody:'Water, ducks, trees, terrace. Details that give this place its character.',fountainAlt:'Small fountain and ducks in the pond',acrossAlt:'The taverna and two ducks seen from across the pond',bankAlt:'View from the timber rail toward the opposite bank',journalOne:'THE WATER',journalTwo:'THE SHORE',journalThree:'THE VIEW FROM THE TABLE',
    visitEyebrow:'05 / COME FIND US',visitTitle:'Your table is beside the water.',visitBody:'Η ΛΙΜΝΗ is in Ai Giannis, Serres. Come for the food, take a seat for the view and let the day move a little more slowly.',mapLink:'EXPLORE THE AREA ON MAPS',backTop:'BACK TO TOP ↑',imageDisclosure:'Images are based on customer photographs; some areas have been digitally reconstructed.',areaSource:'ABOUT THE AREA ↗',lightboxLabel:'Image viewer',close:'Close image',previous:'Previous image',next:'Next image'
  },
  de: {
    pageTitle:'Η ΛΙΜΝΗ · Taverne am Wasser bei Serres',pageDescription:'Η ΛΙΜΝΗ ist eine griechische Taverne direkt am Wasser in Ai Giannis bei Serres. Ein Ort für Essen, Schatten und gemeinsame Zeit.',
    skip:'Zum Inhalt springen',brandLabel:'Η ΛΙΜΝΗ — Startseite',brandSub:'TAVERNE · SERRES',navLabel:'Hauptnavigation',navPlace:'DER ORT',navTaverna:'DIE TAVERNE',navFood:'DAS ESSEN',navJournal:'MOMENTE',navVisit:'BESUCH',languageLabel:'Sprache',menuLabel:'Menü öffnen',
    heroPlace:'AI GIANNIS / SERRES / GRIECHENLAND',heroPretitle:'EINE TAVERNE. EIN ORT.',heroSubtitle:'Direkt am Wasser, unter den Bäumen. Komm, wie du bist. Bleib, so lange du magst.',discoverLabel:'Den Ort entdecken',heroImageNote:'Bild auf Grundlage von Fotos der Taverne',scrollCue:'WEITER SCROLLEN',
    chapterPlace:'DER ORT',prologueEyebrow:'IN AI GIANNIS BEI SERRES',prologueTitle:'Ein Ort, der mit dem Wasser beginnt.',prologueBody:'Wenige Minuten von Serres entfernt blickt Η ΛΙΜΝΗ auf das ruhige Wasser. Holzgeländer, Enten und der Schatten der Bäume gehören hier zum Tisch dazu.',prologueAside:'Hier muss niemand eilen. Such dir einfach einen guten Platz direkt am Wasser.',
    waterAlt:'Flacher Bach mit zwei kleinen Stufen und Holzbrücke in Ai Giannis bei Serres',waterTitle:'Die Natur sitzt mit am Tisch.',waterBody:'Ai Giannis zeigt noch eine andere Seite des Wassers: den Bach, die niedrigen Kaskaden und eine Holzbrücke unter den Bäumen.',waterFact:'Ai Giannis liegt etwa zwei Kilometer von der Stadt Serres entfernt. Platanen und fließendes Wasser bilden in der Gegend kleine Wasserfälle.',sourceLink:'QUELLE: STADT SERRES ↗',
    chapterTaverna:'DIE TAVERNE',tavernaEyebrow:'DER CHARAKTER DES ORTES',tavernaTitle:'Holz. Schatten. Ein Tisch.',tavernaBody:'Die Taverne begrüßt dich auf ihre Weise: mit einfachen Tischen, dem alten Holzgeländer und dem Wasser gleich daneben.',terraceAlt:'Die Terrasse der Taverne am Wasser mit Holzgeländer und Enten',terraceCaption:'Die Terrasse direkt am Wasser',ducksAlt:'Enten im flachen Wasser vor der Taverne',tavernaNote:'Es sind die kleinen Details, an die du dich später erinnerst.',interludeLabel:'Der See',interludeText:'WASSER · SCHATTEN · GESELLSCHAFT',
    chapterFood:'DAS ESSEN',foodEyebrow:'AUS DER KÜCHE VON Η ΛΙΜΝΗ',foodTitle:'Einfaches Essen. Gute Gesellschaft.',foodBody:'Zwei Teller aus der Taverne: gegrillte Keftedakia mit Zwiebeln, Tomate, Zitrone, Salat und Pommes. Das Bild bewahrt den ehrlichen Charakter dieser Küche.',dishName:'KEFTEDAKIA',dishCaption:'Aus einem Foto der Taverne',foodAlt:'Zwei Teller Keftedakia aus der Taverne mit Zwiebeln, Tomate, Zitrone, Salat und Pommes',menuThread:'Schwarz-weiße Bäume auf dem Cover der Speisekarte. Ein einfacher Ausdruck dafür, was Η ΛΙΜΝΗ ausmacht: Essen mitten in der Natur.',menuAlt:'Das echte schwarz-weiße Speisekarten-Cover von Η ΛΙΜΝΗ mit Bäumen',menuCaption:'Das Speisekarten-Cover',
    chapterJournal:'MOMENTE',journalTitle:'Kleine Szenen von einem echten Ort.',journalBody:'Wasser, Enten, Bäume, Terrasse. Details, die diesem Ort seinen Charakter geben.',fountainAlt:'Kleiner Springbrunnen und Enten im See',acrossAlt:'Die Taverne und zwei Enten vom anderen Ufer aus gesehen',bankAlt:'Blick vom Holzgeländer zur gegenüberliegenden Uferseite',journalOne:'DAS WASSER',journalTwo:'DAS UFER',journalThree:'DER BLICK VOM TISCH',
    visitEyebrow:'05 / KOMM VORBEI',visitTitle:'Dein Tisch steht am Wasser.',visitBody:'Η ΛΙΜΝΗ liegt in Ai Giannis bei Serres. Komm zum Essen, bleib für den Blick und lass den Tag etwas langsamer werden.',mapLink:'DIE GEGEND AUF MAPS ANSEHEN',backTop:'NACH OBEN ↑',imageDisclosure:'Die Bilder basieren auf Kundenfotos; einzelne Bereiche wurden digital rekonstruiert.',areaSource:'MEHR ÜBER DEN ORT ↗',lightboxLabel:'Bildansicht',close:'Bild schließen',previous:'Vorheriges Bild',next:'Nächstes Bild'
  }
};

const gallery = [
  {src:'assets/limni/fountain.webp', alt:'fountainAlt', caption:'journalOne'},
  {src:'assets/limni/across-pond.webp', alt:'acrossAlt', caption:'journalTwo'},
  {src:'assets/limni/opposite-bank.webp', alt:'bankAlt', caption:'journalThree'}
];
const dialog = document.querySelector('#lightbox');
const dialogImage = document.querySelector('#lightbox-image');
const dialogCaption = document.querySelector('#lightbox-caption');
let language = 'el';
let activeImage = 0;

function setLanguage(next) {
  if (!translations[next]) return;
  language = next;
  const t = translations[next];
  document.documentElement.lang = next;
  document.title = t.pageTitle;
  document.querySelector('meta[name="description"]').content = t.pageDescription;
  document.querySelector('meta[property="og:locale"]').content = {el:'el_GR',en:'en_US',de:'de_DE'}[next];
  document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = t[node.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-aria]').forEach(node => { node.setAttribute('aria-label', t[node.dataset.i18nAria]); });
  document.querySelectorAll('[data-i18n-alt]').forEach(node => { node.alt = t[node.dataset.i18nAlt]; });
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === next)));
  if (dialog.open) showImage(activeImage);
  try { localStorage.setItem('limni-language', next); } catch {}
}

function showImage(index) {
  activeImage = (index + gallery.length) % gallery.length;
  const item = gallery[activeImage];
  dialogImage.src = item.src;
  dialogImage.alt = translations[language][item.alt];
  dialogCaption.textContent = `${String(activeImage + 1).padStart(2, '0')} / 03 — ${translations[language][item.caption]}`;
}

document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
document.querySelectorAll('[data-gallery]').forEach(button => button.addEventListener('click', () => { showImage(Number(button.dataset.gallery)); dialog.showModal(); document.body.classList.add('lightbox-open'); }));
document.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
document.querySelector('.lightbox-arrow.prev').addEventListener('click', () => showImage(activeImage - 1));
document.querySelector('.lightbox-arrow.next').addEventListener('click', () => showImage(activeImage + 1));
dialog.addEventListener('close', () => document.body.classList.remove('lightbox-open'));
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('keydown', event => { if (event.key === 'ArrowLeft') showImage(activeImage - 1); if (event.key === 'ArrowRight') showImage(activeImage + 1); });

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));
document.addEventListener('keydown', event => { if (event.key === 'Escape') { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); } });

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const revealItems = document.querySelectorAll('.reveal,.media-reveal,.line-draw');
if (reduceMotion.matches || !('IntersectionObserver' in window)) revealItems.forEach(item => item.classList.add('is-visible'));
else {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), {threshold:.08,rootMargin:'0px 0px -35px 0px'});
  revealItems.forEach(item => observer.observe(item));
}

const header = document.querySelector('.site-header');
const hero = document.querySelector('.hero');
const heroImage = document.querySelector('.hero-image');
const progress = document.querySelector('.scroll-progress');
let scrollQueued = false;
function updateScroll() {
  const end = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${end > 0 ? scrollY / end : 0})`;
  header.classList.toggle('is-scrolled', scrollY > 42);
  if (!reduceMotion.matches) {
    hero.classList.toggle('is-color', scrollY > 95);
    if (scrollY < innerHeight * 1.2) heroImage.style.transform = `translate3d(0,${Math.min(scrollY * .12, 95)}px,0) scale(1.07)`;
  }
  scrollQueued = false;
}
window.addEventListener('scroll', () => { if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateScroll); } }, {passive:true});
updateScroll();
document.querySelector('#year').textContent = new Date().getFullYear();
try { setLanguage(localStorage.getItem('limni-language') || 'el'); } catch { setLanguage('el'); }
