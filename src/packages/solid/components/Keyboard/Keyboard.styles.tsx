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
import type { NodeStyles } from '@lightningjs/solid';
import type { KeyConfig } from '../Key/Key.styles.js';
import type { KeyStyle } from '../Key/Key.styles.js';

export interface KeyboardStyle {
  tone: Tone;
  Container: NodeStyleSet<{ padding: number[] }>;
  Key: NodeStyleSet;
  Text: TextStyleSet;
}

export type KeyboardStyleProperties = {
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
    marginX: 'marginX'
  },
  base: {
    keySpacing: theme.spacer.md,
    screenW: theme.layout.screenW,
    marginX: theme.layout.marginX,
    height: 100
  },
  toneModes: {},
  themeStyles
};

const key: KeyConfig = {
  themeKeys: {
    keySpacing: 'keySpacing',
    textAlign: 'textAlign',
    borderRadius: 'borderRadius',
    color: 'backgroundColor',
    justifyContent: 'justifyContent',
    baseWidth: 'baseWidth',
    sizes: 'sizes'
  },
  base: {
    keySpacing: theme.spacer.md,
    height: theme.spacer.md * 9,
    paddingX: theme.spacer.md,
    sizes: {
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4,
      xxl: 5
    },
    padding: [theme.spacer.xxxl, theme.spacer.xl],
    baseWidth: theme.spacer.md * 7,
    color: theme.color.interactiveNeutral,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.radius.sm
  },
  toneModes: {
    focus: {
      color: theme.color.interactiveNeutralFocus
    },
    disabled: {
      color: theme.color.fillNeutralDisabled
    },
    inverse: {
      color: theme.color.interactiveInverse
    },
    'inverse-focus': { color: theme.color.interactiveInverseFocus }
  },
  themeStyles
};

const text: KeyboardConfig = {
  themeKeys: {
    color: 'textColor',
    contentColor: 'contentColor'
  },
  base: {
    textAlign: 'left',
    color: theme.color.textNeutral,
    contentColor: theme.color.fillNeutral,
    ...theme.typography.headline2
  },
  toneModes: {
    focus: {
      color: theme.color.textInverse,
      contentColor: theme.color.fillInverse
    },
    disabled: {
      color: theme.color.textNeutralDisabled,
      contentColor: theme.color.fillNeutralDisabled
    },
    'inverse-focus': {
      color: theme.color.textNeutral,
      contentColor: theme.color.fillNeutral
    },
    'brand-focus': {
      contentColor: theme.color.fillNeutral
    }
  },
  themeStyles
};

const Container = makeComponentStyles<KeyboardStyle['Container']>(container);
const Key = makeComponentStyles<KeyStyle['Container']>(key);
const Text = makeComponentStyles<KeyboardStyle['Text']>(text);

const styles: KeyboardStyle = {
  tone: tone,
  Container,
  Key: { Key },
  Text
};

export default styles;
