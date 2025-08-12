import inquirer from 'inquirer';
import { isPackageInstalled, installPackages } from '../utils/packageUtils.js';

const componentDependencies: Record<string, string[]> = {
  button: ['clsx', '@radix-ui/react-slot', 'tailwind-merge', 'class-variance-authority'],
};

export async function ensureComponentDeps(componentName: string) {
  const deps = componentDependencies[componentName] || [];
  const toInstall = deps.filter((dep) => !isPackageInstalled(dep));

  if (toInstall.length === 0) {
    console.log(`✅ All dependencies for "${componentName}" are already installed.`);
    return;
  }

  const { confirmInstall } = await inquirer.prompt({
    type: 'confirm',
    name: 'confirmInstall',
    message: `The component "${componentName}" requires missing dependencies: ${toInstall.join(', ')}. Install now?`,
    default: true,
  });

  if (confirmInstall) {
    installPackages(toInstall);
  } else {
    console.log('⏩ Skipping dependency installation.');
  }
}
