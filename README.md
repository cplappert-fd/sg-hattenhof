# SG Hattenhof – Website für GitHub Pages

Responsive statische Website mit HTML, CSS und JavaScript. Die Gestaltung orientiert sich an der klassischen Vereinsdarstellung der bisherigen SG-Hattenhof-Seite: Schwarz-Weiss-Auftritt, Vereinsname und Wappen-Anmutung im Kopfbereich, horizontale Hauptnavigation, großes Bildbanner, Schnellzugriffe sowie klar gegliederte Vereins- und Abteilungsinhalte. Die Umsetzung ist für Desktop, Tablet und Smartphone optimiert.

## Neu: Prominenter "Aktuelles"-Bereich

Der Bereich "Aktuelles" steht nun stärker im Vordergrund:
- **Featured Article**: Großer, bildlastiger Teaser für die wichtigste Meldung
- **News Grid**: Drei weitere aktuelle Meldungen in Karten-Layout
- **Einfache Pflege**: Inhalte werden aus `assets/data/news.json` geladen – keine Code-Änderungen nötig

## Projektstruktur

```
sg-hattenhof-website/
├── index.html                 # Startseite mit kompakten Teasern
├── abteilungen.html           # Abteilungs-Detailseite
├── fussball.html              # 1./2. Mannschaft und Jugendfußball (fussball.de-Einbindung)
├── sportstaetten.html         # Sportstätten mit Bildergalerie
├── chronik.html               # Vereinschronik mit historischen Fotos
├── vorstand.html              # Vorstand und Abteilungsleitung
├── ehrenmitglieder.html       # Ehrenmitglieder
├── satzung.html               # Vereinssatzung
├── news.html                  # Aktuelle Meldungen aus der alten Website
├── impressum.html             # Impressum und rechtliche Hinweise
├── datenschutz.html           # Datenschutzerklärung
├── assets/
│   ├── css/
│   │   └── style.css         # Vollständiges Design-System
│   ├── js/
│   │   └── main.js           # Navigation, News-Loading, Rendering
│   ├── images/
│   │   ├── sportstaetten/    # optimierte WebP-Bilder der Sportstätten
│   │   ├── abteilungen/      # optimierte WebP-Bilder der Abteilungen
│   │   ├── chronik/          # historische Mannschaftsfotos
│   │   ├── _original/        # unveränderte Originale (nicht im HTML referenziert)
│   │   ├── hero_bg.webp
│   │   ├── 20231014_1800190_web.webp
│   │   ├── news-jhv-2026-*.webp
│   │   └── news-*.svg        # Platzhalter für News-Bilder
│   └── data/
│       └── news.json         # News-Inhalte (einfach zu pflegen)
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages Auto-Deploy
├── CNAME                     # Custom Domain: sg-hattenhof.de
├── .nojekyll                 # Verhindert Jekyll-Processing
├── robots.txt                # SEO
├── sitemap.xml               # SEO
└── README.md
```

## Veröffentlichung auf GitHub Pages

### Option 1: Automatisch via GitHub Actions (empfohlen)
1. Repository auf GitHub erstellen (`sg-hattenhof-website`)
2. Code pushen: `git push origin main`
3. GitHub → Settings → Pages → Source: "GitHub Actions"
4. Workflow läuft automatisch bei jedem Push auf `main`

### Option 2: Manuell (Branch-basiert)
1. Code in `main` Branch pushen
2. GitHub → Settings → Pages → Deploy from a branch → Branch `main`, Folder `/ (root)`
3. Warten bis Deployment abgeschlossen ist

### Custom Domain einrichten
1. `CNAME` Datei liegt bereits bei (`sg-hattenhof.de`)
2. GitHub → Settings → Pages → Custom domain: `sg-hattenhof.de` eintragen
3. DNS bei Domain-Provider:
   - A-Records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - CNAME für `www`: `<username>.github.io`
4. "Enforce HTTPS" aktivieren

## Inhalt pflegen

### News aktualisieren (`assets/data/news.json`)
```json
{
  "featured": { ... },     // Hauptartikel (groß)
  "latest": [ ... ]        // 3 weitere Karten
}
```
Felder: `title`, `excerpt`, `date` (ISO), `category`, `image`, `url`

