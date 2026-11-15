#!/usr/bin/env node
/**
 * Aktualisiert die fussball.de-Snapshots für fussball.html.
 *
 * Die fussball.de-AJAX-Fragmente enthalten nur den relevanten Inhalt
 * (Spielplan, Tabelle, Kader) und nicht die komplette fussball.de-Seite.
 * Sie werden mit dem fussball.de-Stylesheet und lokal gespeicherten
 * Obfuscation-Schriften als eigenständige HTML-Dateien abgelegt.
 *
 * Aufruf:
 *   node scripts/update-football.js
 *
 * Die erzeugten Dateien liegen unter assets/football/.
 */

const fs = require('fs/promises');
const path = require('path');
const https = require('https');

const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'assets', 'football');
const FONT_DIR = path.join(ROOT, 'assets', 'fonts');
const CSS_URL = 'https://www.fussball.de/static/por/8.92.0.1/css/style.css';
const SEASON = '2627';

const TEAMS = {
  m1: {
    label: '1. Mannschaft',
    matchplan: 'https://www.fussball.de/ajax.team.matchplan/-/mode/PAGE/prev-season-allowed/false/show-filter/false/team-id/0313E7BSQ4000000VS5489BRVVV10ESU',
    squad: 'https://www.fussball.de/ajax.team.squad/-/mode/PAGE/order-by/1/saison/2627/show-filter/true/team-id/0313E7BSQ4000000VS5489BRVVV10ESU'
  },
  m2: {
    label: '2. Mannschaft',
    squad: 'https://www.fussball.de/ajax.team.squad/-/mode/PAGE/order-by/1/saison/2627/show-filter/true/team-id/02BB8NKPIK000000VS5489B2VVDBHQQ7'
  },
  jugend: {
    a: {
      label: 'A-Junioren',
      matchplan: 'https://www.fussball.de/ajax.team.matchplan/-/mode/PAGE/team-id/02M5ABDATS000000VS5489B2VUHJA7LU',
      table: 'https://www.fussball.de/ajax.team.table/-/saison/2627/staffel/031F3UEV4G000004VS5489BTVUS470OH-G/team-id/02M5ABDATS000000VS5489B2VUHJA7LU',
      squad: 'https://www.fussball.de/ajax.team.squad/-/mode/PAGE/order-by/1/saison/2627/show-filter/true/team-id/02M5ABDATS000000VS5489B2VUHJA7LU'
    },
    b: {
      label: 'B-Junioren',
      matchplan: 'https://www.fussball.de/ajax.team.matchplan/-/mode/PAGE/team-id/02M5AF2B6G000000VS5489B2VUHJA7LU',
      table: 'https://www.fussball.de/ajax.team.table/-/saison/2627/staffel/031HUEJ8J4000003VS5489BUVVKNMR0J-G/team-id/02M5AF2B6G000000VS5489B2VUHJA7LU',
      squad: 'https://www.fussball.de/ajax.team.squad/-/mode/PAGE/order-by/1/saison/2627/show-filter/true/team-id/02M5AF2B6G000000VS5489B2VUHJA7LU'
    },
    c: {
      label: 'C-Junioren',
      matchplan: 'https://www.fussball.de/ajax.team.matchplan/-/mode/PAGE/team-id/02M5AJCGS8000000VS5489B2VUHJA7LU',
      table: 'https://www.fussball.de/ajax.team.table/-/saison/2627/staffel/031FK1PDD4000004VS5489BTVUS470OH-G/team-id/02M5AJCGS8000000VS5489B2VUHJA7LU',
      squad: 'https://www.fussball.de/ajax.team.squad/-/mode/PAGE/order-by/1/saison/2627/show-filter/true/team-id/02M5AJCGS8000000VS5489B2VUHJA7LU'
    },
    d: {
      label: 'D-Junioren',
      matchplan: 'https://www.fussball.de/ajax.team.matchplan/-/mode/PAGE/team-id/02M5AOKCI0000000VS5489B2VUHJA7LU',
      table: 'https://www.fussball.de/ajax.team.table/-/saison/2627/staffel/031ECKIUDO000007VS5489BTVUS470OH-G/team-id/02M5AOKCI0000000VS5489B2VUHJA7LU',
      squad: 'https://www.fussball.de/ajax.team.squad/-/mode/PAGE/order-by/1/saison/2627/show-filter/true/team-id/02M5AOKCI0000000VS5489B2VUHJA7LU'
    },
    e: {
      label: 'E-Junioren',
      matchplan: 'https://www.fussball.de/ajax.team.matchplan/-/mode/PAGE/team-id/02M5ATNPSS000000VS5489B2VUHJA7LU',
      table: 'https://www.fussball.de/ajax.team.table/-/saison/2627/staffel/031G39EHN8000004VS5489BTVVG7L386-G/team-id/02M5ATNPSS000000VS5489B2VUHJA7LU',
      squad: 'https://www.fussball.de/ajax.team.squad/-/mode/PAGE/order-by/1/saison/2627/show-filter/true/team-id/02M5ATNPSS000000VS5489B2VUHJA7LU'
    },
    f: {
      label: 'F-Junioren',
      matchplan: 'https://www.fussball.de/ajax.team.matchplan/-/mode/PAGE/team-id/02M5B14G00000000VS5489B2VUHJA7LU',
      table: 'https://www.fussball.de/ajax.team.table/-/saison/2627/staffel/031DG3O5NO000000VS5489BUVUR5FS5A-C/team-id/02M5B14G00000000VS5489B2VUHJA7LU',
      squad: 'https://www.fussball.de/ajax.team.squad/-/mode/PAGE/order-by/1/saison/2627/show-filter/true/team-id/02M5B14G00000000VS5489B2VUHJA7LU'
    },
    g: {
      label: 'G-Junioren',
      matchplan: 'https://www.fussball.de/ajax.team.matchplan/-/mode/PAGE/team-id/02M5FMBLKS000000VS5489B2VUHJA7LU',
      table: 'https://www.fussball.de/ajax.team.table/-/saison/2627/staffel/031DGOO2NC000000VS5489BUVUR5FS5A-C/team-id/02M5FMBLKS000000VS5489B2VUHJA7LU',
      squad: 'https://www.fussball.de/ajax.team.squad/-/mode/PAGE/order-by/1/saison/2627/show-filter/true/team-id/02M5FMBLKS000000VS5489B2VUHJA7LU'
    }
  }
};

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (SG-Hattenhof website updater)',
        'Accept': 'text/html'
      }
    }, res => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        reject(new Error(`${url} -> HTTP ${res.statusCode}`));
        return;
      }
      let data = '';
      res.setEncoding('utf8');
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(30000, () => req.destroy(new Error(`${url} -> timeout`)));
  });
}

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (SG-Hattenhof website updater)'
      }
    }, res => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        reject(new Error(`${url} -> HTTP ${res.statusCode}`));
        return;
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    });
    req.on('error', reject);
    req.setTimeout(30000, () => req.destroy(new Error(`${url} -> timeout`)));
  });
}

