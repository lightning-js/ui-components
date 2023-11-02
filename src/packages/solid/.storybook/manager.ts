import { addons, types } from '@storybook/manager-api';
import customTheme from './customTheme';

addons.setConfig({
  theme: customTheme, // setting Storybook theme
  enableShortcuts: false
});
