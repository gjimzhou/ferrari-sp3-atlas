# SP3 Atlas · Ferrari Daytona SP3 公开资料库

按车辆查看配置、照片、公开收藏关系与拍卖资料，并沿来源追溯证据。独立研究项目，支持中文与 English。

**[浏览车辆档案 →](https://gjimzhou.github.io/ferrari-sp3-atlas/#registry)** · [English](https://gjimzhou.github.io/ferrari-sp3-atlas/?lang=en) · [阅读指南](docs/reader-guide.md) · [文档导航](docs/README.md)

## 从哪里开始

| 你想做什么 | 打开 |
| --- | --- |
| 找一辆车、VIN 或配置 | [车辆档案](https://gjimzhou.github.io/ferrari-sp3-atlas/#registry) |
| 查公开收藏关系 | [公开车主](https://gjimzhou.github.io/ferrari-sp3-atlas/#owners) |
| 比较公布成交与挂牌 | [拍卖与挂牌](https://gjimzhou.github.io/ferrari-sp3-atlas/#market) |
| 继续调查来源线索 | [公开档案索引](https://gjimzhou.github.io/ferrari-sp3-atlas/#sourceIndex) |
| 理解来源、去重与边界 | [资料与方法](https://gjimzhou.github.io/ferrari-sp3-atlas/#methods) |
| 看独立专题 | [最乐幻想 2022](https://gjimzhou.github.io/ferrari-sp3-atlas/leclerc-2022/) |

## 当前数据覆盖

以下为仓库数据快照，由验证脚本核对关键计数；研究记录不是已确认独立实车总数。

- **139 条有来源的研究记录**：66 个详细车档、71 条待核对线索、2 辆预生产／研发车。
- **503 个 ECR 公开档案索引**；来源档案可能与本站记录重叠。
- **507 条图库图片引用，覆盖 81 条记录**。
- **42 个已确认完整公开 VIN + 1 条来源冲突 VIN lead**。

记录、VIN、来源索引和图片引用是不同口径，**不能相加为车辆总数**。历史收藏关系不代表当前持有人，来源旗标不代表国籍或交付配额；没有证据的字段不靠推测补全。

## 研究与维护

- **研究事实：** `data/registry.json`，逐项关联 `data/sources.json`。规范见[数据模型](docs/research/data-model.md)。
- **公开出处：** [来源目录](docs/research/public-sources.md)；调查过程与待核线索见[研究日志](docs/history/research-log.md)。
- **网站展示：** `index.html`、`assets/`；译文位于 `data/i18n/`，不改写研究原始字段。
- **开发发布：** [本地预览、检查和仓库结构](docs/maintenance/development.md)。`main` 经 Actions 发布 GitHub Pages。

```sh
python3 scripts/validate.py
node scripts/check_content_i18n.mjs
python3 -m http.server 8000
```

本站不是 Ferrari 官方名册，不宣称掌握完整客户车辆台账。图片版权归原权利人；公开可见不等于允许再次使用。外部图片失效时仍可查来源页。

[访问统计说明](docs/maintenance/analytics.md) · [反馈问题](https://github.com/gjimzhou/ferrari-sp3-atlas/issues)
