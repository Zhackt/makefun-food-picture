// Note: entry.png holds JPEG bytes despite the .png name — the picture format comes from the file's contents, not its extension.
// Food-picture entry: this program's only job is to place the entry picture
// where the grader looks for it. The picture is the entry.png file sitting
// next to this script; the program copies it into the output folder.
//
// To try it on your own machine:
//   mkdir -p out
//   MAKEFUN_OUTPUT_DIR=out node main.ts
// The copy then lands at out/entry.png.

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);
copyFileSync(source, join(outputDir, "entry.png"));
