# 研究更新记录（Research log）

## 2026-09-21

### 已完成

- 对比线上旧快照与历史 v3：分别有 29、48 条非占位记录；恢复 v3 中遗漏的 19 条。
- 将 Gambara 预生产车（ECR-100373）从客户生产口径中分离，修正其 edition 字段。
- 保留历史上 ECR-70568 与底盘 297567 的合并结果，不新建重复车档。
- 新增 DK Engineering 2400 的 Bianco Italia / Blu Tour de France / Giallo Modena 配置、325 英里刊登里程、保养及延保说明。
- 新增 Ferrari of Central New Jersey 2023 年 Blu Laguna / Bianco King 展示车及 2025 年深紫色 Tailor Made 交付车。未给紫色车辆猜测精确漆名或车主姓名。
- 复核 RM Sotheby’s 297567 与 299827 的公布成交结果，明确币种和来源。
- 从 ECR 公开搜索的 21 个结果页整理 503 个不重复来源 ID。只读取页面公开字段；不请求登录后字段。
- 移除旧版的总体占位记录；拆分可编辑数据、页面代码、样式及图片。
- 取消未经校准的“资料置信度百分比”，保留证据类别。

- 图库共 132 张照片引用：Leclerc 5、Sainz 5、599+1 21、Rosso Deborah 32、297567 47、DK 14；其余历史图库保留。
- 添加逐张来源、摄影署名、原图链接、缩略图导航及触摸滑动。RM 图片来自对应 lot 的图库，未混入相关推荐。
- 完成数据构建检查、JavaScript 语法检查与 DOM 功能验证（搜索、分页、图库、导入校验、本地覆盖合并、损坏数据回退）。

### 口径与限制

- 503 个来源 ID 是 2026-09-21 的网页快照；不代表已经独立核对的 503 个 VIN。
- 索引缩略图不当作颜色、车主或配置的证据；照片版权不随链接而转移。
- 继承的 v3 信息保留历史来源，但不假装本轮已重新核验全部内容。
- @powerslidelover 的旧记录中年份与交付叙述不一致，清空未经支持的 model year；“最后一辆客户车”仍标明为来源报道而非厂方生产编号。
- 预生产车、社区线索及匿名 registry 档案不冒充已核实的客户车辆。

### 后续研究

1. 优先用拍卖行和经销商的公开 VIN 将来源索引关联到逐车车档。
2. 逐个复核历史 ECR 配置；资料已经转为登录可见的字段保持历史来源标记，不绕过限制。
3. 补充公开收藏机构及车主自述，避免转抄缺乏直接依据的名人榜。
4. 用不同角度和内饰细节扩充现有图库，逐张保存来源与归属；不因照片外观相似认定同车。

## 2026-09-21 · 第二轮扩充

### 新增与图库

- 新增 14 条研究记录：13 个详细车档、1 条有照片的活动线索。总计 65 条（37 个详细车档、27 条线索、1 辆预生产车）。
- 新增车档包括 Swizz Beatz、Selected Car Collection、Joe Macari Rosso Libano、Beverly Hills 黑白配置、Atlanta 白红配置、Central Florida Rosso Corsa、Lake Forest 红／蓝两车、Miller Motorcars 蓝碳及红／黑／紫三车、PFS Rosso Formula 1 2007。
- 369 条图库图片引用，覆盖 58 条记录；按完整 URL 去重为 358 个图片链接。合影可同时归入画面内不同车辆的档案，不能把引用数当作不同照片数。
- 补上 24 条已有 ECR 档案的公开首屏图片：共 25 张主图和 95 张公开缩略图，总计 120 条引用；其中 95 条明确标注低分辨率预览，没有猜测或请求登录后完整图集。
- BP Green 18 张、Joe Macari 29 张、Beverly Hills Rame 7 张、黑白配置 8 张、Carrio 7 张、Stratstone 5 张、Seattle 两车各 4 张（含合影）。保留逐张来源和发布／摄影方署名。
- 首页显示图片引用总数及有图记录数，车辆卡片显示图库张数，新增 Swizz Beatz 和 Miller Motorcars 快速搜索。

### 本轮去重与证据边界

