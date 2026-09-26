'use strict';
(() => {
  const STORAGE_KEY = 'sp3Atlas.language';
  const ZH = 'zh-CN';
  const EN = 'en';

  const exact = new Map(Object.entries({
    'Ferrari Daytona SP3 · 独立公开资料库': 'Ferrari Daytona SP3 · Independent Public Registry',
    '599 + 1 为量产基准；ECR 索引与本站车档可能重叠，未建立唯一身份前不相加。': '599 + 1 is the production baseline; ECR index entries may overlap with Atlas profiles and are not added until a unique identity match is established.',
    'Canonical 数据直接由 GitHub 中的 data/registry.json 与 data/source-index.json 驱动；页面不再提供浏览器本地导入或覆盖。': 'Canonical data is driven directly by data/registry.json and data/source-index.json on GitHub; browser-local imports and overrides are no longer part of the site.',
    '导出 JSON': 'Export JSON',
    '导出 CSV': 'Export CSV',
    '导入更新': 'Import update',
    'Daytona SP3 · 公开档案 / Public Registry': 'Daytona SP3 · Public Registry',
    '每一辆 SP3，': 'Every SP3',
    '都有自己的': 'has its own',
    '故事。': 'story.',
    '从 Leclerc 的 Monaco 条纹，到 Piero Ferrari 的 NART 致敬；从私人定制到公开拍卖。按车辆、配置、公开车主与来源，追溯这款 Icona 的不同面貌。': 'From Leclerc’s Monaco stripes to Piero Ferrari’s NART tribute, from Tailor Made commissions to public auctions: trace each Daytona SP3 through the car, its specification, publicly reported owners, and primary sources.',
    '量产基准为': 'The production baseline is',
    '。下方展示的是有来源的研究档案，': '. The records below are source-backed research profiles and',
    '不以空白占位冒充已收录车辆': 'do not use blank placeholders to imply documented cars',
    '。ECR 索引与本站车档可能重叠；没有唯一身份匹配前，不相加计算全球车辆数。': '. ECR index entries may overlap with Atlas profiles; until a unique identity match is established, the two sets are not added together as a global car count.',
    '详细车档': 'Detailed profiles',
    '含公开配置或车主资料': 'with public specification or ownership data',
    'ECR 公开档案索引': 'ECR public profile index',
    '2026-09-21 检索快照': 'snapshot retrieved 2026-09-21',
    '完整公开 VIN': 'Complete public VINs',
    '已确认完整公开 VIN': 'Confirmed public VINs',
    '本站研究记录': 'in Atlas research records',
    '本站车档': 'in Atlas profiles',
    '具名车主／收藏记录': 'Named owner / collection records',
    '包含历史收藏关系': 'including historical collection links',
    '图库图片引用': 'Gallery image references',
    '浏览路线': 'Explore the atlas', '探索车辆': 'Explore cars', '查看市场记录': 'Market records', '理解证据': 'Understand evidence', '阅读指南': 'Reader guide', '项目文档': 'Project documentation',
    '资料库栏目': 'Registry sections',
    '最乐幻想2022': 'Leclerc 2022: The Ultimate What-If',
    '车辆档案': 'Vehicle registry',
    '公开车主': 'Public owners',
    '503 档案索引': '503-profile index',
    '拍卖与挂牌': 'Auctions & listings',
    '国家分布': 'Country distribution',
    '资料与方法': 'Data & methods',
    '搜索车辆': 'Search vehicles',
    '搜索 VIN、颜色、车主、配置或来源…': 'Search VIN, color, owner, specification, or source…',
    '国家': 'Country',
    '全部国家': 'All countries',
    '证据来源': 'Evidence source',
    '全部证据来源': 'All evidence sources',
    '颜色': 'Color',
    '全部颜色': 'All colors',
    '记录类型': 'Record type',
    '排序': 'Sort',
    '研究优先级（默认）': 'Research priority (default)',
    '年份：新 → 旧': 'Year: newest → oldest',
    '年份：旧 → 新': 'Year: oldest → newest',
    'VIN / 底盘号': 'VIN / chassis',
    '车辆名称 A → Z': 'Vehicle name A → Z',
    '车主 / 收藏 A → Z': 'Owner / collection A → Z',
    '国家 A → Z': 'Country A → Z',
    '图片数量：多 → 少': 'Photo count: most → least',
    '全部研究记录': 'All research records',
    '待核对线索': 'Lead to verify',
    '测试／预生产车': 'Test / pre-production car',
    '清除筛选': 'Clear filters',
    '点击查看配置、照片与证据': 'Open a record to view specification, photos, and evidence',
    '公开车主与收藏': 'Public owners & collections',
    '保留公开报道中的具名关系与逐车来源；历史卖方收藏不意味着当前仍然持有。无姓名的私人客户和未经核对的传闻不进入此列表。': 'This view keeps named relationships supported by public reporting and car-level sources. A historical seller or collection does not imply current ownership. Unnamed private clients and unverified rumors are excluded.',
    '公开档案索引': 'Public profile index',
    '这 503 个链接来自 ECR 公开车型搜索的 21 页结果。只收录公开档案 ID、页面链接、缩略图链接和国家旗标；VIN、车主、精确配置等登录后字段不在本索引中。缩略图由 ECR 托管，版权归原摄影者及相关权利人。': 'These 503 links come from 21 pages of ECR’s public model search. The index stores only public profile IDs, page links, thumbnail links, and country flags; login-gated fields such as VIN, owner, and exact specification are not included. Thumbnails are hosted by ECR and remain the property of their photographers and other rights holders.',
    '它是进一步研究的入口，不是 503 辆已经逐车核实的车。': 'This is an entry point for further research, not 503 individually verified cars.',
    '旗标代表来源页面标签，不等于交付配额或车主国籍。已建立的明确对应会链接到本站车档。': 'Country flags reflect labels on the source pages, not delivery allocations or owner nationality. Confirmed matches link back to Atlas profiles.',
    '搜索档案 ID': 'Search profile ID',
    '输入 ECR 档案编号…': 'Enter an ECR profile number…',
    '索引国家': 'Index country',
    '全部国家旗标': 'All country flags',
    '导出索引 JSON': 'Export index JSON',
    '按原币种与原始来源保留记录。拍卖行公布的结果不擅自改写为落槌价；估价、挂牌价与成交价分开标注。里程和在售状态只代表刊登时点。': 'Records preserve the original currency and source. Auction-house results are not silently rewritten as hammer prices; estimates, asking prices, and sale results are labeled separately. Mileage and listing status refer only to the publication date.',
    '车辆': 'Vehicle',
    '类型／状态': 'Type / status',
    '价格／结果': 'Price / result',
    '资料': 'Evidence',
    '本站研究记录的公开地点': 'Public locations in Atlas research records',
    '一条档案计一次；含待核对线索，不含预生产车。': 'Each record is counted once; leads are included and pre-production cars are excluded.',
    'ECR 索引国家旗标': 'ECR index country flags',
    '503 个来源档案的页面旗标分布。与左图口径不同，两组数字不能相加。': 'Distribution of page-level country flags across the 503 source profiles. This uses a different basis from the chart at left, so the two totals must not be combined.',
    '证据与去重': 'Evidence & deduplication',
    '底盘确认': 'Chassis confirmed',
    '保留拍卖行等明确公布的 VIN／底盘号码。一个 VIN 对应一个档案；再次出售作为时间线更新。': 'Preserve VIN / chassis numbers explicitly published by auction houses and similarly authoritative sources. One VIN maps to one profile; a later resale updates the timeline.',
    '官方、经销商与具名报道': 'Official, dealer & named reporting',
    '保存来源明确支持的配置或收藏关系。': 'Keep specifications or collection relationships directly supported by cited sources.',
    '公开 registry 与社区线索': 'Public registries & community leads',
    'ECR 页面 ID 是来源编号，不是 Ferrari 底盘号。相同颜色、相近地点、类似车牌不构成合并依据。': 'An ECR page ID is a source identifier, not a Ferrari chassis number. Similar color, nearby location, or a similar plate is not sufficient evidence to merge records.',
    '预生产车独立分类': 'Pre-production cars are separate',
    'Gambara 的预生产档案不计入 599 辆客户生产计划。原始总体中的空白占位已从新版数据库移除。': 'Gambara’s pre-production profile is not counted in the 599-car customer production plan. Blank population placeholders from the original dataset were removed from the current registry.',
    '原版本的百分比分数仅是编辑排序权重，未经统计校准。新版改用证据类型，避免把它显示为事实正确率。': 'Percentage scores in the original version were editorial ranking weights, not statistically calibrated probabilities. The current version uses evidence categories so those scores are not mistaken for factual confidence.',
    '更新与数据': 'Updates & data',
    'JSON 导出保留来源、照片引用及核对状态。导入按 ID 合并并只保存在当前浏览器；网站更新仍会载入新增内置资料，本地修改优先。输入错误不会覆盖现有资料。': 'JSON export preserves sources, photo references, and review status. Imports merge by ID and are stored only in the current browser; future site updates still load new bundled records, with local overrides taking precedence. Invalid input does not overwrite existing data.',
    '双语翻译只作用于展示层。data/registry.json 保留研究时记录的原始字段与来源措辞；切换语言不会改写、复制或推断新的证据。': 'Bilingual translation is display-only. data/registry.json preserves the research fields and source wording as recorded; changing language does not rewrite, duplicate, or infer new evidence.',
    '逐车 JSON': 'Vehicle JSON',
    '索引 JSON': 'Index JSON',
    '来源目录': 'Source directory',
    '清除本地修改': 'Clear local changes',
    '本站为独立研究项目，未经 Ferrari、ECR 或拍卖行背书。照片版权归原权利人。新索引只引用外部图片；外部图片不可用时可直接打开来源页。不收集非公开身份、住宅地址或联系方式。': 'This is an independent research project and is not endorsed by Ferrari, ECR, or any auction house. Photo rights remain with their respective owners. The new index only references external images; if an image is unavailable, use the source-page link. The Atlas does not collect non-public identities, home addresses, or contact information.',
    '关闭详情': 'Close details',
    'Ferrari 官方': 'Ferrari official',
    '经销商记录': 'Dealer record',
    '公开车主报道': 'Public owner reporting',
    '媒体报道': 'Press report',
    '活动实车': 'Event sighting',
    '公开 Registry': 'Public registry',
    '公开地点线索': 'Public location lead',
    '社区线索': 'Community lead',
    '未公开': 'Not public',
    '未标注': 'Not labeled',
    '没有匹配结果。可清除筛选，或切换到「全部研究记录」。': 'No matching results. Clear the filters or switch to “All research records.”',
    '没有匹配的来源档案。': 'No matching source profiles.',
    'ECR 公开页面 · 唯一实车身份待核对': 'ECR public page · unique vehicle identity not yet verified',
    '查看本站关联记录': 'View linked Atlas profile',
    '原始来源 ↗': 'Original source ↗',
    '原始图库': 'Original gallery',
    '版权归原摄影者': 'Rights belong to the original photographer',
    '本图来源 ↗': 'Image source ↗',
    '打开原图 ↗': 'Open original ↗',
    '选择照片': 'Choose photo',
    '上一张': 'Previous image',
    '下一张': 'Next image',
    '原站图片暂不可用，请打开来源页查看。': 'The source image is temporarily unavailable. Open the source page to view it.',
    '年份': 'Year',
    '底盘': 'Chassis',
    '生产归类': 'Production category',
    '公开国家': 'Public country',
    '公开地点': 'Public location',
    '市场规格': 'Market specification',
    '公开车主／收藏': 'Public owner / collection',
    '外观': 'Exterior',
    '内饰': 'Interior',
    '轮毂': 'Wheels',
    '卡钳': 'Calipers',
    '里程（来源时点）': 'Mileage (at source date)',
    '状态（来源时点）': 'Status (at source date)',
    '定制项目': 'Customization program',
    '导入资料；未独立核验': 'Imported record; not independently verified',
    '配置与选装': 'Specification & options',
    '尚无公开配置明细。': 'No public specification details yet.',
    '公开时间线': 'Public timeline',
    '尚无可核验时间线。': 'No verifiable timeline yet.',
    '研究备注': 'Research notes',
    '暂无补充备注。': 'No additional notes.',
    '逐车来源': 'Vehicle-level sources',
    '复制此车链接': 'Copy vehicle link',
    '链接已复制': 'Link copied',
    '请复制浏览器地址栏中的链接': 'Please copy the link from the browser address bar',
    '已恢复最新内置资料': 'Restored the latest bundled data',
    '浏览器不允许修改本地存储': 'The browser does not allow local-storage changes',
    '照片请见原始来源': 'PHOTO AT SOURCE',
    '检测到旧版浏览器数据，已保留原件。本页使用新版资料；如需恢复旧版自定义内容，请先在旧版导出再导入。': 'Legacy browser data was detected and left untouched. This page uses the new dataset; to restore old custom data, export it from the old version and import it here.',
    '本地保存不可用或数据格式无效，当前显示内置资料；旧数据未被删除。': 'Local storage is unavailable or contains invalid data. Bundled data is shown; old data was not deleted.'
  }));

  const validationExact = new Map(Object.entries({
    '需要不超过 1,000 条的 JSON 数组': 'Expected a JSON array with no more than 1,000 records',
    '每条记录必须是对象': 'Each record must be an object',
    '档案 ID 无效或重复': 'Record ID is invalid or duplicated',
    'JSON 文件不能超过 5 MB': 'JSON file cannot exceed 5 MB',
    '浏览器无法保存，资料未更改。请检查可用空间或隐私设置。': 'The browser could not save the data, so nothing was changed. Check available storage or privacy settings.'
  }));

  function englishFor(source) {
    if (!source) return source;
    if (exact.has(source)) return exact.get(source);

    let m;
    if ((m = source.match(/^版本：(\d{4}-\d{2}-\d{2})。现有 (\d+) 条有来源研究记录：(\d+) 个详细车档、(\d+) 条待核对线索、(\d+) 辆预生产／研发车；(\d+) 个已确认完整公开 VIN；另有 (\d+) 条来源冲突 VIN 线索；(\d+) 条图库图片引用覆盖 (\d+) 条记录。默认车辆页仍只显示详细车档；单源 VIN 和 source-conflict VIN 保留为待核对 lead。$/))) return `Version: ${m[1]}. The Atlas contains ${m[2]} sourced research records: ${m[3]} detailed profiles, ${m[4]} leads, and ${m[5]} pre-production / development cars; ${m[6]} confirmed complete public VINs plus ${m[7]} source-conflicted VIN lead; and ${m[8]} gallery image references across ${m[9]} records. The default vehicle view still shows detailed profiles only; single-source and source-conflict VINs remain research leads.`;
    if ((m = source.match(/^(\d+) 条匹配研究记录 · 第 (\d+) 页$/))) return `${m[1]} matching research records · page ${m[2]}`;
    if ((m = source.match(/^(\d+) \/ (\d+) 个公开来源档案 · 第 (\d+) 页$/))) return `${m[1]} / ${m[2]} public source profiles · page ${m[3]}`;
    if ((m = source.match(/^图库图片引用 · (\d+) 条记录有图$/))) return `Gallery image references · ${m[1]} records with images`;
    if ((m = source.match(/^(\d+) 张图$/))) return `${m[1]} photos`;
    if ((m = source.match(/^第 (\d+) 页$/))) return `Page ${m[1]}`;
    if ((m = source.match(/^第 (\d+) 张照片$/))) return `Photo ${m[1]}`;
    if ((m = source.match(/^照片 (\d+)$/))) return `Photo ${m[1]}`;
    if ((m = source.match(/^查看 (.+)$/))) return `View ${m[1]}`;
    if ((m = source.match(/^已合并 (\d+) 条记录$/))) return `Merged ${m[1]} records`;
    if ((m = source.match(/^(.+) · ([A-Z]{2})$/))) {
      try {
        return `${new Intl.DisplayNames(['en'], {type:'region'}).of(m[2])} · ${m[2]}`;
      } catch (_) {
        return source;
      }
    }

    return source;
  }

  function translateValidation(message) {
    if (validationExact.has(message)) return validationExact.get(message);
    const rules = [
      [/^(.+) 缺少标题$/, '$1 is missing a title'],
      [/^(.+) 的证据类型无效$/, '$1 has an invalid evidence type'],
      [/^(.+) 的 (.+) 必须为文本$/, '$1: $2 must be text'],
      [/^(.+) 年份无效$/, '$1 has an invalid year'],
      [/^(.+) 记录类型无效$/, '$1 has an invalid record type'],
      [/^(.+) 的 (.+) 必须为文本数组$/, '$1: $2 must be an array of strings'],
      [/^(.+) 存在无效图片来源$/, '$1 contains an invalid image-source URL'],
      [/^(.+) 存在无效图片地址$/, '$1 contains an invalid image URL'],
      [/^(.+) 缺少有效来源链接$/, '$1 is missing valid source links'],
      [/^(.+) 拍卖结果字段无效$/, '$1 has invalid auction-result fields']
    ];
    for (const [re, replacement] of rules) if (re.test(message)) return message.replace(re, replacement);
    return englishFor(message);
  }

  const textState = new WeakMap();
  const attrState = new WeakMap();
  let language = (() => {
    try {
      const requested = new URLSearchParams(location.search).get('lang');
      if (requested === 'en') return EN;
      if (requested === 'zh' || requested === 'zh-CN') return ZH;
    } catch (_) {}
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === ZH || saved === EN) return saved;
    } catch (_) {}
    return (navigator.language || '').toLowerCase().startsWith('zh') ? ZH : EN;
  })();

  function preserveWhitespace(raw, translated) {
    const leading = raw.match(/^\s*/)?.[0] || '';
    const trailing = raw.match(/\s*$/)?.[0] || '';
    return leading + translated + trailing;
  }

  function processText(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const raw = node.nodeValue || '';
    if (!raw.trim()) return;

    let state = textState.get(node);
    if (!state) {
      state = {zh: raw, last: null};
      textState.set(node, state);
    } else if (raw !== state.last && raw !== state.zh) {
      state.zh = raw;
    }

    const trimmed = state.zh.trim();
    const out = language === EN ? preserveWhitespace(state.zh, englishFor(trimmed)) : state.zh;
    state.last = out;
    if (node.nodeValue !== out) node.nodeValue = out;
  }

  function processAttr(el, attr) {
    if (!el.hasAttribute?.(attr)) return;
    let all = attrState.get(el);
    if (!all) {
      all = {};
      attrState.set(el, all);
    }
    const raw = el.getAttribute(attr) || '';
    let state = all[attr];
    if (!state) state = all[attr] = {zh: raw, last: null};
    else if (raw !== state.last && raw !== state.zh) state.zh = raw;

    const out = language === EN ? englishFor(state.zh) : state.zh;
    state.last = out;
    if (raw !== out) el.setAttribute(attr, out);
  }

  function processElement(el) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return;
    for (const attr of ['placeholder','aria-label','title']) processAttr(el, attr);
    for (const child of el.childNodes) {
      if (child.nodeType === Node.TEXT_NODE) processText(child);
      else if (child.nodeType === Node.ELEMENT_NODE) processElement(child);
    }
  }

  function updateMeta() {
    document.documentElement.lang = language;
    document.title = language === EN
      ? 'SP3 Atlas — Ferrari Daytona SP3 Public Registry'
      : 'SP3 Atlas — Ferrari Daytona SP3 公开资料库';

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', language === EN
      ? 'Independent Ferrari Daytona SP3 public registry covering individual cars, specifications, publicly reported owners, auction records, and a 503-profile public ECR index.'
      : 'Ferrari Daytona SP3 独立公开资料库：逐车配置、公开车主、拍卖记录与 503 个公开 ECR 档案索引。');

    document.querySelectorAll('[data-lang-choice]').forEach(btn => {
      const active = btn.dataset.langChoice === language;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  }

  function applyLanguage(next, persist = true) {
    language = next === EN ? EN : ZH;
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, language); } catch (_) {}
      try {
        const url = new URL(location.href);
        url.searchParams.set('lang', language === EN ? 'en' : 'zh');
        history.replaceState(null, '', url);
      } catch (_) {}
    }
    processElement(document.body);
    updateMeta();
    window.dispatchEvent(new CustomEvent('sp3-languagechange', {detail:{language}}));
  }

  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.type === 'characterData') processText(mutation.target);
      for (const node of mutation.addedNodes || []) {
        if (node.nodeType === Node.TEXT_NODE) processText(node);
        else if (node.nodeType === Node.ELEMENT_NODE) processElement(node);
      }
      if (mutation.type === 'attributes') processAttr(mutation.target, mutation.attributeName);
    }
  });

  observer.observe(document.body, {subtree:true, childList:true, characterData:true, attributes:true, attributeFilter:['placeholder','aria-label','title']});

  document.querySelectorAll('[data-lang-choice]').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.langChoice));
  });

  const nativeAlert = window.alert.bind(window);
  const nativeConfirm = window.confirm.bind(window);
  window.alert = message => {
    const text = String(message ?? '');
    if (language !== EN) return nativeAlert(text);
    if (text.startsWith('导入失败：')) return nativeAlert('Import failed: ' + translateValidation(text.slice(5)));
    return nativeAlert(translateValidation(text));
  };
  window.confirm = message => {
    const text = String(message ?? '');
    if (language !== EN) return nativeConfirm(text);
    if (text === '清除本地修改并使用最新内置资料？旧版原件仍保留。') {
      return nativeConfirm('Clear local changes and use the latest bundled data? Legacy source data will remain untouched.');
    }
    return nativeConfirm(englishFor(text));
  };

  applyLanguage(language, false);
})();
