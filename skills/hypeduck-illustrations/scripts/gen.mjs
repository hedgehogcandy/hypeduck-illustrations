#!/usr/bin/env node
// HypeDuck 오리 일러스트 생성기
// usage: node gen.mjs <shots.json> [번호...]   — 번호 지정 시 해당 샷만 (재)생성
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const LOGO = path.join(HERE, '..', 'assets', 'hypeduck-logo.png')
const MODEL = 'google/gemini-3-pro-image'

function apiKey() {
  if (process.env.OPENROUTER_API_KEY) return process.env.OPENROUTER_API_KEY
  // fallback: OPENROUTER_API_KEY=... in ./.env or ~/.hypeduck.env
  for (const f of ['.env', path.join(process.env.HOME || '', '.hypeduck.env')]) {
    try {
      const m = fs.readFileSync(f, 'utf8').match(/OPENROUTER_API_KEY=(\S+)/)
      if (m) return m[1]
    } catch {}
  }
  throw new Error('OPENROUTER_API_KEY 필요 — export OPENROUTER_API_KEY=sk-or-... (또는 ./.env, ~/.hypeduck.env)')
}

const DNA = `Generate one standalone 16:9 horizontal Korean article illustration.

Visual DNA:
Pure white background. Minimalist black hand-drawn line art. Slightly wobbly pen lines. Lots of empty white space. Sparse red/orange/blue handwritten KOREAN annotations (Hangul, 2-4 words each, at most 4 labels total). Clean absurd product-sketch feeling. No gradients, no shadows, no paper texture, no complex background, no commercial vector style, no PPT infographic look, no children's illustration, no realistic UI.

Recurring IP character required:
A small chubby duck mascot whose FACE must match the attached reference logo image: bright yellow (#FFD400) round head and body with a thin black hand-drawn outline, flat orange (#FF8A00) beak, two large black oval eyes with small white highlights, tiny pink blush cheeks, one small feather tuft on top of the head, tiny thin black legs. Flat solid yellow fill, no gradients or gloss. The duck is the ONLY element with large colored fill — everything else in the scene stays black thin-line art on white. The duck must perform the core conceptual action, not decorate the scene. Keep the duck deadpan, serious, slightly bizarre — a hardworking absurd worker, not a cute sticker.`

const TAIL = `Color use:
Black for main line art. Yellow/orange only for the duck character itself. Orange for main flow/path/arrows. Red only for key warnings/problems/results. Blue only for secondary notes or system state.

Constraints:
One image explains only one core structure. Keep the main subject around 40%-60% of the canvas. Preserve at least 35% blank white space. All handwritten labels must be in KOREAN (Hangul), spelled exactly as given — do not invent extra text, do not write any Chinese or English words. Do not write a title in the top-left corner. Do not make it a formal diagram, course slide, or dense explainer. It should be clear but not instructional, interesting but not childish, strange but clean.`

const [specPath, ...pickArgs] = process.argv.slice(2)
if (!specPath) { console.error('usage: node gen.mjs <shots.json> [번호...]'); process.exit(1) }
const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'))
const pick = pickArgs.map(Number)
const targets = spec.shots.filter((_, i) => !pick.length || pick.includes(i + 1))
fs.mkdirSync(spec.outDir, { recursive: true })
const KEY = apiKey()
const logoB64 = fs.readFileSync(LOGO).toString('base64')

async function gen(shot) {
  const prompt = `${DNA}

Theme:
${shot.theme}

Structure type:
${shot.structure}

Core idea:
${shot.core}

Composition:
${shot.composition}

Korean handwritten labels (exact spelling, nothing else):
${shot.labels}

${TAIL}`
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: MODEL,
      messages: [{ role: 'user', content: [
        { type: 'text', text: prompt + '\n\nThe attached image is the duck mascot logo — match the duck face (eyes, beak, blush, colors) to it.' },
        { type: 'image_url', image_url: { url: `data:image/png;base64,${logoB64}` } },
      ] }],
      modalities: ['image', 'text'],
      image_config: { aspect_ratio: '16:9' },
    }),
  })
  const j = await res.json()
  const url = j.choices?.[0]?.message?.images?.[0]?.image_url?.url
  if (!url) throw new Error(`no image for ${shot.file}: ${JSON.stringify(j).slice(0, 400)}`)
  const b64 = url.split(',')[1]
  fs.writeFileSync(path.join(spec.outDir, shot.file), Buffer.from(b64, 'base64'))
  console.log(`OK ${shot.file} (${Math.round(b64.length * 0.75 / 1024)}KB)`)
}

for (const shot of targets) {
  try { await gen(shot) }
  catch (e) { console.error(`RETRY ${shot.file}: ${e.message.slice(0, 200)}`); await gen(shot) }
}
