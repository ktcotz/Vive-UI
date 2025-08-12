import inquirer from 'inquirer';
import { AVAILABLE_COMPONENTS } from '../utils/constants.js';
import { downloadComponent, downloadUtils } from '../actions/downloader.js';

export async function addCommand() {
  const { component } = await inquirer.prompt([
    {
      type: 'list',
      name: 'component',
      message: 'Select a component to add:',
      choices: AVAILABLE_COMPONENTS,
    },
  ]);

  await downloadComponent(component);
  await downloadUtils();

  console.log(`✅ Component "${component}" has been added to your project.`);
}
