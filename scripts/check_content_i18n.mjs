#!/usr/bin/env node
/**
 * Static bilingual coverage audit for the display-only registry translation layer.
 * No external dependencies.
 */
import fs from 'node:fs';
import vm from 'node:vm';

const registry = JSON.parse(fs.readFileSync(new URL('../data/registry.json', import.meta.url), 'utf8'));
const translationSource = fs.readFileSync(new URL('../assets/content-i18n.js', import.meta.url), 'utf8');

const context = {
  window: {},
  document: {documentElement: {lang: 'zh-CN'}},
  console
};
vm.createContext(context);
vm.runInContext(translationSource, context, {filename: 'assets/content-i18n.js'});

const api = context.window.SP3Content;
if (!api || typeof api.value !== 'function') {
  throw new Error('SP3Content translation API did not initialize');
}

const fields = [
  'title','edition','country','city','market','owner','exterior','interior','wheels',
  'calipers','mileage','status','sale','program','notes','review_status',
  'options','timeline','photo_captions'
];
const longNarrativeFields = new Set([
  'notes','timeline','options','status','review_status','city','market','owner',
  'exterior','interior','wheels','mileage','program'
]);
const hasCJK = value => /[\u3400-\u9fff]/.test(String(value ?? ''));
const isWordyEnglish = value => {
  const s = String(value ?? '').trim();
  return !hasCJK(s) && /[A-Za-z]/.test(s) && s.split(/\s+/).length >= 5;
};

const failures = [];
for (const record of registry) {
  for (const key of fields) {
    const raw = record[key];
    const english = api.value(record, key, 'en');
    const chinese = api.value(record, key, 'zh');

    const raws = Array.isArray(raw) ? raw : [raw];
    const ens = Array.isArray(english) ? english : [english];
    const zhs = Array.isArray(chinese) ? chinese : [chinese];

    if (Array.isArray(raw) && (ens.length !== raw.length || zhs.length !== raw.length)) {
      failures.push(`${record.id} ${key}: translated array length changed`);
    }

    ens.forEach((value, index) => {
      if (hasCJK(value)) {
        failures.push(`${record.id} ${key}[${index}]: Chinese text leaked into English mode: ${value}`);
      }
    });

    if (longNarrativeFields.has(key)) {
      zhs.forEach((value, index) => {
        if (value === raws[index] && isWordyEnglish(value)) {
          failures.push(`${record.id} ${key}[${index}]: long English text is untranslated in Chinese mode: ${value}`);
        }
      });
    }
  }

  for (const [label] of record.sources || []) {
    const english = api.text(label, 'en');
    const chinese = api.text(label, 'zh');
    if (hasCJK(english)) {
      failures.push(`${record.id} source label: Chinese text leaked into English mode: ${english}`);
    }
    if (!hasCJK(chinese)) {
      failures.push(`${record.id} source label: missing Chinese translation: ${label}`);
    }
  }

  for (const credit of api.value(record, 'credits', 'en') || []) {
    if (hasCJK(credit)) {
      failures.push(`${record.id} credit: Chinese text leaked into English mode: ${credit}`);
    }
  }
}

if (failures.length) {
  console.error(`Bilingual coverage audit failed with ${failures.length} issue(s):`);
  failures.forEach(item => console.error(' - ' + item));
  process.exit(1);
}

console.log(`Bilingual coverage audit passed: ${registry.length} registry records checked in EN and ZH.`);
