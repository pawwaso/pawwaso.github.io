// Smoke test for the DP-600 portal. Run: node dp600course/tools/test.js
// Needs: /usr/bin/chromium and /workspace/.tools/node_modules/playwright-core
const path = require('path'), fs = require('fs');
const { chromium } = require('/workspace/.tools/node_modules/playwright-core');
const root = path.resolve(__dirname, '..');

(async () => {
  const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] });
  const ctx = await browser.newContext();
  // fail loudly if any page tries to reach the network
  const external = [];
  await ctx.route(/^https?:/, r => { external.push(r.request().url()); r.abort(); });
  const pages = fs.readdirSync(root).filter(f => f.endsWith('.html')).sort();
  let failures = 0;
  for (const f of pages) {
    const p = await ctx.newPage();
    const errs = [];
    p.on('pageerror', e => errs.push('pageerror: ' + e.message));
    p.on('console', m => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
    await p.goto('file://' + path.join(root, f));
    const info = await p.evaluate(() => ({
      nav: !!document.querySelector('.sidebar'),
      h1: (document.querySelector('h1') || {}).textContent,
      checks: document.querySelectorAll('.check.widget').length,
      match: document.querySelectorAll('.match.widget').length,
      sort: document.querySelectorAll('.sort.widget').length,
      order: document.querySelectorAll('.order.widget').length,
      reveal: document.querySelectorAll('.reveal.widget').length,
      badChecks: [...document.querySelectorAll('.check')].filter(c => { const a = +c.dataset.answer, n = c.querySelectorAll('ul>li').length; return !(a >= 1 && a <= n); }).length,
      brokenLinks: [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')).filter(h => !/^(https?:|#|mailto:)/.test(h)).map(h => h.split('#')[0]).filter(Boolean),
      kb: Math.round(document.documentElement.outerHTML.length / 1024)
    }));
    const missing = [...new Set(info.brokenLinks)].filter(h => !fs.existsSync(path.join(root, h)));
    // exercise widgets: answer every check, run Check on every drag&drop widget
    await p.evaluate(() => {
      document.querySelectorAll('.check li:first-child').forEach(li => li.click());
      document.querySelectorAll('.widget .controls button.primary').forEach(b => b.click());
    });
    const problems = [...errs];
    if (!info.nav) problems.push('no navigation (app.js not loaded?)');
    if (info.badChecks) problems.push(info.badChecks + ' knowledge checks with invalid data-answer');
    if (missing.length) problems.push('missing link targets: ' + missing.join(', '));
    if (problems.length) failures++;
    console.log(`${problems.length ? 'FAIL' : 'ok  '} ${f.padEnd(30)} ${String(info.kb).padStart(4)} KB  checks ${info.checks}  match ${info.match}  sort ${info.sort}  order ${info.order}  reveal ${info.reveal}`);
    problems.forEach(x => console.log('       - ' + x));
    await p.close();
  }
  // practice page flow
  const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + path.join(root, 'practice.html'));
  await p.selectOption('#count', '10');
  await p.click('#start');
  for (let i = 0; i < 10; i++) { await p.click('#opts .opt >> nth=0'); await p.click('#nextq'); }
  const res = await p.textContent('#results');
  await p.selectOption('#mode', 'exam').catch(() => {});
  console.log((errs.length || !/correct/.test(res) ? 'FAIL' : 'ok  ') + ' practice flow: ' + res.slice(0, 80).replace(/\s+/g, ' ') + (errs.length ? ' ' + errs.join('; ') : ''));
  if (errs.length) failures++;
  // exam flow
  await p.goto('file://' + path.join(root, 'practice.html'));
  await p.selectOption('#mode', 'exam'); await p.selectOption('#count', '10'); await p.click('#start');
  await p.click('#opts .opt >> nth=1'); await p.click('#finish'); await p.click('#finish');
  const er = await p.textContent('#results');
  console.log((/simulation result/.test(er) ? 'ok  ' : 'FAIL') + ' exam flow: ' + er.slice(0, 80).replace(/\s+/g, ' '));
  if (external.length) { failures++; console.log('FAIL external requests: ' + [...new Set(external)].join(', ')); }
  await browser.close();
  console.log(failures ? failures + ' failure(s)' : 'all good');
  process.exit(failures ? 1 : 0);
})();
