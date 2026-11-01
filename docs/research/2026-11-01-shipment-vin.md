# Shipment VIN review — 1 November 2026

## Accepted: 294110

Enigma's public Ferrari imports visualization describes its dataset as U.S. Customs AMS bills-of-lading data. Its openly published data contains record `shipment-3820-0`, dated `20240820`, with the vehicle excerpt **“1 UNIT 2023 FERRARI DAYTONA SP3 ZFF05UMA6P0294110”**. The complete VIN appears in the cargo description itself, independently of the site's parsed `vin` field. It does not occur in the pre-update Atlas.

[Minimal evidence and source-asset checksum](shipment-evidence-294110.json) allow reproduction without republishing private shipper/consignee details. The original bill of lading was not inspected. This has the same evidence limitation as the existing Brazil-bound 288789 shipment record: a public transcription of a real dated shipment, not a factory allocation certificate. The Atlas classifies this documented 2023 production-model car in the original-production cohort. No paint, owner, delivery, sale or present location is inferred.

The source has extraction errors elsewhere, including a supposed VIN made from a chassis suffix and a container identifier. Those parsed fields were not trusted. Only the complete identifier directly present in this vehicle's cargo description was accepted. The VIN check digit passes, but this is a transcription check, not evidence of vehicle existence by itself. Generic illustrations were excluded.

## Unresolved: 312304

[Eximpedia's public cargo excerpt](https://www.eximpedia.app/hs-code/571292) associates `ZFF05UML9S0312304` with a 2025 Daytona SP3 and engine 571292. Although a web fetch returned HTTP 402, the ordinary public browser page displayed the vehicle description without authentication; no access restriction was bypassed. Two identical displayed rows are one candidate, not two cars. The page treats the engine number as a commodity heading, indicating an extraction problem, and exposes neither a shipment date nor a bill identifier. Its linked Ferrari company sample also contains unrelated commodity classifications. Without a dated vehicle document or corroborating manifest, this remains a research candidate and is not added to the registry or numerator. Adjacent supplier/competitor links do not establish an importer or owner.

## Other exclusions

- Enigma has 132 SP3-matching expanded rows, mostly duplicated or incomplete chassis-only descriptions. They are not 132 newly confirmed cars.
- `298275BEAU4164252` is not a Ferrari VIN and was rejected.
- A shipment marked **PROTOTYPE CODE MP6** uses `ZFF86ZHB000260491`; it is not evidence of an original-599 production car.
- JHC00R's public Fordonskollen URL returned 404. No VIN was inferred from other Swedish cars.

The update brings the Atlas to **38/599**, 50 confirmed complete VINs, and 191 research records. The active goal still requires two more newly verified production VIN additions. Its 20-image target was delivered in PR #35.
