const byId=new Map();

export function installSources(items){
 if(!Array.isArray(items))throw Error('Source catalog root must be an array');
 byId.clear();
 for(const source of items){
  if(!source||typeof source!=='object'||typeof source.id!=='string'||typeof source.label!=='string'||typeof source.url!=='string')throw Error('Invalid source catalog entry');
  if(byId.has(source.id))throw Error('Duplicate source ID: '+source.id);
  byId.set(source.id,source);
 }
}

export function sourceById(id){return byId.get(id)||null;}

export function recordSources(record){
 return (record?.sources||[]).map(ref=>{
  if(typeof ref==='string')return sourceById(ref)||{id:ref,label:ref,url:''};
  if(Array.isArray(ref))return{id:'',label:String(ref[0]||''),url:String(ref[1]||'')};
  if(ref&&typeof ref==='object')return{id:String(ref.id||''),label:String(ref.label||''),url:String(ref.url||'')};
  return{id:'',label:'',url:''};
 }).filter(source=>source.label||source.url);
}
