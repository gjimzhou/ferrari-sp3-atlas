import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {validate} from '../assets/js/core.js';
import {mediaOf,art} from '../assets/js/media.js';

globalThis.window={};
const registry=JSON.parse(readFileSync(new URL('../data/registry.json',import.meta.url)));
const records=validate(registry);
const sourceOnly=records.flatMap(r=>mediaOf(r)).filter(p=>!p.url);
assert.ok(sourceOnly.length>0,'Source-only records must survive frontend validation');
assert.ok(sourceOnly.every(p=>p.source_url.startsWith('https://')&&p.credit));
const record=records.find(r=>r.photos.some(p=>!p.url));
const photo=record.photos.find(p=>!p.url);
assert.ok(!art({...record,photos:[photo]}).includes('<img'),'No empty image request');
for(const invalid of [{...photo,source_url:''},{...photo,url:'javascript:alert(1)'}]){
 assert.throws(()=>validate([{...record,photos:[invalid]}]));
}
console.log('Frontend photo rights checks passed: source-only links retained; unsafe images rejected.');
