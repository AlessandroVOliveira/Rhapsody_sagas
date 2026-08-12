(function () {
  const mapContainer = document.getElementById("map-container");
  const mapImg = document.getElementById("map-img");
  const panel = document.getElementById("panel");
  const panelTitle = document.getElementById("panel-title");
  const panelHint = document.getElementById("panel-hint");
  const panelSongs = document.getElementById("panel-songs");
  const panelClose = document.getElementById("panel-close");
  const albumFilter = document.getElementById("album-filter");
  const offmapSongs = document.getElementById("offmap-songs");
  const sectionTabs = document.getElementById("section-tabs");
  const timelineEl = document.getElementById("timeline");
  const discographyEl = document.getElementById("discography");
  const extrasSection = document.getElementById("extras");
  const extrasListEl = document.getElementById("extras-list");
  const chronologyEl = document.getElementById("chronology");
  const codexGridEl = document.getElementById("codex-grid");
  const codexFilterEl = document.getElementById("codex-filter");
  const langToggle = document.getElementById("lang-toggle");
  const sagaToggle = document.getElementById("saga-toggle");
  const mapToggle = document.getElementById("map-toggle");
  const siteSubtitleEl = document.getElementById("site-subtitle");
  const allFilterBtn = albumFilter.querySelector('[data-album="all"]');

  let currentLang = "pt";
  let currentSaga = null;
  let currentMapId = null;
  let ALBUMS = {};
  let SONGS = [];
  let STORY = [];
  const LOCATIONS_BY_ID = {};
  LOCATIONS.forEach((l) => (LOCATIONS_BY_ID[l.id] = l));
  let songsByLocation = {};

  let activeAlbum = "all";
  let activeLocation = null;
  let activeCodexCategoria = "all";

  // Índice global de álbuns/faixas das duas sagas — usado pelo Codex, que independe da saga ativa.
  const ALBUMS_ALL = Object.assign({}, ...SAGAS.map((s) => s.ALBUMS));
  const SONGS_ALL = [].concat(...SAGAS.map((s) => s.SONGS));

  function t(key) {
    return UI_STRINGS[currentLang][key] || UI_STRINGS.pt[key] || key;
  }

  function findSong(albumId, faixa) {
    return SONGS.find((s) => s.album === albumId && s.faixa === faixa);
  }

  function buildLocationIndex(songs) {
    const index = {};
    songs.forEach((s) => {
      if (!s.local) return;
      (index[s.local] = index[s.local] || []).push(s);
    });
    return index;
  }

  // Cada saga tem um logo ilustrado próprio (assets/logos/logo{lang}-{chave}.webp),
  // usado como botão de seleção — substitui o antigo título grande em texto.
  const SAGA_LOGO_KEY = { emerald_sword: "emerald", dark_secret: "dark" };
  function sagaLogoSrc(saga, lang) {
    return `assets/logos/logo${lang}-${SAGA_LOGO_KEY[saga.id] || saga.id}.webp`;
  }

  // ---- Saga ativa ----
  sagaToggle.innerHTML = "";
  SAGAS.forEach((saga) => {
    const btn = document.createElement("button");
    btn.className = "saga-logo-btn";
    btn.dataset.saga = saga.id;
    btn.setAttribute("aria-label", saga.meta.nome[currentLang]);
    btn.innerHTML = `<img class="saga-logo-img" src="${sagaLogoSrc(saga, currentLang)}" alt="${saga.meta.nome[currentLang]}">`;
    btn.addEventListener("click", () => applySaga(saga.id));
    sagaToggle.appendChild(btn);
  });

  function applySaga(id) {
    if (currentSaga && currentSaga.id === id) return;
    currentSaga = SAGAS.find((s) => s.id === id) || SAGAS[0];
    ALBUMS = currentSaga.ALBUMS;
    SONGS = currentSaga.SONGS;
    STORY = currentSaga.STORY;
    songsByLocation = buildLocationIndex(SONGS);

    if (!currentMapId) currentMapId = currentSaga.meta.mapaPadrao;
    setMapImage(currentMapId);

    document.documentElement.dataset.sagaTheme = currentSaga.meta.tema;
    sagaToggle.querySelectorAll("button").forEach((b) => {
      b.classList.toggle("active", b.dataset.saga === currentSaga.id);
    });

    activeAlbum = "all";
    renderHeader();
    renderAlbumFilter();
    renderMarkers();
    updateMarkerVisibility();
    closePanel();
    renderOffmap();
    renderTimeline();
    renderDiscography();
    renderExtras();

    try { localStorage.setItem("rhapsodySaga", currentSaga.id); } catch (e) {}
  }

  // ---- Mapa ativo ----
  // Independente da saga: a Enchanted Lands pintada é só o centro do Known World ampliado, então
  // dá pra ver os locais de qualquer saga em qualquer mapa (loc.pos.<mapa> é null onde o local
  // ainda não foi localizado/calibrado naquele mapa).
  mapToggle.innerHTML = "";
  MAPS.forEach((map) => {
    const btn = document.createElement("button");
    btn.dataset.map = map.id;
    btn.textContent = map.nome[currentLang];
    btn.addEventListener("click", () => applyMap(map.id));
    mapToggle.appendChild(btn);
  });

  function setMapImage(id) {
    const map = MAPS.find((m) => m.id === id) || MAPS[0];
    mapImg.src = map.img;
    mapImg.alt = map.nome[currentLang];
    mapToggle.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b.dataset.map === id));
  }

  function applyMap(id) {
    if (currentMapId === id) return;
    currentMapId = id;
    setMapImage(id);
    renderMarkers();
    updateMarkerVisibility();
    closePanel();
    try { localStorage.setItem("rhapsodyMap", id); } catch (e) {}
  }

  function renderHeader() {
    const nome = currentSaga.meta.nome[currentLang];
    const subtitulo = currentSaga.meta.subtitulo[currentLang].replace("{n}", Object.keys(ALBUMS).length);
    siteSubtitleEl.textContent = subtitulo;
    document.title = nome + " — Rhapsody of Fire";
  }

  // ---- Idioma ----
  langToggle.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  // Atualiza rótulos que dependem do idioma mas não passam por data-i18n
  // (logos da saga e nomes dos mapas) — usado tanto ao trocar de idioma
  // quanto na carga inicial, quando o idioma vem do localStorage.
  function refreshLangLabels() {
    sagaToggle.querySelectorAll("button").forEach((b) => {
      const saga = SAGAS.find((s) => s.id === b.dataset.saga);
      const nome = saga.meta.nome[currentLang];
      b.setAttribute("aria-label", nome);
      const img = b.querySelector(".saga-logo-img");
      img.src = sagaLogoSrc(saga, currentLang);
      img.alt = nome;
    });
    mapToggle.querySelectorAll("button").forEach((b) => {
      b.textContent = MAPS.find((m) => m.id === b.dataset.map).nome[currentLang];
    });
    if (currentMapId) mapImg.alt = MAPS.find((m) => m.id === currentMapId).nome[currentLang];
  }

  function setLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    langToggle.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
    refreshLangLabels();

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });

    renderHeader();
    closePanel();
    renderAlbumFilter();
    renderOffmap();
    renderTimeline();
    renderDiscography();
    renderExtras();
    renderChronology();
    renderCodex();

    try { localStorage.setItem("rhapsodyLang", lang); } catch (e) {}
  }

  // ---- Abas de seção (Mapa / História / Discografia) ----
  sectionTabs.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      sectionTabs.querySelectorAll(".tab-btn").forEach((b) => b.classList.toggle("active", b === btn));
      document.querySelectorAll(".view").forEach((v) => v.classList.add("hidden"));
      document.getElementById("view-" + btn.dataset.view).classList.remove("hidden");
      closePanel();
    });
  });

  // ---- Filtro de álbuns ----
  function renderAlbumFilter() {
    albumFilter.querySelectorAll(".filter-btn:not([data-album='all'])").forEach((b) => b.remove());
    Object.values(ALBUMS).forEach((album) => {
      const btn = document.createElement("button");
      btn.className = "filter-btn";
      btn.dataset.album = album.id;
      btn.innerHTML = `<img src="${album.cover}" alt=""><span>${album.nome}</span>`;
      btn.addEventListener("click", () => setActiveAlbum(album.id));
      albumFilter.appendChild(btn);
    });
    albumFilter.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.album === activeAlbum);
    });
  }
  allFilterBtn.addEventListener("click", () => setActiveAlbum("all"));

  function setActiveAlbum(albumId) {
    activeAlbum = albumId;
    albumFilter.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.album === albumId);
    });
    updateMarkerVisibility();
    if (activeLocation) renderPanel(activeLocation);
    renderOffmap();
  }

  function songMatchesFilter(song) {
    return activeAlbum === "all" || song.album === activeAlbum;
  }

  // ---- Marcadores no mapa ----
  // Ponto ancorado na coordenada da cidade; nome e contador se estendem à direita dele.
  let markerEls = {};
  let markerCountEls = {};

  function renderMarkers() {
    mapContainer.querySelectorAll(".marker").forEach((el) => el.remove());
    markerEls = {};
    markerCountEls = {};

    LOCATIONS.forEach((loc) => {
      const pos = loc.pos[currentMapId];
      if (!pos) return;
      const songs = songsByLocation[loc.id] || [];
      if (songs.length === 0) return;

      const marker = document.createElement("button");
      marker.className = "marker";
      marker.style.left = pos.x + "%";
      marker.style.top = pos.y + "%";
      marker.setAttribute("aria-label", loc.nome);
      marker.innerHTML = `
        <span class="marker-dot"></span>
        <span class="marker-count">${songs.length}</span>
      `;
      marker.addEventListener("click", () => {
        activeLocation = loc.id;
        renderPanel(loc.id);
        markerEls_updateSelected(loc.id);
        openPanel();
      });

      mapContainer.appendChild(marker);
      markerEls[loc.id] = marker;
      markerCountEls[loc.id] = marker.querySelector(".marker-count");
    });
  }

  function markerEls_updateSelected(selectedId) {
    Object.entries(markerEls).forEach(([id, el]) => {
      el.classList.toggle("selected", id === selectedId);
    });
  }

  // Contador reflete só as músicas do álbum ativo (ou o total, quando "Todos"/"All" está selecionado).
  function updateMarkerVisibility() {
    LOCATIONS.forEach((loc) => {
      const el = markerEls[loc.id];
      if (!el) return;
      const filteredSongs = (songsByLocation[loc.id] || []).filter(songMatchesFilter);
      el.classList.toggle("dim", filteredSongs.length === 0);
      markerCountEls[loc.id].textContent = filteredSongs.length;
    });
  }

  // ---- Painel lateral ----
  function openPanel() {
    panel.classList.add("open");
  }
  function closePanel() {
    panel.classList.remove("open");
    activeLocation = null;
    markerEls_updateSelected(null);
    panelTitle.textContent = t("panelDefaultTitle");
    panelHint.style.display = "block";
    panelHint.textContent = t("panelDefaultHint");
    panelSongs.innerHTML = "";
  }
  panelClose.addEventListener("click", closePanel);

  function renderPanel(locationId) {
    const loc = LOCATIONS.find((l) => l.id === locationId);
    const songs = (songsByLocation[locationId] || []).filter(songMatchesFilter);
    openPanelWithSongs(loc.nome, songs, t("panelEmptyAlbum"));
  }

  function openPanelWithSongs(title, songs, emptyHint, albumsOverride) {
    const albums = albumsOverride || ALBUMS;
    panelTitle.textContent = title;
    panelHint.style.display = songs.length ? "none" : "block";
    panelHint.textContent = emptyHint || t("panelEmptyGeneric");

    panelSongs.innerHTML = "";
    songs
      .slice()
      .sort((a, b) => albums[a.album].ano - albums[b.album].ano || a.faixa - b.faixa)
      .forEach((song) => panelSongs.appendChild(renderSongCard(song, albums)));
    openPanel();
  }

  function renderSongCard(song, albumsOverride) {
    const album = (albumsOverride || ALBUMS)[song.album];
    const card = document.createElement("div");
    card.className = "song-card";
    const traducaoHtml = song.traducao
      ? `<p class="song-translation">${song.traducao[currentLang]}</p>`
      : "";
    card.innerHTML = `
      <img src="${album.cover}" alt="${album.nome}">
      <div class="song-body">
        <div class="song-album">${album.nome} (${album.ano}) · ${t("trackWord")} ${song.faixa}</div>
        <h4>${song.titulo}</h4>
        ${traducaoHtml}
        <p>${song.resumo[currentLang]}</p>
        <div class="song-links">
          <a href="${song.letraUrl}" target="_blank" rel="noopener">${t("lyricsLink")}</a>
          <a href="${album.spotify}" target="_blank" rel="noopener">${t("spotifyLink")}</a>
        </div>
      </div>`;
    return card;
  }

  // ---- Faixas sem localização ----
  function renderOffmap() {
    const songs = SONGS.filter((s) => !s.local && songMatchesFilter(s));
    offmapSongs.innerHTML = "";
    songs
      .sort((a, b) => ALBUMS[a.album].ano - ALBUMS[b.album].ano || a.faixa - b.faixa)
      .forEach((song) => offmapSongs.appendChild(renderSongCard(song)));
  }

  // ---- História completa (timeline) ----
  function renderTimeline() {
    timelineEl.innerHTML = "";
    STORY.forEach((chapter) => {
      const album = ALBUMS[chapter.album];
      const li = document.createElement("li");
      li.className = "chapter";
      li.style.setProperty("--album-color", album.cor);

      const chapterSongs = chapter.faixas
        .map((ref) => findSong(ref.album, ref.faixa))
        .filter(Boolean);

      const chipsHtml = chapterSongs
        .map((s) => {
          const a = ALBUMS[s.album];
          return `<button class="song-chip" data-album="${s.album}" data-faixa="${s.faixa}">
            <img src="${a.cover}" alt="">${s.titulo}
          </button>`;
        })
        .join("");

      const citacaoHtml = chapter.citacao
        ? `<blockquote class="chapter-quote">${linkifyCodexMentions(chapter.citacao.texto[currentLang], currentLang)}<cite>— ${linkifyCodexMentions(chapter.citacao.autor[currentLang], currentLang)}</cite></blockquote>`
        : "";

      const imagemHtml = chapter.imagem
        ? `<img class="chapter-img" src="${chapter.imagem}" alt="${chapter.titulo[currentLang]}" loading="lazy">`
        : "";

      li.innerHTML = `
        <div class="chapter-album">${album.nome} (${album.ano})</div>
        <h3>${chapter.titulo[currentLang]}</h3>
        ${imagemHtml}
        <p class="chapter-text">${linkifyCodexMentions(chapter.texto[currentLang], currentLang)}</p>
        ${citacaoHtml}
        <div class="chapter-songs">${chipsHtml}</div>
      `;
      timelineEl.appendChild(li);

      li.querySelectorAll(".song-chip").forEach((chip) => {
        chip.addEventListener("click", () => {
          openPanelWithSongs(chapter.titulo[currentLang], chapterSongs);
        });
      });

      li.querySelectorAll(".codex-mention").forEach((span) => {
        span.addEventListener("click", () => {
          const entry = CODEX.find((e) => e.id === span.dataset.codexId);
          if (entry) openPanelWithCodexEntry(entry);
        });
      });
    });
  }

  // ---- Discografia completa ----
  function renderDiscography() {
    discographyEl.innerHTML = "";
    Object.values(ALBUMS)
      .sort((a, b) => a.ano - b.ano)
      .forEach((album) => {
        const tracks = [];
        const seen = new Set();
        SONGS.filter((s) => s.album === album.id).forEach((s) => {
          if (seen.has(s.faixa)) return;
          seen.add(s.faixa);
          tracks.push(s);
        });
        tracks.sort((a, b) => a.faixa - b.faixa);

        const block = document.createElement("div");
        block.className = "disco-album";
        block.innerHTML = `
          <div class="disco-header">
            <img src="${album.cover}" alt="${album.nome}">
            <div>
              <h3>${album.nome}</h3>
              <div class="disco-meta">${album.ano} · ${tracks.length} ${t("tracksWord")}</div>
            </div>
            <div class="song-links"><a href="${album.spotify}" target="_blank" rel="noopener">${t("spotifyLink")}</a></div>
          </div>
          <ul class="track-list"></ul>
        `;
        const list = block.querySelector(".track-list");
        tracks.forEach((song) => {
          const loc = song.local ? LOCATIONS_BY_ID[song.local] : null;
          const row = document.createElement("li");
          row.className = "track-row";
          row.innerHTML = `
            <span class="track-num">${song.faixa}.</span>
            <span class="track-title">${song.titulo}</span>
            ${loc ? `<span class="track-loc">${loc.nome}</span>` : ""}
          `;
          row.addEventListener("click", () => openPanelWithSongs(song.titulo, [song]));
          list.appendChild(row);
        });
        discographyEl.appendChild(block);
      });
  }

  // ---- Raridades e faixas bônus ----
  function renderExtras() {
    const extras = currentSaga.EXTRAS || [];
    extrasSection.style.display = extras.length ? "" : "none";
    extrasListEl.innerHTML = "";
    extras.forEach((extra) => {
      const titulo = typeof extra.titulo === "string" ? extra.titulo : extra.titulo[currentLang];
      const card = document.createElement("div");
      card.className = "extra-card";
      card.innerHTML = `
        <div class="extra-header">
          <h4>${titulo}</h4>
          <span class="extra-origin">${extra.origem[currentLang]}</span>
        </div>
        <p>${extra.nota[currentLang]}</p>
      `;
      extrasListEl.appendChild(card);
    });
  }

  // ---- Cronologia do Mundo Conhecido (independente da saga) ----
  function renderChronology() {
    chronologyEl.innerHTML = "";
    TIMELINE.forEach((eraBlock) => {
      const section = document.createElement("div");
      section.className = "chronology-era";

      const eventsHtml = eraBlock.eventos
        .map((ev) => `
          <li class="chronology-event">
            <span class="chronology-year">${ev.ano[currentLang]}</span>
            <p>${ev.texto[currentLang]}</p>
          </li>
        `)
        .join("");

      section.innerHTML = `
        <h3>${eraBlock.era[currentLang]}</h3>
        <ol class="chronology-list">${eventsHtml}</ol>
      `;
      chronologyEl.appendChild(section);
    });
  }

  // ---- Codex (personagens, lugares, artefatos — independente da saga ativa) ----
  const CODEX_SAGA_LABEL = { warm: "codexSagaWarm", cold: "codexSagaCold", dual: "codexSagaDual" };

  codexFilterEl.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCodexCategoria = btn.dataset.categoria;
      codexFilterEl.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.toggle("active", b.dataset.categoria === activeCodexCategoria);
      });
      renderCodex();
    });
  });

  function findGlobalSong(albumId, faixa) {
    return SONGS_ALL.find((s) => s.album === albumId && s.faixa === faixa);
  }

  function renderCodex() {
    codexGridEl.innerHTML = "";
    CODEX
      .filter((entry) => activeCodexCategoria === "all" || entry.categoria === activeCodexCategoria)
      .forEach((entry) => {
        const entrySongs = entry.faixas.map((ref) => findGlobalSong(ref.album, ref.faixa)).filter(Boolean);
        const chipsHtml = entrySongs
          .map((s) => {
            const a = ALBUMS_ALL[s.album];
            return `<button class="song-chip" data-album="${s.album}" data-faixa="${s.faixa}">
              <img src="${a.cover}" alt="">${s.titulo}
            </button>`;
          })
          .join("");

        const card = document.createElement("div");
        card.className = "codex-card";
        card.innerHTML = `
          <img class="codex-card-img" src="${entry.imagem}" alt="${entry.nome[currentLang]}" loading="lazy">
          <div class="codex-card-body">
            <span class="codex-saga-badge codex-saga-${entry.saga}">${t(CODEX_SAGA_LABEL[entry.saga])}</span>
            <h3>${entry.nome[currentLang]}</h3>
            <p>${entry.descricao[currentLang]}</p>
            <div class="codex-appears-in">${t("codexAppearsIn")}</div>
            <div class="chapter-songs">${chipsHtml}</div>
          </div>
        `;
        codexGridEl.appendChild(card);

        card.querySelectorAll(".song-chip").forEach((chip) => {
          chip.addEventListener("click", () => {
            openPanelWithSongs(entry.nome[currentLang], entrySongs, null, ALBUMS_ALL);
          });
        });
      });
  }

  // ---- Menções a itens do Codex no texto da História Completa ----
  // Constrói, por idioma, a lista de termos (do mais longo para o mais curto, para que
  // frases mais específicas "ganhem" de substrings menores) que devem virar links clicáveis.
  const CODEX_MENTIONS = { pt: [], en: [] };
  CODEX.forEach((entry) => {
    ["pt", "en"].forEach((lang) => {
      ((entry.mencoes && entry.mencoes[lang]) || []).forEach((phrase) => {
        CODEX_MENTIONS[lang].push({ phrase, id: entry.id });
      });
    });
  });
  ["pt", "en"].forEach((lang) => {
    CODEX_MENTIONS[lang].sort((a, b) => b.phrase.length - a.phrase.length);
  });

  function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  const CODEX_MENTION_REGEX = {};
  ["pt", "en"].forEach((lang) => {
    const mentions = CODEX_MENTIONS[lang];
    if (!mentions.length) return;
    const pattern = mentions.map((m) => escapeRegExp(m.phrase)).join("|");
    CODEX_MENTION_REGEX[lang] = new RegExp(`(?<![\\p{L}\\p{N}])(${pattern})(?![\\p{L}\\p{N}])`, "gu");
  });
  const CODEX_MENTION_BY_PHRASE = { pt: new Map(), en: new Map() };
  ["pt", "en"].forEach((lang) => {
    CODEX_MENTIONS[lang].forEach((m) => CODEX_MENTION_BY_PHRASE[lang].set(m.phrase, m.id));
  });

  function linkifyCodexMentions(text, lang) {
    const re = CODEX_MENTION_REGEX[lang];
    if (!re || !text) return text;
    return text.replace(re, (match) => {
      const id = CODEX_MENTION_BY_PHRASE[lang].get(match);
      return `<span class="codex-mention" data-codex-id="${id}">${match}</span>`;
    });
  }

  function openPanelWithCodexEntry(entry) {
    const entrySongs = entry.faixas.map((ref) => findGlobalSong(ref.album, ref.faixa)).filter(Boolean);
    panelTitle.textContent = entry.nome[currentLang];
    panelHint.style.display = "none";
    panelSongs.innerHTML = "";
    panelSongs.appendChild(renderCodexDetail(entry, entrySongs));
    openPanel();
  }

  function renderCodexDetail(entry, entrySongs) {
    const chipsHtml = entrySongs
      .map((s) => {
        const a = ALBUMS_ALL[s.album];
        return `<button class="song-chip" data-album="${s.album}" data-faixa="${s.faixa}">
          <img src="${a.cover}" alt="">${s.titulo}
        </button>`;
      })
      .join("");

    const wrap = document.createElement("div");
    wrap.className = "codex-detail";
    wrap.innerHTML = `
      <img class="codex-detail-img" src="${entry.imagem}" alt="${entry.nome[currentLang]}">
      <span class="codex-saga-badge codex-saga-${entry.saga}">${t(CODEX_SAGA_LABEL[entry.saga])}</span>
      <p class="codex-detail-desc">${entry.descricao[currentLang]}</p>
      <div class="codex-appears-in">${t("codexAppearsIn")}</div>
      <div class="chapter-songs">${chipsHtml}</div>
    `;
    wrap.querySelectorAll(".song-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        openPanelWithSongs(entry.nome[currentLang], entrySongs, null, ALBUMS_ALL);
      });
    });
    return wrap;
  }

  // ---- Inicialização ----
  let initialLang = "pt";
  let initialSaga = SAGAS[0].id;
  let initialMap = null;
  try {
    initialLang = localStorage.getItem("rhapsodyLang") || initialLang;
    initialSaga = localStorage.getItem("rhapsodySaga") || initialSaga;
    initialMap = localStorage.getItem("rhapsodyMap");
  } catch (e) {}
  if (!MAPS.some((m) => m.id === initialMap)) initialMap = null;
  currentMapId = initialMap;

  currentLang = initialLang;
  document.documentElement.lang = initialLang === "pt" ? "pt-BR" : "en";
  langToggle.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b.dataset.lang === initialLang));
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  refreshLangLabels();

  renderChronology();
  renderCodex();

  if (!SAGAS.some((s) => s.id === initialSaga)) initialSaga = SAGAS[0].id;
  applySaga(initialSaga);
})();
