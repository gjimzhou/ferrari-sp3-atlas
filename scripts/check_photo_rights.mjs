import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {validate} from '../assets/js/core.js';
import {mediaOf,art,firstPhotoIndex} from '../assets/js/media.js';

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
const image={url:'https://example.com/car.jpg',source_url:'https://example.com/source',caption:'Car',credit:'Photographer'};
const mixed=validate([{...record,photos:[photo,image]}])[0];
assert.match(art(mixed),/src="https:\/\/example.com\/car.jpg"/,'Use the first displayable photo for the card');
assert.equal(mediaOf(mixed)[0].source_url,photo.source_url,'Keep source-only gallery entries in their original order');
assert.equal(mediaOf(mixed).length,2);
assert.ok(!art({...record,photos:[]}).includes('<img'));
const legacy={...record,photos:[image.url],sources:[['Source',image.source_url]]};
assert.equal(validate([legacy])[0].photos[0].url,image.url);
for(const url of ['javascript:alert(1)','data:image/png;base64,AA','']){
 // Empty legacy photos become source-only entries; unsafe schemes must fail.
 if(url)assert.throws(()=>validate([{...legacy,photos:[url]}]));
 else assert.ok(!art(validate([{...legacy,photos:[url]}])[0]).includes('<img'));
}
assert.throws(()=>validate([{...legacy,photo_sources:['javascript:alert(1)']}]));
console.log('Frontend photo rights checks passed: source-only links retained; unsafe images rejected.');

assert.equal(firstPhotoIndex(mixed),1,'Open the first image while retaining source-only history');
assert.equal(firstPhotoIndex({...record,photos:[photo]}),0,'Source-only gallery still opens its source');
assert.equal(firstPhotoIndex({...record,photos:[]}),0,'Empty gallery has a safe initial index');
assert.equal(firstPhotoIndex({...record,photos:[image,photo]}),0,'Image-first gallery remains unchanged');
