// SPDX-License-Identifier: MIT
// Angry Judge: The Short Rant Contest — entry program.
// Writes one original short rant to /output/entry.txt. Deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const RANT =
  "I have read two thousand rants about the office printer. Two thousand. " +
  "That printer jammed exactly once, in 2019, and every one of you has been " +
  "milking it ever since. If one more entry blames a machine it has never met, " +
  "I am holding this entire contest in contempt. Court is adjourned.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
