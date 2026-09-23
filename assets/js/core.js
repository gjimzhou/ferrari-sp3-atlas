export const $=id=>document.getElementById(id);
export const tierNames={chassis:'底盘确认',official:'Ferrari 官方',dealer:'经销商记录',owner:'公开车主报道',press:'媒体报道',event:'活动实车',registry:'公开 Registry',location:'公开地点线索',community:'社区线索'};
export const kindNames={profile:'详细车档',lead:'待核对线索',prototype:'测试／预生产车'};
export const swatches={Red:'#8d1414',Yellow:'#d4a90e',Blue:'#174f89',Green:'#174f39',White:'#b8bec5',Silver:'#777e89',Orange:'#a85220',Purple:'#592464',Black:'#161616'};
export const clone=x=>JSON.parse(JSON.stringify(x));
export const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
export const absent=v=>!v||/^(Unknown|Not public|Not publicly matched|Private|Not fully documented|Not publicly documented)$/i.test(v);
export const display=v=>absent(v)?(document.documentElement.lang==='en'?'Not public':'未公开'):String(window.SP3Content?.text(v)??v);
export const local=(r,key)=>window.SP3Content?.value(r,key)??r?.[key];
export const displayField=(r,key)=>absent(r?.[key])?(document.documentElement.lang==='en'?'Not public':'未公开'):String(local(r,key));
export const safeURL=(s,photo=false)=>typeof s==='string'&&(/^https?:\/\//i.test(s)||(photo&&/^assets\/photos\/[\w.-]+\.(jpg|jpeg|png|webp)$/i.test(s)))?s:'';

export function validate(input){
 if(!Array.isArray(input)||input.length>1000)throw Error('需要不超过 1,000 条的 JSON 数组');
 const ids=new Set();
 const textFields=['id','title','vin','chassis','engine_no','gearbox_no','registration','edition','country','city','market','owner','exterior','color','interior','wheels','calipers','mileage','status','sale','program','notes','accessed','review_status'];
 return input.map(r=>{
  if(!r||typeof r!=='object'||Array.isArray(r))throw Error('每条记录必须是对象');
  if(typeof r.id!=='string'||!/^[-A-Za-z0-9_]+$/.test(r.id)||ids.has(r.id))throw Error('档案 ID 无效或重复');ids.add(r.id);
  if(typeof r.title!=='string'||!r.title.trim())throw Error(r.id+' 缺少标题');
  if(!Object.hasOwn(tierNames,r.tier))throw Error(r.id+' 的证据类型无效');
  const item={};for(const k of textFields){if(r[k]!=null&&typeof r[k]!=='string')throw Error(r.id+' 的 '+k+' 必须为文本');item[k]=r[k]||'';}
  item.tier=r.tier;item.year=r.year==null?null:r.year;
  if(item.year!==null&&(!Number.isInteger(item.year)||item.year<1900||item.year>2100))throw Error(r.id+' 年份无效');
  item.record_kind=r.record_kind||(['registry','community','location'].includes(r.tier)?'lead':'profile');
  if(!Object.hasOwn(kindNames,item.record_kind))throw Error(r.id+' 记录类型无效');
  item.sort_weight=Number.isFinite(r.sort_weight)?r.sort_weight:(Number.isFinite(r.score)?r.score:50);
  item.owner_public=r.owner_public===true;
  for(const k of ['options','timeline']){
   if(r[k]!=null&&(!Array.isArray(r[k])||r[k].some(v=>typeof v!=='string')))throw Error(r.id+' 的 '+k+' 必须为文本数组');
   item[k]=r[k]||[];
  }
  if(!Array.isArray(r.photos))throw Error(r.id+' 的 photos 必须为数组');
  item.photos=r.photos.map((photo,i)=>{
   if(typeof photo==='string'){
    const firstSource=Array.isArray(r.sources?.[0])?r.sources[0][1]:'';
    const source=r.photo_sources?.[i]||firstSource||'';
    return {url:photo,source_url:source,caption:r.photo_captions?.[i]||'',credit:r.credits?.[i]||''};
   }
   if(!photo||typeof photo!=='object'||Array.isArray(photo))throw Error(r.id+' 存在无效图片对象');
   const media={url:String(photo.url||''),source_url:String(photo.source_url||''),caption:String(photo.caption||''),credit:String(photo.credit||'')};
   if(!safeURL(media.url,true)||!safeURL(media.source_url))throw Error(r.id+' 存在无效图片地址或来源');
   return media;
  });
  if(!Array.isArray(r.sources)||!r.sources.length)throw Error(r.id+' 缺少有效来源链接');
  if(r.sources.some(s=>typeof s!=='string'&&!Array.isArray(s)))throw Error(r.id+' 存在无效来源引用');
  if(r.sources.some(s=>typeof s==='string'&&!/^SRC-[0-9A-F]{8}$/.test(s)))throw Error(r.id+' 存在无效 source ID');
  if(r.sources.some(s=>Array.isArray(s)&&(s.length!==2||typeof s[0]!=='string'||!safeURL(s[1]))))throw Error(r.id+' 存在无效旧版来源引用');
  item.sources=r.sources;
  if(r.sale_event){const e=r.sale_event;if(e.type!=='auction_result'||!Number.isFinite(e.amount)||e.amount<=0||!['USD','CHF','EUR','GBP'].includes(e.currency)||!safeURL(e.source_url))throw Error(r.id+' 拍卖结果字段无效');item.sale_event={type:e.type,amount:e.amount,currency:e.currency,event:String(e.event||''),source_url:e.source_url,basis:String(e.basis||'')};}
  item.vin_conflicted=r.vin_conflicted===true;
  return item;
 });
}
