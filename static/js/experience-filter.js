// Pull quote beside the intro on /work/: every approved quote is in the page and the first shows
// without JavaScript; this shows one at random instead.
(function () {
  var quotes = document.querySelectorAll('[data-pull-quote]');
  if (quotes.length < 2) return;
  var pick = Math.floor(Math.random() * quotes.length);
  quotes.forEach(function (q, i) { q.hidden = i !== pick; });
})();

// Filters on /work/: shows the type and service buttons and hides cards that don't match.
// Without JavaScript the buttons stay hidden and every entry shows. ?type= and ?service= in the
// URL preselect a filter, so a link can open a filtered view.
(function () {
  var bar = document.querySelector('[data-exp-filters]');
  var list = document.querySelector('[data-exp-list]');
  if (!bar || !list) return;

  var cards = Array.prototype.slice.call(list.querySelectorAll('.exp-card'));
  var count = bar.querySelector('[data-exp-count]');
  var empty = document.querySelector('[data-exp-empty]');
  var state = { type: '', service: '' };

  var params = new URLSearchParams(window.location.search);
  state.type = params.get('type') || '';
  state.service = params.get('service') || '';

  function apply() {
    // An unknown value (say, from an old link) falls back to All
    bar.querySelectorAll('[data-filter]').forEach(function (group) {
      var key = group.dataset.filter;
      if (!group.querySelector('button[data-value="' + CSS.escape(state[key]) + '"]')) state[key] = '';
    });
    var shown = 0;
    cards.forEach(function (card) {
      var ok = (!state.type || card.dataset.type === state.type) &&
               (!state.service || (' ' + card.dataset.services + ' ').indexOf(' ' + state.service + ' ') !== -1);
      card.hidden = !ok;
      if (ok) shown++;
    });
    bar.querySelectorAll('[data-filter]').forEach(function (group) {
      var value = state[group.dataset.filter];
      group.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.value === value));
      });
    });
    count.textContent = shown === cards.length ? 'Showing all ' + shown + ' entries' : 'Showing ' + shown + ' of ' + cards.length + ' entries';
    if (empty) empty.hidden = shown !== 0;

    var q = new URLSearchParams();
    if (state.type) q.set('type', state.type);
    if (state.service) q.set('service', state.service);
    var search = q.toString();
    history.replaceState(null, '', window.location.pathname + (search ? '?' + search : '') + window.location.hash);
  }

  bar.addEventListener('click', function (event) {
    var button = event.target.closest('button[data-value]');
    if (!button) return;
    state[button.closest('[data-filter]').dataset.filter] = button.dataset.value;
    apply();
  });
  var reset = document.querySelector('[data-exp-reset]');
  if (reset) reset.addEventListener('click', function () { state.type = ''; state.service = ''; apply(); });

  bar.hidden = false;
  apply();
})();
