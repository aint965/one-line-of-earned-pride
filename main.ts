import { mkdirSync, writeFileSync } from "node:fs";

// One line of earned pride: a boy who has fallen off his bike forty
// times rides past his own house without wobbling, one hand off the
// handlebar, waving at his mother like he'd done it forever.
const line =
  "The boy who had fallen off his bike forty times rode past his own house without wobbling, one hand off the handlebar, waving at his mother like he'd done it forever.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
