#!/usr/bin/env node
/* Checks the course content files. Usage: node tools/validate.js [content/m07.js ...]  (no args = all) */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..'), dir = path.join(root, 'content');
const all = fs.readdirSync(dir).filter(f => /^m\d\d\.js$/.test(f) || f === 'exam.js').sort();
const only = process.argv.slice(2).map(f => path.basename(f));
const SIMS = ['tokens', 'sampling', 'agentloop', 'rag', 'guardrail', 'memory', 'trace', 'judge'];
const TYPES = ['p', 'h', 'h3', 'list', 'note', 'code', 'table', 'flow', 'arch', 'quiz', 'fill', 'order', 'match', 'reveal', 'task', 'terminal', 'console', 'sim'];
const mods = [], exam = [], errs = [], warns = [], fileOf = {};
for (const f of all) {
  const ctx = { COURSE: { add: m => { mods.push(m); fileOf[m.id] = f; }, addExam: q => { q.forEach(x => { x._f = f; exam.push(x); }); } } };
  try { vm.runInNewContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx, { filename: f }); } catch (e) { errs.push(`${f}: does not parse: ${e.message}`); }
}
const G = {};
mods.forEach(m => (m.glossary || []).forEach(g => { G[g.term.toLowerCase()] = 1; (g.aka || []).forEach(a => G[a.toLowerCase()] = 1); }));
const heb = s => /[֐-׿]/.test(s);
function bi(o, where, opt) {
  if (o == null) { if (!opt) errs.push(`${where}: missing text`); return; }
  if (typeof o === 'string') { if (!opt || !opt.plainOk) warns.push(`${where}: plain string (no he) "${o.slice(0, 40)}"`); terms(o, where); return; }
  for (const l of ['en', 'he']) {
    if (o[l] == null) { errs.push(`${where}: missing ${l}`); continue; }
    const v = o[l]; (Array.isArray(v) ? v.flat(3) : [v]).forEach(s => { if (typeof s === 'string') terms(s, where); else if (s && typeof s === 'object') bi(s, where, { plainOk: 1 }); });
  }
  if (typeof o.he === 'string' && o.he.length > 25 && !heb(o.he)) warns.push(`${where}: he text has no Hebrew letters`);
  if (Array.isArray(o.en) && Array.isArray(o.he) && o.en.length !== o.he.length) errs.push(`${where}: en has ${o.en.length} items, he has ${o.he.length}`);
}
function terms(s, where) { (s.match(/\[\[([^\]|]+)/g) || []).forEach(t => { const k = t.slice(2).toLowerCase(); if (!G[k]) errs.push(`${where}: [[${t.slice(2)}]] is not in any glossary`); }); if ((s.match(/`/g) || []).length % 2) errs.push(`${where}: odd number of backticks`); if ((s.match(/\*\*/g) || []).length % 2) errs.push(`${where}: unbalanced **`); }
function quiz(b, w) {
  bi(b.q, w + '.q'); bi(b.explain, w + '.explain');
  let n = 0;
  if (Array.isArray(b.options)) { n = b.options.length; b.options.forEach((o, i) => bi(o, `${w}.options[${i}]`, { plainOk: 1 })); }
  else if (b.options) { bi(b.options, w + '.options'); n = (b.options.en || []).length; }
  else errs.push(`${w}: no options`);
  if (n < 2) errs.push(`${w}: needs at least 2 options`);
  const a = Array.isArray(b.answer) ? b.answer : [b.answer];
  if (!a.length || a.some(x => typeof x !== 'number' || x < 0 || x >= n)) errs.push(`${w}: answer index out of range`);
  if (Array.isArray(b.answer) && b.answer.length < 2) warns.push(`${w}: multi-answer with a single answer`);
  JSON.stringify(b.options).replace(/all of the above|none of the above|כל התשובות|אף תשובה/gi, () => { errs.push(`${w}: options are shuffled — do not use "all/none of the above"`); });
}
const ids = {}, ansPos = {};
mods.forEach(m => {
  const f = fileOf[m.id]; if (only.length && !only.includes(f)) return;
  if (!/^m\d\d$/.test(m.id) || f !== m.id + '.js') errs.push(`${f}: module id "${m.id}" must match the file name`);
  bi(m.title, f + ' title'); bi(m.summary, f + ' summary');
  if (!m.glossary || m.glossary.length < 8) warns.push(`${f}: fewer than 8 glossary terms`);
  (m.glossary || []).forEach(g => bi(g, `${f} glossary "${g.term}"`));
  if (!m.lessons || !m.lessons.length) { errs.push(`${f}: no lessons`); return; }
  m.lessons.forEach((l, li) => {
    const lw = `${f} ${l.id}`;
    if (!new RegExp('^' + m.id + 'l\\d+$').test(l.id || '')) errs.push(`${lw}: lesson id must look like ${m.id}l${li + 1}`);
    if (ids[l.id]) errs.push(`${lw}: duplicate lesson id`); ids[l.id] = 1;
    bi(l.title, lw + ' title');
    let inter = 0;
    (l.blocks || []).forEach((b, i) => {
      const w = `${lw} block ${i} (${b.t})`;
      if (!TYPES.includes(b.t)) { errs.push(`${w}: unknown block type`); return; }
      if (['quiz', 'fill', 'order', 'match', 'reveal', 'terminal', 'sim'].includes(b.t) || (b.t === 'console' && b.task)) inter++;
      switch (b.t) {
        case 'p': case 'h': case 'h3': case 'note': bi(b, w); break;
        case 'list': bi(b.items || b, w); break;
        case 'code': if (typeof b.code !== 'string') errs.push(`${w}: code must be a string`); bi(b.caption, w + '.caption', { opt: 1 }); break;
        case 'table': bi(b.head, w + '.head'); bi(b.rows, w + '.rows'); for (const l2 of ['en', 'he']) (b.rows && b.rows[l2] || []).forEach(r => { if (r.length !== (b.head[l2] || []).length) errs.push(`${w}: a ${l2} row has ${r.length} cells, head has ${(b.head[l2] || []).length}`); }); break;
        case 'flow': bi(b.steps, w + '.steps'); break;
        case 'arch': (b.layers || []).forEach((y, k) => { bi(y.title, `${w}.layers[${k}].title`); (y.items || []).forEach(x => bi(x, w + '.item', { plainOk: 1 })); }); break;
        case 'quiz': quiz(b, w); if (!Array.isArray(b.answer)) ansPos[b.answer] = (ansPos[b.answer] || 0) + 1; break;
        case 'fill': {
          bi(b.prompt, w + '.prompt'); bi(b.explain, w + '.explain');
          const mk = (b.code || '').match(/\{\{(\d+)\}\}/g) || [];
          if (!mk.length) errs.push(`${w}: no {{1}} markers in code`);
          mk.forEach(x => { const n = +x.slice(2, -2); if (!b.blanks || !b.blanks[n - 1]) errs.push(`${w}: marker ${x} has no blank`); });
          (b.blanks || []).forEach((bl, k) => { if (!Array.isArray(bl.accept) || !bl.accept.length) errs.push(`${w}: blank ${k + 1} needs accept[]`); if (bl.hint) bi(bl.hint, w + '.hint'); });
          if ((b.blanks || []).length !== new Set(mk).size) errs.push(`${w}: ${new Set(mk).size} markers but ${(b.blanks || []).length} blanks`);
          break; }
        case 'order': bi(b.prompt, w + '.prompt'); bi(b.items, w + '.items'); if ((b.items.en || []).length < 3) errs.push(`${w}: needs 3+ items`); break;
        case 'match': bi(b.prompt, w + '.prompt'); if (!b.pairs || b.pairs.length < 3) errs.push(`${w}: needs 3+ pairs`); (b.pairs || []).forEach(p => { bi(p.a, w + '.a', { plainOk: 1 }); bi(p.b, w + '.b', { plainOk: 1 }); }); break;
        case 'reveal': bi(b.q, w + '.q'); bi(b.a, w + '.a'); break;
        case 'task': bi(b.title, w + '.title'); bi(b.steps, w + '.steps'); break;
        case 'terminal':
          bi(b.title, w + '.title'); if (b.done) bi(b.done, w + '.done');
          if (!b.steps || !b.steps.length) errs.push(`${w}: no steps`);
          (b.steps || []).forEach((s, k) => {
            bi(s.ask, `${w}.steps[${k}].ask`);
            if (!s.hint) errs.push(`${w}.steps[${k}]: needs hint (the literal command)`);
            let ok = false; (s.accept || []).forEach(r => { try { if (new RegExp(r, 'i').test(s.hint || '')) ok = true; } catch (e) { errs.push(`${w}.steps[${k}]: bad regex ${r}`); } });
            if (!ok) errs.push(`${w}.steps[${k}]: the hint command does not match any accept regex`);
          }); break;
        case 'console': {
          if (b.task) bi(b.task, w + '.task'); if (b.caption) bi(b.caption, w + '.caption'); if (b.success) bi(b.success, w + '.success');
          (b.callouts || []).forEach(c => bi(c, w + '.callout'));
          const steps = b.steps || [{ heading: b.heading, panels: b.panels || [] }]; let exp = 0; const ns = new Set();
          steps.forEach(s => (s.panels || []).forEach(p => { if (p.n) ns.add(p.n); if (p.table) p.table.rows.forEach(r => { if (r.length !== p.table.cols.length) errs.push(`${w}: table row width differs from cols`); }); (p.fields || []).forEach(fl => {
            if (fl.n) ns.add(fl.n);
            if (fl.expect !== undefined) { exp++; if (fl.hint) bi(fl.hint, w + '.field hint'); else warns.push(`${w}: field "${fl.label}" has expect but no hint`);
              if ((fl.type === 'select' || fl.type === 'radio') && typeof fl.expect === 'string' && !(fl.options || []).includes(fl.expect)) errs.push(`${w}: field "${fl.label}" expect is not one of its options`);
              if ((fl.type === 'select' || fl.type === 'radio') && fl.value === fl.expect) warns.push(`${w}: field "${fl.label}" already starts on the right answer`); }
            if ((fl.type === 'select' || fl.type === 'radio') && !fl.options) errs.push(`${w}: field "${fl.label}" needs options`);
          }); }));
          if (b.task && !exp) errs.push(`${w}: a lab (task) needs at least one field with expect`);
          (b.callouts || []).forEach(c => { if (!ns.has(c.n)) errs.push(`${w}: callout ${c.n} points to nothing (no field/panel with n:${c.n})`); });
          break; }
        case 'sim': if (!SIMS.includes(b.id)) errs.push(`${w}: unknown sim id "${b.id}"`); bi(b.title, w + '.title'); break;
      }
    });
    if (inter < 4) warns.push(`${lw}: only ${inter} interactive blocks (want 4+)`);
  });
});
if (!only.length || only.includes('exam.js')) exam.forEach((q, i) => quiz(q, `exam.js q${i}`));
warns.forEach(w => console.log('warn  ' + w)); errs.forEach(e => console.log('ERROR ' + e));
const lessons = mods.reduce((a, m) => a + (m.lessons || []).length, 0);
console.log(`\n${mods.length} modules, ${lessons} lessons, ${Object.keys(G).length} glossary keys, ${exam.length} exam questions. Single-answer positions: ${JSON.stringify(ansPos)}`);
console.log(errs.length ? `FAILED: ${errs.length} error(s), ${warns.length} warning(s)` : `OK (${warns.length} warning(s))`);
process.exit(errs.length ? 1 : 0);
