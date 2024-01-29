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
import type { Tone } from 'types';
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';
import { type KeyProps } from '../Key/Key.jsx';

export type KeyboardFormat = Array<Array<string | Record<string, KeyProps>>>;

export interface KeyboardStyle {
  tone: Tone;
  Container: NodeStyleSet<{ padding: number[] }>;
  Text: TextStyleSet;
}

type KeyboardStyleProperties = {
  keySpacing?: NodeStyles['keySpacing'];
  screenW?: NodeStyles['screenW'];
  marginX?: NodeStyles['marginX'];
};

type KeyboardConfig = ComponentStyleConfig<KeyboardStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Keyboard: { styles: themeStyles, tone } = { styles: {}, tone: 'neutral' } } = theme?.componentConfig;

const container: KeyboardConfig = {
  themeKeys: {
    keySpacing: 'keySpacing',
    screenW: 'screenW',
    marginX: 'marginX',
  },
  base: {
    keySpacing: theme.spacer.md,
    screenW: theme.layout.screenW,
    marginX: theme.layout.marginX
  },
  toneModes: {},
  themeStyles
};

const Container = makeComponentStyles<KeyboardStyle['Container']>(container);

const styles: KeyboardStyle = {
  tone: tone,
  Container
};

export default styles;
