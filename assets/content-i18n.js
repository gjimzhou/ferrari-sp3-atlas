/* Display-only translations for registry research data.
 * Canonical research evidence remains in data/registry.json.
 */
(() => {
  const zhCommon = {
    "Unknown":"未公开",
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
    "RM Sotheby's — auction catalogue":"RM Sotheby’s — 拍卖目录",
    "Ferrari — official announcement":"Ferrari — 官方公告",
    "Ferrari — auction result":"Ferrari — 拍卖结果",
    "duPont REGISTRY — public buyer identification":"duPont REGISTRY — 公开买家身份",
    "Țiriac Collection — official vehicle page":"Țiriac Collection — 官方车辆页面",
    "Țiriac Collection — collection announcement":"Țiriac Collection — 收藏馆新增车辆公告",
    "Țiriac Collection — Ferrari anniversary feature":"Țiriac Collection — Ferrari 50 年专题",
    "Jeremy Cottingham — dealer listing":"Jeremy Cottingham — 经销商挂牌",
    "Octane Marketplace — syndicated dealer listing":"Octane Marketplace — 经销商同步挂牌",
    "Classic Driver — syndicated dealer listing":"Classic Driver — 经销商同步挂牌",
    "Goodwood — 2022 Festival of Speed entry list":"Goodwood — 2022 Festival of Speed 官方参赛名单",
    "Goodwood Road & Racing — 2022 supercar debut preview":"Goodwood Road & Racing — 2022 超跑首秀预告",
    "Ultimatecarpage — Goodwood chassis 276831 image record":"Ultimatecarpage — Goodwood 底盘 276831 图片记录",
    "Ferrari Tribute 1000 Miglia — official 2025 edition":"Ferrari Tribute 1000 Miglia — 2025 官方活动页",
    "Anamera — Ferrari Tribute 1000 Miglia entry list":"Anamera — Ferrari Tribute 1000 Miglia 参赛车辆名单",
    "Barchetta — Mille Miglia chassis photo record":"Barchetta — Mille Miglia 底盘实车图片记录",
    "Ferrari — 2025 Cavalcade Siviglia official feature":"Ferrari — 2025 Cavalcade Siviglia 官方专题",
    "Anamera — Ferrari Cavalcade Siviglia entry list":"Anamera — Ferrari Cavalcade Siviglia 参赛车辆名单",
    "RM Sotheby's — Monterey 2026 catalogue":"RM Sotheby’s — Monterey 2026 拍卖目录",
    "Exclusive Car Registry — profile 70568 (deduplicated alias)":"Exclusive Car Registry — 档案 70568（去重别名）",
    "Broad Arrow — auction listing":"Broad Arrow — 拍卖目录",
    "Ultimatecarpage — chassis record":"Ultimatecarpage — 底盘记录",
    "Barchetta — pre-auction chassis photo record":"Barchetta — 拍卖前 chassis-specific 图片记录",
    "Barchetta — auction-result chassis photo record":"Barchetta — 拍卖成交 chassis-specific 图片记录",
    "Ferrari — editorial":"Ferrari — 官方专题",
    "Driven Car Guide — Piero Ferrari feature":"Driven Car Guide — Piero Ferrari 专题",
    "duPont REGISTRY — Ferrari Beverly Hills feature":"duPont REGISTRY — Ferrari Beverly Hills 专题",
    "Ferrari — Seattle friends editorial":"Ferrari — Seattle 好友双车专题",
    "Luxury Pulse — dealer listing summary":"Luxury Pulse — 经销商挂牌摘要",
    "F1rst Motors — dealer’s own article":"F1rst Motors — 经销商自有文章",
    "Instagram — Daytona SP3 Registry community lead":"Instagram — Daytona SP3 Registry 社区线索",
    "duPont REGISTRY — Leclerc delivery and specification":"duPont REGISTRY — Leclerc 交付与配置",
    "Carscoops — Leclerc Ferrari feature":"Carscoops — Leclerc Ferrari 专题",
    "Znews — delivery and detailed specification":"Znews — 交付与详细配置",
    "The Times — Sainz discusses his collection":"The Times — Sainz 谈个人收藏",
    "The Supercar Blog — owner report and image":"The Supercar Blog — 车主报道与原始图片",
    "duPont REGISTRY — David Lee and Jay Leno":"duPont REGISTRY — David Lee 与 Jay Leno",
    "RM Sotheby's — owner identified in editorial":"RM Sotheby’s — 官方专题确认车主",
    "duPont REGISTRY — David Lee collector profile":"duPont REGISTRY — David Lee 收藏家档案",
    "Luxurylaunches — exterior and interior specification":"Luxurylaunches — 外观与内饰配置",
    "The Scottish Sun — delivery timing and public sighting":"The Scottish Sun — 交付时间与公开目击",
    "AS USA — Lisbon sighting and ownership":"AS USA — 里斯本目击与车主关系",
    "talkSPORT — red car and public drive":"talkSPORT — 红色车辆与公开驾驶",
    "Autoevolution — ownership report and photo source":"Autoevolution — 车主报道与图片来源",
    "Autoevolution — Ibrahimović and white SP3":"Autoevolution — Ibrahimović 与白色 SP3",
    "Autogespot — Milan sighting":"Autogespot — 米兰目击",
    "Per Gessle — public announcement":"Per Gessle — 公开公告",
    "Ferrari — Incredible Garages with Per Gessle":"Ferrari — Incredible Garages：Per Gessle 收藏专题",
    "Hotel Tylösand — collection description":"Hotel Tylösand — 收藏说明",
    "The New Yorker — SOC event and owner description":"The New Yorker — SOC 活动与车主描述",
    "Carrio Motor Cars — dealer listing":"Carrio Motor Cars — 经销商挂牌",
    "duPont REGISTRY — dealer listing report":"duPont REGISTRY — 经销商挂牌报道",
    "Stratstone — delivery post":"Stratstone — 交付帖",
    "Wikimedia Commons — file and licensing":"Wikimedia Commons — 文件与许可",
    "Reddit — public sighting thread":"Reddit — 公开目击讨论",
    "Reddit — sighting and colour discussion":"Reddit — 目击与颜色讨论",
    "The Supercar Blog — final Verde Pallido car":"The Supercar Blog — 最后一辆 Verde Pallido",
    "F1rst Motors — final Daytona SP3 report":"F1rst Motors — 最后一辆 Daytona SP3 报道",
    "Agent4stars — @powerslidelover collection profile":"Agent4stars — @powerslidelover 收藏档案",
    "Exclusive Car Registry — public profile":"Exclusive Car Registry 公开档案",
    "DK Engineering — dealer listing":"DK Engineering — 经销商挂牌",
    "duPont REGISTRY — Ferrari of Central New Jersey feature":"duPont REGISTRY — Ferrari of Central New Jersey 专题",
    "Joe Macari — dealer listing":"Joe Macari — 经销商挂牌",
    "Joe Macari — syndicated specification":"Joe Macari — 配置说明转载",
    "duPont REGISTRY — Ferrari Beverly Hills gallery (@paid2shoot)":"duPont REGISTRY — Ferrari Beverly Hills 图集（@paid2shoot）",
    "duPont REGISTRY — Ferrari of Atlanta feature":"duPont REGISTRY — Ferrari of Atlanta 专题",
    "duPont REGISTRY — Ferrari of Central Florida feature":"duPont REGISTRY — Ferrari of Central Florida 专题",
    "duPont REGISTRY — Ferrari Lake Forest two-car feature":"duPont REGISTRY — Ferrari Lake Forest 双车专题",
    "duPont REGISTRY — Miller Motorcars feature":"duPont REGISTRY — Miller Motorcars 专题",
    "duPont REGISTRY — Miller Motorcars gallery (@carsthatlookneat)":"duPont REGISTRY — Miller Motorcars 图集（@carsthatlookneat）",
    "duPont REGISTRY — Ferrari of Fort Lauderdale feature":"duPont REGISTRY — Ferrari of Fort Lauderdale 专题",
    "duPont REGISTRY — Shmee150 collection feature":"duPont REGISTRY — Shmee150 收藏专题",
    "Shmee150 — original collection video":"Shmee150 — 原始收藏视频",
    "duPont REGISTRY — Protective Film Solutions / XPEL feature":"duPont REGISTRY — Protective Film Solutions / XPEL 专题",
    "Automotive Masterpieces — chassis dossier":"Automotive Masterpieces — 底盘档案",
    "Automotive Masterpieces — car history":"Automotive Masterpieces — 车辆历史",
    "Automotive Masterpieces — technical specifications":"Automotive Masterpieces — 技术规格",
    "Automotive Masterpieces — photo gallery":"Automotive Masterpieces — 公开图库",
    "Automotive Masterpieces — declaration AU-34679":"Automotive Masterpieces — AU-34679 声明",
    "Bernards Exclusives — dealer listing":"Bernards Exclusives — 经销商挂牌",
    "Dutch Ferrari and Lamborghini Register — VIN cross-check":"荷兰 Ferrari / Lamborghini Register — VIN 交叉核对",
    "Hendrick Performance — dealer listing":"Hendrick Performance — 经销商挂牌",
    "Made in Maranello — chassis index":"Made in Maranello — 底盘索引",
    "The Collection Porsche — dealer listing":"The Collection Porsche — 经销商挂牌",
    "AMARI Supercars — dealer listing":"AMARI Supercars — 经销商挂牌",
    "Car & Classic — syndicated dealer listing":"Car & Classic — 经销商挂牌转载",
    "Dutch Ferrari and Lamborghini Register — registry entry":"荷兰 Ferrari / Lamborghini Register — registry 条目",
    "duPont REGISTRY — Miller Motorcars 14-car gathering":"duPont REGISTRY — Miller Motorcars 14 车聚会",
    "duPont REGISTRY — Sainz delivery":"duPont REGISTRY — Sainz 交付报道",
    "duPont REGISTRY — Piero Ferrari livery feature":"duPont REGISTRY — Piero Ferrari 涂装专题",
    "Per Gessle / @PartyPleaser — Joyride arrival photo":"Per Gessle / @PartyPleaser — Joyride 到车照片",
    "Carup — Per Gessle Daytona SP3 acquisition":"Carup — Per Gessle Daytona SP3 购车报道",
    "Merinfo — Swedish vehicle record":"Merinfo — 瑞典公开车辆记录",
    "Fordonskollen — Swedish vehicle identity record":"Fordonskollen — 瑞典车辆身份记录",
    "Carup — Swedish Daytona SP3 owners":"Carup — 瑞典 Daytona SP3 车主报道",
    "Merinfo — Nessim Classics vehicle list":"Merinfo — Nessim Classics 公开车辆清单",
    "TIC — Nessim Classics vehicle/VIN table":"TIC — Nessim Classics 车辆 / VIN 表",
    "Biluppgifter — Swedish vehicle record MJW01F":"Biluppgifter — 瑞典车辆记录 MJW01F",
    "Exclusive Car Registry — Nessim Classics collection":"Exclusive Car Registry — Nessim Classics 收藏页面",
    "Autogespot — Milan original sighting":"Autogespot — 米兰原始街拍",
    "Autogespot — Gordon Ramsay London sighting":"Autogespot — Gordon Ramsay 伦敦目击专题",
    "Znews — Gordon Ramsay London photo gallery":"Znews — Gordon Ramsay 伦敦公开图集",
    "Znews — Ibrahimović Milan delivery photo gallery":"Znews — Ibrahimović 米兰交付图集",
    "AutoRef — public VIN search history":"AutoRef — 公开 VIN 搜索记录",
    "Public VIN lead; allocation status not independently verified":"公开 VIN 线索；客户配额身份尚未独立核实",
    "Factory demo; customer-allocation status not established":"工厂 Demo；客户配额归属尚未确定",
    "Public registry VIN lead":"公开 registry VIN 线索",
    "Public showroom sighting / VIN lead":"公开展厅目击／VIN 线索",
    "Factory demo car":"工厂 Demo 车辆",
    "Autoentusiastas — MP3 gallery and technical details":"Autoentusiastas — MP3 图集与技术细节",
    "BusinessDay — collector sale and MP3 identification":"BusinessDay — 收藏家成交与 MP3 身份报道",
    "Collectors Car World — Ferrari report on MP3":"Collectors Car World — Ferrari MP3 专题转载",
    "Ferrari Magazine — Daytona SP3 mulotype":"Ferrari Magazine — Daytona SP3 mulotype 官方专题",
    "Everyeye Auto — Del Vecchio collection profile":"Everyeye Auto — Del Vecchio 收藏档案",
    "LIKE A G — Monaco driving video":"LIKE A G — 摩纳哥公开驾驶视频",
    "Autogespot — Monaco full-black SP3 sighting":"Autogespot — 摩纳哥全黑 SP3 目击",
    "2026-09-21 — Public VIN/chassis source reviewed; retained as a lead pending stronger per-car documentation.":"2026-09-21 — 已复核公开 VIN／底盘来源；在取得更强逐车证据前保留为研究线索。",
    "Exclusive Car Registry — profile 79098":"Exclusive Car Registry — 档案 79098",
    "Ferrari — Leclerc custom-car video":"Ferrari — Leclerc 定制车官方视频",
    "Ferrari Magazine — Steven Victor V12 collector profile":"Ferrari Magazine — Steven Victor V12 收藏专题",
    "TVBS — JJ Lin Daytona SP3 owner photo set":"TVBS — 林俊杰 Daytona SP3 车主图集",
    "Znews — Ronaldo close-up specification gallery":"Znews — Ronaldo 近距离配置图集",
    "duPont REGISTRY — 2026 Steven Victor collection update":"duPont REGISTRY — 2026 Steven Victor 收藏更新",
    "duPont REGISTRY — Steven Victor V12 collection":"duPont REGISTRY — Steven Victor V12 收藏专题",
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
    "Ferrari — Leclerc custom-car video":"Ferrari official video — Leclerc presents his custom car",
    "The Supercar Blog — owner report and image":"The Supercar Blog / original article image",
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
      options:["裸露碳纤维下部车身、硬顶、后视镜与后盖扰流唇","喷绘 Scuderia Ferrari 盾徽","钻石切削锻造轮毂","亮黑色刹车卡钳","大号 Blu Elettrico Alcantara 桶椅","Apple CarPlay","前后泊车摄像头","前轴抬升","黑色四点式安全带","Racing Driver Set：红色皮革背包、旅行袋、两套赛车服及两副手套","碳纤维硬顶及原装收纳袋","原装手册、车罩、工具、充电器及压缩机","Ferrari Classiche Yellow Book"],
      timeline:["2023 年 — 新车交付安道尔。","2023–2026 年 — 首任车主持续实际使用，拍卖编目时里程达到 743 km。","2026 年 5 月 16 日 — 以 253 号 lot 参加 Broad Arrow Villa d’Este 拍卖，估价 €6.5m–€8.5m。","2026 年 5 月 — 以 €6,250,000 成交。"],
      notes:"Broad Arrow 与独立底盘记录公开 VIN ZFF05UMB000286921，并确认 Rosso Magma Tri-Coat / Blu Elettrico 配置、裸露碳纤维部件、喷绘盾徽、亮黑卡钳、lift、前后摄像头、Apple CarPlay 与黑色四点式安全带。首任车主在送拍前累计 743 km；车辆保留 Racing Driver Set、硬顶、手册、车罩、工具、充电器、压缩机及 Ferrari Classiche Yellow Book。拍卖时车辆以 temporary import 方式进入意大利，并随车附有安道尔 Certificat de Matriculació。",
      review_status:"2026-09-21 — 已复核完整 VIN、配置、成交结果、Classiche／注册文件及两条 chassis-specific Barchetta 图片记录。",
      photo_captions:["Broad Arrow 拍卖目录 · Rosso Magma Tri-Coat / Blu Elettrico","拍卖前 chassis-specific 实车图 · Villa d’Este 2026","成交结果 chassis-specific 实车图 · €6,250,000 成交"]
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
      review_status:"2026-09-21 — 来源标签与元数据已标准化；在取得独立 VIN／来源确认前，仍保留为社区研究线索。"
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
      exterior:"Bianco Cervino 珠光白，搭配 Argento Nurburgring 银色赛车条纹与 25 号圆形号码贴",
      interior:"Blu Alcantara，Nero 皮革细节",
      wheels:"银色锻造轮毂",
      options:["25 号赛车圆形号码贴","Argento Nurburgring 复古赛车风格条纹","据报道为手绘 Cavallino 盾徽","碳纤维车顶","Blu Alcantara 座舱，Nero 皮革细节"],
      timeline:["2023 年 6 月 — 据报道交付至 Ferrari Hatfield。","2025 年 2 月 — 在伦敦市中心公开驾驶并被拍摄；Autogespot 将该车明确认作 Ramsay 的 Daytona SP3。","2025 年 4 月 — Znews 发布多角度伦敦图集，记录 Bianco Cervino / Argento Nurburgring / 25 号配置。"],
      notes:"伦敦公开影像持续以 SP03 GRG 车牌、25 号号码贴及 Bianco Cervino / Argento Nurburgring 配置识别同一辆车。Znews 也记录了 Blu Alcantara / Nero 座舱。25 号对 Ramsay 的个人含义尚未被公开确认。",
      review_status:"2026-09-21 — 已重新核验车主关系、伦敦公开目击、Bianco Cervino / Argento Nurburgring 配置及多角度公开图库；VIN 仍未公开。",
      photo_captions:["伦敦公开驾驶 · Bianco Cervino 配置","伦敦图集 · 左前 3/4 · SP03 GRG / 25 号","伦敦图集 · 左后 3/4 · Argento Nurburgring 条纹"]
    },
    "SP3-CRISTIANO-RONALDO":{
      title:"Cristiano Ronaldo — Rosso Magma",
      exterior:"Rosso Magma，黑色车顶",
      wheels:"Matt Grigio Corsa 五辐轮毂",
      status:"车主本人持有／公开驾驶",
      options:["Rosso Magma 外观","黑色车顶","Matt Grigio Corsa 五辐轮毂"],
      timeline:["2024 年 3 月 — 国家队比赛间歇期间，Ronaldo 被拍到驾驶该车抵达里斯本一家酒店。"],
      notes:"车主关系与公开驾驶记录充分。Znews 的里斯本近距离图集明确标注 Rosso Magma 车漆、黑色车顶与 Matt Grigio Corsa 五辐轮毂。VIN、铭牌编号与详细内饰配置仍未公开。",
      review_status:"2026-09-21 — 已复核车主关系、里斯本公开目击及 Rosso Magma／轮毂近距离图集；VIN 仍未公开。",
      photo_captions:["里斯本近距离图集 · 左前 3/4","里斯本近距离图集 · 左后 3/4","里斯本近距离图集 · 正前方","里斯本近距离图集 · 后格栅细节"]
    },
    "SP3-ZLATAN-IBRAHIMOVIC":{
      title:"Zlatan Ibrahimović — 哑光白",
      exterior:"哑光白，搭配对比鲜明的裸露碳纤维",
      wheels:"单色银色锻造轮毂",
      status:"车主本人持有／公开驾驶",
      options:["哑光白外观","裸露碳纤维下部车身","银色轮毂"],
      timeline:["2022 年 10 月 — Ibrahimović 公开预告 Daytona SP3，作为 41 岁生日自购礼物，并同时展示 812 Competizione A。","2023 年 4 月 20 日 — 在米兰公开被拍到驾驶刚交付的该车。","2023 年 4 月 21 日 — Znews 发布米兰图集，可见 Ibrahimović 本人在驾驶席及车牌 KOX26L。","2023 年 9 月 — 再次在社交媒体发布该车。"],
      notes:"这辆哑光白 SP3 在米兰被拍到由 Ibrahimović 本人驾驶，车牌为 KOX26L。公开报道确认车主关系，但精确 Ferrari 哑光白漆号尚未确定；来源只讨论 Bianco Italia Opaco / Bianco Fuji Opaco 等可能选项，并未确认其中之一。该车不应与 Gordon Ramsay 的 Bianco Cervino 25 号混淆。",
      review_status:"2026-09-21 — 已复核 2023 年 4 月米兰交付目击、公开车主报道及可由车牌识别的 Znews 图集；精确哑光白工厂漆号仍未确认。",
      photo_captions:["米兰街拍 · Zlatan Ibrahimović 驾驶刚交付的哑光白 SP3","米兰交付图集 · 正前方 · KOX26L"]
    },
    "SP3-LEONARDO-DEL-VECCHIO":{
      title:"Leonardo Maria Del Vecchio — 全黑 Daytona SP3",
      owner:"Leonardo Maria Del Vecchio",
      exterior:"全黑外观主题，公开影像中可见裸露碳纤维质感",
      wheels:"公开影像可见黑色锻造轮毂",
      status:"车主本人持有／公开驾驶",
      options:["全黑外观主题","黑色锻造轮毂"],
      timeline:["2024 年 6 月 — 意大利汽车媒体将 Daytona SP3 列入 Del Vecchio 的 Ferrari 收藏。","2025 年 8 月 — 摩纳哥公开驾驶视频将全黑 Daytona SP3 与 Del Vecchio 直接关联。","2026 年 2 月 — 一辆全黑 Daytona SP3 在摩纳哥被 Autogespot 公开拍摄。"],
      notes:"车主关系有意大利汽车媒体报道与摩纳哥公开驾驶视频支持。VIN 与详细 build sheet 仍未公开。",
      review_status:"2026-09-21 — 已交叉核验公开车主报道及摩纳哥驾驶／目击来源；VIN 仍未公开。",
      photo_captions:["摩纳哥公开目击 · 全黑 Daytona SP3"]
    },
    "SP3-PER-GESSLE":{
      title:"Per Gessle — Joyride Collection",
      edition:"原始 599 辆量产序列",
      country:"瑞典",
      city:"瑞典 Halmstad · Hotel Tylösand",
      market:"瑞典注册欧洲规格",
      owner:"Per Gessle／Joyride Collection",
      exterior:"红色；精确 Ferrari 工厂漆号尚未公开确认",
      interior:"未公开确认",
      wheels:"车主本人发布的到车照片可见银色五辐轮毂",
      status:"公开持有／Joyride Collection 展示中",
      program:"未公开",
      timeline:["2023 年 1 月 11 日 — 瑞典车辆记录显示 Daytona SP3 车牌 RAF37S 首次注册。","2023 年 3 月 28 日 — 瑞典公开车辆数据记录最新车主变更为 Per Gessle。","2023 年 4 月 4 日 — 瑞典汽车媒体报道 Gessle 新交付的红色 Daytona SP3。","2023 年 4 月 25 日 — Gessle 本人公开发布 Daytona SP3 抵达 Hotel Tylösand 的 Joyride Car Collection。","2023–2026 年 — 作为 Joyride Car Collection 展车。"],
      notes:"本站旧记录曾错误写成白／红配色。车主本人发布的到车影像与瑞典汽车媒体均显示这是一辆红色 Daytona SP3。瑞典公开车辆记录将车牌 RAF37S 识别为红色 2022 Daytona SP3，公开完整 VIN ZFF05UMB000284856，并将登记车辆与 Per Gessle 关联。精确 Ferrari 漆号与座舱内饰仍未确认，因此本站不继续推断。",
      review_status:"2026-09-21 — 已交叉核验车主本人到车照片、红色外观、瑞典车牌 RAF37S 与完整 VIN ZFF05UMB000284856；删除此前错误的白／红配置。",
      photo_captions:["Joyride Collection 到车 · Per Gessle 检查其红色 Daytona SP3"]
    },
    "SP3-287827-NESSIM":{
      title:"Nessim Classics — 黄色 — 底盘 287827",
      edition:"原始 599 辆量产序列",
      country:"瑞典",
      city:"瑞典 Skåne County",
      market:"瑞典注册欧洲规格",
      owner:"Nessim Classics Aktiebolag",
      exterior:"黄色；精确 Ferrari 工厂漆号尚未公开确认",
      interior:"未公开确认",
      wheels:"未公开确认",
      mileage:"2023 年 3 月型式核验记录为 0 km；当前里程未公开",
      status:"瑞典注册 / Nessim Classics 收藏车辆",
      program:"未公开",
      timeline:["2022 年 12 月 — 瑞典车辆数据记录车辆制造。","2023 年 3 月 6 日 — 瑞典车辆记录显示首次注册／型式核验，并记录 0 km。","2023 年 4 月 4 日 — 瑞典公开车辆数据记录 Nessim Classics Aktiebolag 为登记车主。","2023 年 4 月 17 日 — 车辆在瑞典进入道路使用状态。","2023 年 4 月 21 日 — Carup 报道 Nessim Classics 已收到一辆亮黄色 Daytona SP3。"],
      notes:"当前公开公司车辆记录将黄色 Daytona SP3、车牌 MJW01F 列在 Nessim Classics Aktiebolag 名下。公开的瑞典公司车辆 / VIN 表进一步发布完整 VIN ZFF05UMB000287827。Biluppgifter 独立记录 MJW01F 为黄色 2022 Daytona SP3，ECR 的公开收藏页面也列出 Nessim Classics 收藏中的 Daytona SP3；Carup 则明确把该收藏与黄色瑞典 SP3 联系起来。本站将公司记录为车辆 owner，不把公司股东个人替代为登记车主。",
      review_status:"2026-09-21 — 已交叉核验公司持有关系、车牌 MJW01F、黄色外观、2022 model year 与完整 VIN ZFF05UMB000287827。"
    },
    "SP3-DUTCH-SOC-BABY-BLUE":{
      title:"Baby Blue — Supercar Owners Circle",
      owner:"荷兰房地产巨头；来源未公开姓名",
      exterior:"Baby Blue 浅蓝色",
      mileage:"SOC 活动中有实际驾驶记录",
      status:"主流媒体确认私人持有",
      timeline:["2023 年 — 在西班牙南部 Supercar Owners Circle 活动中驾驶。"],
      notes:"《The New Yorker》确认了车主国籍与行业，但有意未公开姓名。",
      review_status:"2026-09-21 — 已重新核验《The New Yorker》的 SOC 报道；来源有意未公开车主姓名，VIN 亦不可得。"
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
      review_status:"2026-09-21 — 已重新核验 Wikimedia 活动照片、日期、颜色描述与许可信息；VIN 与车主仍未公开。",
      photo_captions:["2025 Greenwich Concours · 左前视角"]
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
      review_status:"2026-09-21 — 已重新核验 2026 年 7 月香港公开目击；车辆身份仍未与 VIN 或交付文件建立唯一对应。"
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
      review_status:"2026-09-21 — 已重新核验社区目击讨论；漆色识别仍有争议，VIN／车主仍未确认。"
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
      exterior:"四层深色 VC Orange；哑光黑碳纤维中央脊线；Nero DS / Light Gold Metallic 纵向图形；White King 外框的 83 号号码圆标",
      interior:"黑色 Alcantara 座舱；Super Electric Blue Alcantara REVO 7305 座椅与四点式安全带；黑色 Super Fabric Trilobato 800701-835 地板",
      wheels:"哑光 Light Gold Metallic FYM 0357 合金轮毂",
      calipers:"碳陶瓷刹车搭配合金卡钳；来源未注明卡钳颜色",
      mileage:"2025 年 4 月注册；Automotive Masterpieces 档案称车辆从未使用",
      status:"私人收藏；2025 年 4 月注册；公开档案称从未使用",
      sale:"未公开出售",
      program:"Ferrari Tailor Made 定制",
      options:["四层深色 VC Orange 车漆","贯穿全车的哑光黑碳纤维中央脊线","Nero DS / Light Gold Metallic 纵向图形","四个带 White King 外框的 83 号号码圆标","哑光 Light Gold Metallic FYM 0357 合金轮毂","黑色 Alcantara 仪表台、中控通道与侧面板","Super Electric Blue Alcantara REVO 7305 赛车座椅","同色 Super Electric Blue 四点式安全带及软垫","黑色 Super Fabric Trilobato 800701-835 地板与灭火器罩","Blue 1078 座舱缝线；地毯与灭火器使用 Black 4000 缝线","专属哑光碳纤维 DEDI 铭牌，刻有 0858 / Paul Hawkins / Team Gunston 致敬文字","Customization package 与 Racing Driver Set"],
      timeline:["2025 年 3 月 26 日 — 在 Ferrari Atelier 及 Maranello Ferrari 工厂展示。","2025 年 4 月 — 车辆注册；后续 Automotive Masterpieces 档案称其从未使用。","2025 年 8 月 5 日 — Automotive Masterpieces 增加独立现状图库。","2025 年 8 月 8 日 — 发布 AU-34679 声明，并将该车归类为 one-off model。","2025 年 9 月 5 日 — 档案记录 RINA RAM-31 认证，用于历史研究与 provenance 验证。"],
      notes:"Automotive Masterpieces 公开完整 VIN 及详细 Tailor Made 档案，确认该一次性定制直接致敬 1968 Rhodesian Grand Prix 中 Team Gunston 涂装的 Ferrari 350 Can-Am / 330 P4 底盘 0858。档案明确记录四层 VC Orange、Nero DS / Light Gold Metallic 图形、83 号号码圆标、哑光浅金轮毂、蓝色 Alcantara 赛车座椅以及专属 0858 / Paul Hawkins / Team Gunston 铭牌。该车与后来的 599+1 慈善 Daytona SP3 是不同实车。",
      review_status:"2026-09-21 — 已复核 Automotive Masterpieces 的完整 VIN、精确 Tailor Made 色彩／内饰代码、注册状态、provenance 文件及三组公开图库。"
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
      market:"美国经销商挂牌",
      mileage:"公开经销商页面正文未注明",
      status:"Hendrick Performance 公开挂牌",
      sale:"请询价 — Hendrick Performance",
      timeline:["2026 年 — Hendrick Performance 在北卡罗来纳州 Concord 公开挂牌这辆二手 2024 Daytona SP3，公布 VIN ZFF05UMA2R0306496 与库存号 H607086。","2026 年 — Made in Maranello 独立底盘索引以相同完整 VIN 记录 serial 306496。"],
      notes:"Hendrick Performance 公开挂牌将该车列为位于北卡罗来纳州 Concord 的二手 2024 Ferrari SP3 Daytona，并公布 VIN ZFF05UMA2R0306496 与库存号 H607086。Made in Maranello 独立列出同一 VIN 与底盘号。可访问的经销商正文没有公布详细外观／内饰 build sheet，因此本站不根据通用经销商图片推断配色。",
      review_status:"2026-09-21 — 已交叉核对经销商 VIN、库存号 H607086 与独立底盘索引；不推断未获来源支持的 build colours。"
    },
    "SP3-310048-MIAMI":{
      title:"White / Black — The Collection Miami",
      city:"佛罗里达州迈阿密",
      market:"美国经销商挂牌",
      mileage:"挂牌时 164 miles",
      status:"The Collection Porsche 历史经销商挂牌",
      sale:"询价 — The Collection Porsche",
      timeline:["2026 年 — The Collection Porsche 公开挂牌将该车列为二手 2025 Daytona SP3，公布 VIN ZFF05UMA9S0310048、库存号 S0310048P 与 164 miles 里程。","2026 年 — 经销商页面注明白色外观、黑色内饰及询价状态。"],
      notes:"The Collection Porsche 挂牌公开完整 VIN、库存号 S0310048P、白色外观、黑色内饰及 164 miles 里程。可访问页面只暴露一张经销商图片，因此本站不虚构更大的图库，也不从通用颜色标签推断精确 Ferrari 漆色／内饰代码。",
      review_status:"2026-09-21 — 已重新核验 The Collection Porsche 挂牌中的 VIN、库存号 S0310048P、配色与 164 miles 里程；不再使用无关库存页面作为 VIN cross-check。"
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
      title:"Grigio / 黑色条纹 — 底盘 299394",
      edition:"原始量产 Daytona SP3；公开 VIN 与活动底盘均有独立记录",
      country:"荷兰",
      city:"荷兰 / 2025 Ferrari Tribute 1000 Miglia",
      market:"欧洲规格",
      owner:"未公开；2025 Ferrari Tribute 参赛 crew 为 Alexander Tesink / Wouter De Voogt",
      exterior:"Grigio / 灰色车身，黑色中央条纹",
      interior:"Nero 黑色内饰",
      status:"已注册道路车辆 / 2025 Ferrari Tribute 1000 Miglia 参赛车",
      timeline:["2025 年 3 月 21 日 — 荷兰 registry 开始记录 VIN ZFF05UMB000299394 使用车牌 HJK-99-H。","2025 年 6 月 17–21 日 — 以 627 号参加 Ferrari Tribute 1000 Miglia；活动名单记录底盘 299394、灰色车身配黑色条纹，crew 为 Alexander Tesink / Wouter De Voogt。"],
      notes:"荷兰 Ferrari / Lamborghini Registry 公开完整 VIN、Grigio / Nero 配置及荷兰注册记录。独立发布的 Ferrari Tribute 1000 Miglia 参赛车辆名单将底盘 299394 标为 627 号，并记录灰色／黑条纹外观与活动 crew。crew 姓名仅作为赛事元数据保留，不据此推断法律意义上的车辆所有权。",
      review_status:"2026-09-21 — 已交叉核验完整 VIN／注册信息与独立的 chassis-specific Ferrari Tribute 参赛记录；由 VIN lead 升级为详细车档。"
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
    },
    "SP3-MP3-MULOTYPE":{
      title:"MP3 Mulotype — Daytona SP3 开发车",
      owner:"未公开姓名的私人收藏家",
      chassis:"MP3 开发编号；未公开道路车 VIN",
      market:"工厂开发车辆",
      exterior:"Ferrari 翻新后的哑光黑；采用改装 LaFerrari Aperta 车身",
      interior:"开发车座舱，保留红色紧急断电控制",
      wheels:"黑色五辐轮毂",
      status:"由 Ferrari Special Sales 售予私人收藏家",
      sale:"私人交易；金额未公开",
      program:"Ferrari Special Sales／开发原型车",
      options:["Daytona SP3 自然吸气 V12 动力总成","改装 LaFerrari Aperta 车身","带紧急断电控制的 MP3 开发中控","中央双出原型排气与 LaFerrari 四出排气同时保留"],
      timeline:["开发阶段 — MP3 是 Daytona SP3 第二阶段 mulotype 中的第三辆，用于系统集成。","测试结束后 — Ferrari 测试部门移除黑白伪装，并以哑光黑翻新，同时保留原型车硬件。","2025 年 — Ferrari Special Sales 公开记录该车转售给一位同时拥有量产 Daytona SP3 的私人收藏家。"],
      notes:"这是工厂开发车辆，不属于 599 辆客户车。现有公开证据不能证明 MP3 与 ECR-100373 是同一辆，因此本站暂时分列。",
      review_status:"2026-09-21 — 已交叉核验 Ferrari 衍生资料与独立媒体；MP3 不计入 599 辆客户车。",
      photo_captions:["Ferrari 翻新后的 MP3 · 哑光黑改装 LaFerrari 车身","MP3 开发中控 · 紧急断电控制","MP3 轮毂与刹车细节","后 3/4 视角 · 原型排气布局"]
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

  Object.assign(zhRecords, {
    "SP3-305029-CAVALCADE":{
      title:"黑色 / 黄色条纹 — 底盘 305029",
      edition:"Cavalcade Siviglia 底盘线索；客户配额身份未独立确认",
      country:"斯洛伐克",
      city:"2025 Ferrari Cavalcade Siviglia 活动",
      owner:"未公开",
      exterior:"黑色车身，黄色中央条纹",
      status:"2025 Ferrari Cavalcade Siviglia 活动车辆线索",
      timeline:["2025 年 — Ferrari Cavalcade Siviglia 参赛车辆名单记录 Daytona SP3 底盘 305029，黑色车身，黄色中央条纹，国家元数据为斯洛伐克。"],
      notes:"公开的 Cavalcade Siviglia 参赛车辆名单明确记录 Daytona SP3 底盘 305029 及其外观配置；Ferrari 官方活动专题确认 2025 Cavalcade 的活动背景。本站不根据活动名单推断完整 VIN 或私人车主身份。",
      review_status:"2026-09-21 — 已核对公开 Cavalcade Siviglia 参赛车辆名单中的底盘与外观配置；在取得独立逐车来源前保留为 event-backed lead。"
    },
    "SP3-304375-CAVALCADE":{
      title:"浅蓝色 — 底盘 304375",
      edition:"Cavalcade Siviglia 底盘线索；客户配额身份未独立确认",
      country:"比利时",
      city:"2025 Ferrari Cavalcade Siviglia 活动",
      owner:"未公开",
      exterior:"浅蓝色车身",
      status:"2025 Ferrari Cavalcade Siviglia 活动车辆线索",
      timeline:["2025 年 — Ferrari Cavalcade Siviglia 参赛车辆名单记录 Daytona SP3 底盘 304375，浅蓝色车身，国家元数据为比利时。"],
      notes:"公开的 Cavalcade Siviglia 参赛车辆名单明确记录 Daytona SP3 底盘 304375 及其外观配置；Ferrari 官方活动专题确认 2025 Cavalcade 的活动背景。本站不根据活动名单推断完整 VIN 或私人车主身份。",
      review_status:"2026-09-21 — 已核对公开 Cavalcade Siviglia 参赛车辆名单中的底盘与外观配置；在取得独立逐车来源前保留为 event-backed lead。"
    },
    "SP3-296011-CAVALCADE":{
      title:"深绿色 / 白红条纹 — 底盘 296011",
      edition:"Cavalcade Siviglia 底盘线索；客户配额身份未独立确认",
      country:"比利时",
      city:"2025 Ferrari Cavalcade Siviglia 活动",
      owner:"未公开",
      exterior:"深绿色车身，白红条纹",
      status:"2025 Ferrari Cavalcade Siviglia 活动车辆线索",
      timeline:["2025 年 — Ferrari Cavalcade Siviglia 参赛车辆名单记录 Daytona SP3 底盘 296011，深绿色车身，白红条纹，国家元数据为比利时。"],
      notes:"公开的 Cavalcade Siviglia 参赛车辆名单明确记录 Daytona SP3 底盘 296011 及其外观配置；Ferrari 官方活动专题确认 2025 Cavalcade 的活动背景。本站不根据活动名单推断完整 VIN 或私人车主身份。",
      review_status:"2026-09-21 — 已核对公开 Cavalcade Siviglia 参赛车辆名单中的底盘与外观配置；在取得独立逐车来源前保留为 event-backed lead。"
    },
    "SP3-281882-CAVALCADE":{
      title:"黄色 / 红色条纹 — 底盘 281882",
      edition:"Cavalcade Siviglia 底盘线索；客户配额身份未独立确认",
      country:"比利时",
      city:"2025 Ferrari Cavalcade Siviglia 活动",
      owner:"未公开",
      exterior:"黄色车身，红色条纹",
      status:"2025 Ferrari Cavalcade Siviglia 活动车辆线索",
      timeline:["2025 年 — Ferrari Cavalcade Siviglia 参赛车辆名单记录 Daytona SP3 底盘 281882，黄色车身，红色条纹，国家元数据为比利时。"],
      notes:"公开的 Cavalcade Siviglia 参赛车辆名单明确记录 Daytona SP3 底盘 281882 及其外观配置；Ferrari 官方活动专题确认 2025 Cavalcade 的活动背景。本站不根据活动名单推断完整 VIN 或私人车主身份。",
      review_status:"2026-09-21 — 已核对公开 Cavalcade Siviglia 参赛车辆名单中的底盘与外观配置；在取得独立逐车来源前保留为 event-backed lead。"
    },
    "SP3-304679-CAVALCADE":{
      title:"绿色 / 白色条纹 — 底盘 304679",
      edition:"Cavalcade Siviglia 底盘线索；客户配额身份未独立确认",
      country:"德国",
      city:"2025 Ferrari Cavalcade Siviglia 活动",
      owner:"未公开",
      exterior:"绿色车身，白色条纹",
      status:"2025 Ferrari Cavalcade Siviglia 活动车辆线索",
      timeline:["2025 年 — Ferrari Cavalcade Siviglia 参赛车辆名单记录 Daytona SP3 底盘 304679，绿色车身，白色条纹，国家元数据为德国。"],
      notes:"公开的 Cavalcade Siviglia 参赛车辆名单明确记录 Daytona SP3 底盘 304679 及其外观配置；Ferrari 官方活动专题确认 2025 Cavalcade 的活动背景。本站不根据活动名单推断完整 VIN 或私人车主身份。",
      review_status:"2026-09-21 — 已核对公开 Cavalcade Siviglia 参赛车辆名单中的底盘与外观配置；在取得独立逐车来源前保留为 event-backed lead。"
    },
    "SP3-319368-CAVALCADE":{
      title:"深红色 — 底盘 319368",
      edition:"Cavalcade Siviglia 底盘线索；客户配额身份未独立确认",
      country:"德国",
      city:"2025 Ferrari Cavalcade Siviglia 活动",
      owner:"未公开",
      exterior:"深红色车身",
      status:"2025 Ferrari Cavalcade Siviglia 活动车辆线索",
      timeline:["2025 年 — Ferrari Cavalcade Siviglia 参赛车辆名单记录 Daytona SP3 底盘 319368，深红色车身，国家元数据为德国。"],
      notes:"公开的 Cavalcade Siviglia 参赛车辆名单明确记录 Daytona SP3 底盘 319368 及其外观配置；Ferrari 官方活动专题确认 2025 Cavalcade 的活动背景。本站不根据活动名单推断完整 VIN 或私人车主身份。",
      review_status:"2026-09-21 — 已核对公开 Cavalcade Siviglia 参赛车辆名单中的底盘与外观配置；在取得独立逐车来源前保留为 event-backed lead。"
    },
    "SP3-287825-CAVALCADE":{
      title:"绿色 / 黑色条纹 — 底盘 287825",
      edition:"Cavalcade Siviglia 底盘线索；客户配额身份未独立确认",
      country:"丹麦",
      city:"2025 Ferrari Cavalcade Siviglia 活动",
      owner:"未公开",
      exterior:"绿色车身，黑色条纹",
      status:"2025 Ferrari Cavalcade Siviglia 活动车辆线索",
      timeline:["2025 年 — Ferrari Cavalcade Siviglia 参赛车辆名单记录 Daytona SP3 底盘 287825，绿色车身，黑色条纹，国家元数据为丹麦。"],
      notes:"公开的 Cavalcade Siviglia 参赛车辆名单明确记录 Daytona SP3 底盘 287825 及其外观配置；Ferrari 官方活动专题确认 2025 Cavalcade 的活动背景。本站不根据活动名单推断完整 VIN 或私人车主身份。",
      review_status:"2026-09-21 — 已核对公开 Cavalcade Siviglia 参赛车辆名单中的底盘与外观配置；在取得独立逐车来源前保留为 event-backed lead。"
    },
    "SP3-314849-CAVALCADE":{
      title:"深红色 — 英国参赛记录 — 底盘 314849",
      edition:"Cavalcade Siviglia 底盘线索；客户配额身份未独立确认",
      country:"英国",
      city:"2025 Ferrari Cavalcade Siviglia 活动",
      owner:"未公开",
      exterior:"深红色车身",
      status:"2025 Ferrari Cavalcade Siviglia 活动车辆线索",
      timeline:["2025 年 — Ferrari Cavalcade Siviglia 参赛车辆名单记录 Daytona SP3 底盘 314849，深红色车身，国家元数据为英国。"],
      notes:"公开的 Cavalcade Siviglia 参赛车辆名单明确记录 Daytona SP3 底盘 314849 及其外观配置；Ferrari 官方活动专题确认 2025 Cavalcade 的活动背景。本站不根据活动名单推断完整 VIN 或私人车主身份。",
      review_status:"2026-09-21 — 已核对公开 Cavalcade Siviglia 参赛车辆名单中的底盘与外观配置；在取得独立逐车来源前保留为 event-backed lead。"
    },
    "SP3-285951-CAVALCADE":{
      title:"深红色 / 黑色车顶 — 底盘 285951",
      edition:"Cavalcade Siviglia 底盘线索；客户配额身份未独立确认",
      country:"英国",
      city:"2025 Ferrari Cavalcade Siviglia 活动",
      owner:"未公开",
      exterior:"深红色车身，黑色车顶",
      status:"2025 Ferrari Cavalcade Siviglia 活动车辆线索",
      timeline:["2025 年 — Ferrari Cavalcade Siviglia 参赛车辆名单记录 Daytona SP3 底盘 285951，深红色车身，黑色车顶，国家元数据为英国。"],
      notes:"公开的 Cavalcade Siviglia 参赛车辆名单明确记录 Daytona SP3 底盘 285951 及其外观配置；Ferrari 官方活动专题确认 2025 Cavalcade 的活动背景。本站不根据活动名单推断完整 VIN 或私人车主身份。",
      review_status:"2026-09-21 — 已核对公开 Cavalcade Siviglia 参赛车辆名单中的底盘与外观配置；在取得独立逐车来源前保留为 event-backed lead。"
    },
    "SP3-312255-CAVALCADE":{
      title:"哑光银 / 黑色车顶 — 底盘 312255",
      edition:"Cavalcade Siviglia 底盘线索；客户配额身份未独立确认",
      country:"意大利",
      city:"2025 Ferrari Cavalcade Siviglia 活动",
      owner:"未公开",
      exterior:"哑光银色车身，黑色车顶",
      status:"2025 Ferrari Cavalcade Siviglia 活动车辆线索",
      timeline:["2025 年 — Ferrari Cavalcade Siviglia 参赛车辆名单记录 Daytona SP3 底盘 312255，哑光银色车身，黑色车顶，国家元数据为意大利。"],
      notes:"公开的 Cavalcade Siviglia 参赛车辆名单明确记录 Daytona SP3 底盘 312255 及其外观配置；Ferrari 官方活动专题确认 2025 Cavalcade 的活动背景。本站不根据活动名单推断完整 VIN 或私人车主身份。",
      review_status:"2026-09-21 — 已核对公开 Cavalcade Siviglia 参赛车辆名单中的底盘与外观配置；在取得独立逐车来源前保留为 event-backed lead。"
    },
    "SP3-291931-CAVALCADE":{
      title:"波尔多红 / 黑色车顶 — 底盘 291931",
      edition:"Cavalcade Siviglia 底盘线索；客户配额身份未独立确认",
      country:"阿塞拜疆",
      city:"2025 Ferrari Cavalcade Siviglia 活动",
      owner:"未公开",
      exterior:"波尔多红车身，黑色车顶",
      status:"2025 Ferrari Cavalcade Siviglia 活动车辆线索",
      timeline:["2025 年 — Ferrari Cavalcade Siviglia 参赛车辆名单记录 Daytona SP3 底盘 291931，波尔多红车身，黑色车顶，国家元数据为阿塞拜疆。"],
      notes:"公开的 Cavalcade Siviglia 参赛车辆名单明确记录 Daytona SP3 底盘 291931 及其外观配置；Ferrari 官方活动专题确认 2025 Cavalcade 的活动背景。本站不根据活动名单推断完整 VIN 或私人车主身份。",
      review_status:"2026-09-21 — 已核对公开 Cavalcade Siviglia 参赛车辆名单中的底盘与外观配置；在取得独立逐车来源前保留为 event-backed lead。"
    },
    "SP3-304114-CAVALCADE":{
      title:"紫绿碳纤维 / 银色条纹 — 底盘 304114",
      edition:"Cavalcade Siviglia 底盘线索；客户配额身份未独立确认",
      country:"韩国",
      city:"2025 Ferrari Cavalcade Siviglia 活动",
      owner:"未公开",
      exterior:"紫绿碳纤维车身，银色条纹",
      status:"2025 Ferrari Cavalcade Siviglia 活动车辆线索",
      timeline:["2025 年 — Ferrari Cavalcade Siviglia 参赛车辆名单记录 Daytona SP3 底盘 304114，紫绿碳纤维车身，银色条纹，国家元数据为韩国。"],
      notes:"公开的 Cavalcade Siviglia 参赛车辆名单明确记录 Daytona SP3 底盘 304114 及其外观配置；Ferrari 官方活动专题确认 2025 Cavalcade 的活动背景。本站不根据活动名单推断完整 VIN 或私人车主身份。",
      review_status:"2026-09-21 — 已核对公开 Cavalcade Siviglia 参赛车辆名单中的底盘与外观配置；在取得独立逐车来源前保留为 event-backed lead。"
    },
    "SP3-311579-CAVALCADE":{
      title:"紫色 / 白色条纹 — 底盘 311579",
      edition:"Cavalcade Siviglia 底盘线索；客户配额身份未独立确认",
      country:"日本",
      city:"2025 Ferrari Cavalcade Siviglia 活动",
      owner:"未公开",
      exterior:"紫色车身，白色条纹",
      status:"2025 Ferrari Cavalcade Siviglia 活动车辆线索",
      timeline:["2025 年 — Ferrari Cavalcade Siviglia 参赛车辆名单记录 Daytona SP3 底盘 311579，紫色车身，白色条纹，国家元数据为日本。"],
      notes:"公开的 Cavalcade Siviglia 参赛车辆名单明确记录 Daytona SP3 底盘 311579 及其外观配置；Ferrari 官方活动专题确认 2025 Cavalcade 的活动背景。本站不根据活动名单推断完整 VIN 或私人车主身份。",
      review_status:"2026-09-21 — 已核对公开 Cavalcade Siviglia 参赛车辆名单中的底盘与外观配置；在取得独立逐车来源前保留为 event-backed lead。"
    },
    "SP3-302913-CAVALCADE":{
      title:"全裸露碳纤维 — 底盘 302913",
      edition:"Cavalcade Siviglia 底盘线索；客户配额身份未独立确认",
      country:"澳大利亚",
      city:"2025 Ferrari Cavalcade Siviglia 活动",
      owner:"未公开",
      exterior:"全车裸露碳纤维",
      status:"2025 Ferrari Cavalcade Siviglia 活动车辆线索",
      timeline:["2025 年 — Ferrari Cavalcade Siviglia 参赛车辆名单记录 Daytona SP3 底盘 302913，全车裸露碳纤维，国家元数据为澳大利亚。"],
      notes:"公开的 Cavalcade Siviglia 参赛车辆名单明确记录 Daytona SP3 底盘 302913 及其外观配置；Ferrari 官方活动专题确认 2025 Cavalcade 的活动背景。本站不根据活动名单推断完整 VIN 或私人车主身份。",
      review_status:"2026-09-21 — 已核对公开 Cavalcade Siviglia 参赛车辆名单中的底盘与外观配置；在取得独立逐车来源前保留为 event-backed lead。"
    }
  });

  Object.assign(enRecords, {
    "ECR-77928":{
      notes:"ECR publicly lists model year 2024, Rosso Magma exterior, Rosso Alcantara with Bianco stitching, LHD and clean-title status."
    },
    "ECR-78501":{
      notes:"ECR publicly lists the car as a 2024 Blu Le Mans over Rosso Alcantara. Its page labels the transmission 'Manual', which conflicts with the Daytona SP3's seven-speed DCT; the Atlas treats that field as an ECR data error rather than a unique mechanical specification."
    },
    "ECR-85856":{
      notes:"ECR publicly lists model year 2024, Celeste Metallizzato, Nero Alcantara with Bianco stitching, automatic transmission, and LHD."
    },
    "ECR-100373":{
      notes:"ECR labels this profile as a 2022 pre-production Daytona SP3. It should not automatically be counted among the 599 customer allocations; the Atlas keeps it as a separate research/test-vehicle record."
    },
    "ECR-101218":{
      notes:"The ECR profile links to a F1rst Motors sale page whose URL identifies the car as silver. Exact paint and interior codes remain unavailable."
    },
    "ECR-127142":{
      notes:"Search-visible ECR metadata identifies a black exterior and an Old Westbury, New York location."
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
      notes:`ECR 公开档案；仅使用公开可见的地点、图片与档案字段。`,
      review_status:"2026-09-21 — 已复核公开页面与预览照片；旧版精确配置未重新验证，登录后字段未读取。"
    };
    enRecords[id] = {
      ...(enRecords[id]||{}),
      notes:`Only the public location and profile identity are reproduced. Login-gated VIN, plaque, ownership, and build fields are not copied.`,
      review_status:"2026-09-21 — Public page and preview images rechecked; legacy exact specification was not revalidated and login-gated fields were not accessed."
    };
  }

  Object.assign(zhRecords, {
    "ECR-77928":{
      notes:"ECR 公开列出：2024 model year、Rosso Magma 外观、Rosso Alcantara 搭配 Bianco 缝线、左舵及 clean-title 状态。",
      review_status:"2026-09-21 — 已复核公开页面与预览照片；旧版精确配置未重新验证，登录后字段未读取。"
    },
    "ECR-78501":{
      notes:"ECR 将该车公开列为 2024 Blu Le Mans／Rosso Alcantara。页面将变速箱标注为“Manual”，与 Daytona SP3 的七速 DCT 不符；本站将其视为 ECR 数据错误，而不是独特机械规格。",
      review_status:"2026-09-21 — 已复核公开页面与预览照片；旧版精确配置未重新验证，登录后字段未读取。"
    },
    "ECR-85856":{
      notes:"ECR 公开列出：2024 model year、Celeste Metallizzato、Nero Alcantara 搭配 Bianco 缝线、自动变速箱及左舵。",
      review_status:"2026-09-21 — 已复核公开页面与预览照片；旧版精确配置未重新验证，登录后字段未读取。"
    },
    "ECR-100373":{
      notes:"ECR 将该档案标记为 2022 年预生产 Daytona SP3。不应自动计入 599 辆客户配额，因此本站将其作为独立研发／测试车辆记录保留。",
      review_status:"2026-09-21 — 已复核公开页面与预览照片；旧版精确配置未重新验证，登录后字段未读取。"
    },
    "ECR-101218":{
      title:"迪拜银色 — 经销商关联档案",
      exterior:"银色（来自经销商 URL 描述；精确 Ferrari 漆名未公开）",
      notes:"ECR 档案链接至 F1rst Motors 销售页，其 URL 将车辆描述为银色。精确漆色与内饰代码仍不可得。",
      review_status:"2026-09-21 — 已复核公开页面与预览照片；旧版精确配置未重新验证，登录后字段未读取。"
    },
    "ECR-127142":{
      title:"黑色 SP3 — Old Westbury",
      exterior:"黑色",
      notes:"ECR 搜索可见元数据标识黑色外观及纽约州 Old Westbury 地点。",
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

  Object.assign(zhRecords, {
    "SP3-319132-COTTINGHAM":{
      title:"Bianco King / Blu Elettrico — 底盘 319132",
      country:"英国",
      city:"伦敦，英国",
      market:"英国交付；左舵",
      exterior:"Bianco King 双层 Extra-Range 白色车漆，搭配 Blu Elettrico 涂装与 Rosso Corsa 外缘",
      interior:"Blu Elettrico 6479 Alcantara，搭配 Rosso 0504 特殊缝线",
      wheels:"钻石切削锻造轮毂",
      mileage:"经销商挂牌时 88 英里",
      status:"已由 Jeremy Cottingham 售出",
      sale:"价格未公开 — 挂牌页标记为 SOLD",
      program:"Extra-Range / 定制配置",
      options:["Extra-Range Bianco King 特殊双层车漆","Blu Elettrico 涂装，Rosso Corsa 外缘","气刷 Scuderia Ferrari 盾徽","碳纤维硬顶","碳纤维车身下部与后盖唇边","前轴升降","前后泊车摄像头","Apple CarPlay","黑色四点式安全带","Racing Driver Set","大号座垫 / L32 靠背","铝制方向盘饰件","带卡片的 SVR 防盗系统"],
      timeline:["2025 年 — 英国交付车辆，注册号 LJ25 VJC；经销商及同步挂牌页面公开完整 VIN ZFF05UMB000319132。","截至 2026 年 9 月 — Jeremy Cottingham 公开库存页显示 88 英里，并将车辆标记为 SOLD。"],
      notes:"Jeremy Cottingham 经销商页面公开完整 VIN、88 英里里程和详细个性化配置单。Octane Marketplace 与 Classic Driver 的同步挂牌再次列出相同底盘、里程与配置。来源正文对部分 Ferrari 色名存在“Blu Electrico” / “Blu Eletrico”等拼写差异；Atlas 统一显示为 Blu Elettrico，同时保留公开的 6479 与 605116 内饰／涂装代码。",
      review_status:"2026-09-21 — 已交叉核验完整 VIN、里程、配置单及 12 张公开经销商图库。",
      photo_captions:["Bianco King / Blu Elettrico · 安装硬顶的左前 3/4","左前 3/4 · 拆下车顶面板","左前 3/4 · 开放座舱与 Blu Elettrico 内饰","正前方 · Blu Elettrico 中央涂装与 Rosso Corsa 外缘","正后方 · 碳纤维车身下部","正后方 · 双门开启","侧面 · 拆下车顶面板","侧面 · 驾驶侧车门开启","侧面 · 安装硬顶","后 3/4 · 涂装延续至车尾","俯视 · 开放座舱与四点式安全带","俯视 · 安装硬顶"]
    },
    "SP3-276831-GOODWOOD":{
      title:"Goodwood 2022 — 底盘 276831",
      edition:"公开活动底盘；客户配额身份尚未确认",
      country:"英国",
      city:"Goodwood，West Sussex",
      market:"英国公开活动 / Festival of Speed",
      owner:"未公开；Ferrari North Europe Ltd 为 Goodwood 参展方",
      exterior:"黄色；精确 Ferrari 漆号尚未确认",
      status:"2022 Goodwood Festival of Speed 公开活动车辆",
      timeline:["2022 年 6 月 — Goodwood 官方 Festival of Speed 参赛名单记录一辆 2022 Ferrari Daytona SP3，编号 618，参展方为 Ferrari North Europe Ltd。","2022 年 6 月 — Ultimatecarpage 的 Goodwood 图片记录将照片中的 Daytona SP3 标识为底盘 276831。"],
      notes:"Goodwood 官方活动资料确认 2022 Supercar Run 中存在一辆 Daytona SP3；Ultimatecarpage 的现场图片进一步将照片中的车辆标识为底盘 276831。现有来源并不能确认客户配额身份、完整 VIN 或私人车主，因此 Ferrari North Europe Ltd 仅记录为 Goodwood 参展方，而非车主。",
      review_status:"2026-09-21 — 已用 2022 Goodwood 图片记录核对底盘身份；Goodwood 官方参赛名单确认活动车辆与参展方。",
      photo_captions:["2022 Goodwood Festival of Speed · 底盘 276831"]
    },
    "SP3-281883-MILLE-MIGLIA":{
      title:"哑光白 / 银色条纹 — 底盘 281883",
      edition:"公开活动底盘；客户配额身份未独立确认",
      country:"意大利",
      city:"2025 Ferrari Tribute 1000 Miglia（意大利）",
      owner:"未公开；2025 活动 crew 为 Luigi Telefri / Giorgio Mombelli",
      exterior:"哑光白色车身，银色中央条纹",
      interior:"活动照片可见红色内饰；精确工厂内饰代码未公开",
      wheels:"深色五辐锻造轮毂",
      status:"2025 Ferrari Tribute 1000 Miglia 参赛车",
      options:["哑光白色车身","银色中央条纹","活动中拍摄到开放式车顶配置"],
      timeline:["2025 年 6 月 17–21 日 — 以 626 号参加 Ferrari Tribute 1000 Miglia；名单记录底盘 281883、哑光白配银色条纹，crew 为 Luigi Telefri / Giorgio Mombelli。","2025 年 6 月 17 日 — Olivier Bidaud 在活动路线拍摄底盘 281883；Barchetta 图片档案公开 chassis-specific 图片元数据。"],
      notes:"Ferrari Tribute 参赛车辆名单记录底盘 281883、哑光白／银条纹配置与活动 crew。Barchetta 独立发布 2025 年 6 月 17 日的 chassis-specific 实车照片与元数据。crew 仅作为活动信息保留；本站不推断完整 VIN 或私人车主身份。",
      review_status:"2026-09-21 — 已用 Ferrari Tribute 参赛车辆名单与 Barchetta chassis-specific 图片记录交叉核验底盘、活动编号、crew 与配置。",
      photo_captions:["Ferrari Tribute 1000 Miglia 2025 · 626 号 · 底盘 281883"]
    },
    "SP3-320749-MILLE-MIGLIA":{
      title:"哑光灰 / 三色条纹 — 底盘 320749",
      edition:"公开活动底盘；客户配额身份未独立确认",
      country:"荷兰",
      city:"2025 Ferrari Tribute 1000 Miglia / Cavalcade Siviglia 活动记录",
      owner:"未公开；2025 Ferrari Tribute 参赛 crew 为 Michael de Ruijter / Gerben Van de Weerd",
      exterior:"哑光灰；Ferrari Tribute 记录为银-黑-银中央条纹，Cavalcade 名单描述为白色条纹",
      wheels:"深色五辐锻造轮毂",
      calipers:"黄色",
      status:"2025 Ferrari Tribute 1000 Miglia 与 Ferrari Cavalcade Siviglia 参赛车",
      options:["哑光灰色车身","中央条纹涂装","活动照片可见黄色刹车卡钳"],
      timeline:["2025 年 5 月 — Ferrari Cavalcade Siviglia 名单列出 Daytona SP3 底盘 320749，哑光灰配白色条纹，国家元数据为荷兰。","2025 年 6 月 17–21 日 — 以 628 号参加 Ferrari Tribute 1000 Miglia；名单记录底盘 320749、哑光灰配银-黑-银条纹，crew 为 Michael de Ruijter / Gerben Van de Weerd。","2025 年 6 月 17 日 — Olivier Bidaud 在活动路线拍摄底盘 320749；Barchetta 发布 chassis-specific 图片元数据。"],
      notes:"底盘 320749 出现在 2025 年两个独立 Ferrari 车主活动：Cavalcade Siviglia 与 Ferrari Tribute 1000 Miglia。Tribute 参赛车辆名单与 Barchetta 图片记录均确认底盘 320749 及活动 crew；两个活动名单对条纹颜色描述略有不同，因此本站保留两种来源描述而不擅自选择其一。本站不推断完整 VIN 或私人车主身份。",
      review_status:"2026-09-21 — 已在两个 2025 Ferrari 活动及 Barchetta chassis-specific 图片记录中交叉核验底盘身份。",
      photo_captions:["Ferrari Tribute 1000 Miglia 2025 · 628 号 · 底盘 320749"]
    },
    "SP3-TIRIAC-316193":{
      title:"Ion Țiriac / Țiriac Collection — 红色 / 米色",
      country:"罗马尼亚",
      city:"Otopeni，罗马尼亚",
      owner:"Ion Țiriac / Țiriac Collection 收藏",
      exterior:"红色金属漆；公开收藏页面未注明精确 Ferrari 漆号",
      interior:"Crema / 浅米色内饰，搭配黑色碳纤维座舱部件",
      wheels:"五辐锻造轮毂，钻石切削表面",
      status:"公开展出的收藏车辆",
      options:["Crema / 浅米色座舱","碳纤维座舱与车身下部部件","在 Țiriac Collection 公开展出"],
      timeline:["2025 年 4 月 17 日 — Țiriac Collection 宣布 Daytona SP3 成为收藏馆最新入藏车辆。","2025 年 4 月 18–19 日 — 该车在 Țiriac Collection 首次向公众展出。","2025 年 5 月 16 日 — SP3 成为收藏馆 Ferrari 50 年主题展的重点车辆；Ion Țiriac 称其为自己最新购入的 Ferrari。"],
      notes:"Țiriac Collection 官方车辆页面公开完整 VIN ZFF05UMB000316193，并将其标注为 2025 Daytona SP3。收藏馆公告及后续 Ferrari 主题展专题均直接将该车与 Ion Țiriac 的私人收藏关联。公开图片可确认红色车身与浅米色座舱，但页面未公布精确工厂漆色与内饰代码。",
      review_status:"2026-09-21 — 已交叉核验收藏馆官方车辆页面、VIN、收藏关系与公开图库。",
      photo_captions:["Ion Țiriac 与 Daytona SP3 · Țiriac Collection"]
    },
    "SP3-STEVEN-VICTOR":{
      title:"Steven Victor — 银色 / 蓝色",
      city:"美国 — 公开收藏专题",
      owner:"Steven Victor",
      exterior:"银色金属漆；精确 Ferrari 漆号未公开",
      interior:"Ferrari 官方／公开收藏影像中可见蓝色内饰",
      wheels:"深色五辐锻造轮毂",
      status:"车主本人持有／有公开资料确认",
      options:["银色外观搭配蓝色座舱","属于 Victor 公开记录的 Ferrari V12 收藏"],
      timeline:["2024 年 9 月 — Ferrari Magazine 专访 Steven Victor，并明确指出其六辆 V12 Ferrari 中包括 Daytona SP3。","2026 年 8 月 — duPont REGISTRY 再次将 Daytona SP3 列入 Victor 的 Ferrari 收藏。"],
      notes:"Ferrari 官方杂志直接确认 Steven Victor 持有一辆 Daytona SP3。公开收藏照片显示该车为银色外观、蓝色座舱，但精确工厂漆号与内饰代码未公布。本站不推定 VIN 或铭牌编号。",
      review_status:"2026-09-21 — 已交叉核验 Ferrari 官方车主关系与公开收藏影像；VIN 与精确工厂颜色仍未公开。",
      photo_captions:["Victor V12 收藏合影 · 银色车阵中可见 Daytona SP3","Steven Victor 与其银色 Daytona SP3","Steven Victor 收藏合影 · 银色 Icona 车辆"]
    },
    "SP3-JJ-LIN":{
      title:"林俊杰 JJ Lin — 白色 / 蓝色",
      country:"台湾",
      city:"台北，台湾",
      owner:"林俊杰（JJ Lin）",
      exterior:"白色车身，双蓝色中央条纹，亮黑色下部空气动力学部件",
      interior:"公开车主照片中可见亮蓝色内饰",
      wheels:"黑色五辐轮毂",
      status:"车主本人持有／公开驾驶",
      options:["双蓝色中央条纹","亮黑色下部空气动力学处理","亮蓝色座舱"],
      timeline:["2025 年 11 月 — 林俊杰公开发布与 Daytona SP3 的照片组；台湾汽车媒体报道该车为其新购藏品。","2026 年 — ECR 公开档案 79098 将该 Daytona SP3 标注为新加坡歌手 JJ Lin 所有，并将公开档案地点标注为台北。"],
      notes:"车主关系由林俊杰公开社媒照片组（经 TVBS 报道）及 ECR 公开档案 79098 共同支持。白色／蓝色配置有清晰影像记录。VIN、铭牌编号与精确工厂漆色／内饰代码仍未公开；ECR-79098 作为同一实车的来源别名处理，不重复计作另一辆 SP3。",
      review_status:"2026-09-21 — 已交叉核验公开车主影像与 ECR 车主标注；VIN 与铭牌编号仍未公开。",
      photo_captions:["林俊杰与白色／蓝色 Daytona SP3","林俊杰照片组中的蓝色座舱细节","正前方 · 双蓝色中央条纹","蓝色内饰细节与 V12 发动机盖"]
    }
  });

  Object.assign(enRecords, {
    "SP3-JJ-LIN":{owner:"JJ Lin"}
  });

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
