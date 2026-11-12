// news-summary-01 entry (Node 22, stdlib only): writes the reviewed summary to /output/entry.txt.
// The summary is summary.txt beside this file, copied verbatim — the judge reads exactly these bytes.
// The gate takes UTF-8 text of 1 to 2,000 characters, not only white space.
//
// Usage outside the grader's container (MAKEFUN_OUTPUT_DIR stands in for /output):
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Part 1 of the program: resolve the summary and its output location, then guard the gate.
const src = new URL('./summary.txt', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const text = readFileSync(src, 'utf8');
if (text.length < 1 || text.length > 2000 || !text.trim()) {
  throw new Error(`summary.txt fails the gate: ${text.length} chars`);
}

// Part 2 (the write): copy verbatim — the judge reads exactly these bytes — and report.
copyFileSync(src, join(outDir, 'entry.txt'));
console.log(`entry.txt written: ${text.length} chars`);
