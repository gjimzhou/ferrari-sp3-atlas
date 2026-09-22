# Ferrari Daytona SP3 公开资料库（SP3 Atlas）

[中文网站](https://gjimzhou.github.io/ferrari-sp3-atlas/?lang=zh) · [English site](https://gjimzhou.github.io/ferrari-sp3-atlas/?lang=en)

网站支持中文／English 即时切换，并记住本地语言偏好。双语内容采用独立展示层：`data/registry.json` 继续保存 canonical research data，翻译不会改写原始研究字段、来源措辞或证据。

本站整理 Daytona SP3 的公开配置、具名车主／收藏关系、拍卖结果与来源档案。不是 Ferrari 官方名册，也不宣称掌握完整 599 辆客户车的 VIN 台账。

## 当前覆盖（2026-09-21）

- **65 条有来源的研究记录**：37 个详细车档、27 条待核对线索、1 辆预生产车。本轮新增 14 条，详细车档由 24 增至 37。
- **503 个 ECR 公开档案索引**：由公开车型搜索 21 页结果去重所得，保存链接、缩略图引用和国家旗标。没有复制登录后字段。
- **369 条图库图片引用，覆盖 58 条记录**：358 个不重复图片 URL；合影可能用于多条车档，含 95 张 ECR 公开低分辨率预览及 1 张试驾视频封面，不等于 369 张不同的高清实车照片。Leclerc／Sainz 各 5 张，BP Green 18 张、Joe Macari 29 张；每张保留来源。
- **4 个完整公开 VIN**：构建时验证格式及唯一性。
- 已复核 RM Sotheby’s 底盘 **297567：USD 17,825,000**、**299827：CHF 5,348,750** 的公布成交结果。
- Leclerc、Sainz、Ramsay、Ronaldo、Ibrahimović、Piero Ferrari、David Lee、Swizz Beatz、Selected Car Collection 等已有档案可搜索。历史收藏关系不代表当前持有人。

**65 与 503 不能相加为实车总数。** 不同来源可能指向同一辆车；未匹配 VIN 的网页编号只代表研究记录。历史条目尚未全量重新核验，在详情页保留核对状态。旧版数百条空白总体占位不再出现在新版数据中。

## 文件结构（Structure）

| 文件 | 用途 |
| --- | --- |
| `index.html` | GitHub Pages 首页 |
| `data/registry.json` | 可编辑的逐车研究数据 |
| `data/source-index.json` | ECR 公开来源索引快照 |
| `assets/app.js` / `assets/style.css` | 搜索、图库、导入导出与页面样式 |
| `assets/i18n.js` | UI 文案、语言状态、可分享的 `?lang=` 链接 |
| `assets/content-i18n.js` | 逐车研究字段的展示层双语翻译；不改写 canonical JSON |
| `assets/data.js` | 构建生成的静态数据包，不手动编辑 |
| `assets/photos/` | 历史版本继承的图片；版权归原权利人 |
| `scripts/build.py` | 数据完整性验证与静态数据包生成 |
| `PUBLIC_SOURCES.md` | 来源目录与研究规则 |
| `RESEARCH_LOG.md` | 本轮更新、去重边界与后续工作 |
| `sp3_atlas.html` / `sp3_atlas_v2.html` | 保留的历史快照，数据不会自动更新 |

## 本地运行与更新（Development）

使用 Python 3；不需要 npm 构建或外部 API key。

```bash
python3 scripts/build.py
python3 -m http.server 8000
```

打开 `http://localhost:8000`。编辑 JSON 后运行构建，再提交源文件与生成的 `assets/data.js`。GitHub Pages 使用 `main` 分支根目录。

## 数据原则（Research rules）

1. VIN／底盘、来源 ID、生产编号分别存储，不互相替代。
2. 同车再次出售时补充原车档；只有颜色相同不足以合并或判定不同实车。
3. 挂牌、估价、公布成交结果分开记录；不自行推断落槌价或佣金口径。
4. 国家是公开来源中的地点／旗标，不等于首次交付配额、车主国籍或居住地。
5. 不以网页完成度或编辑排序权重作为事实正确概率。
6. 不收集非公开车主身份、住宅地址、联系方式或私人行踪。

导入 JSON 按 ID 合并，经过结构和 URL 验证后才写入浏览器。新版内置记录会持续载入，本地覆盖项优先；旧版 `sp3Atlas` 原件保留。导出包含来源和照片引用，CSV 会对公式前缀作转义。搜索同时覆盖 canonical 原文和当前语言的展示译文。

## 图片（Images）

新增图片使用公开来源的外部链接，并保留摄影／发布方信息和来源页。外部链接可能失效；图片失效时仍可打开来源。来源公开不等于开放版权许可，本站不授予这些图片的再使用权。