- F1rst Motors 铝银色挂牌已发现 17 张图片，但可能与已有 ECR-101218 对应。缺少直接唯一标识，不新增一条看似独立的银色车辆，也不擅自将两套照片并入同车。
- Dania Pointe 白车仅保留活动线索；不能确认是否与 Carrio 或其他白车重叠。
- Lake Forest 两车、Miller 三车依据同一画面中同时出现的不同车辆拆分记录，并在每张合影说明条目对应哪辆车。
- Miller 淡紫碳纤维车的 2025 年原文明确未确认精确漆名；不因 2026 年活动出现 Transitional Ametista 就倒填该名称，也不与已收录的 Rubino 或新泽西紫车混同。
- Swizz Beatz 的内饰在原文中仅是推测，保留未确认；不抄录文章错误的 6.2L 排量。
- Shmee150 是试驾者；公开视频说明对应 Selected Car Collection。图库标记为原视频封面。
- PFS 条目使用赞助施工案例，明确来源性质，不采纳广告中的保值主张。
- 现有 ECR 精确配置仍保留历史核对边界；本轮公开预览检查不等于已核实所有登录后字段。

### 第二轮验证

- 226 个本轮新增的不重复图片 URL 全部返回可识别的图片数据；对代表性车档、Seattle 逐车归属及 Miller 三车合影完成视觉检查。
- 构建验证通过：65 个不重复记录 ID、4 个不重复完整 VIN、503 个来源索引；图库来源、说明及署名数组长度一致。
- DOM 功能检查通过：37 个详细车档、369 条图片引用、新车主搜索、29 图图库切换、分页、导入及本地覆盖合并。JavaScript 语法和 diff 格式检查通过。
- Ronaldo 与 Ibrahimović 的部分公开页面或图片返回验证页／403；Per Gessle 的官方收藏文字页没有可明确归属的配图，本轮未用未经确认的图片填补这些档案。


## 2026-09-21 · 第三轮：VIN / dealer / 去重扩充

### 新增硬身份车档

- 新增 6 条研究记录，数据库由 65 条增至 71 条；完整公开 VIN 由 4 个增至 9 个。
- **ZFF05UMB000315825 / chassis 315825**：Team Gunston No. 83 Tailor Made。Automotive Masterpieces 公开完整 VIN、技术规格、历史时间线及 AU-34679 声明；涂装致敬 1968 年 Team Gunston Ferrari 350 Can-Am / 330 P4 chassis 0858。
- **ZFF05UMB000319387 / chassis 319387**：Rosso Taormina / Rosso FX。Bernards Exclusives 当前页面标记 Sold；荷兰 Ferrari / Lamborghini Register 独立提供 VIN、配色与 2025 年挂牌记录。新增 10 张 Bernards 原始图库照片。
- **ZFF05UMA2R0306496 / chassis 306496**：Hendrick Performance 公开二手挂牌提供完整 VIN；Made in Maranello 底盘索引独立列出同一 VIN。
- **ZFF05UMA9S0310048 / chassis 310048**：The Collection Miami 白／黑车辆；历史 dealer listing 记录 164 miles 与完整 VIN，另一份 The Collection 库存页抓取可交叉确认。
- **ZFF05UMB000277497 / chassis 277497**：两个公开 chassis index 均列出 VIN；荷兰 registry 将其标记为 Ferrari factory demo。因来源未说明客户配额归属，本站不自动将其计入 599 辆客户分配。
- 新增 **AMARI Rosso Magma / Alcantara Blu Elettrico** dealer record：2026 注册、一任车主、20 km，AMARI 当前标记 Sold；无 VIN，故不是“已确认 chassis”记录。

### 已有记录补强

- 599+1 / chassis 319682 新增 2026 年 3 月 Miller Motorcars Greenwich 14-car Daytona SP3 gathering 时间线、来源与现场图。公开报道明确将 Exposed Carbon / Giallo Modena 的 600th car 标为聚会 centerpiece。
- 图库引用由 369 条增至 381 条。新增图片均保留逐张来源与署名。

### 去重与未合并决定

