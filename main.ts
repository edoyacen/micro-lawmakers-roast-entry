// This entry writes the answer for the prompt "A satirical line about lawmakers" to the make.fun output directory.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const answer = 'They wrote rules for AI, crypto and the internet, then spent forty minutes in a committee meeting trying to export a PDF.';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
