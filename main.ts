// news-image-20261119 entry: a newspaper front page summing up Thursday, November 19, 2026.
// The poster (entry.png) was composed for this competition: three AI-generated editorial
// illustrations (the Xi-Trump-Putin handshake in Shenzhen, the damaged Crimean Bridge,
// the GTA VI midnight launch in Vice City) with all text rendered in PIL, so no letter
// is ever AI-garbled. The program itself only copies that image to /output/entry.png,
// deterministically, with no network and no randomness.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
if (!existsSync(src)) throw new Error('entry.png is missing next to main.ts');
mkdirSync(outDir, { recursive: true }); // the grader's /output may not exist yet
copyFileSync(src, join(outDir, 'entry.png'));
