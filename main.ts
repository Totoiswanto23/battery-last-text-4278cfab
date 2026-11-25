// The Battery's Last Text to Its Charger — make.fun bounty
// Writes the phone battery's final text to the charger it waited
// for all day. The battery stayed loyal to the end — and the twist
// lands in the last words: the charger was never even plugged in,
// so the battery died for a piece of decoration.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// First-person battery voice, no setup, no dialogue tags, just the
// text itself. The joke turns on loyal devotion meeting total
// neglect: it gave its last 1% to a charger that was only furniture.
const MESSAGE =
  "I waited all day for you, gave you my last 1%, and you weren't even plugged in. I died for a charger that was just decoration.";

if (MESSAGE.includes('\n') || MESSAGE.includes('\r')) {
  console.error('entry must be a single line');
  process.exit(1);
}
if (MESSAGE !== MESSAGE.trim()) {
  console.error('entry must not start or end with whitespace');
  process.exit(1);
}
if (MESSAGE.length < 1 || MESSAGE.length > 200) {
  console.error(`entry must be 1-200 characters, got ${MESSAGE.length}`);
  process.exit(1);
}
if (MESSAGE.trim().length === 0) {
  console.error('entry must not be only whitespace');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), MESSAGE);
console.log(`wrote ${MESSAGE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
console.log(MESSAGE);
