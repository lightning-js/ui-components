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
import path from 'path';
import config from '../../vite.config';

export default defineConfig({
  ...config,
  resolve: {
    alias: {
      theme: path.resolve(__dirname, '../packages/l3-ui-theme-base/theme.js'),
      utils: path.resolve(__dirname, '../shared/utils/index.ts'),
      '@lightningjs/solid-ui': path.resolve(__dirname, '../packages/solid/index.ts')
    },
    // breaks without this for some reason
    dedupe: ['solid-js', '@lightningjs/solid', '@lightningjs/renderer']
  },
  publicDir: '../shared/public'
});
