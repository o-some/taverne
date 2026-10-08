# Η ΛΙΜΝΗ · Taverna am Wasser

Statische Website in Griechisch, Englisch und Deutsch für die Taverne Η ΛΙΜΝΗ in Άι Γιάννης bei Serres. Das bestehende Repository `o-some/taverne` und der GitHub-Pages-Workflow bleiben die einzige Quelle und der einzige Veröffentlichungsweg.

## Lokal prüfen

```sh
node check.mjs
python3 -m http.server 8080
```

Die Seite verwendet HTML, CSS und wenig JavaScript. Es gibt kein Framework und keinen Build-Schritt. Pushes auf `main` veröffentlichen über `.github/workflows/pages.yml` auf `https://o-some.github.io/taverne/`.

## Identität und Bilder

Der Name **Η ΛΙΜΝΗ** und die Ortsbezeichnung sind auf dem vom Kunden gelieferten Material in `[Bilder Mutter]` dokumentiert. Das echte schwarz-weiße Speisekarten-Cover lieferte die typografische und grafische Richtung. Die Ortsbilder wurden aus Kundenfotos und einer vom Nutzer gelieferten Ortsreferenz neu komponiert und als WebP optimiert. Die Speiseszenen verbinden diese tatsächliche Umgebung mit älteren Food-Konzepten. Ihre illustrative Natur wird im Footer und unter der Speisestrecke offengelegt. Die unveränderten Quellen bleiben unter `[Bilder Mutter]` und `[User Input]/Ortsreferenzen`, bearbeitete PNG-Master unter `[Website Assets]/masters` im Kundenordner. Zuordnung und Bearbeitungsbriefs: [ASSET_PROVENANCE.md](ASSET_PROVENANCE.md).

Die 24 früheren Konzeptbilder bleiben als Quellen im Repository. Drei davon dienten als Motivvorlage für neu komponierte Grill-, Tafel- und Bougatsa-Szenen. Die sichtbaren Speiseszenen sind illustrativ und im Seitenfooter sowie direkt unter der Speisestrecke als solche bezeichnet. Eine aktuelle vollständige Karte und Preise liegen weiterhin nicht vor.

Schriften: [GFS Didot](assets/fonts/OFL-GFSDidot.txt) für die griechisch-lateinische Editorial-Typografie und [Roboto Variable](assets/fonts/OFL-Roboto.txt) für UI und Fließtext, beide lokal eingebunden.

## Redaktionelle Quellen

Der örtliche Hintergrund (ungefähr 2 km von Serres, Platanen, fließendes Wasser, kleine Wasserfälle) folgt dem [Tourismustext der Stadt Serres](https://www.serres.gr/toyrismos/axiotheata/ai-giannis/) und ihrem [Tourismusführer](https://tourism.serres.gr/thematikes_empiries/ai-giannis/). Eine historische Entstehung einzelner Wasserstufen ist dort nicht belegt und wird nicht behauptet.

## Noch vom Betreiber zu ergänzen

Exakter Maps-Pin, Straße/Hausnummer, Telefonnummer, Öffnungszeiten, Reservierung, vollständige Speisekarte, Preise und rechtliche Angaben. Der derzeitige Kartenlink öffnet eine Suche nach Name und Ort. Das Restaurant-JSON-LD enthält nur den bestätigten Namen und die Ortsregion.