### Fußball & Jugend
`fussball.html` bindet fussball.de für 1. Mannschaft, 2. Mannschaft und die Jugendmannschaften der JSG Rippberg ein.
- **1. Mannschaft:** Spielplan, Tabelle und Kader werden als lokale Snapshots aus den offiziellen fussball.de-AJAX-Fragmenten geladen (`assets/football/m1-spielplan.html`, `assets/football/m1-tabelle.html`, `assets/football/m1-kader.html`). Grund: Für die 1. Mannschaft existiert kein gültiger `widget2`-Schlüssel; die alte Mannschaftsseite zeigt zusätzlich den kompletten fussball.de-Seitenrahmen. Die Saison 2026/27 enthält aktuell nur Freundschaftsspiele; Spielplan und Tabelle zeigen daher „Keine Einträge vorhanden.“.
- **2. Mannschaft:** Spielplan und Tabelle nutzen weiterhin die offiziellen `widget2`-Iframes mit den Schlüsseln `02JMLT19QO000000VUM1DNOIVU1DR179` (Spielplan) und `02JMLSTS8O000000VUM1DNOPVUHRQHQU` (Tabelle). Der Kader wird als Snapshot `assets/football/m2-kader.html` geladen, da kein Kader-Widget-Schlüssel vorliegt.
- **Jugendmannschaften:** Auswahl über `#youth-team`; `initFussball()` in `assets/js/main.js` setzt die iframe-Quelle je nach Tab auf `assets/football/jugend-<team>-<ansicht>.html` (Spielplan, Tabelle, Kader). Die A-, B-, C-, E-, F- und G-Junioren haben keinen veröffentlichten Kader; das Snapshot zeigt dann den fussball.de-Hinweis „nicht zur Veröffentlichung freigegeben“. Die D-Junioren haben einen veröffentlichten Kader.
- **Snapshots aktualisieren:** `node scripts/update-football.js` lädt die offiziellen fussball.de-AJAX-Fragmente, speichert sie unter `assets/football/` und lädt die dynamischen Obfuscation-Fonts nach `assets/fonts/`. Es gibt kein automatisches Update; nach Saisonwechsel oder Datenkorrekturen das Skript erneut ausführen. Die Snapshots enthalten oben den Hinweis „Datenstand: TT.MM.JJJJ“. Nach dem Neuerzeugen die `?v=`-Query der Snapshot-URLs in `fussball.html` erhöhen, damit Browser alte Snapshots nicht aus dem Cache verwenden.
- **Iframe-Höhen:** `initFussball()` misst bei lokalen Snapshots die Inhaltshöhe und passt die iframe-Höhe an (Minimum 96px, Maximum 2400px). Kurze Snapshots mit „Keine Einträge vorhanden.“ oder „nicht zur Veröffentlichung freigegeben“ werden dadurch nicht auf die feste Standardhöhe gestreckt. Die offiziellen `widget2`-Iframes der 2. Mannschaft melden ihre Höhe per `postMessage` (`setHeight`); `initFussball()` hört darauf und setzt die iframe-Höhe entsprechend.
- Die fussball.de-AJAX-Endpunkte sind durch CORS für Browser-`fetch` gesperrt; die Snapshots werden daher serverseitig vom Skript erzeugt und nicht direkt im Browser abgefragt. Die Obfuscation-Fonts müssen lokal mit den Snapshots ausgeliefert werden, sonst erscheinen Spielernamen als unlesbare Zeichen.

### Abteilungen & Chronik
In `assets/js/main.js` im Array `departments` bzw. `timeline` bearbeiten. Die vollständige Jahreschronik steht statisch in `chronik.html`; die Abteilungsdetails (Trainingszeiten, Kontakte, Erfolge, Tabellenlinks) werden aus `main.js` gerendert.

### News
Die alte Website enthielt zwei vollständige Meldungen (Jahreshauptversammlung 2026 und neue Tischtennis-Trikots). `news.html` enthält zusätzlich die sechs aktuellen Meldungen aus `assets/data/news.json` als Volltext; die Startseite zeigt die Jahreshauptversammlung und die drei neuesten Meldungen als Teaser.

