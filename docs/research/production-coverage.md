# 原版量产 VIN 覆盖 / Original-production VIN coverage

当前为 **37/599（6.2%）**。这是 Atlas 基于公开证据的分类覆盖，不是 Ferrari 官方配额台账或完整存世数量。33 的旧口径按 edition 文字筛选，现改为逐车明确标记，避免文案变化导致数字漂移。

- 2026-10-23 新发现两条完整 VIN：瑞典车牌 EGY45C／303674（TIC 车型—车牌—VIN 对照）和加拿大 Marianetti 已售车辆 299402（逐车经销商页面）。道路登记及客户经销商记录支持原版量产分类；未取得单车配额序号。
- 已有 Gunston 315825 的独一 Tailor Made 涂装属于配置描述。Automotive Masterpieces 将其列为客户定制道路车；将它归入原版范围是分类修正，**不是第三辆新发现 VIN**。
- 保留此前 33 条已归类记录；其中部分只有公开 VIN／车型或登记证据，配置与照片仍不完整。完整 VIN 确认与原版量产分类是两项不同判断；发生冲突时撤销原版标记。
- 不计入额外 599+1（319682）、研发／示范车、低序列号且身份未决的 272367、VIN 冲突记录、仅索引 VIN，以及尚未明确归类的完整 VIN 记录。
- `production_allocation: "original-599"` 只允许完整且无冲突的确认 VIN，且不能为 prototype。按唯一 VIN 去重计数。没有该字段只代表未纳入本口径，不等于证明该车不属于原版 599 辆。
- 无 VIN 的车牌、经销商配置和名人车档仍有研究价值，但不增加分子。照片不是新增车辆。

The numerator is an explicit editorial cohort, not a factory allocation register. It counts distinct confirmed complete VINs classified as original-production road cars. Unknown allocation, extra-production and prototype records remain excluded. The 33→36 change consists of two newly documented VINs and one correction to an existing record.

2026-10-23 本轮新增 289569：Motor1 所刊原厂窗贴直接显示完整 VIN、车型年及 Ferrari Westlake 交付商，支持美国客户道路车分类。与既有无 VIN 的 Westlake 蓝色配置档关系未确认；该配置档不增加分子。

## 可复核名单

下列来源支持各车档身份；完整字段、来源说明和保留意见以 registry.json 为准。更新原版标记时同步审阅本表。

