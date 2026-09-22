/* Display-only translations for registry research data.
 * Canonical research evidence remains in data/registry.json.
 */
(() => {
  const zhCommon = {
    "Unknown":"未公开",
    "Not public":"未公开",
    "Private":"私人收藏",
    "Not publicly confirmed":"未公开确认",
    "Not publicly documented":"未公开记录",
    "Not fully documented":"公开资料不完整",
    "Not publicly documented in accessible text":"可公开访问文本中未记录",
    "Unknown / possibly factory or display-related":"未公开／可能与工厂或展示用途相关",
    "Rosso Alcantara with Bianco stitching":"Rosso Alcantara，Bianco 缝线",
    "Nero Alcantara with Bianco stitching":"Nero Alcantara，Bianco 缝线",
    "Nero leather; Giallo piping / stitching":"Nero 皮革；Giallo 滚边／缝线",
    "Blu Laguna / Bianco King":"Blu Laguna／Bianco King 双拼",
    "Original 599 production":"原始 599 辆客户生产序列",
    "Unconfirmed":"未确认",
    "Original 599 production; identity not independently linked to VIN":"原始 599 辆客户生产序列；身份尚未独立对应 VIN",
    "Original 599 production; unlinked public sighting":"原始 599 辆客户生产序列；公开目击尚未与唯一身份对应",
    "Original 599 production; publicly described as the final customer car":"原始 599 辆客户生产序列；公开报道为最后一辆客户车",
    "Pre-production; outside customer allocation count":"预生产车；不计入客户配额",
    "United States":"美国",
    "United Kingdom":"英国",
    "United Arab Emirates":"阿联酋",
    "Switzerland":"瑞士",
    "Andorra":"安道尔",
    "Italy":"意大利",
    "Germany":"德国",
    "Russia":"俄罗斯",
    "Monaco":"摩纳哥",
    "Portugal":"葡萄牙",
    "Sweden":"瑞典",
    "Netherlands":"荷兰",
    "Hong Kong":"香港",
    "Australia":"澳大利亚",
    "France":"法国",
    "Japan":"日本",
    "Denmark":"丹麦",
    "US specification":"美国规格",
    "Swiss market":"瑞士市场",
    "European specification":"欧洲规格",
    "Middle East / export listing":"中东／出口挂牌",
    "US specification likely; not independently confirmed":"大概率为美国规格；尚未独立确认",
    "Factory / development context likely":"大概率为工厂／研发用途",
    "Ferrari Tailor Made":"Ferrari Tailor Made 定制",
    "Ferrari Atelier":"Ferrari Atelier 定制",
    "Ferrari personalisation":"Ferrari 个性化定制",
    "Ferrari Tailor Made — Carbonio a Vista":"Ferrari Tailor Made — Carbonio a Vista 裸露碳纤维项目",
    "Tailor Made configuration reported":"公开报道为 Tailor Made 配置",
    "Sold":"已售",
    "Delivered":"已交付",
    "Private collection":"私人收藏",
    "Publicly listed for sale":"公开挂牌出售",
    "Community sighting":"社区目击记录",
    "Public ECR profile":"ECR 公开档案",
    "Personally owned / publicly driven":"车主本人持有／公开驾驶",
    "Personally owned / delivered":"车主本人持有／已交付",
    "Displayed in the Joyride Collection":"Joyride Collection 展示中",
    "Private ownership confirmed by major press":"主流媒体确认私人持有",
    "Dealer-listed":"经销商挂牌",
    "Public display / community sighting":"公开展示／社区目击",
    "Clean title; LHD":"Clean title；左舵",
    "Pre-production; LHD":"预生产车；左舵",
    "Dealer-linked ECR profile":"与经销商关联的 ECR 档案",
    "Not offered publicly":"未公开出售",
    "Not publicly offered":"未公开出售",
    "Delivery mileage":"交付里程",
    "Historical v3; not rechecked in this update":"历史 v3 条目；本次更新未重新核验",
    "Auction result rechecked 2026-09-21":"2026-09-21 已重新核验拍卖结果",
    "Source rechecked 2026-09-21":"2026-09-21 已重新核验来源",
    "Yellow":"黄色",
    "Black":"黑色",
    "Red":"红色",
    "Bronze":"古铜色",
    "Gloss black":"亮黑色",
    "Glossy black":"亮黑色",
    "Giallo":"黄色（Giallo）",
    "Blue":"蓝色",
    "Green":"绿色",
    "White":"白色",
    "Silver":"银色",
    "Orange":"橙色",
    "Purple":"紫色",
    "Not public":"未公开",
    "RM Sotheby's catalogue":"RM Sotheby’s 拍卖目录",
    "Ferrari official announcement":"Ferrari 官方公告",
    "Ferrari auction result":"Ferrari 官方拍卖结果",
    "Public buyer identification — duPont REGISTRY":"公开买家身份 — duPont REGISTRY",
    "RM Sotheby's Monterey 2026 catalogue":"RM Sotheby’s Monterey 2026 拍卖目录",
    "ECR profile 70568 — deduplicated alias":"ECR 档案 70568 — 去重后的别名记录",
    "Broad Arrow auction listing":"Broad Arrow 拍卖目录",
    "Ultimatecarpage chassis record":"Ultimatecarpage 底盘记录",
    "Ferrari editorial":"Ferrari 官方专题",
    "Driven Car Guide report":"Driven Car Guide 报道",
    "duPont REGISTRY / Ferrari Beverly Hills":"duPont REGISTRY／Ferrari Beverly Hills",
    "Ferrari editorial — Seattle friends":"Ferrari 官方专题 — Seattle 好友双车",
    "Luxury Pulse listing summary":"Luxury Pulse 挂牌摘要",
    "F1rst Motors — dealer’s own article":"F1rst Motors — 经销商自有文章",
    "Daytona SP3 Registry on Instagram":"Instagram Daytona SP3 Registry",
    "Exclusive Car Registry profile":"Exclusive Car Registry 档案",
    "duPont REGISTRY — Leclerc delivery and specification":"duPont REGISTRY — Leclerc 交付与配置",
    "Ferrari / Carscoops":"Ferrari／Carscoops",
    "Znews — delivery and detailed specification":"Znews — 交付与详细配置",
    "The Times — Sainz discusses his collection":"The Times — Sainz 谈个人收藏",
    "The Supercar Blog / 原报道图片":"The Supercar Blog／原报道图片",
    "duPont REGISTRY — David Lee and Jay Leno":"duPont REGISTRY — David Lee 与 Jay Leno",
    "RM Sotheby's — owner identified in editorial":"RM Sotheby’s — 官方专题确认车主",
    "Ferrari Collector David Lee / duPont REGISTRY":"Ferrari Collector David Lee／duPont REGISTRY",
    "Luxurylaunches — exterior and interior specification":"Luxurylaunches — 外观与内饰配置",
    "The Scottish Sun — delivery timing and public sighting":"The Scottish Sun — 交付时间与公开目击",
    "AS USA — Lisbon sighting and ownership":"AS USA — 里斯本目击与车主关系",
    "talkSPORT — red car and public drive":"talkSPORT — 红色车辆与公开驾驶",
    "autoevolution — ownership report and photo source":"autoevolution — 车主报道与图片来源",
    "Autoevolution — Ibrahimović and white SP3":"Autoevolution — Ibrahimović 与白色 SP3",
    "Autogespot — Milan sighting":"Autogespot — 米兰目击",
    "Per Gessle public announcement":"Per Gessle 公开公告",
    "Ferrari official — Incredible Garages with Per Gessle":"Ferrari 官方 — Incredible Garages with Per Gessle",
    "Hotel Tylösand collection description":"Hotel Tylösand 收藏说明",
    "The New Yorker — SOC event and owner description":"The New Yorker — SOC 活动与车主描述",
    "Carrio Motor Cars listing":"Carrio Motor Cars 挂牌",
    "duPont REGISTRY listing report":"duPont REGISTRY 挂牌报道",
    "Stratstone delivery post":"Stratstone 交付帖",
    "Wikimedia Commons file and licensing":"Wikimedia Commons 文件与许可",
    "Reddit public sighting thread":"Reddit 公开目击讨论",
    "Reddit sighting and colour discussion":"Reddit 目击与颜色讨论",
    "The Supercar Blog — final Verde Pallido car":"The Supercar Blog — 最后一辆 Verde Pallido",
    "F1rst Motors — final Daytona SP3 report":"F1rst Motors — 最后一辆 Daytona SP3 报道",
    "Public owner/collection profile":"公开车主／收藏档案",
    "Exclusive Car Registry public profile":"Exclusive Car Registry 公开档案",
    "DK Engineering":"DK Engineering",
    "duPont REGISTRY / Ferrari of Central New Jersey":"duPont REGISTRY／Ferrari of Central New Jersey",
    "Joe Macari":"Joe Macari",
    "Joe Macari syndicated specification":"Joe Macari 转载配置说明",
    "@paid2shoot / Ferrari Beverly Hills / duPont REGISTRY":"@paid2shoot／Ferrari Beverly Hills／duPont REGISTRY",
    "Ferrari of Atlanta / duPont REGISTRY":"Ferrari of Atlanta／duPont REGISTRY",
    "Ferrari of Central Florida / duPont REGISTRY":"Ferrari of Central Florida／duPont REGISTRY",
    "Ferrari Lake Forest / duPont REGISTRY":"Ferrari Lake Forest／duPont REGISTRY",
    "Miller Motorcars / duPont REGISTRY":"Miller Motorcars／duPont REGISTRY",
    "@carsthatlookneat / Miller Motorcars / duPont REGISTRY":"@carsthatlookneat／Miller Motorcars／duPont REGISTRY",
    "Ferrari of Fort Lauderdale / duPont REGISTRY":"Ferrari of Fort Lauderdale／duPont REGISTRY",
    "Shmee150 / duPont REGISTRY":"Shmee150／duPont REGISTRY",
    "Shmee150 original collection video":"Shmee150 原始收藏视频",
    "Protective Film Solutions / XPEL / duPont REGISTRY":"Protective Film Solutions／XPEL／duPont REGISTRY",
    "Automotive Masterpieces — chassis dossier":"Automotive Masterpieces — 底盘档案",
    "Automotive Masterpieces — car history":"Automotive Masterpieces — 车辆历史",
    "Automotive Masterpieces — technical specifications":"Automotive Masterpieces — 技术规格",
    "Automotive Masterpieces — declaration AU-34679":"Automotive Masterpieces — AU-34679 声明",
    "Bernards Exclusives":"Bernards Exclusives",
    "Dutch Ferrari and Lamborghini Register — VIN cross-check":"荷兰 Ferrari / Lamborghini Register — VIN 交叉核对",
    "Hendrick Performance dealer listing":"Hendrick Performance 经销商挂牌",
    "Made in Maranello chassis index":"Made in Maranello 底盘索引",
    "The Collection Porsche dealer listing":"The Collection Porsche 经销商挂牌",
    "The Collection Miami inventory — VIN cross-check":"The Collection Miami 库存 — VIN 交叉核对",
    "AMARI Supercars":"AMARI Supercars",
    "Car & Classic syndicated listing":"Car & Classic 转刊挂牌",
    "Dutch Ferrari and Lamborghini Register":"荷兰 Ferrari / Lamborghini Register",
    "duPont REGISTRY — Miller Motorcars 14-car gathering":"duPont REGISTRY — Miller Motorcars 14 车聚会",
    "duPont REGISTRY — Sainz delivery":"duPont REGISTRY — Sainz 交付报道",
    "duPont REGISTRY / Ferrari Magazine — Piero Ferrari livery":"duPont REGISTRY／Ferrari Magazine — Piero Ferrari 涂装",
    "Per Gessle / @PartyPleaser — Joyride arrival photo":"Per Gessle / @PartyPleaser — Joyride 到车照片",
    "Autogespot original Milan spot — Matte spots":"Autogespot 米兰原始街拍 — Matte spots",
    "AutoRef public VIN search history":"AutoRef 公开 VIN 搜索记录",
    "Public VIN lead; allocation status not independently verified":"公开 VIN 线索；客户配额身份尚未独立核实",
    "Factory demo; customer-allocation status not established":"工厂 Demo；客户配额归属尚未确定",
    "Public registry VIN lead":"公开 registry VIN 线索",
    "Public showroom sighting / VIN lead":"公开展厅目击／VIN 线索",
    "Factory demo car":"工厂 Demo 车辆",
    "2026-09-21 — Public VIN/chassis source reviewed; retained as a lead pending stronger per-car documentation.":"2026-09-21 — 已复核公开 VIN／底盘来源；在取得更强逐车证据前保留为研究线索。"
  };

  const enCommon = {
    "公开展示记录":"Public display record",
    "历史经销商记录 — 官网已归入 Previously Sold":"Historical dealer record — now marked Previously Sold",
    "325 miles（刊登时）":"325 miles at listing",
    "Bianco Italia（四层漆）; Blu Tour de France / Giallo Modena 涂装":"Bianco Italia (four-layer paint); Blu Tour de France / Giallo Modena livery",
    "New Jersey（公开经销商展示）":"New Jersey (public dealer showcase)",
    "New Jersey（公开交付报道）":"New Jersey (public delivery coverage)",
    "Tan upholstery（准确皮革名称未披露）":"Tan upholstery (exact leather name not disclosed)",
    "Deep purple（精确 Ferrari 色号未公布）":"Deep purple (exact Ferrari paint code not published)",
    "2026-09-21 — 来源正文与公开照片已复核；不将报道日期作为制造年份。":"2026-09-21 — Source text and public photos rechecked; publication date is not treated as the vehicle's model year.",
    "2026-09-21 — 复核公开图集；未公开身份字段不作推定。":"2026-09-21 — Public gallery rechecked; no inference is made for non-public identity fields.",
    "2026-09-21 — Ferrari 官方文章与照片复核。":"2026-09-21 — Ferrari official article and photos rechecked.",
    "2026-09-21 — 复核公开页面与预览照片；旧版精确配置未重新验证，登录后字段未读取。":"2026-09-21 — Public page and preview images rechecked; legacy exact specification was not revalidated and login-gated fields were not accessed.",
    "Ferrari 官方视频 — Leclerc 介绍本人定制车":"Ferrari official video — Leclerc presents his custom car",
    "The Supercar Blog / 原报道图片":"The Supercar Blog / original article image",
    "ECR 公开预览；版权归原摄影者，摄影署名见来源页":"ECR public preview; rights belong to the original photographer; photographer credit is listed on the source page"
  };

  const zhLocations = {
    "Monterey, California":"加利福尼亚州蒙特雷",
    "Zurich":"苏黎世",
    "Florida / Monterey":"佛罗里达／蒙特雷",
    "Delivered new to Andorra; auctioned at Villa d'Este":"新车交付安道尔；后于 Villa d’Este 拍卖",
    "Maranello":"马拉内罗",
    "Beverly Hills, California":"加利福尼亚州比佛利山",
    "Seattle, Washington":"华盛顿州西雅图",
    "Dubai":"迪拜",
    "Palm Beach, Florida":"佛罗里达州棕榈滩",
    "Munich, Bavaria":"巴伐利亚州慕尼黑",
    "Jupiter, Florida":"佛罗里达州朱庇特",
    "Moscow":"莫斯科",
    "Maranello, Emilia-Romagna":"艾米利亚-罗马涅大区马拉内罗",
    "Monte Carlo":"蒙特卡洛",
    "Monte Carlo / Ferrari Scuderia Monte-Carlo":"蒙特卡洛／Ferrari Scuderia Monte-Carlo",
    "Los Angeles, California":"加利福尼亚州洛杉矶",
    "London / Ferrari Hatfield":"伦敦／Ferrari Hatfield",
    "Lisbon":"里斯本",
    "Milan":"米兰",
    "Hotel Tylösand, Halmstad":"哈尔姆斯塔德 Hotel Tylösand",
    "Seen at Supercar Owners Circle event in Spain":"西班牙 Supercar Owners Circle 活动现场",
    "Fort Lauderdale, Florida":"佛罗里达州劳德代尔堡",
    "Stratstone Ferrari":"Stratstone Ferrari 经销商",
    "Greenwich, Connecticut":"康涅狄格州格林尼治",
    "Wan Chai":"湾仔",
    "Italy / Maranello public sightings":"意大利／马拉内罗公开目击",
    "Brisbane, Queensland":"昆士兰州布里斯班",
    "Swindon, England":"英格兰斯温登",
    "Herford, North Rhine-Westphalia":"北莱茵-威斯特法伦州黑尔福德",
    "Gambara, Lombardy":"伦巴第大区 Gambara",
    "Cannes, Provence-Alpes-Côte d’Azur":"普罗旺斯-阿尔卑斯-蓝色海岸大区戛纳",
    "Melbourne, Victoria":"维多利亚州墨尔本",
    "Miami, Florida":"佛罗里达州迈阿密",
    "Hengelo, Overijssel":"上艾瑟尔省亨厄洛",
    "Colchester, England":"英格兰科尔切斯特",
    "Tokyo":"东京",
    "Berlin":"柏林",
    "Dallas, Texas":"得克萨斯州达拉斯",
    "Orem, Utah":"犹他州奥勒姆",
    "Old Westbury, New York":"纽约州 Old Westbury",
    "Danville, California":"加利福尼亚州丹维尔",
    "UK dealer listing":"英国经销商挂牌",
    "London":"伦敦",
    "Atlanta, Georgia":"佐治亚州亚特兰大",
    "Central Florida":"佛罗里达中部",
    "Lake Bluff, Illinois":"伊利诺伊州 Lake Bluff",
    "Fort Lauderdale delivery":"劳德代尔堡交付",
    "Denmark — public collection feature":"丹麦 — 公开收藏专题",
    "PFS project feature; exact location not confirmed":"PFS 项目专题；精确地点未确认",
    "Dania Pointe, Florida":"佛罗里达州 Dania Pointe",
    "Hengelo":"亨厄洛"
  };

  const zhRecords = {
    "SP3-319682":{
      title:"599+1 Tailor Made 慈善特别车",
      owner:"Herbert Wertheim（公开报道买家）",
      exterior:"裸露碳纤维／Giallo Modena",
      interior:"Q-Cycle 再生轮胎技术织物，黄色点缀",
      wheels:"钻石切削锻造轮毂；前 20 英寸／后 21 英寸",
      mileage:"拍卖时为交付里程",
      options:["贯穿车身的 Ferrari 字样外部涂装","亮黑色碳复合材料前分流器、侧裙与扩散器","源自 Formula 1 的棋盘格碳纤维仪表罩","黄色安全带与头枕刺绣 Cavallino 跃马","专属银色 599+1 铭牌"],
      timeline:["2025 年 7 月 — Ferrari 公布这辆额外制造的慈善车辆。","2025 年 8 月 16 日 — 在 RM Sotheby’s Monterey 以 2,600 万美元成交。","2026 年 3 月 — 作为核心车辆参加 Miller Motorcars 在 Greenwich 举办的 14 辆 Daytona SP3 聚会。"],
      notes:"这是唯一一辆由 Ferrari 官方确认、位于原始 599 辆配额之外的额外 Daytona SP3。拍卖结束后，买家身份被公开报道。",
      review_status:"2026-09-21 — 保留拍卖核验结果，并补入 2026 年 3 月 Miller Motorcars 聚会公开记录。"
    },
    "SP3-299827":{
      title:"Rosso Deborah Tailor Made 定制车",
      owner:"Tailored for Speed Collection（拍卖时）",
      exterior:"专属 Rosso Deborah",
      interior:"Blu Elettrico Alcantara",
      wheels:"钻石抛光锻造轮毂",
      mileage:"编目时 2,933 km",
      status:"已售 — Tailored for Speed 2025",
      sale:"CHF 5,348,750 — RM Sotheby’s 公布成交结果",
      options:["碳纤维车顶面板","碳纤维前分流器、侧裙、后扩散器、后视镜及后盖扰流唇","喷绘 Scuderia 盾徽","红色四点式安全带","Apple CarPlay 与前轴抬升","定制行李及 Serie Speciali Yellow Book"],
      timeline:["2023 年 9 月 — 工厂生产日期。","2023 年 12 月 — 由巴塞尔 Niki Hasler AG 交付。","2025 年 5 月 — 参加 Cavalcade Siviglia。","2025 年 10 月 — 由 RM Sotheby’s 售出。","2026-09-21 — 拍卖行结果页复核：CHF 5,348,750。"],
      notes:"瑞士规格 Tailor Made，一任车主持有至拍卖出售。",
      review_status:"2026-09-21 已重新核验拍卖结果"
    },
    "SP3-297567":{
      title:"Giallo Triplo Strato / Nero",
      owner:"Driver’s Philosophy Collection（编目时）",
      exterior:"Giallo Triplo Strato；Nero 条纹；意大利国旗元素",
      interior:"Nero 黑色内饰，Giallo 黄色点缀",
      wheels:"哑光黑锻造轮毂",
      mileage:"编目时 227 miles",
      status:"已售 — Monterey 2026",
      sale:"US$17,825,000 — RM Sotheby’s 公布成交结果",
      options:["碳纤维硬顶、下部车身与后视镜","喷绘 Scuderia 盾徽","悬挂抬升","Apple CarPlay 与泊车摄像头","Giallo 安全带及头枕刺绣","Dreamline 换挡拨片点缀"],
      timeline:["2023 年 7 月 — 完成工厂装配。","2024 年 1 月 — 由 Wide World of Cars 向佛罗里达车主交付。","2025 年 10 月 — 被编目时所属收藏购入。","2026 年 8 月 — 安排参加 RM Sotheby’s Monterey。","2026-09-21 — 拍卖行结果页复核：US$17,825,000。"],
      notes:"底盘已确认的美国规格车辆，公开资料包含较完整配置。ECR 公开档案 70568 很可能是同一实车：2023 年 Giallo Triplo Strato/Nero、美国规格，由纽约 Spring Valley 的 Wide World Ferrari 交付。本站将其作为别名关联，不重复计作另一辆 SP3。",
      review_status:"2026-09-21 已重新核验拍卖结果"
    },
    "SP3-286921":{
      title:"Rosso Magma Tri-Coat",
      owner:"拍卖前为单一车主持有",
      exterior:"Rosso Magma 三层漆，搭配裸露碳纤维部件",
      interior:"Blu Elettrico Alcantara",
      wheels:"钻石切削锻造轮毂",
      mileage:"编目时 743 km",
      sale:"€6,250,000 — Broad Arrow Villa d’Este 2026",
      options:["碳纤维下部车身、硬顶、后视镜与后盖扰流唇","喷绘 Scuderia 盾徽","前后泊车摄像头","前轴抬升","黑色四点式安全带","Racing Driver Set、行李及 Yellow Book"],
      timeline:["2023 年 — 新车交付安道尔。","2026 年 5 月 — 在 Broad Arrow Villa d’Este 拍卖中售出。"],
      notes:"拍卖来源公开了 VIN 与配置细节。由于未取得可干净复用的来源图片文件，本资料包没有内嵌该车图片。",
      review_status:"2026-09-21 — 已复核公开图集；未公开身份字段不作推定。"
    },
    "SP3-PIERO-NART":{
      title:"Piero Ferrari — NART 致敬涂装",
      exterior:"白色车身，深蓝色 NART 风格中央条纹",
      interior:"红黑内饰",
      wheels:"深色锻造轮毂",
      options:["蓝白 NART 风格涂装","红色内饰点缀","配置灵感来自一辆与 Ferrari 家族历史相关的 250 LM"],
      timeline:["Ferrari 官方编辑内容曾公开展示该车。","据 Piero Ferrari 本人所述，该车曾在 Fiorano 完成其“洗礼”驾驶。"],
      notes:"精确漆号与 VIN 尚未公开。",
      review_status:"2026-09-21 — 已重新核验 Ferrari 官方专题及转载的 Ferrari Magazine 图片；VIN 与精确漆号仍未公开。"
    },
    "SP3-BH-RAME":{
      title:"Rame Scuro Lucido — Beverly Hills",
      owner:"私人车主",
      exterior:"Rame Scuro Lucido，搭配青铜色碳纤维饰件",
      interior:"蓝色 Alcantara，方格缝线",
      wheels:"缎面银色锻造轮毂",
      options:["青铜色碳纤维外部饰件","Tailor Made 铭牌","蓝色 Alcantara 碳纤维桶椅内饰处理"],
      timeline:["2025 年 4 月 — Ferrari Beverly Hills 公开展示交付。"],
      notes:"由经销商记录配置；VIN 仍未公开。",
      review_status:"2026-09-21 — 已复核公开图集；未公开身份字段不作推定。"
    },
    "SP3-SEATTLE-GARNER":{
      title:"Curt Garner — Blu Elettrico",
      exterior:"Blu Elettrico；Glossy Alluminio Lucido 中央条纹；Rosso Fiorano 点缀",
      interior:"与 Rosso Fiorano 呼应的内饰处理；完整材料清单未公开",
      options:["从车头贯穿车尾的 Glossy Alluminio Lucido 条纹","细 Rosso Fiorano 点缀线，与车主 Monza SP2 呼应","内饰颜色与 Rosso Fiorano 形成关联"],
      timeline:["2022 年 — 与家人在纽约 Ferrari Tailor Made 完成配置。","2025 年 — 交付后由 Ferrari 官方专题报道。"],
      notes:"西雅图两辆分别有独立记录的“好友车”之一。",
      review_status:"2026-09-21 — Ferrari 官方文章与照片已复核。"
    },
    "SP3-SEATTLE-BERNIER":{
      title:"Yahn Bernier — Glossy Sanusilver",
      exterior:"Glossy Sanusilver，搭配 Rosso F1 2004 条纹",
      interior:"红色技术织物；Nero Trilobato；银色 Cavallino 跃马刺绣",
      options:["Rosso F1 2004 前机盖及车尾条纹","涂装灵感来自 Ferrari 250 GTO 底盘 4153GT","红色技术织物内饰","Nero Trilobato 织物","头枕银色 Cavallino 跃马刺绣"],
      timeline:["2022 年 — 与家人在纽约 Ferrari Tailor Made 完成配置。","2025 年 — 交付后由 Ferrari 官方专题报道。"],
      notes:"西雅图两辆分别有独立记录的“好友车”之一。",
      review_status:"2026-09-21 — Ferrari 官方文章与照片已复核。"
    },
    "SP3-BP-GREEN":{
      title:"BP Green — F1 车手签名发动机盖",
      owner:"私人车主",
      exterior:"一次性 BP Green 定制色",
      interior:"黑色；完整配置单未公开",
      wheels:"深金色",
      mileage:"挂牌时少于 400 miles",
      status:"公开挂牌出售",
      sale:"公开报道要价 AED 21,000,000",
      options:["发动机盖由 Charles Leclerc 与 Carlos Sainz Jr. 以金色签名","一次性 BP Green 车漆","深金色轮毂"],
      timeline:["2025 年 — 由迪拜 F1rst Motors 挂牌。"],
      notes:"经销商与媒体均有记录，但 VIN 与完整内饰配置未公开。",
      review_status:"2026-09-21 — 已复核公开图集；未公开身份字段不作推定。"
    },
    "SP3-COMMUNITY-284860":{
      title:"Blu America — 社区 registry 线索",
      exterior:"Blu America（社区报告）",
      status:"社区目击记录",
      notes:"仅作为研究线索保留。升级为正式车档前，需要独立 VIN／来源确认。",
      review_status:"历史 v3 条目；本次更新未重新核验"
    },
    "SP3-CHARLES-LECLERC":{
      title:"Charles Leclerc — 摩纳哥 16 号",
      exterior:"Nero Opaco，红白摩纳哥风格中央条纹",
      interior:"黑／红内饰；两张碳纤维桶椅之间有 Leclerc 签名",
      wheels:"哑光黑锻造轮毂",
      mileage:"未公开",
      status:"车主本人持有／公开驾驶",
      options:["两侧车门均有赛车号码 16","灵感来自摩纳哥的红白中央涂装","座椅之间有 Charles Leclerc 签名","红色车身细线与红色刹车卡钳"],
      timeline:["2024 年 3 月 — 在摩纳哥公开交付并首次被拍到。","2024–2026 年 — 多次在摩纳哥被拍摄并公开驾驶。"],
      notes:"公开交付报道直接确认了车主与车辆关系。VIN 与精确内饰材料代码仍未公开。",
      review_status:"2026-09-21 — 已重新核验交付／配置来源及 Monaco 公开图库；VIN 仍未公开。"
    },
    "SP3-CARLOS-SAINZ":{
      title:"Carlos Sainz Jr. — 55 号 Smooth Operator",
      exterior:"Grigio Opaco 哑光灰，红色中央条纹与红色碳纤维点缀",
      interior:"Rosso Alcantara，含 55 号与 Smooth Operator 个性化元素",
      wheels:"深色锻造轮毂",
      status:"车主本人持有／已交付",
      options:["赛车号码 55 融入下部碳纤维车身图形","座舱及碳纤维进气口细节带 Smooth Operator 字样","Rosso Alcantara 座舱","红色中央条纹与外围红色点缀"],
      timeline:["2024 年 12 月 — 在 Sainz 离开 Scuderia Ferrari 前不久完成交付。","2025 年 — Sainz 公开表示这辆 SP3 是其收藏中特别重要的一辆车。"],
      notes:"车主、交付以及关键配置均有交付影像与后续本人采访支持。",
      review_status:"2026-09-21 — 已重新核验交付来源、Tailor Made 细节及公开交付图；VIN 仍未公开。"
    },
    "SP3-DAVID-LEE":{
      title:"David Lee — 绿色碳纤维“Relish”",
      exterior:"深绿色裸露碳纤维，金色中央条纹",
      interior:"深金／黄色 Tailor Made 内饰",
      wheels:"哑光金色锻造轮毂",
      mileage:"有公开驾驶记录；精确里程未公开",
      status:"车主本人持有／公开驾驶",
      options:["绿色调裸露碳纤维车身","金色中央条纹","哑光金色轮毂","金／黄色固定式座椅内饰","属于 Lee 的“Relish”配色收藏"],
      timeline:["2024 年 10 月 — 在 David Lee 生日当天交付。","2025 年 6 月 — 登上 Jay Leno’s Garage 并实际驾驶。"],
      notes:"公开报道直接描述了车主、交付时间、外观主题及内饰颜色。",
      review_status:"2026-09-21 — 已复核公开图集；未公开身份字段不作推定。"
    },
    "SP3-GORDON-RAMSAY":{
      title:"Gordon Ramsay — Bianco Cervino 25 号",
      exterior:"Bianco Cervino 珠光白，灰色细节与 25 号圆形号码贴",
      interior:"Blu Alcantara，Nero 皮革细节",
      wheels:"银色锻造轮毂",
      options:["25 号赛车圆形号码贴","灰色复古赛车风格细节","据报道为手绘 Cavallino 盾徽","碳纤维车顶","Blu Alcantara 座舱"],
      timeline:["2023 年 6 月 — 据报道交付至 Ferrari Hatfield。","2025 年 2 月 — 首次被广泛报道在伦敦餐厅外公开驾驶。"],
      notes:"25 号的确切含义尚未被公开确认。",
      review_status:"历史 v3 条目；本次更新未重新核验"
    },
    "SP3-CRISTIANO-RONALDO":{
      title:"Cristiano Ronaldo — 红色 SP3",
      exterior:"红色；精确 Ferrari 漆号未被独立公开",
      wheels:"公开视频中可见深色锻造轮毂",
      status:"车主本人持有／公开驾驶",
      timeline:["2024 年 3 月 — 国家队比赛间歇期间，Ronaldo 被拍到驾驶该车抵达里斯本一家酒店。"],
      notes:"车主关系与红色外观均有充分公开记录；详细 build sheet 仍不可得。",
      review_status:"历史 v3 条目；本次更新未重新核验"
    },
    "SP3-ZLATAN-IBRAHIMOVIC":{
      title:"Zlatan Ibrahimović — 哑光白",
      exterior:"哑光白，搭配对比鲜明的裸露碳纤维",
      wheels:"单色银色锻造轮毂",
      status:"车主本人持有／公开驾驶",
      options:["哑光白外观","裸露碳纤维下部车身","银色轮毂"],
      timeline:["2023 年 4 月 — 在米兰公开被拍到驾驶该车。","2023 年 9 月 — 再次在社交媒体发布该车。"],
      notes:"这辆哑光白 SP3 不应与 Gordon Ramsay 的 Bianco Cervino 25 号混淆。",
      review_status:"2026-09-21 — 已重新核验 2023 年 4 月米兰原始街拍及公开车主报道。"
    },
    "SP3-PER-GESSLE":{
      title:"Per Gessle — Joyride Collection",
      owner:"Per Gessle／Joyride Collection",
      exterior:"白色，红色点缀与裸露碳纤维",
      interior:"黑色，红色点缀",
      status:"Joyride Collection 展示中",
      options:["白／红／裸露碳纤维外观主题","黑红座舱"],
      timeline:["2023 年 4 月 — 宣布加入 Joyride Collection。","2023–2026 年 — 在 Hotel Tylösand 展示。"],
      notes:"公开资料将该车与 Gessle 的收藏直接关联；VIN 与精确工厂漆号仍未公开。",
      review_status:"2026-09-21 — 已重新核验车主／收藏关系及车主本人发布的 Joyride 到车照片。"
    },
    "SP3-DUTCH-SOC-BABY-BLUE":{
      title:"Baby Blue — Supercar Owners Circle",
      owner:"荷兰房地产巨头；来源未公开姓名",
      exterior:"Baby Blue 浅蓝色",
      mileage:"SOC 活动中有实际驾驶记录",
      status:"主流媒体确认私人持有",
      timeline:["2023 年 — 在西班牙南部 Supercar Owners Circle 活动中驾驶。"],
      notes:"《The New Yorker》确认了车主国籍与行业，但有意未公开姓名。",
      review_status:"历史 v3 条目；本次更新未重新核验"
    },
    "SP3-CARRIO-BIANCO-ITALIA":{
      title:"Bianco Italia / Rosso Ferrari — Carrio",
      owner:"私人委托方／Carrio Motor Cars 挂牌",
      exterior:"Bianco Italia，中央为 Livrea Bianco Cervino 条纹",
      interior:"Rosso Ferrari",
      mileage:"挂牌时 230 miles",
      status:"经销商挂牌",
      sale:"据报道要价接近 US$13 million",
      options:["喷绘 Scuderia 盾徽","Bianco Cervino 中央涂装","Rosso Ferrari 座舱"],
      timeline:["2026 年 — Carrio Motor Cars 以 230 miles 里程公开挂牌。"],
      notes:"经销商元数据出现数字 294531，但在没有独立公开 VIN 的情况下，本站不将其标记为底盘号。",
      review_status:"2026-09-21 — 已复核公开图集；未公开身份字段不作推定。"
    },
    "SP3-STRATSTONE-ROSSO-CARBON":{
      title:"Rosso Lucido Carbonio a Vista — Stratstone",
      owner:"私人客户",
      exterior:"Rosso Lucido 红色调裸露碳纤维",
      interior:"特别 Tailor Made 座舱；完整代码未公开",
      wheels:"可公开访问文本中未记录",
      options:["带色裸露碳纤维车身","独特的 Tailor Made 内外饰细节"],
      timeline:["2024 年 12 月 — Stratstone Ferrari 人员公开展示交付。"],
      notes:"来自经销商的公开记录；VIN 与完整 build sheet 尚不可得。",
      review_status:"2026-09-21 — 已复核公开图集；未公开身份字段不作推定。"
    },
    "SP3-RUBINO-GREENWICH":{
      title:"Rubino Transitional Carbon — 23 号",
      market:"大概率为美国规格；尚未独立确认",
      exterior:"Rubino Transitional Carbon，浅蓝色 23 号复古赛车涂装",
      interior:"透过车窗可见蓝色内饰；精确材料未公开",
      wheels:"哑光蓝锻造轮毂",
      status:"2025 Greenwich Concours d’Elegance 展示",
      options:["23 号圆形号码贴","浅蓝色车头面板","哑光蓝轮毂","据报道，涂装灵感来自 1967 Le Mans 的 Maranello Concessionaires 412 P"],
      timeline:["2025 年 5 月 31 日 — 在 Greenwich Concours d’Elegance 被拍摄。"],
      notes:"照片作者为 Wikimedia Commons 用户 Mr.choppers，许可为 CC BY-SA 4.0。",
      review_status:"历史 v3 条目；本次更新未重新核验"
    },
    "SP3-HK-GREEN-JEWEL":{
      title:"Green Jewel — 香港展示",
      edition:"原始 599 辆客户生产序列；身份尚未独立对应 VIN",
      owner:"未公开",
      exterior:"Green Jewel",
      interior:"红色",
      wheels:"古铜色",
      status:"公开展示／社区目击",
      options:["Green Jewel 外观","古铜色轮毂","红色内饰"],
      timeline:["2026 年 7 月 — 在湾仔一家咖啡店展示时被拍摄。"],
      notes:"近期社区目击记录。在公开 VIN、车主或交付来源之前，证据等级低于经销商／官方记录。",
      review_status:"历史 v3 条目；本次更新未重新核验"
    },
    "SP3-BLU-TORRICE-LEAD":{
      title:"Blu Torrice Tailor Made — 公开目击线索",
      edition:"原始 599 辆客户生产序列；公开目击尚未与唯一身份对应",
      owner:"未公开",
      exterior:"据报为 Blu Torrice／也可能是相邻的一次性蓝色定制色",
      interior:"当地观察者报告为蓝色 Alcantara",
      mileage:"据报道曾在当地驾驶",
      status:"社区目击记录",
      timeline:["2024 年 6 月 — 社区公开照片开始传播。"],
      notes:"公开讨论对漆色识别存在争议，因此本站有意将精确工厂颜色标记为不确定。",
      review_status:"历史 v3 条目；本次更新未重新核验"
    },
    "SP3-POWERSLIDELOVER":{
      title:"@powerslidelover — Verde Pallido",
      edition:"原始 599 辆客户生产序列；公开报道为最后一辆客户车",
      exterior:"Verde Pallido，一次性黑色后部饰板",
      interior:"据报道为 Arancione 皮革",
      mileage:"有持续公开驾驶记录",
      status:"车主本人持有／公开驾驶",
      options:["一次性 Verde Pallido 车漆","后部饰板为黑色，而非车身同色","据报道为 Arancione 皮革内饰"],
      timeline:["2025 年 4 月 — 公开报道称车辆已准备交付。","2025–2026 年 — 车主持续公开驾驶并拍摄视频。"],
      notes:"公开来源称这是原始 599 辆客户生产序列中最后完成的一辆。本站保留该生产顺序说法为“媒体报道”，不将其视为 Ferrari 工厂公布的铭牌编号。",
      review_status:"2026-09-21 — 已复核公开图集；未公开身份字段不作推定。"
    },
    "SP3-DK-2400":{
      title:"Bianco Italia / Blu Tour de France / Giallo Modena",
      mileage:"挂牌时 325 miles",
      status:"经销商挂牌 — 2026-09-21 核验",
      sale:"POA — 要价未公开",
      options:["喷绘 Scuderia 盾徽","碳纤维硬顶、下部车身、后视镜与方向盘","前后悬挂抬升系统及泊车摄像头","四点式安全带","Ferrari Classiche 黄册；两年延长保修（经销商说明）"],
      timeline:["2023-09 — 首次交付。","2024-09 / 2025-10 — 经销商记录的 Ferrari 保养。","2026-09 — 经销商称完成新一轮保养。"],
      notes:"公开经销商配置档案；未公布 VIN，因此尚未与 ECR 档案建立唯一对应。挂牌价不等于成交价。",
      review_status:"2026-09-21 已重新核验来源"
    },
    "SP3-CNJ-BLU-LAGUNA":{
      title:"Blu Laguna / Bianco King — Central New Jersey",
      city:"新泽西州（公开经销商展示）",
      interior:"棕褐色内饰（准确皮革名称未披露）",
      status:"公开经销商展示 — 2023 年 7 月",
      timeline:["2023-07-28 — duPont REGISTRY 报道 Ferrari of Central New Jersey 展示此车。"],
      notes:"报道明确给出双色漆与棕褐色内饰；未公布车主或 VIN。文章日期不作为车辆 model year。",
      review_status:"2026-09-21 已重新核验来源"
    },
    "SP3-CNJ-PURPLE":{
      title:"深紫色 Tailor Made — Central New Jersey",
      city:"新泽西州（公开交付报道）",
      exterior:"深紫色（精确 Ferrari 色号未公布）",
      interior:"蓝色 Alcantara／裸露碳纤维",
      status:"2025 年 2 月公开交付报道",
      options:["同色轮毂中心盖、格栅与碳纤维发动机罩（报道描述）"],
      timeline:["2025-02-11 — 经销商交付报道发表。"],
      notes:"不能仅凭紫色外观将此车认定为 Transitional Ametista 或其他同色 ECR 档案；车主身份未公开。",
      review_status:"2026-09-21 已重新核验来源"
    },
    "SP3-MACARI-ROSSO-LIBANO":{
      title:"Rosso Libano / Blu Elettrico — Joe Macari",
      owner:"未公开",
      exterior:"Extra-Range Rosso Libano",
      interior:"Blu Elettrico Alcantara",
      wheels:"Matt Grigio Corsa 锻造轮毂",
      mileage:"挂牌时 2,500 miles",
      status:"历史经销商记录 — 官网已归入 Previously Sold",
      options:["喷绘 Scuderia 盾徽","前悬挂抬升与泊车摄像头","Nero 四点式安全带","Gloss Nero 硬顶","哑光碳纤维内外饰件"],
      timeline:["2023 年 6 月 — 据经销商转载描述，由 HR Owen Ferrari London 交付。","2026-09-21 — Joe Macari 页面显示已不再出售；未公布成交价格。"],
      notes:"经销商转刊描述记载一任车主；制造商保修至 2027、保养计划至 2030 为挂牌时陈述，非本站保证。完整 VIN 未公开。",
      review_status:"2026-09-21 — 来源正文与公开照片已复核；不将报道日期作为制造年份。"
    },
    "SP3-BH-BLACK-WHITE":{
      title:"Black / White — Beverly Hills 礼服风格",
      exterior:"亮黑色，白色点缀及白色发动机盖处理；精确漆号未公布",
      interior:"白色菱格皮革，裸露碳纤维饰件",
      wheels:"缎面轮毂",
      status:"公开展示记录",
      options:["白色车门圆形号码贴","白色发动机盖环绕饰件","菱格白色座椅"],
      timeline:["2025 年 2 月 25 日 — 经销商交付专题发布。"],
      notes:"完整 VIN 未公开；与匿名来源索引的对应关系尚未确认。",
      review_status:"2026-09-21 — 来源正文与公开照片已复核；不将报道日期作为制造年份。"
    },
    "SP3-ATLANTA-WHITE-RED":{
      title:"White / Red — Ferrari of Atlanta",
      exterior:"白色，红色点缀与裸露碳纤维；精确漆名未公布",
      interior:"黑色，红色点缀",
      status:"公开展示记录",
      program:"公开报道为 Tailor Made 配置",
      timeline:["2025 年 3 月 4 日 — Ferrari of Atlanta 公开展示被报道。"],
      notes:"完整 VIN 未公开；与匿名来源索引的对应关系尚未确认。",
      review_status:"2026-09-21 — 来源正文与公开照片已复核；不将报道日期作为制造年份。"
    },
    "SP3-CENTRAL-FLORIDA-ROSSO":{
      title:"Rosso Corsa / Blue — Central Florida",
      exterior:"Rosso Corsa；Argento Nürburgring 发动机盖",
      interior:"蓝色 Alcantara；精确蓝色色号未公布",
      status:"公开展示记录",
      options:["手绘 Scuderia 盾徽","Argento Nürburgring 发动机盖"],
      timeline:["2026 年 7 月 16 日 — 经销商展示专题发布。"],
      notes:"完整 VIN 未公开；与匿名来源索引的对应关系尚未确认。",
      review_status:"2026-09-21 — 来源正文与公开照片已复核；不将报道日期作为制造年份。"
    },
    "SP3-LAKE-FOREST-RED":{
      title:"Red / Red cabin — Lake Forest",
      exterior:"红色；精确漆名未公布",
      interior:"红色；双车报道提及皮革与 Alcantara，但未明确哪种材料对应哪辆车",
      status:"公开展示记录",
      timeline:["2024 年 8 月 6 日 — Ferrari Lake Forest 同时展示红色与蓝色两辆 SP3。"],
      notes:"完整 VIN 未公开；与匿名来源索引的对应关系尚未确认。",
      review_status:"2026-09-21 — 来源正文与公开照片已复核；不将报道日期作为制造年份。"
    },
    "SP3-LAKE-FOREST-BLUE":{
      title:"Blue / Red cabin — Lake Forest",
      exterior:"蓝色；精确漆名未公布",
      interior:"红色；双车报道提及皮革与 Alcantara，但未明确哪种材料对应哪辆车",
      status:"公开展示记录",
      timeline:["2024 年 8 月 6 日 — Ferrari Lake Forest 同时展示红色与蓝色两辆 SP3。"],
      notes:"完整 VIN 未公开；与匿名来源索引的对应关系尚未确认。",
      review_status:"2026-09-21 — 来源正文与公开照片已复核；不将报道日期作为制造年份。"
    },
    "SP3-MILLER-BLU-CARBON":{
      title:"Blu Lucido Carbon / Zaffiro — Miller Motorcars",
      exterior:"Blu Lucido 裸露碳纤维",
      interior:"Transitional Zaffiro 碳纤维饰件，亮蓝色 Alcantara",
      status:"公开展示记录",
      timeline:["2024 年 5 月 7 日 — Miller Motorcars 展示这辆蓝色裸露碳纤维 SP3。"],
      notes:"完整 VIN 未公开；与匿名来源索引的对应关系尚未确认。",
      review_status:"2026-09-21 — 来源正文与公开照片已复核；不将报道日期作为制造年份。"
    },
    "SP3-MILLER-ROSSO-MAGMA":{
      title:"Rosso Magma / Oro Jeans Aunde — Miller Motorcars",
      exterior:"Rosso Magma 多层漆",
      interior:"Oro Jeans Aunde",
      wheels:"哑光古铜色",
      status:"公开展示记录",
      options:["手绘 Scuderia 盾徽"],
      timeline:["2025 年 11 月 24 日 — 三辆不同客户车辆被一起拍摄。"],
      notes:"报道记载该车同年 2 月交付；后保险杠带美国旗标。VIN 未公开，匿名 ECR 档案对应关系未确认。",
      review_status:"2026-09-21 — 来源正文与公开照片已复核；不将报道日期作为制造年份。"
    },
    "SP3-MILLER-NERO-DAYTONA":{
      title:"Nero Daytona / Blue — Miller Motorcars",
      interior:"蓝色；精确材料与色调未确认",
      wheels:"缎面银色",
      status:"公开展示记录",
      options:["手绘 Scuderia 盾徽"],
      timeline:["2025 年 11 月 24 日 — 三辆不同客户车辆被一起拍摄。"],
      notes:"报道记载该车同年 3 月交付。VIN 未公开，匿名 ECR 档案对应关系未确认。",
      review_status:"2026-09-21 — 来源正文与公开照片已复核；不将报道日期作为制造年份。"
    },
    "SP3-MILLER-PURPLE-CARBON":{
      title:"浅紫色裸露碳纤维 / 银色条纹 — Miller Motorcars",
      exterior:"浅紫色裸露碳纤维，银色条纹；该来源未确认精确工厂颜色",
      interior:"灰色 Alcantara",
      wheels:"亮银色锻造轮毂",
      status:"公开展示记录",
      options:["手绘 Scuderia 盾徽"],
      timeline:["2025 年 11 月 24 日 — 三辆不同客户车辆被一起拍摄。"],
      notes:"原报道明确不知道精确漆名。本站没有仅凭颜色将其认定为 2026 年活动中的 Transitional Ametista，也未与 Rubino 或新泽西紫色车合并。VIN 未公开，匿名 ECR 档案对应关系未确认。",
      review_status:"2026-09-21 — 来源正文与公开照片已复核；不将报道日期作为制造年份。"
    },
    "SP3-SWIZZ-BEATZ":{
      title:"Swizz Beatz — Black / Red",
      exterior:"亮黑色，红色细线；精确漆号未公布",
      interior:"未确认；来源只根据短视频作出推测",
      wheels:"黑色五辐轮毂，红色点缀",
      status:"公开展示记录",
      timeline:["2024 年 4 月 5 日 — 公开报道车辆交付给 Swizz Beatz。"],
      notes:"公开交付报道确认车主关系。原文对内饰使用推测措辞，因此本站不把黑色皮革／Alcantara 写成已确认配置；也不沿用文中错误的 6.2L 排量。",
      review_status:"2026-09-21 — 来源正文与公开照片已复核；不将报道日期作为制造年份。"
    },
    "SP3-SELECTED-CAR-PORTOFINO":{
      title:"Rosso Portofino / Bianco Avus — Selected Car Collection",
      exterior:"Rosso Portofino，Bianco Avus 条纹",
      interior:"Blu Elettrico Alcantara，红色刺绣",
      status:"公开展示记录",
      timeline:["2024 年 4 月 4–5 日 — 在 Shmee150 的丹麦驾驶视频中展示。"],
      notes:"Shmee150 是试驾者，不是报道中的车主。车辆属于 Selected Car Collection，由原视频说明确认。保留报道原图作为视频封面，不作为新增独立车辆照片。",
      review_status:"2026-09-21 — 来源正文与公开照片已复核；不将报道日期作为制造年份。"
    },
    "SP3-PFS-ROSSO-F1-2007":{
      title:"Rosso Formula 1 2007 — PFS / XPEL",
      city:"PFS 项目专题；精确地点未确认",
      status:"公开展示记录",
      options:["XPEL Ultimate Plus 全车漆面保护膜","XPEL Fusion Plus 陶瓷涂层"],
      notes:"施工案例的赞助报道；只采用明确车型、年份、漆名及施工记录，不采用其保值等广告性主张。车主及 VIN 未公开，不能排除与其他匿名红色车档重叠。",
      review_status:"2026-09-21 — 来源正文与公开照片已复核；不将报道日期作为制造年份。"
    },
    "SP3-DANIA-POINTE-WHITE":{
      title:"White SP3 — Exotics at Dania Pointe",
      exterior:"白色；精确色调未报道",
      status:"公开展示记录",
      timeline:["2023 年 11 月 15 日 — Ferrari of Fort Lauderdale 活动亮相被报道。"],
      notes:"仅按有照片的活动记录收录；无法确认是否与 Carrio 或其他白色车为同一实车，不计作独立已识别 VIN。",
      review_status:"2026-09-21 — 来源正文与公开照片已复核；不将报道日期作为制造年份。"
    }
,
    "SP3-315825-GUNSTON":{
      title:"Team Gunston 83 号 Tailor Made",
      edition:"Tailor Made 一次性定制规格",
      city:"马拉内罗",
      owner:"私人收藏",
      exterior:"Team Gunston 橙色，哑光黑条纹与细节；83 号号码",
      interior:"黑色 Alcantara，Super Electric Blue 蓝色座椅",
      status:"私人收藏",
      sale:"未公开出售",
      program:"Ferrari Tailor Made 定制",
      options:["Team Gunston 橙黑一次性定制涂装","车身四面均有 83 号圆形号码","致敬 1968 年 Rhodesia 赛事中的 Ferrari 330 P4 / 350 Can-Am 底盘 0858","Super Electric Blue Alcantara 座椅"],
      timeline:["2025 年 3 月 26 日 — 在 Ferrari Atelier 及 Maranello Ferrari 工厂展示。","2025 年 8 月 8 日 — Automotive Masterpieces 发布 AU-34679 声明。","2025 年 9 月 5 日 — 研究档案记录 RINA 认证。"],
      notes:"Automotive Masterpieces 公开完整 VIN，并将其记录为 Ferrari Tailor Made 的一次性定制规格，灵感来自 Team Gunston 的 1968 Ferrari 350 Can-Am / 330 P4 底盘 0858。该车与后来的 599+1 慈善 SP3 是不同实车。",
      review_status:"2026-09-21 — 已复核 Automotive Masterpieces 公开页面中的完整 VIN、配置及来源历史。"
    },
    "SP3-319387-ROSSO-TAORMINA":{
      title:"Rosso Taormina / Rosso FX — Bernards",
      city:"Woerden（荷兰）",
      mileage:"Bernards 挂牌时 135 km",
      status:"已售 — Bernards Exclusives",
      sale:"价格未公开",
      program:"Ferrari Tailor Made 定制",
      timeline:["2025 年 11 月 25 日 — 荷兰 registry 记录该车在 Bernards Exclusives 挂牌，里程 125 km。","2026 年 — Bernards 页面显示 135 km，并标记为已售。"],
      notes:"VIN、Rosso Taormina 外观及 Rosso FX 内饰已与荷兰 Ferrari / Lamborghini Register 交叉核对。Bernards 将该车描述为 Tailor Made、1 of 599；当前页面标记为已售。",
      photo_captions:["Bernards 图库 · 左前 3/4","Bernards 图库 · 右后 3/4","Bernards 图库 · 驾驶舱","Bernards 图库 · 座椅与四点式安全带","Bernards 图库 · 副驾驶侧座舱","Bernards 图库 · 仪表盘 / 135 km","Bernards 图库 · 仪表台控制区","Bernards 图库 · 中央控制区","Bernards 图库 · Daytona SP3 仪表台细节","Bernards 图库 · 座舱全景"],
      review_status:"2026-09-21 — 已复核经销商页面、10 张公开图库照片及 VIN registry 交叉记录。"
    },
    "SP3-306496-HENDRICK":{
      title:"底盘 306496 — Hendrick Performance",
      city:"北卡罗来纳州 Concord",
      status:"公开经销商挂牌",
      sale:"请询价 — Hendrick Performance",
      timeline:["2026 年 — Hendrick Performance 公开挂牌，并公布完整 VIN ZFF05UMA2R0306496。"],
      notes:"Hendrick Performance 挂牌页提供完整 VIN，并将该车列为位于北卡罗来纳州 Concord 的二手 2024 Daytona SP3。Made in Maranello 的独立底盘索引列出同一 VIN 与底盘号。",
      review_status:"2026-09-21 — 已交叉核对经销商 VIN 与独立底盘索引；详细 build specification 尚未公开。"
    },
    "SP3-310048-MIAMI":{
      title:"White / Black — The Collection Miami",
      city:"佛罗里达州迈阿密",
      mileage:"挂牌时 164 miles",
      status:"历史经销商挂牌",
      sale:"询价 — The Collection Porsche",
      timeline:["2026 年 — The Collection Porsche 公开挂牌，记录 164 miles 里程及 VIN ZFF05UMA9S0310048。"],
      notes:"经销商挂牌公布了完整 VIN、白色外观、黑色内饰与 164 miles 里程。另一份 The Collection 库存抓取也出现相同 VIN。本站不依据历史挂牌快照推断当前仍在售。",
      review_status:"2026-09-21 — 已复核经销商 VIN 与历史库存交叉记录；不声称当前仍在售。"
    },
    "SP3-AMARI-ROSSO-MAGMA":{
      title:"Rosso Magma / Blu Elettrico — AMARI",
      edition:"原始 599 辆客户生产序列；尚未以 VIN 建立唯一身份",
      city:"英格兰 Preston",
      owner:"经销商出售前为一任车主",
      exterior:"Rosso Magma",
      interior:"Alcantara Blu Elettrico",
      mileage:"挂牌时 20 km",
      status:"已售 — AMARI Supercars",
      sale:"价格未公开",
      timeline:["2026 年 — AMARI 将该车列为 2026 年注册、一任车主、20 km。","2026 年 8 月 13 日 — Car & Classic 转刊该经销商广告；之后广告被标记为已移除。"],
      notes:"尽管同为 Rosso Magma / Blu Elettrico，本站仍将其与底盘 286921 分开。AMARI 记录该车 2026 年注册且仅 20 km，而 286921 于 2023 年交付，并在 2026 年拍卖编目时已有 743 km。缺少 VIN 前不进行合并。",
      photo_captions:["AMARI 经销商图库 · Rosso Magma 外观"],
      review_status:"2026-09-21 — 已复核经销商记录及转刊广告；没有 VIN 证据，因此明确不与底盘 286921 合并。"
    },
    "SP3-277497-FACTORY-DEMO":{
      title:"Ferrari 工厂 Demo — 底盘 277497",
      edition:"工厂 Demo；客户配额归属尚未确定",
      city:"意大利",
      owner:"Ferrari 工厂 Demo 车队（registry 来源报告）",
      exterior:"Rosso Magma",
      interior:"Blu 蓝色",
      status:"工厂 Demo 车辆",
      sale:"未公开出售",
      timeline:["2022 年 — 荷兰 Ferrari / Lamborghini Register 将该车记录为意大利注册的 Ferrari 工厂 Demo。"],
      notes:"两个公开底盘索引分别列出 VIN ZFF05UMB000277497。荷兰 registry 将其标记为 factory demo car，并说明从未有荷兰注册。由于这些来源并未确认其客户配额身份，本站不自动将其计入 599 辆客户分配。",
      review_status:"2026-09-21 — 已在两个公开底盘索引中交叉核对 VIN；factory-demo 分类沿用 registry 来源。"
    }
,
    "SP3-277498-DEMO-LEAD":{
      title:"Ferrari 工厂 Demo — 底盘 277498",
      edition:"工厂 Demo；客户配额归属尚未确定",
      owner:"未公开",
      status:"工厂 Demo 车辆",
      timeline:["2022 年 — 荷兰 Ferrari / Lamborghini Register 记录意大利车牌 GJ-562-FL，并将其归类为 factory demo。"],
      notes:"公开 registry 来源发布完整 VIN、Rosso Magma / Blu 配置及 factory-demo 分类。本轮未找到独立第二来源，因此保留为 lead，而不是详细车档。"
    },
    "SP3-277499-DEMO-LEAD":{
      title:"Ferrari 工厂 Demo — 底盘 277499",
      edition:"工厂 Demo；客户配额归属尚未确定",
      owner:"未公开",
      status:"工厂 Demo 车辆",
      timeline:["2022 年 — 荷兰 Ferrari / Lamborghini Register 记录意大利车牌 GJ-563-FL，并将其归类为 factory demo。"],
      notes:"公开 registry 来源发布完整 VIN、Giallo Triplo Strato / Rosso 配置及 factory-demo 分类。本轮未找到独立第二来源，因此保留为 lead。"
    },
    "SP3-289571-VIN-LEAD":{
      title:"Azzurro La Plata — 底盘 289571",
      owner:"未公开",
      timeline:["2023 年 — 荷兰 Ferrari / Lamborghini Register 记录 VIN 与配置，并注明该车从未有荷兰注册。"],
      notes:"完整 VIN 与配色组合在荷兰 registry 中公开。尚未找到第二个逐车来源，因此仅保留为 VIN lead，不推断车主或所在地。"
    },
    "SP3-291935-VIN-LEAD":{
      title:"Giallo Modena / Nero — 底盘 291935",
      city:"荷兰",
      owner:"未公开",
      timeline:["2025 年 10 月 27 日 — 荷兰 registry 记录该 VIN 使用车牌 JKF-62-L。"],
      notes:"公开荷兰 registry 发布完整 VIN 与 Giallo Modena / Nero 配置。尚无独立逐车来源，因此保留为研究线索。"
    },
    "SP3-308288-VIN-LEAD":{
      title:"Carbon / Verde — 底盘 308288",
      owner:"未公开",
      exterior:"裸露碳纤维（registry 标记：Carbon）",
      timeline:["2024 年 — 荷兰 Ferrari / Lamborghini Register 记录该 VIN，外观 Carbon、内饰 Verde。"],
      notes:"registry 公开完整 VIN 与基础 Carbon / Verde 配置。尚未找到第二个逐车来源，因此保留为 lead，也不推断精确 Tailor Made 色名。"
    },
    "SP3-299394-NL-VIN":{
      title:"Grigio / Nero — 底盘 299394",
      city:"荷兰",
      owner:"未公开",
      timeline:["2025 年 3 月 21 日 — 荷兰 registry 开始记录该 VIN 使用车牌 HJK-99-H。"],
      notes:"荷兰 registry 发布完整 VIN、Grigio / Nero 配置及荷兰注册记录。该行没有提供 model year，因此本站留空年份，不自行推断。"
    },
    "SP3-291270-VIN-LEAD":{
      title:"Verde / Nero — 底盘 291270",
      city:"亨厄洛",
      owner:"未公开",
      status:"公开展厅目击／VIN 线索",
      timeline:["2026 年 2 月 1 日 — registry 备注将该车记录在 Hengelo 的 Munsterhuis Sportscars 展厅。"],
      notes:"registry 发布完整 VIN 与 Verde / Nero 配置，并记录 2026 年展厅目击。尚未找到经销商自己的 VIN 级页面，因此仍保留为 lead。"
    },
    "SP3-288783-VIN-LEAD":{
      title:"底盘 288783 — 公开 VIN 线索",
      owner:"未公开",
      timeline:["2026-09-21 — Made in Maranello 公开底盘索引列出 serial 288783 与 VIN ZFF05UMB000288783。"],
      notes:"Made in Maranello 公开完整 VIN 与 2022 年份。本轮未找到独立逐车配置或车主来源，因此保留为 chassis lead。"
    },
    "SP3-291272-VIN-LEAD":{
      title:"底盘 291272 — 公开 VIN 线索",
      owner:"未公开",
      timeline:["2026-09-21 — Made in Maranello 公开底盘索引列出 serial 291272 与 VIN ZFF05UMB000291272。"],
      notes:"Made in Maranello 公开完整 VIN 与 2023 年份。本轮未找到独立逐车配置或车主来源，因此保留为 chassis lead。"
    },
    "SP3-292660-VIN-LEAD":{
      title:"底盘 292660 — 公开 VIN 线索",
      owner:"未公开",
      timeline:["2025 年 12 月 — AutoRef 公开搜索记录将该 VIN 标识为 Ferrari Daytona SP3。","2026-09-21 — Made in Maranello 底盘索引独立列出同一 VIN 与 serial。"],
      notes:"两个公开 VIN／底盘索引分别将 ZFF05UMA000292660 识别为 Daytona SP3。当前都没有可靠的公开逐车配置，因此保留为 VIN lead，而不是详细车档。"
    },
    "SP3-310023-VIN-LEAD":{
      title:"底盘 310023 — 公开 VIN 线索",
      owner:"未公开",
      timeline:["2026-09-21 — Made in Maranello 公开底盘索引列出 serial 310023 与 VIN ZFF05UMA1R0310023。"],
      notes:"完整 VIN 出现在 Made in Maranello 的公开底盘索引中。本轮未找到第二逐车来源或公开 build specification，因此保留为 lead。"
    },
    "SP3-317185-VIN-LEAD":{
      title:"底盘 317185 — 公开 VIN 线索",
      owner:"未公开",
      timeline:["2026-09-21 — Made in Maranello 公开底盘索引列出 serial 317185 与 VIN ZFF05UMB000317185。"],
      notes:"Made in Maranello 公开完整 VIN 与 2025 年份。本轮未找到独立逐车配置或车主来源，因此保留为 chassis lead。"
    }
  };

  const enRecords = {
    "SP3-299827":{
      timeline:["September 2023 — Factory build date.","December 2023 — Delivered through Niki Hasler AG, Basel.","May 2025 — Participated in Cavalcade Siviglia.","October 2025 — Sold by RM Sotheby’s.","2026-09-21 — Auction-house result page rechecked: CHF 5,348,750 — RM Sotheby’s published result."]
    },
    "SP3-297567":{
      timeline:["July 2023 — Completed factory assembly.","January 2024 — Delivered through Wide World of Cars to a Florida owner.","October 2025 — Acquired by the cataloguing collection.","August 2026 — Scheduled for RM Sotheby’s Monterey.","2026-09-21 — Auction-house result page rechecked: US$17,825,000 — RM Sotheby’s published result."]
    },
    "SP3-DK-2400":{
      exterior:"Bianco Italia (four-layer paint); Blu Tour de France / Giallo Modena livery",
      mileage:"325 miles at listing",
      options:["Airbrushed Scuderia shields","Carbon-fibre hardtop, lower bodywork, mirrors, and steering wheel","Front/rear suspension lift systems and parking cameras","Four-point harnesses","Ferrari Classiche Yellow Book; two-year extended warranty (dealer statement)"],
      timeline:["September 2023 — First delivered.","September 2024 / October 2025 — Ferrari servicing recorded by the dealer.","September 2026 — Dealer states another service was completed."],
      notes:"Public dealer specification record. No VIN was published, so it has not been uniquely matched to an ECR profile. Asking price is not a sale price."
    },
    "SP3-CNJ-BLU-LAGUNA":{
      city:"New Jersey (public dealer showcase)",
      interior:"Tan upholstery (exact leather name not disclosed)",
      timeline:["28 July 2023 — duPont REGISTRY reported Ferrari of Central New Jersey displaying the car."],
      notes:"Reporting explicitly identifies the two-tone paint and tan interior; neither owner nor VIN was published. The article date is not treated as the vehicle’s model year."
    },
    "SP3-CNJ-PURPLE":{
      city:"New Jersey (public delivery coverage)",
      exterior:"Deep purple (exact Ferrari paint code not published)",
      options:["Body-color wheel centers, grille, and carbon-fibre engine cover (as described in reporting)"],
      timeline:["11 February 2025 — Dealer delivery feature published."],
      notes:"The purple exterior alone is not enough to identify this car as Transitional Ametista or any similarly colored ECR profile. Owner identity was not published."
    },
    "SP3-MACARI-ROSSO-LIBANO":{
      status:"Historical dealer record — now marked Previously Sold",
      timeline:["June 2023 — HR Owen Ferrari London delivery, according to the dealer-syndicated description.","21 September 2026 — Joe Macari page says the car is no longer available; no transaction price is published."],
      notes:"Dealer-syndicated copy states one prior owner. Manufacturer warranty through 2027 and maintenance through 2030 were listing-time statements, not Atlas guarantees. Full VIN was not published."
    },
    "SP3-BH-BLACK-WHITE":{
      status:"Public display record",
      timeline:["25 February 2025 — Dealer delivery feature published."],
      notes:"Full VIN is not public; no match to an anonymous source-index profile has been confirmed."
    },
    "SP3-ATLANTA-WHITE-RED":{
      status:"Public display record",
      timeline:["4 March 2025 — Ferrari of Atlanta public display reported."],
      notes:"Full VIN is not public; no match to an anonymous source-index profile has been confirmed."
    },
    "SP3-CENTRAL-FLORIDA-ROSSO":{
      status:"Public display record",
      timeline:["16 July 2026 — Dealer display feature published."],
      notes:"Full VIN is not public; no match to an anonymous source-index profile has been confirmed."
    },
    "SP3-LAKE-FOREST-RED":{
      status:"Public display record",
      timeline:["6 August 2024 — Red and blue examples shown together by Ferrari Lake Forest."],
      notes:"Full VIN is not public; no match to an anonymous source-index profile has been confirmed."
    },
    "SP3-LAKE-FOREST-BLUE":{
      status:"Public display record",
      timeline:["6 August 2024 — Red and blue examples shown together by Ferrari Lake Forest."],
      notes:"Full VIN is not public; no match to an anonymous source-index profile has been confirmed."
    },
    "SP3-MILLER-BLU-CARBON":{
      status:"Public display record",
      timeline:["7 May 2024 — Blue exposed-carbon car featured by Miller Motorcars."],
      notes:"Full VIN is not public; no match to an anonymous source-index profile has been confirmed."
    },
    "SP3-MILLER-ROSSO-MAGMA":{
      status:"Public display record",
      timeline:["24 November 2025 — Three distinct client cars photographed together."],
      notes:"Reporting says this car was delivered in February of the same year; the rear bumper carries a U.S. flag motif. VIN is not public and no anonymous ECR match is confirmed."
    },
    "SP3-MILLER-NERO-DAYTONA":{
      status:"Public display record",
      timeline:["24 November 2025 — Three distinct client cars photographed together."],
      notes:"Reporting says this car was delivered in March of the same year. VIN is not public and no anonymous ECR match is confirmed."
    },
    "SP3-MILLER-PURPLE-CARBON":{
      status:"Public display record",
      timeline:["24 November 2025 — Three distinct client cars photographed together."],
      notes:"The original report explicitly says the exact paint name is unknown. The Atlas does not identify it as the Transitional Ametista event car based on color alone, nor merge it with the Rubino or New Jersey purple cars. VIN is not public and no anonymous ECR match is confirmed."
    },
    "SP3-SWIZZ-BEATZ":{
      status:"Public display record",
      timeline:["5 April 2024 — Delivery to Swizz Beatz reported."],
      notes:"Public delivery coverage confirms the ownership link. The source speculates about the cabin from a short video, so black leather / Alcantara is not treated as confirmed; the article’s incorrect 6.2-liter displacement is also not carried over."
    },
    "SP3-SELECTED-CAR-PORTOFINO":{
      status:"Public display record",
      timeline:["4–5 April 2024 — Collection car featured in Shmee150’s Denmark drive."],
      notes:"Shmee150 was the test driver, not the reported owner. The original video description confirms Selected Car Collection ownership. The source image is retained as the video cover, not counted as a newly identified vehicle photo."
    },
    "SP3-PFS-ROSSO-F1-2007":{
      status:"Public display record",
      notes:"Sponsored project coverage. The Atlas uses only the explicitly stated model, year, paint name, and protection work, not advertising claims about value retention. Owner and VIN are not public, so overlap with another anonymous red profile cannot be excluded."
    },
    "SP3-DANIA-POINTE-WHITE":{
      status:"Public display record",
      timeline:["15 November 2023 — Ferrari of Fort Lauderdale event appearance reported."],
      notes:"Included only as a photographed event record. It cannot be confirmed whether this is the Carrio car or another white SP3, so it is not counted as a separately identified VIN."
    }
  };

  Object.assign(enRecords, {
    "ECR-77928":{
      notes:"ECR publicly lists model year 2024, Rosso Magma exterior, Rosso Alcantara with Bianco stitching, LHD and clean-title status. Cross-source uniqueness has not been verified; a separate page ID does not prove this is a different physical car. Public location label retrieved 2026-09-21: Brisbane, Queensland, Australia (not a live location)."
    },
    "ECR-78501":{
      notes:"ECR publicly lists the car as a 2024 Blu Le Mans over Rosso Alcantara. Its page labels the transmission 'Manual', which conflicts with the Daytona SP3's seven-speed DCT; the Atlas treats that field as an ECR data error rather than a unique mechanical specification. Cross-source uniqueness has not been verified. Public location label retrieved 2026-09-21: Swindon, England, United Kingdom (not a live location)."
    },
    "ECR-85856":{
      notes:"ECR publicly lists model year 2024, Celeste Metallizzato, Nero Alcantara with Bianco stitching, automatic transmission, and LHD. Cross-source uniqueness has not been verified. Public location label retrieved 2026-09-21: Herford, North Rhine-Westphalia, Germany (not a live location)."
    },
    "ECR-100373":{
      notes:"ECR labels this profile as a 2022 pre-production Daytona SP3. It should not automatically be counted among the 599 customer allocations; the Atlas keeps it as a separate research/test-vehicle record. Cross-source uniqueness has not been verified. Public location label retrieved 2026-09-21: Gambara, Lombardy, Italy (not a live location)."
    },
    "ECR-101218":{
      notes:"The ECR profile links to a F1rst Motors sale page whose URL identifies the car as silver. Exact paint and interior codes remain unavailable. Cross-source uniqueness has not been verified. Public location label retrieved 2026-09-21: Dubai, United Arab Emirates (not a live location)."
    },
    "ECR-127142":{
      notes:"Search-visible ECR metadata identifies a black exterior and an Old Westbury, New York location. Cross-source uniqueness has not been verified; a separate page ID does not prove this is a different physical car. Public location label retrieved 2026-09-21: Old Westbury, New York, United States (not a live location)."
    }
  });

  const genericEcr = {
    "ECR-118417":"Palm Beach, Florida",
    "ECR-79530":"Palm Beach, Florida",
    "ECR-75890":"Munich, Bavaria",
    "ECR-91676":"Jupiter, Florida",
    "ECR-66577":"Moscow, Russia",
    "ECR-30308":"Maranello, Emilia-Romagna",
    "ECR-53050":"Cannes, Provence-Alpes-Côte d’Azur",
    "ECR-75106":"Melbourne, Victoria",
    "ECR-72780":"Miami, Florida",
    "ECR-52122":"Hengelo, Overijssel",
    "ECR-49186":"Colchester, England",
    "ECR-74185":"Tokyo, Japan",
    "ECR-57600":"Monaco",
    "ECR-98115":"Berlin, Germany",
    "ECR-107197":"Dubai, United Arab Emirates",
    "ECR-82192":"Dallas, Texas",
    "ECR-91942":"Orem, Utah",
    "ECR-101864":"Danville, California"
  };

  for (const [id, location] of Object.entries(genericEcr)) {
    zhRecords[id] = {
      ...(zhRecords[id]||{}),
      notes:`仅复现公开地点与档案身份，不复制登录后可见的 VIN、铭牌、车主或配置字段。跨来源唯一性尚未核实；独立网页 ID 不代表与其他车档一定是不同实车。2026-09-21 来源公开地点标签：${location}（不代表当前实时位置）。`,
      review_status:"2026-09-21 — 已复核公开页面与预览照片；旧版精确配置未重新验证，登录后字段未读取。"
    };
    enRecords[id] = {
      ...(enRecords[id]||{}),
      notes:`Only the public location and profile identity are reproduced. Login-gated VIN, plaque, ownership, and build fields are not copied. Cross-source uniqueness has not been verified; a separate page ID does not prove this is a different physical car. Public location label retrieved 2026-09-21: ${location} (not a live location).`,
      review_status:"2026-09-21 — Public page and preview images rechecked; legacy exact specification was not revalidated and login-gated fields were not accessed."
    };
  }

  Object.assign(zhRecords, {
    "ECR-77928":{
      notes:"ECR 公开列出：2024 model year、Rosso Magma 外观、Rosso Alcantara 搭配 Bianco 缝线、左舵及 clean-title 状态。跨来源唯一性尚未核实；独立网页 ID 不代表与其他车档一定是不同实车。2026-09-21 来源公开地点标签：Brisbane, Queensland, Australia（不代表当前实时位置）。",
      review_status:"2026-09-21 — 已复核公开页面与预览照片；旧版精确配置未重新验证，登录后字段未读取。"
    },
    "ECR-78501":{
      notes:"ECR 将该车公开列为 2024 Blu Le Mans／Rosso Alcantara。页面将变速箱标注为“Manual”，与 Daytona SP3 的七速 DCT 不符；本站将其视为 ECR 数据错误，而不是独特机械规格。跨来源唯一性尚未核实。2026-09-21 来源公开地点标签：Swindon, England, United Kingdom（不代表当前实时位置）。",
      review_status:"2026-09-21 — 已复核公开页面与预览照片；旧版精确配置未重新验证，登录后字段未读取。"
    },
    "ECR-85856":{
      notes:"ECR 公开列出：2024 model year、Celeste Metallizzato、Nero Alcantara 搭配 Bianco 缝线、自动变速箱及左舵。跨来源唯一性尚未核实。2026-09-21 来源公开地点标签：Herford, North Rhine-Westphalia, Germany（不代表当前实时位置）。",
      review_status:"2026-09-21 — 已复核公开页面与预览照片；旧版精确配置未重新验证，登录后字段未读取。"
    },
    "ECR-100373":{
      notes:"ECR 将该档案标记为 2022 年预生产 Daytona SP3。不应自动计入 599 辆客户配额，因此本站将其作为独立研发／测试车辆记录保留。跨来源唯一性尚未核实。2026-09-21 来源公开地点标签：Gambara, Lombardy, Italy（不代表当前实时位置）。",
      review_status:"2026-09-21 — 已复核公开页面与预览照片；旧版精确配置未重新验证，登录后字段未读取。"
    },
    "ECR-101218":{
      title:"迪拜银色 — 经销商关联档案",
      exterior:"银色（来自经销商 URL 描述；精确 Ferrari 漆名未公开）",
      notes:"ECR 档案链接至 F1rst Motors 销售页，其 URL 将车辆描述为银色。精确漆色与内饰代码仍不可得。跨来源唯一性尚未核实。2026-09-21 来源公开地点标签：Dubai, United Arab Emirates（不代表当前实时位置）。",
      review_status:"2026-09-21 — 已复核公开页面与预览照片；旧版精确配置未重新验证，登录后字段未读取。"
    },
    "ECR-127142":{
      title:"黑色 SP3 — Old Westbury",
      exterior:"黑色",
      notes:"ECR 搜索可见元数据标识黑色外观及纽约州 Old Westbury 地点。跨来源唯一性尚未核实；独立网页 ID 不代表与其他车档一定是不同实车。2026-09-21 来源公开地点标签：Old Westbury, New York, United States（不代表当前实时位置）。",
      review_status:"2026-09-21 — 已复核公开页面与预览照片；旧版精确配置未重新验证，登录后字段未读取。"
    }
  });

  const zhTitles = {
    "ECR-118417":"ECR 公开档案 118417",
    "ECR-79530":"ECR 公开档案 79530",
    "ECR-75890":"ECR 公开档案 75890",
    "ECR-91676":"ECR 公开档案 91676",
    "ECR-66577":"ECR 公开档案 66577",
    "ECR-30308":"ECR 公开档案 30308",
    "ECR-53050":"戛纳 ECR 公开档案",
    "ECR-75106":"墨尔本 ECR 公开档案",
    "ECR-72780":"迈阿密 ECR 公开档案",
    "ECR-52122":"亨厄洛 ECR 公开档案",
    "ECR-49186":"科尔切斯特 ECR 公开档案",
    "ECR-74185":"东京 ECR 公开档案",
    "ECR-57600":"摩纳哥 ECR 公开档案",
    "ECR-98115":"柏林 ECR 公开档案",
    "ECR-107197":"迪拜 ECR 公开档案 107197",
    "ECR-82192":"达拉斯 ECR 公开档案",
    "ECR-91942":"奥勒姆 ECR 公开档案",
    "ECR-101864":"丹维尔 ECR 公开档案",
    "ECR-100373":"预生产 SP3 — Gambara"
  };
  for (const [id,title] of Object.entries(zhTitles)) {
    zhRecords[id] = {...(zhRecords[id]||{}),title};
  }

  const captionEn = new Map([
    ["历史图库照片","Historical gallery image"],
    ["公开车档主图","Public profile hero image"],
    ["公开预览缩略图（低分辨率）","Public preview thumbnail (low resolution)"],
    ["Leclerc 本人与定制车 · 左前侧","Leclerc with his custom car · front-left view"],
    ["车主配置讲解 · 车身全貌","Owner specification walkthrough · full-car view"],
    ["交付展示 · 正前方","Delivery presentation · front view"],
    ["Smooth Operator 定制细节","Smooth Operator personalization detail"],
    ["双车合影：蓝色在左，红色在右；本条目对应红色车","Two-car image: blue on left, red on right; this record is the red car"],
    ["双车合影：蓝色在左，红色在右；本条目对应蓝色车","Two-car image: blue on left, red on right; this record is the blue car"],
    ["原试驾视频封面 · Selected Car Collection 的 Rosso Portofino 车","Original test-drive video cover · Selected Car Collection Rosso Portofino car"]
  ]);

  function localCaption(value, lang) {
    if (!value) return value;
    if (lang !== "en") {
      if (value === "Miller Motorcars 14-car gathering · 599+1 foreground") return "Miller Motorcars 14 车聚会 · 599+1 前景";
      if (value === "Monaco delivery gallery · No. 16 side detail") return "Monaco 交付图库 · 16 号侧面细节";
      if (value === "Monaco delivery gallery · front wheel and stripe detail") return "Monaco 交付图库 · 前轮与条纹细节";
      if (value === "Monaco delivery gallery · rear stripe and exhaust detail") return "Monaco 交付图库 · 后部条纹与排气细节";
      if (value === "Monaco delivery gallery · rear three-quarter") return "Monaco 交付图库 · 后 3/4 视角";
      if (value === "Delivery reveal · Ferrari Scuderia Monte-Carlo") return "交付揭幕 · Ferrari Scuderia Monte-Carlo";
      if (value === "Piero Ferrari office · painting of the white-and-blue 250 LM inspiration") return "Piero Ferrari 办公室 · 白蓝 250 LM 灵感画作";
      if (value === "Joyride Collection arrival · Per Gessle inspecting the Daytona SP3") return "Joyride Collection 到车 · Per Gessle 检查 Daytona SP3";
      if (value === "Milan street sighting · Zlatan Ibrahimović in the freshly delivered matte-white SP3") return "米兰街拍 · Zlatan Ibrahimović 驾驶刚交付的哑光白 SP3";
      return value;
    }
    if (captionEn.has(value)) return captionEn.get(value);
    let m;
    if ((m=value.match(/^拍卖原始图集 · (\d+)$/))) return `Auction gallery · ${m[1]}`;
    if ((m=value.match(/^公开来源图集 · (\d+)$/))) return `Public-source gallery · ${m[1]}`;
    if ((m=value.match(/^经销商原始图集 · (\d+)$/))) return `Dealer gallery · ${m[1]}`;
    if ((m=value.match(/^Ferrari 官方车主专题（含双车合影） · (\d+)$/))) return `Ferrari official owner feature (including both cars) · ${m[1]}`;
    if ((m=value.match(/^三车合影 · (\d+)；本条目对应 (Red|Black|Purple) 车$/))) return `Three-car image · ${m[1]}; this record is the ${m[2].toLowerCase()} car`;
    return value;
  }

  function lang() {
    return (document.documentElement.lang || "zh-CN").toLowerCase().startsWith("en") ? "en" : "zh";
  }

  function common(value, target=lang()) {
    if (value == null || value === "") return value;
    if (target === "zh") return zhCommon[value] ?? zhLocations[value] ?? value;
    return enCommon[value] ?? value;
  }

  function value(record, key, target=lang()) {
    if (!record) return "";
    const overrides = target === "zh" ? zhRecords : enRecords;
    const override = overrides[record.id]?.[key];
    if (override != null) return override;
    if (key === "photo_captions") return (record[key]||[]).map(v=>localCaption(v,target));
    const raw = record[key];
    if (Array.isArray(raw)) return raw.map(v=>common(v,target));
    return common(raw,target);
  }

  function text(valueInput,target=lang()){ return common(valueInput,target); }

  window.SP3Content = {lang,value,text,records:{zh:zhRecords,en:enRecords}};
})();
