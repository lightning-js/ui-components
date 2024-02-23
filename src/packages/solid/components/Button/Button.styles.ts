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

export interface ButtonStyles {
  tone: Tone;
  Container: NodeStyleSet<{ padding: number[] }>;
  Text: TextStyleSet;
}

type ButtonStyleProperties = {
  backgroundColor?: NodeStyles['color'];
  borderRadius?: NodeStyles['borderRadius'];
  contentColor?: NodeStyles['color'];
  justifyContent?: NodeStyles['justifyContent'];
  textAlign?: TextStyles['textAlign'];
  textColor?: TextStyles['color'];
};

type ButtonConfig = ComponentStyleConfig<ButtonStyleProperties>;

/* @ts-expect-error next-line themes are supplied by client applications so this setup is necessary */
const { Button: { styles: themeStyles, defaultTone } = { styles: {}, defaultTone: 'neutral' } } =
  theme?.componentConfig;

const container: ButtonConfig = {
  themeKeys: {
    textAlign: 'textAlign',
    borderRadius: 'borderRadius',
    color: 'backgroundColor',
    justifyContent: 'justifyContent',
    contentColor: 'contentColor'
  },
  base: {
    height: theme.typography.button1.lineHeight + theme.spacer.xl * 2,
    display: 'flex',
    padding: [theme.spacer.xxxl, theme.spacer.xl],
    color: theme.color.interactiveNeutral,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.radius.sm,
    contentColor: theme.color.fillNeutral
  },
  toneModes: {
    focus: {
      color: theme.color.interactiveNeutralFocus,
      contentColor: theme.color.fillInverse
    },
    disabled: {
      color: theme.color.fillNeutralDisabled,
      contentColor: theme.color.textNeutralDisabled
    },
    inverse: {
      color: theme.color.interactiveInverse
    },
    brand: {
      contentColor: theme.color.fillBrand
    },
    'inverse-focus': {
      color: theme.color.interactiveInverseFocus,
      contentColor: theme.color.fillNeutral
    },
    'brand-focus': {
      contentColor: theme.color.fillNeutral
    }
  },
  themeStyles
};

const text: ButtonConfig = {
  themeKeys: {
    color: 'textColor'
  },
  base: {
    textAlign: 'left',
    color: theme.color.textNeutral,
    ...theme.typography.button1
  },
  toneModes: {
    focus: {
      color: theme.color.textInverse
    },
    disabled: {
      color: theme.color.textNeutralDisabled
    },
    'inverse-focus': {
      color: theme.color.textNeutral
    }
  },
  themeStyles
};

const Container = makeComponentStyles<ButtonStyles['Container']>(container);
const Text = makeComponentStyles<ButtonStyles['Text']>(text);

const styles: ButtonStyles = {
  tone: defaultTone,
  Container,
  Text
};

export default styles;
