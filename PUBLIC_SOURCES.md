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