### Bilder pflegen
- Echte Fotos liegen als WebP in `assets/images/sportstaetten/`, `assets/images/abteilungen/` und `assets/images/chronik/`.
- Die unveränderten Originale liegen in `assets/images/_original/` und werden nicht direkt im HTML referenziert.
- Empfohlen: WebP, max. 1200px Breite (Panorama 1600px), mit `srcset` und `loading="lazy"`.
- Hero-Bilder: In CSS `.hero-photo` bzw. den seitenspezifischen Klassen `.hero-sportstaetten`, `.hero-chronik`, `.hero-vorstand`, `.hero-ehrenmitglieder`, `.hero-satzung` und `.hero-news` anpassen.
- Quellen der historischen Bilder: alte Joomla-Website `sg-hattenhof.de`, Seiten „Sportstätten“, „Abteilungen“ und „Chronik“.

## Bekannte Lücken

- Die alte `termine.html` enthielt nur einen Monatskalender ohne hinterlegte Termine; es wurde daher keine Terminseite übernommen.
- Die alte Fußballseite „Jugendfußball“ war ohne Berechtigung nicht abrufbar; Kader-, Spielplan- und Tabellenseiten waren leer oder verlinkten nach extern.
- Die 1. Mannschaft hat aktuell keine Ligatabelle; `assets/football/m1-tabelle.html` zeigt den formatierten Hinweis „Keine Einträge vorhanden.“. Der Tabelle-Tab bleibt als Leerzustand sichtbar und muss bei einer künftigen Ligatabelle manuell angepasst werden.
- Die 2. Mannschaft hat keinen eindeutigen Kader-Widget-Schlüssel; der Kader wird als lokaler Snapshot `assets/football/m2-kader.html` geladen.
- Für die 1. Mannschaft und die Jugendmannschaften existieren keine gültigen `widget2`-Schlüssel; Spielplan, Tabelle und Kader werden als lokale fussball.de-Snapshots eingebunden und müssen bei Saisonwechsel mit `scripts/update-football.js` neu erzeugt werden.
- Die JHV-Einladung 2026 ist als Bilddokument übernommen; der Text im Dokument wurde nicht maschinell ausgelesen.

## Vor Livegang prüfen

- [ ] Trainingszeiten, Ansprechpartner, E-Mails mit Abteilungsleitungen abgleichen
- [ ] Impressum & Datenschutzerklärung rechtlich prüfen
- [ ] Fußball-Widgets prüfen: Saison, Team-IDs, Schlüssel und Iframe-Darstellung (insbesondere JSG Rippberg)
- [ ] Externe fussball.de-Iframes datenschutzrechtlich prüfen und ggf. Consent-Lösung ergänzen
- [ ] Hero-Bilder lokal prüfen (die Seite verwendet bereits lokale WebP-Dateien)
- [ ] Alt-Texte und Bildunterschriften der neuen Fotos prüfen
- [ ] Bildrechte für die historischen Fotos klären
- [ ] Vorstand, Ehrenmitglieder und Satzung auf Aktualität prüfen
- [ ] News-Bilder und Meldungstexte in `news.html`/`news.json` auf Aktualität prüfen
- [ ] Alt-Texte für Barrierefreiheit prüfen
- [ ] Lighthouse/PageSpeed testen
- [ ] Joomla-Backup sichern
- [ ] DNS umstellen, altes Hosting erst NACH erfolgreicher Umstellung kündigen

## Technische Details

- **Kein Build-Schritt nötig** – reine statische Dateien
- **CSS Custom Properties** für einfaches Theming
- **Vanilla JS** (keine Dependencies)
- **Responsive**: Mobile First, Breakpoints bei 1024px, 900px, 680px, 480px
- **Barrierefreiheit**: Skip-Link, ARIA-Labels, semantisches HTML, Fokus-Styles
- **Performance**: `loading="lazy"` für Bilder, `preconnect` für Google Fonts
- **SEO**: Meta-Tags, Open Graph, Canonical, Sitemap, robots.txt

## Browser-Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15.4+ (aspect-ratio, :focus-visible)
- Mobile Safari/Chrome aktuelle Versionen

## Lizenz & Credits

- Schriften: Barlow Condensed & Inter (Google Fonts, SIL OFL)
- Icons: Unicode-Emojis (System-Fonts)
- Code: MIT License – freie Verwendung für SG Hattenhof
- Recherche: Öffentliche Vereinsseiten, Impressum, Chronik, Festschrift 2019