| Atlas record | Complete VIN | Public sources |
| --- | --- | --- |
| SP3-299827 | ZFF05UMB000299827 | [RM Sotheby's](https://rmsothebys.com/auctions/id25/lots/r0019-2024-ferrari-daytona-sp3/) |
| SP3-297567 | ZFF05UMA0P0297567 | [RM Sotheby's](https://rmsothebys.com/auctions/mo26/lots/v0003-2023-ferrari-daytona-sp3/), [Exclusive Car Registry](https://exclusivecarregistry.com/details/ferrari/daytona-sp3/70568) |
| SP3-286921 | ZFF05UMB000286921 | [Broad Arrow](https://bid.broadarrowauctions.com/lots/view/1-CKL499/2023-ferrari-daytona-sp3), [Ultimatecarpage](https://www.ultimatecarpage.com/chassis/4941/Ferrari-Daytona-SP3-286921.html), [Barchetta](https://barchetta.mediacenter.plus/?i=6381773), [Barchetta](https://barchetta.mediacenter.plus/-/Events-by-Year-Auction-Concours-News-Race-Rally-etc?i=6389008) |
| SP3-PER-GESSLE | ZFF05UMB000284856 | [Per Gessle](https://www.facebook.com/RealPerGessle/posts/the-ferrari-daytona-sp3-has-arrived-to-the-joyride-car-collection-at-hoteltyl%C3%B6sa/792236805601826/), [Per Gessle / @PartyPleaser](https://x.com/PartyPleaser/status/1650812875638751234), [Hotel Tylösand](https://www.tylosand.se/ferrari-exhibition/history-cars-technology), [Carup](https://carup.se/per-gessles-slog-till-pa-ny-super-ferrari-for-22-miljoner-kr/), [Merinfo](https://www.merinfo.se/fordon/80apeBk20b8npDNdlxwb), [Fordonskollen](https://www.fordonskollen.se/fordon/RAF37S), [Carup](https://carup.se/svenska-miljardarer-fick-kopa-likadan-ferrari-som-zlatan-och-gessle/) |
| SP3-CARRIO-BIANCO-ITALIA | ZFF05UMA8P0294531 | [Carrio Motor Cars](https://www.carriomotorcars.com/2023-ferrari-daytona-sp3-fort-lauderdale-fl?isNew=0), [duPont REGISTRY](https://news.dupontregistry.com/blogs/for-sale/230-mile-2023-ferrari-daytona-sp3-for-sale-at-carrior-motor-cars), [VINinspect](https://vininspect.com/es/vin/ferrari/daytona-sp3/2023/zff05uma8p0) |
| SP3-315825-GUNSTON | ZFF05UMB000315825 | [Automotive Masterpieces](https://automotivemasterpieces.com/cars/AU-34679), [Automotive Masterpieces](https://automotivemasterpieces.com/cars/AU-34679/history), [Automotive Masterpieces](https://automotivemasterpieces.com/cars/AU-34679/technical-specifications), [Automotive Masterpieces](https://automotivemasterpieces.com/cars/AU-34679/gallery), [Automotive Masterpieces](https://automotivemasterpieces.com/file/2KDYyGzYVn) |
| SP3-319387-ROSSO-TAORMINA | ZFF05UMB000319387 | [Bernards Exclusives](https://bernardsexclusives.nl/collection/50084521-ferrari-daytona-sp3---tailor-made---rosso-taormina---1-of-599/), [Dutch Ferrari and Lamborghini Register](https://onlybullsandhorses.com/welcome/ferrari/stradali-moderni/monza-daytona/daytona-sp3/) |
| SP3-306496-HENDRICK | ZFF05UMA2R0306496 | [Hendrick Performance](https://www.hendrickcars.com/used/Ferrari/2024-Ferrari-SP3-Daytona-47f672b3ac185c30e41528d4e9c75245.htm), [Made in Maranello](https://made-in-maranello.fr/en/model/ferrari-daytona-sp3), [Enigma Technologies](https://ferrari-imports.enigmatechnologies.dev/), [Enigma Technologies](https://ferrari-imports.enigmatechnologies.dev/assets/index-BliLyrjA.js) |
| SP3-310048-MIAMI | ZFF05UMA9S0310048 | [The Collection Porsche](https://www.thecollectionporsche.com/used/Ferrari/2025-Ferrari-Daytona-SP3-06ab21acac18028b91c6a7b6471fdd75.htm) |
| SP3-289571-VIN-LEAD | ZFF05UMB000289571 | [Dutch Ferrari and Lamborghini Register](https://onlybullsandhorses.com/welcome/ferrari/stradali-moderni/monza-daytona/daytona-sp3/), [Dutch Ferrari and Lamborghini Register](https://onlybullsandhorses.com/welcome/ferrari/stradali-moderni/monza-daytona/daytona-sp3/zff05umb000289571/) |
| SP3-291935-VIN-LEAD | ZFF05UMB000291935 | [Dutch Ferrari and Lamborghini Register](https://onlybullsandhorses.com/welcome/ferrari/stradali-moderni/monza-daytona/daytona-sp3/), [AutoWeek](https://www.autoweek.nl/kentekencheck/JKF-62-L/), [Rapid Rides NL](https://www.rapidrides.nl/2025/11/nieuwe-ferrari-daytona-sp3-op-nederlands-kenteken.html), [Autoblog NL](https://www.autoblog.nl/nieuws/nederlander-scoort-ferrari-daytona-sp3-3522012), [Dutch Ferrari and Lamborghini Register](https://onlybullsandhorses.com/welcome/ferrari/stradali-moderni/monza-daytona/daytona-sp3/zff05umb000291935/) |
| SP3-308288-VIN-LEAD | ZFF05UMB000308288 | [Dutch Ferrari and Lamborghini Register](https://onlybullsandhorses.com/welcome/ferrari/stradali-moderni/monza-daytona/daytona-sp3/), [Dutch Ferrari and Lamborghini Register](https://onlybullsandhorses.com/welcome/ferrari/stradali-moderni/monza-daytona/daytona-sp3/zff05umb000308288/), [Dutch Ferrari and Lamborghini Register](https://onlybullsandhorses.com/wheels-marienwaerdt/) |
| SP3-299394-NL-VIN | ZFF05UMB000299394 | [Dutch Ferrari and Lamborghini Register](https://onlybullsandhorses.com/welcome/ferrari/stradali-moderni/monza-daytona/daytona-sp3/), [Ferrari Tribute 1000 Miglia](https://ferraritribute.1000miglia.it/edizione-2025/), [Anamera](https://www.finecars.cc/en/editorial/article/news/ferrari-tribute-1000-miglia-retracing-one-of-the-greatest-road-races-of-all-time/index.html?tx_ttnews%5BbackPid%5D=301), [AutoWeek](https://www.autoweek.nl/kentekencheck/HJK-99-H/), [Dutch Ferrari and Lamborghini Register](https://onlybullsandhorses.com/welcome/ferrari/stradali-moderni/monza-daytona/daytona-sp3/zff05umb000299394/) |
| SP3-291270-VIN-LEAD | ZFF05UMB000291270 | [Dutch Ferrari and Lamborghini Register](https://onlybullsandhorses.com/welcome/ferrari/stradali-moderni/monza-daytona/daytona-sp3/), [Dutch Ferrari and Lamborghini Register](https://onlybullsandhorses.com/welcome/ferrari/stradali-moderni/monza-daytona/daytona-sp3/zff05umb000291270/) |
| SP3-TIRIAC-316193 | ZFF05UMB000316193 | [Țiriac Collection](https://tiriaccollection.ro/en/collection/cars/ferrari-daytona-sp3), [Țiriac Collection](https://tiriaccollection.ro/noutati/articol/iconicul-exemplar-ferrari-daytona-sp3-devine-cel-mai-nou-exponat-al-galeriei-tiriac-collection), [Țiriac Collection](https://tiriaccollection.ro/en/news/article/peste-50-de-ani-de-istorie-ferrari-ilustrati-prin-21-de-modele-iconice-la-tiriac-collection-cadrul-unui-eveniment-care-adus-spiritul-maranello-inima-uneia-dintre-cele-mai-remarcabile-colectii-auto-private-din-lume) |
| SP3-319132-COTTINGHAM | ZFF05UMB000319132 | [Jeremy Cottingham](https://jeremycottingham.com/stock/2025-ferrari-daytona-sp3/13709), [Octane Marketplace](https://www.octane-magazine.com/cars-for-sale/ferrari-daytona-2025-598966), [Classic Driver](https://www.classicdriver.com/en/car/ferrari/365/2025/1078720) |
| SP3-287827-NESSIM | ZFF05UMB000287827 | [Carup](https://carup.se/svenska-miljardarer-fick-kopa-likadan-ferrari-som-zlatan-och-gessle/), [Merinfo](https://www.merinfo.se/foretag/Nessim-Classics-Aktiebolag-5563284644/2k08hwk-csos/fordon), [TIC](https://tic.io/sv/foretag/nessim-classics-aktiebolag-3440797), [Biluppgifter](https://biluppgifter.se/fordon/mjw01f/), [Exclusive Car Registry](https://exclusivecarregistry.com/collection/nessim-classics) |
| SP3-283997-SVEN-OLOF | ZFF05UMB000283997 | [Merinfo](https://www.merinfo.se/person/Stockholm/Sven-Olof-Johansson-1945/bkwf7-yd8s/fordon), [Merinfo](https://www.merinfo.se/fordon/7peJyVDXyve6gMEv0KXQ), [Carup](https://carup.se/svenska-miljardarer-fick-kopa-likadan-ferrari-som-zlatan-och-gessle/) |
| SP3-291269-GREEN-JEWEL | ZFF05UMB000291269 | [Octane Marketplace](https://www.octane-magazine.com/cars-for-sale/ferrari-daytona-2023-598964), [Jeremy Cottingham](https://jeremycottingham.com/stock/2023-ferrari-daytona-sp3/13707), [Classic Driver](https://www.classicdriver.com/en/car/ferrari/365/2023/1072012) |
| SP3-302261-CLEARVIN | ZFF05UMAXR0302261 | [ClearVIN](https://www.clearvin.com/en/vin-explorer/ferrari/daytona-sp3/2024) |
| SP3-310022-CLEARVIN | ZFF05UMAXR0310022 | [ClearVIN](https://www.clearvin.com/en/vin-explorer/ferrari/daytona-sp3/2024) |
| SP3-307726-CLEARVIN | ZFF05UMA9R0307726 | [ClearVIN](https://www.clearvin.com/en/vin-explorer/ferrari/daytona-sp3/2024) |
| SP3-294637-VIN-LEAD | ZFF05UMT0P0294637 | [VINinspect](https://vininspect.com/ru/vin/ferrari/daytona-sp3) |
| SP3-302262-VIN-LEAD | ZFF05UMTXR0302262 | [VINinspect](https://vininspect.com/ru/vin/ferrari/daytona-sp3) |
| SP3-293331-VIN-LEAD | ZFF05UMA6P0293331 | [VINinspect](https://vininspect.com/ru/vin/ferrari/daytona-sp3), [Volza](https://www.volza.com/p/ferrari/hsn-code-00000000/export-data/exports-from-italy/) |
| SP3-313507-VIN-LEAD | ZFF05UMA8S0313507 | [VINinspect](https://vininspect.com/ru/vin/ferrari/daytona-sp3) |
| SP3-307154-VIN-LEAD | ZFF05UMA1R0307154 | [VINinspect](https://vininspect.com/ru/vin/ferrari/daytona-sp3) |
| SP3-298816-CZ | ZFF05UMB000298816 | [YAUTO.cz](https://yauto.cz/vin/ZFF05UMB000298816/podrobne/) |
| SP3-304109-SWEDEN | ZFF05UMB000304109 | [Merinfo](https://www.merinfo.se/fordon/Eo4LJeklpwrxgAk5Q6y3) |
| SP3-306477-SWEDEN | ZFF05UMB000306477 | [Biluppgifter](https://biluppgifter.se/fordon/MDD02R/) |
| SP3-291934-DRIVE-VINTAGE | ZFF05UMB000291934 | [Drive Vintage](https://drivevintage.ch/car/daytona-sp3/), [Classic Driver](https://www.classicdriver.com/en/article/sponsored-content/its-official-ferrari-daytona-sp3-looks-even-better-real-life) |
| SP3-288789-SHIPMENT | ZFF05UML4P0288789 | [Volza](https://www.volza.com/p/ferrari-or-sildenafil-or-l-phenylalanine/export-data/destination-brazil/) |
| SP3-314846 | ZFF05UMA2S0314846 | [Broad Arrow Auctions](https://www.broadarrowauctions.com/vehicles/lv26_r0073/2025-ferrari-daytona-sp3) |
| SP3-302914 | ZFF05UMA7R0302914 | [Broad Arrow Private Sales](https://www.broadarrowprivatesales.com/vehicles/2600097/2024-ferrari-daytona-sp3) |
| SP3-303674-SWEDEN | ZFF05UMB000303674 | [TIC](https://tic.io/foretag/cars-without-concern-ab-2946050) |
| SP3-299402-MARIANETTI | ZFF05UMA0P0299402 | [Marianetti Motors](https://www.marianettimotors.com/used/vehicle/2023-ferrari-daytona-sp3-id14853362.htm) |

| SP3-289569 | ZFF05UMA8P0289569 | [Motor1 原厂窗贴](https://www.motor1.com/news/677809/ferrari-daytona-sp3-window-sticker/), [Doug DeMuro 评测](https://www.youtube.com/watch?v=xoyPbAz2P8E) |
