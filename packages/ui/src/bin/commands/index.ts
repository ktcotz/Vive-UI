import inquirer from 'inquirer';
import { addCommand } from './add';
import { listCommand } from './list';
import { helpCommand } from './help';

export async function runCLI() {
  while (true) {
    const { command } = await inquirer.prompt([
      {
        type: 'list',
        name: 'command',
        message: 'Choose a command:',
        choices: [
          { name: 'Add a component', value: 'add' },
          { name: 'List available components', value: 'list' },
          { name: 'Help', value: 'help' },
          new inquirer.Separator(),
          { name: 'Exit', value: 'exit' },
        ],
      },
    ]);

    if (command === 'exit') {
      console.log('Thanks for using Vive-UI!');
      break;
    }

    switch (command) {
      case 'add':
        await addCommand();
        break;
      case 'list':
        await listCommand();
        break;
      case 'help':
        await helpCommand();
        break;
      default:
        console.log('Unknown command');
    }
  }
}
