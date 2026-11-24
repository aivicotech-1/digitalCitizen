import { readFile, access, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const root = fileURLToPath(new URL('../', import.meta.url));
const context = { window: {} };
vm.runInNewContext(await readFile(path.join(root, 'activities.js'), 'utf8'), context);
const activities = context.window.DIGITAL_CITIZEN_ACTIVITIES;
const index = await readFile(path.join(root, 'index.html'), 'utf8');
const ids = [...index.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'Duplicate HTML IDs');
for (const match of index.matchAll(/(?:href|aria-controls)="#?([^"/ .]+)"/g)) {
  if (match[0].startsWith('href="') && !match[0].startsWith('href="#')) continue;
  assert(ids.includes(match[1]), `Missing anchor: ${match[1]}`);
}
for (const script of ['app.js', 'activities.js', 'assets/activity-descriptions.js', 'assets/theme.js']) new vm.Script(await readFile(path.join(root, script), 'utf8'), { filename: script });
for (const page of ['index.html', 'activities.html', ...activities.map(activity => activity.path)]) {
  const html = await readFile(path.join(root, page), 'utf8');
  const theme = html.match(/<script src="([^"]*assets\/theme\.js)"><\/script>/);
  assert(theme, `Missing early theme script: ${page}`);
  assert(html.indexOf(theme[0]) < html.indexOf('<style') || html.indexOf('<style') < 0, `Theme loads after styles: ${page}`);
  await access(path.resolve(root, path.dirname(page), theme[1]));
}
let inlineScripts = 0;
assert.equal(new Set(activities.map(activity => activity.art)).size, activities.length, 'Each activity needs its own illustration');
const artworkContents = new Set();
for (const activity of activities) {
  const file = path.join(root, activity.path);
  await access(file);
  assert(/^[a-z0-9-]+$/.test(activity.art), `Invalid illustration filename: ${activity.title}`);
  const artwork = await readFile(path.join(root, 'assets/activity-art', `${activity.art}.svg`), 'utf8');
  assert(artwork.includes('viewBox="0 0 320 220"'), `Invalid illustration for ${activity.title}`);
  assert(!artworkContents.has(artwork), `Repeated artwork for ${activity.title}`);
  artworkContents.add(artwork);
  assert(activity.path.startsWith(`Grade ${activity.grade}/Activities/`), `Grade mismatch: ${activity.path}`);
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)) {
    if (/^<script\b[^>]*\bsrc=/i.test(match[0])) continue;
    new vm.Script(match[1], { filename: activity.path });
    inlineScripts++;
  }
}
for (const grade of [2, 3, 4, 5, 6, 7]) {
  const files = (await readdir(path.join(root, `Grade ${grade}/Activities`))).filter(file => /\.html?$/i.test(file));
  assert.equal(activities.filter(activity => activity.grade === grade).length, files.length, `Stale catalogue for Grade ${grade}`);
}
console.log(`PASS: ${activities.length} activity paths, grade mappings, illustrations, anchors, app syntax and ${inlineScripts} original activity scripts.`);
