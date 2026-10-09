# Η ΛΙΜΝΗ · Taverna am Wasser

Statische Website in Griechisch, Englisch und Deutsch für die Taverne Η ΛΙΜΝΗ in Άι Γιάννης bei Serres. Das bestehende Repository `o-some/taverne` und der GitHub-Pages-Workflow bleiben die einzige Quelle und der einzige Veröffentlichungsweg.

## Lokal prüfen

```sh
npm ci
npm run build:water
node check.mjs
python3 -m http.server 8080
```

Die Seite verwendet HTML, CSS und JavaScript ohne Frontend-Framework. Nur die optionale Three.js-Wasserschicht wird lokal gebündelt; der bestehende Pages-Workflow baut sie vor der Veröffentlichung. Pushes auf `main` veröffentlichen über `.github/workflows/pages.yml` auf `https://o-some.github.io/taverne/`.

Die hellen Kapitel erhalten eine sehr feine Papierstruktur. Ortsansicht, Speisetafel, Galerie und Besuchsabschluss wechseln zwischen ruhigen Textflächen und großformatigen Bildern. Das Wasserfallkapitel und ein zweites Ortsbild werden beim Scrollen von oben nach unten freigelegt. Die Kapitelbilder bewegen sich beim Scrollen um höchstens 80 Pixel auf großen und 38 Pixel auf schmalen Bildschirmen; das Titelbild um höchstens 125 Pixel. Bei `prefers-reduced-motion` entfällt die Bewegung. Weiche Fotokanten verbinden die Bilder mit Papierweiß und Dunkelgrün. Die Inhalte bleiben ohne JavaScript sichtbar.

Ein transparentes, aus der Ortsreferenz entwickeltes Aquarell der kleinen Kaskaden liegt dezent hinter dem Kapitel „Momente“. Ein stark beschnittener Wasserfarbausschnitt setzt im ersten hellen Kapitel einen zweiten, leiseren Akzent. Die Illustration bleibt dekorativ und liegt hinter dem lesbaren HTML-Text.

Im Einstieg können Gäste zwischen einer Tagesansicht und der gestalteten Abendstimmung desselben Ufers wechseln. Die fünf Speisenbilder öffnen sich in der bestehenden Bildansicht; Pfeiltasten wechseln das Motiv, Escape schließt sie. Beide Interaktionen sind mit Tastatur und in allen drei Sprachen nutzbar. Bei reduzierter Bewegung entfällt die Überblendung.

Eine stumme, elfsekündige Bildmontage zeigt Brücke, Teich, Grill und Tisch. Im großen Titelbild läuft sie nach dem Laden einmal in einer kleinen Vorschau; Pause und Wiederaufnahme sind steuerbar. Auf schmalen Ansichten wird erst nach einem bewussten Klick auf „Die kurze Geschichte ansehen“ ein Videoplayer geladen. Ein statisches Ortsbild ist der Rückfall. Der Wechsel vom Wasser zum Grill erfolgt über die Bildkomposition und die optional zugeladene Three.js-Lichtschicht; die früheren aufgesetzten Wellenlinien an Kapitelgrenzen wurden entfernt. Am großen Tischbild lassen sich Souvlakia, Bauernsalat und Soutzoukakia per Maus, Tastatur oder Berührung erkunden. Die Hinweise sind in allen drei Sprachen verfügbar und beschreiben illustrative Speisen, keine bestätigte Karte.

## Identität und Bilder

Der Name **Η ΛΙΜΝΗ** und die Ortsbezeichnung sind auf dem vom Kunden gelieferten Material in `[Bilder Mutter]` dokumentiert. Das aktuelle Signet verbindet den griechischen Buchstaben **Λ** mit einer kleinen Wasserform; die griechische Wortmarke steht im Header und Footer daneben. Das echte schwarz-weiße Speisekarten-Cover lieferte die typografische und grafische Richtung. Die Ortsbilder wurden aus Kundenfotos und einer vom Nutzer gelieferten Ortsreferenz neu komponiert und als WebP optimiert. Die Speiseszenen verbinden diese tatsächliche Umgebung mit älteren Food-Konzepten. Dazu kommen fünf neue Motive für Souvlakia, Soutzoukakia, Panseta, Schafskäsecreme und Bauernsalat. Ihre illustrative Natur wird im Footer und unter der Speisestrecke offengelegt. Die unveränderten Quellen bleiben unter `[Bilder Mutter]` und `[User Input]/Ortsreferenzen`, bearbeitete PNG-Master unter `[Website Assets]/masters` im Kundenordner. Zuordnung und Bearbeitungsbriefs: [ASSET_PROVENANCE.md](ASSET_PROVENANCE.md).

Die 24 früheren Konzeptbilder bleiben als Quellen im Repository. Drei davon dienten als Motivvorlage für neu komponierte Grill-, Tafel- und Bougatsa-Szenen. Die sichtbaren Speiseszenen sind illustrativ und im Seitenfooter sowie direkt unter der Speisestrecke als solche bezeichnet. Eine aktuelle vollständige Karte und Preise liegen weiterhin nicht vor.

Schriften: [GFS Didot](assets/fonts/OFL-GFSDidot.txt) für die griechisch-lateinische Editorial-Typografie und [Roboto Variable](assets/fonts/OFL-Roboto.txt) für UI und Fließtext, beide lokal eingebunden.

## Redaktionelle Quellen

Der örtliche Hintergrund (ungefähr 2 km von Serres, Platanen, fließendes Wasser, kleine Wasserfälle, Erholungsnutzung) folgt dem [Tourismustext der Stadt Serres](https://www.serres.gr/toyrismos/axiotheata/ai-giannis/) und ihrem [Tourismusführer](https://tourism.serres.gr/thematikes_empiries/ai-giannis/). Die [Tourismusorganisation Zentralmakedoniens](https://www.visit-centralmacedonia.gr/en/where-to-go/60/1-serres) belegt die breitere Landschaft aus Ebene, Flüssen, Seen und Bergen. Eine historische Entstehung einzelner Wasserstufen ist dort nicht belegt und wird nicht behauptet.

## Noch vom Betreiber zu ergänzen

Exakter Maps-Pin, Straße/Hausnummer, Telefonnummer, Öffnungszeiten, Reservierung, vollständige Speisekarte, Preise und rechtliche Angaben. Der derzeitige Kartenlink öffnet eine Suche nach Name und Ort. Das Restaurant-JSON-LD enthält nur den bestätigten Namen und die Ortsregion.
