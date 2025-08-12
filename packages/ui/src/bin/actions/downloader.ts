import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { repoBaseUrl, utilsBaseUrl, UTILS_FILES } from '../utils/constants.js';
import { ensureComponentDeps } from './ensureComponentDeps.js';
import { injectViveUIStyles } from '../utils/stylesInjector.js';

/**
 * Download a React component from the remote repo and save it locally
 */
export async function downloadComponent(name: string): Promise<void> {
  await ensureComponentDeps(name);

  try {
    const url = `${repoBaseUrl}/${name}.tsx`;
    const res = await fetch(url);

    if (!res.ok) throw new Error(`❌ Component "${name}" not found at ${url}`);

    const text = await res.text();

    const destDir = path.resolve(process.cwd(), 'src', 'components');
    fs.mkdirSync(destDir, { recursive: true });

    injectViveUIStyles();

    const destFile = path.join(destDir, `${name}.tsx`);
    fs.writeFileSync(destFile, text);

    console.log(`✅ Component "${name}" copied to ${destFile} (overwritten if existed)`);
  } catch (error) {
    console.error((error as Error).message);
    process.exit(1);
  }
}

/**
 * Download all utility files from the remote repo
 */
export async function downloadUtils(): Promise<void> {
  const utilsDir = path.resolve(process.cwd(), 'src', 'lib');
  fs.mkdirSync(utilsDir, { recursive: true });

  for (const file of UTILS_FILES) {
    const url = `${utilsBaseUrl}/${file}`;
    const res = await fetch(url);

    if (!res.ok) {
      console.warn(`⚠️ Utils file "${file}" not found at ${url}`);
      continue;
    }

    const text = await res.text();
    const destFile = path.join(utilsDir, file);
    fs.writeFileSync(destFile, text);

    console.log(`📦 Utils file "${file}" copied to ${destFile}`);
  }
}
