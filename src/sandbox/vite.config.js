import { defineConfig } from 'vite';
import config from '../../vite.config.js';

export default defineConfig({
  ...config,
  publicDir: '../shared/public'
});
