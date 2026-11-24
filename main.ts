// Office Joke Open entry: one original one-line joke about office life.
// The program writes exactly that line (and nothing else) to
// $MAKEFUN_OUTPUT_DIR/entry.txt, where the house judge reads it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "HR asked for anonymous feedback, then replied to mine with 'Thanks, Dave' — I am not Dave.";

// The sealed gate only accepts UTF-8 text of 1 to 200 characters, a single
// line, not blank. Refuse to ship anything outside it.
function checkJoke(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`joke is ${line.length} chars, outside the 1-200 gate`);
  }
  if (line.includes("\n") || line.trim().length === 0) {
    throw new Error("joke must be a single non-blank line");
  }
}

checkJoke(JOKE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
