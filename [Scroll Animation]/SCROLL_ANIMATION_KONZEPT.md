# Scroll Animation · Η ΛΙΜΝΗ

**Status:** Konzept und zwölf Start-/Stopp-Frames für Desktop und Mobil vorbereitet. Die Scroll-Animation selbst ist noch nicht in die Website eingebaut. Bildfolge und Herkunft: [FRAMES.md](FRAMES.md).

**Stand:** 9. Oktober 2026

**Quelle und späterer Veröffentlichungsweg:** `o-some/taverne` → vorhandener GitHub-Pages-Workflow. Keine ChatGPT-Sites-Aktion.

## Leitidee

**„Vom Wasser an den gemeinsamen Tisch.“** Der Weg des Gastes wird in drei klaren Bildübergängen erzählt: das fließende Wasser des echten Orts → die Hitze des Grills → das servierte Essen → Menschen, die den Moment miteinander teilen. Das soll wie eine kurze, sorgfältig komponierte Filmszene wirken, nicht wie ein technischer Bildfilter. Die Holzbrücke, das X-Geländer, die Platanen und der kleine Süßwasserteich bleiben als wiederkehrende Ortsmerkmale sichtbar. Keine Meeresküste, keine hohen Fantasiewasserfälle, keine aufgesetzten Wellenlinien.

**Bevorzugte Lösung:** drei Übergänge in *einer* Scroll-Sequenz. Die ersten beiden sind die Pflichtstrecke; der dritte ist die emotionale Auflösung, sofern ein glaubwürdiges Menschenmotiv in der realen Umgebung gelingt. Lieber zwei überzeugende Übergänge als ein schwacher dritter.

## Platz auf der bestehenden Seite

Die Sequenz gehört **nach** `<section class="taverna-chapter" id="taverna">` und **vor** den regulären Speiseabschnitt. Dort steht derzeit `<section class="interlude journey-transition">`, die bereits Orts- und Grillbild mischt. Sie wird zur Startstelle der neuen Sequenz. Das bestehende `<section class="food-chapter" id="food">` mit Tischbild, interaktiven Speisen und den Kursen bleibt als inhaltliche Fortsetzung erhalten.

Die heutige Reihenfolge zeigt das große Tischbild vor der ausführlichen Grillstrecke. Bei der Umsetzung den Einstieg in `food-chapter` so arrangieren, dass die Scroll-Sequenz die Dramaturgie **Wasser → Grill → Servieren → Miteinander** trägt und unmittelbar danach die Speisen erkundet werden können. Das Grillmotiv nicht direkt noch einmal in derselben Größe wiederholen; in der späteren „01 / FIRE“-Strecke als anderer Ausschnitt oder Detail verwenden. Bestehende Texte, Sprachen und Galerie-Funktionen erhalten.

## Storyboard und Bildregie

| Phase | Scroll-Erlebnis | Bild und Übergang | Kurzer Text im Bild |
| --- | --- | --- | --- |
| **01 · Wasser wird Wärme** | Die ruhige Bachperspektive füllt die Bühne. Mit dem Scrollen ziehen helle Wasserreflexe nach unten; an denselben Bildpunkten erscheinen schwache Glutpunkte. Die Brücke bleibt kurz als Orientierung stehen. | Start: `assets/limni/stream-bridge.webp` oder `weir-editorial.webp`. Ende: `grill-editorial.webp` in **passgenau neu kadrierter** Variante. Kein einfacher Vollbild-Crossfade: ein maskierter Match-Cut nutzt Wasserlinien und Glut als gemeinsame Form. | EL: `Από το νερό, στη φωτιά.` / EN: `From water to fire.` / DE: `Vom Wasser zum Feuer.` |
| **02 · Vom Grill auf die Tafel** | Aus der Grillglut steigt Wärme auf. Eine Zange hebt den letzten Spieß ins Bild; ihre Bewegung führt zum Teller. Auf derselben Bewegungsachse löst ein gedeckter Tisch den Grill ab. Die Kamera wird ruhiger, sobald das Essen steht. | Grillmotiv + **neue Zwischenaufnahme** „Spieß wird auf großzügige Platte gelegt“ + `feast-editorial.webp`. Perspektive, Tageslicht, Geländer und Tischkante müssen übereinstimmen. Eine echte Übergangsaufnahme ist wichtiger als ein aggressiver Digital-Morph. | EL: `Ό,τι ψήνεται, μοιράζεται.` / EN: `Made to be shared.` / DE: `Für alle am Tisch.` |
| **03 · Der Tisch bekommt Leben** | Ein oder zwei Hände reichen ein Gericht weiter; anschließend öffnet sich der Blick auf eine kleine Runde in der Taverne. Das Essen bleibt Hauptmotiv, die Menschen geben Maßstab und Wärme. Die Bewegung endet in einem stabilen Bild, bevor normale Seiteninhalte weiterlaufen. | **Neues Motiv nötig:** 3–4 erwachsene Gäste am Tisch, natürlich und ungestellt, mit sichtbarem Teich und X-Holzgeländer. Hände/Profil/Rückenansicht sind besser als frontale Stockfoto-Gesichter. Alternative bei unpassendem Motiv: nur Hände, Geschirr und gemeinsames Anstoßen, ohne Gesichter. | EL: `Κάθισε μαζί μας.` / EN: `Stay at the table.` / DE: `Bleib noch ein bisschen.` |

