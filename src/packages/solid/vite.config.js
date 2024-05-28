/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { importChunkUrl } from '@lightningjs/vite-plugin-import-chunk-url';
import path from 'path';

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
    }),
    importChunkUrl()
  ],
  base: './',
  build: {
    lib: {
      fileName: 'index',
      entry: './index.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: ['theme', 'solid-js', '@lightningjs/solid', '@lightningjs/solid-primitives']
    },
    minify: false,
    sourcemap: true,
    outDir: './dist',
    target: 'esnext',
    polyfillDynamicImport: false
  },
  resolve: {
    alias: {
      theme: path.resolve(__dirname, '../l3-ui-theme-base/theme.js'),
      utils: path.resolve(__dirname, '../../shared/utils/index.ts')
    },
    dedupe: ['solid-js', '@lightningjs/solid']
  },
  server: {
    hmr: false,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  },
  test: {
    /**
     * browser mode causes tests to fail with the following error:
     * SyntaxError: The requested module 'ui-components/node_modules/.pnpm/chalk@3.0.0/node_modules/chalk/source/index.js?v=6d2cbdb3' does not provide an export named 'default'`
     */
    enabled: false,
    headless: false,
    provider: 'playwright',
    name: 'chromium',
    slowHijackESM: false,
    deps: {
      inline: [/solid-js/, /solid-testing-library/],
      optimizer: {
        web: {
          include: ['@lightningjs/solid', '@lightningjs/renderer']
        }
      }
    },
    transformMode: { web: [/\.[jt]sx?$/] },
    globals: true,
    resolve: {
      conditions: ['development', 'browser']
    }
  },
  publicDir: '../../shared/public'
};

export default defineConfig(config);
