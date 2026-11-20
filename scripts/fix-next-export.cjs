const fs = require("node:fs");
const path = require("node:path");

const out = path.join(process.cwd(), "out");
let fixed = 0;

function flatten(dir, parent, parts) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const source = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      flatten(source, parent, [...parts, entry.name]);
    } else if (entry.isFile() && entry.name.endsWith(".txt")) {
      const target = path.join(parent, [...parts, entry.name].join("."));
      fs.copyFileSync(source, target);
      fixed++;
    }
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.name.startsWith("__next.")) {
      flatten(fullPath, dir, [entry.name]);
    } else if (entry.name !== "_next") {
      walk(fullPath);
    }
  }
}

walk(out);
console.log(`Исправлено RSC-файлов: ${fixed}`);