import {$,tierNames,kindNames,clone,esc,absent,display,local,displayField,safeURL,validate} from './core.js';
import {mediaOf,art,bindImages} from './media.js';
import {installSources,recordSources} from './sources.js';

let records=[],sourceIndex=[],filtered=[],page=1,indexPage=1,current=null,gidx=0,returnFocus=null;
const size=24;
function hydrate(data){records=validate(data).map(r=>clone(r));}
function toast(s){$('toast').textContent=s;$('toast').classList.add('show');setTimeout(()=>$('toast').classList.remove('show'),2800);}
function countryLabel(code){if(!code)return document.documentElement.lang==='en'?'Not labeled':'未标注';try{const locale=document.documentElement.lang==='en'?'en':'zh-CN';return new Intl.DisplayNames([locale],{type:'region'}).of(code)+' · '+code;}catch{return code;}}
function selectOptions(id,values,label){const old=$(id).value;$(id).innerHTML=`<option value="">${label}</option>`+values.map(([v,n])=>`<option value="${esc(v)}">${esc(n)}</option>`).join('');$(id).value=values.some(x=>x[0]===old)?old:'';}
function setup(){
 const profiles=records.filter(r=>r.record_kind==='profile').length;
 const leads=records.filter(r=>r.record_kind==='lead').length;
 const prototypes=records.filter(r=>r.record_kind==='prototype').length;
 const confirmedVins=records.filter(r=>/^ZFF[A-HJ-NPR-Z0-9]{14}$/.test(r.vin)&&!r.vin_conflicted).length;
 const conflictedVins=records.filter(r=>/^ZFF[A-HJ-NPR-Z0-9]{14}$/.test(r.vin)&&r.vin_conflicted).length;
 const photoCount=records.reduce((n,r)=>n+(r.photos?.length||0),0);
 const photoRecords=records.filter(r=>r.photos?.length).length;
 const en=document.documentElement.lang==='en';
 $('profileKpi').textContent=profiles;
 $('vinKpi').textContent=confirmedVins;
 $('photoKpi').textContent=photoCount;
 $('photoKpiLabel').textContent=en?`Gallery image references · ${photoRecords} records with images`:`图库图片引用 · ${photoRecords} 条记录有图`;
 if($('coverageSummary')) $('coverageSummary').textContent=en
  ?`Version: 2026-09-22. ${records.length} sourced research records: ${profiles} detailed profiles, ${leads} leads, and ${prototypes} pre-production / development cars; ${confirmedVins} confirmed complete public VINs${conflictedVins?` plus ${conflictedVins} source-conflicted VIN lead${conflictedVins===1?'':'s'}`:''}; ${photoCount} gallery image references across ${photoRecords} records.`
  :`版本：2026-09-22。现有 ${records.length} 条有来源研究记录：${profiles} 个详细车档、${leads} 条待核对线索、${prototypes} 辆预生产／研发车；${confirmedVins} 个已确认完整公开 VIN${conflictedVins?`；另有 ${conflictedVins} 条来源冲突 VIN 线索`:''}；${photoCount} 条图库图片引用覆盖 ${photoRecords} 条记录。`;
 for(const [id,key,label] of [['country','country','全部国家'],['color','color','全部颜色']])selectOptions(id,[...new Set(records.map(r=>r[key]).filter(v=>!absent(v)))].sort().map(x=>[x,window.SP3Content?.text(x)??x]),label);
 selectOptions('tier',Object.entries(tierNames),'全部证据来源');
 selectOptions('indexCountry',[...new Set(sourceIndex.map(r=>r.country_code))].sort().map(c=>[c,countryLabel(c)]),'全部国家旗标');
 ownerStats();market();countryStats();apply();renderIndex();
}
function knownText(v){return absent(v)?'':String(v).trim();}
function compareTextKnown(a,b){if(!a&&!b)return 0;if(!a)return 1;if(!b)return-1;return a.localeCompare(b,'en',{numeric:true,sensitivity:'base'});}
function compareNumberKnown(a,b,dir=1){const ak=Number.isFinite(a),bk=Number.isFinite(b);if(!ak&&!bk)return 0;if(!ak)return 1;if(!bk)return-1;return dir*(a-b);}
function sortRecords(items){
 const mode=$('sort')?.value||'priority';
 const byId=(a,b)=>a.id.localeCompare(b.id,'en',{numeric:true,sensitivity:'base'});
 let cmp;
 if(mode==='year_desc')cmp=(a,b)=>compareNumberKnown(a.year,b.year,-1)||byId(a,b);
 else if(mode==='year_asc')cmp=(a,b)=>compareNumberKnown(a.year,b.year,1)||byId(a,b);
 else if(mode==='chassis')cmp=(a,b)=>compareTextKnown(knownText(a.vin)||knownText(a.chassis),knownText(b.vin)||knownText(b.chassis))||byId(a,b);
 else if(mode==='title')cmp=(a,b)=>compareTextKnown(knownText(a.title),knownText(b.title))||byId(a,b);
 else if(mode==='owner')cmp=(a,b)=>compareTextKnown(knownText(a.owner),knownText(b.owner))||byId(a,b);
 else if(mode==='country')cmp=(a,b)=>compareTextKnown(knownText(a.country),knownText(b.country))||byId(a,b);
 else if(mode==='photos')cmp=(a,b)=>(b.photos?.length||0)-(a.photos?.length||0)||b.sort_weight-a.sort_weight||byId(a,b);
 else cmp=(a,b)=>b.sort_weight-a.sort_weight||byId(a,b);
 items.sort(cmp);
}
function apply(){const q=$('search').value.trim().toLowerCase();filtered=records.filter(r=>{const raw=[r.id,r.title,r.vin,r.chassis,r.engine_no,r.gearbox_no,r.registration,r.country,r.city,r.owner,r.exterior,r.interior,r.program,r.notes,...r.options,...r.timeline,...recordSources(r).flatMap(s=>[s.label,s.url])];const translated=['title','country','city','owner','exterior','interior','program','notes','status','sale','edition','market','wheels','calipers','mileage'].flatMap(k=>local(r,k)||[]).concat(local(r,'options')||[],local(r,'timeline')||[]);return(!q||raw.concat(translated).join(' ').toLowerCase().includes(q))&&(!$('country').value||r.country===$('country').value)&&(!$('color').value||r.color===$('color').value)&&(!$('tier').value||r.tier===$('tier').value)&&(!$('kind').value||r.record_kind===$('kind').value);});sortRecords(filtered);page=Math.min(page,Math.max(1,Math.ceil(filtered.length/size)));render();}
function pager(id,total,active,fn){const n=Math.ceil(total/size),box=$(id);box.innerHTML='';if(n<=1)return;const nums=[...new Set([1,n,active-2,active-1,active,active+1,active+2].filter(x=>x>0&&x<=n))].sort((a,b)=>a-b);let last=0;for(const x of nums){if(last&&x-last>1)box.insertAdjacentHTML('beforeend','<span aria-hidden="true">…</span>');const b=document.createElement('button');b.className='page'+(x===active?' active':'');b.textContent=x;b.setAttribute('aria-label','第 '+x+' 页');if(x===active)b.setAttribute('aria-current','page');b.onclick=()=>fn(x);box.append(b);last=x;}}
function bindCards(parent){parent.querySelectorAll('[data-id]').forEach(c=>{c.onclick=()=>openCard(c.dataset.id);c.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openCard(c.dataset.id);}};});bindImages(parent);}
function render(){
 $('count').textContent=`${filtered.length} 条匹配研究记录 · 第 ${page} 页`;
 $('grid').innerHTML=filtered.slice((page-1)*size,page*size).map(r=>`<article class="card" tabindex="0" role="button" data-id="${esc(r.id)}" aria-label="查看 ${esc(local(r,'title'))}"><div class="cardphoto">${art({...r,title:local(r,'title')})}</div><div class="cardbody"><h3>${esc(local(r,'title'))}</h3><div class="sub">${esc(r.id)} · ${esc(displayField(r,'country'))}</div><div class="meta">${[['底盘','chassis'],['外观','exterior'],['内饰','interior'],['状态','status']].map(([k,key])=>`<div><label>${k}</label><span>${esc(displayField(r,key))}</span></div>`).join('')}</div></div></article>`).join('')||'<p class="empty">没有匹配结果。可清除筛选，或切换到「全部研究记录」。</p>';
 bindCards($('grid'));pager('pages',filtered.length,page,p=>{page=p;render();$('registry').scrollIntoView({block:'start'});});
}
function ownerStats(){const owners=records.filter(r=>r.owner_public).sort((a,b)=>b.sort_weight-a.sort_weight);$('ownerGrid').innerHTML=owners.map(r=>`<article class="ownercard" role="button" tabindex="0" data-id="${esc(r.id)}"><div class="ownerthumb cardphoto">${art({...r,title:local(r,'title')})}</div><div class="ownerinfo"><b>${esc(displayField(r,'owner'))}</b><span>${esc(local(r,'title'))}</span><span>${esc(displayField(r,'exterior'))}</span><span class="ownerpill">${esc(tierNames[r.tier])}</span></div></article>`).join('');bindCards($('ownerGrid'));}
function renderIndex(){
 const q=$('indexSearch').value.trim().toLowerCase(),c=$('indexCountry').value;
 const items=sourceIndex.filter(r=>(!q||r.id.toLowerCase().includes(q))&&(!c||r.country_code===c));indexPage=Math.min(indexPage,Math.max(1,Math.ceil(items.length/size)));
 const matches=new Map();for(const r of records)for(const s of recordSources(r)){const m=s.url.match(/exclusivecarregistry\.com\/details\/ferrari\/daytona-sp3\/(\d+)/);if(m)matches.set('ECR-'+m[1],r.id);}
 $('indexCount').textContent=`${items.length} / ${sourceIndex.length} 个公开来源档案 · 第 ${indexPage} 页`;
 $('indexGrid').innerHTML=items.slice((indexPage-1)*size,indexPage*size).map(r=>`<article class="card"><a class="index-card" href="${esc(safeURL(r.source_url))}" target="_blank" rel="noopener noreferrer"><div class="cardphoto">${art({title:r.id+' · ECR',photos:[r.thumbnail]})}</div><div class="cardbody"><h3>${esc(r.id)} ↗</h3><div class="sub">${esc(countryLabel(r.country_code))}</div><div class="sub">ECR 公开页面 · 唯一实车身份待核对</div></div></a>${matches.has(r.id)?`<div class="cardbody"><button class="btn" data-id="${esc(matches.get(r.id))}">查看本站关联记录</button></div>`:''}</article>`).join('')||'<p class="empty">没有匹配的来源档案。</p>';
 bindCards($('indexGrid'));pager('indexPages',items.length,indexPage,p=>{indexPage=p;renderIndex();$('sourceIndex').scrollIntoView({block:'start'});});
}
function market(){const items=records.filter(r=>r.tier==='chassis'||r.id==='SP3-DK-2400'||r.id==='SP3-CARRIO-BIANCO-ITALIA'||r.id==='SP3-BP-GREEN');$('marketRows').innerHTML=items.map(r=>`<tr><td><button data-id="${esc(r.id)}">${esc(local(r,'title'))}</button><br><small>${esc(r.id)}</small></td><td>${esc(displayField(r,'status'))}</td><td>${esc(displayField(r,'sale'))}</td><td><a href="${esc(safeURL(recordSources(r)[0]?.url))}" target="_blank" rel="noopener noreferrer">原始来源 ↗</a><br><small>${esc(displayField(r,'review_status'))}</small></td></tr>`).join('');bindCards($('marketRows'));}
function bars(id,labels){const m=new Map();labels.forEach(x=>m.set(x,(m.get(x)||0)+1));const sorted=[...m].sort((a,b)=>b[1]-a[1]);const max=sorted[0]?.[1]||1;$(id).innerHTML=sorted.map(([k,n])=>`<div class="crow"><span>${esc(k)}</span><div class="bar"><i style="width:${n/max*100}%"></i></div><b>${n}</b></div>`).join('');}
function countryStats(){bars('countryBars',records.filter(r=>r.record_kind!=='prototype'&&!absent(r.country)).map(r=>window.SP3Content?.text(r.country)??r.country));bars('indexCountryBars',sourceIndex.map(r=>countryLabel(r.country_code)));}
function openCard(id){current=records.find(r=>r.id===id);if(!current)return;returnFocus=document.activeElement;gidx=0;$('modalId').textContent=current.id;gallery();detail();$('modal').classList.add('open');document.body.style.overflow='hidden';$('close').focus();history.replaceState(null,'','#car='+encodeURIComponent(id));}
function gallery(){
 const r=current,media=mediaOf(r);
 if(!media.length){$('gallery').innerHTML=art(r);return;}
 const photo=media[gidx],source=safeURL(photo.source_url||r.sources[0]?.[1]);
 $('gallery').innerHTML=`<div class="gallery-main"><img class="gallery-image" src="${esc(safeURL(photo.url,true))}" alt="${esc(local(r,'title')+' · '+(photo.caption||('照片 '+(gidx+1))))}"><div class="gnav"><button id="prev" aria-label="上一张">‹</button><button id="next" aria-label="下一张">›</button></div></div><div class="gallery-caption"><span>${gidx+1} / ${media.length} · ${esc(photo.caption||'原始图库')}</span><span>${esc(photo.credit||'版权归原摄影者')} · <a href="${esc(source)}" target="_blank" rel="noopener noreferrer">本图来源 ↗</a> · <a href="${esc(safeURL(photo.url,true))}" target="_blank" rel="noopener noreferrer">打开原图 ↗</a></span></div><div class="filmstrip" aria-label="选择照片">${media.map((p,i)=>`<button class="film ${i===gidx?'selected':''}" data-image="${i}" aria-label="第 ${i+1} 张照片" aria-pressed="${i===gidx}"><img loading="lazy" src="${esc(safeURL(p.url,true))}" alt="${i+1}"><span>${i+1}</span></button>`).join('')}</div>`;
 $('gallery').querySelector('.gallery-image').onerror=()=>{$('gallery').querySelector('.gallery-main').insertAdjacentHTML('beforeend','<p class="image-error">原站图片暂不可用，请打开来源页查看。</p>');};
 const navigate=i=>{gidx=i;gallery();$('gallery').querySelector('.film.selected')?.scrollIntoView({block:'nearest',inline:'nearest'});};
 $('prev').onclick=()=>navigate((gidx-1+media.length)%media.length);$('next').onclick=()=>navigate((gidx+1)%media.length);
 $('gallery').querySelectorAll('[data-image]').forEach(b=>b.onclick=()=>navigate(+b.dataset.image));
 let touchStart=null;$('gallery').querySelector('.gallery-main').ontouchstart=e=>{touchStart=e.changedTouches[0].clientX;};$('gallery').querySelector('.gallery-main').ontouchend=e=>{if(touchStart===null)return;const dx=e.changedTouches[0].clientX-touchStart;if(Math.abs(dx)>50)navigate((gidx+(dx<0?1:-1)+media.length)%media.length);touchStart=null;};
}
function detail(){const r=current,fields=[['年份','year'],['VIN','vin'],['底盘','chassis'],['发动机号','engine_no'],['变速箱号','gearbox_no'],['注册文件','registration'],['生产归类','edition'],['公开国家','country'],['公开地点','city'],['市场规格','market'],['公开车主／收藏','owner'],['外观','exterior'],['内饰','interior'],['轮毂','wheels'],['卡钳','calipers'],['里程（来源时点）','mileage'],['状态（来源时点）','status'],['价格／结果','sale'],['定制项目','program']],options=local(r,'options')||[],timeline=local(r,'timeline')||[];$('detail').innerHTML=`<div class="dhead"><div><h2>${esc(local(r,'title'))}</h2><div class="sub">${esc(tierNames[r.tier])} · ${kindNames[r.record_kind]}</div></div></div><div class="notice">${esc(local(r,'review_status')||(document.documentElement.lang==='en'?'Research record':'研究记录'))}</div><div class="dgrid">${fields.map(([k,key])=>`<div><label>${k}</label><span>${esc(key==='year'?display(r.year):displayField(r,key))}</span></div>`).join('')}</div><div class="dcols"><div><h3>配置与选装</h3><ul class="clean">${options.length?options.map(x=>`<li>${esc(x)}</li>`).join(''):'<li>尚无公开配置明细。</li>'}</ul></div><div><h3>公开时间线</h3><div class="timeline">${timeline.length?timeline.map(x=>`<p>${esc(x)}</p>`).join(''):'<p>尚无可核验时间线。</p>'}</div></div></div><h3>研究备注</h3><p class="clean">${esc(local(r,'notes')||'暂无补充备注。')}</p><h3>逐车来源</h3><div class="links">${recordSources(r).map(({label,url})=>`<a href="${esc(safeURL(url))}" target="_blank" rel="noopener noreferrer">${esc(window.SP3Content?.text(label)??label)} ↗</a>`).join('')}</div><p><button class="btn" id="copyLink">复制此车链接</button></p>`;$('copyLink').onclick=async()=>{try{await navigator.clipboard.writeText(location.href);toast('链接已复制');}catch{toast('请复制浏览器地址栏中的链接');}};}
function closeModal(){if(!$('modal').classList.contains('open'))return;$('modal').classList.remove('open');document.body.style.overflow='';history.replaceState(null,'','#'+(document.querySelector('.view.active')?.id||'registry'));returnFocus?.focus();}
function clearFilters(){for(const id of ['search','country','color','tier'])$(id).value='';$('kind').value='profile';page=1;apply();}
$('clearFilters').onclick=clearFilters;
for(const id of ['search','country','color','tier','kind','sort'])$(id).addEventListener(id==='search'?'input':'change',()=>{page=1;apply();});
for(const id of ['indexSearch','indexCountry'])$(id).addEventListener(id==='indexSearch'?'input':'change',()=>{indexPage=1;renderIndex();});
document.querySelectorAll('[data-query]').forEach(b=>b.onclick=()=>{clearFilters();$('search').value=b.dataset.query;apply();});
function tab(id){if(!document.querySelector(`.tab[data-view="${id}"]`))return;document.querySelectorAll('.tab').forEach(t=>{const on=t.dataset.view===id;t.classList.toggle('active',on);t.setAttribute('aria-pressed',String(on));});document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===id));}
document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{tab(t.dataset.view);history.replaceState(null,'','#'+t.dataset.view);});
$('close').onclick=closeModal;$('modal').onclick=e=>{if(e.target.id==='modal')closeModal();};
document.addEventListener('keydown',e=>{if(!$('modal').classList.contains('open'))return;if(e.key==='Escape')closeModal();if(current?.photos.length&&['ArrowLeft','ArrowRight'].includes(e.key)){gidx=(gidx+(e.key==='ArrowLeft'?-1:1)+current.photos.length)%current.photos.length;gallery();}if(e.key==='Tab'){const list=[...$('modal').querySelectorAll('button,a[href]')],first=list[0],last=list.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
window.addEventListener('sp3-languagechange',()=>{if(records.length)setup();if(current){gallery();detail();}});
function restoreHash(){const h=location.hash.slice(1);if(h.startsWith('car=')){try{openCard(decodeURIComponent(h.slice(4)));}catch{}}else if(['registry','owners','sourceIndex','market','countries','methods'].includes(h))tab(h);}
async function loadJSON(path){
 const response=await fetch(path,{cache:'no-store'});
 if(!response.ok)throw Error(`Failed to load ${path}: HTTP ${response.status}`);
 return response.json();
}
async function bootstrap(){
 try{
  const [registryData,indexData,sourceData]=await Promise.all([
   loadJSON('data/registry.json'),
   loadJSON('data/source-index.json'),
   loadJSON('data/sources.json'),
   window.SP3Content?.load?.()||Promise.resolve()
  ]);
  if(!Array.isArray(indexData))throw Error('Source index root must be an array');
  installSources(sourceData);hydrate(registryData);sourceIndex=indexData;
  setup();restoreHash();window.addEventListener('hashchange',restoreHash);
 }catch(error){
  console.error(error);
  $('count').textContent=document.documentElement.lang==='en'?'Registry data failed to load.':'车辆数据加载失败。';
  $('grid').innerHTML=`<p class="empty">${esc(error.message)}</p>`;
 }
}
bootstrap();
