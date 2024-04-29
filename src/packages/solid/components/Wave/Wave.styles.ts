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

import type { BorderStyleObject, NodeStyles } from '@lightningjs/solid';
import theme from 'theme';
import type { Tone } from '../../types/types.js';
import type { ComponentStyleConfig, NodeStyleSet } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';
import type { Color } from 'types';

export interface WaveStyles {
  tone: Tone;
  Container: NodeStyleSet;
  Rectangles: NodeStyleSet;
}

type WaveStyleProperties = {
  backgroundColor?: NodeStyles['color'];
  duration?:  number;
  keyframes?: number[];
  radius?: NodeStyles['borderRadius'];
  repeat?: number;
  itemSpacing?: NodeStyles['itemSpacing'];
}

type WaveConfig = ComponentStyleConfig<WaveStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Wave: { defaultTone, ...waveThemeStyles } = { styles: {} } } = theme?.componentConfig;

const container: WaveConfig = {
  themeKeys: {
    borderRadius: 'radius',
    color: 'backgroundColor',
    gap: 'itemSpacing',
  },
  base: {
    gap: theme.spacer.sm,
    flexDirection: 'row',
    display: 'flex',
    height: theme.spacer.sm * 5
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
  themeStyles: waveThemeStyles
};

const rectangles: WaveConfig = {
  themeKeys: {
    borderRadius: 'radius',
    color: 'backgroundColor',
    gap: 'itemSpacing',
  },
  base: {
    width: theme.spacer.sm,
    height: 100,
    color: theme.color.fillNeutral,
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
  themeStyles: waveThemeStyles
};

const Container = makeComponentStyles<WaveStyles['Container']>(container);
const Rectangles = makeComponentStyles<WaveStyles['Rectangles']>(rectangles);

const styles: WaveStyles = {
  tone: defaultTone || 'neutral',
  Container,
  Rectangles
};

export default styles;
