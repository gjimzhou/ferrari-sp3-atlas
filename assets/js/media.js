import {esc,safeURL,swatches} from './core.js';
import {recordSources} from './sources.js';

export function mediaOf(r){
 const localizedCaptions=window.SP3Content?.value(r,'photo_captions')||[];
 const localizedCredits=window.SP3Content?.value(r,'credits')||[];
 const fallbackSource=recordSources(r)[0]?.url||'';
 return (r.photos||[]).map((photo,i)=>{
  if(typeof photo==='string')return{url:photo,source_url:r.photo_sources?.[i]||fallbackSource,caption:localizedCaptions[i]??r.photo_captions?.[i]??'',credit:localizedCredits[i]??r.credits?.[i]??''};
  return{url:photo?.url||'',source_url:photo?.source_url||fallbackSource,caption:localizedCaptions[i]??photo?.caption??'',credit:localizedCredits[i]??photo?.credit??''};
 });
}
export function art(r){const src=mediaOf(r).map(photo=>safeURL(photo.url,true)).find(Boolean)||'';const placeholder=`<div class="placeholder photo-fallback" style="--swatch:${swatches[r.color]||'#343842'}"></div>`;return src?`<img loading="lazy" src="${esc(src)}" alt="${esc(r.title)}">${placeholder}`:placeholder.replace(' photo-fallback','');}
export function firstPhotoIndex(r){return Math.max(0,mediaOf(r).findIndex(photo=>safeURL(photo.url,true)));}
export function bindGalleryImages(parent,source){
 parent.querySelectorAll('img').forEach(img=>{
  const failed=()=>{
   if(!img.parentNode)return;
   if(img.classList.contains('gallery-image')){
    const link=document.createElement('a');
    link.className='image-error';link.href=safeURL(source);link.target='_blank';link.rel='noopener noreferrer';
    link.textContent=document.documentElement.lang==='en'?'Image unavailable. View photograph at source ↗':'图片暂不可用，前往来源页查看 ↗';
    img.replaceWith(link);
   }else img.replaceWith(document.createTextNode('↗'));
  };
  img.addEventListener('error',failed,{once:true});
  if(img.complete&&!img.naturalWidth)failed();
 });
}
export function bindImages(parent){parent.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.parentElement.classList.add('broken');},{once:true}));}
