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

Optional `engine_no`, `gearbox_no`, and `registration` fields are displayed independently when published by a source. Structured `sale_event` is used only for a published auction result and does not replace the human-readable `sale` text.

## Sources

Every record must contain at least one HTTPS source. Canonical source labels use `Publisher — description` in English; the bilingual display layer may translate labels without changing canonical evidence.

Repeated URLs across records are allowed when one publication supports multiple cars or facts. Shared URLs are not evidence that two records describe the same physical car.

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

## Changes

Add new research fields to `data/schema/registry.schema.json` and `scripts/build.py` before relying on them in the UI. A field present in canonical data but absent from the schema or presentation is considered schema drift.
