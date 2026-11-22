// Regression checks for activity state and timers; browser checks cover the UI.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

async function activity(file) {
  const html = await readFile(new URL(`../${file}`, import.meta.url), 'utf8');
  const nodes = new Map();
  const intervals = new Map();
  let timerId = 0;
  function node() {
    return {
      style: {}, children: [], textContent: '', className: '', checked: false,
      appendChild(child) { this.children.push(child); },
      set innerHTML(value) {
        this.html = value;
        this.children = [...value.matchAll(/<td\b/g)].map(() => node());
      },
      get innerHTML() { return this.html || ''; },
    };
  }
  const get = id => {
    if (!nodes.has(id)) nodes.set(id, node());
    return nodes.get(id);
  };
  const context = vm.createContext({
    document: { getElementById: get, createElement: node },
    setInterval(callback) { intervals.set(++timerId, callback); return timerId; },
    clearInterval(id) { intervals.delete(id); },
  });
  for (const script of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)) {
    vm.runInContext(script[1], context, { filename: file });
  }
  return { context, get, intervals, tick() { for (const callback of [...intervals.values()]) callback(); } };
}

const password = await activity('Grade 3/Activities/Password Lab.html');
const p = password.context;
p.tab(2);
for (const question of p.Q) { p.ans(question[1]); p.nq(); }
assert.equal(p.qs, 8);
assert.equal(password.get('nx').textContent, 'Play again');
p.tab(1);
p.tab(2);
p.ans(0);
assert.equal(password.get('nx').textContent, 'Next');
password.get('nx').onclick();
assert.equal(p.qi, 1, 'Re-entered quiz must advance instead of restarting');
assert.equal(p.qs, 1);
p.tab(2);
for (let n = 0; n < p.Q.length; n++) p.skipTask();
assert.equal(p.qs, 0, 'Skipping must not award points');
assert.equal(password.get('skip').style.display, 'none');
assert.equal(password.get('nx').style.display, 'inline-block');
password.get('nx').onclick();
assert.equal(p.qi, 0);
assert.equal(password.get('skip').style.display, 'inline-block');

const virus = await activity('Grade 4/Activities/Virus Outbreak.html');
virus.context.start();
virus.tick();
virus.context.resetG();
const resetText = virus.get('log').textContent;
for (let n = 0; n < 8; n++) virus.tick();
assert.equal(virus.intervals.size, 0);
assert.equal(virus.get('log').textContent, resetText);
assert.equal(virus.context.tries, 0, 'Cancelled runs must not enter history');
assert(virus.context.state.every(value => value === 0));
virus.context.start();
virus.context.start();
assert.equal(virus.intervals.size, 1, 'Start must not create duplicate runs');
for (let n = 0; n < 6; n++) virus.tick();
assert.equal(virus.context.tries, 1);
assert.equal(virus.get('hist').children.length, 1);
assert.equal(virus.context.running, false);
assert.equal(virus.intervals.size, 0);

const permission = await activity('Grade 5/Activities/App Permission Checker.html');
const a = permission.context;
for (const app of [0, 3]) { // Torch and Family Call both deny location.
  for (const choice of ['allow', 'using', 'always', 'deny']) {
    a.checked = { [app]: true };
    a.ch = {};
    a.APPS[app].r.forEach((request, index) => {
      a.ch[`${app}_${index}`] = request[0] === 'Location' ? choice : request[1];
    });
    a.leak();
    assert.equal(permission.get('leakt').textContent.startsWith('No extra data'), choice === 'deny');
  }
}
for (const app of [2, 4]) { // Maps and Weather may use location while open.
  a.checked = { [app]: true };
  a.APPS[app].r.forEach((request, index) => { a.ch[`${app}_${index}`] = request[1]; });
  a.leak();
  assert(permission.get('leakt').textContent.startsWith('No extra data'));
}
console.log('PASS: quiz restart and skip completion, outbreak cancellation/restart, and permission leak scoring.');
