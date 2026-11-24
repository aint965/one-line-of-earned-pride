import { mkdirSync, writeFileSync } from "node:fs";

// One line of earned pride: a boy who has fallen off his bike forty
// times rides past his own house without wobbling, one hand off the
// handlebar, waving at his mother like he'd done it forever.
const line =
  "The boy who had fallen off his bike forty times rode past his own house without wobbling, one hand off the handlebar, waving at his mother like he'd done it forever.";

// The gate: /output/entry.txt must be UTF-8 text, 1 to 240 characters,
// a single line, and not only whitespace. Validate before writing so
// an invalid line fails loudly instead of producing a gated-out file.
const chars = [...line];
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry line must be a single line (no newline characters)");
}
if (chars.length < 1 || chars.length > 240) {
  throw new Error(
    `entry line must be 1 to 240 characters, got ${chars.length}`
  );
}
if (line.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