- 对本轮 5 个新增 VIN 做 exact-VIN + ECR 公开搜索，没有找到可公开确认的 ECR alias；因此不创建猜测性的 ECR 对应。
- AMARI Rosso Magma / Blu Elettrico **不与 chassis 286921 合并**：AMARI 记录为 2026 注册、20 km；286921 已知 2023 年交付，2026 年拍卖编目时 743 km。没有 VIN 之前把二者视为同车证据不足。
- Miller 14-car gathering 中出现的 Transitional Ametista、Rosso Magma、Blu Lucido Carbon、Wine Red Carbon、Aluminio Opaco、Rosso Fuoco、Nero DS、Bianco Italia Opaca、Giallo Modena、Bianco Mille Miglia、Rosso Maranello 等车辆，仅凭颜色不足以和本站匿名／dealer 车档合并。
- Dutch register 还公开了 277498、277499、289571、291935、308288、299394、291270 等 VIN；Made in Maranello 另有 288783、291272、292660、310023、317185。当前缺少足够第二来源或逐车细节，暂作为下一轮 chassis leads，不为了抬高数字直接升级为详细车档。
- Leonardo Maria Del Vecchio 等名人 SP3 线索目前主要来自 spotter / video / secondary mentions；在可访问的强来源不足时继续留在候选，不进入具名车主列表。

### 本轮口径

- “VIN 已公开”只表示来源公开完整 17 位 VIN；不等于车主身份、交付国家、当前所在地或客户 allocation number 都已确定。
- dealer listing 的里程、在售状态和价格只代表来源抓取／刊登时点。历史 listing 不被写成当前库存。
- 继续执行“证据强度优先于条目数量”：完整 VIN + dealer/auction/independent chassis cross-check 优先；颜色、地点和相似配置不能单独作为 merge key。


### VIN lead 扩展

- 在 detailed profiles 之外新增 12 条完整 VIN lead；总记录增至 83 条，完整公开 VIN 增至 21 个。
- Dutch Ferrari / Lamborghini Register 单源 VIN：277498、277499、289571、291935、308288、299394、291270。除公开配色／登记／展厅备注外，不推断车主和精确 Tailor Made 色名。
- Made in Maranello chassis-index lead：288783、291272、292660、310023、317185；其中 292660 另有 AutoRef 公开 VIN 搜索记录交叉支持。
- 277498 / 277499 与 277497 一样被 registry 标记为 factory demo，但没有与 277497 同等级的第二来源，因此保持 lead。
- 这 12 条均为 `record_kind: lead`，不会进入默认“详细车档”视图；完整 VIN 的公开性与车档完整度分开表达。


## 2026-09-22 · Cross-model source-conflict quarantine

- **VIN ZFF05UMB000317185 / serial 317185** is currently listed by Made in Maranello on both its Daytona SP3 chassis index and its 296 Speciale chassis index.
- Because both claims originate from the same publisher and directly contradict one another at model level, neither listing is treated as independent corroboration of the other.
- The Atlas retains the record only as a quarantined `record_kind: lead`, lowers its research priority, and does not upgrade it to a detailed Daytona SP3 profile without a second per-car source.
- New rule: a VIN/chassis entry that is internally cross-listed by one publisher under incompatible models must be treated as source contamination until resolved by an independent source; repeated pages or language variants from the same publisher do not count as separate confirmation.


## 2026-09-23 · VIN cross-check upgrades

- **Chassis 294531**: Carrio Motor Cars' 230-mile Bianco Italia / Rosso Ferrari profile is now linked to complete VIN **ZFF05UMA8P0294531** using an independent VINinspect historical-sale entry that also reports 230 miles.
- **Chassis 312263**: Palm Beach Cavallino Classic event lead is now linked to complete VIN **ZFF05UMA1S0312263**.
- **Chassis 316681**: Palm Beach Cavallino Classic No. 23 event lead is now linked to complete VIN **ZFF05UMA6S0316681**.
- **Chassis 286921**: added structured `market_events[]` for the published **€6,250,000** Broad Arrow Villa d'Este 2026 result.
- VIN-index sources are used only to establish the published 17-character identity; they do not imply owner, location, title condition, or configuration beyond separately sourced evidence.


## 2026-09-23 · Public VIN and shipment lead expansion

- Added complete-VIN leads **ZFF05UMAXR0302261 / chassis 302261**, **ZFF05UMAXR0310022 / chassis 310022**, and **ZFF05UMA9R0307726 / chassis 307726** from ClearVIN's public 2024 Daytona SP3 VIN index.
- Added US-bound shipment chassis leads **294106** and **293330** from a public 1 October 2023 Genoa-to-Newark manifest that explicitly lists two Ferrari Daytona SP3s.
- ClearVIN leads remain `record_kind: lead`: a public VIN/model match is not treated as evidence for configuration, ownership, delivery location, title status, or sale history.
- Shipment leads retain chassis-only identity: no 17-character VIN is reconstructed or guessed from a six-digit serial.


## 2026-09-23 · VINinspect identity-lead expansion

