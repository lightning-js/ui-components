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
import type { TextStyles, NodeStyles } from '@lightningjs/solid';
import theme from 'theme';
import type { Tone } from '../../types/types.js';
import type { ComponentStyleConfig, NodeStyleSet, TextStyleSet } from '../../types/types.js';
import { makeComponentStyles } from '../../utils/index.js';

export type KeySizes = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export type KeySize = keyof KeySizes;

export interface KeyStyles {
  tone: Tone;
  Container: NodeStyleSet<{ padding: number[] }>;
  Text: TextStyleSet;
}

export type KeyStyleProperties = {
  backgroundColor?: NodeStyles['color'];
  borderRadius?: NodeStyles['borderRadius'];
  keySpacing?: number;
  contentColor?: NodeStyles['color'];
  justifyContent?: NodeStyles['justifyContent'];
  textAlign?: TextStyles['textAlign'];
  textColor?: TextStyles['color'];
  baseWidth?: NodeStyles['width'];
  sizes?: KeySizes;
};

export type KeyConfig = ComponentStyleConfig<KeyStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Key: { styles: themeStyles, defaultTone } = { styles: {}, defaultTone: 'neutral' } } =
  theme?.componentConfig;

const container: KeyConfig = {
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
const text: KeyConfig = {
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

const Container = makeComponentStyles<KeyStyles['Container']>(container);
const Text = makeComponentStyles<KeyStyles['Text']>(text);

const styles: KeyStyles = {
  tone: defaultTone,
  Container,
  Text
};

export default styles;
