import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

import { repoBaseUrl, UTILS_FILES } from './helpers.js';

export async function downloadComponent(name: string): Promise<void> {
  try {
    const url = `${repoBaseUrl}/${name}.tsx`;
    const res = await fetch(url);

    if (!res.ok) throw new Error(`Component ${name} not found at ${url}`);

    const text = await res.text();

    const destDir = path.resolve(process.cwd(), 'src', 'components');
    fs.mkdirSync(destDir, { recursive: true });

    const destFile = path.join(destDir, `${name}.tsx`);

    fs.writeFileSync(destFile, text);

    console.log(`Component ${name} został skopiowany do ${destFile} (nadpisany jeśli istniał)`);
  } catch (error) {
    console.error((error as Error).message);
    process.exit(1);
  }
}

export async function downloadUtils() {
  const utilsDir = path.resolve(process.cwd(), 'src', 'utils');
  fs.mkdirSync(utilsDir, { recursive: true });

  for (const file of UTILS_FILES) {
    const url = `https://raw.githubusercontent.com/ktcotz/Vive-UI/main/src/utils/${file}`;
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`Utils file ${file} not found at ${url}`);
      continue;
    }
    const text = await res.text();
    const destFile = path.join(utilsDir, file);
    fs.writeFileSync(destFile, text);
    console.log(`Utils file ${file} copied to ${destFile}`);
  }
}
