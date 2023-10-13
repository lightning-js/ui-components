import { defineConfig } from 'vite';
import config from '../../../vite.config';

export default defineConfig({
  ...config,
  publicDir: '../shared/public'
});
