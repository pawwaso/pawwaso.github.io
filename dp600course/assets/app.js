/* DP-600 course portal: navigation, progress and interactive widgets.
   Plain JS, no dependencies, works from file:// and from any web sub-path. */
(function () {
  'use strict';

  // Single source of truth for navigation. Add pages here.
  var PAGES = [
    { file: 'index.html', title: 'Home', group: '' },
    { file: '00-exam-guide.html', title: 'Exam guide & self-assessment', group: 'Start here' },
    { file: '01-fabric-platform.html', title: 'Fabric platform & capacities', group: 'Start here' },
    { file: '02-security-governance.html', title: 'Security & governance', group: '1. Maintain a data analytics solution' },
    { file: '03-lifecycle.html', title: 'Lifecycle: Git & deployment', group: '1. Maintain a data analytics solution' },
    { file: '04-get-data.html', title: 'Get data & ingestion', group: '2. Prepare data' },
    { file: '05-lakehouse-spark.html', title: 'Lakehouse & Spark', group: '2. Prepare data' },
    { file: '06-warehouse-tsql.html', title: 'Warehouse & T-SQL', group: '2. Prepare data' },
    { file: '07-transform-data.html', title: 'Transform data & star schema', group: '2. Prepare data' },
    { file: '08-kql-realtime.html', title: 'Eventhouse & KQL', group: '2. Prepare data' },
    { file: '09-query-analyze.html', title: 'Query & analyze', group: '2. Prepare data' },
    { file: '10-semantic-model-design.html', title: 'Semantic model design', group: '3. Implement & manage semantic models' },
    { file: '11-direct-lake.html', title: 'Direct Lake', group: '3. Implement & manage semantic models' },
    { file: '12-dax.html', title: 'DAX essentials', group: '3. Implement & manage semantic models' },
    { file: '13-performance.html', title: 'Performance & scale', group: '3. Implement & manage semantic models' },
    { file: 'glossary.html', title: 'Glossary & flashcards', group: 'Practice' },
    { file: 'practice.html', title: 'Practice & exam simulation', group: 'Practice' }
  ];
  window.DP600_PAGES = PAGES;

  // ---------- storage (fails silently) ----------
  var NS = 'dp600:';
  function load(k, d) { try { var v = localStorage.getItem(NS + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(NS + k, JSON.stringify(v)); } catch (e) { } }
  window.DP600 = { load: load, save: save, shuffle: shuffle, el: el };

  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function shuffleNotSame(a) { if (a.length < 2) return a.slice(); var s; var n = 0; do { s = shuffle(a); n++; } while (n < 10 && s.every(function (x, i) { return x === a[i]; })); return s; }

  var here = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');
  if (!/\.html?$/.test(here)) here = 'index.html';
  var done = load('done', {});

  // ---------- chrome: top bar, sidebar, toc, footer ----------
  function buildChrome() {
    var main = document.querySelector('main');
    if (!main) return;
    var top = el('header', 'topbar');
    var mb = el('button', 'menu-btn', '☰ Menu');
    mb.onclick = function () { document.body.classList.toggle('menu-open'); };
    var brand = el('a', 'brand', 'DP-600 Study Portal'); brand.href = 'index.html';
    top.appendChild(mb); top.appendChild(brand); top.appendChild(el('span', 'spacer'));
    [['glossary.html', 'Glossary'], ['practice.html', 'Practice']].forEach(function (l) {
      var a = el('a', 'tl', l[1]); a.href = l[0]; top.appendChild(a);
    });

    var side = el('nav', 'sidebar'); side.setAttribute('aria-label', 'Course pages');
    var g = null;
    PAGES.forEach(function (p) {
      if (p.group !== g) { g = p.group; if (g) side.appendChild(el('h4', null, g)); }
      var a = el('a'); a.href = p.file; a.appendChild(el('span', null, p.title));
      if (done[p.file]) a.appendChild(el('span', 'done', '✓'));
      if (p.file === here) a.className = 'current';
      side.appendChild(a);
    });

    var layout = el('div', 'layout');
    main.parentNode.insertBefore(layout, main);
    layout.appendChild(side); layout.appendChild(main);
    document.body.insertBefore(top, layout);

    // table of contents from h2
    var h2s = main.querySelectorAll('h2');
    var h1 = main.querySelector('h1');
    var hero = main.querySelector('.hero');
    if (hero && h2s.length > 1 && !main.hasAttribute('data-notoc')) {
      var ln = el('nav', 'lessonnav'); ln.setAttribute('aria-label', 'Lessons on this page');
      h2s.forEach(function (h, i) {
        if (!h.id) h.id = 's' + (i + 1);
        var a = el('a', null, h.textContent); a.href = '#' + h.id; ln.appendChild(a);
      });
      hero.parentNode.insertBefore(ln, hero.nextSibling);
    } else if (h2s.length > 2 && h1 && !main.hasAttribute('data-notoc')) {
      var toc = el('div', 'toc'); toc.appendChild(el('strong', null, 'On this page'));
      var ol = el('ol');
      h2s.forEach(function (h, i) {
        if (!h.id) h.id = 's' + (i + 1);
        var li = el('li'); var a = el('a', null, h.textContent); a.href = '#' + h.id; li.appendChild(a); ol.appendChild(li);
      });
      toc.appendChild(ol);
      var after = h1.nextElementSibling && h1.nextElementSibling.classList.contains('lead') ? h1.nextElementSibling : h1;
      after.parentNode.insertBefore(toc, after.nextSibling);
    }

    // footer: done toggle + prev/next
    var idx = PAGES.findIndex(function (p) { return p.file === here; });
    if (idx >= 0 && !main.hasAttribute('data-nofoot')) {
      var f = el('div', 'pagefoot');
      if (idx > 0) { var pv = el('a', 'btn', '← ' + PAGES[idx - 1].title); pv.href = PAGES[idx - 1].file; f.appendChild(pv); }
      f.appendChild(el('span', 'spacer'));
      if (here !== 'index.html') {
        var db = el('button');
        var setLbl = function () { db.textContent = done[here] ? '✓ Marked as studied' : 'Mark page as studied'; db.className = done[here] ? '' : 'primary'; };
        setLbl();
        db.onclick = function () { done = load('done', {}); if (done[here]) delete done[here]; else done[here] = Date.now(); save('done', done); setLbl(); };
        f.appendChild(db);
      }
      f.appendChild(el('span', 'spacer'));
      if (idx < PAGES.length - 1) { var nx = el('a', 'btn primary', PAGES[idx + 1].title + ' →'); nx.href = PAGES[idx + 1].file; f.appendChild(nx); }
      main.appendChild(f);
    }
  }

  // ---------- widget helpers ----------
  function frame(node, title) {
    node.classList.add('widget');
    var t = el('div', 'wtitle', title);
    node.insertBefore(t, node.firstChild);
    var task = node.getAttribute('data-task');
    if (task) node.insertBefore(el('p', 'task', task), t.nextSibling);
  }
  function controls(node, onCheck, onReset) {
    var c = el('div', 'controls');
    var b1 = el('button', 'primary', 'Check'); b1.onclick = onCheck;
    var b2 = el('button', null, 'Reset'); b2.onclick = onReset;
    var r = el('span', 'result');
    c.appendChild(b1); c.appendChild(b2); c.appendChild(r);
    node.appendChild(c);
    return r;
  }
  function setResult(r, good, total, extra) {
    r.textContent = good + ' / ' + total + ' correct' + (good === total ? ' — well done!' : (extra || ''));
    r.className = 'result ' + (good === total ? 'ok' : 'bad');
  }

  // drag & drop (mouse) + click-to-place (touch/keyboard friendly)
  var selected = null, uid = 0;
  function makeChip(text, key) {
    var c = el('span', 'chip', text);
    c.draggable = true; c.dataset.key = key; c.id = 'chip' + (++uid); c.tabIndex = 0;
    c.addEventListener('dragstart', function (e) { e.dataTransfer.setData('text/plain', c.id); });
    var pick = function (e) {
      e.stopPropagation();
      if (selected === c) { c.classList.remove('sel'); selected = null; return; }
      if (selected) selected.classList.remove('sel');
      selected = c; c.classList.add('sel');
    };
    c.addEventListener('click', pick);
    c.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(e); } });
    return c;
  }
  function makeZone(z, single, pool) {
    z.tabIndex = 0;
    z.addEventListener('dragover', function (e) { e.preventDefault(); z.classList.add('over'); });
    z.addEventListener('dragleave', function () { z.classList.remove('over'); });
    z.addEventListener('drop', function (e) {
      e.preventDefault(); z.classList.remove('over');
      var c = document.getElementById(e.dataTransfer.getData('text/plain'));
      if (c) place(c, z, single, pool);
    });
    var put = function () { if (selected) { var c = selected; c.classList.remove('sel'); selected = null; place(c, z, single, pool); } };
    z.addEventListener('click', put);
    z.addEventListener('keydown', function (e) { if (e.key === 'Enter' && e.target === z) put(); });
  }
  function place(c, z, single, pool) {
    if (single && z !== pool) { var ex = z.querySelector('.chip'); if (ex && ex !== c) pool.appendChild(ex); }
    z.appendChild(c);
    c.classList.remove('ok', 'bad');
  }

  // ---------- widget: single-answer knowledge check ----------
  // <div class="check" data-answer="2"><p>Question</p><ul><li>A</li><li>B</li>...</ul><p class="why">Explanation</p></div>
  function initCheck(node) {
    frame(node, 'Knowledge check');
    var ans = parseInt(node.getAttribute('data-answer'), 10);
    var lis = node.querySelectorAll('ul > li');
    lis.forEach(function (li, i) {
      li.tabIndex = 0;
      var choose = function () {
        if (node.classList.contains('answered')) return;
        node.classList.add('answered');
        li.classList.add(i + 1 === ans ? 'right' : 'wrong');
        lis[ans - 1].classList.add('right');
        updateScore();
      };
      li.addEventListener('click', choose);
      li.addEventListener('keydown', function (e) { if (e.key === 'Enter') choose(); });
    });
    var c = el('div', 'controls');
    var rb = el('button', null, 'Try again');
    rb.onclick = function () { node.classList.remove('answered'); lis.forEach(function (l) { l.classList.remove('right', 'wrong'); }); updateScore(); };
    c.appendChild(rb); node.appendChild(c);
  }
  function updateScore() {
    var all = document.querySelectorAll('.check');
    var box = document.getElementById('check-score');
    if (!box) return;
    var a = 0, r = 0;
    all.forEach(function (n) { if (n.classList.contains('answered')) { a++; if (n.querySelector('li.right.wrong') === null && !n.querySelector('li.wrong')) r++; } });
    box.textContent = 'Knowledge checks on this page: ' + r + ' correct of ' + a + ' answered (' + all.length + ' total).';
  }

  // ---------- widget: match terms to descriptions (drag & drop) ----------
  // <div class="match" data-task="..."><dl><dt>Term</dt><dd>Description</dd>...</dl></div>
  function initMatch(node) {
    frame(node, 'Drag & drop: match');
    var dl = node.querySelector('dl');
    var pairs = [];
    var dts = dl.querySelectorAll('dt');
    dts.forEach(function (dt, i) { pairs.push({ term: dt.textContent.trim(), desc: dt.nextElementSibling.innerHTML, key: 'k' + i }); });
    dl.remove();
    var pool = el('div', 'pool');
    makeZone(pool, false, pool);
    node.appendChild(pool);
    var rows = el('div');
    var zones = [];
    pairs.forEach(function (p) {
      var row = el('div', 'match-row');
      var z = el('div', 'zone'); z.dataset.key = p.key; makeZone(z, true, pool); zones.push(z);
      var d = el('div'); d.innerHTML = p.desc;
      row.appendChild(z); row.appendChild(d); rows.appendChild(row);
    });
    node.appendChild(rows);
    function fill() { pool.innerHTML = ''; zones.forEach(function (z) { z.innerHTML = ''; }); shuffle(pairs).forEach(function (p) { pool.appendChild(makeChip(p.term, p.key)); }); }
    fill();
    var r = controls(node, function () {
      var good = 0;
      zones.forEach(function (z) { var c = z.querySelector('.chip'); if (c) { var ok = c.dataset.key === z.dataset.key; c.classList.add(ok ? 'ok' : 'bad'); c.classList.remove(ok ? 'bad' : 'ok'); if (ok) good++; } });
      setResult(r, good, zones.length);
    }, function () { fill(); r.textContent = ''; });
    node.appendChild(el('p', 'kbd-hint', 'Drag a term onto a box, or click a term and then click a box.'));
  }

  // ---------- widget: sort items into buckets ----------
  // <div class="sort" data-task="..."><ul data-bucket="Lakehouse"><li>item</li></ul><ul data-bucket="Warehouse">...</ul></div>
  function initSort(node) {
    frame(node, 'Drag & drop: categorize');
    var items = [], names = [];
    node.querySelectorAll('ul[data-bucket]').forEach(function (ul, bi) {
      names.push(ul.getAttribute('data-bucket'));
      ul.querySelectorAll('li').forEach(function (li) { items.push({ text: li.textContent.trim(), key: 'b' + bi }); });
      ul.remove();
    });
    var pool = el('div', 'pool'); makeZone(pool, false, pool); node.appendChild(pool);
    var wrap = el('div', 'buckets'); var zones = [];
    names.forEach(function (n, bi) {
      var b = el('div', 'bucket'); b.appendChild(el('h5', null, n));
      var z = el('div', 'zone'); z.dataset.key = 'b' + bi; makeZone(z, false, pool); zones.push(z);
      b.appendChild(z); wrap.appendChild(b);
    });
    node.appendChild(wrap);
    function fill() { pool.innerHTML = ''; zones.forEach(function (z) { z.innerHTML = ''; }); shuffle(items).forEach(function (it) { pool.appendChild(makeChip(it.text, it.key)); }); }
    fill();
    var r = controls(node, function () {
      var good = 0;
      zones.forEach(function (z) { z.querySelectorAll('.chip').forEach(function (c) { var ok = c.dataset.key === z.dataset.key; c.classList.remove('ok', 'bad'); c.classList.add(ok ? 'ok' : 'bad'); if (ok) good++; }); });
      var left = pool.querySelectorAll('.chip').length;
      setResult(r, good, items.length, left ? ' (' + left + ' not placed yet)' : '');
    }, function () { fill(); r.textContent = ''; });
    node.appendChild(el('p', 'kbd-hint', 'Drag each item into a category, or click an item and then click a category.'));
  }

  // ---------- widget: put steps in the right order ----------
  // <div class="order" data-task="..."><ol><li>first</li><li>second</li>...</ol></div>
  function initOrder(node) {
    frame(node, 'Drag & drop: order the steps');
    var src = node.querySelector('ol');
    var steps = []; src.querySelectorAll('li').forEach(function (li, i) { steps.push({ html: li.innerHTML, pos: i }); });
    src.remove();
    var list = el('ol', 'order-list'); node.appendChild(list);
    var dragging = null;
    function renum() { list.querySelectorAll('li').forEach(function (li, i) { li.querySelector('.n').textContent = (i + 1) + '.'; li.classList.remove('ok', 'bad'); }); }
    function fill() {
      list.innerHTML = '';
      shuffleNotSame(steps).forEach(function (s) {
        var li = el('li'); li.draggable = true; li.dataset.pos = s.pos;
        li.appendChild(el('span', 'n'));
        var t = el('span', 'txt'); t.innerHTML = s.html; li.appendChild(t);
        var up = el('button', null, '↑'); up.title = 'Move up';
        up.onclick = function () { if (li.previousElementSibling) list.insertBefore(li, li.previousElementSibling); renum(); };
        var dn = el('button', null, '↓'); dn.title = 'Move down';
        dn.onclick = function () { if (li.nextElementSibling) list.insertBefore(li.nextElementSibling, li); renum(); };
        li.appendChild(up); li.appendChild(dn);
        li.addEventListener('dragstart', function (e) { dragging = li; li.classList.add('dragging'); e.dataTransfer.setData('text/plain', 'x'); });
        li.addEventListener('dragend', function () { li.classList.remove('dragging'); dragging = null; renum(); });
        li.addEventListener('dragover', function (e) {
          e.preventDefault(); if (!dragging || dragging === li) return;
          var r = li.getBoundingClientRect();
          list.insertBefore(dragging, (e.clientY - r.top) > r.height / 2 ? li.nextSibling : li);
        });
        list.appendChild(li);
      });
      renum();
    }
    fill();
    var r = controls(node, function () {
      var good = 0;
      list.querySelectorAll('li').forEach(function (li, i) { var ok = +li.dataset.pos === i; li.classList.add(ok ? 'ok' : 'bad'); if (ok) good++; });
      setResult(r, good, steps.length);
    }, function () { fill(); r.textContent = ''; });
    node.appendChild(el('p', 'kbd-hint', 'Drag the rows, or use the arrow buttons.'));
  }

  // ---------- widget: think first, then reveal ----------
  // <div class="reveal"><p>Scenario / question</p><div class="answer">Answer</div></div>
  function initReveal(node) {
    frame(node, 'Scenario — think, then reveal');
    var b = el('button', null, 'Show answer');
    b.onclick = function () { node.classList.toggle('open'); b.textContent = node.classList.contains('open') ? 'Hide answer' : 'Show answer'; };
    var a = node.querySelector('.answer');
    node.insertBefore(b, a);
  }

  // ---------- v2 visual components ----------
  // flip cards: <div class="flips"><div class="flip"><div class="front">Q</div><div class="back">A</div></div></div>
  function initFlip(f) {
    var fc = el('div', 'fc'); while (f.firstChild) fc.appendChild(f.firstChild); f.appendChild(fc);
    f.tabIndex = 0; f.setAttribute('role', 'button');
    var t = function () { f.classList.toggle('flipped'); };
    f.addEventListener('click', t);
    f.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); t(); } });
  }
  // tabs: <div class="tabset"><section data-tab="Import">...</section>...</div>
  function initTabs(ts) {
    var secs = [].filter.call(ts.children, function (c) { return c.matches('section[data-tab]'); });
    var bar = el('div', 'tabbar'); bar.setAttribute('role', 'tablist');
    secs.forEach(function (s, i) {
      var b = el('button', i ? '' : 'on', s.getAttribute('data-tab')); b.setAttribute('role', 'tab');
      b.onclick = function () { secs.forEach(function (x, j) { x.hidden = j !== i; bar.children[j].classList.toggle('on', j === i); }); };
      bar.appendChild(b); s.hidden = i > 0;
    });
    ts.insertBefore(bar, ts.firstChild);
  }
  // stepper: <div class="stepper" data-task="..."><section data-step="Title">...</section>...</div>
  function initStepper(st) {
    var secs = [].filter.call(st.children, function (c) { return c.matches('section[data-step]'); });
    var task = st.getAttribute('data-task');
    var head = el('div', 'sthead'), title = el('div', 'sttitle'), nav = el('div', 'stnav');
    var prev = el('button', null, '← Back'), next = el('button', 'primary', 'Next →'), cur = 0;
    var dots = secs.map(function (s, i) { var d = el('button', 'dot', String(i + 1)); d.title = s.getAttribute('data-step'); d.onclick = function () { go(i); }; head.appendChild(d); return d; });
    function go(i) {
      cur = i;
      secs.forEach(function (s, j) { s.hidden = j !== i; dots[j].classList.toggle('on', j === i); if (j < i) dots[j].classList.add('seen'); });
      title.textContent = 'Step ' + (i + 1) + ' of ' + secs.length + ': ' + secs[i].getAttribute('data-step');
      prev.disabled = i === 0; next.disabled = i === secs.length - 1;
    }
    prev.onclick = function () { go(cur - 1); }; next.onclick = function () { go(cur + 1); };
    nav.appendChild(prev); nav.appendChild(next);
    if (task) st.insertBefore(el('div', 'wtitle', task), st.firstChild);
    st.insertBefore(title, secs[0]); st.insertBefore(head, title); st.appendChild(nav);
    go(0);
  }
  // decision wizard:
  // <div class="decide" data-task="Which tool?">
  //   <div data-node="start" data-q="Question?"><button data-go="n2">Yes</button><button data-go="r1">No</button></div>
  //   <div data-node="r1" data-result>Answer text</div> ...</div>
  function initDecide(d) {
    frame(d, 'Decision helper');
    var nodes = {}, first = null;
    d.querySelectorAll('[data-node]').forEach(function (n) {
      nodes[n.getAttribute('data-node')] = n; if (!first) first = n.getAttribute('data-node');
      n.hidden = true; n.classList.add('node');
      if (n.hasAttribute('data-result')) n.classList.add('answer');
      var q = n.getAttribute('data-q');
      if (q) {
        var btns = [].slice.call(n.querySelectorAll(':scope > button[data-go]'));
        var o = el('div', 'opts'); btns.forEach(function (b) { o.appendChild(b); });
        n.insertBefore(el('div', 'qq', q), n.firstChild); n.appendChild(o);
      }
    });
    var trail = el('div', 'trail'); d.insertBefore(trail, nodes[first]);
    var path = [];
    function show(id, label) {
      Object.keys(nodes).forEach(function (k) { nodes[k].hidden = k !== id; });
      if (label) path.push(label); trail.textContent = path.length ? 'Your answers: ' + path.join(' › ') : '';
    }
    d.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-go]'); if (!b || !d.contains(b)) return;
      show(b.getAttribute('data-go'), b.textContent);
    });
    var c = el('div', 'controls'); var r = el('button', null, '↺ Start over');
    r.onclick = function () { path = []; show(first); }; c.appendChild(r); d.appendChild(c);
    show(first);
  }
  // code walkthrough: <div class="walk"><pre><code>...</code></pre><ol><li data-lines="1-3,5">...</li></ol></div>
  function initWalk(w) {
    frame(w, 'Code walkthrough');
    var code = w.querySelector('pre code') || w.querySelector('pre');
    var pre = w.querySelector('pre');
    var lines = code.innerHTML.replace(/\n$/, '').split('\n');
    code.innerHTML = lines.map(function (l) { return '<span class="ln">' + (l || ' ') + '</span>'; }).join('');
    var spans = code.querySelectorAll('.ln');
    var items = w.querySelectorAll('ol > li');
    function sel(i) {
      items.forEach(function (x, j) { x.classList.toggle('on', j === i); });
      spans.forEach(function (s) { s.classList.remove('hl'); });
      (items[i].getAttribute('data-lines') || '').split(',').forEach(function (rg) {
        var p = rg.split('-'), a = +p[0], b = +(p[1] || p[0]);
        for (var k = a; k <= b; k++) if (spans[k - 1]) spans[k - 1].classList.add('hl');
      });
      pre.classList.add('dim');
    }
    items.forEach(function (li, i) { li.tabIndex = 0; li.addEventListener('click', function () { sel(i); }); li.addEventListener('keydown', function (e) { if (e.key === 'Enter') sel(i); }); });
    var hint = el('p', 'kbd-hint', 'Click a step to highlight the matching lines.'); w.insertBefore(hint, w.querySelector('ol'));
  }
  // clickable info: any element with data-info inside a container [data-infopanel] (or .flow/.layers/.icards)
  function initInfo(container) {
    var items = container.querySelectorAll('[data-info]');
    if (!items.length) return;
    var panel = el('div', 'infopanel empty', container.getAttribute('data-hint') || 'Click a box to see details.');
    container.parentNode.insertBefore(panel, container.nextSibling);
    items.forEach(function (it) {
      it.tabIndex = 0;
      var go = function () {
        items.forEach(function (x) { x.classList.toggle('sel', x === it); });
        panel.classList.remove('empty'); panel.innerHTML = '<strong>' + (it.getAttribute('data-title') || it.firstChild.textContent || '').trim() + ':</strong> ' + it.getAttribute('data-info');
      };
      it.addEventListener('click', go);
      it.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
    });
  }
  function initMatrix(t) {
    t.querySelectorAll('td').forEach(function (td) {
      var s = td.textContent.trim();
      if (/^✓|^✔/.test(s)) td.classList.add('yes'); else if (/^✗|^✘/.test(s)) td.classList.add('no'); else if (/^~|^◐/.test(s)) td.classList.add('part');
    });
  }

  function initWidgets() {
    document.querySelectorAll('main .flip').forEach(initFlip);
    document.querySelectorAll('main .tabset').forEach(initTabs);
    document.querySelectorAll('main .stepper').forEach(initStepper);
    document.querySelectorAll('main .decide').forEach(initDecide);
    document.querySelectorAll('main .walk').forEach(initWalk);
    document.querySelectorAll('main .flow, main .layers, main .icards, main [data-infopanel]').forEach(initInfo);
    document.querySelectorAll('main table.matrix').forEach(initMatrix);
    document.querySelectorAll('main .check').forEach(initCheck);
    document.querySelectorAll('main .match').forEach(initMatch);
    document.querySelectorAll('main .sort').forEach(initSort);
    document.querySelectorAll('main .order').forEach(initOrder);
    document.querySelectorAll('main .reveal').forEach(initReveal);
    var checks = document.querySelectorAll('main .check');
    if (checks.length) {
      var box = el('p', 'muted'); box.id = 'check-score';
      var foot = document.querySelector('.pagefoot');
      if (foot) foot.parentNode.insertBefore(box, foot); else document.querySelector('main').appendChild(box);
      updateScore();
    }
  }

  function start() { buildChrome(); initWidgets(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
