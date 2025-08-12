import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { execSync } from 'child_process';

const requireFromModule = createRequire(import.meta.url);

export function isPackageInstalled(pkg: string): boolean {
  let dir = process.cwd();

  while (true) {
    try {
      requireFromModule.resolve(pkg, { paths: [dir] });
      return true;
    } catch {
      const parent = path.dirname(dir);
      if (parent === dir) break;
      dir = parent;
    }
  }

  dir = process.cwd();
  while (true) {
    const nmPath = path.join(dir, 'node_modules', pkg);
    if (fs.existsSync(nmPath)) return true;
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }

  return false;
}

export function installPackages(pkgs: string[]) {
  if (pkgs.length === 0) return;
  console.log(`Installing dependencies: ${pkgs.join(', ')}`);
  execSync(`npm install ${pkgs.join(' ')}`, { stdio: 'inherit' });
}