function obfuscationIds(fragment) {
  return [...new Set([...fragment.matchAll(/data-obfuscation="([^"]+)"/g)].map(m => m[1]))];
}

function wrap(fragment, ids) {
  const stand = new Date().toLocaleDateString('de-DE');
  const fontCss = ids.map(id => `
@font-face {
  font-family: font-${id};
  src: url('../fonts/${id}.woff') format('woff');
}
.results-c-${id} { font-family: font-${id} !important; }`).join('\n');

  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="generator" content="scripts/update-football.js">
<link rel="stylesheet" href="${CSS_URL}">
<style>
${fontCss}
html, body { margin: 0; padding: 0; background: #fff; }
body { padding: 14px 16px; font: 13px/1.45 Arial, Helvetica, sans-serif; color: #20272c; overflow-x: auto; }
.fbde-snapshot .table-container { border: 0; box-shadow: none; margin: 0; }
.fbde-snapshot .team-matchplan-table-nav,
.fbde-snapshot .filter-toggle,
.fbde-snapshot .filter-content form,
.fbde-snapshot .table-meta,
.fbde-snapshot .legend,
.fbde-snapshot .team_squad_tab_group,
.fbde-snapshot .profile-edit,
.fbde-snapshot .print,
.fbde-snapshot .no-print,
.fbde-snapshot .wm-container,
.fbde-snapshot [data-wm-type],
.fbde-snapshot .wm-iframe { display: none !important; }
.fbde-snapshot .filter-content { display: block !important; }
.fbde-snapshot .filter-message { display: block !important; margin: 10px 0; }
.fbde-snapshot .filter-message .headline { display: block !important; }
.fbde-snapshot .filter-message .headline { margin: 0; font-weight: 600; }
.fbde-snapshot .filter-message .button { display: none !important; }
.fbde-snapshot table { width: 100%; border-collapse: collapse; }
.fbde-snapshot th,
.fbde-snapshot td { padding: 7px 8px; border-bottom: 1px solid #e4e9ec; text-align: left; vertical-align: top; }
.fbde-snapshot th { background: #f4f7f8; font-weight: 700; }
.fbde-snapshot a { color: #008c8c; text-decoration: none; }
.fbde-snapshot .player-name { font-weight: 600; }
.fbde-snapshot-date { margin: 0 0 8px; color: #65717a; font-size: 11px; }
</style>
</head>
<body class="fbde fbde-snapshot">
<div class="fbde-snapshot-date">Datenstand: ${stand}</div>
${fragment}
<script>
document.querySelectorAll('[data-obfuscation]').forEach(function (el) {
  el.classList.add('results-c-' + el.dataset.obfuscation);
});
document.querySelectorAll('.filter-message .button').forEach(function (el) {
  el.style.setProperty('display', 'none', 'important');
});
if (!document.querySelector('.filter-message') && document.querySelectorAll('table tr').length <= 1) {
  var div = document.createElement('div');
  div.className = 'team-squad-filter-nav table-filter';
  div.innerHTML = '<div class="filter-message"><div class="row"><p class="headline">Keine Einträge vorhanden.</p></div></div>';
  document.body.appendChild(div);
}
</script>
</body>
</html>
`;
}

async function writeSnapshot(file, label, fragment, ids) {
  const target = path.join(OUT_DIR, file);
  await fs.writeFile(target, wrap(fragment, ids), 'utf8');
  console.log(`  ${file} (${label})`);
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.mkdir(FONT_DIR, { recursive: true });

  const jobs = [];
  jobs.push(['m1-spielplan.html', TEAMS.m1.label, TEAMS.m1.matchplan]);
  jobs.push(['m1-kader.html', TEAMS.m1.label, TEAMS.m1.squad]);
  jobs.push(['m2-kader.html', TEAMS.m2.label, TEAMS.m2.squad]);

  for (const [key, team] of Object.entries(TEAMS.jugend)) {
    jobs.push([`jugend-${key}-spielplan.html`, team.label, team.matchplan]);
    jobs.push([`jugend-${key}-tabelle.html`, team.label, team.table]);
    jobs.push([`jugend-${key}-kader.html`, team.label, team.squad]);
  }

  await writeSnapshot(
    'm1-tabelle.html',
    'Tabelle 1. Mannschaft',
    '<div class="team-squad-filter-nav table-filter"><div class="filter-message"><div class="row"><p class="headline">Keine Einträge vorhanden.</p></div></div></div>',
    []
  );

  const fontCache = new Map();

  for (const [file, label, url] of jobs) {
    const fragment = await fetchText(url);
    const ids = obfuscationIds(fragment);
    for (const id of ids) {
      if (fontCache.has(id)) continue;
      const fontUrl = `https://www.fussball.de/export.fontface/-/format/woff/id/${id}/type/font`;
      const font = await fetchBuffer(fontUrl);
      await fs.writeFile(path.join(FONT_DIR, `${id}.woff`), font);
      fontCache.set(id, true);
      console.log(`  font ${id}.woff`);
    }
    await writeSnapshot(file, label, fragment, ids);
  }

  console.log('Fertig. Snapshots in assets/football/.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});