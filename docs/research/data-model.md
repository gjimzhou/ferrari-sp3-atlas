# SP3 Atlas data model

The repository is a research database first and a static website second. `data/registry.json` is the canonical per-car research dataset; presentation code must not invent or silently upgrade evidence.

## Identity

- `id` is the Atlas record identifier.
- `vin` is a complete public VIN when one is actually published; otherwise it remains empty or explicitly unconfirmed.
- `chassis`, `engine_no`, `gearbox_no`, and `registration` are separate provenance fields. They must never be substituted for one another.
- A source-conflicted VIN remains a `lead` until an independent per-car source resolves the conflict.

## Evidence layers

`tier` describes the strongest source class represented by the record. `record_kind` describes how complete the Atlas record is:

- `profile`: sufficiently evidenced detailed vehicle dossier.
- `lead`: useful public evidence that is not yet enough for a detailed profile.
- `prototype`: pre-production or development vehicle kept outside the customer-allocation count.

A record can have a public VIN and still remain a lead.

## Provenance fields

Optional `engine_no`, `gearbox_no`, and `registration` fields are displayed independently when published by a source. Structured `market_events[]` stores published auction results and does not replace the human-readable `sale` summary.

## Sources

`data/sources.json` is the canonical source catalog. Each vehicle record stores stable source IDs such as `SRC-1A2B3C4D`; the catalog stores the canonical label, publisher, description, and HTTPS URL.

Source IDs are deterministic hashes of the exact canonical label + URL pair. Reusing the same citation across several cars therefore reuses one source entry, while the frontend resolves IDs back into human-readable links.

Repeated URLs with different labels remain separate entries because the label carries research context. Shared sources are not evidence that two records describe the same physical car.

## Photos

Each photo is one atomic object:

```json
{
  "url": "https://…",
  "source_url": "https://…",
  "caption": "Auction gallery · 1",
  "credit": "© Courtesy of …"
}
```

Keeping the URL, evidence page, caption, and credit together prevents index-alignment errors. Legacy browser-import data that still uses parallel photo arrays is normalized at runtime for backward compatibility.

## Market events

Structured auction results use `market_events[]` rather than a singular sale object. This allows one chassis to accumulate multiple public auction or market events over time without overwriting history. The human-readable `sale` field remains a presentation summary.

## Changes

Add new research fields to `data/schema/registry.schema.json` and `scripts/validate.py` before relying on them in the UI. A field present in canonical data but absent from the schema or presentation is considered schema drift.

### Photo rights and source-only slots

A photo with an empty `url` is a source-page-only reference, not a broken image.
Its `source_url`, `caption` and `credit` remain populated. Local copies require
evidence in `data/photo-rights.json`; see `PHOTO-RIGHTS.md`. The 507 gallery
references include these source-only slots and do not imply 507 licensed images.
