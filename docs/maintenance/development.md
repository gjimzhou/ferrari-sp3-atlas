# 开发与发布 / Development

[文档目录](../README.md) · [数据模型](../research/data-model.md)

| 目录 | 唯一职责 |
| --- | --- |
| `data/registry.json` | 逐车研究事实和稳定来源 ID |
| `data/sources.json` / `source-index.json` | 规范化来源与公开检索索引 |
| `data/i18n/` | 展示译文，不改变原始证据 |
| `data/schema/` | 数据约束 |
| `assets/js/` | 页面、数据工具、图库组件 |
| `assets/` | 样式、翻译装载、图片和统计 |
| `leclerc-2022/` | 独立专题入口 |
| `docs/research/` / `history/` / `maintenance/` | 研究规范、历史记录、维护操作 |
| `scripts/` | 数据、双语与链接验证 |

```sh
python3 scripts/validate.py
node scripts/check_content_i18n.mjs
node --check assets/js/app.js
python3 -m http.server 8000
```

打开 `http://localhost:8000`。`main` 通过 `.github/workflows/pages.yml` 发布；无需外部 API key 或前端构建。新增字段先更新 schema；新增事实同时补来源、译文并通过验证。记录 ID、`#car=`、现有栏目 hash 和专题 URL 保持稳定。

`data/` 已按规范数据、译文与 schema 分层，因此保留它的公开路径，不制造重复数据副本。旧 `docs/DATA_MODEL.md` 等路径保留兼容入口。
