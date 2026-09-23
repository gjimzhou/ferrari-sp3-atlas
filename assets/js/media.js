import {esc,safeURL,swatches} from './core.js';

export function mediaOf(r){
 const localizedCaptions=window.SP3Content?.value(r,'photo_captions')||[];
 const localizedCredits=window.SP3Content?.value(r,'credits')||[];
 return (r.photos||[]).map((photo,i)=>{
  if(typeof photo==='string') return {url:photo,source_url:r.photo_sources?.[i]||r.sources?.[0]?.[1]||'',caption:localizedCaptions[i]??r.photo_captions?.[i]??'',credit:localizedCredits[i]??r.credits?.[i]??''};
  return {url:photo?.url||'',source_url:photo?.source_url||r.sources?.[0]?.[1]||'',caption:localizedCaptions[i]??photo?.caption??'',credit:localizedCredits[i]??photo?.credit??''};
 });
}

export function art(r){
 const src=safeURL(mediaOf(r)[0]?.url,true);
 const placeholder=`<div class="placeholder photo-fallback" style="--swatch:${swatches[r.color]||'#343842'}"></div>`;
 return src?`<img loading="lazy" src="${esc(src)}" alt="${esc(r.title)}">${placeholder}`:placeholder.replace(' photo-fallback','');
}

export function bindImages(parent){
 parent.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.parentElement.classList.add('broken');},{once:true}));
}
