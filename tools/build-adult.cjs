// Builds the ADULT edition of the Natural Disasters website (the adult/ folder).
// Usage (from the Natural-Disasters folder):  node tools/build-adult.cjs
//
// The kid site (index.html and the 10 hazard folders) is written by hand and stays the default.
// The adult site is built from:
//   adult-lessons/<Folder>.md     — each hazard's course (Introduction, Lesson N, Case Studies, References)
//   tools/adult/<slug>.json       — its one-line description and 2 pictures (files in img/adult/)
// It also keeps a "Switch to adult mode" button at the top right of every kid page.
// Don't edit adult/**/*.html by hand: edit the .md/.json files and run this script again.
"use strict";
const fs = require("fs"), path = require("path");

const SITE = {};
SITE.VERSION = 'V.1.6'; // tools/whats-new in the alanwang.info repo updates this line

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "adult");
const HAS_POPUP = fs.existsSync(path.join(ROOT, "whats-new.js"));

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
// Adult lessons also write short powers/indices without braces: e^(kt), 2^m, (−1)^d, E_j, ‖·‖_TV.
// These become real superscripts/subscripts too (adult pages only; kid pages are left exactly as written).
let ADULT_NOTATION = true; // every page this script builds is an adult page
const NICE = function (h) {
    var B = "(?<=[\\p{L}\\p{N}\\p{M})\\]}|‖′∑∏∫∮⋂⋃₀-₌ₐ-ₜ×]|</su[bp]>)";
    var P2 = "(?:[^()<>]|\\((?:[^()<>]|\\([^()<>]*\\))*\\))";
    var rules = [
      [/\^\{([^{}<>]{1,80})\}/g, "<sup>$1</sup>"], [/_\{([^{}<>]{1,80})\}/g, "<sub>$1</sub>"],
      [/([\p{L}])\^([\p{L}])\^([\p{L}∞])/gu, "$1<sup>$2<sup>$3</sup></sup>"],
      [new RegExp(B + "\\^(\\|[^|<>]{1,20}\\||⌊[^⌋<>]{1,20}⌋|⌈[^⌉<>]{1,20}⌉|[ℕℤℚℝℂ⊥∞×𝔄-𝔷](?:\\([^()<>]{1,20}\\))?)", "gu"), "<sup>$1</sup>"],
      [new RegExp(B + "\\^\\((" + P2 + "{1,60})\\)", "gu"), "<sup>$1</sup>"],
      [new RegExp(B + "\\^(\\p{L}{1,6}\\([^()<>]{1,30}\\))", "gu"), "<sup>$1</sup>"],
      [new RegExp(B + "\\^([−-]?[\\p{L}\\p{N}∞×]{1,3})(?![\\p{L}\\p{N}({])", "gu"), "<sup>$1</sup>"],
      [new RegExp(B + "_\\((" + P2 + "{1,60})\\)", "gu"), "<sub>$1</sub>"],
      [new RegExp(B + "_([\\p{L}\\p{N}∞]{1,4})(?![\\p{L}\\p{N}{_])", "gu"), "<sub>$1</sub>"]
    ];
    for (var i = 0; i < 4; i++) { var n = h; rules.forEach(function (r) { n = n.replace(r[0], r[1]); }); if (n === h) break; h = n; }
    return h;
  };
const notation = (h) => (ADULT_NOTATION ? NICE(h) : h);
// x^{n+1} and a_{ij} (used where Unicode has no super/subscript) become real superscripts/subscripts
const supsub = (h) => {
  for (let i = 0; i < 4; i++) { // innermost first, so nested ones like 10^{10^{34}} work too
    const n = h.replace(/\^\{([^{}]{1,80})\}/g, "<sup>$1</sup>").replace(/_\{([^{}]{1,80})\}/g, "<sub>$1</sub>");
    if (n === h) break; h = n;
  }
  return h;
};
const DECOR = /^\s*[─═━]{3,}\s*$/;
const LIST = /^(\s{0,3})(\d{1,3}[.)]|\([a-z0-9]{1,3}\)|[a-h]\)|[•●▪◦·✓✔☐→*]|[-–])\s+/;
const LESSON_EMOJI = ["🚀", "🧩", "🎯", "🔍", "⚡", "🌟", "🛠️", "🎨", "🏗️", "🧪", "🪄", "🎢", "🦉", "🧭"];

