import inquirer from 'inquirer';
import { downloadComponent, downloadUtils } from './downloader.js';

export const repoBaseUrl = 'https://raw.githubusercontent.com/ktcotz/Vive-UI/main/src/components';

export const SUPPORTED_COMMANDS = ['add'];
export const AVAILABLE_COMPONENTS = ['button'];
export const UTILS_FILES = ['index.ts'];

export const showCommandsHelper = async () => {
  while (true) {
    const { command } = await inquirer.prompt([
      {
        type: 'list',
        name: 'command',
        message: 'Command : ',
        choices: [...SUPPORTED_COMMANDS, new inquirer.Separator(), 'exit'],
      },
    ]);

    if (command === 'exit') {
      console.log('Thanks for using Vive-UI!');
      break;
    }

    if (command === 'add') {
      const { component } = await inquirer.prompt([
        {
          type: 'list',
          name: 'component',
          message: 'Component: ',
          choices: AVAILABLE_COMPONENTS,
        },
      ]);

      await downloadComponent(component);
      await downloadUtils();

      console.log(`Your component: (${component}) will be in components folder.`);
      break;
    }
  }
};
