/**
 * ConvertKit v4 — Wound Point Tag Manager
 *
 * Usage:
 *   npx tsx scripts/convertkit-tags.ts list
 *   npx tsx scripts/convertkit-tags.ts create
 *   npx tsx scripts/convertkit-tags.ts delete <tagId>
 */

import * as fs from 'fs';
import * as path from 'path';

// Load .env.local / .env
function loadEnv() {
  for (const file of ['.env.local', '.env']) {
    const p = path.join(process.cwd(), file);
    if (!fs.existsSync(p)) continue;
    for (const line of fs.readFileSync(p, 'utf8').split('\n')) {
      const [key, ...rest] = line.split('=');
      if (key && rest.length && !process.env[key.trim()]) {
        process.env[key.trim()] = rest.join('=').trim().replace(/^["']|["']$/g, '');
      }
    }
  }
}

loadEnv();

const API_KEY = process.env.CONVERTKIT_API_KEY;
if (!API_KEY) {
  console.error('❌  CONVERTKIT_API_KEY not set in .env or .env.local');
  process.exit(1);
}

const BASE = 'https://api.kit.com/v4';
const HEADERS = { 'Content-Type': 'application/json', 'X-Kit-Api-Key': API_KEY };

const WOUND_TAGS = [
  { envKey: 'CONVERTKIT_TAG_IDENTITY',  name: 'Identity-Wound'  },
  { envKey: 'CONVERTKIT_TAG_WORTH',     name: 'Worth-Wound'     },
  { envKey: 'CONVERTKIT_TAG_VOICE',     name: 'Voice-Wound'     },
  { envKey: 'CONVERTKIT_TAG_TRUST',     name: 'Trust-Wound'     },
  { envKey: 'CONVERTKIT_TAG_PURPOSE',   name: 'Purpose-Wound'   },
  { envKey: 'CONVERTKIT_TAG_RHYTHM',    name: 'Rhythm-Wound'    },
  { envKey: 'CONVERTKIT_TAG_CONTROL',   name: 'Control-Wound'   },
  { envKey: 'CONVERTKIT_TAG_GRIEF',     name: 'Grief-Wound'     },
  { envKey: 'CONVERTKIT_TAG_RELATIONAL',name: 'Relational-Wound'},
  { envKey: 'CONVERTKIT_TAG_LEGACY',    name: 'Legacy-Wound'    },
];

/* ── API helpers ───────────────────────────────────────────────────── */

async function listAllTags(): Promise<Array<{ id: number; name: string }>> {
  const tags: Array<{ id: number; name: string }> = [];
  let cursor: string | null = null;

  while (true) {
    const url = new URL(`${BASE}/tags`);
    url.searchParams.set('per_page', '100');
    if (cursor) url.searchParams.set('after', cursor);

    const res = await fetch(url.toString(), { headers: HEADERS });
    if (!res.ok) throw new Error(`GET /v4/tags failed: ${res.status} ${await res.text()}`);

    const data = await res.json() as {
      tags: Array<{ id: number; name: string }>;
      pagination: { has_next_page: boolean; end_cursor: string };
    };

    tags.push(...data.tags);
    if (!data.pagination.has_next_page) break;
    cursor = data.pagination.end_cursor;
  }

  return tags;
}

async function createTag(name: string): Promise<{ id: number; name: string }> {
  const res = await fetch(`${BASE}/tags`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ name }),
  });
  if (!res.ok) throw new Error(`POST /v4/tags failed: ${res.status} ${await res.text()}`);
  const data = await res.json() as { tag: { id: number; name: string } };
  return data.tag;
}

async function deleteTag(id: number): Promise<void> {
  const res = await fetch(`${BASE}/tags/${id}`, { method: 'DELETE', headers: HEADERS });
  if (!res.ok && res.status !== 404) {
    throw new Error(`DELETE /v4/tags/${id} failed: ${res.status} ${await res.text()}`);
  }
}

/* ── Commands ──────────────────────────────────────────────────────── */

async function cmdList() {
  const tags = await listAllTags();
  if (!tags.length) { console.log('No tags found.'); return; }

  console.log('\n All ConvertKit Tags\n');
  console.log('  ID         Name');
  console.log('  ─────────  ──────────────────────────');
  for (const t of tags) {
    const wound = WOUND_TAGS.find((w) => w.name === t.name);
    const marker = wound ? ' ← wound tag' : '';
    console.log(`  ${String(t.id).padEnd(10)} ${t.name}${marker}`);
  }
  console.log('');
}

async function cmdCreate() {
  const existing = await listAllTags();
  const existingNames = new Map(existing.map((t) => [t.name, t.id]));

  console.log('\n Creating Wound Point Tags\n');

  const envLines: string[] = [];

  for (const wt of WOUND_TAGS) {
    if (existingNames.has(wt.name)) {
      const id = existingNames.get(wt.name)!;
      console.log(`  ⏭   SKIP  ${wt.name} (already exists — ID: ${id})`);
      envLines.push(`${wt.envKey}=${id}`);
    } else {
      const tag = await createTag(wt.name);
      console.log(`  ✅  CREATE ${wt.name} → ID: ${tag.id}`);
      envLines.push(`${wt.envKey}=${tag.id}`);
    }
  }

  console.log('\n ─────────────────────────────────────────────');
  console.log(' Add these to your .env.local:\n');
  for (const line of envLines) console.log(`  ${line}`);
  console.log('');
}

async function cmdDelete(idArg: string) {
  const id = Number(idArg);
  if (!id || isNaN(id)) {
    console.error('❌  Provide a numeric tag ID: npx tsx scripts/convertkit-tags.ts delete <id>');
    process.exit(1);
  }
  await deleteTag(id);
  console.log(`✅  Deleted tag ${id}`);
}

/* ── Main ──────────────────────────────────────────────────────────── */

const [, , cmd, arg] = process.argv;

(async () => {
  try {
    if (cmd === 'list')   { await cmdList(); }
    else if (cmd === 'create') { await cmdCreate(); }
    else if (cmd === 'delete') { await cmdDelete(arg); }
    else {
      console.log(`
  ConvertKit Tag Manager — Usage:

    npx tsx scripts/convertkit-tags.ts list              List all tags in your account
    npx tsx scripts/convertkit-tags.ts create            Create the 10 wound point tags (skips duplicates)
    npx tsx scripts/convertkit-tags.ts delete <tagId>    Delete a tag by ID
      `);
    }
  } catch (err) {
    console.error('Error:', err instanceof Error ? err.message : err);
    process.exit(1);
  }
})();
