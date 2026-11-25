// Make the AI Judge Laugh entry: writes one fixed joke about office life.
// Craft: a true office observation (the printer only jams on urgent jobs)
// with a surprise final turn — the printer is not broken, it is management.
// The grader provides /output; MAKEFUN_OUTPUT_DIR redirects it for local runs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "The office printer only jams when the document is urgent, which is how I found out it reports directly to my manager.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke, "utf8");
