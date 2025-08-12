import fs from 'fs';
import path from 'path';
import url from 'url';
import { findAllStyleFiles } from './findStyles.js';

interface ThemeSection {
  fullMatch: string;
  innerContent: string;
  index: number;
  length: number;
}

function parseThemeVariables(themeContent: string): Record<string, string> {
  const vars: Record<string, string> = {};
  const varRegex = /(--[\w-]+)\s*:\s*([^;]+);/g;
  let match: RegExpExecArray | null;
  while ((match = varRegex.exec(themeContent)) !== null) {
    vars[match[1]] = match[2].trim();
  }
  return vars;
}

function extractThemeSection(content: string): ThemeSection | null {
  const themeRegex = /@theme\s*\{([\s\S]*?)\}/m;
  const match = content.match(themeRegex);
  if (match) {
    return {
      fullMatch: match[0],
      innerContent: match[1],
      index: match.index ?? 0,
      length: match[0].length,
    };
  }
  return null;
}

export function injectViveUIStyles(): void {
  const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const userProjectRoot: string = process.cwd();

  const viveStylesPath: string = path.resolve(__dirname, '../src/style/style.css');

  if (!fs.existsSync(viveStylesPath)) {
    console.error(`❌ Could not find ${viveStylesPath} in vive-ui package`);
    return;
  }

  const viveStyles: string = fs.readFileSync(viveStylesPath, 'utf-8');
  const styleFiles: string[] = findAllStyleFiles(userProjectRoot);

  const viveThemeSection: ThemeSection | null = extractThemeSection(viveStyles);
  const viveThemeVars: Record<string, string> = viveThemeSection
    ? parseThemeVariables(viveThemeSection.innerContent)
    : {};

  if (styleFiles.length > 0) {
    styleFiles.forEach((filePath: string) => {
      let content: string = fs.readFileSync(filePath, 'utf-8');
      const existingTheme: ThemeSection | null = extractThemeSection(content);

      if (!existingTheme) {
        if (!content.includes(viveStyles.trim())) {
          fs.appendFileSync(filePath, `\n${viveStyles}`);
          console.log(`✅ Vive UI styles appended to ${filePath}`);
        } else {
          console.log(`ℹ️ Vive UI styles already exist in ${filePath}`);
        }
      } else {
        const existingVars: Record<string, string> = parseThemeVariables(
          existingTheme.innerContent
        );

        const varsToAdd: [string, string][] = Object.entries(viveThemeVars).filter(
          ([key]) => !(key in existingVars)
        );

        if (varsToAdd.length === 0) {
          console.log(`ℹ️ All Vive UI theme variables already exist in ${filePath}`);
          return;
        }

        const newThemeContentLines: string[] = [
          ...existingTheme.innerContent
            .trim()
            .split('\n')
            .map((line) => line.trim()),
          ...varsToAdd.map(([key, val]) => `  ${key}: ${val};`),
        ];

        const newThemeSection: string = `@theme {\n${newThemeContentLines.join('\n')}\n}`;

        content =
          content.slice(0, existingTheme.index) +
          newThemeSection +
          content.slice(existingTheme.index + existingTheme.length);

        fs.writeFileSync(filePath, content);
        console.log(`✅ Merged Vive UI theme variables into ${filePath}`);
      }
    });
  } else {
    const defaultPath: string = path.join(userProjectRoot, 'src', 'style', 'style.css');
    fs.mkdirSync(path.dirname(defaultPath), { recursive: true });
    fs.writeFileSync(defaultPath, viveStyles);
    console.log(`✅ Created ${defaultPath} with Vive UI styles`);
  }
}
