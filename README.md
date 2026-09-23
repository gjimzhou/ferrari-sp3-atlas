# Ferrari Daytona SP3 公开资料库（SP3 Atlas）

[中文网站](https://gjimzhou.github.io/ferrari-sp3-atlas/?lang=zh) · [English site](https://gjimzhou.github.io/ferrari-sp3-atlas/?lang=en)

网站支持中文／English 即时切换，并记住本地语言偏好。双语内容采用独立展示层：`data/registry.json` 继续保存 canonical research data，翻译不会改写原始研究字段、来源措辞或证据。

本站整理 Daytona SP3 的公开配置、具名车主／收藏关系、拍卖结果与来源档案。不是 Ferrari 官方名册，也不宣称掌握完整 599 辆客户车的 VIN 台账。

## 当前覆盖（2026-09-22）

- **139 条有来源的研究记录**：66 个详细车档、71 条待核对线索、2 辆预生产／研发车。近期更新补入 2025 Ferrari Tribute 1000 Miglia、Cavalcade Siviglia，以及 2022–2024 Goodwood、2023 Finali Mondiali、2024–2025 Sport & Collection、2025 Hampton Court，以及 2026 Cavallino Classic 的 chassis-specific 活动记录，同时继续将单源 VIN／活动记录与多源详细车档分层。
- **503 个 ECR 公开档案索引**：由公开车型搜索 21 页结果去重所得，保存链接、缩略图引用和国家旗标。没有复制登录后字段。
- **507 条图库图片引用，覆盖 81 条记录**：新增 Rosso Taormina 10 张 Bernards 原图、AMARI dealer 图与 Miller 14-car gathering 现场图；合影和外部预览仍不等同于独立高清实车数量。
- **42 个已确认完整公开 VIN + 1 条来源冲突 VIN lead**：构建时验证格式及唯一性；source-conflict VIN 不计入首页确认 VIN KPI。只有证据较强的 VIN 进入 detailed profiles，其余保持 lead。
- 已复核 RM Sotheby’s 底盘 **297567：USD 17,825,000**、**299827：CHF 5,348,750** 的公布成交结果。
- Leclerc、Sainz、Ramsay、Ronaldo、Ibrahimović、Piero Ferrari、David Lee、Swizz Beatz、Selected Car Collection 等已有档案可搜索。历史收藏关系不代表当前持有人。

**121 与 503 不能相加为实车总数。** 不同来源可能指向同一辆车；未匹配 VIN 的网页编号只代表研究记录。历史条目尚未全量重新核验，在详情页保留核对状态。旧版数百条空白总体占位不再出现在新版数据中。

## 文件结构（Structure）

| 文件 | 用途 |
| --- | --- |
| `index.html` | GitHub Pages 首页 |
| `data/registry.json` | 可编辑的逐车研究数据；来源使用稳定 source ID |
| `data/sources.json` | 逐车引用的规范化 source catalog |
| `data/source-index.json` | ECR 公开来源索引快照 |
| `assets/js/app.js` / `core.js` / `media.js` | 页面编排、纯数据工具与图库 helper |
| `assets/style.css` | 页面样式 |
| `assets/i18n.js` | UI 文案、语言状态、可分享的 `?lang=` 链接 |
| `assets/content-i18n.js` | 轻量翻译 loader；逐车翻译数据存于 `data/i18n/*.json` |
| `assets/photos/` | 历史版本继承的图片；版权归原权利人 |
| `scripts/validate.py` | 数据契约、VIN、来源、媒体与页面计数验证 |
| `scripts/audit_links.py` | 手动检查 canonical source link health；区分反爬与真实 404/410 |
| `data/schema/registry.schema.json` | Registry 数据契约；新增字段先进入 schema |
| `docs/DATA_MODEL.md` | 数据模型、证据层级与演进规则 |
| `docs/PUBLIC_SOURCES.md` | 来源目录与研究规则 |
| `docs/RESEARCH_LOG.md` | 本轮更新、去重边界与后续工作 |

## 本地运行与更新（Development）

使用 Python 3；不需要 npm 构建或外部 API key。

```bash
python3 scripts/validate.py
python3 -m http.server 8000
```

打开 `http://localhost:8000`。编辑 JSON 后运行验证并提交 canonical JSON。浏览器直接读取 `data/*.json`，不再提交重复生成的数据 bundle。GitHub Pages 由 `main` 分支通过 Actions 部署。

## 数据原则（Research rules）

1. VIN／底盘、来源 ID、生产编号分别存储，不互相替代。
2. 同车再次出售时补充原车档；只有颜色相同不足以合并或判定不同实车。
3. 挂牌、估价、公布成交结果分开记录；不自行推断落槌价或佣金口径。
4. 国家是公开来源中的地点／旗标，不等于首次交付配额、车主国籍或居住地。
5. 不以网页完成度或编辑排序权重作为事实正确概率。
6. 不收集非公开车主身份、住宅地址、联系方式或私人行踪。

页面直接读取 canonical `data/*.json`。新增或修改研究记录应先通过 schema、来源、媒体、VIN、链接与双语覆盖验证；搜索同时覆盖 canonical 原文和当前语言的展示译文。

## 图片（Images）

新增图片使用公开来源的外部链接，并保留摄影／发布方信息和来源页。外部链接可能失效；图片失效时仍可打开来源。来源公开不等于开放版权许可，本站不授予这些图片的再使用权。
