(async () => {
  const departments = [
    {
      id: 'fussball',
      number: '01',
      category: 'BALLSPORT',
      icon: '⚽',
      title: 'Fußball',
      description: 'Fußball prägt die Geschichte der SG Hattenhof. Der Verein tritt mit Senioren-, Alter-Herren- und Jugendmannschaften an. Spielplan, Kader und Tabellen werden über den Hessischen Fußballverband veröffentlicht.',
      training: 'Nach Absprache',
      location: 'Sportanlage Am Rippberg',
      email: 'fussball@sg-hattenhof.de',
      page: 'fussball.html',
      pageLabel: 'Spielplan, Tabelle & Kader',
      image: 'assets/images/chronik/mannschaft-2019-800.webp',
      imageAlt: 'Fußballmannschaft der SG Hattenhof',
      imageWidth: 640,
      imageHeight: 427,
    },
    {
      id: 'tennis',
      number: '02',
      category: 'RÜCKSCHLAGSPIEL',
      icon: '🎾',
      title: 'Tennis',
      description: 'Die Tennisabteilung wurde 1993 gegründet und 1994 in den Verein aufgenommen. 71 Gründungsmitglieder errichteten bis 1996 zwei Tennisplätze mit Kunstrasenbelag. Heute trainieren Kinder und Jugendliche mit der Tennisschule Möller; sechs Juniorenmannschaften nehmen am Spielbetrieb teil.',
      training: 'Jugendtraining mit der Tennisschule Möller · Zeiten auf Anfrage',
      location: 'Zwei Plätze am Rippberg',
      email: 'tennis@sg-hattenhof.de',
      image: 'assets/images/sportstaetten/sportanlage-4-800.webp',
      imageAlt: 'Tennisplätze der SG Hattenhof',
      imageWidth: 800,
      imageHeight: 600,
    },
    {
      id: 'tischtennis',
      number: '03',
      category: 'MANNSCHAFTSSPORT',
      icon: '🏓',
      title: 'Tischtennis',
      description: 'Die Tischtennisabteilung besteht seit 1967. Heute gehen drei Herrenmannschaften an den Start. Training und Punktspiele finden in der Turnhalle der Grundschule Hattenhof statt. Gastspieler sind ohne Voranmeldung willkommen.',
      details: [
        { label: 'Training', value: 'Mittwoch · 19:00–22:00 Uhr (außer Schulferien)' },
        { label: 'Kontakt', value: 'Frank Bug · 06655/749441' },
        { label: 'Mannschaftsführer', value: '1. Mannschaft: Björn Meuer<br>2. Mannschaft: Horst Sauerwein<br>3. Mannschaft: Adrian Marx' }
      ],
      email: 'frank.bug@freenet.de',
      location: 'Turnhalle Grundschule Hattenhof',
      links: [
        { label: 'Tabelle 1. Mannschaft (Bezirksliga Gr. 2)', url: 'https://www.mytischtennis.de/click-tt/HeTTV/26--27/ligen/Bezirksliga_Gr._2/gruppe/519021/tabelle/gesamt' },
        { label: 'Tabelle 2. Mannschaft (1. Kreisklasse Gr. 2)', url: 'https://www.mytischtennis.de/click-tt/HeTTV/26--27/ligen/1._Kreisklasse_Gr._2/gruppe/519158/tabelle/gesamt' },
        { label: 'Tabelle 3. Mannschaft (3. Kreisklasse Gr. 2)', url: 'https://www.mytischtennis.de/click-tt/HeTTV/26--27/ligen/3._Kreisklasse_Gr._2/gruppe/519460/tabelle/gesamt' }
      ],
      achievements: [
        '2026 – Meisterschaft der 1. Mannschaft in der Bezirksklasse mit Aufstieg',
        '2025 – Vizemeisterschaft der 2. Mannschaft in der 1. Kreisklasse',
        '2025 – Meisterschaft der 3. Mannschaft in der 3. Kreisklasse mit Aufstieg',
        '2024 – Vizemeisterschaft der 1. Mannschaft in der Bezirksklasse mit Aufstieg',
        '2024 – Vizemeisterschaft der 2. Mannschaft in der 2. Kreisklasse',
        '2024 – Bildung einer 3. Herrenmannschaft',
        '2020 – Vizemeisterschaft der 1. Mannschaft in der Bezirksklasse',
        '2017 – Vizemeister in der Kreisliga mit Aufstieg',
        '2017 – Bildung einer 2. Herrenmannschaft',
        '2016 – Bezirkspokalsieger und Hessenpokalsieger der 1. Kreisklasse',
        '2016 – Verleihung des „Ehrenpreis Sport“ für außergewöhnliche Leistungen',
        '2016 – Vizemeister in der 1. Kreisklasse mit Aufstieg',
        '2015 – Kreispokalsieger der 1. Kreisklasse',
        '2010 – Meister der 2. Kreisklasse mit Aufstieg',
        '2009 – Meister der 3. Kreisklasse und Kreismannschaftsmeister mit Aufstieg'
      ],
      image: 'assets/images/abteilungen/tischtennis-800.webp',
      imageAlt: 'Tischtennis der SG Hattenhof',
      imageWidth: 800,
      imageHeight: 544,
    },
    {
      id: 'gymnastik',
      number: '04',
      category: 'FITNESS & BEWEGUNG',
      icon: '◉',
      title: 'Damengymnastik',
      description: 'Hast Du Lust, etwas für Deine Fitness zu tun? Zu jung oder zu alt gibt es bei uns nicht. Wir sind eine humorvolle, motivierte Gruppe und freuen uns über Neuzugänge. Jede ist herzlich willkommen. Nach dem Aufwärmen mit Musik folgt eine Stunde mit wechselnden Schwerpunkten: Bauch-Beine-Po, Wirbelsäulengymnastik, Herz-Kreislauf-Training, Aerobic, Pilates und Yoga. Schau doch mal rein!',
      details: [
        { label: 'Training', value: 'Montag · 19:30–20:30 Uhr (außer Schulferien)' },
        { label: 'Leitung', value: 'Diana Weß' }
      ],
      location: 'Sporthalle Grundschule Hattenhof',
      email: 'damengymnastik@sg-hattenhof.de',
      image: 'assets/images/abteilungen/gymnastik-800.webp',
      imageAlt: 'Damengymnastik der SG Hattenhof',
      imageWidth: 800,
      imageHeight: 550,
    },
    {
      id: 'kinderturnen',
      number: '05',
      category: 'KINDER & JUGEND',
      icon: '✳',
      title: 'Kinderturnen',
      description: 'Bewegung ist ein grundlegendes Element in der Entwicklung eines Kindes. Beim Kinderturnen sollen die Kinder Spaß an der Bewegung erfahren, Neues ausprobieren und spielerisch Selbstbewusstsein, Körperkraft, Gleichgewicht und soziales Verhalten entwickeln.',
      details: [
        { label: 'Dienstag', value: '15:15–15:45 · ab 3 Jahren (ab 2 mit Elternteil)<br>15:45–16:30 · ab 4 Jahren<br>16:30–17:15 · Grundschulkinder' },
        { label: 'Leitung', value: 'Tanja Ruppel' },
        { label: 'Kontakt', value: 'Jürgen Ruppel · 0176-81771791' }
      ],
      email: 'juergen.ruppel@sg-hattenhof.de',
      location: 'Turnhalle Grundschule Hattenhof',
      image: 'assets/images/abteilungen/kinderturnen-800.webp',
      imageAlt: 'Kinderturnen der SG Hattenhof',
      imageWidth: 800,
      imageHeight: 532,
    },
    {
      id: 'volleyball',
      number: '06',
      category: 'MANNSCHAFTSSPORT',
      icon: '🏐',
      title: 'Volleyball',
      description: 'Die Volleyballer treffen sich freitags in der Turnhalle der Grundschule Hattenhof. Bis zu 18 Spielerinnen und Spieler im Alter von 16 bis 25 Jahren trainieren von 19:45 bis 22:00 Uhr. Neben Pritschen und Baggern werden auch strategische Spielzüge und Teamwork geübt. Interessierte aller Altersklassen und Erfahrungsgrade dürfen gerne dem Training beiwohnen.',
      details: [
        { label: 'Training', value: 'Freitag · 19:45–22:00 Uhr' },
        { label: 'Alter', value: '16–25 Jahre · bis zu 18 Spieler' }
      ],
      location: 'Sporthalle Grundschule Hattenhof',
      email: 'volleyball@sg-hattenhof.de',
      image: 'assets/images/abteilungen/volleyball-800.webp',
      imageAlt: 'Volleyballteam der SG Hattenhof',
      imageWidth: 772,
      imageHeight: 600,
      note: 'Die Volleyballer nehmen an Turnieren in Buttlar, Hünfeld und Hattenhof teil.'
    }
  ];

  const timeline = [
    { year: '1919', text: 'Am 6. Juli wird der Fußballklub „Victoria“ Hattenhof gegründet.' },
    { year: '1920', text: 'Der Verein tritt unter dem Namen Sportverein 1919 auf.' },
    { year: '1967', text: 'Die Abteilungen Gymnastik und Tischtennis werden gegründet.' },
    { year: '1973/74', text: 'Eintragung als SG Schwarz-Weiss Hattenhof 1919/45 e.V.; Eröffnung der Sportanlage Am Rippberg.' },
    { year: '1993/96', text: 'Die Tennisabteilung entsteht. Zwei Plätze werden 1996 eröffnet.' },
    { year: '2019', text: 'Die SG Hattenhof feiert ihr 100-jähriges Vereinsjubiläum.' }
  ];

  function normalizeDetails(dept) {
    const items = (dept.details || []).map((detail) => ({ ...detail }));

    if (!items.some((detail) => detail.label === 'Training')) {
      const tuesday = items.find((detail) => detail.label === 'Dienstag');
      if (tuesday) tuesday.label = 'Training';
    }
    if (!items.some((detail) => detail.label === 'Training')) {
      items.unshift({ label: 'Training', value: dept.training || 'Nach Absprache' });
    }

    const mail = `<a href="mailto:${dept.email}">${dept.email}</a>`;
    const contact = items.find((detail) => detail.label === 'Kontakt');
    if (contact) {
      if (!contact.value.includes(dept.email)) {
        contact.value = `${contact.value} · ${mail}`;
      }
    } else {
      items.push({ label: 'Kontakt', value: mail });
    }

    if (dept.location && !items.some((detail) => detail.label === 'Ort')) {
      items.push({ label: 'Ort', value: dept.location });
    }

    const order = ['Training', 'Kontakt', 'Ort', 'Leitung'];
    const sorted = [];
    for (const label of order) {
      const index = items.findIndex((detail) => detail.label === label);
      if (index >= 0) sorted.push(items.splice(index, 1)[0]);
    }
    return sorted.concat(items);
  }


  function renderDepartmentsDetail() {
    const container = document.getElementById('departments-detail-grid');
    if (!container) return;
    
    container.innerHTML = departments.map(dept => `
      <article class="dept-detail-card${dept.image ? ' has-image' : ''}">
        ${dept.image ? `<div class="dept-detail-media"><img src="${dept.image}" alt="${dept.imageAlt}" width="${dept.imageWidth}" height="${dept.imageHeight}" loading="lazy" decoding="async"></div>` : ''}
        <div class="dept-detail-header">
          <span>${dept.number} / ${dept.category}</span>
          <b>${dept.icon}</b>
        </div>
        <h3>${dept.title}</h3>
        <p>${dept.description}</p>
        <div class="dept-detail-meta">
          ${normalizeDetails(dept).map(d => `<span><b>${d.label}</b><span class="dept-detail-value">${d.value}</span></span>`).join('')}
        </div>
        ${dept.page ? `<div class="dept-links"><a class="dept-page-link" href="${dept.page}">${dept.pageLabel} →</a></div>` : ''}
        ${dept.links ? `<div class="dept-links">${dept.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join('')}</div>` : ''}
        ${dept.achievements ? `<details class="dept-achievements"><summary>Erfolge der Abteilung</summary><ul>${dept.achievements.map(a => `<li>${a}</li>`).join('')}</ul></details>` : ''}
        ${dept.note ? `<p class="small-note">${dept.note}</p>` : ''}
      </article>
    `).join('');
  }

  function renderTimeline() {
    const container = document.getElementById('timeline');
    if (!container) return;
    
    container.innerHTML = timeline.map(item => `
      <div>
        <b>${item.year}</b>
        <p>${item.text}</p>
      </div>
    `).join('');
  }

  function initFussball() {
    const frameMinHeight = 96;
    const frameMaxHeight = 2400;

    function resizeFrame(frame) {
      if (!frame) return;
      let doc = null;
      try {
        doc = frame.contentDocument;
      } catch (error) {
        doc = null;
      }
      if (!doc || !doc.body) {
        frame.style.height = '';
        return;
      }
      const bodyStyle = doc.defaultView.getComputedStyle(doc.body);
      const paddingBottom = parseFloat(bodyStyle.paddingBottom) || 0;
      let contentBottom = 0;
      for (const child of doc.body.children) {
        if (child.tagName === 'SCRIPT') continue;
        const bottom = child.offsetTop + child.offsetHeight;
        if (bottom > contentBottom) contentBottom = bottom;
      }
      const contentHeight = contentBottom + paddingBottom;
      if (!contentHeight) return;
      frame.style.height = `${Math.min(Math.max(contentHeight, frameMinHeight), frameMaxHeight)}px`;
    }

    function scheduleFrameResize(frame) {
      resizeFrame(frame);
      try {
        if (frame.contentDocument?.fonts?.ready) {
          frame.contentDocument.fonts.ready.then(() => resizeFrame(frame)).catch(() => {});
        }
      } catch (error) {
        // Cross-origin widget2 iframes cannot be measured.
      }
      window.setTimeout(() => resizeFrame(frame), 250);
    }

    window.addEventListener('message', (event) => {
      if (event.origin !== 'https://www.fussball.de') return;
      const data = event.data;
      if (!data || data.type !== 'setHeight' || !data.container) return;
      const frame = [...document.querySelectorAll('.fbde-frame')].find((candidate) => {
        if (!candidate.src.includes(`/target/${data.container}/`)) return false;
        try {
          return candidate.contentWindow === event.source;
        } catch (error) {
          return false;
        }
      });
      if (!frame) return;
      const height = parseInt(data.value, 10);
      if (Number.isFinite(height) && height > 0) {
        frame.style.height = `${height}px`;
      }
    });

    document.querySelectorAll('.fbde-frame').forEach((frame) => {
      frame.addEventListener('load', () => scheduleFrameResize(frame));
      scheduleFrameResize(frame);
    });

    const youthSelect = document.getElementById('youth-team');
    const youthFrame = document.getElementById('youth-frame');
    const youthGroup = youthFrame ? youthFrame.closest('.fbde-team') : null;
    const youthTabs = youthGroup ? [...youthGroup.querySelectorAll('.fbde-tab')] : [];
    let youthView = 'spielplan';

    function youthUrl() {
      if (!youthSelect || !youthFrame) return '';
      return youthSelect.selectedOptions[0]?.dataset[youthView] || '';
    }

    function setYouthFrame() {
      if (!youthFrame) return;
      const url = youthUrl();
      if (url) youthFrame.src = url;
      const team = youthSelect?.selectedOptions[0]?.textContent.trim() || 'Jugendmannschaft';
      const view = youthTabs.find(t => t.dataset.view === youthView)?.textContent.trim() || '';
      youthFrame.title = `${view} ${team}`;
    }

    document.querySelectorAll('.fbde-tabs').forEach(group => {
      const frame = group.parentElement.querySelector('.fbde-frame');
      if (!frame) return;
      const tabs = [...group.querySelectorAll('.fbde-tab')];

      tabs.forEach((btn, index) => {
        btn.tabIndex = btn.classList.contains('active') ? 0 : -1;
        const activate = () => {
          tabs.forEach(b => {
            const active = b === btn;
            b.classList.toggle('active', active);
            b.setAttribute('aria-selected', String(active));
            b.tabIndex = active ? 0 : -1;
          });

          if (btn.dataset.src) {
            frame.src = btn.dataset.src;
            frame.title = btn.dataset.title || frame.title;
          } else if (btn.dataset.view && group.parentElement.id === 'jugend') {
            youthView = btn.dataset.view;
            setYouthFrame();
          }
        };
        btn.addEventListener('click', activate);
        btn.addEventListener('keydown', (event) => {
          if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
          event.preventDefault();
          const dir = event.key === 'ArrowRight' ? 1 : -1;
          const next = tabs[(index + dir + tabs.length) % tabs.length];
          next.focus();
          next.click();
        });
      });
    });

    if (youthSelect) {
      youthSelect.addEventListener('change', setYouthFrame);
      setYouthFrame();
    }
  }

  async function loadNews() {
    try {
      const response = await fetch('assets/data/news.json');
      if (!response.ok) throw new Error('Failed to load news');
      const data = await response.json();
      renderNews(data);
    } catch (error) {
      console.warn('Could not load news.json, using fallback:', error);
      renderFallbackNews();
    }
  }

  function renderNewsCard(item, options = {}) {
    const { featured = false, fallback = false } = options;
    const dateText = item.date ? formatDate(item.date) : (item.dateLabel || '');
    const datetime = item.date ? ` datetime="${item.date}"` : '';
    const media = featured
      ? `<div class="news-image" style="${fallback ? 'background:var(--black2)' : `background-image:url('${item.image}')`}" role="img" aria-label="${item.title}"></div>`
      : fallback
        ? `<div class="news-image-wrapper"><div class="news-image" style="background:var(--black2)"></div></div>`
        : `<div class="news-image-wrapper"><img class="news-image" src="${item.image}" alt="${item.title}" width="800" height="500" loading="lazy"></div>`;
    return `
        <article${featured ? '' : ' class="news-card"'}>
          ${media}
          <div class="news-content">
            <div class="news-meta">
              <time class="news-date"${datetime}>${dateText}</time>
              <span class="news-tag">${item.category}</span>
            </div>
            <h3>${item.title}</h3>
            <p>${item.excerpt}</p>
            <a href="${item.url}" class="news-link">${item.linkLabel || 'Weiterlesen'} <span>→</span></a>
          </div>
        </article>`;
  }

  function renderNews(data) {
    const featured = data.featured;
    const latest = data.latest || [];

    const featuredContainer = document.getElementById('news-featured');
    if (featured && featuredContainer) {
      featuredContainer.innerHTML = renderNewsCard(featured, { featured: true });
    }

    const gridContainer = document.getElementById('news-grid');
    if (gridContainer) {
      gridContainer.innerHTML = latest.slice(0, 3).map(item => renderNewsCard(item)).join('');
    }
  }

  function renderFallbackNews() {
    const featuredContainer = document.getElementById('news-featured');
    if (featuredContainer) {
      featuredContainer.innerHTML = renderNewsCard({
        title: 'Einladung zur Jahreshauptversammlung',
        dateLabel: '08. FEBRUAR 2026',
        category: 'VEREINSLEBEN',
        excerpt: 'Zur Jahreshauptversammlung 2026 wurden alle Mitglieder eingeladen. Weitere Informationen findest du in den offiziellen Vereinsinformationen.',
        url: 'news.html#jahreshauptversammlung-2026',
        linkLabel: 'Weitere Neuigkeiten'
      }, { featured: true, fallback: true });
    }

    const gridContainer = document.getElementById('news-grid');
    if (gridContainer) {
      gridContainer.innerHTML = renderNewsCard({
        title: '100 Jahre SG Hattenhof',
        dateLabel: 'VEREINSCHRONIK',
        category: 'JUBILÄUM',
        excerpt: '2019 blickte der Verein mit einer Festschrift auf ein Jahrhundert Sport- und Vereinsgeschichte zurück.',
        url: '#chronik',
        linkLabel: 'Zur Vereinschronik'
      }, { fallback: true });
    }
  }

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase();
  }

  function initMobileMenu() {
    const btn = document.querySelector('.menu');
    const nav = document.querySelector('#nav');
    if (!btn || !nav) return;
    
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    });
    
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function updateYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          target.focus({ preventScroll: true });
        }
      });
    });
  }

  renderDepartmentsDetail();
  renderTimeline();
  loadNews();
  initMobileMenu();
  initFussball();
  updateYear();
  initSmoothScroll();
})();