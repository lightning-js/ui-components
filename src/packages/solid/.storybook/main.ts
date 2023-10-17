/** @type { import('storybook-solidjs-vite').StorybookConfig } */

const config = {
  stories: ['../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: 'storybook-solidjs-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
};
export default config;
