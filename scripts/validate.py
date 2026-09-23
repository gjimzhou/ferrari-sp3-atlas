#!/usr/bin/env python3
"""Validate the canonical SP3 Atlas research datasets without generating duplicate bundles."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
registry = json.loads((ROOT / 'data/registry.json').read_text())
index = json.loads((ROOT / 'data/source-index.json').read_text())
sources = json.loads((ROOT / 'data/sources.json').read_text())
schema = json.loads((ROOT / 'data/schema/registry.schema.json').read_text())
zh_records = json.loads((ROOT / 'data/i18n/registry.zh.json').read_text())
en_records = json.loads((ROOT / 'data/i18n/registry.en.json').read_text())
zh_text = json.loads((ROOT / 'data/i18n/text.zh.json').read_text())
en_text = json.loads((ROOT / 'data/i18n/text.en.json').read_text())

assert isinstance(registry, list), 'Registry root must be an array'
assert isinstance(index, list), 'Source index root must be an array'
assert schema.get('type') == 'array', 'Registry schema root must describe an array'

item_schema = schema['items']
required_fields = set(item_schema['required'])
allowed_fields = set(item_schema['properties'])
string_fields = {
    key for key, definition in item_schema['properties'].items()
    if definition.get('type') == 'string'
}
optional_string_fields = {'accessed', 'engine_no', 'gearbox_no', 'registration'}
string_fields -= optional_string_fields

assert len({r['id'] for r in registry}) == len(registry), 'Duplicate record ID'
assert len({r['id'] for r in index}) == len(index), 'Duplicate ECR source ID'
assert len({s['id'] for s in sources}) == len(sources), 'Duplicate catalog source ID'
source_by_id = {s['id']: s for s in sources}
for source in sources:
    assert re.fullmatch(r'SRC-[0-9A-F]{8}', source['id']), ('Invalid source ID', source['id'])
    assert isinstance(source.get('label'), str) and ' — ' in source['label'], ('Invalid source label', source)
    assert isinstance(source.get('publisher'), str) and source['publisher'], ('Invalid source publisher', source)
    assert isinstance(source.get('description'), str), ('Invalid source description', source)
    assert isinstance(source.get('url'), str) and source['url'].startswith('https://'), ('Invalid source URL', source)
registry_ids = {r['id'] for r in registry}
for label, pack in (('ZH', zh_records), ('EN', en_records)):
    unknown = sorted(set(pack) - registry_ids)
    assert not unknown, (label, 'Translation pack contains unknown record IDs', unknown)
assert isinstance(zh_text, dict) and isinstance(en_text, dict), 'Text translation packs must be objects'

vins = []
confirmed_vins = []
conflicted_vins = []

for r in registry:
    record_id = r.get('id', '<missing id>')
    missing = sorted(required_fields - set(r))
    unknown = sorted(set(r) - allowed_fields)
    assert not missing, (record_id, 'Missing required fields', missing)
    assert not unknown, (record_id, 'Fields missing from schema', unknown)

    for key in string_fields:
        assert isinstance(r[key], str), (record_id, key, 'must be string')
    for key in optional_string_fields:
        if key in r:
            assert isinstance(r[key], str), (record_id, key, 'must be string')

    assert r['year'] is None or isinstance(r['year'], int), (record_id, 'Invalid year')
    assert isinstance(r['owner_public'], bool), (record_id, 'owner_public must be boolean')
    assert isinstance(r['sort_weight'], (int, float)), (record_id, 'sort_weight must be numeric')
    assert r['tier'] != 'unknown', 'Population placeholders are not research records'
    assert r['record_kind'] in ('profile', 'lead', 'prototype')

    for key in ('options', 'timeline'):
        assert isinstance(r[key], list), (record_id, key, 'must be an array')
        assert all(isinstance(value, str) for value in r[key]), (record_id, key, 'must contain strings')

    assert isinstance(r['photos'], list), (record_id, 'photos must be an array')
    for photo in r['photos']:
        assert isinstance(photo, dict), (record_id, 'Photo must be an object')
        assert set(photo) == {'url', 'source_url', 'caption', 'credit'}, (
            record_id, 'Photo object must have url/source_url/caption/credit'
        )
        assert all(isinstance(photo[key], str) for key in ('url', 'source_url', 'caption', 'credit')), (
            record_id, 'Photo metadata must be strings'
        )
        url = photo['url']
        assert url.startswith('https://') or (
            url.startswith('assets/photos/') and (ROOT / url).is_file()
        ), (record_id, 'Invalid photo', url)
        assert photo['source_url'].startswith('https://'), (record_id, 'Invalid photo source', photo['source_url'])

    assert r['sources']
    for source_id in r['sources']:
        assert isinstance(source_id, str) and re.fullmatch(r'SRC-[0-9A-F]{8}', source_id), (
            record_id, 'Invalid source reference', source_id
        )
        assert source_id in source_by_id, (record_id, 'Missing source catalog entry', source_id)
        label = source_by_id[source_id]['label']
        assert not re.search(r'[\u3400-\u9fff]', label), (
            record_id, 'CJK leaked into canonical source label', label
        )

    if r['vin'].startswith('ZFF'):
        assert re.fullmatch(r'ZFF[A-HJ-NPR-Z0-9]{14}', r['vin']), r['vin']
        vins.append(r['vin'])
        if r.get('vin_conflicted'):
            assert isinstance(r['vin_conflicted'], bool), (record_id, 'vin_conflicted must be boolean')
            assert r['record_kind'] == 'lead', (record_id, 'Conflicted VIN must remain a lead')
            conflicted_vins.append(r['vin'])
        else:
            confirmed_vins.append(r['vin'])

    if 'vin_conflicted' in r:
        assert isinstance(r['vin_conflicted'], bool), (record_id, 'vin_conflicted must be boolean')

    if 'market_events' in r:
        assert isinstance(r['market_events'], list), (record_id, 'market_events must be an array')
        for event in r['market_events']:
            assert isinstance(event, dict), (record_id, 'market event must be an object')
            assert event.get('type') == 'auction_result', (record_id, 'Unsupported market event type')
            assert isinstance(event.get('amount'), (int, float)) and event['amount'] > 0, (
                record_id, 'Invalid market event amount'
            )
            assert event.get('currency') in ('USD', 'CHF', 'EUR', 'GBP'), (
                record_id, 'Invalid market event currency'
            )
            assert isinstance(event.get('source_url'), str) and event['source_url'].startswith('https://'), (
                record_id, 'Invalid market event source'
            )

    if r['record_kind'] == 'prototype':
        assert 'Original 599' not in r['edition']

assert len(vins) == len(set(vins)), 'Duplicate VIN'
referenced_source_ids = {source_id for record in registry for source_id in record['sources']}
assert referenced_source_ids == set(source_by_id), 'Source catalog contains missing or orphan entries'

profile_count = sum(r['record_kind'] == 'profile' for r in registry)
lead_count = sum(r['record_kind'] == 'lead' for r in registry)
prototype_count = sum(r['record_kind'] == 'prototype' for r in registry)
photo_count = sum(len(r.get('photos', [])) for r in registry)
photo_records = sum(bool(r.get('photos')) for r in registry)

readme = (ROOT / 'README.md').read_text()
assert f'**{len(registry)} 条有来源的研究记录**' in readme, 'README total record count is stale'
assert f'{profile_count} 个详细车档、{lead_count} 条待核对线索、{prototype_count} 辆预生产／研发车' in readme, (
    'README record-kind counts are stale'
)
assert f'**{photo_count} 条图库图片引用，覆盖 {photo_records} 条记录**' in readme, 'README photo counts are stale'
assert f'**{len(confirmed_vins)} 个已确认完整公开 VIN + {len(conflicted_vins)} 条来源冲突 VIN lead**' in readme, (
    'README VIN counts are stale'
)

index_html = (ROOT / 'index.html').read_text()
app_js = (ROOT / 'assets/js/app.js').read_text()
ui_i18n = (ROOT / 'assets/i18n.js').read_text()
assert 'assets/data.js' not in index_html, 'Generated data bundle must not return'
assert '<p id="coverageSummary"></p>' in index_html, 'Methods coverage summary must be runtime-generated'
legacy_surface = index_html + '\n' + app_js + '\n' + ui_i18n
for phrase in (
    '无 VIN 的档案可能与其他来源重复',
    '公开地点不代表当前车主居住地',
    '没有 VIN 的车档仍可能与索引重复',
    'Profiles without a VIN may duplicate other sources',
    'A public location does not represent the current owner’s residence',
):
    assert phrase not in legacy_surface, ('Legacy disclaimer returned', phrase)

for r in index:
    assert r['source_url'] == (
        'https://exclusivecarregistry.com/details/ferrari/daytona-sp3/' + r['id'].removeprefix('ECR-')
    )
    assert r['thumbnail'].startswith('https://exclusivecarregistry.com/')
assert len(index) == 503, 'Update snapshot count and page copy when refreshing index'

print(
    f'Validated: {len(registry)} research records, {len(confirmed_vins)} confirmed VINs, '
    f'{len(conflicted_vins)} conflicted VIN leads, {photo_count} photo references, '
    f'{len(index)} public source links.'
)
