// One original office joke, one line, written out for the house judge.
import * as fs from "node:fs";
import * as path from "node:path";

const JOKE_TEXT =
  "HR asked for anonymous feedback, then replied to mine with 'Thanks, Dave' — I am not Dave.";

function main(): void {
  const text = JOKE_TEXT;
  if (text.length < 1 || text.length > 200 || text.includes("\n") || text.trim() === "") {
    throw new Error(`entry joke fails the 1-200 single-line gate (${text.length} chars)`);
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(dir, { recursive: true });
  const target = path.join(dir, "entry.txt");
  fs.writeFileSync(target, text, "utf8");
  if (fs.readFileSync(target, "utf8") !== text) {
    throw new Error("entry.txt round-trip check failed");
  }
}

main();
