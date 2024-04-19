/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../components/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../docs/*.mdx'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false, // disable background addon
        outline: false, // disable outline addon
        measure: false, // disable measure addon
        viewport: false // disable viewport addon
      }
    },
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
};
export default config;
