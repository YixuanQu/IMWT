/* ============================================================
   LMML — Rome Cinema Walk
   Tour page logic: map, navigation, switchers, theme, and SPA tabs.
   Requires: data.js (the `locations` array) and Leaflet.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- State ---------- */
  const state = {
    currentId: getStartId(),   
    theme: getStartTheme(),
    detailLevel: "mid",        
    audienceTone: "adult",     
    competence: "average",     
    narrativeId: getStartNarrative(), // "timeline" | "city-tour" | "art-tour" | "cinema-tour"
    overviewId: null,          // stop highlighted on the Map page
    appearanceIndex: 0,        
    currentView: getStartView() // "map-overview" | "tour" | "about" | "documentation" | "disclaimer"
  };

  /* Read ?loc=N from the URL (defaults to 1) */
  function getStartId() {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get("loc");
    if (raw === null) return null; // no explicit loc: let the active narrative pick its own first stop
    const id = parseInt(raw, 10);
    return isNaN(id) || id < 1 || id > locations.length ? null : id;
  }

  /* Read ?view=X from the URL (defaults to "map-overview") */
  function getStartView() {
    const params = new URLSearchParams(window.location.search);
    const view = params.get("view") || "map-overview";
    const validViews = ["map-overview", "tour", "about"];
    return validViews.includes(view) ? view : "map-overview";
  }

  /* Read ?theme=X from the URL (defaults to "classic") */
  function getStartTheme() {
    const params = new URLSearchParams(window.location.search);
    const th = params.get("theme") || "classic";
    return ["expressionist", "classic", "new-wave", "digital"].includes(th) ? th : "classic";
  }

  /* Keep the address bar in step with the current view, route, stop and theme, so that a
     browser refresh (or a copied link) reopens exactly where the visitor is. replaceState
     avoids filling the Back history; it is wrapped in try/catch because some browsers
     restrict it on file:// pages. */
  function syncUrl() {
    try {
      const params = new URLSearchParams();
      params.set("view", state.currentView);
      params.set("narrative", state.narrativeId);
      if (state.currentId !== null) params.set("loc", state.currentId);
      params.set("theme", state.theme);
      history.replaceState(null, "", "?" + params.toString());
    } catch (e) { /* ignore */ }
  }

  /* Read ?narrative=X from the URL (defaults to "timeline") — which route the Tour page follows */
  function getStartNarrative() {
    const params = new URLSearchParams(window.location.search);
    const n = params.get("narrative") || "timeline";
    return ["timeline", "city-tour", "art-tour", "cinema-tour"].includes(n) ? n : "timeline";
  }

  /* ---------- Elements ---------- */
  const tourEl     = document.getElementById("tour");
  const contentEl  = document.getElementById("content");
  const navCurrent = document.getElementById("navCurrent");
  const navTotal   = document.getElementById("navTotal");

  /* ---------- Leaflet Maps (Overview + Tour) ---------- */
  let overviewMap = null;
  let tourMap = null;
  const markers = {};   // id -> L.Marker (for tourMap)
  const overviewMarkers = {};   // id -> L.Marker (for the standalone Map page)

  function markerIcon(id, isActive) {
    const html =
      '<div style="' +
        'width:32px;height:32px;' +
        'background:' + (isActive ? "var(--neutral-900)" : "#fff") + ';' +
        'color:' + (isActive ? "#fff" : "var(--neutral-900)") + ';' +
        'border:2px solid var(--neutral-900);' +
        'border-radius:50%;' +
        'display:flex;align-items:center;justify-content:center;' +
        'font-size:13px;font-weight:700;' +
        'box-shadow:0 2px 4px rgba(0,0,0,0.15);' +
        'transition:all 0.2s ease;' +
      '">' + id + '</div>';

    return L.divIcon({
      html: html,
      className: "custom-marker",
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });
  }

  // Attach to window so onclick in sidebar can reach it
  window.enterTour = function(id) {
    // Timeline always contains all 20 locations, so entering here from "View More"
    // always lands on the same, guaranteed-complete detail experience.
    state.currentId = id;
    state.appearanceIndex = 0;
    switchView('tour');
    selectNarrative('timeline');
  };

  function renderSidebar() {
    const listEl = document.getElementById("sidebar-list");
    const subtitleEl = document.getElementById("sidebarSubtitle");
    const order = getVisitOrder(); // follows whichever "By Narratives" route is currently selected

    if (subtitleEl) {
      const narrative = getActiveNarrative();
      subtitleEl.textContent = "Showing: " + narrative.label + " (" + order.length + " location" + (order.length === 1 ? "" : "s") + ")";
    }

    let html = "";
    order.forEach(function (id, idx) {
      const loc = locations.find(function (l) { return l.id === id; });
      if (!loc) return;
      // Single click jumps straight into the Tour page for this location — no
      // separate "View More" step, since a filmstrip chip has no room for one.
      html += '<button type="button" class="filmstrip-chip' + (loc.id === state.overviewId ? ' is-current' : '') + '" data-id="' + loc.id + '" style="background-image: url(\'' + loc.imageUrl + '\')" onclick="enterTour(' + loc.id + ')" title="' + escapeHtml(loc.name) + '">' +
                '<span class="filmstrip-chip__num">' + (idx + 1) + '</span>' +
                '<span class="filmstrip-chip__label">' + escapeHtml(loc.name) + '</span>' +
              '</button>';
    });
    listEl.innerHTML = html;
  }

  function initMaps() {
    // 1. Overview Map (standalone Map page) — markers are numbered by position in the
    //    currently selected "By Narratives" route, same as the Tour page's map. Locations
    //    outside the active route (e.g. not on the Art Tour) are hidden from this map too.
    overviewMap = L.map("overview-map", {
      center: [41.8992, 12.4840],
      zoom: 14
    });
    L.control.zoom({ position: "topright" }).addTo(overviewMap);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      attribution: '©OpenStreetMap, ©CartoDB'
    }).addTo(overviewMap);

    locations.forEach(function (loc) {
      const marker = L.marker(loc.coordinates, {
        icon: markerIcon(loc.id, false)
      });
      marker.on("click", function () {
        enterTour(loc.id);
      });
      overviewMarkers[loc.id] = marker;
    });
    updateOverviewMap();

    // 2. Narrative Tour Map — markers are numbered by their position in the
    //    CURRENTLY ACTIVE route (Timeline, City Tour, Art Tour, or Cinema Tour),
    //    not by raw location id. Locations outside the active route (e.g. a
    //    location not on the Art Tour) are removed from the map entirely.
    tourMap = L.map("tour-map", {
      center: [41.8992, 12.4840],
      zoom: 14,
      zoomControl: false 
    });
    L.control.zoom({ position: "topright" }).addTo(tourMap);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      attribution: '©OpenStreetMap, ©CartoDB'
    }).addTo(tourMap);

    locations.forEach(function (loc) {
      const marker = L.marker(loc.coordinates, {
        icon: markerIcon(loc.id, false)
      });
      marker.on("click", function () {
        selectLocation(loc.id);
      });
      markers[loc.id] = marker;
    });
  }

  /* Shows/hides/renumbers the standalone Map page's markers to match the currently
     selected "By Narratives" route — mirrors updateMap()'s logic for the Tour page. */
  function updateOverviewMap() {
    if (!overviewMap) return;
    const order = getVisitOrder();
    locations.forEach(function (loc) {
      const marker = overviewMarkers[loc.id];
      if (!marker) return;
      const routePos = order.indexOf(loc.id);
      if (routePos === -1) {
        if (overviewMap.hasLayer(marker)) overviewMap.removeLayer(marker);
        return;
      }
      if (!overviewMap.hasLayer(marker)) marker.addTo(overviewMap);
      marker.setIcon(markerIcon(routePos + 1, loc.id === state.overviewId));
    });
  }

  /* Map page Previous/Next: highlight one stop of the active route at a time */
  function setOverviewStop(id, fly) {
    const order = getVisitOrder();
    if (order.indexOf(id) === -1) id = order[0];
    state.overviewId = id;
    document.getElementById("mapCurrent").textContent = order.indexOf(id) + 1;
    document.getElementById("mapTotal").textContent = order.length;
    setEdgeLabel("mapPrevBtn", order.indexOf(id) === 0 ? "Home" : "Previous");
    setEdgeLabel("mapNextBtn", order.indexOf(id) === order.length - 1 ? "Tour" : "Next");
    document.querySelectorAll("#sidebar-list .filmstrip-chip").forEach(function (chip) {
      const on = parseInt(chip.dataset.id, 10) === id;
      chip.classList.toggle("is-current", on);
      if (on && fly) chip.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
    updateOverviewMap();
    const c = document.getElementById("overview-map");
    const loc = locations.find(function (l) { return l.id === id; });
    if (fly && overviewMap && loc && c && c.offsetWidth > 0 && c.offsetHeight > 0) {
      overviewMap.flyTo(loc.coordinates, 15, { animate: true, duration: 0.8 });
    }
  }
  function stepOverview(delta) {
    const order = getVisitOrder();
    const pos = order.indexOf(state.overviewId);
    if (pos === -1) { setOverviewStop(order[0], true); return; }
    if (delta < 0 && pos === 0) { goHome(); return; }
    if (delta > 0 && pos === order.length - 1) { switchView("tour"); return; }
    setOverviewStop(order[pos + delta], true);
  }

  function updateMap() {
    if (!tourMap) return;

    const order = getVisitOrder(); // reflects the currently active Timeline/City/Art/Cinema route

    locations.forEach(function (loc) {
      const marker = markers[loc.id];
      if (!marker) return;
      const routePos = order.indexOf(loc.id);

      if (routePos === -1) {
        // Not part of the active route (e.g. outside the Art Tour) — remove from the map.
        if (tourMap.hasLayer(marker)) tourMap.removeLayer(marker);
        return;
      }

      if (!tourMap.hasLayer(marker)) marker.addTo(tourMap);
      const isActive = (loc.id === state.currentId);
      marker.setIcon(markerIcon(routePos + 1, isActive)); // 1-indexed route position, not raw id
    });

    // Guard against Leaflet's "Invalid LatLng object: (NaN, NaN)" crash: panning/flying
    // a map whose container is currently hidden (display:none gives it zero width and
    // height) breaks Leaflet's internal pixel-origin math. This happens on first load,
    // since the page starts on the Map-overview view, not Tour, so #tour-map is hidden
    // until the visitor actually switches to the Tour view (which calls invalidateSize()
    // + updateMap() again once the container has real dimensions — see switchView()).
    const mapContainer = document.getElementById("tour-map");
    if (!mapContainer || mapContainer.offsetWidth === 0 || mapContainer.offsetHeight === 0) {
      return;
    }

    const currentLoc = locations.find(l => l.id === state.currentId);
    if (currentLoc) {
      tourMap.flyTo(currentLoc.coordinates, 15, {
        animate: true,
        duration: 0.8
      });
    }
  }

  /* ---------- Narratives ---------- */
  function getActiveNarrative() {
    return narratives.find(function (n) { return n.id === state.narrativeId; }) || narratives[0];
  }

  function getVisitOrder() {
    const narrative = getActiveNarrative();
    const ids = [];
    narrative.chapters.forEach(function (chapter) {
      chapter.locationIds.forEach(function (id) { ids.push(id); });
    });
    return ids;
  }

  function getChapterForLocation(id) {
    const narrative = getActiveNarrative();
    return narrative.chapters.find(function (chapter) {
      return chapter.locationIds.indexOf(id) !== -1;
    }) || null;
  }

  /* ---------- Narrative route selection (Timeline / City / Art / Film Tour) ---------- */
  function selectNarrative(narrativeId) {
    state.narrativeId = narrativeId;
    syncUrl();

    document.querySelectorAll("#narrativeDropdownMenu button").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.dataset.value === narrativeId);
    });

    // Keep the standalone Map page (sidebar list + markers) in sync with the same route
    renderSidebar();
    setOverviewStop(state.overviewId, false);

    // Snap to the first location of the newly active route if the current one isn't in it
    const order = getVisitOrder();
    if (order.indexOf(state.currentId) === -1 && order.length > 0) {
      selectLocation(order[0]);
    } else {
      navTotal.textContent = order.length;
      navCurrent.textContent = (order.indexOf(state.currentId) + 1);
      updateTourEdges();
      renderContent();
      updateMap();
    }
  }

  /* ---------- Page sequence: Home > Map > Tour > About ----------
     Previous/Next step inside a page first; at the first/last item they continue into the
     neighbouring page, and the button label changes to name the page it will open. */
  function setEdgeLabel(btnId, text) {
    const span = document.querySelector("#" + btnId + " span");
    if (span) span.textContent = text;
  }
  function goHome() { window.location.href = "index.html"; }

  /* ---------- Navigation Control ---------- */
  function selectLocation(id) {
    if (!locations.find(function (l) { return l.id === id; })) return;
    state.currentId = id;
    state.appearanceIndex = 0; 
    syncUrl();
    
    // Update counter text based on narrative size
    const order = getVisitOrder();
    navTotal.textContent = order.length;
    navCurrent.textContent = (order.indexOf(id) + 1);
    updateTourEdges();

    renderContent();
    updateMap();
  }

  function updateTourEdges() {
    const order = getVisitOrder();
    const pos = order.indexOf(state.currentId);
    setEdgeLabel("prevBtn", pos === 0 ? "Map" : "Previous");
    setEdgeLabel("nextBtn", pos === order.length - 1 ? "About" : "Next");
  }

  function goNext() {
    const order = getVisitOrder();
    const pos = order.indexOf(state.currentId);
    if (pos === -1) { selectLocation(order[0]); return; }
    if (pos === order.length - 1) { switchView("about"); return; }
    selectLocation(order[pos + 1]);
  }

  function goPrevious() {
    const order = getVisitOrder();
    const pos = order.indexOf(state.currentId);
    if (pos === -1) { selectLocation(order[order.length - 1]); return; }
    if (pos === 0) { switchView("map-overview"); return; }
    selectLocation(order[pos - 1]);
  }

  /* ---------- Content HTML Rendering ---------- */
  function escapeHtml(str) {
    if (!str) return "";
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  function labelize(key) {
    return key.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/^./, function (c) { return c.toUpperCase(); }).trim();
  }

  function renderMetaTable(obj) {
    let rows = "";
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] != null && typeof obj[key] !== "object") {
        rows += '<tr><td class="content__meta-label">' + escapeHtml(labelize(key)) + '</td><td class="content__meta-value">' + escapeHtml(obj[key]) + '</td></tr>';
      }
    }
    return '<div class="content__meta"><table><tbody>' + rows + '</tbody></table></div>';
  }

  function buildAppearancePageHtml(loc, a) {
    return '<div class="content__still content__still--sm"><img src="' + a.specificImageUrl + '" alt="' + escapeHtml(a.movieTitle) + ' — ' + escapeHtml(loc.name) + '" /><div class="content__still-caption">' + escapeHtml(a.scene) + '</div></div>' +
           renderMetaTable({ movieTitle: a.movieTitle, director: a.director, year: a.year, cameraOrientation: a.cameraOrientation });
  }

  function buildFeaturedInSection(loc) {
    const appearances = loc.appearances || [];
    if (appearances.length === 0) return "";
    const index = Math.min(state.appearanceIndex, appearances.length - 1);
    const current = appearances[index];
    let nav = "";
    if (appearances.length > 1) {
      nav = '<div class="flip-nav"><button type="button" class="flip-btn flip-btn--prev" aria-label="Previous movie"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polyline points="15 18 9 12 15 6"></polyline></svg></button><span class="flip-counter">' + (index + 1) + ' / ' + appearances.length + '</span><button type="button" class="flip-btn flip-btn--next" aria-label="Next movie"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polyline points="9 18 15 12 9 6"></polyline></svg></button></div>';
    }
    return '<section class="content__section content__section--featured fade-in"><h2 class="content__section-title">Featured In</h2><div class="content__flipbook"><div class="content__flip-page">' + buildAppearancePageHtml(loc, current) + '</div>' + nav + '</div></section>';
  }

  /* ---------- Inline text controls (Read More/Less, tone tags, difficulty tag) ----------
     Replaces the old global header row: each control now lives next to the exact text
     it affects. Detail and competence are simple one-button cyclers (their label flips
     between the two ends of the brief's "Tell me more/less" and "too simple/difficult"
     switch pairs); tone is a small set of tags so the visitor can jump straight to a level. */
  const DETAIL_LEVELS = ["brief", "mid", "long"];
  const COMPETENCE_LEVELS = ["introductory", "average", "advanced"];
  const TONE_LEVELS = ["young", "adult", "scholar"];
  const TONE_LABELS = { young: "Kid", adult: "Adult", scholar: "Scholar" };

  /* Detail and competence are stepped one level at a time (never wrapping), so every one of
     the 3 x 3 x 3 = 27 combinations is reachable. The control row at the end of the text
     offers only the directions that still exist at the current level. */
  function stepLevel(levels, current, delta) {
    const next = levels.indexOf(current) + delta;
    return next < 0 || next >= levels.length ? current : levels[next];
  }
  function stepDetail(delta) {
    state.detailLevel = stepLevel(DETAIL_LEVELS, state.detailLevel, delta);
    refreshTextSection();
  }
  function stepCompetence(delta) {
    state.competence = stepLevel(COMPETENCE_LEVELS, state.competence, delta);
    refreshTextSection();
  }
  function setTone(value) {
    state.audienceTone = value;
    refreshTextSection();
  }

  function attachInlineControlHandlers() {
    contentEl.querySelectorAll('[data-loc-control="detail"]').forEach(function (btn) {
      btn.addEventListener("click", function () { stepDetail(parseInt(btn.dataset.step, 10)); });
    });
    contentEl.querySelectorAll('[data-loc-control="competence"]').forEach(function (btn) {
      btn.addEventListener("click", function () { stepCompetence(parseInt(btn.dataset.step, 10)); });
    });
    contentEl.querySelectorAll('[data-loc-control="tone"]').forEach(function (btn) {
      btn.addEventListener("click", function () { setTone(btn.dataset.value); });
    });
  }

  /* Builds only the text block (tone tags, paragraph, Read More/Less, difficulty buttons). */
  function buildTextSection(loc, animate) {
    const toneTags = TONE_LEVELS.map(function (t) {
      return '<button type="button" class="desc-tag' + (state.audienceTone === t ? ' is-active' : '') + '" data-loc-control="tone" data-value="' + t + '">' + TONE_LABELS[t] + '</button>';
    }).join('');

    const textParts = [loc.tone[state.audienceTone], loc.content[state.detailLevel]];
    if (loc.competence) textParts.push(loc.competence[state.competence]);
    const combinedText = textParts.filter(Boolean).map(escapeHtml).join(' ');

    const dIdx = DETAIL_LEVELS.indexOf(state.detailLevel);
    let detailBtns = "";
    if (dIdx < DETAIL_LEVELS.length - 1) detailBtns += ' <button type="button" class="desc-readmore" data-loc-control="detail" data-step="1">Read More</button>';
    if (dIdx > 0) detailBtns += ' <button type="button" class="desc-readmore" data-loc-control="detail" data-step="-1">Read Less</button>';

    let difficultyBtns = "";
    if (loc.competence) {
      const cIdx = COMPETENCE_LEVELS.indexOf(state.competence);
      if (cIdx > 0) difficultyBtns += '<button type="button" class="desc-difficulty" data-loc-control="competence" data-step="-1">Decrease language difficulty</button>';
      if (cIdx < COMPETENCE_LEVELS.length - 1) difficultyBtns += '<button type="button" class="desc-difficulty" data-loc-control="competence" data-step="1">Increase language difficulty</button>';
      difficultyBtns = '<div class="desc-difficulty-row">' + difficultyBtns + '</div>';
    }

    return '<section class="content__section content__section--meaning' + (animate ? ' fade-in' : '') + '"><div class="desc-tags">' + toneTags + '</div><h2 class="content__section-title">' + TONE_LABELS[state.audienceTone] + ' Text</h2><p class="content__text">' + combinedText + detailBtns + '</p>' + difficultyBtns + '</section>';
  }

  /* Re-renders only the text block in place: the rest of the page, and the scroll position
     of the content pane, stay untouched when a text option is changed. */
  function refreshTextSection() {
    const loc = locations.find(l => l.id === state.currentId);
    const old = contentEl.querySelector(".content__section--meaning");
    if (!loc || !old) return;
    const pane = contentEl.parentElement;
    const top = pane ? pane.scrollTop : 0;
    old.outerHTML = buildTextSection(loc, false);
    attachInlineControlHandlers();
    if (pane) pane.scrollTop = top;
  }

  function attachFlipHandlers(loc) {
    const appearances = loc.appearances || [];
    if (appearances.length <= 1) return;
    const flipPage = contentEl.querySelector(".content__flip-page");
    const prevBtn  = contentEl.querySelector(".flip-btn--prev");
    const nextBtn  = contentEl.querySelector(".flip-btn--next");
    const counter  = contentEl.querySelector(".flip-counter");
    if (!flipPage || !prevBtn || !nextBtn) return;
    function turn(delta) {
      const total = appearances.length;
      const outClass = delta > 0 ? "is-flipping-out-next" : "is-flipping-out-prev";
      const inClass  = delta > 0 ? "is-flipping-in-next"  : "is-flipping-in-prev";
      flipPage.classList.add(outClass);
      window.setTimeout(function () {
        state.appearanceIndex = (state.appearanceIndex + delta + total) % total;
        const nextAppearance = appearances[state.appearanceIndex];
        flipPage.innerHTML = buildAppearancePageHtml(loc, nextAppearance);
        if (counter) counter.textContent = (state.appearanceIndex + 1) + " / " + total;
        flipPage.classList.remove(outClass);
        flipPage.classList.add(inClass);
        window.setTimeout(function () { flipPage.classList.remove(inClass); }, 220);
      }, 180);
    }
    prevBtn.addEventListener("click", function () { turn(-1); });
    nextBtn.addEventListener("click", function () { turn(1); });
  }

  function renderContent() {
    const loc = locations.find(l => l.id === state.currentId);
    if (!loc) return;
    const appearances = loc.appearances || [];
    const movieSummary = appearances.map(function (a) { return a.movieTitle + ' (' + a.year + ')'; }).join(' · ');
    const narrative = getActiveNarrative();
    const chapter = getChapterForLocation(loc.id);
    const isChapterStart = chapter && chapter.locationIds[0] === loc.id;
    let html = "";
    if (chapter) {
      html += '<div class="chapter-banner fade-in"><p class="chapter-banner__eyebrow">' + escapeHtml(narrative.label) + ' &rsaquo; ' + escapeHtml(chapter.title) + '</p>' +
              (isChapterStart ? '<p class="chapter-banner__intro">' + escapeHtml(chapter.intro) + '</p>' : '') + '</div>';
    }
    const routeOrder = getVisitOrder();
    const routePosition = routeOrder.indexOf(loc.id) + 1; // 1-indexed position within the current Timeline/City/Art/Cinema route
    html += '<div class="content__head fade-in"><div class="content__number-row"><span class="content__number">' + routePosition + '</span><div class="content__number-line"></div></div><h1 class="content__title">' + escapeHtml(loc.name) + '</h1><p class="content__movie">' + escapeHtml(movieSummary) + '</p></div>';

    html += '<div class="content__sections">';

    // 1. Location Profile — real photo immediately followed by its info table
    //    (and construction timeline, if present, since it's also location-level history)
    html += '<section class="content__section content__section--profile fade-in"><h2 class="content__section-title">Location Profile</h2>' +
              '<div class="content__still fade-in"><img src="' + loc.imageUrl + '" alt="' + escapeHtml(loc.name) + '" /></div>';
    if (loc.semanticMetadata && loc.semanticMetadata.locationContext) {
      const lc = loc.semanticMetadata.locationContext;
      const profileData = {
        officialName: (lc.officialNameIT && lc.officialNameEN && lc.officialNameIT !== lc.officialNameEN)
          ? lc.officialNameIT + ' / ' + lc.officialNameEN
          : (lc.officialNameIT || lc.officialNameEN),
        built: loc.builtYearLabel,
        featureType: lc.featureType,
        architecturalStyle: lc.architecturalStyle
      };
      html += renderMetaTable(profileData);
    }
    if (loc.historicalTimeline && loc.historicalTimeline.length > 0) {
      html += '<div class="timeline">';
      loc.historicalTimeline.forEach(function (item) {
        html += '<div class="timeline__item"><span class="timeline__year">' + escapeHtml(item.year) + '</span><div class="timeline__body"><div class="timeline__dot"></div><div class="timeline__line"></div><span class="timeline__event">' + escapeHtml(item.event) + '</span></div></div>';
      });
      html += '</div>';
    }
    html += '</section>';

    // 2. Featured In — movie screenshot immediately followed by its movie info table
    html += buildFeaturedInSection(loc);

    // 3. Text — tone tags, one combined paragraph (tone + length + competence), and the
    //    stepping controls; see buildTextSection().
    html += buildTextSection(loc, true);

    // 4. On-Site — QR code linking to Google Maps, plus address and hours, last
    {
      const officialName = (loc.semanticMetadata && loc.semanticMetadata.locationContext && loc.semanticMetadata.locationContext.officialNameIT) || loc.name;
      // Search by official name + address (rather than bare coordinates) so Google Maps
      // resolves to its own verified place listing — with the name, hours and reviews
      // Google already has on file — instead of dropping an unlabeled pin.
      const mapsQuery = officialName + ', ' + loc.address;
      const mapsTarget = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(mapsQuery);
      const qrSrc = 'https://api.qrserver.com/v1/create-qr-code/?size=140x140&margin=0&data=' + encodeURIComponent(mapsTarget);
      html += '<section class="content__section content__section--onsite content__onsite fade-in"><h2 class="content__section-title">On-Site</h2><div class="content__onsite-row"><img class="content__qr" src="' + qrSrc + '" alt="QR code opening this location in Google Maps" width="100" height="100" /><div class="content__onsite-text"><p class="content__text">Scan to open in Google Maps and get directions.</p><p class="content__text content__text--muted">Address: ' + escapeHtml(loc.address) + '</p><p class="content__text content__text--muted">Hours: ' + escapeHtml(loc.openingHours) + '</p></div></div></section>';
    }
    html += '</div>'; 
    contentEl.innerHTML = html;
    attachFlipHandlers(loc);
    attachInlineControlHandlers();
    if (contentEl.parentElement) { contentEl.parentElement.scrollTop = 0; }
  }

  /* ---------- Era theme dropdown (top-right of the main nav) ---------- */
  function setupEraDropdown() {
    const dropdown = document.getElementById("eraDropdown");
    const toggle = document.getElementById("eraDropdownToggle");
    const label = document.getElementById("eraDropdownLabel");
    const menu = document.getElementById("eraDropdownMenu");
    if (!dropdown || !toggle || !label || !menu) return;

    function closeMenu() {
      dropdown.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    function openMenu() {
      dropdown.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    }

    function applyTheme(value) {
      state.theme = value;
      tourEl.setAttribute("data-theme", value);
      label.textContent = "By Themes";
      menu.querySelectorAll("button").forEach(function (btn) {
        btn.classList.toggle("is-active", btn.dataset.value === value);
      });
      syncUrl();
    }

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      if (dropdown.classList.contains("is-open")) closeMenu(); else openMenu();
    });

    menu.querySelectorAll("button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyTheme(btn.dataset.value);
        closeMenu();
      });
    });

    // Close when clicking anywhere outside the dropdown
    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) closeMenu();
    });
    // Close on Escape
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    applyTheme(state.theme); // sync initial label/active state
  }

  /* ---------- Narrative route dropdown (Timeline / City / Art / Film Tour) ---------- */
  function setupAboutDropdown() {
    const dropdown = document.getElementById("aboutDropdown");
    const toggle = document.getElementById("aboutDropdownToggle");
    const menu = document.getElementById("aboutDropdownMenu");
    if (!dropdown || !toggle || !menu) return;

    function closeMenu() {
      dropdown.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    function openMenu() {
      dropdown.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    }

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      if (dropdown.classList.contains("is-open")) closeMenu(); else openMenu();
    });

    menu.querySelectorAll("button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        switchView("about");
        const target = document.getElementById(btn.dataset.section);
        if (target) {
          // Give the view a moment to become visible before scrolling, since a
          // display:none panel can't be scrolled into view.
          window.setTimeout(function () {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 50);
        }
        closeMenu();
      });
    });

    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) closeMenu();
    });
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  function setupNarrativeDropdown() {
    const dropdown = document.getElementById("narrativeDropdown");
    const toggle = document.getElementById("narrativeDropdownToggle");
    const label = document.getElementById("narrativeDropdownLabel");
    const menu = document.getElementById("narrativeDropdownMenu");
    if (!dropdown || !toggle || !label || !menu) return;

    function closeMenu() {
      dropdown.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    function openMenu() {
      dropdown.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    }

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      if (dropdown.classList.contains("is-open")) closeMenu(); else openMenu();
    });

    menu.querySelectorAll("button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        selectNarrative(btn.dataset.value);
        menu.querySelectorAll("button").forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
        });
        closeMenu();
      });
    });

    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) closeMenu();
    });
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    label.textContent = "By Narratives";
    menu.querySelectorAll("button").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.dataset.value === state.narrativeId);
    });
  }

  /* ---------- Segmented Buttons ---------- */
  function setupSegmented(group, currentValue, onChange) {
    const container = document.querySelector('.segmented[data-group="' + group + '"]');
    if (!container) return;
    const buttons = container.querySelectorAll("button");
    function highlight(value) {
      buttons.forEach(function (btn) {
        btn.classList.toggle("is-active", btn.dataset.value === value);
      });
    }
    highlight(currentValue);
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        highlight(btn.dataset.value);
        onChange(btn.dataset.value);
      });
    });
  }

  /* ---------- SPA View Router ---------- */
  function switchView(viewName) {
    state.currentView = viewName;
    tourEl.setAttribute("data-view", viewName);
    syncUrl();

    document.querySelectorAll(".nav-link-item").forEach(function (btn) {
      if (btn.dataset.target) {
        btn.classList.toggle("is-active", btn.dataset.target === viewName);
      }
    });
    const aboutToggle = document.getElementById("aboutDropdownToggle");
    if (aboutToggle) aboutToggle.classList.toggle("is-active", viewName === "about");

    if (viewName === "about") {
      document.getElementById("view-panel-about").scrollTop = 0;
    }

    if (viewName === "tour" && tourMap) {
      setTimeout(function () {
        tourMap.invalidateSize();
        updateMap();
      }, 100);
    } else if (viewName === "map-overview" && overviewMap) {
      setTimeout(function () {
        overviewMap.invalidateSize();
      }, 100);
    }
  }

  function setupPageNavs() {
    document.getElementById("mapPrevBtn").addEventListener("click", function () { stepOverview(-1); });
    document.getElementById("mapNextBtn").addEventListener("click", function () { stepOverview(1); });
    document.getElementById("aboutPrevBtn").addEventListener("click", function () { switchView("tour"); });
  }

  function setupViewRouting() {
    document.querySelectorAll(".nav-link-item").forEach(function (btn) {
      if (btn.dataset.target) {
        btn.addEventListener("click", function () { switchView(btn.dataset.target); });
      }
    });
    switchView(state.currentView);
  }

  /* ---------- Init App ---------- */
  function init() {
    renderSidebar();
    initMaps();

    setupEraDropdown();
    setupNarrativeDropdown();
    setupAboutDropdown();

    // Apply the initial narrative route UI state and make sure currentId is valid
    // for the starting order — this performs the first content render and map update.
    selectNarrative(state.narrativeId);

    document.getElementById("prevBtn").addEventListener("click", goPrevious);
    document.getElementById("nextBtn").addEventListener("click", goNext);

    window.addEventListener("keydown", function (e) {
      if (state.currentView !== "tour") return; 
      if (e.key === "ArrowLeft") goPrevious();
      else if (e.key === "ArrowRight") goNext();
    });

    setupPageNavs();
    setupViewRouting();
  }

  window.addEventListener("DOMContentLoaded", init);
})();