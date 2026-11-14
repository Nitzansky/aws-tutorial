/* AWS GenAI Pro — offline course engine. No network, no dependencies. */
(function () {
'use strict';
var LS = 'awsgenai.v1';
var C = window.COURSE = {
  mods: [], sims: {}, exam: [],
  add: function (m) { this.mods.push(m); },
  addExam: function (qs) { this.exam = this.exam.concat(qs); },
  sim: function (id, fn) { this.sims[id] = fn; }
};
var S = { lang: 'en', theme: '', done: {}, ok: {}, missed: {}, tasks: {}, xp: 0, name: '', best: 0, last: '' };
function load() { try { var j = JSON.parse(localStorage.getItem(LS) || 'null'); if (j) for (var k in j) S[k] = j[k]; } catch (e) {} }
function save() { try { localStorage.setItem(LS, JSON.stringify(S)); } catch (e) {} }

var UI = {
  home: ['Home', 'בית'], modules: ['Modules', 'מודולים'], tools: ['Tools', 'כלים'],
  glossary: ['Glossary & flashcards', 'מילון מונחים וכרטיסיות'], practice: ['Practice', 'תרגול'],
  exam: ['Final exam', 'מבחן מסכם'], cert: ['Certificate', 'תעודה'],
  lang: ['עברית', 'English'], dark: ['Dark', 'כהה'], light: ['Light', 'בהיר'],
  cont: ['Continue', 'המשך'], start: ['Start the course', 'התחל את הקורס'],
  lessons: ['lessons', 'שיעורים'], lessonsDone: ['Lessons done', 'שיעורים שהושלמו'], exercises: ['Exercises solved', 'תרגילים שנפתרו'],
  level: ['Level', 'רמה'], min: ['min', 'דק׳'],
  quiz: ['Question', 'שאלה'], quizMulti: ['Question — pick all that apply', 'שאלה — בחר את כל התשובות הנכונות'],
  check: ['Check', 'בדיקה'], tryAgain: ['Not quite. Try again.', 'לא בדיוק. נסה שוב.'], correct: ['Correct!', 'נכון!'],
  showAns: ['Show answer', 'הצג תשובה'], hint: ['Hint', 'רמז'],
  fill: ['Fill in the code', 'השלם את הקוד'], order: ['Put in the right order', 'סדר בסדר הנכון'],
  match: ['Match the pairs', 'התאם זוגות'], reveal: ['Explain in your own words', 'הסבר במילים שלך'],
  yourAns: ['Type your answer here (only you see it)…', 'כתוב את התשובה שלך כאן (רק אתה רואה)…'],
  showModel: ['Compare with a model answer', 'השווה לתשובה לדוגמה'], modelAns: ['Model answer', 'תשובה לדוגמה'],
  termLab: ['Terminal lab', 'מעבדת טרמינל'], consLab: ['Console lab', 'מעבדת קונסול'], sim: ['Try it', 'נסה בעצמך'],
  task: ['Do it for real (when you are online)', 'עשה את זה באמת (כשיש אינטרנט)'],
  step: ['Step', 'שלב'], of: ['of', 'מתוך'], labDone: ['Lab complete!', 'המעבדה הושלמה!'],
  fixFields: ['Some fields are not right yet. They are marked in red.', 'חלק מהשדות עדיין לא נכונים. הם מסומנים באדום.'],
  typeCmd: ['type the command and press Enter — or type: hint', 'הקלד את הפקודה ולחץ Enter — או הקלד: hint'],
  prev: ['← Previous', '→ הקודם'], next: ['Next →', 'הבא ←'], markDone: ['Mark lesson as done', 'סמן שיעור כהושלם'],
  exLeft: ['exercises solved in this lesson', 'תרגילים נפתרו בשיעור הזה'], lessonDone: ['Lesson complete!', 'השיעור הושלם!'],
  jargon: ['Jargon in this module', 'מונחים במודול הזה'], search: ['Search a term…', 'חפש מונח…'],
  flash: ['Flashcards', 'כרטיסיות'], list: ['List', 'רשימה'], flip: ['click to flip', 'לחץ כדי להפוך'], nextCard: ['Next card', 'כרטיס הבא'],
  practiceIntro: ['10 questions. Questions you got wrong before come first.', '10 שאלות. שאלות שטעית בהן קודם מופיעות ראשונות.'],
  newRound: ['New round', 'סבב חדש'],
  examIntro: ['40 questions from the whole course. No feedback until the end. You pass with 80%.', '40 שאלות מכל הקורס. אין משוב עד הסוף. עוברים עם 80%.'],
  startExam: ['Start exam', 'התחל מבחן'], submit: ['Submit exam', 'הגש מבחן'], score: ['Your score', 'הציון שלך'],
  passed: ['You passed. Your certificate is unlocked.', 'עברת. התעודה שלך נפתחה.'], failed: ['Not yet. Review the answers below and try again.', 'עדיין לא. עבור על התשובות למטה ונסה שוב.'],
  best: ['Best score', 'הציון הטוב ביותר'], review: ['Review', 'סקירה'], yourName: ['Your name', 'השם שלך'],
  certLock: ['Pass the final exam (80%) to unlock the certificate.', 'עבור את המבחן המסכם (80%) כדי לפתוח את התעודה.'],
  certTitle: ['Certificate of Completion', 'תעודת סיום'], certBody: ['has completed the offline course', 'השלים/ה את הקורס'],
  certCourse: ['AWS GenAI Developer — from zero to pro', 'מפתח GenAI ב-AWS — מאפס למקצוען'], print: ['Print / save as PDF', 'הדפס / שמור כ-PDF'],
  mock: ['Rebuilt AWS console screen (not a real capture)', 'מסך קונסול AWS משוחזר (לא צילום אמיתי)'],
  reset: ['Reset progress', 'אפס התקדמות'], resetQ: ['Delete all your progress?', 'למחוק את כל ההתקדמות?'],
  noTerm: ['No definition yet.', 'אין עדיין הגדרה.'], tip: ['Tip', 'טיפ'], warn: ['Watch out', 'שים לב'], info: ['Good to know', 'כדאי לדעת'], jarg: ['Jargon', 'ז׳רגון']
};
function t(k) { var u = UI[k]; return u ? u[S.lang === 'he' ? 1 : 0] : k; }
function T(o) { if (o == null) return ''; if (typeof o !== 'object' || Array.isArray(o)) return o; return o[S.lang] != null ? o[S.lang] : o.en; }
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
function fmt(o) {
  var s = esc(T(o)), codes = [];
  s = s.replace(/`([^`]+)`/g, function (m, c) { codes.push(c); return '\u0001' + (codes.length - 1) + '\u0001'; });
  s = s.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
  s = s.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, function (m, term, d) { return '<a class="term" data-term="' + term + '">' + (d || term) + '</a>'; });
  s = s.replace(/\u0001(\d+)\u0001/g, function (m, i) { return '<code dir="ltr">' + codes[+i] + '</code>'; });
  return s.replace(/\n/g, '<br>');
}
function h(tag, attrs) {
  var e = document.createElement(tag), k, v, i, c;
  if (attrs) for (k in attrs) {
    v = attrs[k]; if (v == null || v === false) continue;
    if (k === 'class') e.className = v; else if (k === 'html') e.innerHTML = v; else if (k === 'text') e.textContent = v;
    else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), v); else e.setAttribute(k, v === true ? '' : v);
  }
  for (i = 2; i < arguments.length; i++) {
    c = arguments[i]; if (c == null || c === false) continue;
    if (Array.isArray(c)) c.forEach(function (x) { if (x != null && x !== false) e.append(x); }); else e.append(c);
  }
  return e;
}
function rng(seed) { var a = 0, i; for (i = 0; i < seed.length; i++) a = (a * 31 + seed.charCodeAt(i)) | 0; return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var x = Math.imul(a ^ a >>> 15, 1 | a); x = x + Math.imul(x ^ x >>> 7, 61 | x) ^ x; return ((x ^ x >>> 14) >>> 0) / 4294967296; }; }
function shuffle(n, seed) { var r = seed ? rng(seed) : Math.random, a = [], i, j, x; for (i = 0; i < n; i++) a.push(i); for (i = n - 1; i > 0; i--) { j = Math.floor(r() * (i + 1)); x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
function arr(o) { var v = T(o); if (Array.isArray(v)) return v.map(function (x) { return T(x); }); return []; }
function toast(msg) { var e = h('div', { class: 'toast', text: msg }); document.body.append(e); setTimeout(function () { e.remove(); }, 2200); }
function hl(code, lang) {
  if (lang === 'text' || lang === 'output') return esc(code);
  var re = /(#[^\n]*|\/\/[^\n]*)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*')|\b(import|from|def|return|class|if|else|elif|for|in|while|try|except|with|as|async|await|const|let|function|True|False|None|true|false|null|lambda|not|and|or|raise|yield)\b|\b(\d+(?:\.\d+)?)\b/g;
  var out = '', last = 0, m;
  while ((m = re.exec(code))) {
    out += esc(code.slice(last, m.index));
    var cls = m[1] ? 'c' : m[2] ? 's' : m[3] ? 'k' : 'd';
    if (m[1] && (lang === 'json')) cls = '';
    out += cls ? '<span class="' + cls + '">' + esc(m[0]) + '</span>' : esc(m[0]);
    last = m.index + m[0].length;
  }
  return out + esc(code.slice(last));
}
function norm(s) { return String(s).trim().replace(/\s+/g, ' ').replace(/[“”]/g, '"').replace(/[‘’]/g, "'").toLowerCase(); }
function expectOk(exp, val) {
  if (typeof exp === 'boolean') return !!val === exp;
  if (Array.isArray(exp)) return exp.some(function (e) { return expectOk(e, val); });
  exp = String(exp); var m = exp.match(/^\/(.*)\/$/);
  if (m) return new RegExp(m[1], 'i').test(String(val).trim());
  return norm(exp) === norm(val);
}
C.h = h; C.T = T; C.fmt = fmt; C.esc = esc; C.t = t; C.lang = function () { return S.lang; }; C.L = function (en, he) { return S.lang === 'he' ? he : en; };

/* ---------- progress ---------- */
var REQ = { quiz: 1, fill: 1, order: 1, match: 1, terminal: 1, reveal: 1, sim: 1 };
function isReq(b) { return !!REQ[b.t] || (b.t === 'console' && b.task); }
function reqKeys(L) { var r = []; L.blocks.forEach(function (b, i) { if (isReq(b)) r.push(L.id + ':' + i); }); return r; }
function lessonState(L) { var k = reqKeys(L), n = k.filter(function (x) { return S.ok[x]; }).length; return { n: n, total: k.length, done: !!S.done[L.id] }; }
function modPct(m) { var d = m.lessons.filter(function (l) { return S.done[l.id]; }).length; return m.lessons.length ? d / m.lessons.length : 0; }
function solve(key, xp) { if (!S.ok[key]) { S.ok[key] = 1; S.xp += (xp == null ? 10 : xp); save(); head(); if (C.onSolve) C.onSolve(key); } }
function levelName() {
  var p = C.lessons.length ? C.lessons.filter(function (l) { return S.done[l.id]; }).length / C.lessons.length : 0;
  var n = [['Newcomer', 'מתחיל'], ['Explorer', 'חוקר'], ['Builder', 'בונה'], ['Practitioner', 'מיומן'], ['Pro', 'מקצוען']];
  return n[Math.min(4, Math.floor(p * 4.999))][S.lang === 'he' ? 1 : 0];
}

/* ---------- blocks ---------- */
var B = {};
function exBox(ctx, label) { var e = h('div', { class: 'ex' + (ctx.done() ? ' done' : '') }, h('span', { class: 'tag', text: label })); return e; }
function markDone(box, ctx, xp) { box.classList.add('done'); ctx.solved(xp); }
B.p = function (b) { return h('p', { html: fmt(b) }); };
B.h = function (b) { return h('h2', { html: fmt(b) }); };
B.h3 = function (b) { return h('h3', { html: fmt(b) }); };
B.list = function (b) { return h(b.ordered ? 'ol' : 'ul', null, arr(b.items || b).map(function (x) { return h('li', { html: fmt(x) }); })); };
B.note = function (b) {
  var k = b.kind || 'info', lab = { tip: 'tip', warn: 'warn', info: 'info', jargon: 'jarg' }[k] || 'info';
  return h('div', { class: 'note ' + k }, h('span', { class: 'lab', text: t(lab) }), h('span', { html: fmt(b) }));
};
B.code = function (b) {
  return h('div', { class: 'blk' }, h('pre', { class: 'code', html: hl(b.code || '', b.lang) }), b.caption && h('div', { class: 'cap', html: fmt(b.caption) }));
};
B.table = function (b) {
  var head = arr(b.head), rows = T(b.rows) || [];
  return h('div', { class: 'tbl blk' }, h('table', null,
    h('thead', null, h('tr', null, head.map(function (x) { return h('th', { html: fmt(x) }); }))),
    h('tbody', null, rows.map(function (r) { return h('tr', null, r.map(function (x) { return h('td', { html: fmt(x) }); })); }))));
};
B.flow = function (b) {
  var el = h('div', { class: 'flow blk' });
  arr(b.steps).forEach(function (s, i) { if (i) el.append(h('span', { class: 'ar', text: '➜' })); el.append(h('div', { class: 'st', html: '<b>' + (i + 1) + '</b>' + fmt(s) })); });
  return h('div', null, el, b.caption && h('div', { class: 'cap', html: fmt(b.caption) }));
};
B.arch = function (b) {
  return h('div', { class: 'arch blk' }, (b.layers || []).map(function (l) {
    return h('div', { class: 'ly' }, h('span', { html: fmt(l.title) }), h('div', { class: 'it' }, (l.items || []).map(function (x) { return h('div', { html: fmt(x) }); })));
  }), b.caption && h('div', { class: 'cap', html: fmt(b.caption) }));
};
B.unknown = function (b) { return h('div', { class: 'note warn', text: 'Unknown block: ' + b.t }); };

function quizEl(b, ctx, opts) {
  opts = opts || {};
  var multi = Array.isArray(b.answer), ans = multi ? b.answer : [b.answer], options = arr(b.options);
  var order = shuffle(options.length, ctx.key), box = exBox(ctx, multi ? t('quizMulti') : t('quiz')), fb = h('div'), tries = 0, btns = [];
  box.append(h('p', { class: 'q', html: fmt(b.q) }));
  function finish(first) {
    btns.forEach(function (bt) { bt.disabled = true; if (ans.indexOf(+bt.dataset.i) >= 0) bt.className = 'opt good'; });
    fb.className = 'fb good'; fb.innerHTML = '<b>' + t('correct') + '</b> ' + fmt(b.explain || '');
    markDone(box, ctx, first ? 10 : 5); if (opts.onRight) opts.onRight(first);
  }
  function wrong() { tries++; ctx.miss(); fb.className = 'fb bad'; fb.textContent = t('tryAgain'); }
  order.forEach(function (i) {
    var bt = h('button', { class: 'opt', 'data-i': i, html: fmt(options[i]) });
    bt.addEventListener('click', function () {
      if (multi) { bt.classList.toggle('sel'); return; }
      if (ans[0] === i) finish(tries === 0); else { bt.className = 'opt bad'; bt.disabled = true; wrong(); }
    });
    btns.push(bt); box.append(bt);
  });
  if (multi) box.append(h('div', { class: 'row' }, h('button', { class: 'btn sm', text: t('check'), onclick: function () {
    var sel = btns.filter(function (x) { return x.classList.contains('sel'); }).map(function (x) { return +x.dataset.i; }).sort();
    if (sel.join() === ans.slice().sort().join()) finish(tries === 0); else wrong();
  } })));
  box.append(fb);
  if (ctx.done() && !opts.fresh) { btns.forEach(function (bt) { bt.disabled = true; if (ans.indexOf(+bt.dataset.i) >= 0) bt.className = 'opt good'; }); fb.className = 'fb good'; fb.innerHTML = fmt(b.explain || ''); }
  return box;
}
B.quiz = function (b, ctx) { return quizEl(b, ctx); };

B.fill = function (b, ctx) {
  var box = exBox(ctx, t('fill')), pre = h('pre', { class: 'code' }), inputs = [], fb = h('div'), tries = 0;
  if (b.prompt) box.append(h('p', { class: 'q', html: fmt(b.prompt) }));
  (b.code || '').split(/(\{\{\d+\}\})/).forEach(function (part) {
    var m = part.match(/^\{\{(\d+)\}\}$/);
    if (!m) { pre.append(h('span', { html: hl(part, b.lang) })); return; }
    var bl = b.blanks[+m[1] - 1] || { accept: [''] }, w = Math.max(6, String(bl.accept[0]).length + 2);
    var inp = h('input', { class: 'gap', size: w, autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false' });
    inp._bl = bl; inputs.push(inp); pre.append(inp);
    if (ctx.done()) { inp.value = bl.accept[0]; inp.classList.add('good'); }
  });
  function check() {
    var all = true;
    inputs.forEach(function (inp) { var ok = inp._bl.accept.some(function (a) { return norm(a) === norm(inp.value); }); inp.className = 'gap ' + (ok ? 'good' : 'bad'); if (!ok) all = false; });
    if (all) { fb.className = 'fb good'; fb.innerHTML = '<b>' + t('correct') + '</b> ' + fmt(b.explain || ''); markDone(box, ctx, tries ? 5 : 10); }
    else { tries++; ctx.miss(); fb.className = 'fb bad'; var hints = inputs.filter(function (i) { return i.classList.contains('bad') && i._bl.hint; }).map(function (i) { return fmt(i._bl.hint); }); fb.innerHTML = t('tryAgain') + (tries > 1 && hints.length ? '<br>' + t('hint') + ': ' + hints.join(' · ') : ''); }
  }
  pre.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); check(); } });
  box.append(pre, h('div', { class: 'row' }, h('button', { class: 'btn sm', text: t('check'), onclick: check }),
    h('button', { class: 'btn sm alt', text: t('showAns'), onclick: function () { inputs.forEach(function (i) { i.value = i._bl.accept[0]; i.className = 'gap good'; }); fb.className = 'fb good'; fb.innerHTML = fmt(b.explain || ''); markDone(box, ctx, 0); } })), fb);
  return box;
};

B.order = function (b, ctx) {
  var items = arr(b.items), box = exBox(ctx, t('order')), ul = h('ul', { class: 'ord' }), fb = h('div'), tries = 0;
  var ord = shuffle(items.length, ctx.key + 'o'); if (ord.every(function (v, i) { return v === i; })) ord.reverse();
  if (ctx.done()) ord = items.map(function (x, i) { return i; });
  if (b.prompt) box.append(h('p', { class: 'q', html: fmt(b.prompt) }));
  function draw(mark) {
    ul.innerHTML = '';
    ord.forEach(function (idx, pos) {
      ul.append(h('li', { class: mark ? (idx === pos ? 'good' : 'bad') : '' },
        h('button', { class: 'mv', text: '↑', onclick: function () { if (pos) { ord.splice(pos - 1, 0, ord.splice(pos, 1)[0]); draw(); } } }),
        h('button', { class: 'mv', text: '↓', onclick: function () { if (pos < ord.length - 1) { ord.splice(pos + 1, 0, ord.splice(pos, 1)[0]); draw(); } } }),
        h('span', { html: fmt(items[idx]) })));
    });
  }
  draw(ctx.done());
  box.append(ul, h('div', { class: 'row' }, h('button', { class: 'btn sm', text: t('check'), onclick: function () {
    draw(true);
    if (ord.every(function (v, i) { return v === i; })) { fb.className = 'fb good'; fb.innerHTML = '<b>' + t('correct') + '</b> ' + fmt(b.explain || ''); markDone(box, ctx, tries ? 5 : 10); }
    else { tries++; ctx.miss(); fb.className = 'fb bad'; fb.textContent = t('tryAgain'); }
  } })), fb);
  return box;
};

B.match = function (b, ctx) {
  var pairs = b.pairs || [], box = exBox(ctx, t('match')), left = h('div', { class: 'col' }), right = h('div', { class: 'col' }), sel = null, got = 0, wrongs = 0;
  if (b.prompt) box.append(h('p', { class: 'q', html: fmt(b.prompt) }));
  var L = [], R = [];
  pairs.forEach(function (p, i) { var bt = h('button', { html: fmt(p.a) }); bt._i = i; L.push(bt); left.append(bt); bt.addEventListener('click', function () { if (bt.classList.contains('good')) return; L.forEach(function (x) { x.classList.remove('sel'); }); bt.classList.add('sel'); sel = bt; }); });
  shuffle(pairs.length, ctx.key + 'm').forEach(function (i) {
    var bt = h('button', { html: fmt(pairs[i].b) }); bt._i = i; R.push(bt); right.append(bt);
    bt.addEventListener('click', function () {
      if (!sel || bt.classList.contains('good')) return;
      if (sel._i === bt._i) { sel.className = 'good'; bt.className = 'good'; sel = null; got++; if (got === pairs.length) markDone(box, ctx, wrongs ? 5 : 10); }
      else { wrongs++; ctx.miss(); bt.classList.add('bad'); setTimeout(function () { bt.classList.remove('bad'); }, 500); }
    });
  });
  if (ctx.done()) L.concat(R).forEach(function (x) { x.className = 'good'; });
  box.append(h('div', { class: 'match' }, left, right));
  return box;
};

B.reveal = function (b, ctx) {
  var box = exBox(ctx, t('reveal')), ans = h('div', { class: 'fb good', style: 'display:none', html: '<b>' + t('modelAns') + ':</b> ' + fmt(b.a) });
  box.append(h('p', { class: 'q', html: fmt(b.q) }), h('textarea', { class: 'ans', placeholder: t('yourAns') }),
    h('div', { class: 'row' }, h('button', { class: 'btn sm', text: t('showModel'), onclick: function () { ans.style.display = ''; markDone(box, ctx, 5); } })), ans);
  if (ctx.done()) ans.style.display = '';
  return box;
};

B.task = function (b, ctx) {
  var box = h('div', { class: 'ex task' }, h('span', { class: 'tag', style: 'background:var(--acc2)', text: t('task') }));
  if (b.title) box.append(h('p', { class: 'q', html: fmt(b.title) }));
  arr(b.steps).forEach(function (s, i) {
    var k = ctx.key + ':' + i, cb = h('input', { type: 'checkbox' }); cb.checked = !!S.tasks[k];
    cb.addEventListener('change', function () { if (cb.checked) S.tasks[k] = 1; else delete S.tasks[k]; save(); });
    box.append(h('label', null, cb, h('span', { html: fmt(s) })));
  });
  return box;
};

B.terminal = function (b, ctx) {
  var box = exBox(ctx, t('termLab')), steps = b.steps || [], si = ctx.done() ? steps.length : 0, fails = 0;
  var ask = h('div', { class: 'stepask' }), out = h('div', { class: 'out' }), inp = h('input', { type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-label': 'terminal' });
  if (b.title) box.append(h('p', { class: 'q', html: fmt(b.title) }));
  if (b.intro) box.append(h('p', { html: fmt(b.intro) }));
  function line(txt, cls) { out.append(h('div', { class: cls || '', text: txt })); out.scrollTop = out.scrollHeight; }
  function showAsk() {
    if (si >= steps.length) { ask.innerHTML = '<b>' + t('labDone') + '</b> ' + fmt(b.done || ''); inp.disabled = true; markDone(box, ctx, 15); return; }
    ask.innerHTML = '<b>' + t('step') + ' ' + (si + 1) + ' ' + t('of') + ' ' + steps.length + ':</b> ' + fmt(steps[si].ask);
  }
  inp.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return; var v = inp.value.trim().replace(/\s+/g, ' '); inp.value = ''; if (!v) return;
    line('$ ' + v, 'cmd'); var st = steps[si];
    if (v === 'clear') { out.innerHTML = ''; return; }
    if (v === 'hint' || v === 'help') { line('hint: ' + st.hint, 'dim'); return; }
    if (v === 'skip') { line(st.output || '', ''); si++; fails = 0; showAsk(); return; }
    var ok = (st.accept || []).some(function (r) { return new RegExp(r, 'i').test(v); });
    if (ok) { if (st.output) line(st.output); si++; fails = 0; showAsk(); }
    else { fails++; ctx.miss(); line(st.wrong || 'That is not the command for this step.', 'err'); if (fails >= 2) line('hint: ' + st.hint, 'dim'); }
  });
  line('# ' + t('typeCmd'), 'dim');
  box.append(ask, h('div', { class: 'term-w' }, h('div', { class: 'bar2' }, h('i'), h('i'), h('i'), h('span', { text: b.shell || 'bash — ~/my-agent' })), out, h('div', { class: 'in' }, h('span', { text: '$' }), inp)));
  box.append(h('div', { class: 'termnote', text: C.L('The commands are real. The printed output is a shortened illustration — the real tool prints more.', 'הפקודות אמיתיות. הפלט המודפס הוא המחשה מקוצרת — הכלי האמיתי מדפיס יותר.') }));
  showAsk();
  return box;
};

function statusCls(s) { return /^(Active|Ready|Available|Enabled|Completed|Complete|Success|Succeeded|Passed|Healthy|Access granted|Running|READY|ACTIVE)\b/.test(s) ? 'okc' : /^(Creating|Pending|In progress|Syncing|Updating|Draft|Working)/i.test(s) ? 'wrc' : /^(Failed|Error|Blocked|Denied|Throttled|Intervened)/i.test(s) ? 'erc' : ''; }
B.console = function (b, ctx) {
  var steps = b.steps || [{ heading: b.heading, panels: b.panels || [], alert: b.alert }], si = 0, lab = !!b.task, vals = {}, msg = h('div');
  var root = h('div', { class: lab ? 'ex' + (ctx.done() ? ' done' : '') : 'blk' }), win = h('div', { class: 'awsc' });
  if (lab) root.append(h('span', { class: 'tag', text: t('consLab') }), h('p', { class: 'q', html: fmt(b.task) }));
  function co(n) { return n ? h('span', { class: 'co', text: n }) : null; }
  function field(f, id) {
    var wrap = h('div', { class: 'fl' }), editable = lab && !f.fixed, cur = id in vals ? vals[id] : (f.value != null ? f.value : (f.type === 'toggle' || f.type === 'checkbox' ? false : ''));
    vals[id] = cur; wrap._f = f; wrap._id = id;
    var type = f.type || 'input', ctl;
    if (type === 'toggle' || type === 'checkbox') {
      ctl = h('input', { type: 'checkbox' }); ctl.checked = !!cur; ctl.disabled = !editable;
      ctl.addEventListener('change', function () { vals[id] = ctl.checked; });
      wrap.append(h('label', { class: 'tg' }, ctl, h('span', { text: f.label }), co(f.n))); if (f.help) wrap.append(h('div', { class: 'hp', text: f.help }));
      return wrap;
    }
    wrap.append(h('label', null, f.label || '', co(f.n))); if (f.help) wrap.append(h('div', { class: 'hp', text: f.help }));
    if (type === 'text') { wrap.append(h('div', { class: 'kv', text: String(cur) })); return wrap; }
    if (type === 'select') {
      ctl = h('select', null, (f.options || [cur]).map(function (o) { var op = h('option', { text: o }); if (o === cur) op.selected = true; return op; }));
      if (!editable) ctl.disabled = true; ctl.addEventListener('change', function () { vals[id] = ctl.value; }); vals[id] = ctl.value;
    } else if (type === 'radio') {
      ctl = h('div', { class: 'rg' }, (f.options || []).map(function (o) {
        var r = h('input', { type: 'radio', name: ctx.key + id }); r.checked = o === cur; r.disabled = !editable;
        r.addEventListener('change', function () { vals[id] = o; }); return h('label', null, r, h('span', { text: o }));
      }));
    } else {
      ctl = h(type === 'textarea' ? 'textarea' : 'input', type === 'textarea' ? { rows: 3 } : { type: 'text' });
      ctl.value = cur; if (f.placeholder) ctl.placeholder = f.placeholder; if (!editable) ctl.readOnly = true;
      ctl.setAttribute('autocomplete', 'off'); ctl.setAttribute('spellcheck', 'false');
      ctl.addEventListener('input', function () { vals[id] = ctl.value; });
    }
    wrap.append(ctl); return wrap;
  }
  function draw() {
    var st = steps[si], mn = h('div', { class: 'mn' }), fields = [];
    win.innerHTML = '';
    win.append(h('div', { class: 'tb' }, h('span', { class: 'logo', text: 'aws' }), h('span', { class: 'srch', text: 'Search' }), h('span', { class: 'sp' }), h('span', { text: b.region || 'N. Virginia ▾' }), h('span', { text: 'dev-account ▾' })));
    var bd = h('div', { class: 'bd' });
    if (b.nav) bd.append(h('div', { class: 'nv' }, h('b', { text: b.service || '' }), b.nav.map(function (n) { var sec = n.charAt(0) === '#'; return h('div', { class: sec ? 'sec' : (n === b.active ? 'on' : ''), text: sec ? n.slice(1) : n }); })));
    if (b.crumbs) mn.append(h('div', { class: 'cr', html: b.crumbs.map(function (c, i) { return i < b.crumbs.length - 1 ? '<a>' + esc(c) + '</a>' : esc(c); }).join(' › ') }));
    var hd = h('div', { class: 'hd' }, h('h5', { text: st.heading || b.heading || '' }));
    if (steps.length > 1) hd.append(h('span', { class: 'stp', text: 'Step ' + (si + 1) + ' of ' + steps.length }));
    (st.actions || b.actions || []).forEach(function (a, i, all) { hd.append(h('button', { class: 'b' + (i === all.length - 1 ? ' p' : ''), text: a })); });
    mn.append(hd);
    if (st.alert) mn.append(h('div', { class: 'al ' + (st.alert.type || 'info'), text: st.alert.text }));
    (st.panels || []).forEach(function (p, pi) {
      var pn = h('div', { class: 'pn' }); if (p.title) pn.append(h('h6', null, p.title, co(p.n))); if (p.desc) pn.append(h('div', { class: 'ds', text: p.desc }));
      var pb = h('div', { class: 'pb' });
      if (p.text) pb.append(h('div', { text: p.text }));
      (p.fields || []).forEach(function (f, fi) { var w = field(f, si + '.' + pi + '.' + fi); fields.push(w); pb.append(w); });
      if (p.table) pb.append(h('table', null, h('thead', null, h('tr', null, p.table.cols.map(function (c) { return h('th', { text: c }); }))),
        h('tbody', null, p.table.rows.map(function (r) { return h('tr', null, r.map(function (c) { c = String(c); var lk = c.charAt(0) === '@'; return h('td', { class: lk ? 'lk' : statusCls(c), text: lk ? c.slice(1) : c }); })); }))));
      if (p.code) pb.append(h('pre', { text: p.code }));
      pn.append(pb); mn.append(pn);
    });
    var last = si === steps.length - 1, bt = h('div', { class: 'bt' });
    var labels = st.buttons || (steps.length > 1 ? ['Cancel'].concat(si ? ['Previous'] : [], [last ? (b.primary || 'Create') : 'Next']) : (b.buttons || []));
    labels.forEach(function (lbl, i) {
      var prim = i === labels.length - 1, btn = h('button', { class: 'b' + (prim ? ' p' : lbl === 'Cancel' ? ' l' : ''), text: lbl });
      if (lab && prim) btn.addEventListener('click', function () {
        var bad = 0, hints = [];
        fields.forEach(function (w) { var f = w._f; if (f.expect === undefined) return; var ok = expectOk(f.expect, vals[w._id]); w.classList.toggle('bad', !ok); if (!ok) { bad++; if (f.hint) hints.push(fmt(f.hint)); } });
        if (bad) { ctx.miss(); msg.className = 'fb bad'; msg.innerHTML = t('fixFields') + (hints.length ? '<br>' + hints.join('<br>') : ''); return; }
        msg.className = ''; msg.innerHTML = '';
        if (!last) { si++; draw(); } else { msg.className = 'fb good'; msg.innerHTML = '<b>' + t('labDone') + '</b> ' + fmt(b.success || ''); markDone(root, ctx, 15); }
      });
      if (lab && lbl === 'Previous') btn.addEventListener('click', function () { si--; draw(); });
      bt.append(btn);
    });
    if (labels.length) mn.append(bt);
    bd.append(mn); win.append(bd);
  }
  draw(); root.append(win);
  if (b.callouts) root.append(h('ul', { class: 'cos' }, b.callouts.map(function (c) { return h('li', null, h('span', { class: 'co', text: c.n }), h('span', { html: fmt(c) })); })));
  root.append(h('div', { class: 'cap', html: (b.caption ? fmt(b.caption) + ' · ' : '') + '<i>' + t('mock') + '</i>' }), msg);
  return root;
};

B.sim = function (b, ctx) {
  var box = exBox(ctx, t('sim')), body = h('div', { class: 'sim' }), fn = C.sims[b.id];
  if (b.title) box.append(h('p', { class: 'q', html: fmt(b.title) }));
  if (b.intro) box.append(h('p', { html: fmt(b.intro) }));
  box.append(body);
  if (fn) fn(body, { solved: function () { markDone(box, ctx, 10); }, done: ctx.done, opts: b }); else body.textContent = 'Simulator not found: ' + b.id;
  return box;
};

/* ---------- pages ---------- */
var app, main, side;
function go(hash) { location.hash = hash; }
function head() { var x = document.getElementById('xp'); if (x) x.textContent = '★ ' + S.xp + ' XP'; }
function layout() {
  app.innerHTML = '';
  side = h('nav', { class: 'side' });
  main = h('main', { class: 'main' });
  app.append(h('header', { class: 'top' },
    h('button', { class: 'pill menu', text: '☰', onclick: function () { side.classList.toggle('open'); } }),
    h('a', { class: 'brand', href: '#/' }, h('b', { text: 'AWS' }), h('span', { class: 'hidem', text: 'GenAI Pro' })),
    h('span', { class: 'sp' }),
    h('span', { class: 'pill xp', id: 'xp' }),
    h('button', { class: 'pill', text: S.theme === 'dark' ? '☀ ' + t('light') : '☾ ' + t('dark'), onclick: function () { S.theme = S.theme === 'dark' ? 'light' : 'dark'; save(); render(true); } }),
    h('button', { class: 'pill', id: 'langbtn', text: '🌐 ' + t('lang'), onclick: function () { S.lang = S.lang === 'he' ? 'en' : 'he'; save(); render(true); } })),
    h('div', { class: 'wrap' }, side, main));
  head();
}
function drawSide(r) {
  side.innerHTML = '';
  side.append(h('a', { href: '#/', class: r.page === 'home' ? 'on' : '' }, h('span', { class: 'n', text: '⌂' }), t('home')), h('h4', { text: t('modules') }));
  C.mods.forEach(function (m, i) {
    var p = modPct(m), on = (r.page === 'm' && r.id === m.id) || (r.page === 'l' && C.byId[r.id] && C.byId[r.id].mod === m);
    side.append(h('a', { href: '#/m/' + m.id, class: on ? 'on' : '' }, h('span', { class: 'n' + (p === 1 ? ' full' : p > 0 ? ' part' : ''), text: p === 1 ? '✓' : i }), h('span', { html: fmt(m.title) })));
  });
  side.append(h('h4', { text: t('tools') }));
  [['glossary', '📖'], ['practice', '🎯'], ['exam', '📝'], ['cert', '🏅']].forEach(function (x) {
    side.append(h('a', { href: '#/' + x[0], class: r.page === x[0] ? 'on' : '' }, h('span', { class: 'n', text: x[1] }), t(x[0])));
  });
  side.append(h('h4', { text: ' ' }), h('a', { onclick: function () { if (confirm(t('resetQ'))) { try { localStorage.removeItem(LS); } catch (e) {} location.reload(); } } }, h('span', { class: 'n', text: '↺' }), t('reset')));
}
function pageHome() {
  var total = C.lessons.length, done = C.lessons.filter(function (l) { return S.done[l.id]; }).length, pct = total ? Math.round(done / total * 100) : 0;
  var nextL = (S.last && C.byId[S.last] && !S.done[S.last]) ? C.byId[S.last] : C.lessons.filter(function (l) { return !S.done[l.id]; })[0];
  main.append(h('div', { class: 'card hero' },
    h('div', null, h('div', { class: 'big', text: pct + '%' }), h('div', { class: 'crumb', text: t('level') + ': ' + levelName() })),
    h('div', { style: 'flex:1;min-width:240px' },
      h('h1', { style: 'font-size:1.5rem;margin:0 0 6px', text: t('certCourse') }),
      h('div', { class: 'stats' },
        h('div', null, h('b', { text: done + ' / ' + total }), h('span', { text: t('lessonsDone') })),
        h('div', null, h('b', { text: Object.keys(S.ok).length + ' / ' + C.reqTotal }), h('span', { text: t('exercises') })),
        h('div', null, h('b', { text: S.xp }), h('span', { text: 'XP' })),
        h('div', null, h('b', { text: (S.best || 0) + '%' }), h('span', { text: t('best') }))),
      h('div', { class: 'bar' }, h('i', { style: 'width:' + pct + '%' }))),
    nextL && h('a', { class: 'btn', href: '#/l/' + nextL.id, text: done ? t('cont') : t('start') })));
  main.append(h('div', { class: 'grid' }, C.mods.map(function (m, i) {
    return h('a', { class: 'card mod', href: '#/m/' + m.id }, h('div', { class: 'ic', text: m.icon || '📦' }), h('div', { class: 'crumb', text: i + ' · ' + m.lessons.length + ' ' + t('lessons') }),
      h('h3', { html: fmt(m.title) }), h('p', { html: fmt(m.summary) }), h('div', { class: 'bar' }, h('i', { style: 'width:' + Math.round(modPct(m) * 100) + '%' })));
  })));
}
function pageMod(id) {
  var m = C.mods.filter(function (x) { return x.id === id; })[0]; if (!m) return pageHome();
  main.append(h('div', { class: 'crumb' }, h('a', { href: '#/', text: t('home') }), ' › ', T(m.title)), h('h1', { html: (m.icon || '') + ' ' + fmt(m.title) }), h('p', { class: 'meta', html: fmt(m.summary) }));
  main.append(h('div', { class: 'card' }, h('ul', { class: 'llist' }, m.lessons.map(function (l) {
    var s = lessonState(l);
    return h('li', null, h('a', { href: '#/l/' + l.id }, h('span', { class: 'chk' + (s.done ? ' y' : ''), text: s.done ? '✓' : '' }), h('span', { style: 'flex:1', html: fmt(l.title) }),
      h('span', { class: 'crumb', text: (l.minutes ? l.minutes + ' ' + t('min') + ' · ' : '') + s.n + '/' + s.total })));
  }))));
  if (m.glossary && m.glossary.length) {
    main.append(h('h2', { text: t('jargon') }), h('div', { class: 'card gl' }, h('dl', null, m.glossary.map(function (g) { return [h('dt', { text: g.term }), h('dd', { html: fmt(g) })]; }).reduce(function (a, b) { return a.concat(b); }, []))));
  }
}
function pageLesson(id) {
  var L = C.byId[id]; if (!L) return pageHome();
  S.last = id; save();
  var idx = C.lessons.indexOf(L), prev = C.lessons[idx - 1], next = C.lessons[idx + 1], el = h('div', { class: 'lesson' });
  el.append(h('div', { class: 'crumb' }, h('a', { href: '#/', text: t('home') }), ' › ', h('a', { href: '#/m/' + L.mod.id, html: fmt(L.mod.title) })),
    h('h1', { html: fmt(L.title) }), h('div', { class: 'meta', text: (L.minutes ? '⏱ ' + L.minutes + ' ' + t('min') : '') }));
  L.blocks.forEach(function (b, i) {
    var key = id + ':' + i, node;
    var ctx = { key: key, solved: function (xp) { solve(key, xp); }, done: function () { return !!S.ok[key]; }, miss: function () { if (!S.ok[key]) { S.missed[key] = 1; save(); } } };
    try { node = (B[b.t] || B.unknown)(b, ctx); } catch (e) { node = h('div', { class: 'note warn', text: 'Block error (' + b.t + '): ' + e.message }); }
    el.append(node);
  });
  var info = h('span', { class: 'sp' }), doneBtn = h('button', { class: 'btn sm alt', text: t('markDone'), onclick: function () { complete(true); } });
  function complete(force) {
    var s = lessonState(L);
    if (!S.done[id] && (force || s.n === s.total)) { S.done[id] = 1; S.xp += 20; save(); head(); toast(t('lessonDone') + ' +20 XP'); drawSide(route()); }
    info.textContent = (S.done[id] ? '✓ ' : '') + s.n + ' / ' + s.total + ' ' + t('exLeft'); doneBtn.style.display = S.done[id] ? 'none' : '';
  }
  C.onSolve = function () { complete(false); };
  el.append(h('div', { class: 'foot' }, prev ? h('a', { class: 'btn sm alt', href: '#/l/' + prev.id, text: t('prev') }) : null, info, doneBtn,
    next ? h('a', { class: 'btn sm', href: '#/l/' + next.id, text: t('next') }) : h('a', { class: 'btn sm', href: '#/exam', text: t('exam') })));
  main.append(el); complete(false);
}
function pageGlossary() {
  var mode = 'list', q = '', body = h('div'), all = C.terms.slice();
  var inp = h('input', { type: 'search', placeholder: t('search'), oninput: function () { q = inp.value.toLowerCase(); draw(); } });
  function draw() {
    body.innerHTML = '';
    if (mode === 'list') {
      var f = all.filter(function (g) { return !q || g.term.toLowerCase().indexOf(q) >= 0 || T(g).toLowerCase().indexOf(q) >= 0; });
      body.append(h('div', { class: 'card' }, h('dl', null, f.map(function (g) { return [h('dt', { text: g.term }), h('dd', { html: fmt(g) })]; }).reduce(function (a, b) { return a.concat(b); }, []))));
    } else {
      var deck = shuffle(all.length), i = 0, flipped = false, card = h('div', { class: 'card flash' });
      var show = function () { var g = all[deck[i % deck.length]]; card.innerHTML = flipped ? '<div>' + fmt(g) + '<small dir="ltr">' + esc(g.term) + '</small></div>' : '<div><b dir="ltr">' + esc(g.term) + '</b><small>' + t('flip') + '</small></div>'; };
      card.addEventListener('click', function () { flipped = !flipped; show(); }); show();
      body.append(card, h('div', { class: 'row' }, h('button', { class: 'btn sm', text: t('nextCard'), onclick: function () { i++; flipped = false; show(); } }), h('span', { class: 'crumb', text: all.length + ' ' + t('glossary') })));
    }
  }
  main.append(h('h1', { text: '📖 ' + t('glossary') }), h('div', { class: 'gl' }, h('div', { class: 'row' },
    h('button', { class: 'btn sm alt', text: t('list'), onclick: function () { mode = 'list'; draw(); } }), h('button', { class: 'btn sm alt', text: t('flash'), onclick: function () { mode = 'flash'; draw(); } })), inp, body));
  draw();
}
function pagePractice() {
  main.append(h('h1', { text: '🎯 ' + t('practice') }), h('p', { class: 'meta', text: t('practiceIntro') }));
  var missed = C.quizzes.filter(function (q) { return S.missed[q.key]; }), rest = C.quizzes.filter(function (q) { return !S.missed[q.key]; });
  var pick = shuffle(missed.length).map(function (i) { return missed[i]; }).concat(shuffle(rest.length).map(function (i) { return rest[i]; })).slice(0, 10);
  pick.forEach(function (q, n) {
    var d = false, ctx = { key: q.key + ':p' + n + Math.random(), solved: function () { d = true; }, done: function () { return d; }, miss: function () { S.missed[q.key] = 1; save(); } };
    main.append(h('div', { class: 'crumb', html: fmt(q.lesson.mod.title) + ' › ' + fmt(q.lesson.title) }), quizEl(q.b, ctx, { fresh: true, onRight: function (first) { if (first) { delete S.missed[q.key]; save(); } } }));
  });
  main.append(h('button', { class: 'btn', text: t('newRound'), onclick: function () { render(); } }));
}
function pageExam() {
  main.append(h('h1', { text: '📝 ' + t('exam') }), h('p', { class: 'meta', text: t('examIntro') + ' ' + t('best') + ': ' + (S.best || 0) + '%' }));
  var area = h('div');
  main.append(h('button', { class: 'btn', text: t('startExam'), onclick: function (e) { e.target.remove(); run(); } }), area);
  function run() {
    var pool = C.exam.map(function (b, i) { return { b: b, key: 'exam' + i }; }), ex = shuffle(pool.length).map(function (i) { return pool[i]; }).slice(0, 25);
    var ls = shuffle(C.quizzes.length).map(function (i) { return C.quizzes[i]; }).slice(0, 40 - ex.length), qs = ex.concat(ls), picks = [];
    qs = shuffle(qs.length).map(function (i) { return qs[i]; });
    qs.forEach(function (q, n) {
      var b = q.b, multi = Array.isArray(b.answer), options = arr(b.options), box = h('div', { class: 'ex' }, h('span', { class: 'tag', text: (n + 1) + ' / ' + qs.length + (multi ? ' · ' + t('quizMulti') : '') }), h('p', { class: 'q', html: fmt(b.q) }));
      picks[n] = [];
      shuffle(options.length).forEach(function (i) {
        var bt = h('button', { class: 'opt', 'data-i': i, html: fmt(options[i]) });
        bt.addEventListener('click', function () {
          if (multi) { bt.classList.toggle('sel'); var k = picks[n].indexOf(i); if (k >= 0) picks[n].splice(k, 1); else picks[n].push(i); }
          else { box.querySelectorAll('.opt').forEach(function (x) { x.classList.remove('sel'); }); bt.classList.add('sel'); picks[n] = [i]; }
        });
        box.append(bt);
      });
      q.box = box; area.append(box);
    });
    area.append(h('button', { class: 'btn', text: t('submit'), onclick: function (e) {
      var right = 0;
      qs.forEach(function (q, n) {
        var ans = (Array.isArray(q.b.answer) ? q.b.answer : [q.b.answer]).slice().sort().join(), ok = picks[n].slice().sort().join() === ans; if (ok) right++;
        q.box.querySelectorAll('.opt').forEach(function (bt) { bt.disabled = true; var i = +bt.dataset.i, good = ans.split(',').indexOf(String(i)) >= 0; if (good) bt.classList.add('good'); else if (bt.classList.contains('sel')) bt.classList.add('bad'); });
        q.box.append(h('div', { class: 'fb ' + (ok ? 'good' : 'bad'), html: fmt(q.b.explain || '') }));
        if (!ok && q.key.indexOf('exam') !== 0) S.missed[q.key] = 1;
      });
      var pct = Math.round(right / qs.length * 100); if (pct > (S.best || 0)) S.best = pct; save();
      e.target.remove();
      var res = h('div', { class: 'card', style: 'margin-bottom:18px' }, h('div', { class: 'big', style: 'font-size:2.2rem;font-weight:800', text: t('score') + ': ' + pct + '%' }), h('p', { text: pct >= 80 ? t('passed') : t('failed') }),
        pct >= 80 ? h('a', { class: 'btn', href: '#/cert', text: t('cert') }) : h('button', { class: 'btn', text: t('exam'), onclick: function () { render(); } }));
      area.prepend(res); window.scrollTo(0, 0);
    } }));
  }
}
function pageCert() {
  main.append(h('h1', { class: 'noprint', text: '🏅 ' + t('cert') }));
  if ((S.best || 0) < 80) { main.append(h('div', { class: 'card' }, h('p', { text: t('certLock') }), h('a', { class: 'btn', href: '#/exam', text: t('exam') }))); return; }
  var nm = h('div', { class: 'nm', text: S.name || '—' });
  var inp = h('input', { type: 'text', value: S.name || '', placeholder: t('yourName'), style: 'padding:8px 12px;border-radius:10px;border:1px solid var(--line);font:inherit;background:var(--panel);color:var(--ink)', oninput: function () { S.name = inp.value; save(); nm.textContent = S.name || '—'; } });
  main.append(h('div', { class: 'row noprint', style: 'margin-bottom:16px' }, inp, h('button', { class: 'btn sm', text: t('print'), onclick: function () { window.print(); } })),
    h('div', { class: 'cert' }, h('div', { class: 'crumb', text: 'AWS GenAI Pro' }), h('h2', { text: t('certTitle') }), nm, h('p', { text: t('certBody') }), h('h3', { text: t('certCourse') }),
      h('p', { class: 'crumb', text: t('score') + ': ' + S.best + '% · ' + new Date().toLocaleDateString(S.lang === 'he' ? 'he-IL' : 'en-GB') })));
}

function route() { var p = location.hash.replace(/^#\/?/, '').split('/'); return { page: p[0] || 'home', id: p[1] }; }
function render(keep) {
  var y = window.scrollY, r = route();
  document.documentElement.lang = S.lang; document.documentElement.dir = S.lang === 'he' ? 'rtl' : 'ltr';
  if (S.theme) document.documentElement.setAttribute('data-theme', S.theme);
  C.onSolve = null; layout(); drawSide(r);
  ({ home: pageHome, m: pageMod, l: pageLesson, glossary: pageGlossary, practice: pagePractice, exam: pageExam, cert: pageCert }[r.page] || pageHome)(r.id);
  window.scrollTo(0, keep === true ? y : 0);
}
document.addEventListener('click', function (e) {
  var old = document.querySelector('.pop'); if (old) old.remove();
  var a = e.target.closest && e.target.closest('a.term'); if (!a) return;
  e.preventDefault();
  var g = C.G[a.dataset.term.toLowerCase()], r = a.getBoundingClientRect();
  var pop = h('div', { class: 'pop' }, h('b', { text: g ? g.term : a.dataset.term }), h('span', { html: g ? fmt(g) : t('noTerm') }));
  document.body.append(pop);
  var left = Math.min(Math.max(8, r.left + window.scrollX), window.scrollX + document.documentElement.clientWidth - pop.offsetWidth - 8);
  pop.style.left = left + 'px'; pop.style.top = (r.bottom + window.scrollY + 6) + 'px';
});

C.start = function () {
  load();
  if (!S.theme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) S.theme = 'dark';
  C.mods.sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
  C.lessons = []; C.byId = {}; C.quizzes = []; C.G = {}; C.terms = []; C.reqTotal = 0;
  C.mods.forEach(function (m) {
    (m.glossary || []).forEach(function (g) { var k = g.term.toLowerCase(); if (!C.G[k]) { C.G[k] = g; C.terms.push(g); } (g.aka || []).forEach(function (x) { if (!C.G[x.toLowerCase()]) C.G[x.toLowerCase()] = g; }); });
    m.lessons.forEach(function (l) {
      l.mod = m; C.lessons.push(l); C.byId[l.id] = l;
      l.blocks.forEach(function (b, i) { if (isReq(b)) C.reqTotal++; if (b.t === 'quiz') C.quizzes.push({ key: l.id + ':' + i, b: b, lesson: l }); });
    });
  });
  C.terms.sort(function (a, b) { return a.term.toLowerCase() < b.term.toLowerCase() ? -1 : 1; });
  app = document.getElementById('app');
  window.addEventListener('hashchange', function () { render(); });
  render();
};
})();
