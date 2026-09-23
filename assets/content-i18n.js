/* Display-only translations for registry research data.
 * Translation payloads live in data/i18n/*.json; canonical evidence remains in data/registry.json.
 */
(() => {
  const packs={zh:{records:{},text:{}},en:{records:{},text:{}}};
  let loadPromise=null;

  function lang(){
    return (document.documentElement.lang||"zh-CN").toLowerCase().startsWith("en")?"en":"zh";
  }
  function install(target,records={},text={}){
    if(!Object.hasOwn(packs,target)) throw Error("Unsupported translation target: "+target);
    packs[target]={records,text};
  }
  async function fetchJSON(path){
    const response=await fetch(path,{cache:"no-store"});
    if(!response.ok) throw Error(`Failed to load ${path}: HTTP ${response.status}`);
    return response.json();
  }
  function load(){
    if(loadPromise) return loadPromise;
    loadPromise=Promise.all([
      fetchJSON("data/i18n/registry.zh.json"),
      fetchJSON("data/i18n/registry.en.json"),
      fetchJSON("data/i18n/text.zh.json"),
      fetchJSON("data/i18n/text.en.json")
    ]).then(([zhRecords,enRecords,zhText,enText])=>{
      install("zh",zhRecords,zhText);
      install("en",enRecords,enText);
    });
    return loadPromise;
  }
  function text(input,target=lang()){
    if(input==null||input==="") return input;
    return packs[target]?.text?.[input]??input;
  }
  function rawValue(record,key){
    if(key==="photo_captions") return (record.photos||[]).map(v=>typeof v==="string"?"":(v?.caption||""));
    if(key==="credits") return (record.photos||[]).map(v=>typeof v==="string"?"":(v?.credit||""));
    return record?.[key];
  }
  function value(record,key,target=lang()){
    if(!record) return "";
    const override=packs[target]?.records?.[record.id]?.[key];
    if(override!=null) return override;
    const raw=rawValue(record,key);
    if(Array.isArray(raw)) return raw.map(v=>text(v,target));
    return text(raw,target);
  }
  window.SP3Content={lang,value,text,load,install,records:packs};
})();
