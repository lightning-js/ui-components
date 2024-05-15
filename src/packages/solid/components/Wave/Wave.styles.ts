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

import theme from 'theme';
import { makeComponentStyles } from '../../utils/index.js';
import type { WaveConfig, WaveStyles } from './Wave.types.js';

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Wave: { defaultTone, ...waveThemeStyles } = { styles: {} } } = theme?.componentConfig;
/* @ts-expect-error next-line see above */
const { Surface: { surfaceDefaultTone, ...surfaceThemeStyles } = { styles: {} } } = theme?.componentConfig;

const container: WaveConfig = {
  themeKeys: {
    gap: 'itemSpacing'
  },
  base: {
    gap: theme.spacer.sm,
    flexDirection: 'row',
    display: 'flex',
    height: theme.spacer.sm * 7,
    width: theme.spacer.sm * 10
  },
  modes: {
    focus: {},
    disabled: {}
  },
  tones: {
    inverse: {},
    brand: {}
  },
  // TODO: figure out checked state
  themeStyles: {
    ...surfaceThemeStyles,
    ...waveThemeStyles
  }
};

const rectangles: WaveConfig = {
  themeKeys: {
    borderRadius: 'radius',
    color: 'color'
  },
  base: {
    width: theme.spacer.sm,
    color: theme.color.fillNeutral,
    mountY: 0.5
  },
  modes: {
    focus: {},
    disabled: {}
  },
  tones: {
    inverse: { color: theme.color.fillInverse },
    brand: { color: theme.color.fillBrand }
  },
  themeStyles: {
    ...surfaceThemeStyles,
    ...waveThemeStyles
  }
};

const Container = makeComponentStyles<WaveStyles['Container']>(container);
const Rectangles = makeComponentStyles<WaveStyles['Rectangles']>(rectangles);

const styles: WaveStyles = {
  tone: defaultTone || surfaceDefaultTone || 'neutral',
  Container,
  Rectangles
};

export default styles;