**Bildrhythmus:** Wasser kühl und weich → Grill warm und konzentriert → Tafel hell und appetitlich → Menschen ruhig und nah. Grün und tiefes Wasserblau bleiben im Hintergrund; Weiß von Tischdecke, Keramik und Typografie setzt die griechische Helligkeit. Keine Feuerwand, kein fliegendes Essen, kein auffälliges Partikelsystem.

## Asset-Brief für die Herstellung

1. **Vorhandenes nutzen:** `stream-bridge.webp`/`weir-editorial.webp`, `grill-editorial.webp`, `feast-editorial.webp`, `terrace-editorial.webp`, `visit-table.webp` und die Kundenreferenzen laut `ASSET_PROVENANCE.md`. Ortsmerkmale und Größenverhältnisse sorgfältig angleichen.
2. **Vorbereitete Keyframes:** Die Grill-zu-Platte-Zwischenaufnahme, das Menschenmotiv sowie abgestimmte Wasser- und Grillframes liegen jetzt unter `frames/desktop/` und `frames/mobile/`. Die Dateien sind als visuelle Start-/Stopp-Punkte gedacht; die Übergänge sind noch nicht programmiert.
3. **Produktionsvorgabe:** dieselbe Kamera-/Fluchtachse, gleiche Geländerhöhe, gleiche Tischoberfläche und konsistentes spätes Tageslicht. Desktop-Crops ca. 16:9, Mobile-Crops ca. 4:5 bzw. 9:16 separat prüfen; wichtige Hände, Speisen und Brückenmerkmale bleiben im sicheren Mittelbereich.
4. **Wahrhaftigkeit:** Neue Food- und Menschenbilder sind illustrative Kompositionen, solange keine freigegebenen echten Aufnahmen vorliegen. Die vorhandene Bildkennzeichnung der Seite muss diese Motive mit erfassen. Keine Darstellung als dokumentierte Gäste, aktuelle Speisekarte oder bestätigter Serviceablauf.
5. **Lieferform:** zwölf optimierte WebP-Standbilder in `frames/` mit Dateinamen und Herkunft in [FRAMES.md](FRAMES.md). Bei der späteren Einbindung die sichtbaren Motive zusätzlich in `ASSET_PROVENANCE.md` dokumentieren. Ein Video ist nicht erforderlich, es sei denn, ein echter Gerätetest zeigt einen klaren Vorteil.

## Technische Regie für die spätere Umsetzung

- **Grundstruktur:** Alle vier Stationen als verständliches HTML mit echtem Text und Bildern anlegen. Die Geschichte bleibt ohne JavaScript lesbar. Der Scroll-Effekt ist eine Verbesserung darüber, keine Voraussetzung für Inhalte oder Navigation.
- **Fortschritt:** Die neue Story erhält einen eigenen lokalen Scroll-Fortschritt von 0 bis 1. Übergänge 01, 02 und 03 liegen ungefähr bei 0–0,32 / 0,32–0,68 / 0,68–1. Exakte Werte erst mit fertigen Bildern und Testgeräten einstellen. Vorwärts- und Rückwärtsscrollen müssen spiegelbildlich funktionieren; beim Stoppen bleibt die Szene stabil.
- **Rendering:** Bestehendes `script.js`-Muster mit `requestAnimationFrame` und passivem Scroll-Listener wiederverwenden. Nur aktive Bildschichten mit `transform` und `opacity` bewegen. Eine weiche, begrenzte Maske kann den Wasser-Glut-Match-Cut unterstützen; keine teure Vollbild-Shader-Kette. Das vorhandene `src/water-three.js` nicht für den gesamten Ablauf zweckentfremden: Die optionale Wasser-Lichtschicht bleibt ein Akzent und darf die Bilder nicht verdecken.
- **Mobile First:** Auf schmalen Bildschirmen höchstens eine kurze Sticky-Bühne für die Kernmomente; die Seite darf nicht über mehrere leere Bildschirmhöhen „festhängen“. Texte und CTA bleiben außerhalb bewegter Hotspots gut lesbar. Touch-Scroll bleibt nativ und ungebremst. Bei schwächerem Gerät oder `saveData` die Animation auf einfache, hochwertige Bildwechsel reduzieren.
- **Barrierefreiheit:** `prefers-reduced-motion: reduce` zeigt die Stationen ohne Scroll-Morph als statische, gut getrennte Bild/Text-Folge. Semantische Überschriften und Alt-Texte in EL/EN/DE; dekorative Ebenen `aria-hidden`. Kontrast auf jedem Einzelbild prüfen. Keine Information nur über Bewegung vermitteln.
- **Performance:** Erstes Storybild rechtzeitig laden, Folgebilder nur in Sichtnähe; feste Bildformate gegen Layoutsprünge. Auf Mobilgeräten Scroll-Animation nur aktivieren, wenn Bilder geladen sind. Kein neues Framework und keine weitere große Laufzeitabhängigkeit für drei Übergänge.

