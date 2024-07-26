<!--
  Copyright 2023 Comcast Cable Communications Management, LLC
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  SPDX-License-Identifier: Apache-2.0
-->

**NOTE: Solid UI has moved to a [new home](https://github.com/rdkcentral/solid-ui)!**

---

# [Archived] Solid UI

This library contains a suite of [themeable](THEMING.md) UI components written for the [SolidJS Lightning](https://github.com/lightning-tv/solid) Framework. check them out in our [storybook docs](https://lightning-js.github.io/ui-components/).

[![npm version](https://img.shields.io/npm/v/@lightningtv%2Fsolid-ui.svg?style=flat)](https://www.npmjs.com/package/@lightningtv/solid-ui)

## Getting Started

If you haven't already, follow the steps found [here](https://github.com/lightning-js/solid) to bootstrap your SolidJS Lightning app. Then:

1. install this package and the base theme with your package manager of choice

```sh
pnpm add @lightningtv/solid-ui @lightningtv/l3-ui-theme-base # or pnpm/yarn
```

2. add the theme package as an alias in your vite config(see the [theming docs](THEMING.md) for more information on this)

```js
// vite.config.js
  resolve: {
    alias: {
      theme: '@lightningtv/l3-ui-theme-base',
    }
  },
```

3. and finally, use a component

```jsx
// App.jsx
import { Button } from '@lightningtv/solid-ui';
<App>
  <Button>a button!</Button>
</App>;
```

## Reporting a Bug

## Development

If you don't have pnpm

```sh
npm install -g pnpm
```

Run the solid storybook dev environment:

```sh
pnpm i
pnpm dev
```

Run the solid sandbox environment:

```sh
pnpm sandbox
```
