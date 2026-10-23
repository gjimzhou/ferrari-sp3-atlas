import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {validate,originalProductionCount} from '../assets/js/core.js';
const raw=JSON.parse(readFileSync(new URL('../data/registry.json',import.meta.url)));
const records=validate(raw);
const indexed=records.filter(r=>r.vin_unverified);
assert.equal(indexed.length,3);
assert.ok(indexed.every(r=>r.record_kind==='lead'&&!r.vin_conflicted));
const confirmed=records.filter(r=>/^ZFF[A-HJ-NPR-Z0-9]{14}$/.test(r.vin)&&!r.vin_conflicted&&!r.vin_unverified);
assert.equal(confirmed.length,49,'Indexed evidence must not inflate confirmed coverage');
const sample=indexed[0];
assert.throws(()=>validate([{...sample,record_kind:'profile'}]));
assert.throws(()=>validate([{...sample,vin_unverified:'true'}]));
assert.throws(()=>validate([{...sample,vin:'Not public'}]));
assert.throws(()=>validate([{...sample,vin_conflicted:true}]));
assert.equal(validate([{...sample,vin_unverified:false}])[0].vin_unverified,false);

assert.equal(originalProductionCount(records),37);
const original=records.find(r=>r.production_allocation==='original-599');
assert.equal(originalProductionCount([original,original]),1,'Repeated VINs must not inflate coverage');
for(const patch of [{vin_unverified:true},{vin_conflicted:true},{record_kind:'prototype'},{vin:'Not public'},{production_allocation:'599+1'}]){
 assert.throws(()=>validate([{...original,...patch}]),'Reject unsupported production coverage');
}
assert.equal(originalProductionCount([{...original,production_allocation:undefined}]),0,'Unclassified VINs stay outside the numerator');
assert.ok(!records.find(r=>r.chassis==='319682').production_allocation,'Extra 599+1 stays outside original coverage');
console.log('VIN evidence checks passed: three indexed leads remain outside 49 confirmed VINs; original-production coverage is 37/599.');
