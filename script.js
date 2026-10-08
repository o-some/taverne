document.documentElement.classList.add('has-js');

const translations = {
  el: {
    explorerEyebrow:'ΑΪ ΓΙΑΝΝΗΣ / ΤΡΕΙΣ ΕΙΚΟΝΕΣ',heroRoute:'ΔΕΣ ΤΗΝ ΠΕΡΙΟΧΗ ΣΤΟΝ ΧΑΡΤΗ',heroGlimpse:'ΑΠΟ ΤΟΝ ΤΟΠΟ ΣΤΟ ΤΡΑΠΕΖΙ',visitLocation:'ΑΪ ΓΙΑΝΝΗΣ · ΣΕΡΡΕΣ · ΕΛΛΑΔΑ',explorerTitle:'Μείνε λίγο. Κοίτα γύρω.',explorerIntro:'Η γέφυρα, το νερό και η ταβέρνα συνθέτουν τον δικό τους μικρό κόσμο. Διάλεξε μια εικόνα για να τον γνωρίσεις.',explorerLabel:'Εικόνες του τόπου',explorerBridge:'Η ΓΕΦΥΡΑ',explorerWater:'ΤΟ ΝΕΡΟ',explorerTable:'Η ΤΑΒΕΡΝΑ',explorerBridgeAlt:'Μικρές υδάτινες πτώσεις κάτω από την ξύλινη γέφυρα',explorerWaterAlt:'Πάπιες και νερό στη μικρή λίμνη',explorerTableAlt:'Η ταβέρνα ιδωμένη από την απέναντι όχθη',explorerBridgeCaption:'Μια ξύλινη γέφυρα πάνω από τις χαμηλές πτώσεις.',explorerWaterCaption:'Η μικρή λίμνη, οι πάπιες και η σκιά των δέντρων.',explorerTableCaption:'Η ταβέρνα, ιδωμένη από την απέναντι όχθη.',explorerNote:'Τρεις όψεις του τόπου — δεν είναι διαδρομή ή χάρτης.',
    pageTitle:'Η ΛΙΜΝΗ · Ταβέρνα στον Άι Γιάννη Σερρών',pageDescription:'Η ΛΙΜΝΗ — ταβέρνα δίπλα στο νερό στον Άι Γιάννη Σερρών. Ένας τόπος για φαγητό, σκιά και λίγη περισσότερη ώρα μαζί.',
    skip:'Μετάβαση στο περιεχόμενο',brandLabel:'Η ΛΙΜΝΗ — αρχή',brandSub:'ΤΑΒΕΡΝΑ · ΣΕΡΡΕΣ',navLabel:'Κύρια πλοήγηση',navPlace:'Ο ΤΟΠΟΣ',navTaverna:'Η ΤΑΒΕΡΝΑ',navFood:'Η ΓΕΥΣΗ',navJournal:'ΣΤΙΓΜΕΣ',navVisit:'ΕΠΙΣΚΕΨΗ',languageLabel:'Γλώσσα',menuLabel:'Άνοιγμα μενού',
    heroPlace:'ΑΪ ΓΙΑΝΝΗΣ / ΣΕΡΡΕΣ / ΕΛΛΑΔΑ',heroPretitle:'ΜΙΑ ΤΑΒΕΡΝΑ, ΕΝΑΣ ΤΟΠΟΣ.',heroSubtitle:'Δίπλα στο νερό, κάτω από τα δέντρα. Έλα όπως είσαι. Μείνε όσο θέλεις.',discoverLabel:'Ανακαλύψτε τον τόπο',heroImageNote:'Εικόνα βασισμένη σε φωτογραφίες της ταβέρνας',scrollCue:'ΚΥΛΗΣΕ ΓΙΑ ΝΑ ΑΝΑΚΑΛΥΨΕΙΣ',sceneLabel:'Φωτισμός εικόνας',sceneDay:'ΗΜΕΡΑ',sceneDusk:'ΣΟΥΡΟΥΠΟ',
    chapterPlace:'Ο ΤΟΠΟΣ',prologueEyebrow:'ΣΤΟΝ ΑΪ ΓΙΑΝΝΗ ΣΕΡΡΩΝ',prologueTitle:'Ένας τόπος που αρχίζει από το νερό.',prologueBody:'Λίγα λεπτά από τις Σέρρες, η ταβέρνα Η Λίμνη κοιτάζει το ήσυχο νερό. Ξύλινα κάγκελα, πάπιες και σκιά από τα δέντρα γίνονται μέρος του τραπεζιού.',prologueAside:'Εδώ δεν χρειάζεται βιασύνη. Μόνο μια καλή θέση δίπλα στο νερό.',
    waterAlt:'Ρηχό ρέμα με δύο μικρά σκαλοπάτια νερού και ξύλινη γέφυρα στον Άι Γιάννη Σερρών',waterTitle:'Η φύση κάθεται μαζί μας.',waterBody:'Ο Άι Γιάννης έχει και μια άλλη όψη του νερού: το ρέμα, τις χαμηλές πτώσεις και την ξύλινη γέφυρα κάτω από τα δέντρα.',waterFact:'Ο Άι Γιάννης βρίσκεται περίπου δύο χιλιόμετρα από την πόλη των Σερρών. Το τρεχούμενο νερό σχηματίζει μικρούς καταρράκτες κάτω από τα πλατάνια.',sourceLink:'ΠΗΓΗ: ΔΗΜΟΣ ΣΕΡΡΩΝ',
    chapterTaverna:'Η ΤΑΒΕΡΝΑ',tavernaEyebrow:'Ο ΧΑΡΑΚΤΗΡΑΣ ΤΟΥ ΤΟΠΟΥ',tavernaTitle:'Ξύλο. Σκιά. Ένα τραπέζι.',tavernaBody:'Η ταβέρνα έχει τον δικό της τρόπο να σε καλωσορίζει: απλά τραπέζια, το παλιό ξύλινο κάγκελο και το νερό ακριβώς δίπλα.',terraceAlt:'Η παραλίμνια βεράντα της ταβέρνας με ξύλινο κάγκελο και πάπιες',terraceCaption:'Η βεράντα δίπλα στο νερό',ducksAlt:'Πάπιες στο ρηχό νερό μπροστά από την ταβέρνα',tavernaNote:'Δεν είναι σκηνικό. Είναι οι μικρές λεπτομέρειες που θυμάσαι όταν φύγεις.',interludeLabel:'Από το νερό στη φωτιά',interludeText:'ΑΠΟ ΤΟ ΝΕΡΟ ΣΤΗ ΦΩΤΙΑ',
    chapterFood:'Η ΓΕΥΣΗ',foodEyebrow:'Η ΧΑΡΑ ΤΟΥ ΤΡΑΠΕΖΙΟΥ',foodTitle:'Όλοι γύρω από το τραπέζι.',foodBody:'Σουβλάκια από τη σχάρα, ντοματοσαλάτα με φέτα, σουτζουκάκια και μεζέδες στη μέση. Μια εικόνα για όσα μας φέρνουν μαζί.',dishName:'ΤΟ ΤΡΑΠΕΖΙ',dishCaption:'Γαστρονομική εικονογράφηση',foodAlt:'Πλούσιο τραπέζι δίπλα στη λίμνη με σουβλάκια, φέτα, ντομάτες, σουτζουκάκια και μεζέδες',grillAlt:'Σουβλάκια ψήνονται στη σχάρα κοντά στο ξύλινο κάγκελο και το μικρό ρέμα',grillCaption:'Η φωτιά πριν από το τραπέζι',dessertAlt:'Μπουγάτσα με κρέμα και καφέ σε τραπέζι δίπλα στο νερό',dessertCaption:'Και λίγο ακόμη για το τέλος',foodDisclosure:'Οι εικόνες του φαγητού είναι δημιουργικές συνθέσεις, όχι φωτογραφίες της σημερινής κάρτας. Τα διαθέσιμα πιάτα επιβεβαιώνονται επί τόπου.',menuThread:'Ασπρόμαυρα δέντρα στο εξώφυλλο της κάρτας. Ένας απλός τρόπος να πεις τι είναι η ταβέρνα Η Λίμνη: φαγητό μέσα στη φύση.',menuAlt:'Το εξώφυλλο της ασπρόμαυρης κάρτας Η ΛΙΜΝΗ με δέντρα',menuCaption:'Το εξώφυλλο της κάρτας',
    chapterJournal:'ΣΤΙΓΜΕΣ',journalTitle:'Μικρές εικόνες από έναν αληθινό τόπο.',journalBody:'Λίμνη, πάπιες, νερό, βεράντα. Οι λεπτομέρειες που κάνουν αυτόν τον τόπο ξεχωριστό.',fountainAlt:'Μικρό συντριβάνι και πάπιες στη λίμνη',acrossAlt:'Η ταβέρνα και δύο πάπιες ιδωμένες από την απέναντι όχθη',bankAlt:'Θέα από το ξύλινο κιγκλίδωμα προς την απέναντι πλευρά της λίμνης',journalOne:'ΤΟ ΝΕΡΟ',journalTwo:'Η ΟΧΘΗ',journalThree:'Η ΘΕΑ ΑΠΟ ΤΟ ΤΡΑΠΕΖΙ',
    visitEyebrow:'05 / ΕΛΑ ΝΑ ΜΑΣ ΒΡΕΙΣ',visitTitle:'Το τραπέζι είναι δίπλα στο νερό.',visitBody:'Η Λίμνη βρίσκεται στον Άι Γιάννη Σερρών. Έλα για το φαγητό, κάθισε για τη θέα και άφησε τη μέρα να πάει λίγο πιο αργά.',mapLink:'ΔΕΙΤΕ ΤΗΝ ΠΕΡΙΟΧΗ ΣΤΟΝ ΧΑΡΤΗ',backTop:'ΠΙΣΩ ΣΤΗΝ ΑΡΧΗ ↑',imageDisclosure:'Εικόνες δημιουργικές συνθέσεις βασισμένες σε φωτογραφίες του τόπου· το φαγητό είναι ενδεικτικό.',areaSource:'ΠΛΗΡΟΦΟΡΙΕΣ ΓΙΑ ΤΟΝ ΤΟΠΟ',lightboxLabel:'Προβολή εικόνας',close:'Κλείσιμο εικόνας',previous:'Προηγούμενη εικόνα',next:'Επόμενη εικόνα',
    placeStoryEyebrow:"Ο ΑΪ ΓΙΑΝΝΗΣ, ΛΙΓΟ ΠΙΟ ΚΟΝΤΑ",
    placeStoryTitle:"Μικροί καταρράκτες. Μεγάλη ανάσα.",
    placeStoryIntro:"Περίπου δύο χιλιόμετρα από το κέντρο των Σερρών, το νερό, οι λιμνούλες και τα παλιά πλατάνια φτιάχνουν έναν διαφορετικό ρυθμό.",
    placeWaterTitle:"Το νερό σε μικρή κλίμακα.",
    placeWaterBody:"Δεν είναι ένας θεαματικός, ψηλός καταρράκτης. Το τρεχούμενο νερό περνά από χαμηλές πτώσεις, ρυάκια και μικρές λίμνες κάτω από τα πλατάνια. Αυτή η εγγύτητα κάνει τον περίπατο και τη στάση δίπλα στο νερό ξεχωριστά.",
    placeWhyTitle:"Μια έξοδος που χωρά στην ημέρα.",
    placeWhyBody:"Ο Άι Γιάννης είναι κοντά στην πόλη, αλλά προσφέρει σκιά και δροσιά. Οι επισκέπτες έρχονται για περίπατο, για τον ήχο του νερού, για καφέ ή για φαγητό στην περιοχή. Το καλοκαίρι είναι ανάσα από τη ζέστη· τον χειμώνα, μια ήρεμη στάση.",
    placeRegionTitle:"Η φύση των Σερρών.",
    placeRegionBody:"Η ευρύτερη περιοχή των Σερρών ενώνει πεδιάδα, ποτάμια, λίμνες και βουνά. Ο Άι Γιάννης είναι μια μικρή, εύκολα προσβάσιμη γεύση αυτού του τοπίου: νερό και πράσινο, σχεδόν δίπλα στην πόλη.",
    storyWaterAlt:"Μικρές υδάτινες πτώσεις κάτω από την ξύλινη γέφυρα στον Άι Γιάννη Σερρών",
    storyWaterCaption:"Η ξύλινη γέφυρα και οι χαμηλές πτώσεις του νερού",
    placeSourcesLabel:"ΓΙΑ ΤΟΝ ΤΟΠΟ",
    placeSourceCity:"ΔΗΜΟΣ ΣΕΡΡΩΝ",
    placeSourceTourism:"ΤΟΥΡΙΣΤΙΚΟΣ ΟΔΗΓΟΣ ΣΕΡΡΩΝ",
    placeSourceRegion:"ΚΕΝΤΡΙΚΗ ΜΑΚΕΔΟΝΙΑ",
    foodCollectionEyebrow:"ΓΕΥΣΕΙΣ ΓΙΑ ΤΗ ΜΕΣΗ",
    foodCollectionTitle:"Το τραπέζι γεμίζει.",
    foodCollectionIntro:"Από τη σχάρα ως τη σαλάτα: πιάτα που δίνουν στην παρέα έναν λόγο να μείνει λίγο ακόμη.",
    courseFire:"Από τη φωτιά.",courseTable:"Για τη μέση.",courseSweet:"Κάτι γλυκό στο τέλος.",
    souvlakiaAlt:"Γενναιόδωρη πιατέλα με ψημένα σουβλάκια, λεμόνι και σαλάτα δίπλα στη λίμνη",
    souvlakiaName:"Σουβλάκια",
    soutzoukakiaAlt:"Σουτζουκάκια με σάλτσα ντομάτας σε μεγάλη πήλινη γάστρα",
    soutzoukakiaName:"Σουτζουκάκια",
    pansetaAlt:"Χοντρές ψημένες φέτες πανσέτας με λεμόνι και πιπεριές",
    pansetaName:"Πανσέτα",
    sheepCheeseAlt:"Κρεμώδης χτυπητή με πρόβειο τυρί, ελαιόλαδο και χωριάτικο ψωμί",
    sheepCheeseName:"Χτυπητή με πρόβειο τυρί",
    horiatikiAlt:"Μεγάλη χωριάτικη σαλάτα με ντομάτα, αγγούρι, ελιές και φέτα",
    horiatikiName:"Χωριάτικη σαλάτα",
  },
  en: {
    explorerEyebrow:'AI GIANNIS / THREE VIEWS',heroRoute:'SEE THE AREA ON MAPS',heroGlimpse:'FROM THE PLACE TO THE TABLE',visitLocation:'AI GIANNIS · SERRES · GREECE',explorerTitle:'Stay a moment. Look around.',explorerIntro:'The bridge, the water and the taverna make up their own little world. Choose a view and get to know it.',explorerLabel:'Views of the place',explorerBridge:'THE BRIDGE',explorerWater:'THE WATER',explorerTable:'THE TAVERNA',explorerBridgeAlt:'Low cascades beneath the timber bridge',explorerWaterAlt:'Ducks and water in the small pond',explorerTableAlt:'The taverna seen from the opposite bank',explorerBridgeCaption:'A timber bridge over the low cascades.',explorerWaterCaption:'The small pond, ducks and the shade of the trees.',explorerTableCaption:'The taverna, seen from across the water.',explorerNote:'Three views of the place — this is not a route or a map.',
    pageTitle:'Η ΛΙΜΝΗ · Taverna by the water in Serres',pageDescription:'Η ΛΙΜΝΗ is a Greek taverna beside the water in Ai Giannis, Serres. A place for food, shade and time together.',
    skip:'Skip to content',brandLabel:'Η ΛΙΜΝΗ — home',brandSub:'TAVERNA · SERRES',navLabel:'Main navigation',navPlace:'THE PLACE',navTaverna:'THE TAVERNA',navFood:'THE FOOD',navJournal:'MOMENTS',navVisit:'VISIT',languageLabel:'Language',menuLabel:'Open menu',
    heroPlace:'AI GIANNIS / SERRES / GREECE',heroPretitle:'A TAVERNA. A PLACE.',heroSubtitle:'Beside the water, beneath the trees. Come as you are. Stay as long as you like.',discoverLabel:'Discover the place',heroImageNote:'Image based on photographs of the taverna',scrollCue:'SCROLL TO EXPLORE',sceneLabel:'Image lighting',sceneDay:'DAY',sceneDusk:'DUSK',
    chapterPlace:'THE PLACE',prologueEyebrow:'IN AI GIANNIS, SERRES',prologueTitle:'A place that begins with water.',prologueBody:'Minutes from Serres, Η ΛΙΜΝΗ looks out over still water. Timber rails, ducks and shade from the trees become part of the table.',prologueAside:'There is no need to hurry here. Just find a good seat beside the water.',
    waterAlt:'Shallow stream with two low cascades and a timber footbridge in Ai Giannis, Serres',waterTitle:'Nature joins the table.',waterBody:'Ai Giannis has another side to its water: the stream, low cascades and a timber bridge beneath the trees.',waterFact:'Ai Giannis is about two kilometres from the city of Serres. Running water forms small waterfalls beneath the plane trees.',sourceLink:'SOURCE: MUNICIPALITY OF SERRES',
    chapterTaverna:'THE TAVERNA',tavernaEyebrow:'THE CHARACTER OF THE PLACE',tavernaTitle:'Timber. Shade. A table.',tavernaBody:'The taverna has its own way of welcoming you: simple tables, weathered timber rails and the water right beside them.',terraceAlt:'The waterside taverna terrace with timber rails and ducks',terraceCaption:'The terrace beside the water',ducksAlt:'Ducks in shallow water beside the taverna',tavernaNote:'It is the small details you remember after you leave.',interludeLabel:'From water to fire',interludeText:'FROM WATER TO FIRE',
    chapterFood:'THE FOOD',foodEyebrow:'THE JOY OF THE TABLE',foodTitle:'Gather around the table.',foodBody:'Souvlakia from the grill, tomato and feta salad, soutzoukakia and generous plates to share. A taste of being together.',dishName:'THE TABLE',dishCaption:'An editorial food composition',foodAlt:'Generous lakeside table with souvlakia, feta, tomatoes, soutzoukakia and shared dishes',grillAlt:'Souvlakia grilling beside the timber rail and small stream',grillCaption:'The fire before the table',dessertAlt:'Bougatsa with custard and coffee beside the water',dessertCaption:'A little more time for dessert',foodDisclosure:'Food images are creative compositions, not photographs of the current menu. Please confirm available dishes on site.',menuThread:'Black-and-white trees on the menu cover. A simple way to describe Η ΛΙΜΝΗ: food among nature.',menuAlt:'The real black-and-white Η ΛΙΜΝΗ menu cover with trees',menuCaption:'The menu cover',
    chapterJournal:'MOMENTS',journalTitle:'Small scenes from a real place.',journalBody:'Water, ducks, trees, terrace. Details that give this place its character.',fountainAlt:'Small fountain and ducks in the pond',acrossAlt:'The taverna and two ducks seen from across the pond',bankAlt:'View from the timber rail toward the opposite bank',journalOne:'THE WATER',journalTwo:'THE SHORE',journalThree:'THE VIEW FROM THE TABLE',
    visitEyebrow:'05 / COME FIND US',visitTitle:'Your table is beside the water.',visitBody:'Η ΛΙΜΝΗ is in Ai Giannis, Serres. Come for the food, take a seat for the view and let the day move a little more slowly.',mapLink:'EXPLORE THE AREA ON MAPS',backTop:'BACK TO TOP ↑',imageDisclosure:'Place images are creative composites based on location photographs; food scenes are illustrative.',areaSource:'ABOUT THE AREA',lightboxLabel:'Image viewer',close:'Close image',previous:'Previous image',next:'Next image',
    placeStoryEyebrow:"A CLOSER LOOK AT AI GIANNIS",
    placeStoryTitle:"Small cascades. Room to breathe.",
    placeStoryIntro:"About two kilometres from central Serres, water, ponds and old plane trees set a different pace.",
    placeWaterTitle:"Water on a human scale.",
    placeWaterBody:"This is no towering waterfall. Running water moves through low cascades, streams and small ponds beneath the plane trees. Its closeness makes a walk or a pause by the water memorable.",
    placeWhyTitle:"A day out, close to town.",
    placeWhyBody:"Ai Giannis is close to the city yet full of shade and cool air. People come to walk, listen to the water, stop for coffee or eat in the area. It offers respite in summer and a quieter pause in winter.",
    placeRegionTitle:"The landscape of Serres.",
    placeRegionBody:"The wider Serres region brings together plains, rivers, lakes and mountains. Ai Giannis offers an accessible taste of that landscape: water and greenery almost beside the city.",
    storyWaterAlt:"Small cascades beneath the timber bridge at Ai Giannis, Serres",
    storyWaterCaption:"The timber bridge and the low cascades",
    placeSourcesLabel:"ABOUT THE PLACE",
    placeSourceCity:"MUNICIPALITY OF SERRES",
    placeSourceTourism:"SERRES TOURISM GUIDE",
    placeSourceRegion:"CENTRAL MACEDONIA",
    foodCollectionEyebrow:"MADE TO SHARE",
    foodCollectionTitle:"The table fills up.",
    foodCollectionIntro:"From the grill to the salad in the middle: the kind of food that makes everyone stay a little longer.",
    courseFire:"From the fire.",courseTable:"To share.",courseSweet:"Something sweet to finish.",
    souvlakiaAlt:"Generous platter of grilled souvlakia, lemon and salad beside the pond",
    souvlakiaName:"Souvlakia",
    soutzoukakiaAlt:"Soutzoukakia in tomato sauce in a large terracotta pan",
    soutzoukakiaName:"Soutzoukakia",
    pansetaAlt:"Thick slices of grilled pancetta with lemon and peppers",
    pansetaName:"Panseta",
    sheepCheeseAlt:"Creamy whipped sheep cheese spread with olive oil and village bread",
    sheepCheeseName:"Whipped sheep cheese",
    horiatikiAlt:"Generous Greek village salad with tomatoes, cucumber, olives and feta",
    horiatikiName:"Greek village salad",
  },
  de: {
    explorerEyebrow:'AI GIANNIS / DREI ANSICHTEN',heroRoute:'DIE GEGEND AUF MAPS ANSEHEN',heroGlimpse:'VOM ORT AN DEN TISCH',visitLocation:'AI GIANNIS · SERRES · GRIECHENLAND',explorerTitle:'Bleib kurz. Schau dich um.',explorerIntro:'Brücke, Wasser und Taverne bilden hier eine kleine eigene Welt. Wähle eine Ansicht und entdecke den Ort.',explorerLabel:'Ansichten des Ortes',explorerBridge:'DIE BRÜCKE',explorerWater:'DAS WASSER',explorerTable:'DIE TAVERNE',explorerBridgeAlt:'Niedrige Kaskaden unter der Holzbrücke',explorerWaterAlt:'Enten und Wasser in der kleinen Teichanlage',explorerTableAlt:'Die Taverne vom gegenüberliegenden Ufer gesehen',explorerBridgeCaption:'Eine Holzbrücke über den niedrigen Kaskaden.',explorerWaterCaption:'Der kleine Teich, Enten und der Schatten der Bäume.',explorerTableCaption:'Die Taverne vom anderen Ufer aus gesehen.',explorerNote:'Drei Ansichten des Ortes — keine Route und kein Lageplan.',
    pageTitle:'Η ΛΙΜΝΗ · Taverne am Wasser bei Serres',pageDescription:'Η ΛΙΜΝΗ ist eine griechische Taverne direkt am Wasser in Ai Giannis bei Serres. Ein Ort für Essen, Schatten und gemeinsame Zeit.',
    skip:'Zum Inhalt springen',brandLabel:'Η ΛΙΜΝΗ — Startseite',brandSub:'TAVERNE · SERRES',navLabel:'Hauptnavigation',navPlace:'DER ORT',navTaverna:'DIE TAVERNE',navFood:'DAS ESSEN',navJournal:'MOMENTE',navVisit:'BESUCH',languageLabel:'Sprache',menuLabel:'Menü öffnen',
    heroPlace:'AI GIANNIS / SERRES / GRIECHENLAND',heroPretitle:'EINE TAVERNE. EIN ORT.',heroSubtitle:'Direkt am Wasser, unter den Bäumen. Komm, wie du bist. Bleib, so lange du magst.',discoverLabel:'Den Ort entdecken',heroImageNote:'Bild auf Grundlage von Fotos der Taverne',scrollCue:'WEITER SCROLLEN',sceneLabel:'Lichtstimmung des Bildes',sceneDay:'TAG',sceneDusk:'ABEND',
    chapterPlace:'DER ORT',prologueEyebrow:'IN AI GIANNIS BEI SERRES',prologueTitle:'Ein Ort, der mit dem Wasser beginnt.',prologueBody:'Wenige Minuten von Serres entfernt blickt Η ΛΙΜΝΗ auf das ruhige Wasser. Holzgeländer, Enten und der Schatten der Bäume gehören hier zum Tisch dazu.',prologueAside:'Hier muss niemand eilen. Such dir einfach einen guten Platz direkt am Wasser.',
    waterAlt:'Flacher Bach mit zwei kleinen Stufen und Holzbrücke in Ai Giannis bei Serres',waterTitle:'Die Natur sitzt mit am Tisch.',waterBody:'Ai Giannis zeigt noch eine andere Seite des Wassers: den Bach, die niedrigen Kaskaden und eine Holzbrücke unter den Bäumen.',waterFact:'Ai Giannis liegt etwa zwei Kilometer von der Stadt Serres entfernt. Fließendes Wasser bildet unter den Platanen kleine Wasserfälle.',sourceLink:'QUELLE: STADT SERRES',
    chapterTaverna:'DIE TAVERNE',tavernaEyebrow:'DER CHARAKTER DES ORTES',tavernaTitle:'Holz. Schatten. Ein Tisch.',tavernaBody:'Die Taverne begrüßt dich auf ihre Weise: mit einfachen Tischen, dem alten Holzgeländer und dem Wasser gleich daneben.',terraceAlt:'Die Terrasse der Taverne am Wasser mit Holzgeländer und Enten',terraceCaption:'Die Terrasse direkt am Wasser',ducksAlt:'Enten im flachen Wasser vor der Taverne',tavernaNote:'Es sind die kleinen Details, an die du dich später erinnerst.',interludeLabel:'Vom Wasser zum Feuer',interludeText:'VOM WASSER ZUM FEUER',
    chapterFood:'DAS ESSEN',foodEyebrow:'FREUDE AM TISCH',foodTitle:'Alle an einen Tisch.',foodBody:'Souvlakia vom Grill, Tomatensalat mit Feta, Soutzoukakia und großzügige Speisen zum Teilen. Ein Bild für gemeinsame Zeit.',dishName:'DIE TAFEL',dishCaption:'Inszenierte Speiseszene',foodAlt:'Großzügig gedeckter Tisch am Wasser mit Souvlakia, Feta, Tomaten, Soutzoukakia und weiteren Speisen',grillAlt:'Souvlakia auf dem Grill neben Holzgeländer und kleinem Bach',grillCaption:'Das Feuer vor dem Essen',dessertAlt:'Bougatsa mit Cremefüllung und Kaffee direkt am Wasser',dessertCaption:'Zum Schluss noch ein bisschen Zeit',foodDisclosure:'Die Essensbilder sind gestaltete Szenen, keine Aufnahmen der aktuellen Karte. Verfügbare Gerichte bitte vor Ort erfragen.',menuThread:'Schwarz-weiße Bäume auf dem Cover der Speisekarte. Ein einfacher Ausdruck dafür, was Η ΛΙΜΝΗ ausmacht: Essen mitten in der Natur.',menuAlt:'Das echte schwarz-weiße Speisekarten-Cover von Η ΛΙΜΝΗ mit Bäumen',menuCaption:'Das Speisekarten-Cover',
    chapterJournal:'MOMENTE',journalTitle:'Kleine Szenen von einem echten Ort.',journalBody:'Wasser, Enten, Bäume, Terrasse. Details, die diesem Ort seinen Charakter geben.',fountainAlt:'Kleiner Springbrunnen und Enten im See',acrossAlt:'Die Taverne und zwei Enten vom anderen Ufer aus gesehen',bankAlt:'Blick vom Holzgeländer zur gegenüberliegenden Uferseite',journalOne:'DAS WASSER',journalTwo:'DAS UFER',journalThree:'DER BLICK VOM TISCH',
    visitEyebrow:'05 / KOMM VORBEI',visitTitle:'Dein Tisch steht am Wasser.',visitBody:'Η ΛΙΜΝΗ liegt in Ai Giannis bei Serres. Komm zum Essen, bleib für den Blick und lass den Tag etwas langsamer werden.',mapLink:'DIE GEGEND AUF MAPS ANSEHEN',backTop:'NACH OBEN ↑',imageDisclosure:'Ortsbilder sind nach Fotos gestaltete Kompositionen; Speiseszenen sind illustrativ.',areaSource:'MEHR ÜBER DEN ORT',lightboxLabel:'Bildansicht',close:'Bild schließen',previous:'Vorheriges Bild',next:'Nächstes Bild',
    placeStoryEyebrow:"AI GIANNIS, AUS DER NÄHE",
    placeStoryTitle:"Kleine Wasserfälle. Viel Luft zum Atmen.",
    placeStoryIntro:"Rund zwei Kilometer vom Zentrum von Serres entfernt geben Wasser, kleine Teiche und alte Platanen einen anderen Takt vor.",
    placeWaterTitle:"Wasser zum Greifen nah.",
    placeWaterBody:"Hier fällt kein Wasser aus großer Höhe. Es fließt unter den Platanen über niedrige Kaskaden, durch Bäche und kleine Teiche. Gerade die Nähe macht einen Spaziergang und eine Pause am Ufer besonders.",
    placeWhyTitle:"Ein Ausflug mitten im Tag.",
    placeWhyBody:"Ai Giannis liegt nah an der Stadt und bietet dennoch Schatten und Kühle. Menschen kommen zum Spazieren, für das Geräusch des Wassers, auf einen Kaffee oder zum Essen in die Gegend. Im Sommer ist es eine Pause von der Hitze, im Winter ein ruhiger Rückzugsort.",
    placeRegionTitle:"Die Landschaft von Serres.",
    placeRegionBody:"Die weitere Region Serres vereint Ebene, Flüsse, Seen und Berge. Ai Giannis macht einen kleinen Teil dieser Landschaft leicht erreichbar: Wasser und Grün fast direkt neben der Stadt.",
    storyWaterAlt:"Kleine Wasserstufen unter der Holzbrücke in Ai Giannis bei Serres",
    storyWaterCaption:"Die Holzbrücke und die niedrigen Kaskaden",
    placeSourcesLabel:"ÜBER DEN ORT",
    placeSourceCity:"STADT SERRES",
    placeSourceTourism:"TOURISMUSFÜHRER SERRES",
    placeSourceRegion:"ZENTRALMAKEDONIEN",
    foodCollectionEyebrow:"ZUM TEILEN",
    foodCollectionTitle:"Der Tisch füllt sich.",
    foodCollectionIntro:"Vom Grill bis zum Salat in der Tischmitte: Essen, bei dem alle noch ein bisschen länger bleiben.",
    courseFire:"Vom Grill.",courseTable:"Für die Mitte.",courseSweet:"Zum süßen Schluss.",
    souvlakiaAlt:"Großzügiger Teller mit gegrillten Souvlakia, Zitrone und Salat am Teich",
    souvlakiaName:"Souvlakia",
    soutzoukakiaAlt:"Soutzoukakia in Tomatensauce in einer großen Tonschale",
    soutzoukakiaName:"Soutzoukakia",
    pansetaAlt:"Dicke gegrillte Panceta-Stücke mit Zitrone und Paprika",
    pansetaName:"Panseta",
    sheepCheeseAlt:"Cremige Schafskäsepaste mit Olivenöl und Bauernbrot",
    sheepCheeseName:"Schafskäsecreme",
    horiatikiAlt:"Großer griechischer Bauernsalat mit Tomaten, Gurke, Oliven und Feta",
    horiatikiName:"Griechischer Bauernsalat",
  }
};

