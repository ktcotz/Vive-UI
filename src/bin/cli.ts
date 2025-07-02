#!/usr/bin/env node

import fs from "fs";
import path from "path";
import fetch from "node-fetch";

const [, , command, componentName] = process.argv;

console.log(command, componentName);

if (command !== "add" || !componentName) {
  console.error("Usage: npx vive-ui add <ComponentName>");
  process.exit(1);
}

const repoBaseUrl =
  "https://raw.githubusercontent.com/ktcotz/Vive-UI/main/src/components";

async function downloadComponent(name: string): Promise<void> {
  //   try {
  const url = `${repoBaseUrl}/${name}.tsx`;

  console.log(url);

  const res = await fetch(url);

  console.log(res);
  //     if (!res.ok) throw new Error(`Component ${name} not found at ${url}`);

  //     const text = await res.text();

  //     const destDir = path.resolve(process.cwd(), "src", "components", "viveui");
  //     fs.mkdirSync(destDir, { recursive: true });

  //     const destFile = path.join(destDir, `${name}.tsx`);
  //     fs.writeFileSync(destFile, text);

  //     console.log(`Component ${name} copied to ${destFile}`);
  //   } catch (error) {
  //     console.error((error as Error).message);
  //     process.exit(1);
  //   }
}

downloadComponent(componentName);
