import type { Preview } from '@storybook/react-vite';
import './../src/dist/styles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    options: {
      storySort: {
        order: ['Intro', ['HelloFromTeamViveUI', 'InstallationGuide']],
      },
    },
  },
};

export default preview;
