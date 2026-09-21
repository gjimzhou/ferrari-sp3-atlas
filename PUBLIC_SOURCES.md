# 公开来源与图片目录（Public Sources）

2026-09-21 更新：完整逐车链接见 [registry.json](data/registry.json)，503 个 ECR 公开档案入口见 [source-index.json](data/source-index.json)。索引不代表已完成逐车去重，不能与本站车档相加。

## 本轮扩充的图库

- [Leclerc：Ferrari / Carscoops 配置讲解图](https://www.carscoops.com/2024/09/charles-leclerc-shows-off-his-new-monaco-themed-ferrari-daytona-sp3/)
- [Leclerc：Ferrari 官方视频](https://www.youtube.com/watch?v=g2FGkhxZd48)
- [Sainz：交付与 Smooth Operator 细节](https://www.thesupercarblog.com/ex-ferrari-f1-driver-carlos-sainz-takes-delivery-of-a-4-million-daytona-sp3/)
- RM Sotheby’s 三辆车采用各自 lot 的原始图库（21 / 32 / 47 张），逐张保留原始摄影署名。
- DK Engineering 2400 的 14 张经销商图库，逐张保留来源页。

以下为历史来源目录，链接不表示本轮已逐项重新核验。

# Public Sources and Image Directory

This page is an intentionally link-heavy research index. Links can go stale; the underlying source and access date should be preserved when a record is promoted into the atlas.

## Ferrari — primary sources

- [Ferrari Daytona SP3 press release (PDF)](https://cdn.ferrari.com/cms/network/media/pdf/cs_ferrari_daytona_sp3_gbr.pdf)
- [Ferrari: exclusive Tailor Made Daytona SP3 for charity auction](https://www.ferrari.com/en-CY/corporate/articles/ferrari-unveils-an-exclusive-tailor-made-daytona-sp3)
- [Ferrari Magazine: The Golden Era of Closed Wheel Racing](https://www.ferrari.com/en-US/magazine/articles/the-golden-era-of-closed-wheel-racing)
- [Ferrari media portal](https://media.ferrari.com/)

## RM Sotheby's — auction records and photography

### 2023 Giallo Triplo Strato example — chassis ZFF05UMA0P0297567

- [Lot page](https://rmsothebys.com/auctions/mo26/lots/v0003-2023-ferrari-daytona-sp3/)
- [Front three-quarter photo](https://cdn.rmsothebys.com/d/f/1/c/3/a/df1c3a31dd3f5c2831ae8981173cd705b1ff5b95.webp)
- [Rear three-quarter photo](https://cdn.rmsothebys.com/8/3/b/9/e/6/83b9e6e86126f726e63209eef9156cb7c115a7e4.webp)

### 2024 Rosso Deborah / Blu Elettrico example — chassis ZFF05UMB000299827

- [Lot page](https://rmsothebys.com/auctions/id25/lots/r0019-2024-ferrari-daytona-sp3/)
- [Front three-quarter photo](https://cdn.rmsothebys.com/7/a/7/a/2/1/7a7a211007d1f8c13828e1e5938aef2c2a04dd79.webp)
- [Rear three-quarter photo](https://cdn.rmsothebys.com/f/9/c/9/a/a/f9c9aa300f4705945935e54ee882bf6c648f9376.webp)

## Broad Arrow

- [2023 Ferrari Daytona SP3 — Concorso d'Eleganza Villa d'Este Auction](https://www.broadarrowauctions.com/vehicles/ve26_r0090/2023-ferrari-daytona-sp3)
- [Classic Driver mirror / market record](https://www.classicdriver.com/en/car/ferrari/daytona-sp3/2023/1107072)

## DK Engineering

- [Ferrari Daytona SP3 — Bianco Italia / Blu Tour de France / Giallo Modena](https://www.dkeng.co.uk/ferrari-sales/2400/blue_chip_competition_cars/ferrari_daytona_sp3.html)
- [DK Engineering 2026 catalogue PDF](https://www.dkeng.co.uk/booklets/pdf/Cavallino-Booklet-2026-jan_low_res.pdf)

## Collecting Cars

- [Ferrari Daytona SP3 model archive / auction index](https://collectingcars.com/makes/Ferrari/4/Daytona-SP3/34066)

## duPont REGISTRY / dealer-publication records

- [230-mile Bianco Italia Daytona SP3 offered by Carrio Motor Cars](https://news.dupontregistry.com/blogs/for-sale/230-mile-2023-ferrari-daytona-sp3-for-sale-at-carrior-motor-cars)
- [Ferrari of Central New Jersey — Blu Laguna Daytona SP3](https://news.dupontregistry.com/blogs/ferrari-news/ferrari-central-new-jersey-daytona)
- [Ferrari of Central New Jersey — Tailor Made Daytona SP3 delivery coverage](https://news.dupontregistry.com/blogs/dealer-news/ferrari-of-central-new-jersey-delivers-tailor-made-daytona-sp3)
- [227-mile Giallo Triplo Strato Daytona SP3 auction preview](https://news.dupontregistry.com/blogs/auctions/227-mile-ferrari-daytona-sp3-giallo-triplo-strato-heads-to-monterey-with-a-12-million-estimate)

## Classic Driver

- [2025 Tailor Made Daytona SP3 charity-auction market record](https://www.classicdriver.com/en/car/ferrari/daytona-sp3/2025/1067319)

## Image-linking convention

For externally hosted images:

- retain the original publisher's page URL next to the image URL;
- never remove attribution;
- prefer hotlinks or source-page links over re-uploading copyrighted photography;
- do not infer an owner or identity from an image alone;
- record a confidence tier and source type separately from descriptive notes.

## Suggested record schema

```json
{
  "id": "public-record-id",
  "chassis": "only-if-explicitly-published",
  "spec": {
    "exterior": "",
    "interior": "",
    "wheels": "",
    "calipers": ""
  },
  "public_events": [],
  "public_sales": [],
  "photos": [
    {
      "url": "https://...",
      "source_page": "https://...",
      "publisher": "Publisher name",
      "caption": "",
      "rights_note": "Externally hosted public-source image"
    }
  ],
  "sources": [
    {
      "url": "https://...",
      "type": "official|auction|dealer|press|community",
      "accessed": "YYYY-MM-DD"
    }
  ]
}
```


## 2026-09-21 第二轮来源

- Rosso Libano / Blu Elettrico — Joe Macari：[Joe Macari](https://www.joemacari.com/stock/ferrari-daytona-sp3/10005173)；[Joe Macari syndicated specification](https://www.supercartrader.com/ferrari-daytona-sp3-3927)
- Black / White — Beverly Hills tuxedo spec：[@paid2shoot / Ferrari Beverly Hills / duPont REGISTRY](https://news.dupontregistry.com/blogs/ferrari-news/ferrari-beverly-hills-shows-off-a-stunning-ferrari-daytona-sp3-spec)
- White / Red — Ferrari of Atlanta：[Ferrari of Atlanta / duPont REGISTRY](https://news.dupontregistry.com/blogs/ferrari-news/ferrari-of-atlanta-displays-daytona-sp3)
- Rosso Corsa / Blue — Central Florida：[Ferrari of Central Florida / duPont REGISTRY](https://news.dupontregistry.com/blogs/ferrari-news/ferrari-of-central-florida-shows-off-a-rosso-corsa-daytona-sp3)
- Red / Red cabin — Lake Forest：[Ferrari Lake Forest / duPont REGISTRY](https://news.dupontregistry.com/blogs/daytona-sp3/ferrari-lake-forest-daytona-sp3)
- Blu Lucido Carbon / Zaffiro — Miller Motorcars：[Miller Motorcars / duPont REGISTRY](https://news.dupontregistry.com/blogs/daytona-sp3/miller-motorcars-ferrari-daytona-sp3)
- Rosso Magma / Oro Jeans Aunde — Miller Motorcars：[@carsthatlookneat / Miller Motorcars / duPont REGISTRY](https://news.dupontregistry.com/blogs/dealer-news/miller-motorcars-shows-off-three-ultra-rare-ferrari-daytona-sp3-specs)
- Swizz Beatz — Black / Red：[Ferrari of Fort Lauderdale / duPont REGISTRY](https://news.dupontregistry.com/blogs/articles/ferrari-of-fort-lauderdale-delivers-a-stealthy-daytona-sp3-hypercar-to-swizz-beatz)
- Rosso Portofino / Bianco Avus — Selected Car Collection：[Shmee150 / duPont REGISTRY](https://news.dupontregistry.com/blogs/ferrari-news/shmee150-drive-ferrari-daytona-sp3)；[Shmee150 original collection video](https://www.youtube.com/watch?v=S7uxr4LWp64)
- Rosso Formula 1 2007 — PFS / XPEL：[Protective Film Solutions / XPEL / duPont REGISTRY](https://news.dupontregistry.com/blogs/sponsored/preserving-a-modern-icon-ferrari-daytona-sp3-protected-by-xpel)
- White SP3 — Exotics at Dania Pointe：[Ferrari of Fort Lauderdale / duPont REGISTRY](https://news.dupontregistry.com/blogs/ferrari-news/ferrari-fort-lauderdale-daytona-sp3)
