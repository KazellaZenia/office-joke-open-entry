import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One-line office joke for the Make the AI Judge Laugh: Office Joke Open.
// The program writes the joke as a single line to entry.txt.
// 82 characters, one line — short on purpose: ties break to fewer bytes.
const JOKE =
  "I muted myself on the call to sigh, and the sigh got transcribed as 'action item'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