## Dateien, die die Umsetzung berühren würde

| Datei/Bereich | Geplante Arbeit |
| --- | --- |
| `index.html` | Bestehende `journey-transition` in die Story-Bühne einbinden/ersetzen; semantische Szenen und ggf. Speise-Einstieg passend anordnen. |
| `styles.css` | Desktop- und Mobile-Layouts, Bildmasken, Lesbarkeit, Fallback und reduzierte Bewegung. |
| `script.js` | Lokaler, umkehrbarer Scroll-Fortschritt; vorhandene Sprachlogik um kurze Szenentexte ergänzen. |
| `assets/limni/` und `ASSET_PROVENANCE.md` | Neue Zwischen- und Menschenmotive, mobile Zuschnitte, Herkunft und Kennzeichnung. |
| `check.mjs` | Prüfen, dass Szenen, drei Sprachfassungen, Poster/Fallback und Assets vorhanden sind. |
| `.github/workflows/pages.yml` | Voraussichtlich **keine Änderung**; der vorhandene GitHub-Pages-Build reicht. |

## Abnahme vor einer Veröffentlichung

1. Einen Git-Rückfallpunkt vor Code- und Asset-Änderungen anlegen; die neue Geschichte zuerst lokal prüfen.
2. Story bei 320, 360, 390, 430, 768 px und Desktop im echten Vorwärts- **und** Rückwärtsscroll prüfen: keine Sprünge, kein horizontaler Überlauf, keine verdeckten Texte oder abgeschnittenen Teller/Hände.
3. Auf einem echten iPhone in Safari mindestens einen vollständigen Durchlauf prüfen; zusätzlich Android/Chrome, wenn verfügbar. Browser-Emulation allein gilt nicht als Geräteabnahme.
4. EL/EN/DE, langsames Laden, deaktiviertes JavaScript, `prefers-reduced-motion`, `saveData` und Tastaturnavigation prüfen. Originale Speise-Hotspots, Galerie, Film, Menü und Kartenlink müssen weiter funktionieren.
5. Bildwelt redaktionell abnehmen: erkennbarer Ort, appetitliches Essen, glaubwürdige Gäste, korrekte Kennzeichnung illustrativer Motive. Erst danach über den bestehenden GitHub-Pages-Workflow veröffentlichen und die Live-Seite prüfen.

## Kompakter Handoff für Google Re

> Arbeite ausschließlich im GitHub-Repository `o-some/taverne`. Setze das Konzept in dieser Datei als **eine** mobile-first Scroll-Erzählung zwischen `taverna-chapter` und `food-chapter` um: Wasser am echten Ort → Grill mit Souvlakia → großzügig servierte Tafel → gemeinsamer Moment. Nutze die vorhandenen Bilder und die Herkunftsdokumentation; erstelle nur die fehlenden, ortstreuen Zwischen- und Menschenmotive. Der Übergang soll über Bildkomposition und wenige maskierte Match-Cuts entstehen, nicht über Wellenlinien oder harte Bildschnitte. Erhalte EL/EN/DE, alle bestehenden Funktionen, statische Fallbacks und `prefers-reduced-motion`. Prüfe zuerst mobil und rückwärts scrollend, erstelle einen Rückfallpunkt und veröffentliche erst nach Bild- und Gerätetest über den vorhandenen GitHub-Pages-Workflow. Nimm keine ChatGPT-Sites-Aktion vor.
