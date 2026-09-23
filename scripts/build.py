#!/usr/bin/env python3
"""Validate editable research data and build the static browser bundle."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
registry = json.loads((ROOT / 'data/registry.json').read_text())
index = json.loads((ROOT / 'data/source-index.json').read_text())

REQUIRED_FIELDS = (
    'id', 'title', 'tier', 'year', 'vin', 'chassis', 'edition', 'country', 'city',
    'market', 'owner', 'exterior', 'color', 'interior', 'wheels', 'calipers',
    'mileage', 'status', 'sale', 'program', 'options', 'timeline', 'notes',
    'photos', 'credits', 'sources', 'review_status', 'record_kind',
    'owner_public', 'sort_weight', 'photo_sources', 'photo_captions',
)
STRING_FIELDS = (
    'id', 'title', 'tier', 'vin', 'chassis', 'edition', 'country', 'city',
    'market', 'owner', 'exterior', 'color', 'interior', 'wheels', 'calipers',
    'mileage', 'status', 'sale', 'program', 'notes', 'review_status',
)
OPTIONAL_STRING_FIELDS = ('accessed', 'engine_no', 'gearbox_no', 'registration')
TEXT_ARRAY_FIELDS = ('options', 'timeline', 'photos', 'credits', 'photo_sources', 'photo_captions')

assert isinstance(registry, list), 'Registry root must be an array'
assert isinstance(index, list), 'Source index root must be an array'
assert len({r['id'] for r in registry}) == len(registry), 'Duplicate record ID'
assert len({r['id'] for r in index}) == len(index), 'Duplicate source ID'

vins = []
confirmed_vins = []
conflicted_vins = []

for r in registry:
    missing = [key for key in REQUIRED_FIELDS if key not in r]
    assert not missing, (r.get('id', '<missing id>'), 'Missing required fields', missing)
    for key in STRING_FIELDS:
        assert isinstance(r[key], str), (r['id'], key, 'must be string')
    for key in OPTIONAL_STRING_FIELDS:
        if key in r:
            assert isinstance(r[key], str), (r['id'], key, 'must be string')
    assert r['year'] is None or isinstance(r['year'], int), (r['id'], 'Invalid year')
    assert isinstance(r['owner_public'], bool), (r['id'], 'owner_public must be boolean')
    assert isinstance(r['sort_weight'], (int, float)), (r['id'], 'sort_weight must be numeric')
    assert r['tier'] != 'unknown', 'Population placeholders are not research records'
    assert r['record_kind'] in ('profile', 'lead', 'prototype')

    for key in TEXT_ARRAY_FIELDS:
        assert isinstance(r[key], list), (r['id'], key, 'must be an array')
        assert all(isinstance(value, str) for value in r[key]), (r['id'], key, 'must contain strings')

    assert r['sources']
    for source in r['sources']:
        assert isinstance(source, list) and len(source) == 2, (r['id'], 'Invalid source tuple', source)
        label, url = source
        assert isinstance(label, str) and isinstance(url, str) and url.startswith('https://'), (
            r['id'], 'Invalid source tuple', source
        )
        assert ' — ' in label, (r['id'], 'Nonstandard source label', label)
        assert not re.search(r'[\u3400-\u9fff]', label), (
            r['id'], 'CJK leaked into canonical source label', label
        )

    assert len(r['photos']) == len(r['photo_sources']) == len(r['photo_captions']) == len(r['credits']), (
        r['id'], 'Missing photo metadata'
    )
    for photo in r['photos']:
        assert photo.startswith('https://') or (
            photo.startswith('assets/photos/') and (ROOT / photo).is_file()
        ), (r['id'], 'Invalid photo', photo)

    if r['vin'].startswith('ZFF'):
        assert re.fullmatch(r'ZFF[A-HJ-NPR-Z0-9]{14}', r['vin']), r['vin']
        vins.append(r['vin'])
        if r.get('vin_conflicted'):
            assert isinstance(r['vin_conflicted'], bool), (r['id'], 'vin_conflicted must be boolean')
            assert r['record_kind'] == 'lead', (r['id'], 'Conflicted VIN must remain a lead')
            conflicted_vins.append(r['vin'])
        else:
            confirmed_vins.append(r['vin'])

    if 'vin_conflicted' in r:
        assert isinstance(r['vin_conflicted'], bool), (r['id'], 'vin_conflicted must be boolean')

    if 'sale_event' in r:
        event = r['sale_event']
        assert isinstance(event, dict), (r['id'], 'sale_event must be an object')
        assert event.get('type') == 'auction_result', (r['id'], 'Unsupported sale_event type')
        assert isinstance(event.get('amount'), (int, float)) and event['amount'] > 0, (
            r['id'], 'Invalid sale_event amount'
        )
        assert event.get('currency') in ('USD', 'CHF', 'EUR', 'GBP'), (
            r['id'], 'Invalid sale_event currency'
        )
        assert isinstance(event.get('source_url'), str) and event['source_url'].startswith('https://'), (
            r['id'], 'Invalid sale_event source'
        )

    if r['record_kind'] == 'prototype':
        assert 'Original 599' not in r['edition']

assert len(vins) == len(set(vins)), 'Duplicate VIN'

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
app_js = (ROOT / 'assets/app.js').read_text()
ui_i18n = (ROOT / 'assets/i18n.js').read_text()
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

serialize = lambda value: json.dumps(value, ensure_ascii=False, separators=(',', ':')).replace('<', '\\u003c')
(ROOT / 'assets/data.js').write_text(
    '// Generated by scripts/build.py; edit data/*.json instead.\n'
    + 'const bundled=' + serialize(registry) + ';\n'
    + 'const sourceIndex=' + serialize(index) + ';\n'
)
print(
    f'Validated: {len(registry)} research records, {len(confirmed_vins)} confirmed VINs, '
    f'{len(conflicted_vins)} conflicted VIN leads, {len(index)} public source links.'
)