const gallery = [
  {src:'assets/limni/fountain.webp', alt:'fountainAlt', caption:'journalOne'},
  {src:'assets/limni/across-pond.webp', alt:'acrossAlt', caption:'journalTwo'},
  {src:'assets/limni/opposite-bank.webp', alt:'bankAlt', caption:'journalThree'},
  {src:'assets/limni/souvlakia-editorial.webp', alt:'souvlakiaAlt', caption:'souvlakiaName'},
  {src:'assets/limni/panseta-editorial.webp', alt:'pansetaAlt', caption:'pansetaName'},
  {src:'assets/limni/soutzoukakia-editorial.webp', alt:'soutzoukakiaAlt', caption:'soutzoukakiaName'},
  {src:'assets/limni/sheep-cheese-editorial.webp', alt:'sheepCheeseAlt', caption:'sheepCheeseName'},
  {src:'assets/limni/horiatiki-editorial.webp', alt:'horiatikiAlt', caption:'horiatikiName'}
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
  dialogCaption.textContent = `${String(activeImage + 1).padStart(2, '0')} / ${String(gallery.length).padStart(2, '0')} — ${translations[language][item.caption]}`;
}

document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
document.querySelectorAll('[data-gallery]').forEach(button => button.addEventListener('click', () => { showImage(Number(button.dataset.gallery)); dialog.showModal(); document.body.classList.add('lightbox-open'); }));
document.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
document.querySelector('.lightbox-arrow.prev').addEventListener('click', () => showImage(activeImage - 1));
document.querySelector('.lightbox-arrow.next').addEventListener('click', () => showImage(activeImage + 1));
dialog.addEventListener('close', () => document.body.classList.remove('lightbox-open'));
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('keydown', event => { if (event.key === 'ArrowLeft') showImage(activeImage - 1); if (event.key === 'ArrowRight') showImage(activeImage + 1); });

