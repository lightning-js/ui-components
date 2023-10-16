/** @type { import('storybook-solidjs-vite').StorybookConfig } */

import { mergeConfig } from 'vite';

const config = {
  stories: ['../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: 'storybook-solidjs-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  staticDirs: ['../../../shared/public'],
  viteFinal: async (config, { configType }) => {
    // console.log('PREVIEW VITE');
    // if (configType === 'PRODUCTION') {
    //   mergeConfig(config, {
    //     base: ''
    //     // base: process.cwd(),
    //     // publicDir: '../../shared/public'
    //   });
    // }
    // config.base = process.cwd();
    // config.base = '';
    // config.root = '';
    // config.server.fsServe = undefined;
    // console.log(config.base);
    return config;
  },
};
export default config;
