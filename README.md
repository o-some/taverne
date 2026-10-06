# Η ΛΙΜΝΗ · Taverna am Wasser

Statische Website in Griechisch, Englisch und Deutsch für die Taverne Η ΛΙΜΝΗ in Άι Γιάννης bei Serres. Das bestehende Repository `o-some/taverne` und der GitHub-Pages-Workflow bleiben die einzige Quelle und der einzige Veröffentlichungsweg.

## Lokal prüfen

```sh
node check.mjs
python3 -m http.server 8080
```

Die Seite verwendet HTML, CSS und wenig JavaScript. Es gibt kein Framework und keinen Build-Schritt. Pushes auf `main` veröffentlichen über `.github/workflows/pages.yml` auf `https://o-some.github.io/taverne/`.

## Identität und Bilder

Der Name **Η ΛΙΜΝΗ** und die Ortsbezeichnung sind auf dem vom Kunden gelieferten Material in `[Bilder Mutter]` dokumentiert. Das echte schwarz-weiße Speisekarten-Cover lieferte die typografische und grafische Richtung. Die sichtbaren Webbilder stammen aus Kundenfotos und einer vom Nutzer gelieferten Ortsreferenz. Sie wurden mit Imagegen von Handy-Oberflächen und eingeblendeten Texten befreit, als eigene Bildstrecke behutsam rekonstruiert und als WebP optimiert. Die Rekonstruktionen sind im Footer offengelegt. Die unveränderten Quellen bleiben unter `[Bilder Mutter]` und `[User Input]/Ortsreferenzen`, bearbeitete PNG-Master unter `[Website Assets]/masters` im Kundenordner. Zuordnung und Bearbeitungsbriefs: [ASSET_PROVENANCE.md](ASSET_PROVENANCE.md).

Die alten 24 Konzeptbilder bleiben aus Gründen der Projektgeschichte unter `assets/images`, werden aber von der neuen Seite nicht eingebunden. Die sichtbare Speise ist durch das Kundenfoto „σούπερ κεφτεδάκια“ belegt. Weitere Speisen und Preise werden nicht behauptet.

Schriften: [GFS Didot](assets/fonts/OFL-GFSDidot.txt) für die griechisch-lateinische Editorial-Typografie und [Roboto Variable](assets/fonts/OFL-Roboto.txt) für UI und Fließtext, beide lokal eingebunden.

## Redaktionelle Quellen

Der örtliche Hintergrund (ungefähr 2 km von Serres, Platanen, fließendes Wasser, kleine Wasserfälle) folgt dem [Tourismustext der Stadt Serres](https://www.serres.gr/toyrismos/axiotheata/ai-giannis/) und ihrem [Tourismusführer](https://tourism.serres.gr/thematikes_empiries/ai-giannis/). Eine historische Entstehung einzelner Wasserstufen ist dort nicht belegt und wird nicht behauptet.

## Noch vom Betreiber zu ergänzen

Exakter Maps-Pin, Straße/Hausnummer, Telefonnummer, Öffnungszeiten, Reservierung, vollständige Speisekarte, Preise und rechtliche Angaben. Der derzeitige Kartenlink öffnet eine Suche nach Name und Ort. Das Restaurant-JSON-LD enthält nur den bestätigten Namen und die Ortsregion.
