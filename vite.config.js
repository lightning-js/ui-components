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

export default defineConfig({
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
    importChunkUrl(),
    solidPlugin({
      solid: {
        moduleName: '@lightningjs/solid',
        generate: 'universal'
      }
    })
  ],
  resolve: {
    alias: {
      theme: '@lightningjs/ui-components-theme-base'
    },
    dedupe: ['solid-js', '@lightningjs/solid', '@lightningjs/renderer']
  },
  server: {
    hmr: false,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  }
});
