# Authoring guide for DP-600 portal pages

Offline, self-contained static site. **No external resources** (no CDN, no web fonts, no remote images,
no fetch). Only relative links. Must work when opened via file:// and from any web sub-path.

## Page skeleton (copy exactly)
```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Direct Lake in depth – DP-600</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
<main>
<h1>Direct Lake in depth</h1>
<p class="lead">One or two sentences: what this page covers and which exam skills it maps to.</p>

<h2>First topic</h2>
...
</main>
<script src="assets/app.js"></script>
</body>
</html>
```
app.js adds the top bar, sidebar navigation, "On this page" TOC (built from `<h2>`), prev/next and the
"Mark page as studied" button. Don't add your own navigation. Page list lives in `assets/app.js` (PAGES).

## Content elements
- Headings: one `<h1>`, sections `<h2>`, subsections `<h3>`.
- Tables: wrap in `<div class="tw"><table>…</table></div>`.
- Callouts: `<div class="note">`, `<div class="tip">`, `<div class="warn">`, `<div class="exam">` (prefixes "Exam tip:").
- Code: `<pre><code>…</code></pre>` (escape `<`, `>` and `&`).
- Collapsible deep-dive: `<details><summary>Title</summary>…</details>`.
- Diagrams: inline `<svg>` in `<div class="diagram">`; use `currentColor` / CSS vars so it works in dark mode.
- Links to other pages: e.g. `<a href="11-direct-lake.html">Direct Lake</a>`. Links to Microsoft Learn are
  OK as optional "further reading" (they need internet), but the page must not depend on them.

## Interactive widgets (declarative HTML, app.js makes them interactive)
```html
<!-- single-answer knowledge check; data-answer = 1-based index of the correct <li> -->
<div class="check" data-answer="2">
  <p>Question text?</p>
  <ul><li>Option 1</li><li>Option 2</li><li>Option 3</li><li>Option 4</li></ul>
  <p class="why">Why option 2 is right and the others are wrong.</p>
</div>

<!-- drag & drop: match term to description (4-8 pairs) -->
<div class="match" data-task="Match each item to its description.">
  <dl><dt>Term A</dt><dd>Description of A</dd><dt>Term B</dt><dd>Description of B</dd></dl>
</div>

<!-- drag & drop: sort items into categories (2-4 buckets, 6-12 items) -->
<div class="sort" data-task="Which store fits each requirement?">
  <ul data-bucket="Lakehouse"><li>item</li><li>item</li></ul>
  <ul data-bucket="Warehouse"><li>item</li></ul>
</div>

<!-- drag & drop: order steps; write the <li> in the CORRECT order, app.js shuffles -->
<div class="order" data-task="Put the deployment steps in order.">
  <ol><li>Step 1</li><li>Step 2</li><li>Step 3</li></ol>
</div>

<!-- scenario with hidden answer -->
<div class="reveal"><p>Scenario…</p><div class="answer">Answer and reasoning…</div></div>
```
Item/term texts in match/sort must be unique within one widget.

## Quality bar
- Exam-relevant, accurate as of late 2026 (DP-600 outline revised 2026-04-20: Maintain 25–30%,
  Prepare data 45–50%, Semantic models 25–30%). Current names: Activator, OneLake security, Fabric
  data agent, Copy job, Dataflow Gen2, Direct Lake on OneLake vs Direct Lake on SQL endpoint, no
  automatic default semantic models.
- Explain *when to choose what*, defaults, limits, required roles/permissions, and common traps.
- Each page: ≥ 4 knowledge checks, ≥ 2 drag & drop widgets, ≥ 1 reveal scenario, comparison tables
  where useful, an "Exam tips / key takeaways" section at the end.
- Escape HTML special characters in text and code.
