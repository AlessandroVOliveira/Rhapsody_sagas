(function () {
  const mapContainer = document.getElementById("map-container");
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
  const langToggle = document.getElementById("lang-toggle");

  let activeAlbum = "all";
  let activeLocation = null;
  let currentLang = "pt";

  function t(key) {
    return UI_STRINGS[currentLang][key] || UI_STRINGS.pt[key] || key;
  }

  const LOCATIONS_BY_ID = {};
  LOCATIONS.forEach((l) => (LOCATIONS_BY_ID[l.id] = l));

  // Índice: locationId -> [songs]
  const songsByLocation = {};
  SONGS.forEach((s) => {
    if (!s.local) return;
    (songsByLocation[s.local] = songsByLocation[s.local] || []).push(s);
  });

  function findSong(albumId, faixa) {
    return SONGS.find((s) => s.album === albumId && s.faixa === faixa);
  }

  // ---- Idioma ----
  langToggle.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  function setLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    langToggle.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });

    closePanel();
    renderOffmap();
    renderTimeline();
    renderDiscography();
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
  Object.values(ALBUMS).forEach((album) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.dataset.album = album.id;
    btn.innerHTML = `<img src="${album.cover}" alt=""><span>${album.nome}</span>`;
    btn.addEventListener("click", () => setActiveAlbum(album.id));
    albumFilter.appendChild(btn);
  });
  albumFilter.querySelector('[data-album="all"]').addEventListener("click", () => setActiveAlbum("all"));

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
  const markerEls = {};
  const markerCountEls = {};
  LOCATIONS.forEach((loc) => {
    const songs = songsByLocation[loc.id] || [];
    if (songs.length === 0) return;

    const marker = document.createElement("button");
    marker.className = "marker";
    marker.style.left = loc.x + "%";
    marker.style.top = loc.y + "%";
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

  function openPanelWithSongs(title, songs, emptyHint) {
    panelTitle.textContent = title;
    panelHint.style.display = songs.length ? "none" : "block";
    panelHint.textContent = emptyHint || t("panelEmptyGeneric");

    panelSongs.innerHTML = "";
    songs
      .slice()
      .sort((a, b) => ALBUMS[a.album].ano - ALBUMS[b.album].ano || a.faixa - b.faixa)
      .forEach((song) => panelSongs.appendChild(renderSongCard(song)));
    openPanel();
  }

  function renderSongCard(song) {
    const album = ALBUMS[song.album];
    const card = document.createElement("div");
    card.className = "song-card";
    card.innerHTML = `
      <img src="${album.cover}" alt="${album.nome}">
      <div class="song-body">
        <div class="song-album">${album.nome} (${album.ano}) · ${t("trackWord")} ${song.faixa}</div>
        <h4>${song.titulo}</h4>
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

      li.innerHTML = `
        <div class="chapter-album">${album.nome} (${album.ano})</div>
        <h3>${chapter.titulo[currentLang]}</h3>
        <p class="chapter-text">${chapter.texto[currentLang]}</p>
        <div class="chapter-songs">${chipsHtml}</div>
      `;
      timelineEl.appendChild(li);

      li.querySelectorAll(".song-chip").forEach((chip) => {
        chip.addEventListener("click", () => {
          openPanelWithSongs(chapter.titulo[currentLang], chapterSongs);
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

  updateMarkerVisibility();
  closePanel();
  renderOffmap();
  renderTimeline();
  renderDiscography();
})();
