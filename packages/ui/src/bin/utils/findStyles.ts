import fs from 'fs';
import path from 'path';

export function findAllStyleFiles(dir: string, found: string[] = []): string[] {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);

    if (filePath.includes('node_modules') || file.startsWith('.')) continue;

    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findAllStyleFiles(filePath, found);
    } else if (file.toLowerCase().endsWith('.css')) {
      found.push(filePath);
    }
  }
  return found;
}
