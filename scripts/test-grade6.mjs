// State regressions for Grade 6. Real browser checks cover layout and keyboard input.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

async function activity(name) {
  const html = await readFile(new URL(`../Grade 6/Activities/${name}.html`, import.meta.url), 'utf8');
  const nodes = new Map(), timers = new Map();
  let clock = 0, timerId = 0;
  const document = { activeElement: { id: '' } };
  function node(id = '') {
    const el = { id, style: {}, className: '', textContent: '', innerHTML: '', disabled: false,
      setAttribute(key, value) { this[key] = String(value); },
      focus() { document.activeElement = this; }, appendChild() {}, remove() {} };
    el.classList = {
      add(value) { el.className += ` ${value}`; },
      remove(value) { el.className = el.className.split(' ').filter(x => x !== value).join(' '); },
    };
    return el;
  }
  const get = id => { if (!nodes.has(id)) nodes.set(id, node(id)); return nodes.get(id); };
  document.getElementById = get;
  document.createElement = () => node();
  function schedule(fn, delay = 0, interval = false) {
    const id = ++timerId;
    timers.set(id, { fn, at: clock + delay, interval: interval ? delay : 0 });
    return id;
  }
  const context = vm.createContext({ document,
    setTimeout: (fn, ms) => schedule(fn, ms), clearTimeout: id => timers.delete(id),
    setInterval: (fn, ms) => schedule(fn, ms, true), clearInterval: id => timers.delete(id),
    requestAnimationFrame: fn => schedule(fn),
  });
  for (const script of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)) {
    vm.runInContext(script[1], context, { filename: name });
  }
  function advance(ms) {
    const until = clock + ms;
    for (let n = 0; n < 1000; n++) {
      const next = [...timers].sort((a, b) => a[1].at - b[1].at)[0];
      if (!next || next[1].at > until) { clock = until; return; }
      const [id, timer] = next;
      clock = timer.at;
      if (timer.interval) timer.at += timer.interval; else timers.delete(id);
      timer.fn();
    }
    throw new Error('Timer loop did not settle');
  }
  return { c: context, get, advance };
}

for (const backup of [true, false]) {
  const { c, get, advance } = await activity('Ransomware Outbreak');
  for (const key of ['walls', 'train', backup ? 'backup' : 'filter']) c.tog(key);
  c.attack();
  assert.equal(get('step').textContent, '2 / 3');
  advance(12000);
  assert.equal(Object.keys(c.inf).length, 4);
  c.recovery();
  assert.equal(get('step').textContent, '3 / 3');
  if (!backup) {
    c.rp(3);
    assert.equal(c.SCORE, 0, 'An unavailable backup must not award points');
    assert.match(get('left').innerHTML, /Choose the 3 right actions/);
  }
  for (const choice of backup ? [0, 2, 3, 5] : [0, 2, 5]) c.rp(choice);
  assert.equal(c.stage, 'complete');
  assert.equal(c.SCORE, backup ? 100 : 70);
  if (backup) {
    assert(Object.values(c.inf).every(value => value === 'r'));
    assert(!get('net').innerHTML.includes('class="pc inf'), 'Restored PCs must not stay infected');
  }
  const finalScore = c.SCORE;
  // Try again both before the delayed report and after closing it.
  for (const choice of [1, 4, 5]) c.rp(choice);
  c.end(4);
  advance(1000);
  const report = get('mText').innerHTML;
  get('modal').className = 'modal';
  c.rp(1); c.rp(4); c.end(4); c.recovery(); c.attack();
  advance(1000);
  assert.equal(c.SCORE, finalScore, 'Completion bonus must be awarded only once');
  assert.equal(get('mText').innerHTML, report);
  assert.equal(get('modal').className, 'modal');
  for (let k = 0; k < 6; k++) assert.equal(get(`st${k}`).disabled, true);
}
{
  const { c, get, advance } = await activity('Ransomware Outbreak');
  for (const key of ['backup', 'updates', 'filter']) c.tog(key);
  c.attack(); advance(5000);
  assert.equal(c.SCORE, 60);
  assert.equal(c.stage, 'complete');
  assert.match(get('mText').innerHTML, /No computers were locked/);
  assert(!get('mText').innerHTML.includes('brought every file back'));
}
{
  const { c, get } = await activity('Incident Room');
  c.next(); assert.equal(c.i, 0, 'Do not advance an unanswered phase');
  for (let phase = 0; phase < 5; phase++) {
    c.pick(0);
    if (phase === 1 || phase === 3) c.pick(1);
    c.next();
  }
  assert.equal(c.SCORE, 70);
  assert.equal(c.hist.length, 7);
  const report = get('report').innerHTML;
  get('modal').className = 'modal';
  for (let k = 0; k < 3; k++) { c.pick(k); assert.equal(get(`c${k}`).disabled, true); }
  c.next(); c.next();
  assert.equal(c.i, 5);
  assert.equal(c.SCORE, 70);
  assert.equal(get('report').innerHTML, report);
  assert.equal(get('modal').className, 'modal');
}
{
  const { c, get } = await activity('Phone Trap');
  for (let k = 0; k < 6; k++) { c.pick(1); c.pick(0); c.next(); }
  assert.equal(c.SCORE, 60);
  assert.equal(get('step').textContent, '6 / 6');
}
{
  const { c, advance, get } = await activity('Inbox Inspector');
  for (let k = 0; k < 8; k++) { c.openE(k); c.act(c.E[k].ph ? 'report' : 'trust'); c.act('delete'); }
  advance(1000);
  assert.equal(c.SCORE, 80);
  assert.equal(get('step').textContent, '8 / 8');
}
{
  const { c, advance, get } = await activity('File Inspector');
  c.toggle(); c.toggle2();
  assert.equal(get('sw')['aria-pressed'], 'true');
  assert.equal(get('sw2')['aria-pressed'], 'true');
  for (let k = 0; k < 8; k++) { c.pick(k); c.judge(k === 1 ? 'ask' : c.F[k].v); c.judge('safe'); }
  advance(1000);
  assert.equal(c.SCORE, 76, 'Asking about a dangerous file earns six points');
  assert.equal(get('step').textContent, '8 / 8');
}
{
  const { c, advance, get } = await activity('Firewall Gatekeeper');
  for (const port of [3389, 22, 445]) c.setR(port, 'block');
  let expected = 0;
  for (let wave = 0; wave < 2; wave++) {
    c.wave(); c.wave(); // Repeated input during a wave must not start another one.
    advance(12000);
    assert.equal(c.st.aOk, 0);
    assert.equal(c.st.vNo, 0);
    assert.equal(c.st.vOk + c.st.aNo, 14);
    expected += c.st.vOk * 3 + c.st.aNo * 5;
    assert.equal(c.SCORE, expected);
  }
  c.wave(); advance(12000);
  assert.equal(c.w, 2);
  assert.equal(c.SCORE, expected);
  assert.equal(get('step').textContent, '2 / 2');
}
console.log('PASS: all six Grade 6 activity flows, completion guards, backup branches, progress and scoring.');
