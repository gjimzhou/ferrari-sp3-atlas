import {absent} from './core.js';

// Evidence tier describes provenance, not whether a car has a market history.
export function hasMarketEvidence(record){
 const sale=String(record.sale??'').trim();
 return Boolean(record.market_events?.length)||(!absent(sale)&&!/^Not (?:offered publicly|publicly offered)$/i.test(sale));
}
