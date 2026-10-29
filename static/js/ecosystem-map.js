// Pragmatic Ecosystems stack (layouts/shortcodes/ecosystem-map.html).
// Progressive enhancement: the shortcode renders the default view as HTML; this adds the
// viewpoint and lens controls and makes the layers selectable. Deep links: #financial-services,
// #energy, #public-sector, #technology, #property.
(function () {
  'use strict';

  var root = document.getElementById('ecosystem-map');
  var dataEl = document.getElementById('eco-data');
  if (!root || !dataEl) return;

  var data = JSON.parse(dataEl.textContent);
  var state = { sector: 'any', lens: 'relies', layer: data.layers[0].id };
  var sectorsEl = document.getElementById('eco-sectors');
  var stackEl = document.getElementById('eco-stack');
  var detailEl = document.getElementById('eco-detail');
  var arrows = { relies: '↑', affects: '↓' };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function sector() {
    for (var i = 0; i < data.sectors.length; i++) {
      if (data.sectors[i].id === state.sector) return data.sectors[i];
    }
    return data.sectors[0];
  }
  function isSector(id) {
    return data.sectors.some(function (s) { return s.id === id; });
  }

  data.sectors.forEach(function (s) {
    var b = el('button', 'eco-pill', s.name);
    b.type = 'button';
    b.dataset.sector = s.id;
    b.addEventListener('click', function () { setSector(s.id, true); });
    sectorsEl.appendChild(b);
  });

  root.querySelectorAll('#eco-lenses .eco-pill').forEach(function (b) {
    b.addEventListener('click', function () { state.lens = b.dataset.lens; render(); });
  });

  function setSector(id, updateHash) {
    if (!isSector(id)) id = 'any';
    state.sector = id;
    if (updateHash) {
      try { history.replaceState(null, '', id === 'any' ? location.pathname + location.search : '#' + id); } catch (e) {}
    }
    render();
  }

  function renderStack() {
    var s = sector();
    stackEl.textContent = '';
    data.layers.forEach(function (layer, i) {
      var info = s.layers[layer.id];
      var li = el('li');
      var b = el('button', 'eco-band eco-band--l' + (i + 1));
      b.type = 'button';
      b.setAttribute('aria-pressed', String(state.layer === layer.id));
      b.addEventListener('click', function () { state.layer = layer.id; render(); });

      if (info.material) {
        b.classList.add('is-material');
        b.appendChild(el('span', 'eco-badge', 'Most material?'));
      }
      var head = el('span', 'eco-band-head');
      head.appendChild(el('span', 'eco-band-name', layer.name));
      head.appendChild(el('span', 'eco-band-tag', layer.tag));
      b.appendChild(head);

      var chips = el('span', 'eco-chips');
      info.chips.forEach(function (c) { chips.appendChild(el('span', 'eco-chip', c)); });
      b.appendChild(chips);

      var line = el('span', 'eco-band-line');
      var arrow = el('span', 'eco-arrow', arrows[state.lens]);
      arrow.setAttribute('aria-hidden', 'true');
      line.appendChild(arrow);
      line.appendChild(document.createTextNode(info[state.lens]));
      b.appendChild(line);

      li.appendChild(b);
      stackEl.appendChild(li);
    });
  }

  function flow(kind, label, text) {
    var d = el('div', 'eco-flow' + (state.lens === kind ? ' active' : ''));
    d.appendChild(el('strong', null, arrows[kind] + ' ' + label));
    d.appendChild(el('p', null, text));
    return d;
  }

  function renderDetail() {
    var s = sector();
    var layer = data.layers.filter(function (l) { return l.id === state.layer; })[0];
    var info = s.layers[layer.id];
    detailEl.textContent = '';
    detailEl.appendChild(el('h3', null, layer.name));
    detailEl.appendChild(el('p', 'eco-tagline', layer.tag + (info.material ? ' · Most material for ' + s.name.toLowerCase() : '')));
    detailEl.appendChild(el('p', null, layer.summary));

    detailEl.appendChild(el('h4', null, s.id === 'any' ? 'For any organisation' : 'In ' + s.name.toLowerCase()));
    var flows = el('div', 'eco-flows');
    var a = flow('relies', 'What you rely on', info.relies);
    var b = flow('affects', 'What you affect', info.affects);
    if (state.lens === 'affects') { flows.appendChild(b); flows.appendChild(a); } else { flows.appendChild(a); flows.appendChild(b); }
    detailEl.appendChild(flows);

    detailEl.appendChild(el('h4', null, 'Question to ask'));
    detailEl.appendChild(el('p', 'eco-question', layer.question));

    detailEl.appendChild(el('h4', null, 'Useful lenses'));
    var ul = el('ul', 'eco-lenses');
    layer.lenses.forEach(function (l) {
      var li = el('li');
      if (l.url) {
        var link = el('a', null, l.name);
        link.href = l.url; link.target = '_blank'; link.rel = 'noopener';
        li.appendChild(link);
      } else {
        li.appendChild(document.createTextNode(l.name));
      }
      if (l.note) li.appendChild(el('span', null, ': ' + l.note));
      ul.appendChild(li);
    });
    detailEl.appendChild(ul);
  }

  function render() {
    sectorsEl.querySelectorAll('.eco-pill').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.sector === state.sector));
    });
    root.querySelectorAll('#eco-lenses .eco-pill').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lens === state.lens));
    });
    document.getElementById('eco-lens-note').textContent = data.lensNotes[state.lens];
    document.getElementById('eco-sector-summary').textContent = sector().summary;
    renderStack();
    renderDetail();
  }

  function hashSector() { return (location.hash || '').replace('#', ''); }
  window.addEventListener('hashchange', function () {
    if (isSector(hashSector())) setSector(hashSector(), false);
  });

  root.querySelector('.eco-controls').hidden = false;
  root.querySelectorAll('.eco-js-only').forEach(function (n) { n.hidden = false; });
  setSector(isSector(hashSector()) ? hashSector() : 'any', false);
  // A deep link such as /approach/#energy has no matching element, so bring the map into view.
  // Wait for load: web fonts arriving later would otherwise push the map down again.
  if (isSector(hashSector())) {
    // 'instant': the site's smooth scrolling gets cancelled while the page is still loading
    var bring = function () { root.scrollIntoView({ behavior: 'instant', block: 'start' }); };
    bring();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(bring);
    window.addEventListener('load', bring);
  }
})();