const placeButtons = document.querySelectorAll('[data-place-target]');
const placePanels = document.querySelectorAll('[data-place-panel]');
placeButtons.forEach(button => button.addEventListener('click', () => {
  const target = button.dataset.placeTarget;
  placeButtons.forEach(option => option.setAttribute('aria-pressed', String(option === button)));
  placePanels.forEach(panel => {
    const active = panel.dataset.placePanel === target;
    panel.classList.toggle('is-active', active);
    panel.setAttribute('aria-hidden', String(!active));
  });
}));

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
const revealItems = document.querySelectorAll('.reveal,.media-reveal');
if (reduceMotion.matches || !('IntersectionObserver' in window)) revealItems.forEach(item => item.classList.add('is-visible'));
else {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), {threshold:.08,rootMargin:'0px 0px -35px 0px'});
  revealItems.forEach(item => observer.observe(item));
}

const header = document.querySelector('.site-header');
const hero = document.querySelector('.hero');
const heroImages = document.querySelectorAll('.hero-image');
document.querySelectorAll('[data-scene]').forEach(button => button.addEventListener('click', () => {
  hero.classList.toggle('is-day', button.dataset.scene === 'day');
  document.querySelectorAll('[data-scene]').forEach(option => option.setAttribute('aria-pressed', String(option === button)));
}));
const progress = document.querySelector('.scroll-progress');
const journey = document.querySelector('.journey-transition');
if ('WebGL2RenderingContext' in window && 'IntersectionObserver' in window && !navigator.connection?.saveData) {
  const waterLoader = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting || reduceMotion.matches) return;
    waterLoader.disconnect();
    import('./assets/limni/water-three.js').then(({ mountWater }) => mountWater(journey, reduceMotion)).catch(() => {});
  }, { rootMargin: '250px' });
  waterLoader.observe(journey);
}
const parallaxFrames = document.querySelectorAll('[data-parallax]');
let scrollQueued = false;
function updateScroll() {
  const end = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${end > 0 ? scrollY / end : 0})`;
  header.classList.toggle('is-scrolled', scrollY > 42);
  if (!reduceMotion.matches) {
    hero.classList.toggle('is-color', scrollY > 95);
    if (scrollY < innerHeight * 1.2) for (const image of heroImages) image.style.transform = `translate3d(0,${Math.min(scrollY * .19, 125)}px,0) scale(1.035)`;
    const journeyRect = journey.getBoundingClientRect();
    if (journeyRect.bottom > 0 && journeyRect.top < innerHeight) {
      const heat = Math.max(0, Math.min(1, 1.5 * (innerHeight - journeyRect.top) / (innerHeight + journeyRect.height)));
      journey.style.setProperty('--heat', heat.toFixed(3));
    }
    for (const frame of parallaxFrames) {
      const rect = frame.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > innerHeight) continue;
      const travel = innerWidth > 760 ? 80 : 38;
      const offset = Math.max(-travel, Math.min(travel, (innerHeight / 2 - rect.top - rect.height / 2) * (innerWidth > 760 ? .17 : .11)));
      frame.style.setProperty('--parallax-y', `${offset.toFixed(1)}px`);
    }
  }
  scrollQueued = false;
}
window.addEventListener('scroll', () => { if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateScroll); } }, {passive:true});
window.addEventListener('resize', updateScroll, {passive:true});
updateScroll();
document.querySelector('#year').textContent = new Date().getFullYear();
try { setLanguage(localStorage.getItem('limni-language') || 'el'); } catch { setLanguage('el'); }