- Added low-level complete-VIN leads for chassis **294637**, **302262**, **293331**, **313507**, and **307154**.
- VINs: **ZFF05UMT0P0294637**, **ZFF05UMTXR0302262**, **ZFF05UMA6P0293331**, **ZFF05UMA8S0313507**, and **ZFF05UMA1R0307154**.
- VINinspect's year-specific pages visibly repeat some Daytona SP3 VINs across year headings. The Atlas therefore derives model year only from the VIN's 10th-character year code and treats the web page as model-identity evidence, not as authoritative delivery-year metadata.
- These entries remain `record_kind: lead`; no owner, colour, specification, country, title condition, or sale event is inferred.


## 2026-09-23 · DK Engineering dossier normalization

- Re-normalized **SP3-DK-2400** to English canonical research fields with Chinese kept in the display overlay.
- Current DK Engineering listing rechecked: **325 miles**, fresh **September 2026 Ferrari service by Meridien Modena**, Ferrari Classiche Yellow Book, and a recent **two-year Ferrari factory warranty extension**.
- No VIN is published on the accessible listing, so the car remains a dealer profile without a guessed VIN/ECR merge.


## 2026-09-23 · Cavalcade 2026 incident lead

- Added a standalone incident lead for an **exposed-carbon-heavy Daytona SP3 reportedly involved in a collision during Ferrari Cavalcade 2026**.
- The source reports severe rain/hail conditions and no injuries, but publishes no VIN/chassis/registration or owner identity.
- No merge is made with chassis 302913, 308288, or any other exposed-carbon record solely from visual similarity.


## 2026-09-23 · Czech VIN record and Austrian dealer inventory

- Added **ZFF05UMB000298816 / chassis 298816** as a government-data-backed registration lead. Czech Ministry-derived public records show a red 2023 Daytona SP3 first registered in Prague on 19 December 2023 and deregistered for export on 15 December 2025.
- Added **Scuderia Gohm inventory SG0028** as a detailed dealer profile: 2024 Daytona SP3, Nero with Giallo stripe, 4,796 km, Ferrari Approved, Tailor Made, €7,499,000 net asking price. mobile.de independently shows the same dealer/mileage at €8,998,800 including 20% VAT.
- Added 10 representative images from the listing's 44-photo public gallery. No VIN is published for SG0028, so no chassis/ECR merge is inferred.


## 2026-09-23 · Czech and Swedish registration expansion

- Added Czech Ministry-derived VIN lead **ZFF05UMB000272367 / serial 272367**, red, first registered in Prague on 26 June 2025. Because its low serial predates known factory-demo serials and no Ferrari allocation source is available, customer-allocation status is deliberately left unresolved.
- Added Swedish Transport Agency-derived VIN lead **ZFF05UMB000304109 / plate JPP42H**, red 2024 car, foreign first registration 23 May 2024 and Swedish registration 21 January 2025. Private-holder name is not reproduced in the Atlas.
- Added Swedish plate-backed lead **JHC00R**, red 2024 Daytona SP3 in a public company vehicle list; VIN remains unavailable.
- Deepened **ZFF05UMB000299394 / HJK-99-H** with AutoWeek/RDW registration facts. The Dutch registry's 21 March 2025 plate-start date and RDW's 28 March first-registration date are both retained rather than force-reconciled.


## 2026-09-23 · Swedish MDD02R VIN lead

- Added **ZFF05UMB000306477 / plate MDD02R**, a green 2024 Daytona SP3, from public Swedish vehicle records.
- Public timeline: first registration **28 August 2024**, Swedish traffic entry **31 August 2024**, latest holder change **11 November 2025**, two registered holders total, and in-traffic status in the latest public history.
- Private holder identities are intentionally not reproduced; no exact Ferrari paint or interior code is inferred from the generic green colour field.


## 2026-09-23 · Dealer-source refresh and Berlin carbon lead

- Refreshed **ZFF05UMB000319132** to Jeremy Cottingham's current dealer URL and recorded public UK registration **LJ25VJC**; 88-mile SOLD status and detailed personalization remain unchanged.
- Added a low-level Berlin market lead for a **2024 Full Carbon Fibre / Carbon Gloss Daytona SP3** offered off-market through Ana LUX / Dyler.
- The Berlin listing publishes no VIN/chassis/mileage/registration. Its promotional image is not used as documentary car photography, and no merge is attempted with other exposed-carbon SP3s.
