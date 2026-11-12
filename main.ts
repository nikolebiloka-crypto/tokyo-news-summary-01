// A working news-summary-01 entry (Node 22, standard library only): its summary is the summary.txt beside this file,
// and the program copies it to /output/entry.txt. A starting point, not a winner: rewrite the summary. The gate takes
// UTF-8 text of 1 to 2,000 characters that is not only white space, and the judge reads exactly the bytes copied, so
// write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Copy the reviewed summary verbatim: the judge reads exactly these bytes.
const src = new URL('./summary.txt', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Gate guard: the summary must be UTF-8, 1..2000 chars, not only white space.
const text = readFileSync(src, 'utf8');
if (text.length < 1 || text.length > 2000 || !text.trim()) {
  throw new Error(`summary.txt fails the gate: ${text.length} chars`);
}
copyFileSync(src, join(outDir, 'entry.txt'));
