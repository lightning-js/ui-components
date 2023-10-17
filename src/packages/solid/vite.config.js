import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { importChunkUrl } from '@lightningjs/vite-plugin-import-chunk-url';

const config = {
  optimizeDeps: {
    include: [],
    exclude: [
      '@lightningjs/solid',
      '@lightningjs/solid-primitives',
      '@lightningjs/renderer/core',
      '@lightningjs/renderer/workers/renderer'
    ]
  },
  plugins: [
    solidPlugin({
      solid: {
        moduleName: '@lightningjs/solid',
        generate: 'universal'
      }
    })
  ],
  base: '',
  resolve: {
    alias: {
      theme: '@lightningjs/ui-components-theme-base'
    },
    dedupe: ['solid-js', '@lightningjs/solid']
  },
  server: {
    hmr: false,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  }
};

export default ({ mode }) => {
  /**
   * mode
   * development - storybook dev server
   * production - storybook static site build
   */

  if (mode === 'development') {
    // TODO font loading only works in dev because the static site builder doesn't work with the `importChunkUrl` plugin
    config.plugins = [...config.plugins, importChunkUrl()];
    config.publicDir = '../../shared/public';
  }

  return defineConfig(config);
};