function inline(s) {
  let h = esc(s);
  h = h.replace(/^(Answers?|Check|Hint|Trick|Why|Method [A-Z]|Step \d+|Upgrade \d+|Worked [Ee]xample(?: [A-Z0-9.]+)?)(:| —)/, "<strong>$1</strong>$2");
  h = h.replace(/^((?:Theorem|Lemma|Definition|Corollary|Proposition|Remark|Example|Worked example|Proof(?: sketch| outline| of [^.:]{1,50})?|Sketch of proof|Idea of proof|Claim|Notation|Exercise)(?: [0-9]+(?:\.[0-9]+)*)?(?: \([^)]{1,80}\))?)(\.(?!\d)|:| —)/, "<strong>$1</strong>$2");
  return notation(supsub(h));
}

function dedent(lines) {
  const ind = Math.min(...lines.filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length));
  return lines.map((l) => l.slice(ind)).join("\n").replace(/\s+$/, "");
}

// ---------- read one lesson file into sections ----------
function isSectionTitle(line) {
  return /^(Introduction|Lesson \d+:.*|Case Studies|References)$/.test(line.trim()) && !/^\s/.test(line);
}

function readLesson(file) {
  const raw = fs.readFileSync(file, "utf8").replace(/\r/g, "").replace(/^﻿/, "");
  const lines = raw.split("\n").map((l) => l.replace(/\s+$/, "").replace(/^# /, ""));
  const prose = lines.filter((l) => /^\S/.test(l));
  const wrapped = prose.filter((l) => l.length > 110).length === 0; // lines hard-wrapped at ~75 characters
  const blank = (i) => i < 0 || i >= lines.length || !lines[i].trim() || DECOR.test(lines[i]);
  let title = "", sections = [], cur = null;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (DECOR.test(l)) { if (cur) cur.lines.push(""); continue; }
    if (!title && l.trim()) { title = l.trim(); continue; }
    if (isSectionTitle(l) && blank(i - 1) && blank(i + 1)) {
      cur = { title: l.trim(), lines: [] };
      sections.push(cur);
      continue;
    }
    if (cur) cur.lines.push(l);
  }
  return { title, sections, wrapped };
}

// ---------- turn a section's lines into HTML ----------
function blocksOf(lines, wrapped) {
  const out = [];
  let b = [];
  for (const l of lines) {
    if (!l.trim()) { if (b.length) out.push(b); b = []; continue; }
    // "Answers:", "✏️ Your Turn" and "📌" always start their own block, even without a blank line before them
    if (b.length && /^(Answers?\b|✏|📌)/.test(l)) { out.push(b); b = []; }
    // a list that starts straight after a normal line becomes its own block
    if (!wrapped && b.length && LIST.test(l) && !LIST.test(b[0]) && !/^\s{4,}/.test(b[b.length - 1])) { out.push(b); b = []; }
    b.push(l);
  }
  if (b.length) out.push(b);
  return out;
}

function isHeading(text) {
  const t = text.trim();
  if (t.length > 80 || t.length < 3) return false;
  if (/^(Check|Answers?|Hint|Note)\b/i.test(t)) return false;
  if (/[.,;:]$/.test(t) || /✅$/.test(t) || /∎$/.test(t)) return false;
  if (/[.!?] [A-Z(]/.test(t.replace(/\b(?:St|Mt|Ft|Mr|Dr|U\.S|D\.C)\./g, '')) || /^[·•]/.test(t)) return false;
  if (/\?$/.test(t) && /=/.test(t)) return false;
  if ((/^[a-z(0-9]/.test(t) && !/^\d{2,4}(?:(?:[–-]| and )\d{2,4})?s?,? \p{Lu}/u.test(t)) || / · /.test(t)) return false;
  return true;
}

// Each item: {k:'h'|'p'|'pre'|'list', ...}
function parseItems(lines, wrapped) {
  const items = [];
  for (const block of blocksOf(lines, wrapped)) {
    if (LIST.test(block[0])) {
      const lis = [];
      for (const l of block) {
        const m = l.match(LIST);
        if (m) lis.push({ ci: m[0].length, marker: m[2], parts: [{ t: "text", s: l.slice(m[0].length).trim() }] });
        else {
          const li = lis[lis.length - 1], ind = l.match(/^\s*/)[0].length;
          const last = li.parts[li.parts.length - 1];
          if (ind >= 8 && (last.t === "pre" || /\S {2,}\S/.test(l.trim()) || ind >= li.ci + 6)) {
            if (last.t === "pre") last.lines.push(l); else li.parts.push({ t: "pre", lines: [l] });
          } else if (last.t === "text" && wrapped && !/^\s*\(?[a-z0-9]\)/.test(l)) last.s += " " + l.trim();
          else li.parts.push({ t: "text", s: l.trim(), br: true });
        }
      }
      // "(a) … (b) … (c) …" written on one line becomes separate items
      const split = [];
      for (const li of lis) {
        const t = li.parts.length === 1 && li.parts[0].t === "text" && /^\([a-h]\)$/.test(li.marker) ? li.parts[0].s : null;
        const bits = t ? t.split(/\s+(?=\([b-h]\)\s)/) : [];
        if (bits.length > 1) {
          split.push({ ...li, parts: [{ t: "text", s: bits[0] }] });
          for (const bit of bits.slice(1)) { const m = bit.match(/^(\([b-h]\))\s+([\s\S]*)$/); split.push({ ci: li.ci, marker: m[1], parts: [{ t: "text", s: m[2] }] }); }
        } else split.push(li);
      }
      items.push({ k: "list", lis: split });
      continue;
    }
    // split into runs of prose lines and indented (display) lines
    let run = null;
    const flush = () => {
      if (!run) return;
      if (run.pre) items.push({ k: "pre", s: dedent(run.lines) });
      else if (wrapped) pushText(items, run.lines.map((x) => x.trim()).join(" "));
      else run.lines.forEach((x) => pushText(items, x.trim()));
      run = null;
    };
    for (const l of block) {
      const pre = /^\s{4,}/.test(l) || (/^\s{2,}/.test(l) && !LIST.test(l) && run && run.pre);
      if (!run || run.pre !== pre) { flush(); run = { pre, lines: [] }; }
      run.lines.push(l);
    }
    flush();
  }
  return items;
}
function pushText(items, t) {
  if (/^(🟢|🟡|🟠|🔴|🔵|🟣)/.test(t) && t.length < 90) items.push({ k: "h", s: t, cls: "level" });
  else if (/^Problems? \d/.test(t) && t.length < 200) items.push({ k: "h", s: t, cls: "group", lvl: 4 });
  else if (isHeading(t) && !/^(📌|✏|🎉|💡)/.test(t)) items.push({ k: "h", s: t });
  else items.push({ k: "p", s: t });
}

function itemHTML(it) {
  if (it.k === "h") return `<h${it.lvl || 3}${it.cls ? ` class="${it.cls}"` : ""}>${inline(it.s)}</h${it.lvl || 3}>`;
  if (it.k === "pre") return `<pre class="math">${notation(supsub(esc(it.s)))}</pre>`;
  if (it.k === "list") {
    return '<ul class="steps">' + it.lis.map((li) => '<li><span class="mk">' + esc(li.marker) + "</span><div>" +
      li.parts.map((p) => p.t === "pre" ? `<pre class="math">${notation(supsub(esc(dedent(p.lines))))}</pre>` : (p.br ? "<br>" : "") + inline(p.s)).join(" ") +
      "</div></li>").join("") + "</ul>";
  }
  const t = it.s;
  if (/^🎉/.test(t)) return `<p class="celebrate">${inline(t)}</p>`;
  if (/^💡/.test(t)) return `<p class="tipbox">${inline(t)}</p>`;
  return `<p>${inline(t)}</p>`;
}

// group items into Key Idea boxes and Your Turn boxes
function sectionHTML(lines, wrapped, M) {
  const adult = M.id === "adult";
  const items = parseItems(lines, wrapped), out = [];
  for (let i = 0; i < items.length; i++) {
    const it = items[i];
    const text = it.k === "p" || it.k === "h" ? it.s : "";
    if (/^📌/.test(text)) {
      const label = text.replace(/^📌\s*/, "").replace(/:$/, "") || "Key idea";
      const body = [];
      while (i + 1 < items.length && (items[i + 1].k === "pre" || (body.length === 0 && items[i + 1].k === "p" && label.length < 20))) body.push(items[++i]);
      out.push(`<div class="box key"><p class="box-title">${adult ? "" : "📌 "}${inline(label)}</p>${body.map(itemHTML).join("")}</div>`);
      continue;
    }
    if (/^✏️?\s*your turn/i.test(text)) {
      const q = [], a = [];
      let j = i + 1;
      for (; j < items.length; j++) {
        const n = items[j], nt = n.k === "p" || n.k === "h" ? n.s : "";
        if (/^(📌|✏)/.test(nt) || (n.k === "h" && !a.length && q.length)) break;
        if (/^Answers?\b/i.test(nt) && !a.length) { a.push(n); continue; }
        if (a.length) { if (n.k === "pre" || n.k === "list" || (n.k === "p" && /^\(/.test(nt))) { a.push(n); continue; } break; }
        q.push(n);
      }
      i = j - 1;
      out.push(`<div class="box turn"><p class="box-title">${adult ? "Exercise" : "✏️ Your Turn!"}</p>` + q.map(itemHTML).join("") +
        (a.length ? `<details><summary>${adult ? "Show solution" : "👀 Show the answers"}</summary><div class="answers">` + a.map(itemHTML).join("") + "</div></details>" : "") + "</div>");
      continue;
    }
    out.push(itemHTML(it));
  }
  return out.join("\n");
}
// ---------- the hazards ----------
const HAZARDS = [
  { folder: "Volcanoes", name: "Volcanic Eruptions", group: "geo" },
  { folder: "Earthquakes", name: "Earthquakes", group: "geo" },
  { folder: "Tsunamis", name: "Tsunamis", group: "geo" },
  { folder: "Hurricanes", name: "Tropical Cyclones (Hurricanes)", group: "met" },
  { folder: "Tornadoes", name: "Tornadoes", group: "met" },
  { folder: "Floods", name: "Floods", group: "hyd" },
  { folder: "Droughts", name: "Droughts", group: "hyd" },
  { folder: "Wildfires", name: "Wildfires", group: "hyd" },
  { folder: "Avalanches", name: "Snow Avalanches", group: "mass" },
  { folder: "Mudslides", name: "Landslides and Debris Flows", group: "mass" },
].map((h) => ({ ...h, slug: h.folder.toLowerCase() }));
const GROUPS = [
  { id: "geo", name: "Geophysical hazards", blurb: "Volcanism, seismicity and the ocean waves they generate." },
  { id: "met", name: "Meteorological hazards", blurb: "Severe convective storms and tropical cyclones." },
  { id: "hyd", name: "Hydrological and climatological hazards", blurb: "Too much water, too little water, and the fires that follow drought." },
  { id: "mass", name: "Mass movements", blurb: "Gravity-driven flows of snow, soil, rock and debris." },
];
const M = { id: "adult" }; // the shared parser below uses M.id to choose adult wording

// ---------- page chrome ----------
function page({ depth, title, desc, body, active, switchTo }) {
  const up = depth ? "../" : "";          // to adult/
  const toRoot = up + "../";              // to the repo root (whats-new.js, img/)
  const nav = HAZARDS.map((h) => `<a href="${up}${h.slug}/index.html"${active === h.slug ? ' class="active"' : ""}>${esc(h.folder === "Mudslides" ? "Landslides" : h.folder === "Hurricanes" ? "Cyclones" : h.folder)}</a>`).join("\n      ");
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="stylesheet" href="${up}adult.css">
</head>
<body id="top" class="mode-adult">

<header class="site-header">
  <div class="container nav-wrap">
    <a class="logo" href="${up}index.html">Natural Disasters · Advanced</a>
    <nav class="site-nav" aria-label="Hazards">
      <a href="${up}index.html"${active === "home" ? ' class="active"' : ""}>Home</a>
      ${nav}
    </nav>
    <a class="mode-switch" href="${switchTo}">Switch to kid mode</a>
  </div>
</header>

${body}

<footer class="site-footer">
  <div class="container">
    <p>Natural Disasters · Advanced Edition · ${HAZARDS.length} hazards</p>
    <p><a href="#top" onclick="window.scrollTo({top:0,behavior:'smooth'});return false;">Back to top</a></p>
  </div>
</footer>
<div id="page-version" aria-label="Page version" style="position:fixed;left:8px;bottom:6px;z-index:2147483647;pointer-events:none;font:700 11px/1 system-ui,sans-serif;letter-spacing:.5px;color:#fff;background:rgba(0,0,0,.45);padding:3px 7px;border-radius:6px;opacity:.8">${SITE.VERSION}</div>
${HAS_POPUP ? `<!-- WHATS-NEW:START -->\n<script src="${toRoot}whats-new.js" defer></script>\n<!-- WHATS-NEW:END -->\n` : ""}</body>
</html>
`;
}

function partInfo(sec) {
  const t = sec.title;
  if (t === "Introduction") return { file: "index.html", chip: "Overview", short: "Overview", kind: "start" };
  if (t === "Case Studies") return { file: "case-studies.html", chip: "Case studies", short: "Case Studies", kind: "cases" };
  if (t === "References") return { file: "references.html", chip: "References", short: "References", kind: "refs" };
  const m = t.match(/^Lesson (\d+):\s*(.*)$/);
  return { file: `lesson-${m[1]}.html`, chip: m[1], short: `Lesson ${m[1]}`, name: m[2], num: +m[1], kind: "lesson" };
}

function buildHazard(h) {
  const md = path.join(ROOT, "adult-lessons", h.folder + ".md"), jf = path.join(__dirname, "adult", h.slug + ".json");
  if (!fs.existsSync(md) || !fs.existsSync(jf)) { console.log(`  (skipped ${h.slug}: files not ready)`); return null; }
  const meta = JSON.parse(fs.readFileSync(jf, "utf8"));
  const L = readLesson(md);
  const parts = L.sections.map((s) => ({ sec: s, ...partInfo(s) }));
  const lessons = parts.filter((p) => p.kind === "lesson");
  const cases = parts.find((p) => p.kind === "cases");
  const nCases = cases ? parseItems(cases.sec.lines, L.wrapped).filter((it) => it.k === "h").length : 0;
  const refs = parts.find((p) => p.kind === "refs");
  const nRefs = refs ? refs.sec.lines.filter((l) => /^\s{0,3}\d{1,3}\.\s/.test(l)).length : 0;
  const dir = path.join(OUT, h.slug);
  fs.mkdirSync(dir, { recursive: true });
  for (const old of fs.readdirSync(dir)) if (old.endsWith(".html")) fs.unlinkSync(path.join(dir, old));
  const group = GROUPS.find((g) => g.id === h.group);
  const switchTo = `../../${h.folder}/facts-and-history.html`;
  const chips = (here) => '<nav class="part-nav" aria-label="Parts of this course">' + parts.map((p) =>
    `<a href="${p.file}"${p === here ? ' class="here" aria-current="page"' : ""} title="${esc(p.kind === "lesson" ? p.short + ": " + p.name : p.short)}">${esc(p.chip)}</a>`).join("") + "</nav>";
  parts.forEach((p, idx) => {
    const prev = parts[idx - 1], next = parts[idx + 1];
    const heading = p.kind === "lesson" ? p.name : p.kind === "start" ? h.name : p.short;
    const kicker = p.kind === "lesson" ? `Lesson ${p.num} of ${lessons.length}` : p.kind === "start" ? `${group.name} · An advanced course` : p.kind === "cases" ? `${nCases} historical events` : `${nRefs} sources`;
    let main = "";
    if (p.kind === "start") {
      main += `<div class="welcome">${sectionHTML(p.sec.lines, L.wrapped, M)}</div>`;
      main += '<h2>Figures</h2><div class="picture-row">' + meta.pics.map((pic, i) => `
    <figure class="picture">
      <img src="../../${pic.img}" alt="${esc(pic.alt || "")}" loading="lazy">
      <figcaption><strong>Figure ${i + 1}.</strong> ${esc(pic.caption || "")} <a href="#sources">Source</a></figcaption>
    </figure>`).join("") + "</div>";
      main += '<h2>Contents</h2><div class="lesson-list">' + parts.slice(1).map((q) => `
    <a class="lesson-card" href="${q.file}"><span><span class="lc-num">${esc(q.short)}</span><br><strong>${esc(q.kind === "lesson" ? q.name : q.kind === "cases" ? `${nCases} major events analysed` : `${nRefs} sources for further reading`)}</strong></span></a>`).join("") + "</div>";
      main += '<section class="sources" id="sources"><h2>Image sources</h2><ol>' + meta.pics.map((pic, i) =>
        `<li><strong>Figure ${i + 1}</strong> · ${esc(pic.title.replace(/\.[a-z]+$/i, ""))}. ${/^From /.test(pic.artist || "") ? "" : "By "}${esc(pic.artist || "unknown")}. ${esc(/public domain/i.test(pic.license) ? "Public domain" : pic.license)}. From Wikimedia Commons: <a href="${esc(pic.page)}">${esc(decodeURI(pic.page))}</a></li>`).join("") + "</ol></section>";
    } else {
      main += `<article class="lesson${p.kind === "refs" ? " refs" : ""}">${sectionHTML(p.sec.lines, L.wrapped, M)}</article>`;
    }
    const pager = `<nav class="pager" aria-label="Next and previous">${prev ? `<a class="btn ghost" href="${prev.file}">← ${esc(prev.short)}</a>` : `<a class="btn ghost" href="../index.html">All hazards</a>`}${next ? `<a class="btn" href="${next.file}">${esc(next.short)} →</a>` : `<a class="btn" href="../index.html">Back to all hazards</a>`}</nav>`;
    const body = `<section class="hero topic-hero">
  <div class="container">
    <p class="crumbs"><a href="../index.html">Home</a> › ${p.kind === "start" ? `<span aria-current="page">${esc(h.name)}</span>` : `<a href="index.html">${esc(h.name)}</a> › ${esc(p.short)}`}</p>
    <h1>${esc(heading)}</h1>
    <p class="kicker">${kicker}</p>
  </div>
</section>

<main class="container">
  ${chips(p)}
  ${main}
  ${pager}
</main>`;
    const title = p.kind === "start" ? `${h.name} — Natural Disasters (Advanced)` : `${p.kind === "lesson" ? p.short + ": " + p.name : p.short} — ${h.name} (Advanced)`;
    fs.writeFileSync(path.join(dir, p.file), page({ depth: 1, title, desc: meta.blurb, body, active: h.slug, switchTo }));
  });
  return { ...h, blurb: meta.blurb, lessons: lessons.length, cases: nCases, refs: nRefs, cover: meta.pics[0] };
}

function buildHome(built) {
  const groups = GROUPS.map((g) => {
    const cards = built.filter((t) => t.group === g.id).map((t) => `
      <a class="topic-card" href="${t.slug}/index.html">
        ${t.cover ? `<img src="../${t.cover.img}" alt="${esc(t.cover.alt || "")}" loading="lazy">` : ""}
        <span class="tc-body">
          <span class="tc-title">${esc(t.name)}</span>
          <span class="tc-blurb">${esc(t.blurb)}</span>
          <span class="tc-meta">${t.lessons} lessons · ${t.cases} case studies · ${t.refs} references</span>
        </span>
      </a>`).join("");
    return cards ? `
  <section class="group" id="${g.id}">
    <h2>${esc(g.name)}</h2>
    <p class="group-blurb">${esc(g.blurb)}</p>
    <div class="topic-grid">${cards}
    </div>
  </section>` : "";
  }).join("\n");
  const total = built.reduce((n, t) => n + t.lessons, 0), cases = built.reduce((n, t) => n + t.cases, 0);
  const body = `<section class="hero home-hero">
  <div class="container">
    <h1>Natural Disasters</h1>
    <p class="kicker">Advanced Edition</p>
    <p>${built.length} natural hazards treated at a graduate and professional level: ${total} lessons on the physical processes, measurement, modelling, forecasting and risk reduction, with ${cases} detailed case studies.</p>
    <a class="btn big" href="#geo">Browse the hazards</a>
  </div>
</section>

<main class="container">
  <h2>About this edition</h2>
  <p class="intro">The Advanced Edition covers the same ten hazards as the children's site, written for adults, students and practitioners. Each hazard is a self-contained course: an overview, a sequence of technical lessons with worked quantitative exercises, analyses of major historical events, and a list of references for further study.</p>
  <div class="how">
    <div class="how-step"><span>1</span><p><strong>Choose a hazard</strong> from the four groups below.</p></div>
    <div class="how-step"><span>2</span><p><strong>Work through the lessons</strong> in order; each builds on the previous ones.</p></div>
    <div class="how-step"><span>3</span><p><strong>Attempt the exercises</strong> before opening their solutions.</p></div>
    <div class="how-step"><span>4</span><p><strong>Study the case studies</strong> and follow up the references.</p></div>
  </div>
${groups}
</main>`;
  fs.writeFileSync(path.join(OUT, "index.html"), page({ depth: 0, title: "Natural Disasters — Advanced Edition", desc: "Ten natural hazards at graduate level: physical processes, measurement, forecasting, risk reduction and major case studies.", body, active: "home", switchTo: "../index.html" }));
}

// ---------- the kid pages get a "Switch to adult mode" button (top right of the header) ----------
function addKidSwitches(builtSlugs) {
  const SW = /\s*<a class="mode-switch"[^>]*>[^<]*<\/a>/;
  const kidPages = [path.join(ROOT, "index.html")];
  for (const h of HAZARDS) for (const f of ["facts-and-history.html", "pictures.html", "famous-disasters.html"]) kidPages.push(path.join(ROOT, h.folder, f));
  let n = 0;
  for (const f of kidPages) {
    if (!fs.existsSync(f)) continue;
    let s = fs.readFileSync(f, "utf8");
    const nl = s.includes("\r\n") ? "\r\n" : "\n";
    const isHome = path.dirname(f) === ROOT;
    const h = isHome ? null : HAZARDS.find((x) => x.folder === path.basename(path.dirname(f)));
    const href = isHome ? "adult/index.html" : (builtSlugs.includes(h.slug) ? `../adult/${h.slug}/index.html` : "../adult/index.html");
    const link = `<a class="mode-switch" href="${href}">🎓 Switch to adult mode</a>`;
    s = s.replace(SW, "");
    const i = s.indexOf("</nav>", s.indexOf('class="site-nav"'));
    if (i < 0) { console.log("  ! no site-nav in", f); continue; }
    s = s.slice(0, i + 6) + nl + "    " + link + s.slice(i + 6);
    fs.writeFileSync(f, s); n++;
  }
  return n;
}

// ---------- go! ----------
fs.mkdirSync(OUT, { recursive: true });
const built = HAZARDS.map(buildHazard).filter(Boolean);
buildHome(built);
const n = addKidSwitches(built.map((b) => b.slug));
for (const b of built) console.log(`${b.name}: ${b.lessons} lessons, ${b.cases} case studies, ${b.refs} references`);
console.log(`\nBuilt ${built.length} adult hazards; switch button on ${n} kid pages (${SITE.VERSION}).`);
