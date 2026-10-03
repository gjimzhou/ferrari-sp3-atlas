import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {hasMarketEvidence} from '../assets/js/market.js';

const records=JSON.parse(readFileSync(new URL('../data/registry.json',import.meta.url)));
const selected=new Set(records.filter(hasMarketEvidence).map(r=>r.id));
for(const id of ['SP3-319682','SP3-299827','SP3-CD-991804','SP3-CD-1080987','SP3-ANA-LUX-CARBON-BERLIN']){
 assert.ok(selected.has(id),`${id}: published results and archived/anonymous listings belong in market history`);
}
assert.ok(!selected.has('SP3-291934-DRIVE-VINTAGE'),'A showroom feature explicitly not offered is not a listing');
for(const sale of [undefined,'Unknown','Not public','Not publicly documented','Not offered publicly','Not publicly offered']){
 assert.equal(hasMarketEvidence({tier:'chassis',sale}),false,'A chassis identity alone is not market evidence');
}
assert.equal(hasMarketEvidence({sale:'Not public',market_events:[{type:'auction_result'}]}),true);
assert.equal(hasMarketEvidence({tier:'dealer',sale:'Price on request'}),true);
assert.equal(hasMarketEvidence({tier:'registry',sale:'Bid recorded; sale not confirmed'}),true);
console.log(`Market evidence checks passed: ${selected.size} records selected.`);
