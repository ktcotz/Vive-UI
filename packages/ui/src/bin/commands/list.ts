import { AVAILABLE_COMPONENTS } from '../utils/constants.js';

export async function listCommand() {
  console.log('📦 Available components:');
  AVAILABLE_COMPONENTS.forEach((c) => console.log(` - ${c}`));
}
